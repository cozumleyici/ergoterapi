<?php
/**
 * Ergoterapi Randevu Bildirim Servisi
 * Form verilerini alır -> E-posta (Gmail) gönderir + Telegram'a anlık bildirim atar
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['ok' => false, 'error' => 'Method not allowed']));
}

// ─── AYARLAR ─────────────────────────────────────────────────────────────
define('NOTIFICATION_EMAIL', 'ergoterapimail@gmail.com');
define('TG_TOKEN',           '8643642855:AAGDm3OBpARCcCnMLKQ7R7IR2eKtCaIYxHc');
define('TG_CHAT_ID',         '6219303494');
// ─────────────────────────────────────────────────────────────────────────

// Gelen veriyi oku (JSON veya Form Data)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name      = trim($data['name'] ?? '');
$phone     = trim($data['phone'] ?? '');
$email     = trim($data['email'] ?? '');
$city      = trim($data['city'] ?? '');
$condition = trim($data['condition'] ?? '');
$message   = trim($data['message'] ?? '');
$targetMail = !empty($data['target_email']) ? trim($data['target_email']) : NOTIFICATION_EMAIL;

if (empty($name) || empty($phone)) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Lütfen ad soyad ve telefon alanlarını doldurunuz.']));
}

$dateStr = date('d.m.Y H:i');
$userIp  = $_SERVER['REMOTE_ADDR'] ?? 'Bilinmiyor';

// ─── 1. E-POSTA GÖNDERİMİ (HTML) ─────────────────────────────────────────
$subject = "=?UTF-8?B?" . base64_encode("🔔 Yeni Randevu Başvurusu: {$name} ({$city})") . "?=";

$body = "
<!DOCTYPE html>
<html lang='tr'>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-top: 5px solid #ff6b00; }
    .header { background: #141419; color: #ffffff; padding: 24px; text-align: center; }
    .header h2 { margin: 0; font-size: 22px; color: #ff6b00; }
    .content { padding: 24px; }
    .row { display: flex; padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 15px; }
    .label { font-weight: 600; width: 140px; color: #4a5568; }
    .value { flex: 1; color: #1a202c; }
    .msg-box { background: #f8fafc; border-left: 4px solid #6366f1; padding: 12px; margin-top: 15px; border-radius: 4px; font-style: italic; }
    .footer { text-align: center; font-size: 12px; color: #a0aec0; padding: 15px; background: #fafafa; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>🧠 Ergoterapi.com.tr - Randevu Talebi</h2>
    </div>
    <div class='content'>
      <div class='row'><div class='label'>👤 Ad Soyad:</div><div class='value'><strong>" . htmlspecialchars($name) . "</strong></div></div>
      <div class='row'><div class='label'>📞 Telefon:</div><div class='value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></div></div>
      <div class='row'><div class='label'>✉️ E-posta:</div><div class='value'>" . (!empty($email) ? "<a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a>" : "Belirtilmedi") . "</div></div>
      <div class='row'><div class='label'>📍 Şehir:</div><div class='value'>" . htmlspecialchars($city) . "</div></div>
      <div class='row'><div class='label'>🎯 Destek Alanı:</div><div class='value'>" . htmlspecialchars($condition ?: 'Genel Değerlendirme') . "</div></div>
      <div class='row'><div class='label'>🕒 Başvuru Tarihi:</div><div class='value'>" . $dateStr . "</div></div>
      " . (!empty($message) ? "
      <div style='margin-top:15px;'>
        <strong>📝 Danışan Mesajı:</strong>
        <div class='msg-box'>" . nl2br(htmlspecialchars($message)) . "</div>
      </div>" : "") . "
    </div>
    <div class='footer'>
      Bu mesaj ergoterapi.com.tr randevu formu üzerinden otomatik olarak gönderilmiştir. (IP: {$userIp})
    </div>
  </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: ergoterapi.com.tr Randevu <noreply@ergoterapi.com.tr>\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: {$email}\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($targetMail, $subject, $body, $headers);


// ─── 2. TELEGRAM ANLIK BİLDİRİMİ ──────────────────────────────────────────
$tgMessage = "📋 *Yeni Randevu Başvurusu Geldi!*\n\n";
$tgMessage .= "👤 *Ad Soyad:* " . $name . "\n";
$tgMessage .= "📞 *Telefon:* `" . $phone . "`\n";
if (!empty($email)) {
    $tgMessage .= "✉️ *E-posta:* " . $email . "\n";
}
$tgMessage .= "📍 *Şehir:* " . $city . "\n";
if (!empty($condition)) {
    $tgMessage .= "🎯 *Alan:* " . $condition . "\n";
}
if (!empty($message)) {
    $tgMessage .= "📝 *Mesaj:* " . $message . "\n";
}
$tgMessage .= "\n🕒 *Tarih:* " . $dateStr;

sendTelegramNotification($tgMessage);

function sendTelegramNotification($text) {
    if (empty(TG_TOKEN) || empty(TG_CHAT_ID)) return;
    $url = "https://api.telegram.org/bot" . TG_TOKEN . "/sendMessage";
    $payload = [
        'chat_id'                  => TG_CHAT_ID,
        'text'                     => $text,
        'parse_mode'               => 'Markdown',
        'disable_web_page_preview' => true,
    ];
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_exec($ch);
    curl_close($ch);
}

// ─── SONUÇ ────────────────────────────────────────────────────────────────
echo json_encode([
    'ok'        => true,
    'message'   => 'Randevu talebiniz başarıyla alındı.',
    'mail_sent' => $mailSent
]);
