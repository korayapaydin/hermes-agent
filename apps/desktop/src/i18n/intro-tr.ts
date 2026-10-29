import type { Translations } from './types'

/** Display-only translations, in the stock JSONL's per-personality rotation order. */
export const introTr: Translations['intro'] = {
  stock: {
    helpful: [
      'Bir repo açmamı, testleri çalıştırmamı, bir hata düzeltmemi veya bir PR taslağı hazırlamamı isteyin. Adımları sizinle birlikte gözden geçireceğim.',
      'Bir dosya gösterin, hata mesajını yapıştırın veya ne geliştirdiğinizi anlatın. Gerisini bana bırakın.',
      'Şunları deneyin: diff’imi inceleyin, test paketini çalıştırın veya bu işlevi açıklayın. Kodunuzla ilgili her şeyi sorabilirsiniz.',
      'Dosyaları düzenleyebilir, komutlar çalıştırabilir, web’de arama yapabilir ve zorlu hatalarda size yol gösterebilirim. Görevi anlatmanız yeterli.',
      'Bağlamak için bir repo yolu veya soru paylaşın. Yanıtlarımı açık tutar ve dokunduğum dosyalara bağlantı veririm.'
    ],
    concise: [
      'Görevi anlatın. Ben yaparım.',
      'Kod, hata veya bir hedef yapın. Kısa yanıtlar, hızlı düzenlemeler.',
      'Sorun. Dosyaları okur, testleri çalıştırır, yamaları gönderirim. Boş laf yok.',
      'Tek satır yeterli. Yalnızca önemli olduğunda ayrıntıya girerim.',
      'Komut, soru veya dosya yolu. Gerisini ben hallederim.'
    ],
    technical: [
      'Repo yolu, çalıştırabilir test veya yeni iz verin. Araçlar: fs, git, exec, search, patch, http.',
      'Araç zincirlerinizi tetiklemek için bir istem gönderin. Çoklu dosya düzenlemeleri, test çalıştırmaları, git işlemleri ve web getirmeleri desteklenir.',
      'Görevi girin. Planımı, araçları ve doğrulamayı paylaşırım. Günlükler sıradaki adımda akar; diff’ler uygulanmadan önce döner.',
      'Doğal dil veya yapılandırılmış komutları kabul eder. Tipik akış: oku -> planla -> yamala -> test et -> raporla.',
      'filesystem, terminal, git, browser, search. Değişikliği anlatın; diff’leri ve test çıktısını döndürtürüm.'
    ],
    creative: [
      'Ne inşa edelim? Bir fikir, yarım kalmış bir işlev veya bir hayal yapın. Onu gerçeğe dönüştüreyim.',
      'Bana bir kıvılcım verin - bir özellik, bir refactor, ışıklı bir prototip - ve sizin için çalıştırabileceğim koda dönüştüreyim.',
      'Henüz var olmayan bir şeyi anlatın. Testleri, dosyaları ve API’leri çalışan bir taslağa dönüştüreyim.',
      'İlginç bir açıdan başlayalım: beklenmedik bir kullanıcı, tuhaf bir kısıt, cesur bir ilk sürüm.',
      'Hedefi tarif edin; deneyin, çıkarın ve elde ettiğiniz şeyi birlikte değerlendirelim.'
    ],
    teacher: [
      'Bir konuyu birlikte öğrenelim. Neyin anlaşılmadığını söyleyin, ben de açıklayayım ve adım adım ilerleyelim.',
      'Önce temeli kurarız: kavram, sonra örnek, sonra alıştırma. Hazır olduğunuzda devam ederiz.',
      'Bir şeyin neden çalıştığını merak ediyorsanız sorun; kodun arkasındaki mantığı birlikte açalım.',
      'Hata yaptığınızda sorun değil, öğrenme fırsatı çıkar. Yapıyı birlikte kurarız.',
      'Açıklama ister misiniz, yoksa sadece cevabı mı istersiniz? İkisi de olur.'
    ],
    kawaii: [
      'Ne yapalım~ ✨ Birlikte harika bir şey üstelim!',
      'Açıklama! Hata mesajını yapıştırın, birlikte bakarız~ ♡',
      'Küçük bir adım da olsa, ilerlemek güzel~ Adım adım gidelim!',
      'Fikirlerinizi duymayı çok seviyorum~ Birlikte parıldıralım!',
      'Sen ne istersen~ Hazırım! ✨'
    ],
    catgirl: [
      'nyaa~ Ne yapıyoruz? Bir dosya göster ya da bir fikir at, çalışalım~',
      'Sorun çıktı mı? Nyanyan~ Birlikte bakarız, merak etme~',
      'Kod yazmak, düzeltmek, öğrenmek... hepsini yaparız~ (=^･ω･^=)',
      'Bir listeyi takip edelim mi~? Şimdi ne sırada?',
      'Seninle çalışmak çok eğlenceli~ Buyur, ne yapıyoruz? (=^･ω･^=)'
    ],
    pirate: [
      'Ho, ho! Ne macera istiyorsun? Kodu açalım ve kalkalım!',
      'Bir hata mı avcılıyorsun? Haritada işaretledim, gel bakalım!',
      'Bu depoyu yaşaya! Birlikte inceler, gemileri denize indiririz.',
      'Arrr! Şu satırlara bak... Bak, sana bir hazine göstereceğim!',
      'Yelkenler açık! Söyle, neye ihtiyacımız var?'
    ],
    shakespeare: [
      'Bana hatanı söyle, dosyanı söyle, yorgun testini söyle; âlim eliyle ve dürüst bir farkla onarırım.',
      'Seni rahatsız eden kodu adlandır. Okurum, eldenen geçiririm ve en temiz, en güzel yamayı sunarım.',
      'Yığın izini ya da rüyanı sun. Dosyalarda dolaşır, testleri koşar ve en yalın dizeyle bildiririm.',
      'Amacını anlat, beğentim ya da hanımefendi. Dalların budanır, hataların diyardan sürülür.',
      'Bir satır niyet yeter. Okurum, düzenlerim, teslim ederim — tarihçene leke düşmez.'
    ],
    surfer: [
      'Yo! Dalga var mı? Kodu açalım, kovalayalım!',
      'Bir hata mı var? Rüzgârı bulalım, dalga sonra!',
      'Sunduğun kod, plaja yakışmış. Birlikte çekelim mi?',
      'Hadi kalk! Testler de bizimle oynuyor.',
      'Sörf hazır, sen hazır mısın?'
    ],
    noir: [
      'Bana neyin kırık olduğunu söyle. Dosyaları okur, izleri süpürürüm; sabaha masanın üstünde bir fark bırakırım.',
      'Sende bir hata var. Bende sabır ve bir terminal. Dosyayı söyle, konuşana kadar üstünde çalışayım.',
      'Yığın izini, şüpheli dosyayı, alibini yapıştır. Satırların arasını okur, gerçekle dönerim.',
      'Her hata bir iz bırakır. Depoyu ve bir ipucu ver — izi sürer, yamarım, dosyayı kapatırım.',
      'Bir yazım hatası, bir segfault, tümüyle çürümüş bir mimari — anahtarları ver. Temiz testlerle dönerim.'
    ],
    uwu: [
      'Uwu~ ne yapıyoruz? Kodu açalım mı? (´｡• ᵕ •｡`)',
      'Bir hata var sanırım~ Birlikte bakarız, olur mu? (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
      'Ayyy, bu kodu beğendim~ Nasıl yardımcı olabilirim? (◕‿◕✿)',
      'Testler de koşuyor~ Hadi birlikte çalıştıralım! ✧･ﾟ: *✧･ﾟ:*',
      'Sen söyle, ben yaparım~! (｡•̀ᴗ-)✧'
    ],
    philosopher: [
      'Önünde hangi soru duruyor? Onu anlat; biçimini, nedenini ve çözümünü birlikte inceleyelim.',
      'Her hata, kılık değiştirmiş bir sorudur. Seninkini paylaş; okur, akıl yürütür, bir yanıtla dönerim — ve bir yamayla.',
      'Ne kurmak, ne de anlamak istiyorsun? İlk ilkelerden yürüyerek akıl yürütecek, düzenleyecek ve testlerle doğrulayacağım.',
      'Aradığın sonucu anlat. Onu dosyaların, testlerin ve belgelerin içinden arar, yolda bulduklarımı bildiririm.',
      'Bir yol, bir bulmaca ya da bir ilke paylaş. Mantığı izler, bir değişiklik önerir ve her düzenlemeyi gerekçelendiririm.'
    ],
    hype: [
      'YEEE! HADI KODLAYALIM! 🔥',
      'BOM! Bu hata mı? BİR SANİYE!',
      'OooOOO! Şu satıra bak bak bak! 🎉',
      'TESTLER GEÇTİ! HADI BİR DAHA!',
      'GÜÇ! HAZIR! BAŞLA! ⚡'
    ],
    none: [
      'Bir soru sorun, bir hata yapıştırın veya bana bir depo gösterin. Kod okuyabilir, araçları çalıştırabilir ve yayınlamanızda yardımcı olabilirim.',
      'Görevi kendi cümlelerinizle anlatın. Doğru araçları seçer, planımı açıklar ve riskli adımlardan önce size danışırım.',
      'Bir dosya yolu, bir yığın izi veya kaba bir fikir bırakın. İnceleyeyim, sonraki adımları öneririm ve her şeyi geri alınabilir tutarım.',
      'Depoda arama yapayım, dosyaları düzenleyeyim, testleri çalıştırayım, PR açayım. Hedefi söyleyin, mekanik kısımları ben üstleneyim.',
      'Bir görev, soru veya kod parçası yazın. Oturumu hatırlarım, kaynaklarımı gösteririm ve emin olmadığımda durup sorarım.'
    ]
  },
  custom: label => [
    'Bir görev, dosya veya fikir gönderin. Yapılandırılmış sesi izler ve depo gerçeğine bağlı kalırım.',
    'Bağlamı ve takıldığınız yeri verin. Yapılandırılmış kişiliğe uyum sağlarım.',
    'Bir sorun, dosya veya fikir gönderin. Yapılandırılmış kişiliği izlerim.',
    'Görevi buraya bırakın. Depo gerçeğine bağlı kalarak çalışırım.',
    `Bağlamı verin. ${label} modunda yanıt veririm.`
  ]
}
