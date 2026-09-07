/**
 * cities.js — Türkiye'nin 81 İli için Ergoterapi Verisi
 * ergoterapi.com.tr subdomain sistemi
 */

const CITIES_DATA = {
  adana: {
    name: "Adana", slug: "adana", region: "Akdeniz",
    population: "2.27 milyon", plate: "01",
    clinicCount: "15+", therapistCount: "35+",
    description: "Adana'da ergoterapi hizmetleri, çocuklardan yetişkinlere geniş bir yelpazede sunulmaktadır. Özellikle serebral palsi, otizm spektrum bozukluğu ve inme rehabilitasyonu alanlarında uzman ergoterapistler aktif olarak çalışmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "İnme Rehabilitasyonu", "El Terapisi"],
    emoji: "🌶️"
  },
  adiyaman: {
    name: "Adıyaman", slug: "adiyaman", region: "Güneydoğu Anadolu",
    population: "638 bin", plate: "02",
    clinicCount: "5+", therapistCount: "10+",
    description: "Adıyaman'da ergoterapi hizmetleri, rehabilitasyon merkezleri ve hastaneler bünyesinde verilmektedir. Nörolojik rehabilitasyon ve çocuk gelişimi konularında uzman kadro mevcuttur.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "⛰️"
  },
  afyonkarahisar: {
    name: "Afyonkarahisar", slug: "afyonkarahisar", region: "İç Anadolu",
    population: "740 bin", plate: "03",
    clinicCount: "6+", therapistCount: "12+",
    description: "Afyonkarahisar'da ergoterapi hizmetleri başta çocuk gelişimi ve geriatrik rehabilitasyon olmak üzere çeşitli alanlarda sunulmaktadır.",
    specialties: ["Geriatrik Ergoterapi", "Çocuk Gelişimi"],
    emoji: "🌙"
  },
  agri: {
    name: "Ağrı", slug: "agri", region: "Doğu Anadolu",
    population: "554 bin", plate: "04",
    clinicCount: "4+", therapistCount: "8+",
    description: "Ağrı'da ergoterapi hizmetleri devlet hastanesi ve özel klinikler aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  aksaray: {
    name: "Aksaray", slug: "aksaray", region: "İç Anadolu",
    population: "437 bin", plate: "68",
    clinicCount: "5+", therapistCount: "9+",
    description: "Aksaray'da ergoterapi hizmetleri, özellikle otizm ve DEHB tanılı çocuklara yönelik programlar kapsamında verilmektedir.",
    specialties: ["Otizm Terapisi", "DEHB", "Duyu Bütünleme"],
    emoji: "🗺️"
  },
  amasya: {
    name: "Amasya", slug: "amasya", region: "Karadeniz",
    population: "346 bin", plate: "05",
    clinicCount: "4+", therapistCount: "8+",
    description: "Amasya'da ergoterapi alanında uzman terapistler, çocuk ve yetişkin rehabilitasyonu konularında hizmet vermektedir.",
    specialties: ["Pediatrik Ergoterapi", "El Rehabilitasyonu"],
    emoji: "🏛️"
  },
  ankara: {
    name: "Ankara", slug: "ankara", region: "İç Anadolu",
    population: "5.78 milyon", plate: "06",
    clinicCount: "80+", therapistCount: "200+",
    description: "Türkiye'nin başkenti Ankara, ergoterapi alanında en gelişmiş altyapıya sahip şehirler arasındadır. Hacettepe Üniversitesi başta olmak üzere üniversite hastaneleri, büyük rehabilitasyon merkezleri ve özel kliniklerde 200'ü aşkın uzman ergoterapist görev yapmaktadır. Otizm, DEHB, inme, Parkinson ve el rehabilitasyonu gibi tüm uzmanlık alanlarında kapsamlı hizmet sunulmaktadır.",
    specialties: ["Tüm Uzmanlık Alanları", "Robotik Rehabilitasyon", "Nörogelişimsel Terapi"],
    emoji: "🏛️"
  },
  antalya: {
    name: "Antalya", slug: "antalya", region: "Akdeniz",
    population: "2.69 milyon", plate: "07",
    clinicCount: "45+", therapistCount: "110+",
    description: "Türkiye'nin turizm başkenti Antalya'da, uluslararası standartlarda ergoterapi hizmetleri sunulmaktadır. Çocuk ergoterapisi, nörolojik rehabilitasyon ve el terapisi alanlarında güçlü bir uzmanlık havuzu bulunmaktadır. Yabancı dil bilen ergoterapistler de mevcut olup, uluslararası hastalara da hizmet verilmektedir.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "Uluslararası Hizmet"],
    emoji: "🌊"
  },
  ardahan: {
    name: "Ardahan", slug: "ardahan", region: "Doğu Anadolu",
    population: "100 bin", plate: "75",
    clinicCount: "2+", therapistCount: "4+",
    description: "Ardahan'da temel ergoterapi hizmetleri devlet hastaneleri bünyesinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "❄️"
  },
  artvin: {
    name: "Artvin", slug: "artvin", region: "Karadeniz",
    population: "171 bin", plate: "08",
    clinicCount: "3+", therapistCount: "6+",
    description: "Artvin'de ergoterapi hizmetleri hastane ve rehabilitasyon merkezleri aracılığıyla ulaşılabilmektedir.",
    specialties: ["Geriatrik Ergoterapi", "Çocuk Gelişimi"],
    emoji: "🌲"
  },
  aydin: {
    name: "Aydın", slug: "aydin", region: "Ege",
    population: "1.14 milyon", plate: "09",
    clinicCount: "18+", therapistCount: "42+",
    description: "Aydın'da ergoterapi hizmetleri, özellikle çocuk nörogelişimi ve yaşlı bakımı alanlarında güçlü kadroyla sunulmaktadır.",
    specialties: ["Nörogelişimsel Terapi", "Geriatrik Bakım", "El Terapisi"],
    emoji: "🍋"
  },
  balikesir: {
    name: "Balıkesir", slug: "balikesir", region: "Marmara",
    population: "1.25 milyon", plate: "10",
    clinicCount: "20+", therapistCount: "48+",
    description: "Balıkesir'de ergoterapi, geniş bir klinik ağıyla çocuklardan yaşlılara tüm bireyler için erişilebilir durumdadır.",
    specialties: ["Pediatrik Ergoterapi", "İnme Rehabilitasyonu"],
    emoji: "⚓"
  },
  bartin: {
    name: "Bartın", slug: "bartin", region: "Karadeniz",
    population: "200 bin", plate: "74",
    clinicCount: "3+", therapistCount: "6+",
    description: "Bartın'da ergoterapi hizmetleri kamu ve özel sektörde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🌿"
  },
  batman: {
    name: "Batman", slug: "batman", region: "Güneydoğu Anadolu",
    population: "621 bin", plate: "72",
    clinicCount: "7+", therapistCount: "15+",
    description: "Batman'da ergoterapi hizmetleri, çocuk gelişimi ve nörolojik rehabilitasyon odaklı sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🦇"
  },
  bayburt: {
    name: "Bayburt", slug: "bayburt", region: "Karadeniz",
    population: "83 bin", plate: "69",
    clinicCount: "2+", therapistCount: "3+",
    description: "Bayburt'ta ergoterapi hizmetleri devlet hastanesi bünyesinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  bilecik: {
    name: "Bilecik", slug: "bilecik", region: "Marmara",
    population: "230 bin", plate: "11",
    clinicCount: "3+", therapistCount: "7+",
    description: "Bilecik'te ergoterapi hizmetleri sunulmakta olup, ildeki rehabilitasyon merkezleri ve özel kliniklerde uzman kadro çalışmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "⚙️"
  },
  bingol: {
    name: "Bingöl", slug: "bingol", region: "Doğu Anadolu",
    population: "289 bin", plate: "12",
    clinicCount: "3+", therapistCount: "6+",
    description: "Bingöl'de ergoterapi hizmetleri, özellikle çocuk gelişimi alanında aktif olarak sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi"],
    emoji: "🌸"
  },
  bitlis: {
    name: "Bitlis", slug: "bitlis", region: "Doğu Anadolu",
    population: "344 bin", plate: "13",
    clinicCount: "3+", therapistCount: "6+",
    description: "Bitlis'te temel ergoterapi hizmetleri mevcut sağlık altyapısı içinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏯"
  },
  bolu: {
    name: "Bolu", slug: "bolu", region: "Batı Karadeniz",
    population: "332 bin", plate: "14",
    clinicCount: "6+", therapistCount: "13+",
    description: "Bolu'da ergoterapi, başta nörolojik rehabilitasyon ve yaşlı bakımı olmak üzere kapsamlı hizmetler sunulmaktadır.",
    specialties: ["Nörolojik Rehabilitasyon", "Geriatrik Ergoterapi"],
    emoji: "🌲"
  },
  burdur: {
    name: "Burdur", slug: "burdur", region: "Akdeniz",
    population: "274 bin", plate: "15",
    clinicCount: "4+", therapistCount: "9+",
    description: "Burdur'da ergoterapi hizmetleri kamu ve özel sektörde çeşitli alanlarda sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Terapisi"],
    emoji: "🦢"
  },
  bursa: {
    name: "Bursa", slug: "bursa", region: "Marmara",
    population: "3.21 milyon", plate: "16",
    clinicCount: "55+", therapistCount: "140+",
    description: "Türkiye'nin dördüncü büyük şehri Bursa, ergoterapi alanında güçlü bir altyapıya sahiptir. Uludağ Üniversitesi Tıp Fakültesi başta olmak üzere pek çok özel ve kamu kurumunda deneyimli ergoterapistler çalışmaktadır. Çocuk ergoterapisi, inme rehabilitasyonu ve el terapisi gibi tüm alanlarda uzman hizmet mevcuttur.",
    specialties: ["Pediatrik Ergoterapi", "İnme Rehabilitasyonu", "El Terapisi"],
    emoji: "🌿"
  },
  canakkale: {
    name: "Çanakkale", slug: "canakkale", region: "Marmara",
    population: "566 bin", plate: "17",
    clinicCount: "8+", therapistCount: "18+",
    description: "Çanakkale'de ergoterapi hizmetleri, hem çocuk hem yetişkin rehabilitasyonu alanlarında uzman kadroyla sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Fiziksel Rehabilitasyon"],
    emoji: "⚔️"
  },
  cankiri: {
    name: "Çankırı", slug: "cankiri", region: "İç Anadolu",
    population: "198 bin", plate: "18",
    clinicCount: "3+", therapistCount: "6+",
    description: "Çankırı'da ergoterapi hizmetleri devlet ve özel sektörde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🌾"
  },
  corum: {
    name: "Çorum", slug: "corum", region: "Karadeniz",
    population: "535 bin", plate: "19",
    clinicCount: "7+", therapistCount: "15+",
    description: "Çorum'da ergoterapi hizmetleri, özellikle çocuk gelişimi ve nörolojik rehabilitasyon alanlarında aktif olarak yürütülmektedir.",
    specialties: ["Çocuk Ergoterapisi", "Nörolojik Rehabilitasyon"],
    emoji: "🏺"
  },
  denizli: {
    name: "Denizli", slug: "denizli", region: "Ege",
    population: "1.08 milyon", plate: "20",
    clinicCount: "18+", therapistCount: "44+",
    description: "Denizli'de ergoterapi, geniş bir uzmanlık alanında hizmet sunmaktadır. Özellikle çocuk nörogelişimi ve yetişkin rehabilitasyonu konularında güçlü kadro bulunmaktadır.",
    specialties: ["Nörogelişimsel Terapi", "El Terapisi", "İnme Rehabilitasyonu"],
    emoji: "🌊"
  },
  diyarbakir: {
    name: "Diyarbakır", slug: "diyarbakir", region: "Güneydoğu Anadolu",
    population: "1.80 milyon", plate: "21",
    clinicCount: "20+", therapistCount: "48+",
    description: "Diyarbakır'da ergoterapi hizmetleri bölgenin en gelişmiş altyapısıyla sunulmaktadır. Dicle Üniversitesi bünyesindeki rehabilitasyon merkezleri başta olmak üzere çeşitli kurumlar hizmet vermektedir.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "Ruh Sağlığı"],
    emoji: "🏛️"
  },
  duzce: {
    name: "Düzce", slug: "duzce", region: "Batı Karadeniz",
    population: "409 bin", plate: "81",
    clinicCount: "6+", therapistCount: "13+",
    description: "Düzce'de ergoterapi hizmetleri hem çocuk hem yetişkin rehabilitasyonu kapsamında aktif olarak sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🌲"
  },
  edirne: {
    name: "Edirne", slug: "edirne", region: "Marmara",
    population: "416 bin", plate: "22",
    clinicCount: "7+", therapistCount: "16+",
    description: "Edirne'de ergoterapi, Trakya Üniversitesi destekli sağlık altyapısıyla kapsamlı hizmet sunmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Nörolojik Rehabilitasyon"],
    emoji: "🕌"
  },
  elazig: {
    name: "Elazığ", slug: "elazig", region: "Doğu Anadolu",
    population: "596 bin", plate: "23",
    clinicCount: "8+", therapistCount: "18+",
    description: "Elazığ'da ergoterapi hizmetleri Fırat Üniversitesi bünyesinde ve özel kliniklerde uzman kadroyla verilmektedir.",
    specialties: ["Pediatrik Ergoterapi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  erzincan: {
    name: "Erzincan", slug: "erzincan", region: "Doğu Anadolu",
    population: "246 bin", plate: "24",
    clinicCount: "4+", therapistCount: "9+",
    description: "Erzincan'da ergoterapi hizmetleri kamu ve özel kurumlarda sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "❄️"
  },
  erzurum: {
    name: "Erzurum", slug: "erzurum", region: "Doğu Anadolu",
    population: "762 bin", plate: "25",
    clinicCount: "10+", therapistCount: "24+",
    description: "Erzurum'da Atatürk Üniversitesi bünyesindeki rehabilitasyon merkezleri ve özel kliniklerde ergoterapi hizmetleri sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🏔️"
  },
  eskisehir: {
    name: "Eskişehir", slug: "eskisehir", region: "İç Anadolu",
    population: "913 bin", plate: "26",
    clinicCount: "16+", therapistCount: "38+",
    description: "Üniversite şehri Eskişehir'de ergoterapi, akademik altyapının desteğiyle kapsamlı bir şekilde sunulmaktadır. Anadolu Üniversitesi bünyesindeki birimler ve özel kliniklerde uzman hizmet mevcuttur.",
    specialties: ["Akademik Destekli Terapi", "Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "🚇"
  },
  gaziantep: {
    name: "Gaziantep", slug: "gaziantep", region: "Güneydoğu Anadolu",
    population: "2.18 milyon", plate: "27",
    clinicCount: "38+", therapistCount: "92+",
    description: "Gaziantep, ergoterapi alanında güçlü bir altyapıya sahip büyük bir şehirdir. Gaziantep Üniversitesi ve çok sayıda özel rehabilitasyon merkezi ile kliniklerde geniş hizmet yelpazesi sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "El Terapisi"],
    emoji: "🌯"
  },
  giresun: {
    name: "Giresun", slug: "giresun", region: "Karadeniz",
    population: "453 bin", plate: "28",
    clinicCount: "6+", therapistCount: "13+",
    description: "Giresun'da ergoterapi hizmetleri, özellikle çocuk gelişimi alanında aktif olarak yürütülmektedir.",
    specialties: ["Pediatrik Ergoterapi", "Fiziksel Rehabilitasyon"],
    emoji: "🍒"
  },
  gumushane: {
    name: "Gümüşhane", slug: "gumushane", region: "Karadeniz",
    population: "165 bin", plate: "29",
    clinicCount: "3+", therapistCount: "5+",
    description: "Gümüşhane'de ergoterapi hizmetleri kamu kuruluşları aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi"],
    emoji: "🌙"
  },
  hakkari: {
    name: "Hakkari", slug: "hakkari", region: "Doğu Anadolu",
    population: "286 bin", plate: "30",
    clinicCount: "2+", therapistCount: "4+",
    description: "Hakkari'de ergoterapi hizmetleri devlet hastanesi bünyesinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "⛰️"
  },
  hatay: {
    name: "Hatay", slug: "hatay", region: "Akdeniz",
    population: "1.69 milyon", plate: "31",
    clinicCount: "22+", therapistCount: "55+",
    description: "Hatay'da ergoterapi hizmetleri, özellikle çocuk gelişimi ve nörolojik rehabilitasyon alanlarında güçlü bir kadroyla sunulmaktadır. Mustafa Kemal Üniversitesi bünyesindeki birimler de aktif hizmet vermektedir.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "El Terapisi"],
    emoji: "🫒"
  },
  igdir: {
    name: "Iğdır", slug: "igdir", region: "Doğu Anadolu",
    population: "196 bin", plate: "76",
    clinicCount: "2+", therapistCount: "4+",
    description: "Iğdır'da ergoterapi hizmetleri temel rehabilitasyon kapsamında sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi"],
    emoji: "🌸"
  },
  isparta: {
    name: "Isparta", slug: "isparta", region: "Akdeniz",
    population: "435 bin", plate: "32",
    clinicCount: "7+", therapistCount: "15+",
    description: "Isparta'da Süleyman Demirel Üniversitesi destekli ergoterapi hizmetleri kapsamlı bir şekilde sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Geriatrik Ergoterapi"],
    emoji: "🌹"
  },
  istanbul: {
    name: "İstanbul", slug: "istanbul", region: "Marmara",
    population: "15.84 milyon", plate: "34",
    clinicCount: "200+", therapistCount: "600+",
    description: "Türkiye'nin en büyük şehri İstanbul, ergoterapi alanında da ülkenin öncüsüdür. 200'ü aşkın özel klinik, hastane ve rehabilitasyon merkezi ile 600'den fazla uzman ergoterapist İstanbul'da aktif olarak çalışmaktadır. Çocuk ergoterapisinden robotik rehabilitasyona, el terapisinden ruh sağlığı ergoterapisine kadar tüm uzmanlık alanlarında dünya standartlarında hizmet sunulmaktadır. İstanbul Üniversitesi, İstanbul Teknik Üniversitesi ve pek çok vakıf üniversitesi bünyesindeki merkezler akademik destekli ergoterapi imkânı sunmaktadır.",
    specialties: ["Tüm Uzmanlık Alanları", "Robotik Rehabilitasyon", "Akademik Destekli Terapi", "Uluslararası Hizmet"],
    emoji: "🌉"
  },
  izmir: {
    name: "İzmir", slug: "izmir", region: "Ege",
    population: "4.48 milyon", plate: "35",
    clinicCount: "120+", therapistCount: "320+",
    description: "Ege'nin incisi İzmir, ergoterapi alanında Türkiye'nin en gelişmiş merkezlerinden biridir. Ege Üniversitesi, Dokuz Eylül Üniversitesi ve İzmir Katip Çelebi Üniversitesi bünyesindeki birimler başta olmak üzere yüzlerce özel klinik ve rehabilitasyon merkezi kapsamlı hizmet sunmaktadır. Çocuk ergoterapisi, inme rehabilitasyonu, el terapisi ve duyu bütünleme alanlarında ülkenin önde gelen uzmanları İzmir'de görev yapmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "Duyu Bütünleme", "El Terapisi"],
    emoji: "🌊"
  },
  kahramanmaras: {
    name: "Kahramanmaraş", slug: "kahramanmaras", region: "Akdeniz",
    population: "1.18 milyon", plate: "46",
    clinicCount: "15+", therapistCount: "36+",
    description: "Kahramanmaraş'ta ergoterapi, çocuk gelişimi ve nörolojik rehabilitasyon alanlarında kapsamlı hizmetler sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🌶️"
  },
  karabuk: {
    name: "Karabük", slug: "karabuk", region: "Karadeniz",
    population: "251 bin", plate: "78",
    clinicCount: "4+", therapistCount: "9+",
    description: "Karabük'te ergoterapi hizmetleri Karabük Üniversitesi desteğiyle sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "⚙️"
  },
  karaman: {
    name: "Karaman", slug: "karaman", region: "İç Anadolu",
    population: "247 bin", plate: "70",
    clinicCount: "4+", therapistCount: "8+",
    description: "Karaman'da ergoterapi hizmetleri kamu ve özel sektörde aktif olarak sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🏰"
  },
  kars: {
    name: "Kars", slug: "kars", region: "Doğu Anadolu",
    population: "287 bin", plate: "36",
    clinicCount: "3+", therapistCount: "7+",
    description: "Kars'ta ergoterapi hizmetleri kamu kurumları aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "❄️"
  },
  kastamonu: {
    name: "Kastamonu", slug: "kastamonu", region: "Karadeniz",
    population: "387 bin", plate: "37",
    clinicCount: "5+", therapistCount: "11+",
    description: "Kastamonu'da ergoterapi hizmetleri, çocuk ve yetişkin rehabilitasyonu kapsamında sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🌲"
  },
  kayseri: {
    name: "Kayseri", slug: "kayseri", region: "İç Anadolu",
    population: "1.45 milyon", plate: "38",
    clinicCount: "28+", therapistCount: "68+",
    description: "Kayseri'de ergoterapi hizmetleri, Erciyes Üniversitesi bünyesindeki birimler ve çok sayıda özel klinik tarafından kapsamlı şekilde sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "El Terapisi"],
    emoji: "🏔️"
  },
  kilis: {
    name: "Kilis", slug: "kilis", region: "Güneydoğu Anadolu",
    population: "141 bin", plate: "79",
    clinicCount: "2+", therapistCount: "5+",
    description: "Kilis'te ergoterapi hizmetleri temel rehabilitasyon kapsamında sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi"],
    emoji: "🫒"
  },
  kirikkale: {
    name: "Kırıkkale", slug: "kirikkale", region: "İç Anadolu",
    population: "276 bin", plate: "71",
    clinicCount: "5+", therapistCount: "11+",
    description: "Kırıkkale'de ergoterapi hizmetleri kamu ve özel sektörde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "⚙️"
  },
  kirklareli: {
    name: "Kırklareli", slug: "kirklareli", region: "Marmara",
    population: "368 bin", plate: "39",
    clinicCount: "5+", therapistCount: "11+",
    description: "Kırklareli'nde ergoterapi hizmetleri hem çocuk hem yetişkin alanlarında sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "🌾"
  },
  kirsehir: {
    name: "Kırşehir", slug: "kirsehir", region: "İç Anadolu",
    population: "243 bin", plate: "40",
    clinicCount: "4+", therapistCount: "8+",
    description: "Kırşehir'de ergoterapi hizmetleri kamu ve özel kurumlarda sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🌸"
  },
  kocaeli: {
    name: "Kocaeli", slug: "kocaeli", region: "Marmara",
    population: "2.07 milyon", plate: "41",
    clinicCount: "40+", therapistCount: "98+",
    description: "Kocaeli'nde ergoterapi, Kocaeli Üniversitesi destekli sağlık altyapısıyla kapsamlı hizmet sunmaktadır. Özellikle sanayi bölgesine yakınlığıyla iş kazası rehabilitasyonu ve el terapisi öne çıkmaktadır.",
    specialties: ["El Terapisi", "İş Kazası Rehabilitasyonu", "Pediatrik Ergoterapi"],
    emoji: "🏭"
  },
  konya: {
    name: "Konya", slug: "konya", region: "İç Anadolu",
    population: "2.32 milyon", plate: "42",
    clinicCount: "42+", therapistCount: "105+",
    description: "Konya, ergoterapi alanında İç Anadolu'nun en güçlü merkezidir. Selçuk Üniversitesi Tıp Fakültesi ve Necmettin Erbakan Üniversitesi bünyesindeki birimler, özel klinikler ve rehabilitasyon merkezleriyle kapsamlı hizmet sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "Geriatrik Ergoterapi"],
    emoji: "🕌"
  },
  kutahya: {
    name: "Kütahya", slug: "kutahya", region: "Ege",
    population: "586 bin", plate: "43",
    clinicCount: "8+", therapistCount: "18+",
    description: "Kütahya'da ergoterapi hizmetleri hem kamu hem özel sektörde aktif olarak yürütülmektedir.",
    specialties: ["Çocuk Ergoterapisi", "El Terapisi"],
    emoji: "🏺"
  },
  malatya: {
    name: "Malatya", slug: "malatya", region: "Doğu Anadolu",
    population: "814 bin", plate: "44",
    clinicCount: "12+", therapistCount: "28+",
    description: "Malatya'da İnönü Üniversitesi bünyesindeki birimler ve özel kliniklerde ergoterapi hizmetleri kapsamlı şekilde sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Pediatrik Ergoterapi"],
    emoji: "🍑"
  },
  manisa: {
    name: "Manisa", slug: "manisa", region: "Ege",
    population: "1.44 milyon", plate: "45",
    clinicCount: "22+", therapistCount: "55+",
    description: "Manisa'da ergoterapi, Celal Bayar Üniversitesi desteğiyle kapsamlı bir şekilde sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🍇"
  },
  mardin: {
    name: "Mardin", slug: "mardin", region: "Güneydoğu Anadolu",
    population: "860 bin", plate: "47",
    clinicCount: "8+", therapistCount: "18+",
    description: "Mardin'de ergoterapi hizmetleri, özellikle çocuk gelişimi ve nörolojik rehabilitasyon alanlarında sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🏛️"
  },
  mersin: {
    name: "Mersin", slug: "mersin", region: "Akdeniz",
    population: "1.93 milyon", plate: "33",
    clinicCount: "32+", therapistCount: "78+",
    description: "Mersin'de ergoterapi, Mersin Üniversitesi desteğiyle ve çok sayıda özel klinikle kapsamlı hizmet sunmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "El Terapisi"],
    emoji: "🌊"
  },
  mugla: {
    name: "Muğla", slug: "mugla", region: "Ege",
    population: "1.07 milyon", plate: "48",
    clinicCount: "16+", therapistCount: "38+",
    description: "Muğla'da ergoterapi hizmetleri, turizm sezonuyla bağlantılı olarak uluslararası standartlarda sunulmakta; yerli ve yabancı hastalara hizmet verilmektedir.",
    specialties: ["Uluslararası Hizmet", "Pediatrik Ergoterapi", "El Terapisi"],
    emoji: "🌊"
  },
  mus: {
    name: "Muş", slug: "mus", region: "Doğu Anadolu",
    population: "423 bin", plate: "49",
    clinicCount: "3+", therapistCount: "7+",
    description: "Muş'ta ergoterapi hizmetleri kamu kurumları aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  nevsehir: {
    name: "Nevşehir", slug: "nevsehir", region: "İç Anadolu",
    population: "303 bin", plate: "50",
    clinicCount: "4+", therapistCount: "9+",
    description: "Nevşehir'de ergoterapi hizmetleri hem çocuk hem yetişkin rehabilitasyonu kapsamında sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🌋"
  },
  nigde: {
    name: "Niğde", slug: "nigde", region: "İç Anadolu",
    population: "375 bin", plate: "51",
    clinicCount: "5+", therapistCount: "11+",
    description: "Niğde'de ergoterapi hizmetleri kamu ve özel sektörde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "🏔️"
  },
  ordu: {
    name: "Ordu", slug: "ordu", region: "Karadeniz",
    population: "771 bin", plate: "52",
    clinicCount: "10+", therapistCount: "23+",
    description: "Ordu'da ergoterapi hizmetleri, özellikle çocuk gelişimi ve nörolojik rehabilitasyon alanlarında aktif olarak sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🌰"
  },
  osmaniye: {
    name: "Osmaniye", slug: "osmaniye", region: "Akdeniz",
    population: "543 bin", plate: "80",
    clinicCount: "6+", therapistCount: "13+",
    description: "Osmaniye'de ergoterapi hizmetleri kamu ve özel kurumlar aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  rize: {
    name: "Rize", slug: "rize", region: "Karadeniz",
    population: "352 bin", plate: "53",
    clinicCount: "5+", therapistCount: "11+",
    description: "Rize'de ergoterapi hizmetleri kamu ve özel kurumlarda sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🍵"
  },
  sakarya: {
    name: "Sakarya", slug: "sakarya", region: "Marmara",
    population: "1.07 milyon", plate: "54",
    clinicCount: "18+", therapistCount: "44+",
    description: "Sakarya'da Sakarya Üniversitesi destekli ergoterapi hizmetleri kapsamlı biçimde sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Pediatrik Ergoterapi"],
    emoji: "🌿"
  },
  samsun: {
    name: "Samsun", slug: "samsun", region: "Karadeniz",
    population: "1.38 milyon", plate: "55",
    clinicCount: "24+", therapistCount: "58+",
    description: "Karadeniz'in merkezi Samsun'da ergoterapi, Ondokuz Mayıs Üniversitesi desteğiyle kapsamlı hizmet sunmaktadır. Çocuk ergoterapisi, nörolojik rehabilitasyon ve el terapisi alanlarında güçlü bir kadro bulunmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon", "El Terapisi"],
    emoji: "🌊"
  },
  sanliurfa: {
    name: "Şanlıurfa", slug: "sanliurfa", region: "Güneydoğu Anadolu",
    population: "2.21 milyon", plate: "63",
    clinicCount: "18+", therapistCount: "44+",
    description: "Şanlıurfa'da ergoterapi hizmetleri, Harran Üniversitesi desteğiyle kapsamlı biçimde sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "🏛️"
  },
  siirt: {
    name: "Siirt", slug: "siirt", region: "Güneydoğu Anadolu",
    population: "349 bin", plate: "56",
    clinicCount: "3+", therapistCount: "7+",
    description: "Siirt'te ergoterapi hizmetleri kamu kurumları bünyesinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "🏔️"
  },
  sinop: {
    name: "Sinop", slug: "sinop", region: "Karadeniz",
    population: "213 bin", plate: "57",
    clinicCount: "3+", therapistCount: "6+",
    description: "Sinop'ta ergoterapi hizmetleri kamu ve özel kurumlar aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "⚓"
  },
  sirnak: {
    name: "Şırnak", slug: "sirnak", region: "Güneydoğu Anadolu",
    population: "575 bin", plate: "73",
    clinicCount: "3+", therapistCount: "6+",
    description: "Şırnak'ta ergoterapi hizmetleri devlet hastaneleri bünyesinde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Fiziksel Rehabilitasyon"],
    emoji: "⛰️"
  },
  sivas: {
    name: "Sivas", slug: "sivas", region: "İç Anadolu",
    population: "636 bin", plate: "58",
    clinicCount: "9+", therapistCount: "21+",
    description: "Sivas'ta Cumhuriyet Üniversitesi Tıp Fakültesi bünyesindeki birimler ve özel kliniklerde ergoterapi hizmetleri sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Pediatrik Ergoterapi"],
    emoji: "🏛️"
  },
  tekirdag: {
    name: "Tekirdağ", slug: "tekirdag", region: "Marmara",
    population: "1.10 milyon", plate: "59",
    clinicCount: "16+", therapistCount: "38+",
    description: "Tekirdağ'da ergoterapi hizmetleri, Namık Kemal Üniversitesi desteğiyle sunulmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "El Terapisi"],
    emoji: "🍷"
  },
  tokat: {
    name: "Tokat", slug: "tokat", region: "Karadeniz",
    population: "601 bin", plate: "60",
    clinicCount: "7+", therapistCount: "16+",
    description: "Tokat'ta ergoterapi hizmetleri, Gaziosmanpaşa Üniversitesi bünyesindeki birimler ve özel kliniklerde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Nörolojik Rehabilitasyon"],
    emoji: "🍎"
  },
  trabzon: {
    name: "Trabzon", slug: "trabzon", region: "Karadeniz",
    population: "836 bin", plate: "61",
    clinicCount: "14+", therapistCount: "34+",
    description: "Trabzon'da Karadeniz Teknik Üniversitesi Tıp Fakültesi bünyesindeki birimler ve özel kliniklerde kapsamlı ergoterapi hizmetleri sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Pediatrik Ergoterapi", "Nörolojik Rehabilitasyon"],
    emoji: "⛵"
  },
  tunceli: {
    name: "Tunceli", slug: "tunceli", region: "Doğu Anadolu",
    population: "87 bin", plate: "62",
    clinicCount: "2+", therapistCount: "4+",
    description: "Tunceli'de temel ergoterapi hizmetleri sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi"],
    emoji: "🌊"
  },
  usak: {
    name: "Uşak", slug: "usak", region: "Ege",
    population: "379 bin", plate: "64",
    clinicCount: "5+", therapistCount: "11+",
    description: "Uşak'ta ergoterapi hizmetleri kamu ve özel kurumlar aracılığıyla sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "El Rehabilitasyonu"],
    emoji: "🏺"
  },
  van: {
    name: "Van", slug: "van", region: "Doğu Anadolu",
    population: "1.18 milyon", plate: "65",
    clinicCount: "12+", therapistCount: "28+",
    description: "Van'da Yüzüncü Yıl Üniversitesi bünyesindeki birimler ve özel kliniklerde ergoterapi hizmetleri kapsamlı biçimde sunulmaktadır.",
    specialties: ["Akademik Destekli Terapi", "Pediatrik Ergoterapi"],
    emoji: "🌊"
  },
  yalova: {
    name: "Yalova", slug: "yalova", region: "Marmara",
    population: "277 bin", plate: "77",
    clinicCount: "6+", therapistCount: "14+",
    description: "Yalova'da ergoterapi hizmetleri, İstanbul'a yakınlığının sağladığı uzmanlık avantajıyla kapsamlı bir şekilde sunulmaktadır. Çocuk gelişimi, nörolojik rehabilitasyon ve el terapisi alanlarında uzman kadro hizmet vermektedir. Termal tesislerle bütünleşik rehabilitasyon programları da uygulanmaktadır.",
    specialties: ["Pediatrik Ergoterapi", "Termal Rehabilitasyon", "El Terapisi"],
    emoji: "🌸"
  },
  yozgat: {
    name: "Yozgat", slug: "yozgat", region: "İç Anadolu",
    population: "407 bin", plate: "66",
    clinicCount: "5+", therapistCount: "10+",
    description: "Yozgat'ta ergoterapi hizmetleri kamu ve özel sektörde sunulmaktadır.",
    specialties: ["Çocuk Ergoterapisi", "Geriatrik Ergoterapi"],
    emoji: "🌾"
  },
  zonguldak: {
    name: "Zonguldak", slug: "zonguldak", region: "Karadeniz",
    population: "605 bin", plate: "67",
    clinicCount: "8+", therapistCount: "18+",
    description: "Zonguldak'ta Bülent Ecevit Üniversitesi desteğiyle ergoterapi hizmetleri kapsamlı biçimde sunulmaktadır. Özellikle iş kazası rehabilitasyonu ve el terapisi öne çıkmaktadır.",
    specialties: ["İş Kazası Rehabilitasyonu", "El Terapisi", "Çocuk Ergoterapisi"],
    emoji: "⚓"
  }
};

// Sorted cities list for navigation
const CITIES_LIST = Object.values(CITIES_DATA).sort((a, b) => a.name.localeCompare(b.name, 'tr'));

// Default/fallback city data
const DEFAULT_CITY = {
  name: "Türkiye", slug: "turkiye", region: "Tümü",
  population: "85 milyon", plate: "00",
  clinicCount: "1.000+", therapistCount: "3.000+",
  description: "Türkiye genelinde ergoterapi hizmetleri, 81 ilde aktif olarak sunulmaktadır. Uzman ergoterapistler çocuklardan yaşlılara kadar tüm yaş gruplarına kapsamlı rehabilitasyon programları uygulamaktadır.",
  specialties: ["Tüm Uzmanlık Alanları"],
  emoji: "🇹🇷"
};
