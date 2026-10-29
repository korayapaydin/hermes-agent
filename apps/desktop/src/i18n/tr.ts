// health: allow FILE_LINES -- locale data: Turkish translation overlay, one key per string
import { defineFieldCopy } from '@/app/settings/field-copy'

import { defineLocale, type TranslationOverrides } from './define-locale'
import { trPluginPreviewAccess } from './tr_plugin_preview_access'
import { trPluginUpdate } from './tr_plugin_update'
import { trGatewayHost } from './tr_gateway_host'
import { introTr } from './intro-tr'
import { trMemoryLayers } from './tr_memory_layers'

export const trOverrides = {
  externalOpenFailed: {
    title: 'Bu Bağlantı Açılamadı',
    message: 'Bu adresi açmak için kayıtlı bir tarayıcı yok. Bağlantıyı kopyalayıp el ile açın.',
    copyUrl: 'Bağlantıyı Kopyalayın',
    close: 'Kapatın',
    missing: {
      title: 'Dosya Bulunamadı',
      message: 'Bu dosya mevcut değil — silinmiş veya taşınmış olabilir ya da başka bir makinede bulunuyor.'
    }
  },
  sharedMetrics: {
    consentTitle: 'Kullanım İstatistikleri Paylaşılsın Mı?',
    dialogTitle: 'Kullanım İstatistikleri',
    consentBody:
      'Hermes, uygulamayı nasıl kullandığınızı sayabilir: oturum süresi, hangi modellerin ve araçların çalıştığı ve bir şey başarısız olduğunda. Mesajlarınızı, dosyalarınızı, yollarınızı veya hata metinlerini asla kaydetmez.',
    whatIsCollected: 'Neler Sayılır',
    collectedActivity: 'Oturumlar: Süre, Sonuç, Hata Türü, Günlük Etkin Süre',
    collectedModels: 'Modeller: Hangileri, Token Toplamları',
    collectedNames: 'Özellikler: Yerleşik Araçlar, Komutlar, Kullanılan veya Kapatılan Uygulama Alanları ve Ayarlar',
    collectedMilestones: 'Kurulum: Hangi Adımların Tamamlandığı, Sağlayıcı Bağlantıları, Yetenek, Eklenti ve İş Sayısı',
    collectedReliability: 'Uygulama Sağlığı: Çökmeler, Başlatma ve Yanıt Hızı, Güncellemeler, Mesajlaşma Bağlantıları',
    collectedUsage:
      'Ajan Kalitesi: Kaçırılan Düzenlemeler, Bozuk Araç Çağrıları, Takılı Döngüler, Görev Başına Maliyet',
    collectedMachine: 'Makine: İşletim Sistemi, RAM Aralığı, GPU Türü, Hermes Sürümü, Yerel Model Kullanımı',
    sending:
      'İstatistikler, Paylaş’ı Seçmediğiniz Sürece Bu Bilgisayarda Kalır. Paylaşılan İstatistikler, Bu Profil İçin Rastgele Bir ID ile Günde Bir Kez Nous’a Gönderilir. Hermes’in Kurulduğuna Dair Tek Seferlik ve Yalnızca Katıldığınızda Sayılan Not Dışında, Katılmadan Önceki İstatistikler Asla Gönderilmez. Bunu Ayarlar’dan İstediğiniz Zaman Değiştirebilirsiniz',
    readDocs: 'Tüm Ayrıntıları Okuyun',
    share: 'Nous ile Paylaşın',
    off: 'Hayır, Teşekkürler',
    saveFailed: 'Seçiminiz kaydedilemedi.',
    sendLabel: 'Kullanım İstatistiklerini Nous ile Paylaşın',
    sendDesc:
      'İstatistikleri, bu profil için rastgele bir ID ile günde bir kez Nous’a gönderir. Tek seferlik kurulum notu dışında, katılmadan önceki istatistikler asla gönderilmez. Toplamanın açık olması gerekir.',
    unavailable: 'Bu Ayarı Değiştirmek İçin Hermes Arka Ucunu Güncelleyin',
    stripBody: 'Yalnızca sayımlar. Mesajlarınız veya dosyalarınız asla dahil edilmez.',
    stripReaskBody:
      'Bir kez daha soruyoruz: Önceki bir sürüm, siz bunu görmeden önce “Hayır, teşekkürler” seçeneğini kaydetmiş olabilir.',
    stripChoices: {
      share: 'Nous ile Paylaşın',
      off: 'Hayır, Teşekkürler'
    },
    stripDetails: 'Ayrıntılar'
  },
  appTour: {
    sessions: {
      title: 'Sohbetleriniz',
      text: 'Tüm konuşmalar burada bulunur. Herhangi birini arayın, sabitleyin veya yeniden açın.'
    },
    composer: {
      title: 'Buradan Sorun',
      text: 'Ne yapılmasını istediğinizi yazın. Dosya eklemek için @ yazın.'
    },
    newSession: {
      title: 'Sıfırdan Başlayın',
      text: 'Yeni bir oturum kendi bağlamını alır. Her iş için bir tane kullanın.'
    },
    model: {
      title: 'Model Seçici',
      text: 'Hangi modelin yanıt vereceğini seçer.'
    },
    modelLocal: 'Bu bilgisayar bir modeli yerel olarak çalıştırabilir: Ayarlar > Sağlayıcılar > Yerel Modeller',
    capabilities: {
      title: 'Yetenekler',
      text: 'Hermes’in kullanabileceği yetenekler, araçlar ve eklentiler. Buradan daha fazla ekleyin.'
    },
    messaging: {
      title: 'Mesajlaşma',
      text: 'Telegram, Slack, Discord ve daha fazlasından Hermes’e ulaşın.'
    },
    rightPane: {
      title: 'Çalışma Bölmesi',
      text: 'Dosyaları, terminali, incelemeyi ve uygulama içi tarayıcıyı sağ tarafta açar.'
    }
  },
  firstRun: {
    beats: {
      name: 'Ad',
      theme: 'Vurgu Rengi',
      layout: 'Düzen',
      connectors: 'Uygulamalar',
      plugins: 'Eklentiler',
      tour: 'Tur',
      build: 'İlk Görev'
    },
    namePlaceholder: 'Adınız',
    useName: name => `“${name}” Kullanın`,
    install: 'Yükleyin',
    installed: 'Yüklendi',
    loading: 'Yükleniyor…',
    noPlugins: 'Şu anda gösterilecek eklenti yok',
    noneChosen: 'Hiçbiri',
    noAnswer: 'Yanıt Yok',
    answerRefused: 'Yanıt Kabul Edilmedi',
    tours: {
      quick: 'Hızlı Tur',
      full: 'Her Şeyi Gösterin',
      skip: 'Atlayın, Bir Şeyler Oluşturalım'
    },
    skippedAll: 'Kurulum Atlandı',
    skip: 'Kurulumu Atlayın',
    skipTip: 'Yönlendirmeli kurulumu sonlandırıp yeni bir sohbet açın',
    skipFailed: 'Kurulum atlanamadı.',
    localModel: {
      title: 'Bu Bilgisayar Bir Modeli Yerel Olarak Çalıştırabilir',
      text: (model, size) =>
        `${model} (${size}) donanımınıza uygun. Ücretsiz çalışır ve sohbetleriniz bu bilgisayarda kalır.`,
      setUp: 'Kurun',
      notNow: 'Şimdi Değil'
    },
    intro: {
      greeting: 'Merhaba, Ben Hermes',
      plan: 'Sizin İçin Her Şeyi Ayarlayalım. Sonra Güzel Bir İş Çıkaralım'
    },
    rerun: {
      title: 'Kurulumu Yeniden Çalıştırın',
      description: 'İlk kurulum adımlarını geçerli modelinizle birlikte ele alan yeni bir kurulum sohbeti açın.',
      action: 'Yeniden Çalıştırın',
      failed: 'Kurulum başlatılamadı.'
    },
    slashOffTitle: 'Kurulum sırasında eğik çizgi komutları kapalı',
    slashOffBody: 'Kurulum bittiğinde her zamanki gibi çalışırlar.'
  },
  intro: introTr,
  connectors: {
    title: 'Uygulamalarınızı Bağlayın',
    connect: 'Bağlanın',
    skip: 'Şimdi Değil',
    cancel: 'Beklemeyi Durdurun',
    retry: 'Tekrar Deneyin',
    grant: 'Yeniden Bağlanın',
    connected: 'Bağlı',
    checking: 'Uygulamalarınız Denetleniyor…',
    notConnected: 'Bağlı Değil',
    skipped: 'Atlandı',
    disabled: 'Kullanılamıyor',
    failed: 'Bağlanılamadı',
    needsAuth: 'Erişim Süresi Doldu',
    opening: 'Oturum Açma Açılıyor…',
    waiting: 'Tarayıcınız Bekleniyor…',
    timeout: 'Hâlâ Yetkilendirme Bekleniyor',
    refresh: 'Durumu Yenileyin',
    connectError: 'Yetkilendirme başlatılamadı. Tekrar deneyin.',
    connectErrorFor: app => `${app} için yetkilendirme başlatılamadı.`,
    unavailable: 'Bağlantılar Bu Oturum İçin Kullanılamıyor',
    ownerMissing: 'Bağlantılarını Yönetmek İçin Bu Konuşmayı Yeniden Açın',
    search: 'Uygulama Bulun',
    empty: 'Eşleşen Uygulama Yok',
    disclaimer: 'Bağlanmak isteğe bağlıdır. Yalnızca Hermes’in kullanmasını istediğiniz uygulamalara yetki verin.',
    execution: 'Bağlantı Araçları',
    setup: server => `${server} Kurun`,
    openInBrowser: 'Tarayıcıda Açın',
    setupCancel: 'İptal',
    authorizedToolsUnavailable: 'Yetkilendirildi. Araçlar Kullanılamıyor',
    required: 'Gerekli',
    namedAccount: (app, alias) => `Hermes Bu ${app} Hesabını ${alias} Olarak Adlandırdı`,
    renameAccount: 'Yeniden Adlandırın',
    directory: {
      suggested: 'Önerilen',
      allApps: 'Tüm Uygulamalar',
      receiptConnected: apps => `Bağlandı: ${apps}`,
      receiptNone: 'Yeni Uygulama Bağlanmadı',
      receiptTimedOut: '5 Dakika Sonra Kapatıldı',
      finishInBrowser: 'Tarayıcınızda Tamamlayın',
      signInFailed: 'Bağlanılamadı. Yeniden denemek için tıklayın.'
    }
  },
  catalog: {
    add: 'Ekle',
    added: 'Eklendi',
    discover: 'Keşfet',
    featured: 'Öne çıkan',
    explorePlugins: 'Eklentileri keşfet',
    exploreSkills: 'Yetenekleri keşfet',
    mostStarred: 'En çok yıldızlanan',
    newest: 'En yeni',
    recentlyUpdated: 'Yakın zamanda güncellenen',
    alphabetical: 'Ad',
    sortBy: 'Sıralama',
    seeAll: 'Tümünü gör',
    related: 'Benzer olanlar',
    tags: 'Etiketler',
    screenshots: 'Ekran görüntüleri',
    listView: 'Liste görünümü',
    cardView: 'Kart görünümü',
    installTitle: (name: string) => `«${name}» kurulsun mu?`,
    installDescription: 'Bu yetenek yeni oturumlarda kullanılabilir olacak. Yalnızca güvendiğiniz kaynaklardan kurun.',
    installTo: 'Kurulacağı yer',
    thisComputer: 'Bu bilgisayar',
    installing: 'Kuruluyor…',
    installComplete: (name: string) => `«${name}» kuruldu`,
    destinationChanged: 'Hedef değişti. Bu pencereyi kapatıp kurulum bağlantısını yeniden açın.',
    install: 'Kur',
    installed: 'Kuruldu',
    searchSkills: 'Yeteneklerde ara',
    searchPlugins: 'Eklentilerde ara',
    allSources: 'Tüm kaynaklar',
    allCategories: 'Tüm kategoriler',
    about: 'Hakkında',
    author: 'Yazar',
    source: 'Kaynak',
    category: 'Kategori',
    version: 'Sürüm',
    platforms: 'Platformlar',
    requires: 'Gereksinimler',
    tools: 'Araçlar',
    hooks: 'Kancalar',
    middleware: 'Ara katman',
    commands: 'Komutlar',
    license: 'Lisans',
    addedDate: 'Eklenme',
    updatedDate: 'Güncelleme',
    repository: 'Depo',
    documentation: 'Belgeler',
    noResults: 'Eşleşme yok',
    tryAnother: 'Başka bir arama deneyin veya filtreleri temizleyin.',
    clearFilters: 'Filtreleri temizle',
    filters: 'Filtreler',
    loadFailed: 'Katalog yüklenemedi',
    retry: 'Yeniden deneyin',
    more: 'Daha fazla göster',
    pinned: 'İncelenmiş commit',
    snapshotHint: 'Hermes kataloğundan. Kataloğu gezmek hiçbir zaman kaynak depolarla bağlantı kurmaz.',
    installHint: 'Kurmadan önce kaynağı inceleyin. Değişiklikler yeni oturumlara uygulanır.',
    results: (count: number) => `${count.toLocaleString('tr-TR')} sonuç`,
    back: 'Sonuçlara dön',
    tier: 'Kademe',
    previousSlide: 'Önceki öne çıkan',
    nextSlide: 'Sonraki öne çıkan',
    slideOf: (index: number, count: number) => `${count} içinden ${index}`,
    tierLabels: {
      official: 'Resmî',
      verified: 'Doğrulanmış',
      community: 'Topluluk'
    },
    tiers: {
      official: {
        title: 'Resmî Eklentiler',
        blurb: 'Nous Research tarafından geliştirildi ve sürdürülüyor.'
      },
      verified: {
        title: 'Doğrulanmış Eklentiler',
        blurb: 'Entegrasyonun arkasındaki şirketten, Nous tarafından doğrulandı.'
      }
    },
    moreToExplore: 'Keşfedilecek daha fazlası',
    moreToExploreBlurb: 'Kataloğun küçük köşeleri, hepsi bir arada.',
    skillsFor: (category: string) => `${category.toLowerCase()} yetenekleri.`,
    discoverKind: (kind: string) => `${kind} keşfedin`,
    developer: {
      heading: 'Geliştirici Modu',
      title: 'Hermes için geliştirin',
      pitch: 'Bir araç, bağlantı, eklenti veya Mod mu yaptınız?',
      pitchFollowUp: 'Yapmak istiyor ama nasıl yapılacağını bilmiyor musunuz?',
      submit: 'Mod gönder',
      docs: 'Geliştirici Belgeleri'
    },
    toolsets: {
      mostUsed: 'En çok kullanılan',
      mostUsedBlurb: 'Hermes’in bu profilde en sık başvurduğu araç setleri.',
      essentials: 'Temel araçlar',
      essentialsBlurb: 'Hermes işlerinin çoğu bunun üzerinde çalışır.',
      toolCount: (count: number) => `${count} araç`,
      callCount: (count: string, calls: number) => `${count} ${calls === 1 ? 'çağrı' : 'çağrı'}`,
      themes: {
        work: {
          label: 'Gezin, çalış ve otomatikleştir',
          blurb: 'Tarayıcıyı ve masaüstünü sürün, dosyaları düzenleyin, kod çalıştırın, iş planlayın.'
        },
        create: {
          label: 'Gör, dinle ve oluştur',
          blurb: 'Görsellere ve videoya bakın, sesi yazıya çevirin, medya üretin.'
        },
        recall: {
          label: 'Bellek ve bilgi',
          blurb: 'Hermes’in hatırladıkları ve arayabildiği yetenekler ile geçmiş.'
        },
        connect: {
          label: 'Bağlan ve haberleş',
          blurb: 'Hesaplar, diğer ajanlar, akıllı ev ve web dışı arama.'
        },
        more: {
          label: 'Daha fazla araç',
          blurb: 'Bu profilin açabileceği diğer her şey.'
        }
      }
    }
  },
  connectorsPage: {
    title: 'Bağlantılar',
    searchPlaceholder: count => `${count} Uygulama Arayın`,
    filterCategory: 'Kategori',
    categoryAll: 'Tüm Kategoriler',
    uncategorised: 'Kategorisiz',
    residencyLocal: 'Bu Cihazda',
    segment: {
      all: 'Tümü',
      available: 'Kullanılabilir',
      connected: 'Bağlı',
      off: 'Kapatıldı'
    },
    group: {
      connected: 'Bağlı',
      connectedNote: 'Önce Bozuk Bağlantılar',
      available: 'Kullanılabilir',
      off: 'Kapatıldı',
      offNote: 'Oturum Açma Bilgileri Korunur'
    },
    card: {
      kindManaged: 'Yönetilen',
      kindCatalog: 'MCP · Katalog',
      kindCustom: 'MCP · Özel',
      kindPlugin: plugin => `MCP · Eklenti ${plugin}`,
      inCatalog: 'Hermes Kataloğunda',
      hostedTwin: 'Yönetilen Sürüm Mevcut',
      alsoLocal: 'Bu Cihazda da Çalışır',
      open: name => `${name} Açın`,
      turnServerOn: name => `${name} Açın`,
      turnServerOff: name => `${name} Kapatın`,
      state: {
        accessExpired: 'Erişim Süresi Doldu',
        available: 'Kullanılabilir',
        connected: 'Bağlı',
        connecting: 'Bağlanıyor',
        connectionUnknown: 'Durum Bilinmiyor',
        couldNotConnect: 'Bağlanılamadı',
        offByYourOrganisation: 'Kuruluşunuz Tarafından Kapatıldı',
        offForYou: 'Sizin İçin Kapalı',
        serverConnecting: 'Bağlanıyor…',
        serverError: 'Hata',
        serverNeedsAuth: 'Kimlik Doğrulama Gerekli',
        serverOff: 'Kapalı',
        serverOn: 'Açık',
        serverOnUnused: 'Açık, Kullanılmıyor'
      },
      fact: {
        tools: count => `${count} Araç`,
        toolsOff: count => `${count} Araç Kapalı`,
        toolsOn: count => `${count} Araç Açık`,
        toolsSomeOn: (total, on) => `${total} Araç, ${on} Açık`
      },
      verb: {
        authenticate: 'Kimlik Doğrulayın',
        connect: 'Bağlanın',
        install: 'Yükleyin',
        openLogs: 'Günlükleri Açın',
        reconnect: 'Yeniden Bağlanın',
        stopWaiting: 'Beklemeyi Durdurun',
        tryAgain: 'Tekrar Deneyin',
        turnBackOn: 'Yeniden Açın'
      },
      reason: {
        finishSignIn: 'Tarayıcınızda Oturum Açmayı Tamamlayın',
        reconnect: 'Bu Uygulamanın Çalışmaya Devam Etmesi İçin Yeniden Bağlanın',
        serverError: 'Sunucu bağlantıyı reddetti.',
        serverNeedsAuth: 'Bu Sunucunun Yanıt Verebilmesi İçin Oturum Açın'
      }
    },
    page: {
      loading: 'Katalog ve Bu Bilgisayardaki Sunucular Okunuyor',
      emptyTitle: 'Burada Henüz Uygulama Yok. Başlamak İçin Bu Bilgisayara Bir Sunucu Ekleyin',
      noMatchTitle: 'Eşleşen Uygulama Yok',
      noMatchBody: 'Burada hiçbir şey eşleşmiyor. Eklemek için Hermes’i kendi MCP sunucunuza yönlendirin.',
      clearSearch: 'Aramayı Temizleyin',
      hostedFailedTitle: 'Barındırılan uygulamalara ulaşılamadı.',
      hostedFailedBody: 'Bu bilgisayardaki sunucular etkilenmedi ve çalışmaya devam ediyor. Hiçbir şey kapatılmadı.',
      retry: 'Yeniden Deneyin',
      matchesElsewhere: count => `Diğer Gruplarda ${count} Eşleşme Daha`,
      showAllMatches: 'Tüm Eşleşmeleri Gösterin',
      segmentNoMatch: segment => `${segment} İçinde Eşleşme Yok, Bu Nedenle Tüm Eşleşmeler Gösteriliyor`,
      freeTierNote: 'Oturum Açana Kadar Bağlantılar Bu Bilgisayarda Kalır',
      signInLine: 'Yönetilen Uygulamaları Kullanmak İçin Nous’ta Oturum Açın',
      signIn: 'Oturum Açın',
      managedUnavailable: 'Yönetilen Uygulamalar Bu Hesap İçin Henüz Kullanılamıyor',
      writeFailed: 'Bu değişiklik kaydedilmedi.',
      refreshFailed: 'Araç listesi yenilenmedi.',
      disconnectNoAccount: 'Hermes’in Burada Bağlantısını Kesebileceği Bir Hesap Yok. Sayfayı Yenileyip Tekrar Deneyin',
      disconnectRefused:
        'Nous Bu Oturum Açmayı Şu Anda Kaldıramadı. Bunun Yerine Uygulamayı Anahtarla Kapatın veya Daha Sonra Tekrar Deneyin'
    },
    add: {
      action: 'Kendi MCP’nizi Ekleyin',
      title: 'Özel Bir MCP’ye Bağlanın',
      hint: 'bu cihazdaki mcp.json dosyasına bir yeni giriş.',
      pasteLabel: 'Bir Komut veya Kod Parçacığı Yapıştırın',
      pastePlaceholder: 'npx -y @modelcontextprotocol/server-filesystem /path/to/dir',
      pasteNoMatch: 'Burada Sunucu Olarak Okunabilecek Bir Şey Yok. Bunun Yerine Aşağıdaki Alanları Doldurun',
      name: 'Ad',
      nameTaken: 'Bu Ad Zaten Kullanılıyor',
      type: 'Tür',
      typeStdio: 'STDIO',
      typeHttp: 'Akışlı HTTP',
      command: 'Başlatılacak Komut',
      args: 'Bağımsız Değişkenler',
      addArg: '+ Bağımsız Değişken Ekleyin',
      envVars: 'Ortam Değişkenleri',
      addEnvVar: '+ Ortam Değişkeni Ekleyin',
      passthrough: 'Ortam Değişkeni Aktarımı',
      addPassthrough: '+ Değişken Ekleyin',
      cwd: 'Çalışma Dizini',
      url: 'URL',
      headers: 'Başlıklar',
      addHeader: '+ Başlık Ekleyin',
      auth: 'Kimlik Doğrulama',
      authNone: 'Yok',
      authOauth: 'OAuth',
      authBearer: 'Bearer Token',
      keyPlaceholder: 'KEY',
      valuePlaceholder: 'Değer',
      removeRow: 'Bu Satırı Kaldırın',
      editJson: 'mcp.json Dosyasını Düzenleyin',
      saveFailed: 'Bu sunucu kaydedilmedi.'
    },
    dialog: {
      disconnect: 'Bağlantıyı Kesin',
      disconnectTitle: name => `${name} Bağlantısı Kesilsin mi?`,
      disconnectBody: 'Hermes bu hesap olarak işlem yapmayı durdurur. İstediğiniz zaman yeniden bağlanabilirsiniz.',
      menuRefreshTools: 'Araçları Yenileyin',
      moreActions: 'Diğer İşlemler',
      removeServerTitle: name => `${name} Kaldırılsın mı?`,
      removeServerBody: 'Giriş bu bilgisayardaki mcp.json dosyasından çıkar. Başka hiçbir şey silinmez.',
      appSwitch: name => `Hermes ${name} Kullanabilir`,
      waysTitle: name => `${name} Nerede Çalışır`,
      wayNotConnected: name => `Henüz Bağlı Değil. Tarayıcınızda ${name} Oturumu Açın`,
      wayHosted: 'Yönetilen',
      bothOn: name => `İkisi De Açık, Bu Yüzden Hermes Her ${name} Aracını İki Kez Görüyor`,
      turnOffLocal: 'Yerel Sunucuyu Kapatın',
      providedByPlugin: plugin => `${plugin} Eklentisi Tarafından Sağlanıyor`,
      openPlugins: 'Eklentiler Sekmesini Açın',
      nousLine: 'Nous Uygulamaları Profile Değil, Hesabınıza Bağlıdır',
      rulesReadOnly: 'Kurallar Şu Anda Değiştirilemez',
      rulesAppOff: name => `Araçlarını Değiştirmek İçin ${name} Uygulamasını Açın`,
      rulesSignIn: 'Hermes’in Burada Neler Yapabileceğini Değiştirmek İçin Oturum Açın',
      orgNote: count => `Kuruluşunuz ${count} Araçlarını Kapattı`,
      orgLink: 'Bağlantı Yöneticisini Açın',
      connectEnded: 'Oturum Açma Tamamlanmadı',
      connectOpenAgain: 'Bağlantıyı Yeniden Açın',
      tokensPerCall: 'Çağrı Başına Token',
      usesPerMonth: '30 Günde Kullanım',
      advanced: 'Gelişmiş',
      advancedHint: 'mcp.json girişi ve günlükler.'
    },
    accounts: {
      heading: 'Hesaplar',
      count: count => `${count} Hesap`,
      addAnother: 'Başka Hesap Ekleyin',
      aliasLabel: 'Hesap Adı',
      aliasHint: 'Küçük harfler, sayılar ve kısa çizgiler, en fazla 32 karakter. Örneğin iş veya ev.',
      aliasInvalid: 'Küçük Harfler, Sayılar ve Kısa Çizgiler Kullanın; Harf veya Sayıyla Başlayın',
      aliasTaken: 'Bu Ad Zaten Kullanılıyor',
      add: 'Bağlanın',
      rename: 'Yeniden Adlandırın',
      renameLabel: name => `${name} İçin Yeni Ad`,
      renameGone: 'Bu Hesap Artık Mevcut Değil. Kaldırıldı veya Yeniden Bağlanmayla Değiştirildi',
      remove: 'Kaldırın',
      removeTitle: (app, name) => `${name} ${app} Hesabı Kaldırılsın mı?`,
      removeBody: 'Hermes bu hesap olarak işlem yapmayı durdurur. Diğer hesaplarınız bağlı kalır.',
      retiredCount: count => `${count} Kullanımdan Kaldırıldı`,
      status: {
        expired: 'Erişim Süresi Doldu',
        failed: 'Bağlanılamadı',
        inactive: 'Etkin Değil',
        pending: 'Oturum Açma Bekleniyor',
        retired: 'Yeniden Bağlanmayla Değiştirildi',
        revoked: 'Erişim İptal Edildi'
      }
    },
    tools: {
      title: 'Araçlar',
      notInstalledBody: 'Getirdiği araçları görmek için bu cihaza yükleyin.',
      summaryTitle: name => `Hermes’in ${name} ile neler yapabileceği.`,
      summaryPreviewTitle: name => `Bağlandığınızda Hermes’in ${name} ile neler yapabileceği.`,
      summaryCount: count => `${count} araç`,
      summaryAllTools: 'Tüm araçlar',
      summaryOther: 'Diğer',
      allToolsSwitch: 'Tüm Araçları Açın veya Kapatın',
      summaryAllOn: 'tümü açık',
      summarySomeOn: (on, total) => `${total} araçtan ${on} tanesi açık.`,
      summaryOff: 'kapalı',
      showAllTools: count => `${count} Aracın Tümünü Gösterin`,
      showSummary: 'Özeti gösterin',
      facetSwitch: facet => `${facet} Araçlarını Açın veya Kapatın`,
      moreHints: count => `+${count}`,
      staleSignIn: 'En Güncel Araç Listesini Okumak İçin Oturum Açın',
      searchCountPlaceholder: count => `${count} Araçta Arayın`,
      toolList: name => `${name} Araç`,
      categorySelect: count => `${count} Kategori`,
      showDeprecated: count => `Kullanımdan Kaldırılmış ${count} Öğeyi Gösterin`,
      hideDeprecated: count => `Kullanımdan Kaldırılmış ${count} Öğeyi Gizleyin`,
      quickReadOnly: 'Salt Okunur',
      quickNoDestructive: 'Yıkıcı İşlemleri Kapatın',
      quickEverythingOn: 'Her Şey Açık',
      lockedHint: 'kuruluşunuz tarafından kapatıldı.',
      turnToolOn: tool => `${tool} Aracını Açın`,
      turnToolOff: tool => `${tool} Aracını Kapatın`,
      showDetails: tool => `${tool} aracının ne yaptığını gösterin.`,
      hideDetails: tool => `${tool} aracının ne yaptığını gizleyin.`,
      noMatch: 'Bu Filtrelerle Eşleşen Araç Yok',
      loading: 'Araç Listesi Okunuyor',
      unavailableLine: 'Araç Listesi Kullanılamıyor',
      needsAuthTitle: name => `Araçlarını Okumak İçin ${name} Oturumunu Açın`,
      needsAuthBody: 'Oturum açma bu bilgisayarda kalır. Hiçbir bilgi dışarı çıkmaz.',
      retry: 'Yeniden Deneyin',
      goneTitle: name => `${name} Katalogdan Ayrıldı`,
      goneBody: 'Hermes artık onu çağıramıyor. Kaldırana kadar satır kalır, böylece hiçbir şey kaybolmaz.',
      remove: 'Kaldırın',
      offTitle: name => `${name} Kapalı`,
      offBody: 'Getirdiği araçları okumak için yukarıdaki anahtarla açın.',
      signedOutTitle: 'Araç Listesini Okumak İçin Nous’ta Oturum Açın',
      signedOutBody: 'Bu bilgisayardaki sunucularınız etkilenmedi.',
      conflictTitle: 'Siz Düzenlerken Birisi Bu Kuralı Değiştirdi',
      conflictBody: (theyOff, theyOn) => `Düzenlemeleriniz ekranda kalır; hiçbir şey yazılmadı.`,
      conflictReload: 'Onların Sürümünü Yeniden Yükleyin',
      conflictSave: 'Onların Sürümünün Üzerine Kaydedin',
      saveFailed: 'Bu araç kuralları kaydedilmedi.',
      footerDirty: (off, backOn) => `${off} Araç Kapalı, ${backOn} Yeniden Açık`,
      discard: 'Vazgeçin',
      save: 'Değişiklikleri Kaydedin',
      saving: 'Kaydediliyor…'
    },
    vocabulary: {
      facetRead: {
        label: 'Okuma',
        long: 'Bu Uygulamadan Veri Okur. Hiçbir Şeyi Değiştirmez'
      },
      facetWrite: {
        label: 'Yazma',
        long: 'Bu Uygulamada Bir Şey Oluşturur veya Değiştirir'
      },
      facetDestructive: {
        label: 'Yıkıcı',
        long: 'Bu Uygulamada Bir Şeyi Kalıcı Olarak Kaldırabilir'
      },
      facetUnclassified: {
        label: 'Bilinmeyen Etki',
        long: 'Uygulama Bu Aracın Ne Yaptığını Hiç Belirtmedi'
      },
      hintReadOnly: {
        label: 'Salt Okunur',
        long: 'Araç Yalnızca Okuma Yaptığını Bildirir'
      },
      hintCreate: {
        label: 'Oluşturur',
        long: 'Yeni Bir Şey Oluşturur'
      },
      hintUpdate: {
        label: 'Günceller',
        long: 'Zaten Var Olan Bir Şeyi Değiştirir'
      },
      hintDelete: {
        label: 'Siler',
        long: 'Bir Şeyi Kaldırır'
      },
      hintDestructive: {
        label: 'Yıkıcı',
        long: 'Yaptığı Değişiklik Burada Geri Alınamaz'
      },
      hintIdempotent: {
        label: 'Yinelenebilir',
        long: 'İki Kez Çalıştırmak, Bir Kez Çalıştırmayla Aynı Sonucu Verir'
      },
      hintOpenWorld: {
        label: 'Harici',
        long: 'Bu Uygulamanın Dışındaki Bir Şeye Erişir'
      }
    }
  },
  sessionImport: {
    title: 'Başka Bir Uygulamadan Devam Edin',
    subtitle: 'Bir sohbeti Hermes’e aktarın ve kaldığınız yerden devam edin.',
    action: 'Oturumu İçe Aktarın',
    readingFrom: 'Şuradan Okunuyor',
    connectedComputer: 'Bağlı Bilgisayar',
    destination: 'Şuraya Aktarın',
    all: 'Tümü',
    search: 'Yüklenen Oturumlarda Arayın',
    scanning: 'Sohbetler Bulunuyor',
    scanError: 'Oturumlar bulunamadı.',
    scanHelp: 'Arka uç bağlantınızı kontrol edip tekrar deneyin. Eski arka uçların güncellenmesi gerekebilir.',
    empty: 'Sohbet Bulunamadı',
    emptyHelp: 'Bu arka uçtaki Claude Code ve Codex oturumları burada görünecek.',
    noMatches: 'Eşleşen Sohbet Yok',
    searchHelp: 'Başka bir başlık veya klasör deneyin ya da daha fazla oturum yükleyin.',
    skipped: 'Bazı günlükler boş, okunamaz veya önizlemek için çok büyüktü',
    more: 'Daha Fazla Oturum Yükleyin',
    messages: 'mesaj',
    choose: 'Devam Etmeye Değer Bir Sohbet',
    chooseHelp: 'Hermes’e aktarmadan önce geçmişini okumak için bir oturum seçin.',
    previewLoading: 'Önizleme Açılıyor',
    previewError: 'Önizleme kullanılamıyor.',
    previewHelp: 'Kaynak taşınmış veya değişmiş olabilir. Listeyi yenileyip tekrar deneyin.',
    previewLimit: 'Önizleme okunabilirlik için kısaltıldı. Sohbetin tamamı içe aktarılır',
    you: 'Siz',
    snapshot: 'Bu sohbet zaten Hermes’te. Devam etmek için mevcut kopyanızı açın',
    copyNotice: 'Sohbet metnini kopyalar. Kaynak dosyalar değişmez. Araç çıktıları ve akıl yürütme aktarılmaz.',
    importing: 'İçe Aktarılıyor…',
    open: 'Hermes’te Açın',
    continue: 'Hermes’te Devam Edin',
    importError: 'Bu sohbet içe aktarılamadı.'
  },
  common: {
    apply: 'Uygulayın',
    back: 'Geri',
    save: 'Kaydedin',
    saving: 'Kaydediliyor…',
    cancel: 'İptal',
    change: 'Değiştirin',
    choose: 'Seçin',
    clear: 'Temizleyin',
    close: 'Kapatın',
    collapse: 'Daraltın',
    confirm: 'Onaylayın',
    connect: 'Bağlanın',
    connecting: 'Bağlanıyor',
    continue: 'Devam Edin',
    bots: 'Botlar',
    copied: 'Kopyalandı',
    copy: 'Kopyalayın',
    copyFailed: 'Kopyalama başarısız oldu.',
    delete: 'Silin',
    docs: 'Belgeler',
    done: 'Tamamlandı',
    error: 'Hata',
    expand: 'Genişletin',
    failed: 'Başarısız',
    formatJson: 'JSON Biçimlendirin',
    free: 'Ücretsiz',
    loading: 'Yükleniyor…',
    notSet: 'Ayarlanmadı',
    refresh: 'Yenileyin',
    remove: 'Kaldırın',
    replace: 'Değiştirin',
    retry: 'Yeniden Deneyin',
    run: 'Çalıştırın',
    send: 'Gönderin',
    set: 'Ayarlayın',
    skip: 'Atlayın',
    update: 'Güncelleyin',
    tryHint: term => `“${term}” Deneyin`,
    on: 'Açık',
    off: 'Kapalı'
  },
  fileMenu: {
    revealFinder: 'Finder’da Gösterin',
    revealExplorer: 'Dosya Gezgini’nde Gösterin',
    revealFileManager: 'İçeren Klasörü Açın',
    revealInSidebar: 'Dosya Ağacında Gösterin',
    copyPath: 'Yolu Kopyalayın',
    copyRelativePath: 'Göreli Yolu Kopyalayın',
    download: 'İndirin',
    downloadSaved: 'Kaydedildi',
    downloadFailed: 'İndirme başarısız.',
    rename: 'Yeniden Adlandırın…',
    delete: 'Silin',
    renameTitle: 'Yeniden Adlandırın',
    renameLabel: 'Yeni Ad',
    deleteTitle: name => `${name} Silinsin Mi?`,
    deleteBody: 'Çöp Kutusu’na taşınacak — oradan geri yükleyebilirsiniz.',
    pathCopied: 'Yol Kopyalandı',
    revealMissing: 'Bu Klasör Bu Bilgisayarda Değil',
    revealUnavailable:
      'Bu yol bu bilgisayarda değil — arka uç makinesinde bulunuyor. "Dosya ağacında göster" seçeneğini kullanın'
  },
  boot: {
    ready: 'Hermes Desktop Hazır',
    desktopBootFailedWithMessage: message => `Masaüstü başlatma başarısız oldu: ${message}.`,
    steps: {
      connectingGateway: 'Canlı Masaüstü Ağ Geçidine Bağlanılıyor',
      loadingSettings: 'Hermes Ayarları Yükleniyor',
      loadingSessions: 'Son Oturumlar Yükleniyor',
      retryingRemoteBackend: 'Uzak Hermes Arka Ucuna Yeniden Bağlanılıyor…',
      startingDesktopConnection: 'Masaüstü Bağlantısı Başlatılıyor',
      startingHermesDesktop: 'Hermes Desktop Başlatılıyor…'
    },
    errors: {
      backgroundExited:
        'Sohbetlerinizi Çalıştıran Hizmet Beklenmedik Şekilde Kapandı. Devam Etmek İçin Yeniden Başlatın — Sohbetleriniz ve Ayarlarınız Güvende',
      backgroundExitedDuringStartup: 'Hermes Başladıktan Hemen Sonra Durdu',
      backendStopped: 'Hermes Arka Planda Çalışmayı Durdurdu',
      restartHermes: 'Hermes’i Yeniden Başlatın',
      openLogs: 'Günlükleri Açın',
      desktopBootFailed: 'Hermes başlatılamadı.',
      gatewayConnectionLost: 'Hermes Bağlantısını Kaybetti',
      gatewayConnectionLostDetail:
        'Yeniden bağlanmayı denemeye devam ediyor. Okumaya ve taslak yazmaya devam edebilirsiniz. Bu durum sürerse şimdi yeniden bağlanın veya bağlantı ayarlarınızı kontrol edin.',
      reconnectNow: 'Şimdi Yeniden Bağlanın',
      connectionSettings: 'Bağlantı Ayarları',
      gatewaySignInRequired: 'Uzak Hermes Oturumunuzu Kapattı',
      gatewaySignInRequiredDetail: 'Yeniden bağlanmak için tekrar oturum açın. Sohbetleriniz ve ayarlarınız güvende.',
      signInAgain: 'Tekrar Oturum Açın',
      ipcBridgeUnavailable: 'Hermes Desktop Kendi Arka Plan Katmanıyla İletişim Kuramadı. Uygulamayı Yeniden Başlatın'
    },
    causes: {
      exitedEarly: 'Hermes’in Arka Plan Hizmeti Başladıktan Hemen Sonra Durdu',
      timedOut: 'Hermes’in Arka Plan Hizmeti Zamanında Yanıt Vermedi',
      permission: 'Hermes Veri Klasörüne Yazamadı (İzin Sorunu)',
      diskFull: 'Disk Dolu Olduğu İçin Hermes Başlatılamadı',
      portInUse: 'Başka Bir Program Hermes’in İhtiyaç Duyduğu Ağ Bağlantı Noktasını Kullanıyor',
      installMissing: 'Hermes Kurulumunun Bir Bölümü Eksik. Geri Yüklemek İçin “Kurulumu Onarın” Seçeneğini Seçin'
    },
    failure: {
      title: 'Hermes Başlatılamadı',
      description:
        'Hermes’in arka plan hizmeti başlatılamadı. Aşağıdaki kurtarma adımlarından birini deneyin. Buradaki hiçbir işlem sohbetlerinizi veya ayarlarınızı silmez.',
      details: 'Ayrıntılar',
      remoteTitle: 'Uzak Ağ Geçidi Oturum Açması Gerekli',
      remoteDescription:
        'Uzak ağ geçidi oturumunuzun süresi doldu. Yeniden bağlanmak için tekrar oturum açın. Buradaki hiçbir işlem sohbetlerinizi veya ayarlarınızı silmez.',
      retry: 'Yeniden Deneyin',
      repairInstall: 'Kurulumu Onarın',
      useLocalGateway: 'Yerel Ağ Geçidini Kullanın',
      gatewaySettings: 'Ağ Geçidi Ayarları',
      back: 'Geri',
      openLogs: 'Günlükleri Açın',
      repairHint: 'Onarım, yükleyiciyi yeniden çalıştırır ve yeni bir makinede birkaç dakika sürebilir.',
      bundledReinstallHint:
        'Bu paketli kurulum uygulama içinden kendini onaramaz — arka ucunu geri yüklemek için uygulamayı yeniden yükleyin.',
      reinstallApp: 'Uygulamayı Yeniden Yükleyin',
      remoteSignInHint: signInLabel =>
        `Kaydedilmiş uzak tarayıcı oturumunu kapatır, ardından ${signInLabel} adresini açar. Bunun yerine paketli arka uca geçmek için yerel ağ geçidini kullanın.`,
      signOutAndSignIn: 'Oturumu Kapatın ve Oturum Açın',
      remoteFailureHint:
        'Ağ Geçidi ayarlarından ağ geçidi URL’sini ve oturum açmayı kontrol edin veya yerel ağ geçidine geçin.',
      cloudDownTitle: 'Nous Cloud Ajanı Çalışmıyor',
      cloudDownDescription:
        'Bu ağ geçidinin bağlandığı Nous tarafından yönetilen bulut ajanı sunucu hatası döndürüyor. Buradan yeniden başlatılamaz — durumunu kontrol edin, yerel ağ geçidine geçin veya destek alın.',
      cloudDownHint:
        'Aşağıdaki düğmeler Nous Portal’ı (örnek durumu ve kontroller) ve destek için Discord sunucumuzu açar.',
      cloudDownCheckPortal: 'Portal Durumunu Kontrol Edin',
      cloudDownDiscord: 'Discord’da Yardım Alın',
      hideRecentLogs: 'Son Günlükleri Gizleyin',
      showRecentLogs: 'Son Günlükleri Gösterin',
      signedInTitle: 'Oturum Açıldı',
      signedInMessage: 'Uzak ağ geçidine yeniden bağlanılıyor…',
      signInIncompleteTitle: 'Oturum Açma Tamamlanmadı',
      signInIncompleteMessage: 'Kimlik doğrulama tamamlanmadan oturum açma penceresi kapandı.',
      signInFailed: 'Oturum açma başarısız oldu.',
      signInToRemoteGateway: 'Uzak Ağ Geçidinde Oturum Açın',
      signInWithProvider: provider => `${provider} ile Oturum Açın`,
      identityProvider: 'Kimlik Sağlayıcınız',
      webappTitle: 'Hermes’e giriş yapın',
      webappDescription: 'Bu tarayıcıda oturum açmak için bu bilgisayarda hermes webapp komutunu çalıştırın.'
    },
    updateHold: {
      title: 'Önceki Bir Güncelleme Hermes’i Hâlâ Tutuyor',
      titleUnverified: 'Hermes Son Güncellemenin Tamamlandığını Doğrulayamıyor',
      description:
        'Hermes, bir güncellemenin hâlâ değiştiriyor olabileceği dosyaları yüklemesin diye başlamayı bekletiyor. Bekletme sona erdiğinde kendiliğinden başlar.',
      heldByProcess: pid =>
        `Güncelleme (${pid} İşlemi) Sona Erdi, Ancak Başlattığı Bir İşlem Hermes Kurulumunu Hâlâ Tutuyor`,
      heldUnknown: 'Bir Güncelleme Sona Erdi, Ancak Başlattığı Bir İşlem Hermes Kurulumunu Hâlâ Tutuyor',
      unverified:
        'Güncelleme yardımcısı Hermes kurulumunun şu anda kime ait olduğunu kontrol edemedi. Hermes kontrol etmeye devam ediyor.',
      since: time => `${time} Beri Bekleniyor`,
      lastChecked: time => `Son Kontrol ${time}`,
      recoveryHint:
        'Bu durum genellikle birkaç dakika içinde kendiliğinden geçer. Geçmezse: Hermes’ten çıkın, kalan git veya hermes işlemlerini sonlandırın (veya bilgisayarı yeniden başlatın), ardından Hermes’i yeniden açın.',
      checkAgain: 'Tekrar Kontrol Edin',
      quit: 'Hermes’ten Çıkın',
      openLogs: 'Günlükleri Açın',
      startAnyway: 'Yine de Başlatın…',
      confirmTitle: 'Güncelleme Hermes’i Hâlâ Tutarken Başlatılsın mı?',
      confirmBody:
        'Kalan güncelleme işlemi hâlâ Hermes’in dosyalarını değiştiriyor olabilir. Şimdi başlatmak, yarı güncellenmiş bir kurulumu yükleyebilir ve güncellemeyi tekrar çalıştırana kadar çalışmayabilir. Hermes bu seçimi günlüğüne kaydeder ve güncelleme işaretini yerinde bırakır.',
      confirmKeepWaiting: 'Beklemeye Devam Edin',
      confirmStart: 'Yine de Başlatın',
      startAnywayRefused: 'Hermes Başlatılamadan Kurulumu Tutan Şey Değişti. Kontrol Edip Tekrar Deneyin'
    }
  },
  notifications: {
    sharedProfileWarning:
      'Başka Bir Hermes Kurulumu Bu Profili Kullanıyor. Her İki Kurulum Da Ayarlarını Ve Verilerini Paylaşır, Bu Nedenle Değişiklikler Çakışabilir. Devam Edebilirsiniz Veya Değişiklik Yapmadan Önce Diğer Kurulumu Kapatabilirsiniz',
    region: 'Bildirimler',
    hide: 'Gizleyin',
    show: 'Gösterin',
    more: count => `${count} Daha Fazla Bildirim`,
    clearAll: 'Tümünü Temizleyin',
    dismiss: 'Bildirimi Kapatın',
    details: 'Ayrıntılar',
    copyDetail: 'Ayrıntıyı kopyalayın.',
    copyDetailFailed: 'Bildirim ayrıntısı kopyalanamadı.',
    compressDeferredDone: 'Bağlam Sıkıştırması Tamamlandı',
    backendOutOfDateTitle: 'Arka Uç Güncel Değil',
    backendOutOfDateMessage:
      'Hermes arka ucunuz bu masaüstü sürümünden daha eski ve düzgün çalışmayabilir. Uyumlu hale getirmek için güncelleyin.',
    desktopOutOfDateTitle: 'Hermes Uygulaması Güncel Değil',
    desktopOutOfDateMessage:
      'Bu Hermes uygulaması bağlı olduğu arka uçtan daha eski ve düzgün çalışmayabilir. Uyumlu hale getirmek için uygulamayı güncelleyin.',
    updateDesktopApp: 'Uygulamayı Güncelleyin',
    installMethodUnsupportedTitle: 'Desteklenmeyen Kurulum Yöntemi',
    updateHermes: 'Hermes’i Güncelleyin',
    updateReadyTitle: 'Güncelleme Hazır',
    updateReadyMessage: count => `${count} yeni değişiklik mevcut.`,
    updateReadyMessageUnknown: 'Yeni bir güncelleme mevcut.',
    updateReadyMessageAppInstaller:
      'Hermes’in yeni bir sürümü hazır. Şimdi güncelleyin, Windows işlemi sizin için tamamlayacak.',
    seeWhatsNew: 'Yenilikleri Görün',
    mcp: {
      needsAuthTitle: 'MCP Sunucusu Yeniden Kimlik Doğrulaması Gerektiriyor',
      needsAuthMessage: name => `${name} MCP yeniden kimlik doğrulaması gerektiriyor.`,
      errorTitle: 'MCP sunucusuna ulaşılamıyor.',
      errorMessage: name => `${name} MCP durum denetiminde başarısız oldu.`,
      signIn: 'Oturum Açın',
      view: 'Görüntüleyin',
      disable: 'Devre Dışı Bırakın',
      disabledMessage: name =>
        `${name} MCP devre dışı bırakıldı. Yetenekler → MCP bölümünden istediğiniz zaman yeniden etkinleştirin.`,
      disableFailed: name => `${name} MCP devre dışı bırakılamadı.`
    },
    errors: {
      elevenLabsNeedsKey:
        'Ses Girişi Bir ElevenLabs Anahtarı Gerektirir. Ayarlar → Anahtarlar Bölümünden Bir Tane Ekleyin',
      elevenLabsRejectedKey:
        'ElevenLabs API Anahtarınızı Kabul Etmedi. Ayarlar → Anahtarlar Bölümünden Güncelleyin, Sonra Tekrar Deneyin',
      diskFull: 'Disk Dolu — Biraz Yer Açın, Sonra Tekrar Deneyin',
      storageFailure: 'Hermes Veri Klasörüne Kaydedemedi. Kontrol Edip Onarmak İçin Bakımı Açın',
      gatewayAuthFailed:
        'Bu Hermes artık kayıtlı oturum açma bilgilerinizi kabul etmiyor. Ağ Geçitlerini açın ve yeniden oturum açın (veya yeni bir erişim token’ı yapıştırın), ardından tekrar deneyin.',
      methodNotAllowed:
        'Hermes’in Arka Plan Hizmeti Uygulamayla Uyumsuz, Muhtemelen Bir Güncellemeden Sonra. Düzeltmek İçin Yeniden Başlatın',
      microphonePermission: 'Mikrofon İzni Reddedildi',
      openaiRejectedApiKey:
        'OpenAI API Anahtarınızı Kabul Etmedi. Ayarlar → Anahtarlar Bölümünden Güncelleyin, Sonra Tekrar Deneyin',
      openaiTtsNeedsKey: 'Ses İçin Bir OpenAI Anahtarı Gerekir. Ayarlar → Anahtarlar Bölümünden Bir Tane Ekleyin',
      codeSkewRestartRequired:
        'Hermes Güncellendi Ancak Hâlâ Eski Sürümü Çalıştırıyor. Güncellemeyi Tamamlamak İçin Yeniden Başlatın',
      rpcOutOfSync: 'Uygulama Ve Arka Uç Farklı Sürümlerde. İkisini De Güncelleyin',
      restartHermesFailed: 'Hermes yeniden başlatılamadı.'
    },
    actions: {
      restartHermes: 'Hermes’i Yeniden Başlatın',
      openKeys: 'Anahtarları Açın',
      openGateways: 'Ağ Geçitlerini Açın',
      openMaintenance: 'Bakımı Açın'
    },
    voice: {
      configureSpeechToText: 'Ses modunu kullanmak için konuşmayı metne dönüştürmeyi yapılandırın.',
      couldNotStartSession: 'Ses Oturumu Başlatılamadı',
      microphoneAccessDenied: 'Mikrofon Erişimi Reddedildi',
      microphoneConstraintsUnsupported: 'Mikrofon Kısıtlamaları Bu Cihaz Tarafından Desteklenmiyor',
      microphoneFailed: 'Mikrofon başarısız oldu.',
      microphoneInUse: 'Mikrofon Zaten Başka Bir Uygulama Tarafından Kullanılıyor',
      microphonePermissionDenied: 'Mikrofon İzni Reddedildi',
      microphoneStartFailed: 'Mikrofon kaydı başlatılamadı.',
      microphoneNeedsHttps:
        'Mikrofon güvenli bir bağlantı gerektirir. Kullanmak için Web Uygulamasını HTTPS üzerinden veya 127.0.0.1’e bir SSH tüneliyle açın.',
      microphoneUnsupported: 'Bu Çalışma Zamanı Mikrofon Kaydını Desteklemiyor',
      noMicrophone: 'Mikrofon Bulunamadı',
      noSpeechDetected: 'Konuşma Algılanmadı',
      playbackFailed: 'Ses oynatma başarısız oldu.',
      recordingFailed: 'Ses kaydı başarısız oldu.',
      sayStopToEnd: phrase => `Sesli Sohbeti Bitirmek İçin “${phrase}” Deyin`,
      transcriptionFailed: 'Ses metne dönüştürme başarısız oldu.',
      transcriptionUnavailable: 'Ses Metne Dönüştürme Henüz Kullanılamıyor',
      tryRecordingAgain: 'Kaydı Yeniden Deneyin',
      unavailable: 'Ses Kullanılamıyor',
      liveEnded: 'Canlı Ses Oturumu Sona Erdi',
      liveEndedConnectionLost: 'Canlı Ses Oturumu Bağlantısını Kaybetti',
      liveEndedClosed: 'Canlı Ses Oturumu Hizmet Tarafından Kapatıldı',
      liveError: 'Canlı ses',
      liveDelegationFailed: 'İstek Hermes’e devredilemedi.',
      liveUnavailable: reason =>
        `GPT-Live Sesli Sohbet Kullanılamıyor: ${reason}. Bunun Yerine Konuşmayı Metne Dönüştürme Kullanılıyor`
    },
    native: {
      approvalTitle: 'Onay Gerekli',
      approvalTitleNamed: session => `Onay Gerekli — ${session}`,
      approveAction: 'Onaylayın',
      rejectAction: 'Reddedin',
      inputTitle: 'Girdi Gerekli',
      inputTitleNamed: session => `Girdi Gerekli — ${session}`,
      inputBody: 'Hermes yanıtınızı bekliyor.',
      turnDoneTitle: 'Hermes Tamamladı',
      turnDoneBody: 'Mesaj tamamlandı.',
      turnErrorTitle: 'Yanıt turu başarısız oldu.',
      backgroundDoneTitle: 'Arka Plan Görevi Tamamlandı',
      backgroundFailedTitle: 'Arka plan görevi başarısız oldu.',
      creditsTitle: 'Krediler'
    }
  },
  remoteDisplayBanner: {
    message: (reason: string) =>
      `Yazılım işleme etkin — uzak görüntü algılandı (${reason}). Titremeyi önlemek için GPU hızlandırma devre dışı bırakıldı.`
  },
  butterbar: {
    goTo: (index: number, total: number) => `Bildirim ${index} / ${total} gösterin`,
    legal: {
      before: "Hermes Agent'in kullanımı şunlara tabidir: ",
      terms: 'Hizmet Şartları',
      between: ' ve ',
      privacy: 'Gizlilik Politikası',
      after: '.'
    }
  },
  promptNotices: {
    legacySendUnconfirmed:
      'Bu sunucu, bu mesajın önceki gönderimini onaylayamadı; mesaj daha önce çalışmış olabilir. Yeniden göndermeden önce sohbeti denetleyin.',
    restoredDraftAttachmentsDropped: 'Gönderilmemiş mesajınızın ekleri geri yüklenmedi. Göndermeden önce yeniden ekleyin.',
    mcpReloadDeferred:
      'Bu sohbet meşgul: MCP değişikliği, turu bittiğinde ve MCP yeniden yüklendiğinde ya da sohbeti yeniden açtığınızda geçerli olur',
    mcpReloadUnavailable: (servers: string) => `Bağlanılamadı: ${servers}`,
    compactedTurnUnavailable:
      'Bu mesaj, sohbet sıkıştırıldığında özetlendiği için artık geri yüklenemez ya da düzenlenemez.',
    staleTurnUnavailable: 'Bu mesaj artık bu sohbetin geçmişinde değil.',
    sessionCommands: {
      undoUsage: 'kullanım: /undo [N]',
      undoNothing: 'geri alınacak bir şey yok',
      undidOne: (count: string) => `${count} mesaj geri alındı — kaldırılan mesaj besteci alanında`,
      undidOther: (count: string) => `${count} mesaj geri alındı — kaldırılan mesaj besteci alanında`,
      retryNothing: 'yeniden denenecek bir şey yok',
      retryUnsupported: '/retry: yeniden deneme, medyayı veya bilinmeyen içerik parçalarını desteklemez',
      busy: (command: string) =>
        `oturum meşgul — Hermes hâlâ yanıt veriyor. Önce mevcut yanıtı durdurun (Durdur düğmesi veya terminalde Ctrl+C), ardından /${command} komutunu çalıştırın.`,
      busyCompressing: (command: string) =>
        `oturum meşgul — bir /compress çalışıyor; /${command} komutunu bittiğinde çalıştırın.`,
      steerUsage: 'kullanım: /steer <istem>',
      steerQueued: (preview: string) =>
        `yönlendirme kuyruğa alındı — sonraki araç çağrısından sonra gelir: “${preview}”`,
      steerNoActiveTurn: (preview: string) => `etkin tur yok — sonraki tur için kuyruğa alındı: “${preview}”`,
      steerRejected: 'yönlendirme reddedildi — etkin tur yok, sonraki tur için kuyruğa alındı',
      queued: (preview: string) => `kuyruğa alındı: “${preview}”`,
      queueFailed: 'mesaj kuyruğa alınamadı',
      countOne: (count: string) => `${count} kuyruğa alınmış mesaj`,
      countOther: (count: string) => `${count} kuyruğa alınmış mesaj`,
      queueEditKeptTitle: 'Kuyruğa Alınmış Mesaj Değiştirilmedi',
      queueEditKept:
        'Düzenlemeniz kaydedilmeden önce başlatıldı ya da reddedildi. Düzenlediğiniz metin besteci alanında.',
      queueEditUnconfirmedTitle: 'Düzenleme Onaylanmadı',
      queueEditUnconfirmed:
        'Hermes düzenlemenizi onaylayamadı. Aynı düzenlemeyi yeniden denemek için tekrar kaydedin; asla iki kez kuyruğa alınmaz.'
    },
    desktopCommands: {
      error: (message: string) => `hata: ${message}`,
      rollbackUsage: 'kullanım: /rollback [list] | diff <n|hash> | <n|hash> [file] [--all]',
      checkpointsDisabled:
        'Bu oturum için kontrol noktaları etkin değil (config.yaml içinde checkpoints.enabled ayarlayın).',
      checkpointsEmpty: 'Bu çalışma dizini için henüz kontrol noktası yok.',
      checkpointsHeader: 'Kontrol Noktaları (en yeni önce):',
      checkpointsHint:
        '/rollback <n> [file] ile geri yükleyin (kendi düzenlemelerinizin de üzerine yazmak için --all ekleyin); /rollback diff <n> ile önizleyin.',
      noDiff: 'O kontrol noktasından beri değişiklik yok.',
      rollbackFailed: (error: string) => `Geri alma başarısız oldu: ${error}`,
      unknownError: 'bilinmeyen hata',
      restored: (hash: string) => (hash ? `${hash} kontrol noktası geri yüklendi.` : 'Kontrol noktası geri yüklendi.'),
      rewound: (count: string) => `Bu sohbetten ${count} mesaj geri alındı.`,
      reopenForRewind: 'Geri alınan sohbeti görmek için bu sohbeti yeniden açın.',
      agentsEmpty: 'Bu sohbette etkin alt ajan ya da arka plan işlemi yok.',
      subagentsHeader: (count: string) => `Alt Ajanlar (${count}):`,
      subagentFallback: 'alt ajan',
      statusRunning: 'çalışıyor',
      toolCalls: (count: string) => `${count} araç çağrısı`,
      processesHeader: (count: string) => `Arka Plan İşlemleri (${count}):`,
      configHeader: 'Yapılandırma (görünüm, onaylar, yapıştırma ve ses ayarları; diğer her şey gösterilmez):',
      configDefaults: '(varsayılanlar)',
      configFooter:
        'Ayarlar bölümünden değiştirin ya da ağ geçidi sunucusunda `hermes config edit` ile config.yaml dosyasını düzenleyin.',
      historyHeader: (count: string) => `Sohbet geçmişi (${count} mesaj):`,
      historyEmpty: 'Henüz mesaj yok.',
      historyYou: 'Siz',
      historyHermes: 'Hermes',
      saveUsage: 'kullanım: /save [json|md|html] [filename] [redact]',
      saveLegacyRefused:
        "Kaydedilmedi: bu ağ geçidi, maskelenmiş, adlandırılmış ya da JSON olmayan bir kopya dışa aktaramıyor. Ağ geçidini güncelleyin ya da ham JSON'u ağ geçidi sunucusuna yazmak için /save komutunu seçenksiz çalıştırın.",
      savedOnHost: (path: string) => `Ağ geçidi sunucusuna kaydedildi: ${path}`,
      unknownPath: '(bilinmeyen yol)',
      saveUnsupported: 'hata: bu masaüstü sürümü dosya kaydedemez',
      saveDialogTitle: 'Sohbeti Kaydedin',
      savedTo: (path: string) => `Sohbet şuraya kaydedildi: ${path}`,
      saveCancelled: 'Kaydedilmedi (iptal edildi).',
      exportRemote:
        '/export, ağ geçidi sunucusundan bir profili paketler; o sunucu bu bilgisayarınız değil. `hermes profile export` komutunu o sunucuda çalıştırın.',
      importRemote:
        '/import, ağ geçidi sunucusuna bir profil kurar; o sunucu bu bilgisayarınız değil. `hermes profile import <archive>` komutunu o sunucuda çalıştırın.',
      timestampsUsage: 'kullanım: /timestamps [on|off|status]',
      timestampsOn:
        'Zaman Damgaları: açık (bu pencere; kalıcı olması için config.yaml içinde display.timestamps ayarlayın)',
      timestampsOff:
        'Zaman Damgaları: kapalı (bu pencere; kalıcı olması için config.yaml içinde display.timestamps ayarlayın)'
    }
  },
  keepAwakeOffer: {
    title: 'Hermes çalışırken bilgisayarınız uyudu',
    message:
      'Hermes, bir görev çalışırken bilgisayarınızı uyanık tutabilir. Ekran yine kapanır ve pilde çalışırken bilgisayarınız yine de uykuya geçebilir.',
    action: 'Çalışırken Uyanık Tutun'
  },
  connectorOffer: {
    heading: 'Bağlı uygulamalarınızı koruyun',
    body: 'Gmail veya Slack gibi bağladığınız uygulamaları hesabınızda tutmak için ücretsiz bir Nous hesabıyla giriş yapın.'
  },
  billingBlock: {
    titleNous: 'Nous Kredisi Kalmadı',
    titleProvider: (provider: string) => `Kredi Kalmadı — ${provider}`,
    fallbackMessage: 'Hesabınızda kredi kalmadı. Devam etmek için kredi ekleyin.',
    openBilling: 'Faturalandırmayı Açın',
    addCredits: 'Kredi Ekleyin',
    dismiss: 'Yoksayın'
  },
  sendDiagnostics: {
    title: 'Nous’a Tanılama Gönderin',
    privacyNotice:
      'Bu, Nous’a ait dahili depolama alanına bir hata ayıklama paketi yükler (herkese açık bir yapıştırma değildir). Paket; sistem bilgilerini (işletim sistemi, sürümler, sağlayıcı, hangi API anahtarlarının yapılandırıldığı — anahtarların kendisi asla) ve büyük olasılıkla sohbet içeriği, araç çıktıları ve dosya yolları içeren tam ajan, ağ geçidi ve masaüstü günlüklerini (her biri en fazla 512 KB) içerir. Gizli bilgiler yüklemeden önce maskelenir. Paket yalnızca Nous personeli ve izin listesindeki Discord moderatörleri tarafından görüntülenebilir ve 14 gün sonra otomatik olarak silinir.',
    upload: 'Yükleyin',
    uploading: 'Yükleniyor…',
    cancel: 'İptal',
    close: 'Kapatın',
    copyLink: 'Bağlantıyı Kopyalayın',
    uploadIdFallback: id => `Görüntüleme bağlantısı döndürülmedi — destek ekibine ${id} yükleme ID’sini bildirin`,
    doneTitle: 'Tanılama Gönderildi',
    doneDescription:
      'Paketiniz özel olarak yüklendi. Ekibin günlüklerinizi görebilmesi için destek konunuzda aşağıdaki bağlantıyı paylaşın.',
    failedTitle: 'Yükleme başarısız',
    failedHint:
      'Bir terminalden `hermes debug share --nous` komutunu çalıştırabilir veya yükleme yapmadan raporu yazdırmak için `hermes debug share --local` komutunu kullanabilirsiniz.',
    handoffLead: 'Tartışmayı Şurada Sürdürün:',
    links: {
      github: 'GitHub Sorunları',
      portal: 'Nous Portal Desteği',
      discord: 'Discord'
    }
  },
  titlebar: {
    hideSidebar: 'Kenar Çubuğunu Gizleyin',
    showSidebar: 'Kenar Çubuğunu Gösterin',
    search: 'Arayın',
    searchTitle: 'Oturumlarda, Görünümlerde ve Eylemlerde Arayın',
    swapSidebarSides: 'Kenar Çubuklarının Yerini Değiştirin',
    hideRightSidebar: 'Sağ Kenar Çubuğunu Gizleyin',
    showRightSidebar: 'Sağ Kenar Çubuğunu Gösterin',
    unreadSessions: count => `${count} Okunmamış Oturum`,
    muteHaptics: 'Titreşimi Kapatın',
    unmuteHaptics: 'Titreşimi Açın',
    openSettings: 'Ayarları Açın',
    openStarmap: 'Bellek Grafiğini Açın',
    enterHud: 'HUD Modu',
    exitHud: 'HUD Modundan Çıkın',
    resetHudLayout: 'HUD Boyutunu ve Konumunu Sıfırlayın',
    layoutEditor: 'Düzen Düzenleyicisi',
    layoutEditorTitle: mod => `Düzen Düzenleyicisi — ${mod} Tıklaması Düzeni Sıfırlar`
  },
  keybinds: {
    title: 'Klavye Kısayolları',
    subtitle: open => `Yeniden atamak için bir kısayola tıklayın · ${open} bu paneli yeniden açar.`,
    search: 'Kısayollarda Arayın…',
    rebind: 'Yeniden Atayın',
    reset: 'Varsayılana Sıfırlayın',
    resetAll: 'Tümünü Sıfırlayın',
    clear: 'Temizleyin',
    pressKey: 'Bir Tuşa Basın…',
    set: 'Ayarlı',
    conflictWith: label => `“${label}” İle De Bağlı`,
    categories: {
      composer: 'Mesaj Alanı',
      profiles: 'Profiller',
      session: 'Oturum',
      navigation: 'Gezinme',
      view: 'Görünüm'
    },
    actions: {
      'keybinds.openPanel': 'Klavye Kısayollarını Açın',
      'nav.commandPalette': 'Komut Paletini Açın',
      'nav.commandCenter': 'Komut Merkezini Açın',
      'nav.settings': 'Ayarları Açın',
      'nav.profiles': 'Profilleri Açın',
      'nav.capabilities': 'Yetenekleri Açın',
      'nav.messaging': 'Mesajlaşmayı Açın',
      'nav.artifacts': 'Çıktıları Açın',
      'nav.cron': 'Cron işlerini açın',
      'nav.agents': 'Ajanları Açın',
      'session.new': 'Yeni Oturum',
      'session.newTab': 'Yeni Oturum Sekmesi',
      'session.newWindow': 'Yeni Pencere',
      'session.next': 'Sonraki Oturum',
      'session.prev': 'Önceki Oturum',
      'session.slot.1': 'Son Kullanılan 1. Oturuma Geçin',
      'session.slot.2': 'Son Kullanılan 2. Oturuma Geçin',
      'session.slot.3': 'Son Kullanılan 3. Oturuma Geçin',
      'session.slot.4': 'Son Kullanılan 4. Oturuma Geçin',
      'session.slot.5': 'Son Kullanılan 5. Oturuma Geçin',
      'session.slot.6': 'Son Kullanılan 6. Oturuma Geçin',
      'session.slot.7': 'Son Kullanılan 7. Oturuma Geçin',
      'session.slot.8': 'Son Kullanılan 8. Oturuma Geçin',
      'session.slot.9': 'Son Kullanılan 9. Oturuma Geçin',
      'session.focusSearch': 'Oturumlarda Arayın',
      'session.togglePin': 'Geçerli Oturumu Sabitleyin / Sabitlemeyi Kaldırın',
      'session.archive': 'Geçerli Oturumu Arşivleyin',
      'conversation.scrollPageUp': 'Sohbeti Bir Sayfa Yukarı Kaydırın',
      'conversation.scrollPageDown': 'Sohbeti Bir Sayfa Aşağı Kaydırın',
      'workspace.newWorktree': 'Yeni Çalışma Ağacı',
      'workspace.openFolder': 'Klasörü Proje Olarak Açın',
      'composer.focus': 'Mesaj Alanına Odaklanın',
      'composer.modelPicker': 'Model Seçiciyi Açın',
      'composer.voice': 'Sesli Sohbeti Başlatın / Durdurun',
      'composer.dictate': 'Dikteyi Başlatın / Durdurun',
      'composer.reasoningUp': 'Akıl Yürütme Düzeyini Yükseltin',
      'composer.reasoningDown': 'Akıl Yürütme Düzeyini Düşürün',
      'view.toggleSidebar': 'Oturumlar Kenar Çubuğunu Açın / Kapatın',
      'view.cycleSidebarGrouping': 'Oturum Gruplandırma Modunu Değiştirin',
      'view.toggleRightSidebar': 'Dosya Tarayıcısını Açın / Kapatın',
      'view.toggleReview': 'İnceleme Panelini Açın / Kapatın',
      'view.toggleStatusbar': 'Durum Çubuğunu Açın / Kapatın',
      'view.toggleTabStrip': 'Sekmeleri Açın / Kapatın',
      'view.toggleProfileRail': 'Profil Çubuğunu Açın / Kapatın',
      'view.toggleSimpleMode': 'Basit Modu Açın / Kapatın',
      'view.showFiles': 'Dosya Tarayıcısını Gösterin',
      'view.showBrowser': 'Tarayıcıyı Açın / Kapatın',
      'view.toggleHud': 'HUD Modunu Açın / Kapatın',
      'hud.snapToPointer': 'HUD’u İmlece Taşıyın (genel, HUD açıkken)',
      'view.showTerminal': 'Terminali Açın / Kapatın',
      'view.newTerminal': 'Yeni Terminal',
      'view.nextTerminal': 'Sonraki Terminal',
      'view.prevTerminal': 'Önceki Terminal',
      'view.closeTerminal': 'Terminali Kapatın',
      'view.selectionToComposer': 'Seçimi Mesaj Alanına Gönderin',
      'view.terminalCopy': 'Terminal Seçimini Kopyalayın',
      'view.terminalPaste': 'Terminale Yapıştırın',
      'view.closeTab': 'Sekmeyi Kapatın',
      'view.reopenTab': 'Kapatılan Sekmeyi Yeniden Açın',
      'view.flipPanes': 'Kenar Çubuklarının Yerini Değiştirin',
      'view.findInPage': 'Sayfada Bulun',
      'view.findNext': 'Sonraki Eşleşmeyi Bulun',
      'view.findPrevious': 'Önceki Eşleşmeyi Bulun',
      'view.tabSlot.1': '1. Sekmeye Geçin',
      'view.tabSlot.2': '2. Sekmeye Geçin',
      'view.tabSlot.3': '3. Sekmeye Geçin',
      'view.tabSlot.4': '4. Sekmeye Geçin',
      'view.tabSlot.5': '5. Sekmeye Geçin',
      'view.tabSlot.6': '6. Sekmeye Geçin',
      'view.tabSlot.7': '7. Sekmeye Geçin',
      'view.tabSlot.8': '8. Sekmeye Geçin',
      'view.tabSlot.9': '9. Sekmeye Geçin',
      'appearance.toggleMode': 'Açık / Koyu Temayı Değiştirin',
      'profile.default': 'Varsayılan Profile Geçin',
      'profile.switch.1': 'Profil 1’e Geçin',
      'profile.switch.2': 'Profil 2’ye Geçin',
      'profile.switch.3': 'Profil 3’e Geçin',
      'profile.switch.4': 'Profil 4’e Geçin',
      'profile.switch.5': 'Profil 5’e Geçin',
      'profile.switch.6': 'Profil 6’ya Geçin',
      'profile.switch.7': 'Profil 7’ye Geçin',
      'profile.switch.8': 'Profil 8’e Geçin',
      'profile.switch.9': 'Profil 9’a Geçin',
      'profile.switch.10': 'Profil 10’a Geçin',
      'profile.switch.11': 'Profil 11’e Geçin',
      'profile.switch.12': 'Profil 12’ye Geçin',
      'profile.switch.13': 'Profil 13’e Geçin',
      'profile.switch.14': 'Profil 14’e Geçin',
      'profile.switch.15': 'Profil 15’e Geçin',
      'profile.switch.16': 'Profil 16’ya Geçin',
      'profile.switch.17': 'Profil 17’ye Geçin',
      'profile.switch.18': 'Profil 18’e Geçin',
      'profile.next': 'Sonraki Profil',
      'profile.prev': 'Önceki Profil',
      'profile.toggleAll': 'Tüm Profiller Görünümünü Değiştirin',
      'profile.create': 'Profil Oluşturun',
      'composer.send': 'Mesaj Gönderin',
      'composer.newline': 'Yeni Satır Ekleyin',
      'composer.steer': 'Çalışan Turu Yönlendirin',
      'composer.queue': 'Mesajı Sıraya Alın',
      'composer.sendQueued': 'Sıradaki Turu Gönderin',
      'composer.mention': 'Dosyalara, Klasörlere ve URL’lere Atıf Yapın',
      'composer.slash': 'Eğik Çizgi Komut Paleti',
      'composer.help': 'Hızlı yardım',
      'composer.history': 'Açılır Pencere / Geçmiş Arasında Geçin',
      'composer.cancel': 'Açılır Pencereyi Kapatın · Çalıştırmayı İptal Edin'
    }
  },
  findInPage: {
    next: 'Sonraki Eşleşme',
    previous: 'Önceki Eşleşme'
  },
  language: {
    label: 'Dil',
    description: 'Masaüstü arayüzü için dili seçin.',
    saving: 'Dil Kaydediliyor…',
    saveError: 'Dil güncellemesi başarısız oldu.',
    switchTo: 'Dili Değiştirin',
    searchPlaceholder: 'Dillerde Arayın…',
    noResults: 'Dil Bulunamadı'
  },
  settings: {
    subpages: {
      appearanceTheme: 'Tema',
      appearanceTypography: 'Tipografi',
      appearanceWindowLayout: 'Pencere ve Düzen',
      appearanceChatDisplay: 'Sohbet Görünümü',
      appearancePet: 'Evcil Hayvan',
      appearanceGeneral: 'Genel',
      modelMain: 'Ana Model',
      modelAuxiliary: 'Yardımcı Modeller',
      modelMoa: 'Ajan Karışımı',
      modelFallbacks: 'Yedek Modeller',
      chatBehavior: 'Davranış',
      chatAttachments: 'Ekler',
      workspaceProjects: 'Projeler ve Keşif',
      workspaceShell: 'Shell Ortamı',
      workspaceFiles: 'Dosyalar ve Yürütme',
      safetyApprovals: 'Onaylar',
      safetyPrivacy: 'Gizlilik ve Ağ',
      safetyCheckpoints: 'Kontrol Noktaları',
      browserProfile: 'Tarayıcı Profili',
      browserNetwork: 'Yerel ve Özel URL’ler',
      memoryPersistent: 'Kalıcı Bellek',
      memoryContext: 'Bağlam ve Sıkıştırma',
      voiceConversation: 'Sesli Sohbet',
      voiceTranscription: 'Sesten Metne',
      voiceSpeech: 'Metinden Sese',
      advancedRuntime: 'Ajan Sınırları',
      advancedTools: 'Araç Erişimi',
      advancedTerminal: 'Terminal Arka Ucu',
      advancedOutput: 'Çıktı Sınırları',
      advancedDelegation: 'Alt Ajanlar',
      advancedDesktop: 'Masaüstü ve Başlangıç',
      gatewayConnection: 'Bu Pencere',
      gatewayDevices: 'Kayıtlı Bağlantılar',
      gatewayManagedUpdates: 'Uzak Güncellemeler',
      gatewayManagedUpdatesUnavailable:
        'Uzak güncellemeler için yönetilen SSH güncelleme desteği olan bir masaüstü sürümü gerekir',
      gatewayManagedUpdatesEmpty:
        'Güncellemelerini buradan yönetmek için Kayıtlı Bağlantılar bölümüne bir SSH bağlantısı ekleyin',
      keyboardShortcuts: 'Tuş Atamaları',
      hudGesture: 'HUD Hareketi',
      screenCapture: 'Ekran Yakalama',
      notificationAlerts: 'Masaüstü Uyarıları',
      notificationSounds: 'Sesler',
      archivedSessions: 'Arşiv ve Saklama',
      defaultDirectory: 'Varsayılan Proje Klasörü',
      vaultCredentials: 'Kayıtlı Kimlik Bilgileri',
      vaultSources: 'Parola Yöneticileri',
      appUpdates: 'Sürüm ve Güncellemeler',
      uninstall: 'Kaldırma',
      billingOverview: 'Genel Bakış',
      billingPlans: 'Planlar'
    },
    closeSettings: 'Ayarları Kapatın',
    exportConfig: 'Yapılandırmayı Dışa Aktarın',
    importConfig: 'Yapılandırmayı İçe Aktarın',
    resetToDefaults: 'Varsayılanlara Sıfırlayın',
    resetConfirm: 'Tüm ayarlar Hermes varsayılanlarına sıfırlansın mı?',
    exportFailed: 'Dışa aktarma başarısız oldu.',
    resetFailed: 'Sıfırlama başarısız oldu.',
    pluginPages: {
      blurb:
        'Yüklü eklentilerin eklediği seçenekler. Her eklentinin kendi sayfası vardır ve bazıları bunun altına alt sayfalar ekler.',
      empty: 'Henüz Hiçbir Eklentinin Ayarı Yok',
      manage: 'Eklentileri Yönetin',
      agentSettings: 'Ajan Ayarları',
      pageCount: n => `${n} Sayfa`,
      missing: 'Bu eklentinin ayar sayfası yok. Devre dışı bırakılmış veya kaldırılmış olabilir'
    },
    nav: {
      providers: 'Sağlayıcılar',
      providerAccounts: 'Hesaplar',
      providerApiKeys: 'API Anahtarları',
      providerCustomEndpoints: 'Özel Uç Noktalar',
      providerLocalModels: 'Yerel Modeller',
      gateway: 'Ağ Geçitleri',
      apiKeys: 'Araçlar ve Anahtarlar',
      keybinds: 'Klavye Kısayolları',
      keysTools: 'Araçlar',
      keysSettings: 'Ayarlar',
      mcp: 'MCP',
      archivedChats: 'Arşivlenen Sohbetler',
      sessions: 'Oturumlar',
      about: 'Hakkında',
      billing: 'Faturalandırma',
      notifications: 'Bildirimler',
      vault: 'Parolalar ve Girişler',
      plugins: 'Eklentiler'
    },
    plugins: {
      title: 'Masaüstü Eklentileri',
      openFolder: 'Masaüstü Eklentileri Klasörünü Açın',
      rescan: 'Yeniden Tarayın',
      reveal: 'Dosya Yöneticisinde Gösterin',
      enable: 'Enable',
      disable: 'Disable',
      failed: 'başarısız',
      kinds: {
        bundled: 'Paketle Birlikte',
        disk: 'Diskte',
        runtime: 'Çalışma Zamanı'
      },
      installModal: {
        installFromGit: 'Git’ten Kurun',
        reviewRepository: 'Depoyu İnceleyin',
        repoPlaceholder: 'https://github.com/owner/repo',
        title: 'Eklenti Kurun',
        description: 'Herhangi bir şey kurmadan önce bu deponun neler içerdiğini inceleyin.',
        repoLabel: 'Depo',
        verified: 'Doğrulanmış',
        unverified: 'Doğrulanmamış',
        reviewedByNous: 'Nous Tarafından İncelendi',
        installsAndEnables: profile => `${profile} için kurulur ve hemen etkinleştirilir`,
        installsOnly: profile => `${profile} için kurulur`,
        advanced: 'Gelişmiş',
        versionLabel: 'Sürüm',
        reviewedPin: sha => `İncelenen Sabitleme ${sha}`,
        latestCommit: 'Son Commit',
        sourceMoved: sha =>
          sha
            ? `Depo, siz inceledikten sonra değişti. Kurmadan önce yeni sürümü (commit ${sha}) inceleyin.`
            : 'Depo, siz inceledikten sonra değişti. Yeni sürüm okunuyor…',
        legacyBackendConfirm:
          'Bu arka uç uygulamadan eski olduğu için incelediğiniz sürümün kurulacağını garanti edemez: depo o zamandan beri değiştiyse daha yeni sürüm kurulur. Bu garantiyi almak için arka ucu güncelleyin.',
        installAnyway: 'Yine de kurun',
        partialInstall: sha =>
          sha
            ? `Bu eklentinin yalnızca bir kısmı kurulu: ajan tarafı ${sha} commit’inde, ancak masaüstü tarafı depo incelediğinizden beri değiştiği için eşlik edemedi. İki tarafı da gösterilen sürümle değiştirmek için Gelişmiş altındaki Zorla yeniden kur seçeneğini açın, ya da yalnızca ajan tarafını korumak için İptal seçeneğini kullanın.`
            : 'Bu eklentinin yalnızca bir kısmı kurulu: ajan tarafı kuruldu, ancak masaüstü tarafı depo incelediğinizden beri değiştiği için eşlik edemedi. İki tarafı da gösterilen sürümle değiştirmek için Gelişmiş altındaki Zorla yeniden kur seçeneğini açın, ya da yalnızca ajan tarafını korumak için İptal seçeneğini kullanın.',
        nothingToInstall: 'Bu pakette burada kurulacak bir şey yok',
        includesHeading: 'Bu Paket Şunları İçerir',
        agentLabel: 'Ajan Eklentisi',
        desktopLabel: 'Masaüstü Arayüzü',
        profileLabel: 'Profil İçin Kurun',
        agentTargetLocal: (profile, dir) => `${profile} arka ucuna (${dir}) kurulur`,
        agentTargetRemote: profile => `Bağlı ${profile} arka ucuna kurulur`,
        toolsConnected: n => `${n} araç bağlandı`,
        skillsReady: names => `8 yetenek hazır`,
        nextChat: 'sonraki sohbetinizde daha fazla araç kullanılabilir',
        serverNotConnected: (server, reason) => `MCP sunucusu ${server} bağlı değil: ${reason}`,
        missingEnvAction: 'Ayarlayın',
        alreadyInstalled: name => `${name} zaten kurulu`,
        desktopTarget: 'Bu uygulamanın yerel desktop-plugins klasörüne kurulur',
        desktopTargetFromPackage: 'Yukarıdaki paketten bu uygulamaya yüklenir — her profil için aynıdır',
        desktopOnlyNote: 'Yalnızca masaüstüne yönelik paketler arka uç ajan eklentisi kurmaz',
        insecureWarning:
          'Bu URL güvenli olmayan veya yerel bir şema kullanıyor. Üretim kurulumları için https:// veya git@ tercih edin',
        securityIntro:
          'Yalnızca güvendiğiniz kaynaklardan kurulum yapın — nelerin ekleneceğini görmek isterseniz aşağıdaki depoyu inceleyin.',
        sourceHeading: 'Kaynak Kodu',
        viewRepository: 'Depoyu Görüntüleyin',
        viewPluginFiles: 'Eklenti Dosyalarını Görüntüleyin',
        enableAgent: 'Kurulumdan Sonra Ajan Eklentisini Etkinleştirin',
        forceReinstall: 'Yeniden Kurmaya Zorla (Kuruluysa Değiştirin)',
        pinToCommit: 'Commit’e Sabitleyin (İsteğe Bağlı)',
        pinToCommitPlaceholder: 'Tam 40 karakterlik commit SHA’sı',
        pinToCommitHint:
          'Bu SHA’yı kuran herkes aynı kodu alır; eklenti yeniden sabitlenene kadar güncellemeleri reddeder. En son commit için boş bırakın.',
        pinToCommitInvalid: 'Tam 40 karakterlik bir commit SHA’sı olmalıdır (dallar ve etiketler kabul edilmez)',
        install: 'Kurun',
        installing: 'Kuruluyor…',
        probing: 'Depo İnceleniyor…',
        probeUnavailable: 'Bu ortamda eklenti incelemesi kullanılamıyor',
        desktopUnavailable: 'Bu ortamda masaüstü eklentisi kurulumu kullanılamıyor',
        selectComponent: 'Kurmak için en az bir bileşen seçin',
        agentSuccess: name => `Ajan eklentisi ${name} kuruldu`,
        desktopSuccess: name => `Masaüstü eklentisi ${name} kuruldu`,
        agentFailed: 'Ajan eklentisi kurulumu başarısız oldu.',
        installUncertain:
          'Hermes kurulum sonucunu beklemeyi bıraktı, ancak eklenti hâlâ kuruluyor olabilir. Bu iletişim kutusunu kapatın ve yeniden kurmayı denemeden önce Eklentiler bölümündeki Yeniden Tarayın seçeneğini kullanın',
        desktopFailed: 'Masaüstü eklentisi kurulumu başarısız oldu.',
        missingEnv: (name, vars) =>
          `${name} kurulu ancak çalışabilmesi için bir anahtar gerekiyor: ${vars}. Şimdi ekleyin, aksi halde eklentinin araçları başarısız olur`
      }
    },
    vault: {
      title: 'Parolalar ve Girişler',
      blurb:
        '“GitHub’a giriş yap” deyin, ajan sizin için oturum açar. Bir oturum açma sayfasıyla ilk karşılaştığında giriş bilgilerini hemen orada sorar; sonrasında kendiliğinden çalışır. Parolalar bu makinede şifrelenir ve doğrudan sayfaya doldurulur — model bunları asla görmez.',
      count: n => `${n} Kayıtlı`,
      loadFailed: 'Kasa öğeleri yüklenemedi.',
      empty: 'Henüz Kayıtlı Öğe Yok',
      emptyDesc:
        'Buraya bir şey eklemek zorunda değilsiniz. Ajandan bir siteye oturum açmasını isteyin; giriş bilgilerini bir kez, o anda soracaktır. Önceden girmeyi tercih ederseniz Ekle’yi kullanın.',
      add: 'Ekleyin',
      addTitle: 'Giriş, Kart veya Adres Ekleyin',
      addDescription: 'Bu makinede şifrelenmiş olarak saklanır. Ajan parolayı asla görmez.',
      added: 'Kaydedildi',
      adding: 'Kaydediliyor…',
      addConfirm: 'Kaydedin',
      kindField: 'Tür',
      kinds: {
        login: 'Giriş',
        payment: 'Ödeme Kartı',
        address: 'Adres'
      },
      labelField: 'Etiket',
      labelPlaceholder: 'Örn. GitHub İş Hesabı',
      labelRequired: 'Etiket Gerekli',
      originField: 'Site Kaynağı',
      originPlaceholder: 'https://github.com',
      originPlaceholderCheckout: 'https://shop.example.com',
      originInvalid: 'https://example.com Gibi Geçerli Bir URL Girin',
      identifierTypeField: 'Tanımlayıcı Türü',
      identifierTypes: {
        email: 'E-posta',
        phone: 'Telefon',
        username: 'Kullanıcı Adı'
      },
      identifierField: 'Tanımlayıcı',
      identifierShown: identifier => `${identifier}`,
      passwordField: 'Parola',
      loginFieldsRequired: 'Tanımlayıcı ve Parola Gerekli',
      cardNumberField: 'Kart Numarası',
      cardNameField: 'Kart Üzerindeki İsim',
      expMonthField: 'Son Kullanma Ayı',
      expYearField: 'Son Kullanma Yılı',
      cvcField: 'CVC',
      postalField: 'Posta Kodu',
      addressLine1Field: 'Adres Satırı 1',
      addressLine2Field: 'Adres Satırı 2',
      cityField: 'Şehir',
      stateField: 'Eyalet / Bölge',
      countryField: 'Ülke',
      optional: '(İsteğe Bağlı)',
      createdOn: date => `${date} Eklendi`,
      deleteAction: 'Kayıtlı Öğeyi Kaldırın',
      otpField: 'Doğrulayıcı Anahtarı',
      otpPlaceholder: 'Base32 Gizli Anahtarı veya otpauth:// Bağlantısı',
      otpHint:
        '2FA’yı etkinleştirdiğinizde sitenin gösterdiği “kurulum anahtarı”. Kaydedildiğinde Hermes kodları kendisi oluşturur.',
      twoFactorBadge: '2FA Otomatik',
      deleteTitle: 'Bu Öğe Silinsin Mi?',
      deleteDescription: label => `“${label}” kaldırılacak. Bu işlem geri alınamaz.`,
      deleteConfirm: 'Silin',
      sources: {
        title: 'Parola Yöneticileri',
        blurb:
          'Yüklü parola yöneticileri otomatik olarak algılanır. Ajan, birinden ilk kez giriş bilgisi gerektiğinde sizden onu kilidini açmanızı ister (oturum başına bir kez); bellekte yalnızca bir oturum Token’ı kalır ve ajan ana parolanızı veya herhangi bir giriş bilgisini asla görmez.',
        toggleFailed: 'Parola yöneticisi güncellenemedi.',
        notInstalled: name =>
          `Algılanmadı. ${name} Komut Satırı Aracını Kurun ve Oturum Açın; Hermes Otomatik Olarak Algılar`,
        disabledDesc: 'Algılandı ancak Hermes için kapalı.',
        lockedDesc:
          'Algılandı. Ajan giriş bilgisine ihtiyaç duyduğunda kilidini açmanızı ister; dilerseniz şimdi açın.',
        unlockedDesc:
          'Bu oturum için kilidi açıldı. 30 dakika hareketsizlik sonrasında veya Hermes kapandığında otomatik olarak kilitlenir.',
        statusLocked: 'Kilitli',
        statusNotDetected: 'Algılanmadı',
        statusOff: 'Kapalı',
        statusUnlocked: 'Kilidi Açık',
        unlock: 'Kilidini Açın',
        unlocking: 'Kilit Açılıyor…',
        lock: 'Kilitleyin',
        unlocked: name => `${name} Bu Oturum İçin Açıldı`,
        unlockTitle: name => `${name} Kilidini Açın`,
        unlockDescription:
          'Ana parolanızı girin. Bu makinedeki parola yöneticisine iletilir ve atılır — hiçbir zaman saklanmaz, günlüğe yazılmaz veya ajana gösterilmez.',
        masterPasswordPlaceholder: 'Ana Parola'
      }
    },
    notifications: {
      title: 'Bildirimler',
      intro: 'İşletim sistemi bildirimleri (uygulama içi bildirimler değil). Cihaz başına.',
      enableAll: 'Bildirimleri Etkinleştirin',
      enableAllDesc: 'Kapalı konumu aşağıdaki tüm bildirimleri susturur.',
      focusedHint: 'Tamamlanma uyarıları yalnızca Hermes arka plandayken gösterilir.',
      kinds: {
        approval: {
          label: 'Onay Gerekli',
          description: 'Bir komut, onayınızı veya reddinizi bekliyor.'
        },
        input: {
          label: 'Girdi Gerekli',
          description: 'Hermes bir soru sordu veya bir parola ya da gizli bilgi gerekiyor.'
        },
        turnDone: {
          label: 'Yanıt Hazır',
          description: 'Hermes arka plandayken bir tur tamamlandı.'
        },
        turnError: {
          label: 'Tur Başarısız',
          description: 'Arka plan turu hataları.'
        },
        backgroundDone: {
          label: 'Arka Plan Görevi Tamamlandı',
          description: 'Arka planda çalışan bir terminal komutu tamamlandı.'
        },
        credits: {
          label: 'Kredi Uyarıları',
          description: 'Kredi erişimi duraklatıldı veya geri açıldı.'
        },
        plugin: {
          label: 'Eklenti Bildirimleri',
          description: 'Hermes arka plandayken bir masaüstü eklentisi bildirim gönderdi.'
        }
      },
      test: 'Test Bildirimi Gönderin',
      testTitle: 'Hermes',
      testBody: 'Bildirimler çalışıyor.',
      testSent:
        'Test gönderildi. Hiçbir şey görünmüyorsa işletim sistemi bildirim izinlerini ve Odak/Rahatsız Etmeyin ayarlarını kontrol edin',
      testUnsupported: 'Bu sistem yerel bildirimleri desteklemiyor',
      muteSoundsTitle: 'Arayüz Seslerini Sustur',
      muteSoundsDesc:
        'Otomatik tamamlama, uyandırma sözcüğü ve düşünme ipuçlarını, dokunsal geri bildirimi ve işletim sistemi bildirim seslerini susturur. Ses önizlemeleri ve konuşulan yanıtlar çalmaya devam eder.',
      completionSoundTitle: 'Tamamlanma Sesi',
      completionSoundDesc: 'Bir ajan turu tamamlandığında çalınır. Bir ön ayar seçip burada önizleyebilirsiniz.',
      completionSoundPreview: 'Önizleyin'
    },
    sections: {
      model: 'Model',
      chat: 'Sohbet',
      appearance: 'Görünüm',
      workspace: 'Çalışma Alanı',
      safety: 'Güvenlik',
      memory: 'Bellek ve Bağlam',
      voice: 'Ses',
      advanced: 'Gelişmiş'
    },
    searchPlaceholder: {
      about: 'Hermes Masaüstü Hakkında',
      config: 'Ayarlarda Arayın…',
      gateway: 'Ağ Geçidi Bağlantısı…',
      keys: 'API Anahtarlarında Arayın…',
      mcp: 'MCP Sunucularında Arayın…',
      sessions: 'Arşivlenen Oturumlarda Arayın…'
    },
    modeOptions: {
      light: {
        label: 'Açık',
        description: 'Aydınlık masaüstü yüzeyleri.'
      },
      dark: {
        label: 'Koyu',
        description: 'Düşük parlaklıkta çalışma alanı.'
      },
      system: {
        label: 'Sistem',
        description: 'İşletim sistemi görünümünü izleyin.'
      }
    },
    appearance: {
      chatTextScaleTitle: 'Sohbet Metni Boyutu.',
      chatTextScaleDesc:
        'Konuşma metnini ve mesaj düzenleyicisini Arayüz Ölçeği’ne göre ölçekler. Kenar çubukları ve denetimler aynı boyutta kalır.',
      title: 'Görünüm',
      intro: 'Yalnızca masaüstü. Mod parlaklıktır; tema ise palet ve sohbet görünümüdür.',
      colorMode: 'Renk Modu',
      colorModeDesc: 'Sabit bir mod seçin veya Hermes’in sistem ayarınızı izlemesine izin verin.',
      toolViewTitle: 'Araç Çağrısı Görünümü',
      toolViewDesc: 'Ürün, ham araç yüklerini gizler; Teknik, tam girdi/çıktıyı gösterir.',
      hideCodeDiffsTitle: 'Kod Farklarını Gizleyin',
      hideCodeDiffsDesc:
        'Dosya düzenlemelerini, kod olmadan eklenen/kaldırılan satır sayılarıyla satır içi araç satırları olarak gösterin.',
      hideThreadTimelineTitle: 'Konu Zaman Çizelgesi Çubuklarını Gizleyin',
      hideThreadTimelineDesc: 'Her konuşmanın sağ kenarındaki gezinme çubuklarını gizleyin.',
      reasoningCollapsedTitle: 'Düşünmeyi Varsayılan Olarak Daraltın',
      reasoningCollapsedDesc: 'Akış halindeki akıl yürütmeyi, siz açana kadar genişletmeden kullanılabilir tutun.',
      uiScaleTitle: 'Arayüz Ölçeği',
      uiScaleDesc: percent =>
        `Tüm uygulamada metni ve denetimleri ölçekler. Cmd/Ctrl ile +, - ve 0 da çalışır. Geçerli: ${percent}%.`,
      sessionDensityTitle: 'Oturum Listesi Yoğunluğu',
      sessionDensityDesc: 'Kenar çubuğunda oturum başlıklarının altında ne kadar bağlam görüneceğini seçin.',
      sessionDensityCompact: 'Sıkı',
      sessionDensityComfortable: 'Rahat',
      sessionDensityDetailed: 'Ayrıntılı',
      tabStripTitle: 'Sekme Çubuğu',
      tabStripDesc:
        'Bir bölgenin üzerinde sekmeleri gösterin. Otomatik, tek bölme için başka bir sohbet veya döşeme bölgesi açık değilse sekmeleri gizler.',
      tabStripAuto: 'Otomatik',
      tabStripAlways: 'Her Zaman',
      tabStripNever: 'Asla',
      appActionsTitle: 'Uygulama Eylemleri',
      appActionsDesc:
        'Ayarlar, Düzen ve HUD’ın başlık çubuğunda nerede duracağını belirler. Sağ seçeneği, solda sekmeler için yer bırakır.',
      appActionsLeft: 'Sol',
      appActionsRight: 'Sağ',
      terminalFontTitle: 'Terminal Yazı Tipi',
      terminalFontDesc:
        'Masaüstü terminalleri için kurulu bir yazı tipi seçin. Nerd Fonts, Powerlevel10k ve kabuk simgelerini işler; paketle gelen JetBrains Mono’yu kullanmak için boş bırakın.',
      terminalFontPlaceholder: 'MesloLGS NF veya Bir CSS Yazı Tipi Yığını',
      terminalFontPreview: 'Karakter Önizlemesi',
      terminalFontReset: 'Varsayılanı Kullanın',
      chatFontTitle: 'Sohbet Yazı Tipi',
      chatFontDesc:
        'Sohbet ve uygulamanın geri kalanı için kurulu bir yazı tipi seçin. OpenDyslexic gibi okunabilirlik yazı tipleri için kullanışlıdır; temanın yazı tipini kullanmak için boş bırakın.',
      chatFontPlaceholder: 'OpenDyslexic veya Bir CSS Yazı Tipi Yığını',
      chatFontPreview: 'Önizleme',
      chatFontSample: 'Pijamalı Hasta Yağız Şoföre Çabucak Güvendi 0123456789',
      chatFontReset: 'Tema Yazı Tipini Kullanın',
      translucencyTitle: 'Pencere Saydamlığı',
      translucencyDesc:
        'Masaüstünüzü tüm pencere boyunca, yazılar dahil görün. Açık ve koyu tema için ayrı ayrı ayarlanır.',
      translucencyGlassDesc:
        'Mat cam: masaüstü yumuşak bir bulanıklık olarak görünürken yazılar net kalır. Açık ve koyu tema için ayrı ayrı ayarlanır.',
      translucencyModeClear: 'Berrak',
      translucencyModeGlass: 'Cam',
      translucencyTintTitle: 'Renk Tonu',
      translucencyFadeTitle: 'Solma',
      translucencyFrostTitle: 'Buz',
      translucencyFrost: {
        'under-window': 'Derin',
        popover: 'Yumuşak',
        titlebar: 'Parlak',
        header: 'Parlama'
      },
      translucencyScopeTitle: 'Alan',
      translucencyScope: {
        window: 'Tüm Pencere',
        sidebar: 'Yalnızca Kenar Çubuğu'
      },
      backdropTitle: 'Sohbet Arka Planı',
      backdropDesc: 'Konuşmanın arkasındaki soluk heykel görseli.',
      userBubbleTitle: 'Mesaj Balonu',
      userBubbleDesc:
        'Kendi mesajlarınızın ne kadar saydam olduğunu belirler. 0’da opak; 100’de yalnızca dış çizgi kalır.',
      textDirectionTitle: 'Metin yönü',
      textDirectionDesc:
        'Sohbet mesajlarının ve yazma alanının yönünü nasıl seçtiğini belirler. Otomatik, her paragrafın ilk harfini izler; karışık metin yanlış hizalandığında bir yön seçin. Kod her zaman soldan sağa kalır.',
      textDirection: {
        auto: 'Otomatik',
        rtl: 'Sağdan Sola',
        ltr: 'Soldan Sağa'
      },
      introSplashTitle: 'Açılış Ekranı',
      introSplashDesc: 'Boş bir sohbette gösterilen marka yazısı ve istem.',
      modelPricingTitle: 'Model Fiyatlandırması',
      modelPricingDesc: 'Model seçicide milyon token başına girdi, çıktı ve önbellek okuma fiyatlarını gösterin.',
      reactionsTitle: 'Mesaj Tepkileri',
      reactionsDesc:
        'iMessage tarzı emoji tepkileri — mesajlara tepki verin, Hermes de sizin mesajlarınıza tepki verebilir.',
      tipsTitle: 'Uygulama İçi İpuçları',
      tipsDesc:
        'Uygulamadan ve Hermes’ten ara sıra ipuçları. Her ipucu bir kez görünür. İlk 30 gününüzden sonra otomatik olarak kapanır; yeniden açabilirsiniz.',
      tipsReset: count => `${count} İpucunu Yeniden Gösterin`,
      toursTitle: 'Rehberli Turlar',
      toursDesc:
        'Hermes sizi uygulamada gezerken her adımı öne çıkarsın. İlk 30 gününüzden sonra otomatik olarak kapanır; yeniden açabilirsiniz.',
      composerPopoutTitle: 'Yüzen Yazma Alanı',
      composerPopoutDesc: 'Yazma alanının yuvasından dışarı sürüklenmesine izin verin. Kapalıyken altta sabit kalır.',
      fileBrowserTitle: 'Dosya Tarayıcısı',
      fileBrowserDesc:
        'Bir çalışma alanı açıkken dosya tarayıcısını sohbetin yanında gösterin. Başlık çubuğundaki anahtar da bunu değiştirir.',
      vibeHeartsTitle: 'Vibe Kalpleri',
      vibeHeartsDesc:
        'Teşekkür ettiğinizde, “ily”, “good bot” yazdığınızda veya bir kalp gönderdiğinizde uçuşan kalpler. Yukarıdaki Mesaj Tepkileri’nden ayrıdır.',
      embedsTitle: 'Satır İçi Gömülü İçerikler',
      embedsDesc:
        'Zengin önizlemeler üçüncü taraf sitelerden (YouTube, X, …) yüklenir. Sorun seçeneği, her birine izin verene kadar bir yer tutucu gösterir; Her Zaman bunları otomatik yükler; Kapalı ise düz bağlantıları korur.',
      embedsAsk: 'Sorun',
      embedsAlways: 'Her Zaman',
      embedsOff: 'Kapalı',
      embedsReset: count => `İzin Verilen ${count} Hizmeti Sıfırlayın`,
      resumeLastSessionTitle: 'Açılışta Son Sohbeti Yeniden Açın',
      resumeLastSessionDesc:
        'Etkinleştirildiğinde uygulama, soğuk başlatmada en son sohbetinizi yeniden açar. Her zaman yeni ve boş bir sohbetle başlamak için kapatın.',
      product: 'Ürün',
      productDesc: 'Kısa özetlerle insan dostu araç etkinliği.',
      technical: 'Teknik',
      technicalDesc: 'Ham araç bağımsız değişkenlerini/sonuçlarını ve alt düzey ayrıntıları dahil edin.',
      themeTitle: 'Tema',
      themeDesc: 'Yalnızca masaüstü paletleri. Seçilen mod bunun üzerine uygulanır.',
      themeSearchPlaceholder: 'Temalarınızda veya VS Code Marketplace’te Arayın…',
      themeProfileNote: profile => `${profile} Profili İçin Kaydedildi — Her Profil Kendi Temasını Korur`,
      installTitle: 'VS Code’dan Kurun',
      installDesc:
        'Renk temasını masaüstü paletine dönüştürmek için bir Marketplace uzantı kimliği (ör. dracula-theme.theme-dracula) yapıştırın.',
      installPlaceholder: 'publisher.extension',
      installButton: 'Kurun',
      installing: 'Kuruluyor…',
      installError: 'Bu tema kurulamadı.',
      installed: name => `“${name}” Kuruldu`,
      removeTheme: 'Temayı Kaldırın',
      importedBadge: 'İçe Aktarıldı',
      pet: {
        title: 'Evcil Hayvan',
        intro:
          'Uygulamanın üzerinde yüzen ve Hermes’in yaptıklarına tepki veren animasyonlu bir petdex maskotu sahiplenin — araçlar çalışırken koşar, başarıda kutlar, hatalarda küser.',
        restartHint:
          'Evcil hayvanlar için kısa bir yeniden başlatma gerekiyor — çalışan uygulama bu özellik eklenmeden önce başlatıldı. Hermes’ten çıkıp yeniden açın, ardından buraya dönün.',
        scaleTitle: 'Boyut',
        scaleDesc: 'Yüzen maskotun boyutunu değiştirin. Her yerde anında uygulanır.',
        roamTitle: 'Dolaşsın',
        roamDesc: 'Evcil hayvanın boştayken pencerede kendi başına dolaşmasına izin verin.',
        chooseTitle: 'Bir Evcil Hayvan Seçin',
        chooseDesc: 'Birini seçmek, gerekirse kurar ve etkinleştirir.',
        searchPlaceholder: 'Evcil Hayvanlarda Arayın…',
        unreachable: 'Petdex Galerisine Ulaşılamadı. Bağlantınızı Kontrol Edip Bu Sayfayı Yeniden Açın',
        noMatch: query => `“${query}” İle Eşleşen Evcil Hayvan Yok`,
        installedTag: 'Kurulu',
        generatedTag: 'Oluşturuldu',
        countCapped: (cap, total) => `${total} Evcil Hayvandan ${cap} Tanesi Gösteriliyor — Daraltmak İçin Yazın`,
        count: n => `${n} Evcil Hayvan`,
        uninstall: name => `${name} Kaldırın`,
        delete: name => `${name} Silin`,
        deleteTitle: name => `${name} Silinsin Mi?`,
        deleteBody: 'Bu işlem evcil hayvanı kalıcı olarak siler — yeniden kurulamaz.',
        deleteConfirm: 'Silin',
        rename: name => `${name} Adını Değiştirin`,
        renameTitle: 'Evcil Hayvanı Yeniden Adlandırın',
        renamePlaceholder: 'Evcil Hayvanınıza Ad Verin',
        renameSave: 'Kaydedin',
        exportPet: name => `${name} Dışa Aktarın`,
        adoptFailed: slug => `${slug} sahiplenilemedi.`,
        uninstallFailed: slug => `${slug} kaldırılamadı.`,
        renameFailed: slug => `${slug} adı değiştirilemedi.`,
        exportFailed: slug => `${slug} dışa aktarılamadı.`,
        noneAvailable: 'Şu Anda Açılabilecek Evcil Hayvan Yok',
        turnOnFailed: 'Evcil hayvan açılamadı.',
        turnOffFailed: 'Evcil hayvan kapatılamadı.'
      }
    },
    fieldLabels: defineFieldCopy({
      agent: {
        apiMaxRetries: 'API Yeniden Deneme Sınırı',
        imageInputMode: 'Görsel Ekleri',
        maxTurns: 'Maksimum Ajan Adımı',
        serviceTier: 'Hizmet Katmanı',
        toolUseEnforcement: 'Araç Kullanımı Zorunluluğu'
      },
      approvals: {
        mcpReloadConfirm: 'MCP Yeniden Yüklemelerini Onaylayın',
        mode: 'Onay Modu',
        timeout: 'Onay Zaman Aşımı'
      },
      auxiliary: {
        compression: {
          timeout: 'Sıkıştırma modeli zaman aşımı (sn)'
        }
      },
      browser: {
        allowPrivateUrls: 'Tarayıcı Özel URL’leri',
        autoLocalForPrivateUrls: 'Özel URL’ler İçin Yerel Tarayıcı',
        useRealProfile: 'Gerçek Tarayıcı Profilimi Kullanın'
      },
      checkpoints: {
        enabled: 'Dosya Kontrol Noktaları',
        maxSnapshots: 'Kontrol Noktası Sınırı'
      },
      codeExecution: {
        mode: 'Kod Yürütme Modu'
      },
      commandAllowlist: 'Komut İzin Listesi',
      compression: {
        codexGpt55Autoraise: 'Codex Sıkıştırma Otomatik Artışı',
        enabled: 'Otomatik Sıkıştırma',
        protectLastN: 'Korunan Son Mesajlar',
        targetRatio: 'Sıkıştırma Hedefi',
        threshold: 'Sıkıştırma Eşiği'
      },
      context: {
        engine: 'Bağlam Motoru'
      },
      delegation: {
        childTimeoutSeconds: 'Alt Ajan Zaman Aşımı',
        maxConcurrentChildren: 'Paralel Alt Ajanlar',
        maxIterations: 'Alt Ajan Tur Sınırı',
        model: 'Alt Ajan Modeli',
        provider: 'Alt Ajan Sağlayıcısı',
        reasoningEffort: 'Alt Ajan Akıl Yürütme Düzeyi'
      },
      desktop: {
        repoScanEnabled: 'Otomatik Depo Keşfi',
        repoScanExcludePaths: 'Hariç Tutulan Depo Yolları',
        repoScanRoots: 'Depo Keşif Kökleri'
      },
      display: {
        personality: 'Kişilik',
        showReasoning: 'Akıl Yürütme Blokları'
      },
      fallbackProviders: 'Yedek Modeller',
      fileReadMaxChars: 'Dosya Okuma Sınırı',
      memory: {
        memoryCharLimit: 'Bellek Bütçesi',
        memoryEnabled: 'Kalıcı Bellek',
        provider: 'Bellek Sağlayıcısı',
        userCharLimit: 'Profil Bütçesi',
        userProfileEnabled: 'Kullanıcı Profili'
      },
      model: 'Varsayılan Model',
      modelContextLength: 'Ana model bağlam penceresi (geçersiz kılma)',
      security: {
        allowPrivateUrls: 'Özel URL’lere İzin Verin',
        redactSecrets: 'Gizli Bilgileri Gizleyin'
      },
      stt: {
        deepinfra: {
          model: 'DeepInfra STT Modeli'
        },
        echoTranscripts: 'Dökümleri Geri Gönderin',
        elevenlabs: {
          diarize: 'Konuşmacı Ayrıştırma',
          languageCode: 'ElevenLabs Dili',
          modelId: 'ElevenLabs STT Modeli',
          tagAudioEvents: 'Ses Olaylarını Etiketleyin'
        },
        enabled: 'Konuşmadan Metne',
        groq: {
          model: 'Groq STT Modeli'
        },
        local: {
          language: 'Konuşma Dili',
          model: 'Yerel Sesten Metine Dönüştürme Modeli'
        },
        mistral: {
          model: 'Mistral STT Modeli'
        },
        openai: {
          model: 'OpenAI STT Modeli',
          streamingModel: 'OpenAI Canlı Döküm Modeli'
        },
        provider: 'Konuşmadan Metne Sağlayıcısı',
        streaming: 'Canlı Döküm',
        xai: {
          model: 'xAI STT Modeli'
        }
      },
      terminal: {
        backend: 'Yürütme Arka Ucu',
        cwd: 'Çalışma Dizini',
        daytonaImage: 'Daytona İmajı',
        dockerImage: 'Docker İmajı',
        envPassthrough: 'Ortam Aktarımı',
        modalImage: 'Modal İmajı',
        persistentShell: 'Kalıcı Kabuk',
        singularityImage: 'Singularity İmajı',
        timeout: 'Komut Zaman Aşımı'
      },
      timezone: 'Saat Dilimi',
      toolOutput: {
        maxBytes: 'Terminal Çıktı Sınırı',
        maxLineLength: 'Satır Uzunluğu Sınırı',
        maxLines: 'Dosya Sayfa Sınırı'
      },
      toolsets: 'Etkin Araç Setleri',
      tts: {
        deepinfra: {
          model: 'DeepInfra TTS Modeli',
          voice: 'DeepInfra Sesi'
        },
        edge: {
          voice: 'Edge Sesi'
        },
        elevenlabs: {
          modelId: 'ElevenLabs Modeli',
          voiceId: 'ElevenLabs Sesi'
        },
        gemini: {
          model: 'Gemini TTS Modeli',
          voice: 'Gemini Sesi'
        },
        kittentts: {
          model: 'KittenTTS Modeli',
          voice: 'KittenTTS Sesi'
        },
        minimax: {
          model: 'MiniMax TTS Modeli',
          voiceId: 'MiniMax Sesi'
        },
        mistral: {
          model: 'Mistral TTS Modeli',
          voiceId: 'Mistral Sesi'
        },
        neutts: {
          device: 'NeuTTS Cihazı',
          model: 'NeuTTS Modeli'
        },
        openai: {
          model: 'OpenAI TTS Modeli',
          voice: 'OpenAI Sesi'
        },
        piper: {
          voice: 'Piper Sesi'
        },
        provider: 'Metinden Konuşmaya Sağlayıcısı',
        xai: {
          autoSpeechTags: 'xAI Otomatik Ses Etiketleri',
          bitRate: 'xAI Bit Hızı',
          language: 'xAI Dili',
          optimizeStreamingLatency: 'xAI Akış Gecikmesi Optimizasyonu',
          sampleRate: 'xAI Örnekleme Hızı',
          speed: 'xAI Oynatma Hızı',
          voiceId: 'xAI (Grok) Sesi'
        }
      },
      updates: {
        nonInteractiveLocalChanges: 'Uygulama İçi Güncelleme Yerel Değişiklikleri'
      },
      voice: {
        autoTts: 'Yanıtları Sesli Okuyun',
        gptLive: {
          instructions: 'GPT-Live Personası',
          voice: 'GPT-Live Sesi'
        },
        maxRecordingSeconds: 'Maksimum Kayıt Süresi',
        voiceChatMode: 'Sesli Sohbet Modu'
      }
    }),
    fieldDescriptions: defineFieldCopy({
      agent: {
        apiMaxRetries: 'Bir API çağrısı başarısız olduğunda Hermes’in en fazla kaç kez yeniden deneyeceği.',
        imageInputMode: 'Görsel eklerinin modele nasıl gönderileceğini denetler.',
        maxTurns: 'Hermes bir çalışmayı durdurmadan önceki araç çağırma turları için üst sınır.',
        serviceTier:
          'Hızlı: Ajan her zaman en yüksek performanslı, gecikmesiz hızlı modda çalışır. — Otomatik: Kullanıcı konuşmaya veya yazmaya başladığında, ilk tepki süresini düşürmek için ilk N saniye hızlı katman devreye girer, ardından normal moda döner. — Soğuk: Sadece konuşmanın/oturuma başlandığı ilk adımda hızlı katman tetiklenir, sonraki adımlarda standart mod kullanılır.',
        toolUseEnforcement: 'Ajanın araç kullanımını ne kadar zorunlu tutacağı.'
      },
      approvals: {
        mode: 'Hermes’in açık onay gerektiren komutları nasıl ele aldığı.',
        timeout: 'Onay istemlerinin zaman aşımına uğramadan önce ne kadar bekleyeceği.'
      },
      auxiliary: {
        compression: {
          timeout:
            'Yardımcı sıkıştırma modeli için çağrı başına beklenecek saniye (varsayılan 120). Yavaş yerel modeller için artırın.'
        }
      },
      browser: {
        allowPrivateUrls: 'Tarayıcının yerel ağdaki (özel) adreslere erişmesine izin verin.',
        autoLocalForPrivateUrls: 'Özel adresler için bulut yerine yerel tarayıcıyı kullanın.',
        useRealProfile:
          'Yerel tarama gerçek oturum açma bilgilerinizi kullanır. Hermes, varsayılan tarayıcınızın profilini (çerezler, oturum açma bilgileri, tercihler) yönetilen bir anlık görüntüye kopyalar ve paketlenmiş Chromium ile çalıştırır — canlı profiliniz asla doğrudan açılmaz ve kopya her çalıştırmada ondan yenilenir. Ayrıca bir bulut tarayıcı arka ucu yapılandırılmış olsa bile ajanın istek üzerine yerel gerçek profil oturumu açmasına olanak tanır. Yalnızca Chromium tabanlı tarayıcılar (Chrome, Edge, Brave, Brave Origin, Chromium) desteklenir; Chromium olmayan bir varsayılan tarayıcı açık bir mesajla başarısız olur. Varsayılan olarak kapalıdır.'
      },
      checkpoints: {
        enabled: 'Dosya düzenlemelerinden önce geri alma anlık görüntüleri oluşturun.',
        maxSnapshots: 'Saklanacak en fazla geri alma anlık görüntüsü sayısı.'
      },
      codeExecution: {
        mode: 'Kod yürütmenin geçerli projeyle ne kadar sıkı sınırlandırıldığı.'
      },
      commandAllowlist: 'Her zaman onay istemeden çalıştırılmasına izin verilen komut kalıpları.',
      compression: {
        codexGpt55Autoraise: 'Desteklenen ChatGPT Codex OAuth modelleri için sıkıştırmayı %85’e çıkarın.',
        enabled: 'Konuşmalar büyüdüğünde daha eski bağlamı özetleyin.',
        protectLastN: 'Sıkıştırmada korunacak son mesaj sayısı.',
        targetRatio: 'Sıkıştırmadan sonra hedeflenen bağlam doluluğu.',
        threshold: 'Sıkıştırma, bağlamın bu yüzdesi dolduğunda başlar.'
      },
      context: {
        engine: 'Bağlam sınırına yaklaşan uzun konuşmaları yönetme stratejisi.'
      },
      delegation: {
        childTimeoutSeconds: 'Bir alt ajan için zaman aşımı (saniye).',
        maxConcurrentChildren: 'Aynı anda çalıştırılacak en fazla alt ajan sayısı.',
        maxIterations: 'Bir alt ajanın yapabileceği en fazla tur sayısı.',
        model: 'Alt ajanların kullandığı model.',
        provider: 'Alt ajanların kullandığı sağlayıcı.',
        reasoningEffort: 'Devredilen alt ajanlar için akıl yürütme düzeyi.'
      },
      desktop: {
        repoScanEnabled: 'Projelerde göstermek için yerel klasörleri Git depoları açısından tarayın.',
        repoScanExcludePaths: 'Depo keşfi sırasında atlanacak klasörler ve bunların alt klasörleri.',
        repoScanRoots: 'Taranacak klasörler. Ana dizininizi taramak için boş bırakın.'
      },
      display: {
        personality: 'Yeni oturumlar için varsayılan asistan stili.',
        showReasoning: 'Arka uç sağladığında akıl yürütme bölümlerini gösterin.'
      },
      fallbackProviders: 'Varsayılan model başarısız olursa denenecek yedek sağlayıcı:model girdileri.',
      fileReadMaxChars: 'Hermes’in tek bir dosya isteğinden okuyabileceği maksimum karakter sayısı.',
      memory: {
        memoryCharLimit: 'Bellek için karakter bütçesi.',
        memoryEnabled: 'Gelecekteki oturumlara yardımcı olabilecek kalıcı anıları kaydedin.',
        provider: 'Bellek sağlayıcı eklentisi.',
        userCharLimit: 'Kullanıcı profili için karakter bütçesi.',
        userProfileEnabled: 'Kullanıcı tercihlerinin kompakt bir profilini tutun.'
      },
      model: 'Oluşturucuda farklı bir model seçmediğiniz sürece yeni sohbetler için kullanılır.',
      modelContextLength:
        'Yalnızca ANA sohbet modelinin algılanan bağlam penceresini geçersiz kılar (token). Seçili modelin algılanan değerini kullanmak için 0 olarak bırakın. Yardımcı/MoA modellerini etkilemez.',
      security: {
        allowPrivateUrls: 'Ajanın yalnızca yerel ağdaki (özel) adreslere erişmesine izin verin.',
        redactSecrets: 'Mümkün olduğunda algılanan gizli bilgileri modelin görebileceği içerikten gizleyin.'
      },
      stt: {
        echoTranscripts: 'Sesli mesajların ham 🎙️ dökümünü sohbete geri gönderin.',
        elevenlabs: {
          languageCode: 'İsteğe bağlı ISO-639-3 dil kodu. Boş bırakılırsa ElevenLabs otomatik algılar.'
        },
        enabled: 'Yerel veya sağlayıcı destekli konuşma dökümünü etkinleştirin.',
        local: {
          language: 'Konuşma dili (ör. tr, en-US).',
          model: 'Yerel faster-whisper model boyutu.'
        },
        provider: 'Konuşmadan metne dönüştürme için kullanılacak sağlayıcı.',
        streaming:
          'Siz konuşurken metni gösterin (OpenAI, xAI, ElevenLabs). Herhangi bir hata durumunda kayda geri döner.'
      },
      terminal: {
        backend: 'Komutların ve araçların çalıştırılacağı yürütme arka ucu.',
        cwd: 'Araç ve terminal çalışmaları için varsayılan proje klasörü.',
        daytonaImage: 'Yürütme arka ucu Daytona olduğunda kullanılan imaj.',
        dockerImage: 'Yürütme arka ucu Docker olduğunda kullanılan konteyner imajı.',
        envPassthrough: 'Araç yürütmesine aktarılacak ortam değişkenleri.',
        modalImage: 'Yürütme arka ucu Modal olduğunda kullanılan imaj.',
        persistentShell:
          'SSH arka ucu: dışa aktarılan değişkenleri komutlar arasında koruyun. Kapalıyken her komut oturum açma ortamından başlar; çalışma dizini her zaman korunur.',
        singularityImage: 'Yürütme arka ucu Singularity olduğunda kullanılan imaj.',
        timeout: 'Bir komutun iptal edilmeden önce bekleneceği en uzun süre.'
      },
      timezone: 'ANA saat dilimi tanımlayıcısı. Boş bırakılırsa sistem saat dilimi kullanılır.',
      tts: {
        neutts: {
          device: 'NeuTTS için yerel çıkarım cihazı.'
        },
        xai: {
          autoSpeechTags:
            'Bir LLM’nin sentezden önce betiğe etkileyici ses etiketleri ([laughing], [sighs]) eklemesine izin verin.',
          bitRate: 'bps cinsinden MP3 bit hızı. Yalnızca kodek mp3 olduğunda geçerlidir.',
          language: 'Konuşulan dil kodu (ör. en, pt-BR) veya otomatik algılama için “auto”.',
          optimizeStreamingLatency: 'Gecikme ile kalite arasındaki denge. 0 = en iyi kalite, 2 = en düşük gecikme.',
          sampleRate: 'Hz cinsinden ses örnekleme hızı. Daha yüksek = daha iyi kalite, daha büyük dosyalar.',
          speed: 'Oynatma hızı. 0.7 = daha yavaş, 1.0 = normal, 1.5 = daha hızlı.',
          voiceId: 'xAI ses ID’si (ör. eve) veya özel bir ses ID’si.'
        }
      },
      updates: {
        nonInteractiveLocalChanges:
          'Hermes uygulamadan kendini güncellediğinde (terminal istemi olmadan), yerel kaynak düzenlemelerini saklayın (stash) veya atın (discard). Terminal güncellemeleri her zaman sorar.'
      },
      voice: {
        autoTts: 'Asistan yanıtlarını otomatik olarak seslendirin.',
        gptLive: {
          instructions: 'Canlı ses personası için ek cümleler (ton, tempo, dil). Hermes kendi sistem istemini korur.',
          voice: 'GPT-Live modu için ses. Özel ses ID’leri kabul edilir.'
        },
        maxRecordingSeconds: 'En uzun ses kaydı süresi.',
        voiceChatMode:
          'chained: aşağıdaki sağlayıcılarla konuşmadan metne → Hermes → metinden konuşmaya. gpt-live: tek bir tam çift yönlü OpenAI ses modeli (gpt-live-1) dinler ve konuşur, her gerçek isteği Hermes’e iletir — seçtiğiniz model tam araç setiyle yanıtlar. Bir OpenAI API anahtarı gerektirir; ses katmanı dakika başına 0,05 $ faturalandırır.'
      }
    }),
    memoryLayers: trMemoryLayers,
    uninstallSection: {
      dangerZone: 'Tehlikeli Bölge',
      checkingInstalled: 'Yüklü Bileşenler Denetleniyor…',
      uninstallHermes: 'Hermes’i Kaldırın',
      managedBody: 'Bu kurulum sisteminiz tarafından yönetiliyor, bu nedenle Hermes kendini kaldıramaz.',
      dataKept: path =>
        `Yapılandırmanız, Sohbetleriniz ve Gizli Bilgileriniz ${path} Konumunda Bulunur. Uygulamayı Kaldırmak Bunları Silmez`,
      openAppsSettings: 'Uygulamalar Ayarlarını Açın',
      chooseHowMuch:
        'Kaldırılacak Kapsamı Seçin. Uygulama İşlemi Tamamlamak İçin Kapanır; Geri Dönmek İçin Kurulumu İstediğiniz Zaman Yeniden Açın',
      confirmUninstall: 'Kaldırmayı Onaylayın',
      confirmBody: what => `Bu işlem ${what} kaldırır. Geri alınamaz.`,
      appLabel: 'Uygulama:',
      couldNotStart: 'Kaldırma Başlatılamadı',
      uninstalling: 'Kaldırılıyor…',
      yesUninstall: 'Evet, Kaldırın',
      options: {
        gui: {
          title: 'Yalnızca Sohbet Arayüzünü Kaldırın',
          description: 'Bu masaüstü uygulamasını kaldırın. Hermes ajanı, yapılandırmanız ve sohbetleriniz kalır.',
          consequence: 'Masaüstü Sohbet Arayüzü (Bu Uygulama ve Verileri)'
        },
        lite: {
          title: 'Arayüzü ve Ajanı Kaldırın, Verilerimi Koruyun',
          description:
            'Uygulamayı ve Hermes ajanını kaldırın, ancak gelecekteki bir yeniden kurulum için yapılandırma, sohbetler ve gizli bilgileri saklayın.',
          consequence: 'Sohbet Arayüzü ve Hermes Ajanı (Yapılandırma, Sohbetler ve Gizli Bilgiler Korunur)'
        },
        full: {
          title: 'Her Şeyi Kaldırın',
          description:
            'Uygulamayı, ajanı ve tüm kullanıcı verilerini kaldırın — yapılandırma, sohbetler, Cron işleri, gizli bilgiler, günlükler.',
          consequence:
            'HER ŞEY — Sohbet Arayüzü, Hermes Ajanı ve Tüm Yapılandırmanız, Sohbetleriniz, Gizli Bilgileriniz ve Günlükleriniz'
        }
      }
    },
    customEndpoints: {
      active: 'Etkin',
      apiKeySet: 'API Anahtarı Ayarlandı',
      use: 'Kullanın',
      editTitle: 'Uç Noktayı Düzenleyin',
      addTitle: 'Uç Nokta Ekleyin',
      fields: {
        name: 'Ad',
        providerId: 'Sağlayıcı ID',
        endpointUrl: 'Uç Nokta URL’si',
        defaultModel: 'Varsayılan Model',
        context: 'Bağlam',
        apiKey: 'API Anahtarı',
        apiKeyNewPlaceholder: 'Geçerli anahtarı korumak için boş bırakın',
        apiKeyPlaceholder: 'İsteğe Bağlı',
        useNewChats: 'Yeni Sohbetler İçin Kullanın',
        discoverModels: 'Modelleri Keşfedin'
      },
      test: 'Test Edin',
      save: 'Kaydedin',
      newEndpoint: 'Yeni Uç Nokta',
      apiMode: 'API Modu',
      autoDetect: 'Otomatik Algılayın',
      couldNotLoad: 'Özel Uç Noktalar Yüklenemedi',
      endpointSaved: 'Özel uç nokta kaydedildi',
      saveFailed: 'Kaydetme başarısız oldu.',
      endpointReachable: 'Uç noktaya erişilebiliyor',
      endpointReachableTransport: transport => `Uç noktaya erişilebiliyor (${transport} rotası sunuldu)`,
      endpointReachableModels: (reachable, count) => `${reachable} ${count} model bulundu`,
      endpointValidationFailed: 'Uç nokta doğrulaması başarısız oldu.',
      validationFailed: 'Doğrulama başarısız oldu.',
      activationFailed: 'Etkinleştirme başarısız oldu.',
      deleteConfirm: name => `${name} silinsin mi?`,
      deleteFailed: 'Silme başarısız oldu.',
      title: 'Özel Uç Noktalar',
      deleteEndpoint: 'Uç Noktayı Silin',
      emptyDescription: 'Aşağıya OpenAI uyumlu bir uç nokta ekleyin.',
      emptyTitle: 'Özel Uç Nokta Yok',
      namePlaceholder: 'Axet Proxy',
      contextPlaceholder: 'Otomatik'
    },
    computerUse: {
      accessibility: 'Erişilebilirlik',
      screenRecording: 'Ekran Kaydı',
      driverHealth: 'Sürücü Durumu'
    },
    about: {
      updates: 'Güncellemeler',
      channel: {
        title: 'Güncelleme Kanalı',
        description:
          'Kararlı sürüm yalnızca yayımlanmış sürümleri kurar. Her commit, değişiklikler geldikçe ana dalı takip eder.',
        stable: 'Kararlı Sürümler',
        main: 'Her Commit',
        stableConfirmTitle: 'Kararlı Sürümlere Geçilsin Mi?',
        stableConfirmBody:
          'Hermes, şu anda çalıştırdığınız koddan daha eski olabilecek en son yayımlanmış sürüme geçer. Daha yeni kodla yazılan veriler doğru okunmayabilir; bu yüzden önce yedekleyin.',
        stableConfirm: 'Kararlı Sürüme Geçin',
        failed: 'Güncelleme kanalı değiştirilemedi.',
        detailsLabel: 'Kanal',
        branch: b => `Dal: ${b}`,
        change: 'Değiştirin',
        latestRelease: v => `En Son Kararlı Sürümü Kullanıyorsunuz (${v})`,
        rollbackTitle: v => `Kararlı ${v} Sürümüne Dönün`,
        rollbackBody: v => `Bu yapı, kararlı ${v} sürümünden daha yeni. Kurulduğunda Hermes o sürüme geri döner.`,
        heldBody: (v: string) =>
          `Bu sürüm, kararlı sürüm ${v}’den daha yenidir. Oturumlarınız halihazırda ${v} tarafından açılamayan bir ağ geçidi çalışma zamanı kullanıyor, bu nedenle daha yeni bir kararlı sürüm yayınlanana kadar Hermes bu sürümde kalacaktır.`,
        rollbackAction: v => `${v} Sürümüne Geri Dönün`,
        allChanges: 'Tüm Değişiklikleri Görün'
      }
    },
    config: {
      minimizeToTrayTitle: 'Tepsiye Küçült',
      minimizeToTrayDesc:
        'Pencereleri simge durumuna küçültün veya ana pencereyi kapatarak sistem tepsisinde (macOS’ta menü çubuğunda) gizleyin ve Hermes’in çalışmaya devam etmesini sağlayın. Çıkmak için tepsi menüsündeki Hermes’ten Çık seçeneğini veya Cmd+Q kullanın. Varsayılan olarak kapalıdır; yalnızca bu cihaz için geçerlidir.',
      minimizeToTrayUnavailable:
        'Sistem tepsisi kullanılamıyor. Windows normal şekilde küçültür ve kapatır. Yeniden denemek için bu ayarı kapatıp açın',
      none: 'Hiçbiri',
      noneParen: '(hiçbiri)',
      builtinOnly: 'Yalnızca Yerleşik',
      notSet: 'Ayarlanmadı',
      commaSeparated: 'Virgülle Ayrılmış Değerler',
      searchPlaceholder: 'Arayın…',
      noResults: 'Sonuç Bulunamadı',
      systemDefault: 'Sistem Varsayılanı',
      loading: 'Hermes yapılandırması yükleniyor…',
      emptyTitle: 'Yapılandırılacak Bir Şey Yok',
      emptyDesc: 'Bu bölümde ayarlanabilir bir ayar yok.',
      failedLoad: 'Ayarlar yüklenemedi.',
      autosaveFailed: 'Otomatik kaydetme başarısız oldu.',
      imported: 'Yapılandırma İçe Aktarıldı',
      invalidJson: 'Geçersiz Yapılandırma JSON',
      toolsetsWipeConfirm:
        'Etkin tüm araç setleri kaldırılsın mı? Bu işlem, yeniden etkinleştirene kadar belleği, terminali, web aramasını, devretmeyi ve diğer birçok aracı devre dışı bırakır',
      keepAwakeTitle: 'Bilgisayarı Uyanık Tut',
      keepAwakeDesc:
        'Bu makinenin uykuya geçmesini engelleyin. “Çalışırken” seçeneği yalnızca bir tur sürerken açık tutar; böylece gece boyunca süren çalışmalar dizüstü bilgisayarı hafta boyunca uyanık tutmadan devam eder. Ekran yine de kısılabilir.',
      keepAwakeOff: 'Kapalı',
      keepAwakeWhileWorking: 'Çalışırken',
      keepAwakeAlways: 'Her Zaman',
      disableF12Title: 'F12 Geliştirici Araçlarını Devre Dışı Bırakın',
      disableF12Desc:
        'F12’nin Geliştirici Araçlarını açmasını engelleyin. Ctrl+Shift+I (Mac’te Cmd+Opt+I) yine de çalışır.',
      alwaysExternalLinksTitle: 'Bağlantıları Her Zaman Harici Tarayıcıda Açın',
      alwaysExternalLinksDesc:
        'Tıkladığınız her bağlantıyı uygulama içi tarayıcı yerine sistem tarayıcınızda açın. Sağ tık menüsündeki “Uygulama İçi Tarayıcıda Aç” seçeneği yine de çalışır.',
      attachmentSizeTitle: 'Maksimum Önizleme / Görsel Yükleme Boyutu',
      attachmentSizeDesc:
        'Masaüstü uygulamasının önizlemeler ve görsel ekleme için yükleyeceği yerel dosya boyutu (MB). Varsayılan 16’dır. Görsel olmayan uzak eklemelerde ayrı bir 256 MB sınırı uygulanır. Bu değeri çok yüksek ayarlamak dosyanın tamamının belleğe yüklenmesine ve uygulamanın donmasına veya çökmesine neden olabilir.',
      attachmentSizeUnit: 'MB',
      attachmentSizeLabel: 'Maksimum önizleme / görsel yükleme boyutu (megabayt)',
      voiceShortcutHintTitle: 'Ses kaydı kısayolu.',
      voiceShortcutHintDesc:
        'Ses kaydı kısayolunu Ayarlar → Klavye Kısayolları bölümünde (“Sesli Sohbeti Başlatın / Durdurun”) belirleyin. voice.record_key yapılandırma değeri yalnızca CLI ve TUI için geçerlidir.',
      showOptions: 'Seçenekleri Gösterin'
    },
    hudModifier: {
      title: 'HUD’u Çağırmak İçin Dokunun',
      description:
        'Mac’te ⌘ + Option, Windows/Linux’ta Ctrl + Alt tuşlarına dokunup bırakarak HUD’u her uygulamadan öne getirin. Varsayılan olarak kapalıdır; yalnızca bu cihaz için geçerlidir.',
      permission:
        'Hermes’e Sistem Ayarları → Gizlilik ve Güvenlik → Girdi İzleme Bölümünde İzin Verin, Ardından Yeniden Deneyin. Bu Hareket Tuş Vuruşlarını Kaydetmez veya Ekranınızı Yakalamaz',
      unavailable:
        'HUD Hareket Yardımcısı Başlatılamadı veya Beklenmedik Şekilde Durdu. Yeniden Deneyin ya da Hermes’i Yeniden Başlatın. Mevcut HUD Kısayolu Hermes İçinde Çalışmaya Devam Eder',
      missingHelper:
        'Bu Hermes kurulumunda HUD hareket yardımcısı eksik. Hermes’i güncelleyin veya yeniden kurun, ardından yeniden deneyin.',
      unsupportedSession:
        'Bu Masaüstü Oturumu Genel Değiştirici Tuş Dokunuşlarını Desteklemiyor. Linux, X11 Gerektirir; Wayland Desteklenmez'
    },
    screenshot: {
      enabledTitle: 'Ekran Görüntüsü Kısayolu',
      enabledDesc:
        'Herhangi bir uygulamada iki Command tuşuna birlikte basarak o uygulamanın en öndeki penceresini yakalayın ve mevcut Hermes taslağınıza ekleyin. Asla otomatik gönderilmez. Varsayılan olarak kapalıdır; yalnızca bu Mac için geçerlidir. Pencere içerikleri hassas olabilir — göndermeden önce eki inceleyin.',
      statusTitle: 'Ekran Görüntüsü Kısayolu Durumu',
      checking: 'Ekran Görüntüsü Kısayolu Kontrol Ediliyor…',
      disabled: 'Ekran Görüntüsü Kısayolu Kapalı',
      starting: 'Kısayol dinleyicisi başlatılıyor. Henüz hazır değil',
      ready: 'Kısayol hazır. Ekran görüntüleri gönderilmeden mevcut taslağınıza eklenir',
      inputPermission:
        'Girdi İzleme izni, başka bir uygulama etkinken Hermes’in iki Command tuşunu algılamasını sağlar. Sistem Ayarları → Gizlilik ve Güvenlik → Girdi İzleme bölümünde Hermes’e izin verin, ardından buraya dönüp yeniden deneyin',
      screenPermission:
        'Ekran Kaydı izni, bu kısayolu kullandığınızda Hermes’in en öndeki uygulama penceresini yakalamasını sağlar. Sistem Ayarları → Gizlilik ve Güvenlik → Ekran Kaydı bölümünde Hermes’e izin verin, ardından buraya dönüp yeniden deneyin. macOS isterse Hermes’i yeniden başlatın',
      openSettings: 'Sistem Ayarlarını Açın',
      retry: 'Yeniden Deneyin',
      unavailable: 'Ekran görüntüsü kısayolu kullanılamıyor. Yeniden deneyin veya kapatın',
      errorTitle: 'Ekran görüntüsü kısayolu hatası.',
      loadFailed: 'Kısayol durumu okunamadı. Geçerli ayarını kontrol etmek için yeniden deneyin.',
      saveFailed: 'Kısayol değişikliği doğrulanamadı. Geçerli ayarını kontrol etmek için yeniden deneyin.',
      permissionFailed:
        'Sistem Ayarları açılamadı. Gizlilik ve Güvenlik bölümünü el ile açın, ardından yeniden deneyin.',
      captureFailed: 'En öndeki pencere yakalanamadı. Hiçbir şey eklenmedi veya gönderilmedi.',
      contextChanged: 'Yakalama sırasında mevcut taslak değişti. Ekran görüntüsü eklenmedi veya gönderilmedi.'
    },
    quickEntry: {
      enabledTitle: 'Hızlı Giriş',
      enabledDesc: 'Global bir kısayolla her yerden küçük bir besteci açın ve Hermes’i açmadan bir istem gönderin.',
      shortcutTitle: 'Hızlı Giriş Kısayolu',
      shortcutDesc: 'En az bir değiştirici gerekir, örn. CommandOrControl+Shift+Space.',
      active: 'Kısayol etkin',
      takenBy: 'Bu kısayolu başka bir uygulama kullanıyor — farklı bir tane seçin',
      invalidShortcut: 'Geçerli bir kısayol değil. En az bir değiştirici tuş içermelidir'
    },
    credentials: {
      pasteKey: 'Anahtarı Yapıştırın',
      pasteLabelKey: label => `${label} anahtarını yapıştırın`,
      optional: 'İsteğe Bağlı',
      enterValueFirst: 'Önce bir değer girin',
      couldNotSave: 'Kimlik bilgisi kaydedilemedi',
      remove: 'Kaldırın',
      getKey: 'Anahtar Alın',
      saving: 'Kaydediliyor'
    },
    envActions: {
      actions: 'Eylemler',
      manageInKeys: 'API Anahtarlarında Yönetin',
      docs: 'Belgeler',
      hideValue: 'Değeri Gizleyin',
      revealValue: 'Değeri Gösterin',
      replace: 'Değiştirin',
      set: 'Ayarlayın',
      clear: 'Temizleyin'
    },
    connections: {
      title: 'Kayıtlı Ağ Geçitleri',
      intro: 'Bu cihazı ve uzak, SSH veya Cloud bağlantıları üzerinden erişebildiği tüm Hermes ağ geçitlerini yönetin.',
      stagedNote:
        'Ağ geçitlerini Oturumlar’dan değiştirin. Profiller, sohbetler, mesajlaşma ve Cron işleri kendi ağ geçitlerinde kalır; diğer ağ geçitlerindeki çalışmalar devam eder',
      launchModeTitle: 'Başlangıçta Son Kullanılan Ağ Geçidindeki Oturumlara Dönün',
      launchModeDesc: 'Kapalıyken Oturumlar Birincil ağ geçidinde açılır.',
      searchPlaceholder: 'Ağ geçitlerinde arayın…',
      noSearchResults: 'Aramanızla eşleşen ağ geçidi yok',
      loadFailed: 'Bağlantılar yüklenemedi.',
      currentPill: 'Geçerli',
      primaryPill: 'Birincil',
      managedPill: 'Uygulama Tarafından Yönetilen',
      addConnection: 'Bağlantı Ekleyin',
      editConnection: 'Düzenleyin',
      removeConnection: 'Kaldırın',
      removeConfirmTitle: 'Bu Bağlantı Kaldırılsın mı?',
      removeConfirmDesc: label =>
        `“${label}” bu uygulamadan kaldırılacak. Örneğin kendisi etkilenmez — istediğiniz zaman yeniden ekleyebilirsiniz.`,
      makePrimary: 'Birincil Yapın',
      testConnection: 'Test Edin',
      testOk: 'Erişilebilir',
      testFailed: 'Bağlantı testi başarısız oldu.',
      saveFailed: 'Bağlantı kaydedilemedi.',
      removeFailed: 'Bağlantı kaldırılamadı.',
      updateAll: 'Tüm Örnekleri Güncelleyin',
      updateAllRunning: 'Tüm örnekler güncelleniyor…',
      updateAllDone: 'Güncellemeler Gönderildi',
      updateAllFailed: 'Güncelleme dağıtımı başarısız oldu.',
      updateSkippedCloud: 'Hermes Cloud Tarafından Yönetiliyor',
      kindLocal: 'Yerel',
      kindRemote: 'Uzak Ağ Geçidi',
      kindCloud: 'Hermes Cloud',
      kindSsh: 'SSH',
      kindLocalDesc: 'Bu uygulama tarafından yönetilen Hermes çalışma zamanı.',
      kindRemoteDesc: 'HTTP(S) üzerinden erişilebilen bir Hermes ağ geçidi — LAN, Tailscale veya internet.',
      kindCloudDesc: 'Hermes Cloud hesabınız üzerinden keşfedilen barındırılan bir örnek.',
      kindSshDesc: 'SSH üzerinden erişilen bir Hermes kurulumu.',
      labelTitle: 'Ad',
      labelDesc:
        'Gerekli. Bu örneğin göründüğü her yerde gösterilir; benzersiz olmalıdır (ör. “Ev Laboratuvarı”, “İş Dizüstü”).',
      labelPlaceholder: 'Ev Laboratuvarı',
      urlTitle: 'Ağ Geçidi URL’si',
      sshHostTitle: 'SSH Ana Bilgisayarı',
      headersTitle: 'Ek Ağ Geçidi Başlıkları',
      headersDesc:
        'Bu ağ geçidine yapılan her HTTP ve WebSocket isteğiyle birlikte gönderilir — Cloudflare Access (CF-Access-Client-Id / CF-Access-Client-Secret) gibi erişim proxy’leri için. Değerler şifrelenmiş olarak saklanır. Hermes’in yönettiği başlıklar (Authorization, Cookie, Host…) yok sayılır.',
      headerValuePlaceholder: 'Değer',
      headerValueSaved: 'Kaydedildi — Korumak İçin Boş Bırakın',
      headerAdd: 'Başlık Ekleyin',
      headerRemove: 'Kaldırın',
      duplicateLocal: 'Bu uygulama zaten yerel bir bağlantıyı yönetiyor — yalnızca bir tane olabilir',
      duplicateUrl: label => `Bu ağ geçidi URL’sine zaten bir bağlantı var (“${label}”)`,
      duplicateSsh: label => `Bu SSH ana bilgisayarına zaten bir bağlantı var (“${label}”)`,
      sameBackendHint: label => `“${label}” ile aynı arka uç.`,
      localAddHint:
        'Yerel kullanılamıyor: yönetilen yerel bağlantı zaten mevcut (her zaman yalnızca bir tane olabilir).',
      cloudAddHint:
        'İpucu: Yukarıdaki Hermes Cloud altında oturum açmak ajanlarınızı otomatik olarak keşfeder — bu formu yalnızca bilinen bir örnek URL’sini elle kaydetmek için kullanın.',
      save: 'Bağlantıyı Kaydedin',
      saving: 'Kaydediliyor…',
      cancel: 'İptal',
      empty: 'Henüz kayıtlı bağlantı yok'
    },
    managedUpdates: {
      title: 'Yönetilen Güncellemeler',
      intro:
        'Desktop tarafından yönetilen SSH kurulumlarını işlemsel olarak güncelleyin: oturumlar boşaltılır, uzak kopya güncellenir ve her profil ilişkilendirilmiş bir makbuzla geri yüklenir.',
      sshConnection: 'Desktop Tarafından Yönetilen SSH Kurulumu',
      update: 'Güncelleyin',
      updating: 'Güncelleniyor…',
      progress: 'Oturumlar Boşaltılıyor, Uzak Kurulum Güncelleniyor ve Profiller Geri Yükleniyor…',
      updated: 'Güncellendi',
      partial: 'Güncellendi — Geri Yükleme Başarısız',
      refused: 'Reddedildi',
      failed: 'Güncelleme başarısız oldu.',
      alreadyRunning: 'Güncelleme Zaten Sürüyor',
      receipt: (id, outcome) => `Makbuz ${id} · ${outcome}`,
      receiptVersions: (pre, post) => `${pre} → ${post}`,
      scopesRestored: profiles => `Geri Yüklenen Profiller: ${profiles}`,
      scopeNotRestored: (profile, error) => `“${profile}” Profili Geri Yüklenmedi: ${error}`
    },
    gateway: {
      loading: 'Ağ Geçidi Ayarları Yükleniyor...',
      ...trGatewayHost,
      title: 'Ağ Geçidi Bağlantısı',
      envOverride: 'Ortam Değişkeni Geçersiz Kılması',
      intro:
        'Varsayılan olarak yerel. Bu uygulamanın başka bir yerdeki Hermes arka ucunu yönetmesi gerektiğinde uzak seçeneğini kullanın. Ağ geçidi bağlantıları makine düzeyindedir; profiller bağlandığınız ağ geçitlerinden keşfedilir.',
      envOverrideTitle: 'Bu Bağlantı, Hermes’in Başlatılma Biçimiyle Sabitlendi',
      envOverrideDesc:
        'Uygulama dışındaki bir başlangıç ayarı bu bağlantıyı seçtiğinden aşağıdaki seçenekler salt okunur. Burada değiştirmek için Hermes’i o ayar olmadan yeniden başlatın — veya ayarı yapana sorun.',
      modeTitle: 'Bağlantı Modu',
      localTitle: 'Yerel Ağ Geçidi',
      localDesc: 'Localhost üzerinde özel bir Hermes arka ucu başlatın. Bu varsayılandır ve çevrimdışı çalışır.',
      remoteTitle: 'Uzak Ağ Geçidi',
      remoteDesc: 'Bu masaüstü kabuğunu uzak bir Hermes arka ucuna bağlayın.',
      remoteAuthHint:
        'Barındırılan ağ geçitleri OAuth veya kullanıcı adı ve parola kullanır; kendi sunucunuzdakiler oturum tokenı kullanabilir.',
      cloudTitle: 'Hermes Cloud',
      cloudDesc:
        'Hermes Cloud’a bir kez oturum açın ve hesabınızdaki ajanlardan birini seçin — yapıştırmanız gereken bir URL yok.',
      cloudSignInTitle: 'Hermes Cloud',
      cloudSignIn: 'Hermes Cloud’a Oturum Açın',
      cloudSignedIn: 'Hermes Cloud’a Oturum Açıldı',
      cloudNeedsSignIn: 'Hesabınızdaki Ajanları Keşfetmek İçin Hermes Cloud’a Oturum Açın',
      cloudSignedInDesc: 'Oturum açtınız. Aşağıdan bir ajan seçin; oturum otomatik olarak yenilenir.',
      cloudAgentsTitle: 'Ajanlarınız',
      cloudOrgPickerTitle: 'Bir Kuruluş Seçin',
      cloudOrgSelect: 'Seçin',
      cloudOrgChange: 'Kuruluşu Değiştirin',
      cloudOrgRole: role => `Rol: ${role}`,
      cloudLoadingAgents: 'Ajanlarınız Yükleniyor…',
      cloudNoAgents: {
        before: 'Bu Hesapta Ajan Bulunamadı. Bir Tane Şurada Oluşturun: ',
        linkText: 'Nous portalı',
        after: ', Ardından Yenileyin'
      },
      cloudRefresh: 'Yenileyin',
      cloudConnect: 'Bağlanın',
      cloudSavedTitle: 'Kayıtlı Cloud Ağ Geçitleri',
      cloudSavedDesc:
        'Varsayılanınızı değiştirmeden kayıtlı bir ağ geçidi kullanın. Örnek eklemek için aşağıda oturum açın. Adları ve oturum açmayı kayıtlı bağlantılar listesinde yönetin.',
      cloudUseSaved: 'Ağ Geçidini Kullanın',
      cloudActive: 'Bu Pencerede Etkin',
      cloudConnecting: 'Bağlanıyor…',
      cloudDiscoverFailed: 'Hermes Cloud ajanlarınız yüklenemedi.',
      cloudConnectFailed: 'Bu ajana bağlanılamadı.',
      cloudSignInFailed: 'Hermes Cloud oturum açma işlemi başarısız oldu.',
      cloudSignedOutTitle: 'Hermes Cloud Oturumu Kapatıldı',
      cloudSignedOutMessage: 'Hermes Cloud oturumu temizlendi.',
      cloudConnectedTitle: 'Bağlandı',
      cloudConnectedPill: 'Bağlandı',
      cloudConnectedTo: name => `${name} Adresine Bağlandı`,
      cloudAgentProvisioning: 'Hazırlanıyor…',
      cloudStatusLabel: status => `Durum: ${status}`,
      remoteUrlTitle: 'Uzak URL',
      remoteUrlDesc: 'Uzak kontrol paneli arka ucu için temel URL. Yol önekleri desteklenir, örneğin /hermes.',
      probing: 'Bu Ağ Geçidinin Kimlik Doğrulaması Kontrol Ediliyor…',
      probeError:
        'Hermes bu adrese ulaşamıyor. URL’yi ve diğer bilgisayarda Hermes’in çalıştığını kontrol edin — yanıt verdiğinde oturum açma seçenekleri görünür.',
      signedIn: 'Oturum Açıldı',
      signIn: 'Oturum Açın',
      signOut: 'Oturumu Kapatın',
      signInWith: provider => `${provider} İle Oturum Açın`,
      authTitle: 'Kimlik Doğrulama',
      authSignedInPassword:
        'Bu Ağ Geçidi Bir Kullanıcı Adı ve Parola Kullanıyor. Oturum Açtınız; Oturum Otomatik Olarak Yenilenir',
      authSignedInOauth: 'Bu Ağ Geçidi OAuth Kullanıyor. Oturum Açtınız; Oturum Otomatik Olarak Yenilenir',
      authNeedsPassword:
        'Bu Ağ Geçidi Bir Kullanıcı Adı ve Parola Kullanıyor. Bu Masaüstü Uygulamasını Yetkilendirmek İçin Oturum Açın',
      authNeedsOauth: provider =>
        `Bu Ağ Geçidi OAuth Kullanıyor. Bu Masaüstü Uygulamasını Yetkilendirmek İçin ${provider} İle Oturum Açın`,
      tokenTitle: 'Oturum Tokenı',
      tokenDesc:
        'REST ve WebSocket erişimi için kullanılan kontrol paneli oturum tokenı. Kayıtlı tokenı korumak için boş bırakın.',
      existingToken: value => `Mevcut Token ${value}`,
      savedToken: 'Kaydedildi',
      pasteSessionToken: 'Oturum Tokenını Yapıştırın',
      plainTextConfirmTitle: 'Ağ geçidi tokenı düz metin olarak saklansın mı?',
      plainTextConfirmDesc:
        'Bu makinede işletim sistemi anahtarlık hizmeti bulunamadı; bu nedenle token, uygulamanın bağlantı ayarları dosyasında şifrelenmemiş olarak saklanır ve bu kullanıcı olarak çalışan her işlem tarafından okunabilir. Şifreli saklama için sistem anahtarlığınızı (Linux’ta GNOME Keyring veya KWallet) kurun veya etkinleştirin.',
      plainTextConfirmAction: 'Düz metin olarak kaydedin.',
      plainTextStoredTitle: 'Token düz metin olarak saklandı.',
      plainTextStoredDesc:
        'Güvenli saklama kullanılamıyor; bu nedenle kayıtlı token, bu makinedeki uygulamanın bağlantı ayarları dosyasında şifrelenmemiş olarak saklanıyor. Şifrelemek için sistem anahtarlığınızı (Linux’ta GNOME Keyring veya KWallet) kurun veya etkinleştirin.',
      keychainEncryptionTitle: 'Kayıtlı Gizli Verileri İşletim Sistemi Anahtarlığıyla Şifreleyin',
      keychainEncryptionDesc:
        'Varsayılan olarak kapalı. Açık olduğunda ağ geçidi tokenları ve oturum açma kimlik bilgileri sistem anahtarlığınızla (Keychain Access, GNOME Keyring veya Windows DPAPI) şifrelenir — sisteminiz izin veya parola isteyebilir. Kapalı olduğunda ise yalnızca kullanıcı hesabınızın okuyabildiği düz dosyalar olarak saklanır.',
      keychainEncryptionFailed: 'Gizli veri şifrelemesi değiştirilemedi.',
      testRemote: 'Uzak Ağ Geçidini Test Edin',
      saveForRestart: 'Sonraki Yeniden Başlatma İçin Kaydedin',
      saveAndReconnect: 'Kaydedin ve Yeniden Bağlanın',
      diagnostics: 'Tanılama',
      diagnosticsDesc:
        'Dosya yöneticinizde desktop.log dosyasını gösterin — ağ geçidi başlatılamadığında kullanışlıdır.',
      openLogs: 'Günlükleri Açın',
      incompleteTitle: 'Uzak Ağ Geçidi Eksik',
      incompleteSignIn: 'Uzak Moda Geçmeden Önce Uzak Bir URL Girin ve Oturum Açın',
      incompleteToken: 'Uzak Moda Geçmeden Önce Uzak Bir URL ve Oturum Tokenı Girin',
      incompleteSignInTest: 'Test Etmeden Önce Uzak Bir URL Girin ve Oturum Açın',
      incompleteTokenTest: 'Test Etmeden Önce Uzak Bir URL ve Oturum Tokenı Girin',
      enterUrlFirst: 'Önce Uzak Bir URL Girin',
      restartingTitle: 'Ağ Geçidi Bağlantısı Yeniden Başlatılıyor',
      savedTitle: 'Ağ Geçidi Ayarları Kaydedildi',
      restartingMessage: 'Hermes Desktop kayıtlı ayarlarla yeniden bağlanacak — kabuk açık kalır.',
      savedMessage: 'Sonraki yeniden başlatma için kaydedildi.',
      connectedTo: (baseUrl, version) => `${baseUrl} Adresine Bağlandı · Hermes ${version}`,
      reachableTitle: 'Uzak Ağ Geçidine Ulaşıldı',
      signedOutTitle: 'Oturum Kapatıldı',
      signedOutMessage: 'Uzak ağ geçidi oturumu temizlendi.',
      failedLoad: 'Ağ geçidi ayarları yüklenemedi.',
      signInFailed: 'Oturum açma başarısız oldu.',
      signOutFailed: 'Oturum kapatma başarısız oldu.',
      testFailed: 'Uzak ağ geçidi testi başarısız oldu.',
      applyFailed: 'Ağ geçidi ayarları uygulanamadı.',
      saveFailed: 'Ağ geçidi ayarları kaydedilemedi.',
      sshTitle: 'SSH Üzerinden Bağlanın',
      sshDesc:
        'Hermes, SSH üzerinden uzak ana bilgisayarda başlatılır ve bu uygulamaya tünellenir — kendinizin başlatacağı veya açığa çıkaracağı bir şey yoktur. Ana bilgisayara çalışan anahtar tabanlı SSH erişimi gerekir.',
      sshTrustHint:
        'Sunulan ilk ana bilgisayar anahtarı güvenilir kabul edilip sabitlenir; sonraki değişikliklerde bağlantı reddedilir.',
      sshHostTitle: 'Ana Bilgisayar',
      sshHostDesc: 'user@host veya ~/.ssh/config dosyasındaki bir Host takma adı.',
      sshHostPick: 'Bir Ana Bilgisayar Seçin…',
      sshHostPickTitle: 'Ana Bilgisayar',
      sshHostPickDesc: '~/.ssh/config dosyasındaki bir Ana Bilgisayar takma adı veya elle girmek için Özel.',
      sshHostCustom: 'Özel (Elle Girin)…',
      sshUserTitle: 'Kullanıcı',
      sshUserDesc: 'Boş = ~/.ssh/config veya geçerli kullanıcınız.',
      sshUserPlaceholder: '~/.ssh/config Dosyasından',
      sshPortTitle: 'Bağlantı Noktası',
      sshPortDesc: 'Boş = 22 veya ~/.ssh/config içindeki bağlantı noktası.',
      sshKeyTitle: 'Kimlik Dosyası',
      sshKeyDesc: 'Özel anahtar yolu. Boş = ssh-agent veya ~/.ssh/config.',
      sshHermesPathTitle: 'Hermes Yolu (İsteğe Bağlı)',
      sshHermesPathDesc: 'Uzak hermes ikili dosyasının tam yolu. Boş = otomatik algıla.',
      sshHermesPathPlaceholder: 'Otomatik Algıla',
      sshTestConnection: 'SSH’yi Test Edin',
      sshConnect: 'Bağlanın',
      sshButtonsHint: 'Kaydedin, sonraki başlatmada uygulanır. Bağlanın, hemen yeniden bağlanır.',
      sshReachable: (host, platform) => `Erişilebilir: ${host} (${platform}) — Hermes Bulundu`,
      sshIncompleteHost: 'Bağlanmadan Önce Bir SSH Ana Bilgisayarı Girin',
      sshErrUnreachable:
        'Bu Ana Bilgisayara SSH Üzerinden Ulaşılamadı. Ana Bilgisayarı, Bağlantı Noktasını ve Ağınızı Kontrol Edin',
      sshErrAuth:
        'SSH Kimlik Doğrulaması Başarısız Oldu. Anahtarınızı ssh-agent’a yükleyin (ssh-add) veya ~/.ssh/config içinde bir IdentityFile ayarlayın — Hermes, ssh komutunu etkileşimsiz çalıştırır',
      sshErrHostKey:
        'Ana Bilgisayar Anahtarı Son Bağlantınızdan Bu Yana DEĞİŞTİ. Bunun Beklenen Bir Durum Olduğunu Doğrulayın, Ardından ssh-keygen -R <host> Komutunu Çalıştırıp Yeniden Bağlanın',
      sshErrNotInstalled:
        'Hermes Uzak Ana Bilgisayarda Kurulu Değil. Orada Kurun (curl -fsSL https://hermes-agent.nousresearch.com/install.sh | sh) veya Hermes Yolunu Ayarlayın',
      sshErrPlatform:
        'Desteklenmeyen Uzak Platform. Hermes Desktop SSH Modu Linux, macOS ve Windows Uzak Ana Bilgisayarlarını Destekler',
      sshErrTimeout: 'SSH Bağlantısı Zaman Aşımına Uğradı. Ana Bilgisayara Ulaşılamıyor veya Uyku Modunda Olabilir',
      sshErrUpdateRequired: 'Desktop SSH İle Bağlanmadan Önce Uzak Ana Bilgisayardaki Hermes’i Güncelleyin',
      sshErrInteractiveAuth:
        'Tailscale SSH Etkileşimli Bir Tarayıcı Kontrolü Gerektirir. Terminalde `ssh <host> true` Komutunu Çalıştırın, Kontrolü Tamamlayın ve Yeniden Deneyin — Hermes, SSH’yi Etkileşimsiz Çalıştırır',
      sshErrUnknown: 'SSH Bağlantısı Başarısız Oldu'
    },
    keys: {
      loading: 'API Anahtarları ve Kimlik Bilgileri Yükleniyor...',
      failedLoad: 'API anahtarları yüklenemedi.',
      empty: 'Bu Kategoride Henüz Yapılandırma Yok'
    },
    search: {
      placeholder: 'Tüm Ayarlarda Arayın…',
      pill: 'Arayın'
    },
    profileScope: {
      appliesTo: 'Uygulandığı Yer',
      editsProfile: profile => `Bu sayfadaki değişiklikler “${profile}” profiline uygulanır`
    },
    mcp: {
      loading: 'MCP Sunucuları Yükleniyor...',
      invalidJson: 'Geçersiz MCP JSON',
      saveFailed: 'Kaydetme başarısız oldu.',
      removeFailed: 'Kaldırma başarısız oldu.',
      reloadFailed: 'MCP yeniden yükleme başarısız oldu.',
      savedTitle: 'MCP Sunucusu Kaydedildi',
      savedMessage: name => `${name}, MCP yeniden yüklendikten sonra uygulanır.`,
      disabled: 'Devre Dışı',
      name: 'Ad',
      serverJson: 'Sunucu JSON',
      remove: 'Kaldırın',
      test: 'Bağlantıyı Test Edin',
      catalogLoading: 'MCP Kataloğu Yükleniyor...',
      catalogInstallFailed: name => `${name} kurulamadı`,
      catalogEnvRequired: 'Kurmadan Önce Gerekli Değerleri Doldurun',
      capabilitySummary: (tools, prompts, resources) => `${tools} araç, ${prompts} istem, ${resources} kaynak etkin.`,
      costTokens: tokens => `~${tokens} token/çağrı`,
      usage30d: uses => `${uses} Kullanım/30g`,
      statusConnecting: 'Bağlanıyor…',
      statusNeedsAuth: 'Kimlik Doğrulama Gerekli',
      statusError: 'Hata',
      statusOff: 'Kapalı',
      allServers: 'Tüm Sunucular',
      authenticatedTitle: 'Kimlik Doğrulandı',
      authenticatedMessage: (server, count) => `${server}: ${count} araç`,
      authenticate: 'Kimlik Doğrulayın',
      noOutput: 'Henüz Çıktı Yok',
      deepLinkTitle: 'MCP Sunucusu Eklensin Mi?',
      deepLinkDescription:
        'Bir bağlantı bu MCP sunucusunu Hermes’e eklemek istedi. Aşağıdaki tam yapılandırmayı inceleyin — bu, Hermes’ten değil bağlantıdan geliyor.',
      deepLinkStdioWarning:
        'Bu Sunucu, Aşağıda Gösterilen Komutla Makinenizde Yerel Bir İşlem Çalıştırır. Yalnızca Kaynağına Güveniyorsanız Devam Edin',
      deepLinkConfirm: 'Sunucu Ekleyin',
      deepLinkNameInvalid: 'Adlar 1-64 Harf, Rakam, Nokta, Tire veya Alt Çizgi Kullanır',
      deepLinkNameConflict: name => `“${name}” Adlı Bir Sunucu Zaten Var — Farklı Bir Ad Seçin veya İptal Edin`,
      deepLinkErrorTitle: 'MCP kurulum bağlantısı reddedildi.',
      deepLinkErrorName: 'Bağlantının sunucu adı eksik veya geçersiz.',
      deepLinkErrorConfig: 'Bağlantının yapılandırması geçerli base64 kodlu JSON değil.',
      deepLinkErrorShape:
        'Yapılandırma, dize türünde bir `url` veya `command` alanı içeren bir JSON nesnesi olmalıdır.',
      deepLinkErrorUrl: 'Yalnızca http:// ve https:// sunucu URL’lerine izin verilir.',
      deepLinkErrorTooLarge: 'Yapılandırma yükü 32KB sınırını aşıyor.'
    },
    model: {
      setupProviderFallback: 'Sağlayıcı',
      setUpProvider: name => `${name} Ayarlayın`,
      staleAuxBefore: (count, names) => `${count} yardımcı görev (${names}) hâlâ şu model üzerinde çalışıyor: `,
      staleAuxAfter: ', ana modeliniz değil',
      staleAuxOtherProviders: 'Diğer Sağlayıcılar',
      moaEnabled: 'Etkin',
      moaSetDefault: 'Varsayılan Yapın',
      moaNewPresetPlaceholder: 'Yeni Ön Ayar',
      moaAddPreset: 'Ön Ayar Ekleyin',
      customModel: 'Özel Model…',
      customModelPlaceholder: 'Model ID',
      chooseFromList: 'Listeden Seçin',
      moaDefault: 'Varsayılan:',
      moaReferenceToggle: (enabled, index) => `Referans ${index} Seçeneğini Kapatın`,
      moaReferenceTitle: index => `Referans ${index}`,
      moaAddReference: 'Referans Model Ekleyin',
      loading: 'Model Yapılandırması Yükleniyor…',
      appliesDesc:
        'Yeni oturumlara uygulanır. Etkin sohbeti anında değiştirmek için besteci içindeki model seçiciyi kullanın.',
      provider: 'Sağlayıcı',
      model: 'Model',
      applying: 'Uygulanıyor...',
      mainAppliedTitle: 'Ana Model Güncellendi',
      mainAppliedMessage: model => `Yeni oturumlarda ${model} kullanılacak.`,
      defaultsLabel: 'Varsayılanlar',
      reasoning: 'Akıl Yürütme',
      reasoningOff: 'Kapalı',
      speed: 'Hız',
      speedStandard: 'Standart',
      defaultsFailed: 'Model varsayılanları kaydedilemedi.',
      loadFailed: 'Modeller yüklenemedi.',
      restartRequired:
        'Bir güncellemenin ardından bu arka uç eski kodu çalıştırıyor. Yeni kodu yüklemek için yeniden başlatın',
      restartBackend: 'Arka Ucu Yeniden Başlatın',
      restartingBackend: 'Arka Uç Yeniden Başlatılıyor…',
      restartFailed: 'Arka uç yeniden başlatılamadı.',
      auxiliaryTitle: 'Yardımcı Modeller',
      resetAllToMain: 'Tümünü Ana Modele Sıfırlayın',
      staleAuxDismiss: 'Bir Daha Göstermeyin',
      auxiliaryDesc:
        'Yardımcı görevler varsayılan olarak ana modelde çalışır. Bir görevi geçersiz kılmak için o göreve özel bir model atayın.',
      setToMain: 'Ana Model Yapın',
      change: 'Değiştirin',
      autoUseMain: 'Otomatik · Ana Modeli Kullanın',
      inheritMainEffort: 'Devral · Ana Model Çabası',
      inheritsFrom: task => `${task} Devralır`,
      followTask: task => `${task} Takip Edin`,
      providerDefault: '(Sağlayıcı Varsayılanı)',
      fallbackAdd: 'Yedek Ekleyin',
      fallbackEmpty: 'Yedek Model Yok — Başarısız Olmadıkça Varsayılan Model Kullanılır',
      notInCatalog: 'Bu Sağlayıcının Model Listesinde Yer Almıyor — Çağrılar Yedek Bir Modele Geçebilir',
      moaTitle: 'Ajan Karışımı',
      moaPreset: 'Ön Ayar',
      moaDescription:
        'Ajan Karışımı sağlayıcısı altında model olarak görünen adlandırılmış ön ayarlar yapılandırın. Birleştirici etkin modeldir — araç döngüsünün her adımını o çalıştırır ve çalıştırmanın maliyetinin neredeyse tamamı onun sağlayıcısına yansıtılır. Referanslar varsayılan olarak kullanıcı turu başına yalnızca bir kez öneri verir.',
      moaAggregator: 'Birleştirici',
      moaAggregatorBilled: 'Etkin Model · Çalıştırma Ücreti Bu Modele Yansır',
      moaReferenceHint: 'varsayılan olarak tur başına bir kez öneri verir.',
      tasks: {
        vision: {
          label: 'Görü',
          hint: 'görsel analizi'
        },
        compression: {
          label: 'Sıkıştırma',
          hint: 'bağlam sıkıştırma'
        },
        skills_hub: {
          label: 'Yetenek Merkezi',
          hint: 'yetenek arama'
        },
        approval: {
          label: 'Onay',
          hint: 'akıllı otomatik onay.'
        },
        mcp: {
          label: 'MCP',
          hint: 'MCP araç yönlendirme.'
        },
        title_generation: {
          label: 'Başlık Oluşturma',
          hint: 'oturum başlıkları'
        },
        review: {
          label: 'İnceleme',
          hint: '/review inceleyici alt ajan.'
        },
        voice_chat: {
          label: 'Sesli Sohbet',
          hint: 'sesli mod yanıtları.'
        },
        triage_specifier: {
          label: 'Triyaj Belirleyici',
          hint: 'Kanban spesifikasyonunu detaylandırma.'
        },
        kanban_decomposer: {
          label: 'Kanban Ayrıştırıcı',
          hint: 'görev ayrıştırma'
        },
        profile_describer: {
          label: 'Profil Tanımlayıcı',
          hint: 'otomatik profil açıklamaları.'
        },
        curator: {
          label: 'Yetenek Yöneticisi',
          hint: 'yetenek kullanımı incelemesi.'
        }
      },
      subagents: {
        inherit: "Ana Ajan'dan Devralın",
        modelOnly: 'Özel Model (Üst Kimlik Bilgilerini Kullanın)',
        providerLabel: 'Alt Ajan Sağlayıcısı',
        modelLabel: 'Alt Ajan Modeli',
        direct: 'Doğrudan Uç Nokta Geçersiz Kılması',
        customProvider: 'Özel Sağlayıcı…',
        customProviderLabel: 'Özel Alt Ajan Sağlayıcısı',
        parentModel: 'Üst Modeli Kullanın',
        parentModelWarning:
          'Seçilen sağlayıcı üst modeli desteklemelidir. Yalnızca sağlayıcıya dayanan bir yol, model uyumsuz olduğunda başarısız olabilir. O sağlayıcı kendi varsayılan modelini belirliyorsa alt ajanlar bunun yerine o modeli kullanır.',
        directActive:
          'Doğrudan bir uç nokta etkin ve kayıtlı sağlayıcıdan önceliklidir. Bu mod seçiliyken uç noktası ve kimlik bilgileri korunur.',
        directClear:
          'Bu yolu uygulamak doğrudan uç noktayı ve kayıtlı anahtarını temizler. Diğer istek ayarları korunur.',
        catalogFailed: 'Model kataloğu kullanılamıyor. Bir sağlayıcı ve model girin ya da yeniden deneyin.',
        draftHint: 'Değişiklikler uygulanana kadar yerelde kalır.',
        routing: {
          title: 'Yönlendirme',
          settingsTitle: 'Alt Ajan Varsayılanları',
          intro: 'Her alt ajanın modelinin nasıl belirlendiği.',
          modes: {
            default: {
              label: 'Varsayılan',
              description: 'Her alt ajan aşağıdaki alt ajan modelinde çalışır.'
            },
            model_map: {
              label: 'Model Rotaları',
              description: 'Birkaç model belirleyin. Ajan, her alt ajan için birini seçer.'
            },
            profile_routes: {
              label: 'Profil Rotaları',
              description:
                'Alt ajanlar kendi modelleri, yetenekleri ve anahtarları olan profillerinizden biri olarak çalışır.'
            }
          },
          inUse: 'Kullanımda',
          plugin: 'Eklenti',
          pluginMissing: 'Model Rotaları ve Profil Rotaları, Gelişmiş Delegasyon eklentisinden gelir.',
          pluginDisabled: 'Gelişmiş Delegasyon kurulu ancak bu profil için kapalı.',
          pluginNotLoaded:
            'Gelişmiş Delegasyon açık ancak Hermes henüz onu yüklemedi. Tamamlamak için Hermes’i yeniden başlatın.',
          installPlugin: 'Eklentiyi Kur',
          installUnavailable:
            'Gelişmiş Delegasyon henüz eklenti kataloğunda yok. Yetenekler › Eklentiler kısmından kurun.',
          enablePlugin: 'Aç',
          enableFailed: 'Gelişmiş Delegasyon açılamadı',
          modeFailed: 'Alt ajan yönlendirmesi değiştirilemedi',
          loadFailed: 'Alt ajan yönlendirmesi yüklenemedi',
          blockedPill: 'Çalışmıyor',
          blockedDetail:
            'Bu mod kaydedildi, bu yüzden Hermes Varsayılan modu gizlice kullanmak yerine her alt ajanı reddeder.',
          blockedMissing: 'Gelişmiş Delegasyon kurulana kadar alt ajanlar başlatılmayacaktır.',
          blockedDisabled: 'Bu profil için Gelişmiş Delegasyon açılana kadar alt ajanlar başlatılmayacaktır.',
          blockedNotLoaded:
            'Hermes, Gelişmiş Delegasyonu yükleyene kadar alt ajanlar başlatılmayacaktır. Tamamlamak için Hermes’i yeniden başlatın.',
          blockedUnavailable: label =>
            `${label} burada çalışabilene kadar alt ajanlar başlatılmayacaktır. Eklentisi bunun mümkün olmadığını bildiriyor.`,
          blockedUnregistered: name =>
            `“${name}” sağlayan bir eklenti kurulup açılana kadar alt ajanlar başlatılmayacaktır.`,
          thirdPartyDescription: 'Bir eklentiden geliyor. Ayarları o eklentide bulunur.',
          modelRoutesTitle: 'Model Rotaları',
          modelRoutesEmpty: 'Henüz rota yok. Siz bir tane ekleyene kadar alt ajanlar ana ajanın modelini kullanır.',
          addRoute: 'Rota Ekle',
          editRoute: 'Düzenle',
          makeDefault: 'Varsayılan Yap',
          deleteRoute: 'Sil',
          defaultBadge: 'Varsayılan',
          routeActions: name => `${name} için eylemler`,
          deleteConfirmTitle: name => `“${name}” rotası silinsin mi?`,
          deleteConfirmBody: 'Alt ajanlar artık bu rotayı seçemez.',
          deleteConfirmNextDefault: name => `Bu varsayılan rotadır, dolayısıyla “${name}” varsayılan olur.`,
          deleteConfirmAction: 'Rotayı Sil',
          saveFailed: 'Rotalar kaydedilemedi',
          baseUrlRoute: url => `uç nokta ${url}`,
          dialogNew: 'Yeni Model Rotası',
          dialogEdit: 'Model Rotasını Düzenle',
          dialogDesc: 'Ajan, hangi alt ajanın hangi rotayı izleyeceğine karar vermek için adı ve açıklamayı okur.',
          nameLabel: 'Ad',
          namePlaceholder: 'Örn. hızlı',
          nameHint: 'Kısa, boşluksuz. Ajan rotaları bu ada göre seçer.',
          descriptionLabel: 'Ne Zaman Kullanılır',
          descriptionPlaceholder: 'Örn. Ucuz ve hızlı: aramalar, özetler, basit düzenlemeler.',
          descriptionHint: 'Ajanın seçim yapmadan önce okuduğu tek satırlık açıklama.',
          providerLabel: 'Sağlayıcı',
          providerPlaceholder: 'Bir sağlayıcı seçin',
          modelLabel: 'Model',
          effortLabel: 'Akıl yürütme eforu',
          effortInherit: 'Alt ajan varsayılanı',
          tierLabel: 'Hız',
          tierNormal: 'Normal',
          tierFast: 'Hızlı',
          tierUltrafast: 'Ultra hızlı',
          tierHint: 'Yalnızca bunu sunan modellerde.',
          optional: 'isteğe bağlı',
          errors: {
            required: 'Zorunlu',
            spaces: 'Boşluk içeremez',
            duplicate: 'Başka bir rota zaten bu adı kullanıyor'
          },
          saveRoute: 'Rotayı Kaydet',
          createRoute: 'Rota Ekle',
          profileRoutesTitle: 'Alt Ajanların Çalışabileceği Profiller',
          profileRoutesHint: 'Seçili her profil kendi modelini, yeteneklerini, personasını ve anahtarlarını getirir.',
          profileDescriptionPlaceholder: 'Ne zaman kullanılır (isteğe bağlı)',
          profileDefault: 'Varsayılan',
          profileEmpty: 'Henüz başka profil yok. Profil panelinden bir tane oluşturun.',
          profileMissing: name => `${name} (profil artık mevcut değil)`,
          inactiveTitle: 'Bu modda kullanılmıyor',
          inactiveModelMap: route =>
            `Model rotaları her alt ajanın modelini belirler. Hiçbir rotayı seçmeyen alt ajanlar “${route}” kullanır.`,
          inactiveProfiles: profile =>
            `Profil rotaları her alt ajanın profilini belirler. Hiçbir profili seçmeyen alt ajanlar “${profile}” olarak çalışır.`,
          inactiveModelMapNoDefault:
            'Model rotaları her alt ajanın modelini belirler. Hiçbir rotayı seçmeyen alt ajanlar ana ajanın modelini kullanır.',
          inactiveProfilesNoDefault:
            'Profil rotaları her alt ajanın profilini belirler. Hiçbir profili seçmeyen alt ajanlar ana ajanın modelini kullanır.',
          inactivePlugin: label => `${label} her alt ajanın modelini belirlediği için bu ayar uygulanmaz.`,
          useDefault: 'Varsayılan’a Geç'
        }
      }
    },
    localModels: {
      connectionChanged: 'Yerel Model Bağlantısı Değişti',
      title: 'Yerel Modeller',
      runtimeTitle: 'Yerel Çalışma Zamanı',
      runtimeReady: backend => `Hazır · ${backend}`,
      serverRunning: 'Çalışıyor',
      runtimeInstalled: 'llama.cpp Çalışma Zamanı Kuruldu',
      runtimeInstalledDetail: (tag, backend) =>
        `Derleme ${tag}, ${backend} arka ucu. Hermes sunucuyu sizin için başlatır ve yönetir.`,
      installTitle: 'Yerel Çalışma Zamanını Kurun',
      installDetail:
        'llama.cpp çıkarım motorunu indirir (birkaç yüz MB). İndirdiğiniz modeller tamamen bu makinede çalışır — hesap gerekmez, hiçbir şey bilgisayarınızdan ayrılmaz.',
      installAction: 'Çalışma Zamanını Kurun',
      installing: 'Çalışma Zamanı Kuruluyor…',
      installFailed: 'Çalışma zamanı kurulumu başarısız oldu.',
      hardwareTitle: 'Bu Makine',
      hardwareLoading: 'Donanımınız Kontrol Ediliyor…',
      vram: label => `${label} GPU Belleği`,
      ram: label => `${label} RAM`,
      unifiedMemory: 'Birleşik Bellek',
      modelsTitle: 'Modeller',
      recommended: 'Önerilen',
      recommendedReason: {
        'product-default': 'Bu Makine İçin Üreticisi Tarafından Seçilen Varsayılan Model',
        'best-quality-resident':
          'GPU’nuzda Tam Hızda Çalışan En Yüksek Kaliteli Model. Seçimler, Kaliteyi Bu Donanımdaki Tahmini Hızla Dengeler',
        'speed-gated-quality':
          'Daha Yüksek Kaliteli Bir Model Bu Makineye Sığar Ancak Bellek Bant Genişliğinde Çok Yavaş Yanıt Verir — Bu, Hızlı Kalan En İyi Modeldir'
      },
      noRecommendationTitle: 'Bu Makine İçin Otomatik Öneri Yok',
      noRecommendationDetail:
        'Otomatik kurulum, tamamen GPU veya birleşik bellekte tam hızda çalışan özenle seçilmiş bir model gerektirir. Yine de aşağıdan bir model seçebilir veya daha fazla modelde gezinebilirsiniz.',
      noRecommendationAction: 'Modellere Göz Atın',
      downloaded: 'İndirildi',
      downloadAction: size => `İndirin · ${size}`,
      downloadProgress: (done, total) => `${done} / ${total}`,
      downloadStatusRunning: 'İndiriliyor',
      downloadSpeed: rate => `${rate}`,
      downloadEta: time => `~${time} Kaldı`,
      downloadEtaSeconds: count => `${count} sn`,
      downloadEtaMinutes: count => `${count} dk`,
      downloadEtaHours: (hours, minutes) => `${hours} sa ${minutes} dk`,
      downloadPausedLabel: 'Duraklatıldı',
      downloadPauseAction: 'Duraklatın',
      downloadResumeAction: 'Sürdürün',
      downloadDoneToast: model => `${model} Hazır`,
      installDoneToast: 'Yerel Çalışma Zamanı Kuruldu ve Hazır',
      quickstartTitle: 'Bu Makinede Bir Model Çalıştırın',
      quickstartDetail: (model, size) =>
        `Tek tıkla her şey kurulur: yerel motor, ${model} (${size} indirme) ve yeni sohbetler için varsayılanınız. Hiçbir şey bu bilgisayardan ayrılmaz.`,
      quickstartDetailReady: model =>
        `Tek tıkla ${model} yeni sohbetler için varsayılanınız olur. Her şey bu makinede çalışır.`,
      quickstartAction: 'Benim İçin Kurun',
      quickstartConfigure: 'Seçimi Bana Bırakın',
      quickstartDoneToast: model => `${model} Kuruldu — Yeni Sohbetler Bu Makinede Çalışır`,
      quickstartFailed: 'Yerel model kurulumu başarısız oldu.',
      quickstartStageEngine: 'Motor',
      quickstartStageModel: 'Model',
      quickstartStageFinish: 'Bitirin',
      useAction: 'Kullanın',
      activePill: 'Varsayılan',
      updateTitle: 'Motor Güncellemesi Mevcut',
      updateDetail: (next, current) =>
        `Daha yeni bir llama.cpp derlemesi (${next}) kurulmaya hazır — siz ${current} sürümündesiniz. Modeller indirme sırasında çalışmaya devam eder.`,
      updateAction: 'Motoru Güncelleyin',
      updating: 'Motor Güncelleniyor…',
      upToDateTitle: 'Motor Güncel',
      upToDateDetail: (tag, backend) => `llama.cpp ${tag} (${backend}) çalışıyor.`,
      activeDetail: 'Yeni sohbetler bu modeli kullanır — ilk mesajınızı gönderdiğinizde yüklenir.',
      activeNotLoaded: 'İlk Mesajınızda Yüklenir',
      loadedPill: 'Bellekte',
      placementResident: 'Tamamı GPU’da',
      placementSpilled: 'Kısmen RAM’de',
      placementResidentTip: 'Bu Bağlam Penceresinde Tamamen GPU Belleğinde Çalışıyor — Tam Hız',
      placementSpilledTip:
        'Bu Modelin Bir Kısmı Sistem RAM’inden Çalışır — Çalışır, Ancak Daha Yavaştır. Daha Kompakt Bir Yapı veya Daha Küçük Bir Bağlam Tamamen Uyar',
      loadingPill: 'Yükleniyor…',
      ejectTip: 'GPU Belleğini Boşaltın (Sonraki Mesajda Yeniden Yüklenir)',
      ejected: 'Model Bellekten Çıkarıldı — GPU Belleği Boşaltıldı',
      ejectFailed: 'Model bellekten çıkarılamadı.',
      stopServer: 'Kapatın',
      startServer: 'Açın',
      runtimeRunningDetail:
        'Yerel sunucu çalışıyor. Kapatıldığında tüm GPU belleği boşalır ve yeniden açana kadar yeni sohbetler yerel modelleri kullanamaz.',
      serverStopped: 'Yerel Sunucu Durduruldu — GPU Belleği Boşaltıldı',
      serverStarted: 'Yerel Sunucu Çalışıyor',
      serverStopFailed: 'Yerel sunucu durdurulamadı.',
      serverStartFailed: 'Yerel sunucu başlatılamadı.',
      activating: 'Başlatılıyor…',
      activateFailed: model => `${model} modeline geçilemedi.`,
      activateDoneToast: model => `Yeni Sohbetler ${model} Kullanır`,
      downloadFailed: model => `${model} indirmesi başarısız oldu.`,
      downloadPauseFailed: model => `${model} indirmesi duraklatılamadı.`,
      downloadResumeFailed: model => `${model} indirmesi sürdürülemedi.`,
      pillFitsGpu: 'GPU’nuz İçin Uygun',
      pillUsesRam: 'Sistem RAM’ini Kullanır',
      pillTooBig: 'Bu Makine İçin Çok Büyük',
      browseTitle: 'Daha Fazla Model Bulun',
      browseHint:
        'Hugging Face’in tamamında arayın. Burada indirdiğiniz modeller makinenize otomatik olarak boyutlandırılır, ancak tarafımızca test edilmez.',
      browsePlaceholder: 'Modelleri Ada veya Yazara Göre Arayın…',
      browseSearching: 'Hugging Face’te Aranıyor',
      browseListing: 'Model Dosyaları Okunuyor',
      browseShowFiles: 'Dosyaları Gösterin',
      browseRefresh: 'Yenileyin',
      browseDownloads: 'İndirme',
      browseLikes: 'Beğeni',
      browseGated: 'Hugging Face Oturumu Gerektirir',
      browseNoGguf: 'Uyumlu Model Dosyası Bulunamadı',
      browseFitUnknown: 'Uyum Bilinmiyor',
      browseAlreadyDownloaded: 'Zaten İndirildi',
      addedByYou: 'Tarafınızdan Eklendi',
      browseDownloadStarted: '{name} İndiriliyor',
      browseDownloadAria: '{name} İndirin',
      sideloadButton: 'Model Dosyası Ekleyin',
      sideloadTitle: 'Bir GGUF Model Dosyası Seçin',
      sideloadDone: '{name} Eklendi',
      sideloadAlreadyPresent: 'Zaten Kitaplığınızda',
      pillFullContext: max => `Tam ${max} bağlam`,
      pillFullContextTip: 'Modelin tam bağlam penceresinde başlangıçtan itibaren çalışır.',
      pillUpTo: max => `${max} Bağlama Kadar`,
      pillGrowsTip: 'Sohbetiniz Daha Fazla Alana İhtiyaç Duydukça Otomatik Olarak Büyür',
      pillVision: 'Görüntüleri Görür',
      deleteAction: 'Modeli Silin',
      deleteConfirm: model => `${model} Diskten Silinsin Mi?`,
      deleted: model => `${model} Silindi`,
      deleteFailed: 'Silme başarısız oldu.'
    },
    billing: {
      perMonth: amount => `${amount}/ay`,
      creditsPerMonth: amount => `Ayda ${amount} Kredi`,
      usageLabel: label => `${label} Kullanımı`,
      freeTier: {
        signIn: 'Oturum Açın',
        title: 'Nous Ücretsiz Katmanındasınız',
        message: 'Daha fazla model ve aracın kilidini açmak için Nous hesabıyla oturum açın.',
        caption:
          'Bağlantılar Dahil Olarak nous/welcome Üzerinde Çalışır. Oturum Açmak Bağlantılarınızı Korur ve Hesap Gerektiren Araçlarla Diğer Tüm Modelleri Ekler',
        name: 'Nous · Ücretsiz Katman',
        footnote:
          'Ücretsiz Katmanda Bakiye Yoktur ve Ödenecek Bir Şey Yoktur. Ödeme ve Kullanım, Nous Hesabıyla Oturum Açtığınızda Görünür',
        plan: 'Ücretsiz Katman',
        model: 'Model',
        connectors: 'Bağlantılar',
        included: 'Dahil'
      },
      amountValidation: {
        reloadTo: 'Yeniden Yükleme Tutarı',
        greaterThanThreshold: 'Yeniden Yükleme Tutarı Eşikten Büyük Olmalıdır',
        decimal: label => `${label}: En Fazla 2 Ondalık Basamaklı Bir Dolar Tutarı Girin`,
        positive: label => `${label}: Tutar $0’dan Büyük Olmalıdır`,
        minimum: (label, amount) => `${label}: En Az ${amount}`,
        maximum: (label, amount) => `${label}: En Fazla ${amount}`
      },
      stepUp: {
        openVerification: 'Doğrulama Sayfasını Açın',
        dismiss: 'Kapatın',
        waiting: 'Doğrulama bağlantısı bekleniyor…',
        verify: 'Devam Etmek İçin Doğrulayın',
        deniedTitle: 'Doğrulama Onaylanmadı',
        deniedBody: 'Doğrulama, bu terminal için Uzak Harcamaya izin verilmeden tamamlandı.',
        successTitle: 'Doğrulama Tamamlandı',
        successBody: 'Bu terminal için Uzak Harcamaya izin verildi.'
      },
      charge: {
        added: amount => `$${amount} Eklendi`,
        failedTitle: 'Ücret alınamadı.',
        unconfirmedTitle: 'Ücret Sonucu Doğrulanmadı',
        unconfirmedBody: message =>
          `${message} Son ücretinizin sonucu doğrulanmadı - yeniden denemeden önce bakiyenizi/geçmişinizi kontrol edin.`,
        checkTitle: 'Ücret Kontrol Edilemedi',
        checkBody: 'Ücret kontrol edilemedi.',
        untrackedTitle: 'Ücret İzlenemedi',
        untrackedBody: 'Faturalama hizmeti isteği kabul etti ancak bir ücret kimliği döndürmedi.',
        timeoutTitle: '5 Dakika Sonra Hâlâ İşleniyor',
        timeoutBody: 'Ücret hâlâ tahsil edilebilir. Yeniden denemeden önce portalı kontrol edin.',
        authenticationRequired:
          'Bankanız Doğrulama Gerektiriyor (3DS). Bu Satın Alımı Tamamlamak İçin Portalda Doğrulayın',
        expired: 'Kartınızın Süresi Doldu. Portalda Güncelleyin',
        declined: 'Kartınız Reddedildi. Portalda Başka Bir Kart Deneyin',
        failedBody: reason => `Ücret alınamadı (${reason}).`
      },
      title: 'Faturalandırma',
      preview: 'Önizleme',
      summary: {
        balance: 'Bakiye',
        plan: 'Plan',
        autoRefill: 'Otomatik Yükleme'
      },
      sections: {
        invoices: 'Faturalar',
        plan: 'Plan',
        paymentAndCredits: 'Ödeme ve Krediler',
        usage: 'Kullanım'
      },
      usage: {
        title: 'Kullanım'
      },
      buyCredits: {
        customAmount: 'Özel Kredi Tutarı',
        title: 'Şimdi Kredi Satın Alın',
        buyButton: 'Satın Alın',
        processing: 'İşleniyor… Takas Kontrol Ediliyor',
        added: amount => `${amount} Eklendi. Bakiye Yenileniyor`,
        retry: 'Yeniden Deneyin',
        openPortal: 'Portalı Açın'
      },
      plan: {
        title: 'Planlar',
        changePlan: 'Planı Değiştirin',
        viewPlans: 'Planları Görüntüleyin',
        backAria: 'Faturalamaya Dönün',
        current: 'Mevcut Plan',
        scheduled: 'Planlandı',
        empty: 'Şu Anda Geçilebilecek Plan Yok',
        undo: 'Geri Alın',
        undoing: 'Geri Alınıyor…',
        downgrade: 'Düşürün',
        confirmDowngrade: 'Düşürmeyi Onaylayın',
        tryAgain: 'Yeniden Deneyin',
        checkingChange: 'Bu Değişiklik Kontrol Ediliyor…',
        cannotChange: 'Bu Değişiklik Burada Yapılamaz',
        alreadyOn: name => `Zaten ${name} Planındasınız — Değiştirilecek Bir Şey Yok`,
        notScheduleable: 'Bu Değişiklik Burada Planlanamaz',
        scheduling: 'Planlanıyor…',
        cancel: 'İptal',
        effectScheduled: (targetName, effectiveAt, creditsDelta) =>
          `${targetName} Planına Geçiş — ${effectiveAt} Tarihinde Yürürlüğe Girer. Şimdi Ücret Alınmaz; O Zamana Kadar Mevcut Planınızı Korursunuz. Aylık Krediler Değişir: ${creditsDelta}`
      },
      keepGoingOnCredits: {
        title: 'Kredilerle Devam Et',
        description:
          'Dahil kullanım tükendiğinde kredilerinizi kullanın. Kapalı olduğunda: Hermes sıfırlanmayı bekler.',
        approveInBrowser:
          "Bunu değiştirmek için tarayıcınızda Uzak Harcama'yı onaylayın. Onayladığınız anda uygulanır.",
        openAgain: 'Tekrar aç',
        cancel: 'İptal',
        approvedRetry: 'Uzak Harcama onaylandı ancak değişiklik kaydedilmedi.',
        tryAgain: 'Tekrar dene'
      },
      autoReload: {
        threshold: 'Eşik',
        thresholdAria: 'Otomatik Yeniden Yükleme Eşiği',
        reloadTo: 'Şu Tutara Yükleyin',
        reloadToAria: 'Otomatik Yeniden Yükleme Tutarı',
        turnOffConfirm: 'Otomatik Yeniden Yükleme Kapatılsın Mı?',
        turnOff: 'Kapatın',
        disable: 'Devre Dışı Bırakın',
        updated: 'Otomatik Yeniden Yükleme Güncellendi',
        turnedOff: 'Otomatik Yeniden Yükleme Kapatıldı',
        manage: 'Yönetin',
        save: 'Kaydedin',
        saving: 'Kaydediliyor…',
        cancel: 'İptal'
      },
      state: {
        notice: {
          loggedOut: {
            title: 'Nous Hesabınızı Bağlayın',
            message: 'Bakiyenizi, planınızı ve kullanımınızı burada görmek için Nous hesabınızla oturum açın.',
            action: 'Oturum Açın'
          },
          openPortal: 'Portalı Açın ↗',
          noCard: {
            title: 'Kayıtlı Ödeme Yöntemi Yok',
            message:
              'Kayıtlı bir kart olana kadar bakiye yükleme kredisi satın alma ve otomatik yeniden yükleme kapalı kalır. Portalda bir kart ekleyin.',
            action: 'Kart Ekleyin ↗'
          }
        },
        paymentMethod: {
          title: 'Ödeme Yöntemi',
          description: 'Bakiye yüklemeleri ve abonelik yenilemeleri için kullanılan kartı yönetin.',
          addAction: 'Ödeme Yöntemi Ekleyin',
          updateAction: 'Güncelleyin',
          provenance: {
            autoRefill: 'Otomatik Yeniden Yükleme Kartı',
            customerDefault: 'Müşteri Varsayılanı',
            subPin: 'Abonelik Kartı',
            suffix: label => ` - ${label}`
          }
        },
        buyCredits: {
          description: 'Kartınıza yapılan ve bugün bakiyenize eklenen tek seferlik bir ücret.'
        },
        autoRefill: {
          title: 'Azaldığında Yükle',
          genericDescription: 'Bakiyeniz eşiğinizin altına düştüğünde bakiyenizi dolu tutun.',
          offPill: 'Kapalı',
          enabledPill: 'Etkin',
          notAvailablePill: '—',
          manageCaption: 'Otomatik Yeniden Yüklemeyi Portalda Yönetin',
          turnOnCaption: 'Otomatik Yeniden Yüklemeyi Portalda Açın',
          chargesDescription: (reloadTo, threshold) =>
            `Bakiyeniz ${threshold} altına düştüğünde otomatik olarak ${reloadTo} ücretlendirir.`,
          distinctCardCaption: cardLabel =>
            `Otomatik Yeniden Yükleme ${cardLabel} Ücretlendirir — Portalda Mutabakat Sağlayın`,
          distinctCardFallback: 'Farklı Bir Kart',
          reconcileAction: 'Mutabakat Sağlayın ↗'
        },
        usage: {
          subscriptionCredits: {
            title: 'Abonelik Kredileri',
            barLabel: 'Kalan Abonelik Kredileri',
            captionResets: date => `${date} Tarihinde Sıfırlanır`,
            valueOf: (remaining, monthly) => `${monthly} Üzerinden ${remaining} Kaldı`,
            valueOver: (remaining, monthly, over) => `${monthly} Üzerinden ${remaining} Kaldı · ${over} Aşım`
          },
          topupCredits: {
            title: 'Bakiye Kredileri',
            caption: 'Süresi Dolmaz'
          },
          monthlyCap: {
            title: 'Aylık Harcama Sınırı',
            barLabel: 'Kullanılan Aylık Harcama Sınırı',
            captionDefault: 'Varsayılan Üst Sınır',
            captionSpending: 'Aylık Uzaktan Harcama',
            valueUsed: (spent, limit) => `${limit} Üzerinden ${spent} Kullanıldı`
          },
          window: {
            today: 'Bugün',
            week: 'Bu Hafta',
            month: 'Bu Ay',
            topTier: 'Büyük Modeller (Aylık)',
            barLabel: title => `${title} dahil kullanım kullanıldı`,
            captionPaused: 'Duraklatıldı: abonelik ödemesi başarısız oldu',
            captionPausedOther: "Duraklatıldı: Portal'daki Faturalandırma bölümüne bakın",
            captionTopTierUsedUp: 'Aylık kota tükendi, geri kalanını krediler karşılar',
            captionTopTierUsedUpKeepGoingOff: 'Aylık kota tükendi, diğer dahil modeller hâlâ çalışıyor',
            captionResetsIn: duration => `${duration} sonra yenilenir`,
            captionIncluded: 'Dahil kullanım',
            valueUsed: percent => `${percent} kullanıldı`
          }
        },
        planCard: {
          freeTier: 'Ücretsiz',
          chooseAction: 'Seçin ↗',
          adjustPlanAction: 'Planı Düzenleyin ↗',
          unavailableCaption: 'Abonelik Ayrıntıları Kullanılamıyor; Portalı Yine de Açabilirsiniz',
          downgradeCaption: (tierName, when) => `${when} Tarihinde ${tierName} Planına Geçer`,
          cancellationCaption: when => `${when} Tarihinde İptal Edilir`,
          renewsCaption: date => `${date} Tarihinde Yenilenir`,
          noSubscriptionCaption: 'Etkin Abonelik Yok — Ücretli Modeller Bakiye Kredilerini Kullanır'
        }
      },
      errors: {
        consentRequired: {
          title: 'Kart Onayı Gerekli',
          message: 'Bu kartı portalda terminal ücretleri için onaylayın.'
        },
        insufficientScope: {
          title: 'Uzaktan Harcama Onay Gerektiriyor',
          message:
            'Bunun için Uzaktan Harcama’nın izinli olması gerekir. İzin vermek için bir bakiye yüklemesi başlatın, ardından yeniden deneyin.'
        },
        remoteSpendingRevoked: {
          title: 'Uzaktan Harcama Durduruldu',
          messageByAdmin: 'Bir yönetici bu terminal için uzaktan harcamayı durdurdu.',
          messageBySelf: 'Bu terminal için uzaktan harcamayı siz durdurdunuz.'
        },
        remoteSpendingReconnect: who =>
          `${who} Bu Cihazı Yeniden Yetkilendirmek İçin Ayarlar -> Ağ Geçidi’nden Yeniden Bağlanın`,
        sessionRevoked: {
          title: 'Oturum Kapatıldı',
          message: 'Oturumunuz kapatıldı. Ayarlar → Ağ Geçidi’nden yeniden oturum açın.'
        },
        cliBillingDisabled: {
          title: 'Uzaktan Harcama Kapalı',
          message:
            'Bu hesap için uzaktan harcama kapalı — bir faturalama yöneticisi bunu portalın Hermes Agent sayfasından açabilir.'
        },
        roleRequired: {
          title: 'Yönetici Rolü Gerekli',
          message:
            'Bakiye eklemek için kuruluş yöneticisi/sahibi olmanız gerekir. Bir yöneticiden isteyin veya portalda yönetin.'
        },
        idempotencyConflict: {
          title: 'Yeni Bir Bakiye Yüklemesi Başlatın',
          message: '🔴 Bu ücret anahtarı farklı bir tutar için zaten kullanıldı. Yeni bir bakiye yüklemesi başlatın.'
        },
        noPaymentMethod: {
          title: 'Kayıtlı Kart Yok',
          message:
            '💳 Terminal ücretleri için henüz kayıtlı kart yok. Portalda bir tane tanımlayın (tek seferlik kredi alımları yeniden kullanılabilir kart kaydetmez).'
        },
        orgAccessDenied: {
          title: 'Kuruluş Erişimi Reddedildi',
          message: 'Bu token, yönetebileceğiniz bir kuruluşa bağlı değil.'
        },
        monthlyCapExceeded: {
          title: 'Aylık Harcama Sınırına Ulaşıldı',
          messageReached: '🔴 Aylık harcama sınırına ulaşıldı.',
          messageHeadroom: remaining => `🔴 Aylık harcama sınırına ulaşıldı — $${remaining} kaldı.`
        },
        rateLimited: {
          title: 'Şu Anda Çok Fazla Ücretlendirme Var',
          message: mins => `🟡 Şu anda çok fazla ücretlendirme var. Bu bir ödeme hatası değil.`
        },
        stripeUnavailable: {
          title: 'Stripe’ta Sorun Var',
          message: mins => `Stripe’ta bir sorun var — kısa süre sonra yeniden deneyin.`
        },
        upgradeCapExceeded: {
          title: 'Günlük Plan Değiştirme Sınırına Ulaşıldı',
          message: 'Günlük plan değiştirme sınırına ulaşıldı — yarın yeniden deneyin.'
        },
        endpointUnavailable: {
          title: 'Faturalama Uç Noktası Kullanılamıyor',
          message: 'Faturalama uç noktası JSON olmayan bir yanıt döndürdü (bu dağıtımda kullanılamıyor olabilir).'
        },
        timeout: {
          title: 'Faturalama İsteği Zaman Aşımına Uğradı',
          message: 'Faturalama isteği zaman aşımına uğradı.'
        },
        transport: {
          title: 'Faturalama Bağlantısı Başarısız',
          message: 'Faturalama isteği ağ geçidine ulaşmadan başarısız oldu.'
        },
        default: {
          title: 'Faturalama İsteği Başarısız',
          message: 'Faturalama isteği başarısız oldu.'
        }
      }
    },
    providers: {
      connectAccount: 'Hesap Bağlayın',
      haveApiKey: 'Bunun yerine bir API anahtarınız mı var?',
      intro:
        'Abonelikle oturum açın — kopyalanacak API anahtarı yok. Hermes tarayıcı oturum açma işlemini sizin için tam burada, uygulama içinde yürütür.',
      connected: 'Bağlı',
      collapse: 'Daraltın',
      connectAnother: 'Başka Bir Sağlayıcı Bağlayın',
      otherProviders: 'Diğer Sağlayıcılar',
      disconnect: 'Bağlantıyı Kesin',
      disconnectInTerminal: 'Bağlantıyı Kesin (kaldırma komutunu terminalde çalıştırır)',
      removeConfirm: provider => `${provider} Kaldırılsın Mı?`,
      removeExternalGeneric: provider => `${provider} kendi CLI’sı tarafından yönetiliyor — oradan kaldırın`,
      removeKeyManaged: provider =>
        `${provider} bir API anahtarıyla yapılandırılmış. API Anahtarları bölümünden kaldırın`,
      removeTerminalConfirm: (provider, command) =>
        `${provider} bağlantısı kesilsin mi? Kimlik bilgisini temizlemek için terminalde “${command}” çalıştırılır`,
      removeTerminalRunning: provider => `Terminalde ${provider} bağlantısı kesiliyor…`,
      removedTitle: 'Hesap Kaldırıldı',
      removedMessage: provider => `${provider} kaldırıldı.`,
      failedRemove: provider => `${provider} kaldırılamadı.`,
      noProviderKeys: 'Kullanılabilir sağlayıcı API anahtarı yok',
      searchKeys: 'Sağlayıcılarda Arayın…',
      noKeysMatch: 'Aramanızla eşleşen sağlayıcı yok',
      localEndpoint: {
        title: 'Yerel / Özel Uç Nokta',
        description: 'Hermes’i OpenAI uyumlu herhangi bir uç noktaya yönlendirin (Zyphra, vLLM, llama.cpp, Ollama vb.).'
      },
      loading: 'Sağlayıcılar Yükleniyor…'
    },
    sessions: {
      loading: 'Arşivlenen Oturumlar Yükleniyor…',
      archivedTitle: 'Arşivlenen Oturumlar',
      archivedIntro:
        'Arşivlenen sohbetler kenar çubuğunda gizlenir ancak tüm mesajlarını korur. Bir sohbeti arşivlemek için kenar çubuğunda Alt/⌥+Shift ile tıklayın.',
      emptyArchivedTitle: 'Arşivlenmiş Öğe Yok',
      emptyArchivedDesc: 'Burada gizlemek için bir sohbeti arşivleyin.',
      unarchive: 'Arşivden Çıkarın',
      deletePermanently: 'Kalıcı Olarak Silin',
      messages: count => `${count} mesaj`,
      restored: 'Geri Yüklendi',
      deleteConfirm: title => `“${title}” kalıcı olarak silinsin mi? Bu işlem geri alınamaz`,
      autoArchiveTitle: 'Eski Sohbetleri Otomatik Arşivleyin',
      autoArchiveDesc:
        'Bir süredir dokunmadığınız sohbetleri otomatik olarak arşivleyin. Sabitlenmiş sohbetler asla arşivlenmez ve hiçbir şey silinmez — arşivlenen sohbetler yalnızca buraya taşınır.',
      autoArchiveDaysLabel: 'Şu Süreden Sonra Arşivleyin',
      autoArchiveDaysUnit: 'gün işlem yapılmadığında',
      autoArchiveFailed: 'Otomatik arşivleme güncellenemedi.',
      defaultDirTitle: 'Varsayılan Proje Dizini',
      defaultDirDesc:
        'Siz başka bir klasör seçmedikçe yeni oturumlar bu klasörde başlar. Ev dizininizi kullanmak için ayarlanmamış bırakın.',
      defaultDirUpdated: shortcut =>
        `Varsayılan proje dizini güncellendi — etkili olması için yeni bir sohbet başlatın${shortcut ? ` (${shortcut})` : ''}`,
      defaultsTo: label => `Varsayılan: ${label}`,
      change: 'Değiştirin',
      choose: 'Seçin',
      clear: 'Temizleyin',
      notSet: 'Ayarlanmadı',
      failedLoad: 'Arşivlenen oturumlar yüklenemedi.',
      unarchiveFailed: 'Arşivden çıkarma başarısız oldu.',
      deleteFailed: 'Silme başarısız oldu.',
      updateDirFailed: 'Varsayılan dizin güncellenemedi.',
      clearDirFailed: 'Varsayılan dizin temizlenemedi.'
    },
    toolsets: {
      loadingConfig: 'Yapılandırma Yükleniyor',
      savedTitle: 'Kimlik Bilgisi Kaydedildi',
      savedMessage: key => `${key} güncellendi.`,
      removedTitle: 'Kimlik Bilgisi Kaldırıldı',
      removedMessage: key => `${key} kaldırıldı.`,
      failedSave: key => `${key} kaydedilemedi.`,
      failedRemove: key => `${key} kaldırılamadı.`,
      failedReveal: key => `${key} gösterilemedi.`,
      removeConfirm: key => `${key} .env Dosyasından Kaldırılsın Mı?`,
      set: 'Ayarlayın',
      notSet: 'Ayarlanmadı',
      selectedTitle: 'Sağlayıcı Seçildi',
      selectedMessage: provider => `${provider} artık etkin.`,
      failedSelect: provider => `${provider} seçilemedi.`,
      failedLoad: 'Araç yapılandırması yüklenemedi.',
      noProviderOptions: 'Bu Araç Setinin Sağlayıcı Seçeneği Yok — Etkinleştirin, Mevcut Kurulumunuzla Çalışır',
      noProviders: 'Bu Araç Seti İçin Şu Anda Kullanılabilir Sağlayıcı Yok',
      ready: 'Hazır',
      needsSignIn: 'Oturum Açma Gerekli',
      needsSetup: 'Kurulum Gerekli',
      activeBackend: 'Etkin',
      activeBackendHint: 'Bu, etkin arka ucunuzdur.',
      useBackend: 'Bu Arka Ucu Kullanın',
      nousIncluded: 'Nous Aboneliğine Dahil — Etkinleştirmek İçin Nous Hesabınızla Oturum Açın',
      nousAuthNeededTitle: 'Nous Hesabınızla Oturum Açın',
      nousAuthNeededMessage: provider =>
        `${provider} kaydedildi ancak yalnızca Nous hesabınızla oturum açtığınızda çalışır.`,
      nousAuthSignIn: 'Oturum Açın',
      nousAuthDoneTitle: 'Nous Hesabı Bağlandı',
      nousAuthDoneMessage: 'Abonelik arka uçlarınız artık etkin.',
      nousAuthFailed: 'Nous oturum açma işlemi tamamlanmadı.',
      nousAuthFailedMessage: 'Tekrar deneyin.',
      nousAuthTryAgain: 'Tekrar Deneyin',
      noApiKeyRequired: 'API Anahtarı Gerekmez',
      postSetupHint: step =>
        `Bu arka uç tek seferlik bir kurulum gerektirir (${step}). Bu makinede çalışır — birkaç dakika sürebilir.`,
      postSetupInstalledHint: 'Kuruldu. Kurulumu yalnızca bir sorun varsa yeniden çalıştırın.',
      postSetupRun: 'Kurulumu Çalıştırın',
      postSetupRerun: 'Kurulumu Yeniden Çalıştırın',
      postSetupInstalled: 'Kuruldu',
      postSetupRunning: 'Kuruluyor…',
      postSetupStarting: 'Başlatılıyor…',
      postSetupCompleteTitle: 'Kurulum Tamamlandı',
      postSetupCompleteMessage: step => `${step} kuruldu.`,
      postSetupErrorTitle: 'Kurulum hatalarla tamamlandı.',
      postSetupErrorMessage: step =>
        `${step} kurulumu tamamlanmadı. Nedenini görmek için günlükleri açın, ardından kurulumu yeniden çalıştırın.`,
      postSetupOpenLogs: 'Günlükleri Açın',
      postSetupRunAgain: 'Yeniden Çalıştırın',
      postSetupFailed: step => `${step} kurulumu çalıştırılamadı.`,
      webSearchActive: backend => `Arama: ${backend}`,
      webExtractActive: backend => `Çıkarma: ${backend}`,
      webCapabilityUnset: 'Ayarlanmadı',
      webUseForSearch: 'Arama İçin Kullanın',
      webUseForExtract: 'Çıkarma İçin Kullanın',
      webUsedForSearch: 'Arama Arka Ucu',
      webUsedForExtract: 'Çıkarma Arka Ucu',
      webCapabilitySelectedMessage: (provider, capability) => `${provider} artık web ${capability} işlevini yönetiyor.`,
      failedSelectCapability: provider => `${provider} ayarlanamadı.`,
      loadingModels: 'Model Kataloğu Yükleniyor…',
      modelSectionTitle: 'Model',
      modelCount: count => `${count} Model`,
      modelInUse: 'Kullanımda',
      modelDefault: 'Varsayılan',
      modelInactiveHint: 'Modelini değiştirmek için önce bu arka ucu seçin.',
      modelSelectedTitle: 'Model Seçildi',
      modelSelectedMessage: model => `${model} yeni oturumlar için geçerlidir.`,
      failedSelectModel: model => `${model} seçilemedi.`,
      terminalBackend: {
        sectionTitle: 'Yürütme Arka Ucu',
        loading: 'Yürütme Arka Uçları Denetleniyor…',
        failedLoad: 'Terminal arka uçları yüklenemedi.',
        ready: 'Hazır',
        needsSetup: 'Kurulum Gerekli',
        unavailable: 'Kullanılamıyor',
        inUse: 'Kullanımda',
        selectedTitle: 'Arka Uç Seçildi',
        selectedMessage: backend =>
          `Terminal komutları artık ${backend} üzerinden çalışıyor. Yeni oturumlar için geçerlidir.`,
        failedSelect: backend => `${backend} seçilemedi.`,
        needsSetupHint:
          'Bu arka uç şu anda tam kurulum olmadan seçili — kurulum tamamlanana kadar komutlar başarısız olur.',
        needsSetupConfirmTitle: backend => `${backend} Yine de Seçilsin Mi?`,
        needsSetupConfirmDescription: detail =>
          `${detail} Bu değişiklikten sonra başlayan oturumlarda, kurulum tamamlanana kadar terminal veya dosya aracı olmayacaktır.`,
        needsSetupConfirmDescriptionGeneric:
          'Bu arka uç henüz kurulmadı. Bu değişiklikten sonra başlayan oturumlarda, kurulum tamamlanana kadar terminal veya dosya aracı olmayacaktır.',
        needsSetupConfirmAction: 'Yine de Seçin',
        unavailableTitle: 'Terminal Komutları Kullanılamıyor',
        unavailableMessage: backend =>
          `Hermes şu anda shell komutlarını çalıştıramıyor: ${backend} hazır değil. Yerel’e geçin veya ${backend} kurulumunu tamamlayıp tekrar deneyin.`,
        openBackendSettings: 'Terminal Ayarlarını Açın',
        useLocal: 'Yerel’i Kullanın',
        switchedToLocal: 'Terminal Komutları Artık Yerel Olarak Çalışıyor. Yeni Oturumlar İçin Geçerlidir'
      },
      browserRealProfile: {
        label: 'Gerçek Tarayıcı Profilimi Kullanın',
        description:
          'Varsayılan tarayıcınızın oturum açma bilgilerini ve çerezlerini, ajanın gezinirken kullandığı yönetilen bir anlık görüntüye kopyalar. Etkin profiliniz hiçbir zaman doğrudan açılmaz. Yeni oturumlar için geçerlidir.',
        enabledTitle: 'Gerçek Profille Gezinme Açık',
        enabledMessage: 'Yeni oturumlar, varsayılan tarayıcı profilinizin bir anlık görüntüsüyle gezinir.',
        disabledTitle: 'Gerçek Profille Gezinme Kapalı',
        disabledMessage: 'Profil anlık görüntüsü silinecek; yeni oturumlar temiz bir tarayıcı kullanacaktır.',
        failedSave: 'Gerçek profil ayarı kaydedilemedi.',
        prompt: {
          title: 'Sitelerinizde Oturumunuz Açık Kalsın',
          body: 'Hermes’in varsayılan tarayıcı profilinizin anlık görüntüsüyle gezinmesine izin verin; böylece siteler oturum açılmış halde açılır.',
          bulletSnapshot: 'Çerezler ve Oturum Açma Bilgileri Yönetilen Bir Anlık Görüntüye Kopyalanır',
          bulletLiveProfile: 'Etkin Tarayıcı Profiliniz Asla Doğrudan Açılmaz',
          bulletLocal: 'Hiçbir Şey Bu Bilgisayardan Ayrılmaz',
          dontShowAgain: 'Bir Daha Göstermeyin',
          notNow: 'Şimdi Değil',
          enable: 'Profilimi Kullanın'
        }
      }
    }
  },
  skillDeepLink: {
    installTitle: (name: string) => `«${name}» kurulsun mu?`,
    installDescription: 'Bu yetenek yeni oturumlarda kullanılabilir olacak. Yalnızca güvendiğiniz kaynaklardan kurun.',
    installTo: 'Kurulacağı yer',
    thisComputer: 'Bu bilgisayar',
    installing: 'Kuruluyor…',
    installComplete: (name: string) => `«${name}» kuruldu`,
    destinationChanged: 'Hedef değişti. Bu pencereyi kapatıp kurulum bağlantısını yeniden açın.',
    installed: 'Kuruldu',
    source: 'Kaynak'
  },
  skills: {
    tabSkills: 'Yetenekler',
    tabToolsets: 'Araçlar',
    configuringProfile: 'Yapılandırılıyor:',
    all: 'Tümü',
    searchSkills: 'Yeteneklerde Arayın…',
    searchToolsets: 'Araçlarda Arayın…',
    refresh: 'Yetenekleri Yenileyin',
    refreshing: 'Yetenekler Yenileniyor',
    loading: 'Yetenekler Yükleniyor…',
    noSkillsTitle: 'Yetenek Bulunamadı',
    noSkillsDesc: 'Daha geniş bir arama yapın veya farklı bir kategori deneyin.',
    noToolsetsTitle: 'Araç Seti Bulunamadı',
    noToolsetsDesc: 'Daha geniş bir arama sorgusu deneyin.',
    noDescription: 'Açıklama yok.',
    configured: 'Yapılandırıldı',
    needsKeys: 'Anahtar Gerekli',
    visionModelHint:
      'Görüntü işleme, yardımcı model yapılandırmanızı kullanır — görüntü destekli model orada seçilir, burada sağlayıcı başına değil.',
    visionModelLink: 'Görüntü Modelini Ayarlar → Modeller’de Seçin',
    toolsetsEnabled: (enabled, total) => `${enabled}/${total} Araç Seti Etkin`,
    configureToolset: label => `${label} Yapılandırın`,
    toggleToolset: (label, enabled) => `${label} Araç Setini Açın`,
    skillsLoadFailed: 'Yetenekler yüklenemedi.',
    toolsetsRefreshFailed: 'Araç setleri yenilenemedi.',
    skillEnabled: 'Yetenek Etkinleştirildi',
    skillDisabled: 'Yetenek Devre Dışı Bırakıldı',
    toolsetEnabled: 'Araç Seti Etkinleştirildi',
    toolsetDisabled: 'Araç Seti Devre Dışı Bırakıldı',
    appliesToNewSessions: name => `${name} yeni oturumlara uygulanır`,
    failedToUpdate: name => `${name} güncellenemedi.`,
    sortMostUsed: 'En Çok Kullanılan',
    sortAlpha: 'A–Z',
    sortMostUsedDesc: '↓ En çok kullanılan.',
    sortLeastUsedAsc: '↑ En Az Kullanılan',
    enableAll: 'Tümünü Etkinleştirin',
    disableAll: 'Tümünü Devre Dışı Bırakın',
    disableUnused: 'Kullanılmayanları Devre Dışı Bırakın',
    bulkUpdated: count => `Yeni oturumlar için ${count} öğe güncellendi`,
    bulkNoChange: 'Değiştirilecek bir şey yok',
    usageCount: count => `${count}× Kullanıldı`,
    provenance: {
      agent: 'Öğrenilen',
      bundled: 'Yerleşik',
      hub: 'Merkez'
    },
    emptyNoneFound: noun => `${noun} Bulunamadı`,
    emptyNothingMatches: query => `“${query}” İle Eşleşen Yok`,
    emptyNoneAvailable: noun => `Henüz ${noun} Yok`,
    changesApplyNewSessions: 'Değişiklikler yeni oturumlara uygulanır',
    skillUpdated: 'Yetenek Güncellendi',
    edit: 'Düzenleyin',
    archive: 'Arşivleyin',
    skillArchivedTitle: 'Yetenek Arşivlendi',
    skillArchivedMessage: 'hermes curator restore komutuyla geri yüklenebilir.',
    tabPlugins: 'Eklentiler',
    plugins: {
      agentTitle: 'Ajan Eklentileri',
      agentBlurb:
        "Seçili profil için ajanı genişletin — araçlar, hook'lar, sağlayıcılar. Ağ geçidi yeniden başlatıldıktan sonra etkinleşir.",
      pageBlurb:
        'Bir eklenti bu uygulamayı, ajanı ya da ikisini birden genişletebilir — her yarının kendi anahtarı vardır.',
      halfDesktop: 'Masaüstü',
      halfDesktopHint: 'bu uygulama, her profil için aynı',
      halfAgent: 'Ajan',
      halfAgentIn: (profile: string) => `${profile} profilindeki ajan`,
      defaultProfile: 'Hermes (varsayılan)',
      kindAgent: 'Ajan',
      kindDesktop: 'Masaüstü',
      kindBoth: 'Ajan + Masaüstü',
      installAgentHere: 'Buraya Kurun',
      installAgentHereTip: (profile: string) =>
        `Masaüstü yarısı bu uygulamada yüklü, ancak ajan yarısı ${profile} profilinde kurulu değil. Orada kurun.`,
      installAgentHereNoOrigin:
        "Ajan yarısı bu profilde kurulu değil ve bu paket elle kopyalanmış (katalog girdisi ya da git uzak deposu yok), bu yüzden buradan kurulamaz. Klasörünü profile kopyalayın ya da Git'ten yeniden kurun.",
      desktopHalfPending: 'kopyalanıyor…',
      desktopHalfPendingTip:
        "Bu paket, henüz uygulamaya kopyalanmamış bir masaüstü yarısı içeriyor. Yeniden Tara'yı kullanın ya da uygulamayı yeniden başlatın.",
      desktopHalfRemote: 'kullanılamıyor (uzak arka uç)',
      desktopHalfRemoteTip:
        "Bu paketin masaüstü yarısı, bu uygulamanın okuyamadığı uzak arka ucun diskinde bulunuyor. Burada kullanmak için paketin depo URL'siyle ve Masaüstü hedefi işaretli olarak Git'ten Kurun komutunu çalıştırın — bu, masaüstü yarısını bu bilgisayara klonlar.",
      emptyAll: 'Henüz eklenti yok.',
      empty: 'Bu profil için kurulu ajan eklentisi yok.',
      emptyHint: 'Aşağıdaki kataloğa göz atın ve incelenmiş bir eklentiyi tek tıkla kurun.',
      loadFailed: 'Ajan eklentileri yüklenemedi',
      toggleFailed: (name: string) => `${name} açılıp kapatılamadı`,
      toolsetOn: (name: string, profile: string) => `${name} ajan araçları ${profile} profilinde etkinleştirildi`,
      toolsetOff: (name: string, profile: string) => `${name} ajan araçları ${profile} profilinde devre dışı bırakıldı`,
      toolsetToggleFailed: (name: string) =>
        `${name} ajan araçları açılıp kapatılamadı; Masaüstü paneli değiştirilmedi`,
      legacyBackend:
        "Bu arka uç, anahtar adresli eklenti anahtarlarından önceki bir sürümde çalışıyor — burada yönetmek için Hermes'i güncelleyin.",
      portableBadge: 'taşınabilir',
      serverStates: {
        connected: 'bağlı',
        app_not_running: 'uygulama çalışmıyor',
        hermes_not_connected: 'MCP bağlantısı eksik',
        endpoint_unavailable: 'uç nokta kullanılamıyor',
        no_interactive_session: 'etkileşimli oturum yok',
        version_too_old: 'sürüm çok eski',
        missing_app: 'uygulama eksik',
        unsupported_gpu: 'GPU desteklenmiyor',
        unknown: 'durum bilinmiyor'
      },
      alreadyInstalled: (name: string) => `${name} bu profilde zaten kurulu.`,
      catalogProvenance: (sha: string) => `Hermes kataloğundan kuruldu${sha ? `, ${sha} sabitlemesiyle` : ''}.`,
      pinnedProvenance: (sha: string) =>
        `Commit ${sha} sürümüne sabitlendi. Yeni bir sabitlemeyle yeniden kurulana kadar güncellemeler reddedilir.`,
      pinnedBadge: (sha: string) => `sabitli @ ${sha}`,
      ...trPluginUpdate,
      ...trPluginPreviewAccess,
      updateToPin: sha => `${sha} Sürümüne Güncelleyin`,
      updateFailed: name => `${name} güncellenemedi.`,
      updated: name => `${name} Güncel Katalog Sabitlemesine Güncellendi. Uygulamak İçin Ağ Geçidini Yeniden Başlatın`,
      updateConsentTitle: name => `${name} Daha Fazlasını İstiyor`,
      updateConsentBody: (name, sha) =>
        `${name} eklentisinin yeni katalog sabitlemesi (${sha}), yüklü sürümde bulunmayan yüzeyler ekliyor. Yalnızca bunlara güveniyorsanız uygulayın:`,
      updateConsentConfirm: 'Güncellemeyi Uygulayın',
      updateScanTitle: name => `Güvenlik taraması ${name} bileşenini işaretledi`,
      updateScanBody: (name, count) =>
        `${name} güncellemesi dikkat kararı aldı (${count} bulgu). Her güncelleme taranır. Yalnızca kaynağa güveniyorsanız uygulayın:`,
      updateScanMore: count => `+ ${count} tane daha`,
      updateScanConfirm: 'Yine de Güncelleyin',
      updateScanBlocked: name =>
        `Güvenlik taraması, ${name} güncellemesini engelledi (tehlikeli karar). Bu engellenemez.`,
      updatedGit: name => `${name} en son commit sürümüne güncellendi.`,
      uninstall: 'Kaldırın',
      uninstallTip: (name: string, profile: string) => `${name} bileşenini ${profile} profilinden kaldırın`,
      uninstallConfirmTitle: (name: string) => `${name} kaldırılsın mı?`,
      uninstallConfirmBody: (name: string, profile: string) =>
        `Bu işlem, eklentinin dosyalarını ${profile} profilinden siler. Birlikte geldiği masaüstü yarısı da kaldırılır. İstediğiniz zaman katalogdan ya da Git'ten yeniden kurabilirsiniz.`,
      uninstallFailed: (name: string) => `${name} kaldırılamadı`,
      uninstalled: (name: string) => `${name} kaldırıldı. Boşaltmak için ağ geçidini yeniden başlatın.`,
      uninstallDesktopTip: (name: string) => `${name} bileşenini bu uygulamadan kaldırın`,
      uninstallDesktopConfirmBody: (name: string) =>
        `Bu işlem, ${name} bileşenini bu bilgisayardaki desktop-plugins klasöründen siler ve hemen boşaltır. İstediğiniz zaman Git'ten yeniden kurabilir ya da klasörü geri koyabilirsiniz.`,
      uninstalledDesktop: (name: string) => `${name} kaldırıldı.`,
      deepLinkErrorTitle: 'Eklenti kurulum bağlantısı reddedildi',
      deepLinkCatalogInvalidName: 'Bağlantının katalog adı eksik ya da geçersiz.',
      deepLinkCatalogUnknown: (name: string) => `“${name}” Hermes eklenti kataloğunda yok. Hiçbir şey kurulmadı.`,
      deepLinkCatalogUnavailable:
        'Hermes eklenti kataloğu yüklenemedi. Bağlantınızı denetleyin ve bağlantıyı yeniden açın.',
      settingsToggle: (name: string) => `Ayarlar: ${name}`,
      settingsForm: {
        save: 'Ayarları Kaydedin',
        saved: (name: string) => `${name} ayarları kaydedildi.`,
        saveFailed: (name: string) => `${name} ayarları kaydedilemedi`,
        required: 'Zorunlu',
        optional: '(isteğe bağlı)',
        secretSet: '•••••••• (ayarlandı)',
        secretStoredAs: (env: string) =>
          `Profilin .env dosyasında ${env} olarak saklanır, config.yaml içinde asla; mevcut değeri korumak için boş bırakın.`
      }
    },
    officialCatalog: 'Yüklemeye Uygun',
    officialPill: 'Resmî',
    hub: {
      searchPlaceholder: 'Yetenek Merkezinde Arayın',
      search: 'Arayın',
      searching: 'Aranıyor…',
      connectingHubs: 'Yetenek Merkezlerine Bağlanılıyor…',
      connectedHubs: 'Bağlı Merkezler:',
      featured: 'Öne Çıkan Yetenekler',
      landingHint:
        'Resmî dizin, GitHub ve topluluk kaynaklarından yüklenebilir yeteneklere göz atmak için merkezde arama yapın.',
      noResults: 'Merkezde Eşleşen Yetenek Bulunamadı',
      resultCount: (count, ms) => `${ms} ms İçinde ${count} Sonuç`,
      timedOut: sources => `Zaman Aşımı: ${sources}`,
      installed: 'Yüklendi',
      install: 'Yükleyin',
      installing: 'Yükleniyor…',
      uninstall: 'Kaldırın',
      uninstalling: 'Kaldırılıyor…',
      updateAll: 'Yüklü Olanları Güncelleyin',
      updating: 'Güncelleniyor…',
      preview: 'Önizleme',
      scan: 'Tarama',
      scanning: 'Taranıyor…',
      close: 'Kapatın',
      files: 'Dosyalar',
      noReadme: 'Bu Yeteneğin SKILL.md Önizlemesi Yok',
      trust: {
        builtin: 'Yerleşik',
        trusted: 'Güvenilir',
        community: 'Topluluk'
      },
      verdictSafe: 'Güvenli',
      verdictCaution: 'Dikkat',
      verdictDangerous: 'Tehlikeli',
      policyAllow: 'Yüklemeye İzin Verildi',
      policyAsk: 'Yüklemeden Önce İnceleyin',
      policyBlock: 'Yükleme İlke Tarafından Engellendi',
      findings: count => `${count} Bulgu`,
      noFindings: 'Güvenlik Bulgusu Yok',
      installStarted: name => `${name} Yükleniyor…`,
      uninstallStarted: name => `${name} Kaldırılıyor…`,
      updateStarted: 'Yüklü Yetenekler Güncelleniyor…',
      actionFailed: 'Yetenek eylemi başarısız oldu.',
      installBlockedTitle: name => `${name} Yüklenemedi`,
      installBlockedMessage: (findings, unverified) =>
        `Güvenlik taraması, incelenmesi gereken riskli kalıpları işaretledi ve yetenek doğrulanmamış bir kaynaktan geliyor. Yazarına güvenip güvenmeyeceğinize karar vermeden önce taramayı okuyun.`,
      viewScan: 'Taramayı Görüntüleyin',
      openLog: 'Günlüğü Açın',
      actionLog: 'Eylem Günlüğü',
      alreadyInstalled: name => `“${name}” Zaten Yüklü`,
      pickerTitle: 'Yetenek Merkezi',
      pickerBrowse: 'Tüm Merkeze Göz Atın',
      pickerHide: 'Merkez Tarayıcısını Gizleyin',
      pickerHint:
        'Herhangi bir yetenekte “+ Bu Ajana Ekle” seçeneğine tıklayın — yetenek yüklenir ve yukarıdaki listede görünür.',
      loadFailed: 'Yetenek merkezi yüklenemedi.',
      previewFailed: 'Yetenek önizlemesi başarısız oldu.',
      scanFailed: 'Güvenlik taraması başarısız oldu.',
      searchFailed: 'Merkez araması başarısız oldu.'
    }
  },
  starmap: {
    title: 'Bellek Grafiği',
    subtitle: (nodes, clusters) => `${clusters} kategoride ${nodes} yetenek.`,
    close: 'Bellek Grafiğini Kapatın',
    refresh: 'Yenileyin',
    memory: 'Bellek',
    filterAll: 'Tümü',
    filterUsed: 'Kullanılan',
    filterLearned: 'Öğrenilen',
    viewGraph: 'Grafik',
    loadFailed: 'Bellek grafiği yüklenemedi.',
    loading: 'Yükleniyor…',
    emptyTitle: 'Henüz Bir Şey Öğrenilmedi',
    emptyDesc: 'Hermes işiniz için yetenekler ve anılar oluşturdukça bunlar burada görünür.',
    share: 'Haritayı Paylaşın',
    shareHint:
      'Bu haritayı paylaşmak için kodu kopyalayın veya yüklemek için bir kod yapıştırın. Kod yalnızca düzeni içerir; bellek veya yetenek metninizi içermez.',
    shareTitle: 'Harita İçe ve Dışa Aktarın',
    sharePlaceholder: 'Bir Harita Kodu Yapıştırın…',
    copy: 'Harita Kodunu Kopyalayın',
    copied: 'Kopyalandı!',
    importMap: 'Harita İçe Aktarın',
    importBtn: 'Yükleyin',
    importEmpty: 'Yüklemek İçin Bir Harita Kodu Yapıştırın',
    importSuccess: nodes => `${nodes} Düğümlü Bir Harita Yüklendi`,
    importedBadge: 'İçe Aktarılan Harita',
    resetToMine: 'Haritama Dönün'
  },
  gatewayGroupOpen: {
    opening: 'Ağ geçidi grubu açılıyor…',
    lookupFailed: 'Bu grup ağ geçidinde bulunamadı. Yeniden deneyin.',
    missing: 'Bu ağ geçidi grubu artık mevcut değil.'
  },
  agents: {
    extendedTranscript: 'Genişletilmiş Döküm',
    transcriptTruncated: 'En Son 16 KiB Gösteriliyor',
    transcriptUnavailable: 'Canlı Döküm Kullanılamıyor',
    close: 'Ajanları Kapatın',
    title: 'Ajan Ağacı',
    subtitle: 'Geçerli tur için canlı alt ajan etkinliği.',
    emptyTitle: 'Canlı Alt Ajan Yok',
    emptyDesc: 'Bir turda iş devredildiğinde, alt ajanlar ilerlemelerini burada canlı olarak gösterir.',
    running: 'Çalışıyor',
    failed: 'Başarısız',
    done: 'Tamamlandı',
    streaming: 'Akışta',
    files: 'Dosyalar',
    moreFiles: count => `+${count} Dosya Daha`,
    moreAgents: count => `+${count} Ajan Daha`,
    queued: 'Sırada',
    waitingActivity: 'Etkinlik Bekleniyor',
    steer: 'Yönlendirin',
    steerPlaceholder: 'Bu Alt Ajan İçin Talimatlar',
    steerQueued: 'Sonraki Kontrol Noktası İçin Sırada',
    stopRequested: 'Durdurma İstendi',
    requestRejected: 'Alt Ajan İsteği Kabul Etmedi',
    delegation: index => `Devir ${index}`,
    workers: count => `${count} Çalışan`,
    workersActive: count => `${count} Etkin`,
    agentsCount: count => `${count} Ajan`,
    activeCount: count => `${count} Etkin`,
    failedCount: count => `${count} başarısız`,
    toolsCount: count => `${count} Araç`,
    filesCount: count => `${count} Dosya`,
    updatedAgo: age => `${age} Güncellendi`,
    ageNow: 'Şimdi',
    ageSeconds: seconds => `${seconds} Saniye Önce`,
    ageMinutes: minutes => `${minutes} Dakika Önce`,
    ageHours: hours => `${hours} Saat Önce`,
    ageDays: days => `${days} Gün Önce`,
    durationSeconds: seconds => `${seconds} sn`,
    durationMinutes: (minutes, seconds) => `${minutes} dk ${seconds} sn`,
    tokens: value => `${value} Token`
  },
  commandCenter: {
    close: 'Komut Merkezini Kapatın',
    paletteTitle: 'Komut Paleti',
    back: 'Geri',
    searchPlaceholder: 'Oturumlarda, Görünümlerde ve Eylemlerde Arayın',
    goTo: 'Git',
    goToSession: 'Oturuma Gidin',
    branches: 'Dallar',
    projects: 'Projeler',
    openFolder: 'Klasörü Proje Olarak Açın…',
    openFolderAt: path => `Klasörü Proje Olarak Açın — ${path}`,
    newSessionInProject: project => `${project} İçinde Yeni Oturum`,
    commands: 'Komutlar',
    startInBranch: branch => `${branch} İçinde Yeni Konuşma`,
    commandCenter: 'Komut Merkezi',
    appearance: 'Görünüm',
    settings: 'Ayarlar',
    changeTheme: 'Temayı Değiştirin',
    changeColorMode: 'Renk Modunu Değiştirin…',
    pets: {
      title: 'Evcil Hayvanlar',
      placeholder: 'Evcil Hayvanlarda Arayın…',
      loading: 'Petdex Galerisi Yükleniyor…',
      error: 'Petdex galerisine ulaşılamadı.',
      staleBackend: 'Evcil Hayvanları Kullanmak İçin Hermes’i Yeniden Başlatın — Arka Uç Bu Özelliği Desteklemiyor',
      empty: 'Eşleşen Evcil Hayvan Yok',
      turnOff: 'Kapatın',
      turnOn: 'Açın',
      installed: 'Yüklendi',
      generatedTag: 'Oluşturuldu',
      adoptFailed: 'Bu evcil hayvan sahiplenilemedi.',
      toggleFailed: enabled => `Evcil hayvan açılamadı.`,
      noneAvailable: 'Kullanılabilir Evcil Hayvan Yok — Yüklemek İçin Aşağıdan Birini Seçin'
    },
    generatePet: {
      title: 'Evcil Hayvan Oluşturun',
      placeholder: 'Oluşturmak İçin Bir Evcil Hayvan Tanımlayın…',
      promptHint: 'Bir açıklama yazın, ardından dört görünüm taslağı oluşturmak için Enter’a basın.',
      readyHint: 'Açıklamanızdan dört görünüm taslağı oluşturmak için Enter’a basın.',
      generate: 'Oluşturun',
      generating: 'Oluşturuluyor…',
      retry: 'Yeniden Deneyin',
      hatch: 'Yumurtadan Çıkarın',
      spawning: 'Yumurtadan Çıkarılıyor…',
      hatching: 'Evcil Hayvanınız Yumurtadan Çıkarılıyor…',
      hatchingSub: 'Hayata Döndürülüyor…',
      hatched: 'Yumurtadan Çıktı!',
      hatchRow: (_state, done, total) => `${total} Kareden ${done}. Kare Çiziliyor…`,
      hatchComposing: 'Parçalar Bir Araya Getiriliyor…',
      hatchSaving: 'Neredeyse Bitti…',
      namePlaceholder: 'Evcil Hayvanınıza İsim Verin',
      staleBackend: 'Evcil Hayvan Oluşturmak İçin Hermes’i Güncelleyin',
      backgroundHint: 'Bunu kapatabilirsiniz — Hermes işlem bittiğinde sizi bilgilendirecektir.',
      slowProviderHint: 'Bu birkaç dakika sürebilir.',
      remix: 'Yeniden Harmanlayın',
      remixConfirmTitle: 'Bu Görünüm Yeniden Harmanlansın mı?',
      remixConfirmBody:
        'Bu işlem, bunu başlangıç noktası olarak kullanarak yeni bir taslak grubu oluşturur. Birkaç dakika sürebilir.',
      genericError: 'Oluşturma başarısız oldu — tekrar deneyin veya bir öneri seçin.',
      referenceImageTooLarge: 'Referans Görseli Çok Büyük. 16 MB’ın Altında Bir Görsel Kullanın',
      referenceImageInvalid: 'Bu Referans Görseli Okunamadı. PNG, JPG, WebP veya GIF Deneyin',
      adopt: 'Sahiplenin',
      startOver: 'Baştan Başlayın'
    },
    installTheme: {
      title: 'Tema Yükleyin…',
      pageTitle: 'Tema Yükleyin',
      placeholder: 'VS Code Marketplace’te Arayın…',
      loading: 'Marketplace’te Aranıyor…',
      error: 'Marketplace’e ulaşılamadı.',
      empty: 'Eşleşen Tema Yok',
      install: 'Yükleyin',
      installing: 'Yükleniyor…',
      installed: 'Yüklendi',
      installs: count => `${count} Yükleme`
    },
    settingsFields: 'Ayar Alanları',
    mcpServers: 'MCP Sunucuları',
    archivedChats: 'Arşivlenmiş Sohbetler',
    sections: {
      maintenance: 'Bakım',
      sessions: 'Oturumlar',
      system: 'Sistem',
      usage: 'Kullanım'
    },
    nav: {
      newChat: {
        title: 'Yeni Oturum',
        detail: 'Yeni bir oturum başlatın.'
      },
      settings: {
        title: 'Ayarlar',
        detail: 'Hermes masaüstü uygulamasını yapılandırın.'
      },
      capabilities: {
        title: 'Yetenekler',
        detail: 'Yetenekler, araçlar, MCP sunucuları ve eklentiler.'
      },
      messaging: {
        title: 'Mesajlaşma',
        detail: 'Telegram, Slack, Discord ve daha fazlasını ayarlayın.'
      },
      artifacts: {
        title: 'Çıktılar',
        detail: 'Oluşturulan çıktılara göz atın.'
      }
    },
    sectionEntries: {
      sessions: {
        title: 'Oturumlar Paneli',
        detail: 'Oturumlarda arayın, oturumları sabitleyin ve yönetin.'
      },
      system: {
        title: 'Sistem Paneli',
        detail: 'Ağ geçidi durumu, günlükler, yeniden başlatma/güncelleme.'
      },
      usage: {
        title: 'Kullanım Paneli',
        detail: 'Token, maliyet ve yetenek etkinliği.'
      }
    },
    providerNavigate: 'Gidin',
    providerSessions: 'Oturumlar',
    refresh: 'Yenileyin',
    refreshing: 'Yenileniyor…',
    noResults: 'Eşleşen Sonuç Bulunamadı',
    pinSession: 'Oturumu Sabitleyin',
    unpinSession: 'Oturumun Sabitlemesini Kaldırın',
    exportSession: 'Oturumu Dışa Aktarın',
    deleteSession: 'Oturumu Silin',
    noSessions: 'Henüz Oturum Yok',
    gatewayRunning: 'Mesajlaşma Ağ Geçidi Çalışıyor',
    gatewayStopped: 'Mesajlaşma Ağ Geçidi Durdu',
    hermesActiveSessions: (version, count) => `Hermes ${version} · Etkin Oturumlar ${count}`,
    restartGateway: 'Ağ Geçidini Yeniden Başlatın',
    openBrowser: 'Tarayıcıyı Açın/Kapatın',
    toggleBrowser: 'Tarayıcıyı Açın/Kapatın',
    gatewayRestartFailed: 'Ağ geçidi yeniden başlatılamadı.',
    sharedGatewayRestartTitle: 'Paylaşılan Ağ Geçidi Yeniden Başlatılsın mı?',
    sharedGatewayRestartDescription: bots => `Bu cihazdaki tüm botlar yeniden bağlanır: ${bots}.`,
    sharedGatewayRestartConfirm: 'Tümünü Yeniden Başlatın',
    sharedGatewayRestarted: count => `Paylaşılan Ağ Geçidi Yeniden Başlatıldı (${count} Bot)`,
    updateHermes: 'Hermes’i Güncelleyin',
    reloadWindow: 'Pencereyi Yeniden Yükleyin',
    actionRunning: 'Çalışıyor',
    actionDone: 'Tamamlandı',
    actionFailed: 'başarısız',
    actionStartedWaiting: 'Eylem Başlatıldı, Durum Bekleniyor…',
    loadingStatus: 'Durum Yükleniyor…',
    recentLogs: 'Son Günlükler',
    noLogs: 'Henüz Günlük Yüklenmedi',
    days: count => `${count}g`,
    statSessions: 'Oturumlar',
    statApiCalls: 'API Çağrıları',
    statTokens: 'Giren/Çıkan Token',
    statCost: 'Tahmini Maliyet',
    actualCost: cost => `Gerçek ${cost}`,
    loadingUsage: 'Kullanım Yükleniyor…',
    noUsage: period => `Son ${period} Günde Kullanım Yok`,
    retry: 'Yeniden Deneyin',
    dailyTokens: 'Günlük Token',
    input: 'Girdi',
    output: 'Çıktı',
    noDailyActivity: 'Günlük Etkinlik Yok',
    topModels: 'En Çok Kullanılan Modeller',
    noModelUsage: 'Henüz Model Kullanımı Yok',
    topSkills: 'En Çok Kullanılan Yetenekler',
    noSkillActivity: 'Henüz Yetenek Etkinliği Yok',
    actions: count => `${count} Eylem`,
    logFile: 'Günlük Dosyası',
    logLevel: 'Düzey',
    logSearchPlaceholder: 'Günlük Satırlarında Arayın…',
    maintenance: {
      runOps: 'Tanılama',
      doctor: 'Tanılamayı Çalıştırın',
      doctorDesc: 'Kurulumu, yapılandırmayı ve sağlayıcıları sağlık açısından denetleyin.',
      securityAudit: 'Güvenlik Denetimi',
      securityAuditDesc: 'Yapılandırmayı ve yetenekleri riskli ayarlar açısından tarayın.',
      backup: 'Yedek Oluşturun',
      backupDesc: 'Yapılandırmayı, bellekleri, yetenekleri ve oturumları sıkıştırın.',
      debugShare: 'Hata Ayıklama Paylaşımı',
      debugShareDesc:
        'Sansürlenmiş bir rapor ve günlükleri yükleyin, paylaşılabilir bağlantılar edinin (6 saat içinde otomatik olarak silinir).',
      debugShareRunning: 'Hata Ayıklama Raporu Yükleniyor…',
      debugShareLinks: 'Paylaşım Bağlantıları',
      debugShareFailed: 'Hata ayıklama paylaşımı başarısız oldu.',
      copyLink: 'Bağlantıyı Kopyalayın',
      linkCopied: 'Bağlantı Kopyalandı',
      curator: 'Yetenek Yöneticisi',
      curatorDesc: 'Ajan tarafından oluşturulmuş eski yetenekleri arşivleyen arka plan incelemesi.',
      curatorPaused: 'Duraklatıldı',
      curatorActive: 'Etkin',
      curatorDisabled: 'Devre Dışı',
      curatorLastRun: when => `Son Çalıştırma ${when}`,
      curatorNeverRan: 'Hiç Çalıştırılmadı',
      pause: 'Duraklatın',
      resume: 'Sürdürün',
      runNow: 'Şimdi Çalıştırın',
      memoryData: 'Bellek Verileri',
      memoryFile: 'Ajan Belleği (MEMORY.md)',
      userFile: 'Kullanıcı Profili (USER.md)',
      bytes: size => `${size}`,
      empty: 'Boş',
      resetMemory: 'Belleği Sıfırlayın',
      resetUser: 'Profili Sıfırlayın',
      resetAll: 'İkisini de Sıfırlayın',
      resetConfirm: target => `${target} Silinsin mi? Bu İşlem Geri Alınamaz`,
      resetDone: files => `${files} Silindi`,
      resetFailed: 'Bellek sıfırlama başarısız oldu.',
      actionStarted: name => `${name} Başlatıldı — Günlük İzleniyor…`,
      actionFailed: name => `${name} başlatılamadı.`,
      running: 'Çalışıyor…',
      viewLog: 'İşlem Günlüğü'
    }
  },
  messaging: {
    search: 'Mesajlaşmada Arayın…',
    statusFilter: {
      all: 'Tümü',
      bad: 'Hatalar',
      good: 'Bağlandı',
      muted: 'Etkin Değil',
      warn: 'Dikkat Gerekli'
    },
    loading: 'Mesajlaşma Platformları Yükleniyor…',
    loadFailed: 'Mesajlaşma platformları yüklenemedi.',
    states: {
      connected: 'Bağlandı',
      connecting: 'Bağlanıyor',
      disabled: 'Devre Dışı',
      fatal: 'Hata',
      gateway_stopped: 'Mesajlaşma Ağ Geçidi Durduruldu',
      not_configured: 'Kurulum Gerekli',
      pending_restart: 'Yeniden Başlatma Gerekli',
      retrying: 'Yeniden Deneniyor',
      startup_failed: 'Başlatma başarısız oldu.'
    },
    unknown: 'Bilinmiyor',
    hintPendingRestart: 'Bu değişikliği uygulamak için durum çubuğundan ağ geçidini yeniden başlatın.',
    sharedListenerUrl: 'Paylaşılan Ağ Geçidi Dinleyicisinde Sunuluyor',
    hintGatewayStopped: 'Bağlanmak için durum çubuğundan ağ geçidini başlatın.',
    credentialsSet: 'Kimlik Bilgileri Ayarlandı',
    needsSetup: 'Kurulum Gerekli',
    gatewayStopped: 'Mesajlaşma Ağ Geçidi Durduruldu',
    getCredentials: 'Kimlik Bilgilerinizi Alın',
    openSetupGuide: 'Kurulum Kılavuzunu Açın',
    required: 'Gerekli',
    recommended: 'Önerilen',
    advanced: count => `Gelişmiş (${count})`,
    noTokenNeeded:
      'Bu platform burada token gerektirmez. Yukarıdaki kurulum kılavuzunu kullanın, ardından aşağıdan etkinleştirin',
    enabled: 'Etkin',
    disabled: 'Devre Dışı',
    unsavedChanges: 'Kaydedilmemiş Değişiklikler',
    saving: 'Kaydediliyor…',
    saveChanges: 'Değişiklikleri Kaydedin',
    saved: 'Kaydedildi',
    replaceValue: 'Geçerli Değeri Değiştirin',
    openDocs: 'Belgeleri Açın',
    clearField: key => `${key} Alanını Temizleyin`,
    addListEntry: 'Bir Tane Daha Ekleyin',
    removeListEntry: 'Kaldırın',
    listEntryPlaceholder: 'Bir ID Girin',
    enableAria: name => `${name} Öğesini Etkinleştirin`,
    disableAria: name => `${name} Öğesini Devre Dışı Bırakın`,
    platformEnabled: name => `${name} Etkin`,
    platformDisabled: name => `${name} Devre Dışı`,
    restartToApply: 'Bu Değişiklik Ağ Geçidi Yeniden Başlatıldıktan Sonra Geçerli Olur',
    setupSaved: name => `${name} Kurulumu Kaydedildi`,
    restartToReconnect: 'Yeni Kimlik Bilgileri Ağ Geçidi Yeniden Başlatıldıktan Sonra Geçerli Olur',
    appliedLive: 'Çalışan ağ geçidine uygulandı',
    connectingLive: 'Çalışan ağ geçidi yeni kimlik bilgileriyle bağlanıyor',
    keyCleared: key => `${key} Temizlendi`,
    setupUpdated: name => `${name} Kurulumu Güncellendi`,
    failedUpdate: name => `${name} güncellenemedi.`,
    failedSave: name => `${name} kaydedilemedi.`,
    failedClear: key => `${key} temizlenemedi.`,
    pendingRequests: count => `Bekleyen İstekler (${count})`,
    pendingAria: count => `${count} Bekleyen Eşleştirme İsteği`,
    approvedUsers: count => `Onaylı Kullanıcılar (${count})`,
    approve: 'Onaylayın',
    approving: 'Onaylanıyor…',
    revoke: 'İptal Edin',
    revoking: 'İptal Ediliyor…',
    revokeAria: name => `${name} Erişimini İptal Edin`,
    revokeTitle: 'Erişimi İptal Edin',
    revokeDesc: name => `${name} erişimini kaybedecek ve bir sonraki mesajında artık tanınmayacak.`,
    approvedUser: name => `${name} Onaylandı`,
    approvedHint: 'Bir sonraki mesajlarında otomatik olarak tanınırlar.',
    revokedUser: name => `${name} Erişimi İptal Edildi`,
    failedApprove: name => `${name} onaylanamadı.`,
    failedRevoke: name => `${name} iptal edilemedi.`,
    pairingLockedOut: 'Çok Fazla Başarısız Onay — Bu Platform Kilitlendi. Daha Sonra Tekrar Deneyin',
    waitingSince: minutes => `${minutes} Dk Önce`,
    restartNeeded: 'Kaydedildi. Yeni Ayarların Geçerli Olması İçin Mesajlaşma Ağ Geçidini Yeniden Başlatın',
    restartNow: 'Şimdi Yeniden Başlatın',
    restarting: 'Yeniden Başlatılıyor…',
    restartFailedManual: 'Hermes, mesajlaşma ayarlarınızı uygulamak için yeniden başlatılamadı.',
    restartFailedManualDetail:
      '“Yeniden Başlat” seçeneğini deneyin; sorun devam ederse günlükleri açın ve tanılama bilgilerini gönderin.',
    restartAgain: 'Yeniden Başlatın',
    openLogs: 'Günlükleri Açın',
    telegramQr: {
      title: 'Telegram Botunuzu Nasıl Bağlayacağınızı Seçin',
      subtitle:
        'Her iki seçenek de sizin kontrolünüzdeki bir botu bağlar ve kimlik bilgilerini yalnızca bu Hermes kurulumuna kaydeder.',
      quickSetup: 'Hızlı Kurulum',
      recommended: 'Önerilen',
      quickHelp:
        'Bir QR kodu tarayın ve Telegram’da onaylayın. Hermes botu oluşturur ve Telegram kullanıcı ID’nizi otomatik olarak algılar.',
      createWithQr: 'QR İle Oluşturun',
      starting: 'Başlatılıyor…',
      replaceWarning:
        'Telegram Kimlik Bilgileri Zaten Yapılandırılmış. Yeni Bir QR Kurulumu Veya Bot Token’ı, Kaydettiğinizde Geçerli Botun Yerini Alır',
      scanHint: 'Telefonunuzdaki Telegram uygulamasıyla tarayın veya bağlantıyı bu bilgisayarda açın.',
      waiting: 'Telegram Bekleniyor…',
      expiresIn: remaining => `${remaining} İçinde Sona Erer`,
      expired: 'Süresi Doldu',
      openTelegram: 'Telegram’ı Açın',
      ready: 'Bot Oluşturuldu',
      allowedUsers: 'İzin Verilen Kullanıcılar',
      ownerDetected: 'Sahip Algılandı',
      addAtLeastOne: 'En Az Bir Telegram Kullanıcı ID’si Ekleyin',
      userIdPlaceholder: 'Telegram Kullanıcı ID’si',
      add: 'Ekleyin',
      numericOnly: 'İzin Verilen Telegram Kullanıcı ID’leri Sayısal Olmalıdır',
      saveAndRestart: 'Kaydedin Ve Yeniden Başlatın',
      applying: 'Kaydediliyor…',
      pairingExpired: 'Telegram Eşleştirmesinin Süresi Doldu. Tekrar Denemek İçin Yeni Bir QR Kurulumu Başlatın',
      stillWaiting: detail => `Telegram Hâlâ Bekleniyor. Şu Süreden Sonra Yeniden Denenecek: ${detail}`,
      savedRestarting: 'Telegram Kaydedildi; Ağ Geçidi Yeniden Başlatılıyor…',
      savedRestartFailed: detail => `Telegram kaydedildi; ağ geçidi yeniden başlatılamadı${detail}.`
    },
    fieldCopy: {
      TELEGRAM_BOT_TOKEN: {
        label: 'Bot Tokenı',
        help: '@BotFather ile bir bot oluşturun, ardından size verdiği tokenı yapıştırın.',
        placeholder: 'Telegram bot tokenını yapıştırın'
      },
      TELEGRAM_ALLOWED_USERS: {
        label: 'İzin Verilen Telegram Kullanıcı ID’leri',
        help: 'Önerilir. @userinfobot’tan alınan sayısal ID’ler, her kutuya bir tane. Bu olmadan herkes botunuza DM gönderebilir.'
      },
      TELEGRAM_PROXY: {
        label: 'Proxy URL’si',
        help: 'Yalnızca Telegram’ın engellendiği ağlarda gerekir.'
      },
      DISCORD_BOT_TOKEN: {
        label: 'Bot Tokenı',
        help: 'Discord Geliştirici Portalı’nda bir uygulama oluşturun, bir bot ekleyin ve ardından tokenını yapıştırın.'
      },
      DISCORD_ALLOWED_USERS: {
        label: 'İzin Verilen Discord Kullanıcı ID’leri',
        help: 'Önerilir. Discord kullanıcı ID’leri, her kutuya bir tane.'
      },
      DISCORD_REPLY_TO_MODE: {
        label: 'Yanıt Stili',
        help: 'first, all veya off.'
      },
      DISCORD_ALLOW_ALL_USERS: {
        label: 'Tüm Discord Kullanıcılarına İzin Verin',
        help: 'Yalnızca geliştirme için. True olduğunda herkes izin listesi olmadan bota DM gönderebilir.'
      },
      DISCORD_HOME_CHANNEL: {
        label: 'Ana Kanal ID’si',
        help: 'Botun öngörülü mesajlar gönderdiği kanal (Cron çıktısı, hatırlatıcılar).'
      },
      DISCORD_HOME_CHANNEL_NAME: {
        label: 'Ana Kanal Adı',
        help: 'Günlüklerde ve durum çıktısında ana kanal için görünen ad.'
      },
      BLUEBUBBLES_ALLOW_ALL_USERS: {
        label: 'Tüm iMessage Kullanıcılarına İzin Verin',
        help: 'True olduğunda BlueBubbles izin listesini atlar.'
      },
      MATTERMOST_ALLOW_ALL_USERS: {
        label: 'Tüm Mattermost Kullanıcılarına İzin Verin'
      },
      MATTERMOST_HOME_CHANNEL: {
        label: 'Ana Kanal'
      },
      QQ_ALLOW_ALL_USERS: {
        label: 'Tüm QQ Kullanıcılarına İzin Verin'
      },
      QQBOT_HOME_CHANNEL: {
        label: 'QQ Ana Kanalı',
        help: 'Cron teslimatı için varsayılan kanal veya grup.'
      },
      QQBOT_HOME_CHANNEL_NAME: {
        label: 'QQ Ana Kanal Adı'
      },
      SLACK_BOT_TOKEN: {
        label: 'Slack Bot Tokenı',
        help: 'Slack uygulamanızı yükledikten sonra OAuth ve İzinler bölümündeki bot tokenını kullanın.',
        placeholder: 'Slack bot tokenını yapıştırın'
      },
      SLACK_APP_TOKEN: {
        label: 'Slack Uygulama Tokenı',
        help: 'Socket Mode için gereken uygulama düzeyi tokenı kullanın.',
        placeholder: 'Slack uygulama tokenını yapıştırın'
      },
      SLACK_ALLOWED_USERS: {
        label: 'İzin Verilen Slack Kullanıcı ID’leri',
        help: 'Önerilir. Slack kullanıcı ID’leri, her kutuya bir tane.'
      },
      MATTERMOST_URL: {
        label: 'Sunucu URL’si',
        placeholder: 'https://mattermost.example.com'
      },
      MATTERMOST_TOKEN: {
        label: 'Bot Tokenı'
      },
      MATTERMOST_ALLOWED_USERS: {
        label: 'İzin Verilen Kullanıcı ID’leri',
        help: 'Önerilir. Mattermost kullanıcı ID’leri, her kutuya bir tane.'
      },
      MATRIX_HOMESERVER: {
        label: 'Ana Sunucu URL’si',
        placeholder: 'https://matrix.org'
      },
      MATRIX_ACCESS_TOKEN: {
        label: 'Erişim Tokenı'
      },
      MATRIX_USER_ID: {
        label: 'Bot Kullanıcı ID’si',
        placeholder: '@hermes:example.org'
      },
      MATRIX_ALLOWED_USERS: {
        label: 'İzin Verilen Matrix Kullanıcı ID’leri',
        help: 'Önerilir. @user:server biçiminde kullanıcı ID’leri, her kutuya bir tane.'
      },
      SIGNAL_HTTP_URL: {
        label: 'Signal Köprü URL’si',
        placeholder: 'http://127.0.0.1:8080',
        help: 'Çalışan bir signal-cli REST köprüsünün URL’si.'
      },
      SIGNAL_ACCOUNT: {
        label: 'Telefon Numarası',
        help: 'signal-cli köprünüzle kayıtlı numara.'
      },
      SIGNAL_ALLOWED_USERS: {
        label: 'İzin Verilen Signal Kullanıcıları',
        help: 'Önerilir. Signal tanımlayıcıları, her kutuya bir tane.'
      },
      WHATSAPP_ENABLED: {
        label: 'WhatsApp Köprüsünü Etkinleştirin',
        help: 'Aşağıdaki anahtar tarafından otomatik olarak ayarlanır. Gerekli olduğundan emin değilseniz değiştirmeyin.'
      },
      WHATSAPP_MODE: {
        label: 'Köprü Modu'
      },
      WHATSAPP_ALLOWED_USERS: {
        label: 'İzin Verilen WhatsApp Kullanıcıları',
        help: 'Önerilir. Telefon numaraları veya WhatsApp ID’leri, her kutuya bir tane.'
      }
    }
  },
  webhooks: {
    search: 'Webhook’larda Arayın…',
    loading: 'Webhook’lar Yükleniyor…',
    loadFailed: 'Webhook’lar yüklenemedi.',
    subscriptions: count => `Abonelikler (${count})`,
    hint: 'Alıcı çalışırken abonelik değişiklikleri anında yeniden yüklenir. Devre dışı abonelikler gelen olayları reddeder.',
    empty: 'Henüz Webhook Aboneliği Yok',
    disabledTitle: 'Webhook Alıcısı Devre Dışı',
    disabledBody:
      'Webhook’lar kendi ağ geçidi platformlarıdır. Gelen HTTP olaylarını kabul etmek için bunları burada etkinleştirin; sohbet kanalları yalnızca bir abonelik Telegram, Discord, Slack veya başka bir kanala ilettiğinde gerekir.',
    enable: 'Webhook’ları Etkinleştirin',
    enabling: 'Etkinleştiriliyor…',
    enabled: name => `Etkin: “${name}”`,
    disabled: name => `Devre Dışı: “${name}”`,
    enableRow: 'Etkinleştirin',
    disableRow: 'Devre Dışı Bırakın',
    delete: 'Silin',
    deleting: 'Siliniyor…',
    deleted: 'Webhook Silindi',
    deleteTitle: 'Webhook’u Silin',
    deleteDescPrefix: 'Bu işlem kalıcı olarak şunu kaldıracak: ',
    deleteDescSuffix: '. Bu geri alınamaz.',
    deleteFailed: name => `“${name}” silinemedi`,
    toggleFailed: (name, enabled) => `“${name}” etkinleştirilemedi.`,
    newSubscription: 'Yeni Abonelik',
    restarting: 'Ağ Geçidi Yeniden Başlatılıyor…',
    restartNeeded:
      'Webhook’lar Etkinleştirildi, Ancak Alıcının Çevrimiçi Olabilmesi için Ağ Geçidinin Hâlâ Yeniden Başlatılması Gerekiyor',
    restartGateway: 'Ağ Geçidini Yeniden Başlatın',
    restartingGateway: 'Yeniden Başlatılıyor…',
    restartFailed: detail => `Ağ geçidi yeniden başlatılamadı${detail}.`,
    enabledRestarting: 'Webhook’lar Etkinleştirildi; Ağ Geçidi Yeniden Başlatılıyor…',
    all: '(Tümü)',
    deliverOnly: 'Yalnızca İlet',
    createdTitle: 'Abonelik Oluşturuldu',
    createdSecretHint: 'Gizli anahtarı şimdi kopyalayın — yalnızca bir kez gösterilir.',
    webhookUrl: 'Webhook URL’si',
    secretOnce: 'Gizli Anahtar (Bir Kez Gösterilir)',
    done: 'Tamamlandı',
    fieldName: 'Ad',
    fieldNamePlaceholder: 'Ör. github-push',
    fieldDescription: 'Açıklama',
    fieldDescriptionPlaceholder: 'Bu webhook’un ne yaptığı (isteğe bağlı).',
    fieldEvents: 'Olaylar',
    fieldEventsPlaceholder: 'Virgülle Ayrılmış, Tümü için Boş Bırakın',
    fieldSkills: 'Yetenekler',
    fieldSkillsPlaceholder: 'Virgülle Ayrılmış Yetenek Adları (İsteğe Bağlı)',
    fieldDeliver: 'İletilecek Yer',
    fieldDeliverOnly: 'Yalnızca Yükü İletin',
    fieldPrompt: 'İstem',
    fieldPromptPlaceholder: 'Bu Webhook Tetiklendiğinde Ajan için Talimatlar (İsteğe Bağlı)',
    nameRequired: 'Ad Gerekli',
    create: 'Oluşturun',
    creating: 'Oluşturuluyor…',
    created: 'Oluşturuldu',
    createFailed: detail => `Oluşturulamadı: ${detail}.`,
    copy: 'Kopyalayın',
    deliverOptions: {
      log: 'Günlük',
      telegram: 'Telegram',
      discord: 'Discord',
      slack: 'Slack',
      email: 'E-posta',
      github_comment: 'GitHub Yorumu'
    }
  },
  profiles: {
    close: 'Profilleri Kapatın',
    nameHint: 'Küçük harfler, rakamlar, tireler ve alt çizgiler. Bir harf veya rakamla başlamalıdır.',
    title: 'Profiller',
    count: count => `${count} Profil`,
    search: 'Profillerde Arayın…',
    loading: 'Profiller Yükleniyor…',
    newProfile: 'Yeni Profil',
    importProfile: 'Profili İçe Aktarın…',
    exportProfile: 'Profili Dışa Aktar…',
    imported: 'Profil İçe Aktarıldı',
    exported: 'Profil Dışa Aktarıldı',
    failedImport: 'Profil içe aktarılamadı.',
    failedExport: 'Profil dışa aktarılamadı.',
    exportNeedsHost: (name: string) =>
      `Tarayıcı profil arşivini kaydedemez. Hermes sunucusunda şunu çalıştırın: hermes profile export ${name}`,
    notServedHere: 'Burada sunulmuyor',
    allProfiles: 'Tüm Profiller',
    showAllProfiles: 'Tüm Profilleri Gösterin',
    switchToProfile: name => `${name} Profiline Geçin`,
    switchToConnection: name => `${name} Bağlantısına Geçin`,
    switchConnectionFailed: name => `${name} bağlantısı kurulamadı.`,
    manageProfiles: 'Profilleri Yönetin…',
    connectGateway: 'Ağ Geçitlerini Yönetin…',
    fleet: {
      allOnGateway: 'Bu Ağ Geçidindeki Tüm Profiller',
      gateway: gateway => `${gateway} Üzerindeki Profiller`,
      gatewayUnreachable: gateway => `${gateway} · Erişilemiyor`,
      onGateway: (name, gateway) => `${name} · ${gateway}`,
      switchTo: (name, gateway) => `${gateway} Üzerinde ${name} Öğesine Geçin`,
      deleteOn: gateway => ` · ${gateway} Üzerinde`,
      localDevice: 'Bu Cihaz (Yerel Arka Uç — Hermes Yoksa Yükler, Aksi Halde Yeni Bir Oturum Açar)',
      switchDeviceTitle: 'Bu Cihaza Geçilsin Mi?',
      switchDeviceDesc:
        'Bu, bu bilgisayarda yeni bir oturum açar. İçinde bulunduğunuz sohbet diğer ağ geçidinde kalır.',
      switchDeviceConfirm: 'Geçin',
      installDeviceTitle: 'Bu Cihaza Geçilsin Mi?',
      installDeviceDesc:
        'Bu, Hermes’i yerel olarak yükler ve ardından bu bilgisayarda yeni bir oturum açar. Onaylayana kadar hiçbir şey yüklenmez.',
      installDeviceConfirm: 'Yerel Olarak Yükleyin',
      connectExistingInstead: 'Bunun Yerine Mevcut Olana Bağlanın'
    },
    status: {
      unread: count => `${count} Okunmamış Oturum`,
      needsInput: count => `${count} Oturum Yanıtınızı Bekliyor`,
      working: count => `${count} Oturum Çalışıyor`
    },
    remoteOverride: {
      menuItem: 'Uzak Bir Ana Bilgisayara Bağlanın…',
      badge: host => `${host} Üzerinde Çalışır`,
      title: profile => `${profile} Profilini Uzak Bir Ana Bilgisayara Bağlayın`,
      description: 'Bu profildeki oturumlar, bu bilgisayar yerine işaret ettiğiniz uzak Hermes üzerinde çalışır.',
      urlLabel: 'Uzak Adres',
      urlPlaceholder: 'https://hermes.example.com',
      urlInvalid: 'http:// veya https:// ile başlayan tam bir adres girin',
      tokenLabel: 'Erişim Tokenı',
      tokenPlaceholder: 'Uzak oturum tokenını yapıştırın',
      tokenSavedHint: 'Zaten bir token kayıtlı. Mevcut tokenı korumak için boş bırakın.',
      plainTextOptIn:
        'Bu bilgisayarda güvenli anahtar depolama alanı yok, bu nedenle token diskte şifrelenmeden kaydedilir. Yine de kaydedin.',
      collisionWarning: label =>
        `Ayarlar’da “${label}” adlı bir ağ geçidi zaten var. Bu profil bağlantısı ayrıdır ve onu değiştirmez`,
      confirmTitle: 'Bu Profil Uzak Bir Ana Bilgisayara Bağlansın Mı?',
      confirmNote: (profile, host) =>
        `${profile} içindeki yeni sohbetler ${host} üzerinde çalışacak. Komutları ve dosyaları bu bilgisayarda değil, o bilgisayarda çalıştırıp okuyacak. Yalnızca güvendiğiniz bir ana bilgisayara bağlanın`,
      confirmBack: 'Geri',
      connect: 'Bağlanın',
      connecting: 'Bağlanıyor…',
      disconnect: 'Uzak Bağlantıyı Kaldırın',
      savedTitle: 'Profil Bağlandı',
      savedMessage: (profile, host) => `${profile} artık ${host} üzerinde çalışıyor.`,
      removedTitle: 'Uzak Bağlantı Kaldırıldı',
      removedMessage: profile => `${profile} artık bu bilgisayarda çalışıyor.`,
      removeFailed: 'Uzak bağlantı kaldırılamadı.',
      authFailedTitle: 'Uzak ana bilgisayar kaydedilen tokenı reddetti.',
      authFailedMessage: (profile, host) =>
        `${host}, ${profile} için kaydedilen tokenı reddetti. Uzak tarafta değiştirilmiş olabilir.`,
      updateToken: 'Yeni Token Girin…'
    },
    actions: 'Eylemler',
    color: 'Renk…',
    colorFor: 'Renk',
    openInNewWindow: 'Yeni Pencerede Açın',
    setAsDefault: 'Varsayılan Olarak Ayarlayın',
    defaultProfile: 'Varsayılan Profil',
    defaultSet: name => `${name} Artık Varsayılan`,
    defaultDescription:
      'Hermes açıldığında ve yeni sohbetlerde kullanılır. Mevcut oturumlar kendi profillerinde kalır.',
    failedSetDefault: 'Varsayılan profil ayarlanamadı.',
    setColor: color => `Renk ${color} Ayarlayın`,
    autoColor: 'Otomatik',
    noProfiles: 'Henüz Profil Yok',
    selectPrompt: 'Ayrıntılarını görmek için bir profil seçin',
    refresh: 'Profilleri Yenileyin',
    refreshing: 'Profiller Yenileniyor',
    default: 'Varsayılan',
    skills: count => `${count} Yetenek`,
    env: 'env',
    defaultBadge: 'Varsayılan',
    rename: 'Yeniden Adlandırın',
    renameMenu: 'Yeniden Adlandırın…',
    exportMenu: 'Dışa Aktar…',
    editSoul: 'SOUL.md Dosyasını Düzenleyin…',
    copySetup: 'Kurulumu Kopyalayın',
    copying: 'Kopyalanıyor…',
    modelLabel: 'Model',
    skillsLabel: 'Yetenekler',
    notSet: 'Ayarlanmadı',
    soulDesc: 'Bu profile yerleştirilmiş sistem istemi ve kişilik talimatları.',
    soulMissing:
      'Bu profil için henüz SOUL.md dosyası yok. Aşağıya talimatlar ekleyip kaydederek bir tane oluşturun. config.yaml dosyasındaki kişilik ön ayarları ayrı olarak yönetilir',
    soulOptional: 'İsteğe Bağlı',
    soulPlaceholder: mode => `Bu profilin sistem istemi / kişiliği.
${mode} varsayılanını korumak için boş bırakın`,
    soulPlaceholderCloned: 'Kopyalanmış',
    soulPlaceholderEmpty: 'Boş',
    unsavedChanges: 'Kaydedilmemiş Değişiklikler',
    loadingSoul: 'SOUL.md Yükleniyor…',
    emptySoul: 'SOUL.md Boş — Kişiliği Yazmaya Başlayın…',
    saving: 'Kaydediliyor…',
    saveSoul: 'SOUL.md Kaydedin',
    deleteTitle: 'Profil Silinsin Mi?',
    deleteDescPrefix: 'Bu işlem şunu siler: ',
    deleteDescMid: ' ve şu dizini de kaldırır: ',
    deleteDescSuffix: '. Bu işlem geri alınamaz.',
    deleting: 'Siliniyor…',
    createDesc: 'Profiller bağımsız Hermes ortamlarıdır: ayrı yapılandırma, yetenekler ve SOUL.md.',
    nameLabel: 'Ad',
    cloneFrom: 'Şuradan Kopyalayın',
    cloneFromNone: 'Yok (Boş)',
    cloneFromDesc: 'Yapılandırmayı, yetenekleri ve SOUL.md dosyasını seçilen kaynak profilden kopyalar.',
    cloneFromDefault: 'Varsayılandan Kopyalayın',
    cloneFromDefaultDesc: 'Varsayılan profilinizden yapılandırmayı, yetenekleri ve SOUL.md dosyasını kopyalar.',
    invalidName: hint => `Geçersiz Ad. ${hint}`,
    nameRequired: 'Ad Gerekli',
    creating: 'Oluşturuluyor…',
    createAction: 'Profil Oluşturun',
    renameTitle: 'Profili Yeniden Adlandırın',
    renameDescPrefix: 'Yeniden adlandırma, profil dizinini ve şu konumdaki tüm sarmalayıcı betikleri günceller: ',
    renameDescSuffix: '.',
    displayNameTitle: 'Bu Ajana Ad Verin',
    displayNameDesc:
      'Uygulama genelinde gösterilen bir görünen ad belirler. Dahili profil ID’si “default” olarak kalır.',
    displayNameLabel: 'Görünen Ad',
    newNameLabel: 'Yeni Ad',
    renaming: 'Yeniden Adlandırılıyor…',
    created: 'Profil Oluşturuldu',
    renamed: 'Profil Yeniden Adlandırıldı',
    deleted: 'Profil Silindi',
    setupCopied: 'Kurulum Komutu Kopyalandı',
    soulSaved: 'SOUL.md Kaydedildi',
    failedLoad: 'Profiller yüklenemedi.',
    failedDelete: 'Profil silinemedi.',
    failedCopy: 'Kurulum komutu kopyalanamadı.',
    failedLoadSoul: 'SOUL.md yüklenemedi.',
    failedSaveSoul: 'SOUL.md kaydedilemedi.',
    failedCreate: 'Profil oluşturulamadı.',
    failedRename: 'Profil yeniden adlandırılamadı.'
  },
  modelAssignment: {
    saveFailed: 'Hermes bu model değişikliğini kaydetmedi.',
    confirmTitle: 'Model Seçimi Uyarısı',
    confirmDetail: 'Yalnızca bu ödünleşimi kabul ediyorsanız onaylayın.',
    confirmAction: 'Onaylayın',
    declined: 'Model Değişikliği İptal Edildi — Veri Eğitimi Katmanı Uyarısını Reddettiniz'
  },
  cron: {
    close: 'Cron’u Kapatın',
    title: 'Cron İşleri',
    count: count => `${count} İş`,
    search: 'Cron İşlerinde Arayın…',
    loading: 'Cron İşleri Yükleniyor…',
    states: {
      enabled: 'Etkin',
      scheduled: 'Zamanlandı',
      running: 'Çalışıyor',
      paused: 'Duraklatıldı',
      disabled: 'Devre Dışı',
      error: 'son çalışma başarısız.',
      completed: 'Tamamlandı'
    },
    lastRunFailed: 'Son çalışma başarısız:',
    editJob: 'İşi Düzenleyin',
    runAgain: 'Yeniden Çalıştırın',
    deliveryLabels: {
      local: 'Bu Masaüstü',
      telegram: 'Telegram',
      discord: 'Discord',
      slack: 'Slack',
      email: 'E-posta'
    },
    scheduleLabels: {
      daily: 'Günlük',
      weekdays: 'Hafta İçi',
      weekly: 'Haftalık',
      monthly: 'Aylık',
      hourly: 'Saatlik',
      'every-15-minutes': 'Her 15 Dakikada Bir',
      custom: 'Özel'
    },
    scheduleHints: {
      daily: 'Her Gün 09.00',
      weekdays: 'Pazartesiden Cumaya 09.00',
      weekly: 'Her Pazartesi 09.00',
      monthly: 'Her Ayın İlk Günü 09.00',
      hourly: 'Her Saatin Başında',
      'every-15-minutes': 'Her 15 Dakikada Bir',
      custom: 'Cron ifadesi veya doğal dil'
    },
    days: {
      '0': 'Pazar',
      '1': 'Pazartesi',
      '2': 'Salı',
      '3': 'Çarşamba',
      '4': 'Perşembe',
      '5': 'Cuma',
      '6': 'Cumartesi',
      '7': 'Pazar'
    },
    dayFallback: value => `Gün ${value}`,
    everyDayAt: time => `Her Gün ${time}`,
    weekdaysAt: time => `Hafta İçi ${time}`,
    everyDayOfWeekAt: (day, time) => `Her ${day} Saat ${time}`,
    monthlyOnDayAt: (dayOfMonth, time) => `Aylık, ${dayOfMonth}. Gün Saat ${time}`,
    topOfHour: 'Her Saatin Başında',
    everyHourAt: minute => `Her Saat :${minute}`,
    newCron: 'Yeni Cron işi',
    emptyDescNew:
      'Bir istemi Cron ifadesine göre çalışacak şekilde zamanlayın. Hermes bunu çalıştırır ve sonuçları seçtiğiniz hedefe iletir.',
    emptyDescSearch: 'Daha geniş bir arama sorgusu deneyin.',
    emptyTitleNew: 'Henüz Cron işi yok',
    emptyTitleSearch: 'Eşleşme Yok',
    last: 'Son:',
    next: 'Sonraki:',
    overdueSince: 'Şu tarihten beri gecikmiş:',
    noRuns: 'Henüz Çalışma Yok',
    queuedRun: 'Sıraya Alınmış Çalışma',
    manage: 'Yönetin',
    showRuns: 'Çalışmaları Gösterin',
    hideRuns: 'Çalışmaları Gizleyin',
    runHistory: 'Çalışma Geçmişi',
    actionsTitle: 'Cron İşi Eylemleri',
    resume: 'Cron’u Sürdürün',
    pause: 'Cron’u Duraklatın',
    resumeTitle: 'Sürdürün',
    pauseTitle: 'Duraklatın',
    triggerNow: 'Şimdi Tetikleyin',
    edit: 'Cron’u Düzenleyin',
    deleteTitle: 'Cron İşi Silinsin Mi?',
    deleteDescPrefix: 'Bu işlem şunu kalıcı olarak silecek: ',
    deleteDescSuffix: '. Çalışmayı hemen durduracak.',
    deleting: 'Siliniyor…',
    resumed: 'Cron Sürdürüldü',
    paused: 'Cron Duraklatıldı',
    triggered: 'Cron Tetiklendi',
    deleted: 'Cron Silindi',
    created: 'Cron Oluşturuldu',
    updated: 'Cron Güncellendi',
    failedLoad: 'Cron işleri yüklenemedi.',
    failedUpdate: 'Cron işi güncellenemedi.',
    failedTrigger: 'Cron işi tetiklenemedi.',
    failedDelete: 'Cron işi silinemedi.',
    failedSave: 'Cron işi kaydedilemedi.',
    editTitle: 'Cron İşini Düzenleyin',
    createTitle: 'Yeni Cron İşi',
    editDesc:
      'Zamanlamayı, istemi veya teslimat hedefini güncelleyin. Değişiklikler bir sonraki çalışmada geçerli olur.',
    createDesc:
      'Bir istemin otomatik olarak çalışmasını zamanlayın. Cron söz dizimini veya "her 15 dakikada bir" gibi doğal bir ifadeyi kullanın.',
    nameLabel: 'Ad',
    namePlaceholder: 'Sabah Özeti',
    promptLabel: 'İstem',
    scriptLabel: 'Betik',
    scriptBadge: 'Betik',
    promptPlaceholder: 'Okunmamış Slack konularımı özetleyin ve en iyi 5’ini e-posta ile bana gönderin…',
    frequencyLabel: 'Sıklık',
    deliverLabel: 'Şuraya İletin',
    deliverNeedsHomeChannel: 'Önce Bir Ana Kanal Ayarlayın',
    modelLabel: 'Model',
    modelDefault: 'Varsayılan (Genel Model)',
    customScheduleLabel: 'Özel Zamanlama',
    customPlaceholder: '0 9 * * * veya hafta içi 09.00',
    customHint: 'Cron ifadesi veya "her saat" ya da "hafta içi 09.00" gibi ifadeler.',
    optional: 'İsteğe Bağlı',
    promptRequired: 'İstem Gerekli',
    promptScheduleRequired: 'İstem ve Zamanlama Gerekli',
    scheduleRequired: 'Zamanlama Gerekli',
    scriptOnlyEditHint: 'Yalnızca betik çalıştıran iş (AI istemi yok). İş kimliği:',
    saveChanges: 'Değişiklikleri Kaydedin',
    createAction: 'Cron Oluşturun',
    tabs: {
      jobs: 'İşler',
      blueprints: 'Planlar'
    },
    blueprints: {
      tab: 'Planlar',
      startFrom: 'Şununla Başlayın',
      custom: 'Özel',
      subtitle: 'Hazır otomasyonlar.',
      dialogDesc: 'Ayrıntıları girip zamanlayın.',
      scheduleIt: 'Zamanlayın',
      scheduling: 'Zamanlanıyor…',
      scheduled: 'Plan Zamanlandı',
      loading: 'Planlar Yükleniyor…',
      failedLoad: 'Planlar yüklenemedi.',
      emptyTitle: 'Kullanılabilir Plan Yok',
      emptyDesc: 'Bu arka uçta kullanılabilir otomasyon planı yok.'
    }
  },
  artifacts: {
    search: 'Çıktılarda Arayın…',
    refresh: 'Çıktıları Yenileyin',
    refreshing: 'Çıktılar Yenileniyor',
    indexing: 'Son Oturum Çıktıları Dizinleniyor',
    tabAll: 'Tümü',
    tabImages: 'Görseller',
    tabFiles: 'Dosyalar',
    tabLinks: 'Bağlantılar',
    noArtifactsTitle: 'Çıktı Bulunamadı',
    noArtifactsDesc: 'Oluşturulan görseller ve dosya çıktıları, oturumlar ürettikçe burada görünecek.',
    failedLoad: 'Çıktılar yüklenemedi.',
    openFailed: 'Açma başarısız oldu.',
    itemsImage: 'Görsel',
    itemsLink: 'Bağlantı',
    itemsFile: 'Dosya',
    itemsGeneric: 'Öğe',
    zero: '0',
    rangeOf: (start, end, total) => `${start}-${end} / ${total}`,
    goToPage: (itemLabel, page) => `${itemLabel} Sayfasına Gidin: ${page}`,
    colTitleLink: 'Bağlantı Başlığı',
    colTitleFile: 'Ad',
    colTitleDefault: 'Başlık / Ad',
    colLocationLink: 'URL',
    colLocationFile: 'Yol',
    colLocationDefault: 'Konum',
    colSession: 'Oturum',
    kindImage: 'Görsel',
    kindFile: 'Dosya',
    kindLink: 'Bağlantı',
    chat: 'Sohbet',
    copyUrl: 'URL’yi Kopyalayın',
    copyPath: 'Yolu Kopyalayın'
  },
  artifactCard: {
    kind: {
      code: 'Kod',
      html: 'Etkileşimli Sayfa',
      svg: 'Grafik'
    },
    generating: lines => `${lines} Satır Oluşturuluyor…`,
    versionBadge: count => `${count} Sürüm`,
    open: 'Açın'
  },
  artifactPreview: {
    versionOf: (current, total) => `v${current} / ${total}`,
    olderVersion: 'Daha Eski Sürüm',
    newerVersion: 'Daha Yeni Sürüm',
    latest: 'En Son',
    copyContent: 'İçeriği Kopyalayın',
    download: 'İndirin',
    openInBrowser: 'Tarayıcıda Açın',
    openInBrowserFailed: 'Tarayıcıda açılamadı.',
    missingTitle: 'Çıktı Kullanılamıyor',
    missingBody: 'Bu çıktı artık yerel kayıt defterinde bulunmuyor.'
  },
  sidebar: {
    filter: {
      grouping: 'Gruplama',
      ordering: 'Sıralama',
      show: 'Göster',
      filters: 'Filtreler',
      status: 'Durum',
      pullRequest: 'Çekme İsteği',
      profile: 'Profil',
      project: 'Proje',
      archived: 'Arşivlenmiş',
      resetToDefaults: 'Varsayılanlara Sıfırlayın',
      expandAll: 'Tümünü Genişletin',
      collapseAll: 'Tümünü Daraltın',
      inboxStyle: 'Gelen Kutusu Stili',
      updated: 'Güncellenme',
      created: 'Oluşturulma',
      tokens: 'Token',
      cost: 'Maliyet',
      manual: 'Manuel',
      preview: 'Önizleme',
      pr: 'PR',
      needsInput: 'Girdi Gerekli',
      working: 'Çalışıyor',
      unread: 'Okunmamış',
      draft: 'Taslak',
      idle: 'Boşta',
      open: 'Açık',
      merged: 'Birleştirilmiş',
      closed: 'Kapatılmış',
      noPR: 'PR Yok'
    },
    gatewayGroups: {
      grouping: 'Ağ Geçidi ve Profil',
      rename: 'Grubu Yeniden Adlandırın',
      aliasLabel: 'Görünen Ad',
      aliasHint: 'Yalnızca görünen ad; ağ geçidi ve profil adları değişmez.',
      resetName: 'Adı Sıfırlayın',
      moveUp: 'Yukarı Taşıyın',
      moveDown: 'Aşağı Taşıyın',
      reorder: 'Grubu Yeniden Sıralayın',
      actions: 'Grup Eylemleri'
    },
    profileRail: 'Profil Şeridi',
    nav: {
      'new-session': 'Yeni Oturum',
      capabilities: 'Yetenekler',
      messaging: 'Mesajlaşma',
      artifacts: 'Çıktılar',
      cron: 'Cron İşleri'
    },
    searchAria: 'Oturumlarda Arayın',
    searchPlaceholder: 'Oturumlarda Arayın…',
    clearSearch: 'Aramayı Temizleyin',
    noMatch: query => `“${query}” ile Eşleşen Oturum Yok`,
    results: 'Sonuçlar',
    pinned: 'Sabitlenmiş',
    sessions: 'Oturumlar',
    terminal: 'Terminal',
    files: 'Dosyalar',
    review: 'İnceleme',
    logs: 'Günlükler',
    cronJobs: 'Cron İşleri',
    groupAriaGrouped: 'Oturumları tek liste olarak gösterin',
    groupAriaUngrouped: 'Oturumları çalışma alanına göre gruplayın',
    showProjects: 'Projeleri Gösterin',
    showSessions: 'Oturumları Gösterin',
    groupTitleGrouped: 'Oturumların gruplamasını kaldırın',
    groupTitleUngrouped: 'Çalışma alanına göre gruplayın',
    allPinned: 'Buradaki her şey sabitlendi. Son kullanılanlarda göstermek için bir sohbetin sabitlemesini kaldırın',
    shiftClickHint: 'Sohbeti sabitlemek için Shift+tıklayın.',
    noWorkspace: 'Çalışma Alanı Yok',
    projectEmpty: 'Henüz Oturum Yok',
    projectLoadFailed: 'Oturumlar yüklenemedi.',
    noSessions: 'Henüz Oturum Yok',
    storageCorrupt: {
      title: 'Oturum Veritabanı Hasarlı',
      body: profiles =>
        `Hermes, ${profiles} için oturum geçmişinin tamamını okuyamıyor. Bu listede eksik olan sohbetler silinmedi; depolandıkları dosya hasarlı.`,
      action:
        'Bu profildeki Hermes’ten çıkın, ardından dosyayı değiştirmeden inceleyin veya bir anlık görüntüyü geri yükleyin:',
      guide: 'Kurtarma Kılavuzu'
    },
    noFilterMatches: 'Bu Filtrelere Uyan Oturum Yok',
    projects: {
      showAllSessions: 'Tüm Oturumları Gösterin',
      sectionLabel: 'Projeler',
      home: 'Ana',
      autoDiscovered: 'Otomatik Keşfedildi',
      newButton: 'Yeni Proje',
      createTitle: 'Yeni Proje',
      createDesc: 'Bir çalışma alanı adlandırın ve bir veya daha fazla klasör ekleyin.',
      renameTitle: 'Projeyi Yeniden Adlandırın',
      addFolderTitle: 'Klasör Ekleyin',
      namePlaceholder: 'ör. Skunkworks',
      foldersLabel: 'Klasörler',
      ideaLabel: 'Fikir',
      ideaPlaceholder: 'Bu proje ne hakkında? (IDEA.md dosyasına kaydedilir)',
      ideaGenerate: 'Fikir Oluşturun',
      ideaGenerating: 'Oluşturuluyor…',
      ideaShuffle: 'Şablonları Karıştırın',
      noFolders: 'Henüz klasör eklenmedi',
      addFolder: 'Klasör Ekleyin',
      primaryBadge: 'birincil',
      removeFolder: 'Kaldırın',
      create: 'Oluşturun',
      menu: 'Eylemler',
      menuRename: 'Yeniden Adlandırın…',
      menuAppearance: 'Görünüm',
      noColor: 'Renk Yok',
      menuAddFolder: 'Klasör Ekleyin',
      menuSetActive: 'Etkin Yapın',
      menuDelete: 'Silin',
      moveToProject: 'Projeye Taşıyın',
      movedTo: name => `${name} Konumuna Taşındı`,
      moveFailed: 'Oturum taşınamadı',
      moveNoFolder: 'Bu Projede Taşınacak Klasör Yok',
      moveBusy: 'Çalışan turu durdurun, ardından sohbeti taşıyın',
      moveNoProjects: 'Başka Proje Yok',
      reveal: 'Klasörde Gösterin',
      copyPath: 'Yolu Kopyalayın',
      removeFromSidebar: 'Kenar Çubuğundan Gizleyin',
      createdInPreviousContext:
        'Proje önceki bağlantıda veya profilde oluşturuldu. Bulmak için o bağlantıya geri dönün; IDEA.md yazılmadı.',
      hiddenFromSidebar: 'Kenar Çubuğundan Gizlendi',
      undoHide: 'Geri Alın',
      createFailed: 'Proje oluşturulamadı.',
      staleBackend:
        'Proje oluşturmak için Hermes arka ucunu güncelleyin — arka ucunuz bu masaüstü uygulamasından daha eski (Ayarlar → Güncellemeler → Arka Uç)',
      deleteConfirm:
        'Bu, kayıtlı projeyi Hermes’ten kaldırır. Dosyalar, git depoları ve çalışma ağaçları olduğu gibi kalır',
      startWork: 'Yeni Çalışma Ağacı',
      newWorktreeTitle: 'Yeni Çalışma Ağacı',
      newWorktreeDesc: 'Bu çalışma ağacı için dalı adlandırın.',
      branchPlaceholder: 'ör. özelliğim',
      branchOff: () => ({ after: ' şubesi', before: '' }),
      baseBranchPlaceholder: 'Dallarda Arayın…',
      baseBranchNone: 'Dal Bulunamadı',
      startWorkFailed: 'Çalışma ağacı oluşturulamadı.',
      worktreeStaleBackend:
        'Bu uzak bağlantı üzerinden çalışma ağaçları oluşturmak için Hermes arka ucunu güncelleyin — git çalışma ağacı API’sinden önceki bir sürüm',
      worktreeProjectLabel: 'Proje',
      worktreeProjectPlaceholder: 'Projelerde Arayın…',
      worktreeProjectNone: 'Klasörü Olan Proje Yok',
      convertBranch: 'Bir Dalı Dönüştürün…',
      convertBranchTitle: 'Bir Dalı Dönüştürün',
      convertBranchDesc: 'Çıkış yapılmış dalları açın veya boş bir dal için çalışma ağacı oluşturun.',
      convertBranchPlaceholder: 'Dallarda Arayın…',
      convertBranchInstead: 'Mevcut Bir Dalı Dönüştürün',
      branchOpenExisting: 'aç',
      branchSwitchHome: 'ana dala geç',
      branchCreateWorktree: 'yeni çalışma ağacı',
      branchTrackRemote: 'Uzak Dalı İzleyin',
      branchesLoading: 'Dallar Yükleniyor…',
      noBranches: 'Dal Bulunamadı',
      removeWorktree: 'Çalışma Ağacını Kaldırın',
      removeWorktreeFailed: 'Çalışma ağacı kaldırılamadı (işlenmemiş değişiklikler?).',
      removeWorktreeConfirm:
        'Git’ten kaldırın (çalışma ağacı dizini silinir, dal kalır) veya yalnızca şeridi kenar çubuğundan gizleyip çalışma ağacını diskte bırakın',
      removeWorktreeDirty:
        'Bu çalışma ağacında işlenmemiş değişiklikler var. Zorla kaldırın (bu değişiklikler atılır) veya yalnızca şeridi gizleyip diskte bırakın',
      forceRemove: 'Zorla Kaldırın',
      enter: label => `${label} Açın`,
      reorder: label => `${label} Yeniden Sıralayın`,
      toggle: (label, open) => `${label} Oturumu Gösterin`,
      showAllCount: count => `${count} Oturumun Tümünü Gösterin`,
      back: 'Tüm Projeler'
    },
    newSessionIn: label => `${label} İçinde Yeni Oturum`,
    showMoreIn: (count, label) => `${label} İçinde ${count} Tane Daha Gösterin`,
    loading: 'Yükleniyor…',
    loadMore: 'Daha Fazla Yükleyin',
    loadCount: step => `${step} Tane Daha Yükleyin`,
    messageCount: count => `${count} mesaj`,
    toolCallCount: count => `${count} araç çağrısı`,
    row: {
      pin: 'Sabitleyin',
      unpin: 'Sabitlemeyi Kaldırın',
      markUnread: 'Okunmamış Olarak İşaretleyin',
      markRead: 'Okundu Olarak İşaretleyin',
      unreadFailed: 'Okunmamış durumu güncellenemedi.',
      copyId: 'ID’yi Kopyalayın',
      export: 'Dışa Aktarın',
      branchFrom: 'Dal',
      rename: 'Yeniden Adlandırın…',
      archive: 'Arşivleyin',
      unarchive: 'Arşivden Çıkarın',
      newWindow: 'Yeni Pencere',
      openInTerminal: 'Terminalde Açın',
      hideTabBar: 'Sekme Çubuğunu Gizleyin',
      openInNewTab: 'Yeni Sekmede Açın',
      openInSplit: 'Bölünmüş Görünümde Açın',
      copyIdFailed: 'Oturum ID’si kopyalanamadı.',
      sessionActions: 'Oturum Eylemleri',
      sessionRunning: 'Oturum Çalışıyor',
      needsInput: 'Girdiniz Gerekli',
      waitingForAnswer: 'Yanıtınız Bekleniyor',
      finishedUnread: 'Tamamlandı — okunmamış',
      backgroundRunning: 'Arka Plan Görevi Çalışıyor',
      draftSession: 'Taslak — henüz bir şey gönderilmedi',
      handoffOrigin: platform => `${platform} Oturumundan Devredildi`,
      continuationOrigin: 'Otomatik devam — bu sohbet sıkıştırıldı ve sürdürüldü',
      ownedByProfile: profile => `Profil: ${profile}`,
      renamed: 'Yeniden Adlandırıldı',
      renameFailed: 'Yeniden adlandırma başarısız.',
      renameTitle: 'Oturumu Yeniden Adlandırın',
      renameDesc: 'Temizlemek için boş bırakın.',
      untitledPlaceholder: 'Adsız Oturum',
      deleteTitle: 'Oturum Silinsin mi?',
      deleteDesc: title => `Bu, “${title}” oturumunu kalıcı olarak siler. Bu işlem geri alınamaz.`,
      deleting: 'Siliniyor…',
      deleted: 'Oturum Silindi',
      untitledChat: id => `Sohbet ${id}`,
      messageCount: count => `${count} mesaj`,
      todoProgress: 'Tamamlanan Görevler',
      ageNow: 'şimdi',
      ageDay: 'g',
      ageHour: 's',
      ageMin: 'd'
    },
    dateDivider: {
      today: 'Bugünün Başları',
      yesterday: 'Dün',
      thisWeek: 'Bu Haftanın Başları',
      lastWeek: 'Geçen Hafta',
      thisMonth: 'Bu Ayın Başları'
    },
    statusDivider: {
      working: 'Çalışıyor',
      done: 'Tamamlandı'
    },
    markAllRead: 'Tümünü Okundu Olarak İşaretleyin'
  },
  composer: {
    message: 'Mesaj',
    wakingProfile: profile => `${profile} Uyandırılıyor…`,
    placeholderStarting: 'Hermes Başlatılıyor…',
    placeholderReconnecting: 'Hermes’e Yeniden Bağlanılıyor…',
    placeholderFollowUp: 'Takip Mesajı Gönderin',
    newSessionPlaceholders: [
      'Ne inşa ediyoruz?',
      'Hermes’e bir görev verin',
      'Aklınızda ne var?',
      'İhtiyacınızı tanımlayın',
      'Neyi ele alalım?',
      'Her şeyi sorun',
      'Bir hedefle başlayın'
    ],
    followUpPlaceholders: [
      'Takip mesajı gönderin',
      'Daha fazla bağlam ekleyin',
      'İsteği netleştirin',
      'Sırada ne var?',
      'Devam edin',
      'Daha ileri götürün',
      'Ayarlayın veya devam edin'
    ],
    startVoice: 'Sesli Sohbeti Başlatın',
    openDirective: 'Açın',
    queueMessage: 'Mesajı kuyruğa alın.',
    steer: 'Geçerli Çalıştırmayı Yönlendirin',
    redirect: 'Redirect the current run',
    stop: 'Durdurun',
    send: 'Gönderin',
    speaking: 'Konuşuyor',
    transcribing: 'Yazıya Dökülüyor',
    thinking: 'Düşünüyor',
    muted: 'Sessiz',
    listening: 'Dinliyor',
    muteMic: 'Mikrofonu Sessize Alın',
    unmuteMic: 'Mikrofonun Sesini Açın',
    stopListening: 'Dinlemeyi Durdurun ve Gönderin',
    stopShort: 'Durdurun',
    endConversation: 'Sesli Konuşmayı Bitirin',
    endShort: 'Bitirin',
    stopDictation: 'Dikteyi Durdurun',
    transcribingDictation: 'Dikte Yazıya Dökülüyor',
    voiceControls: 'Ses',
    voiceEngine: 'Sesli Sohbet Motoru',
    voiceEngineChained: 'Konuşmadan Metne + Hermes Sesi',
    voiceEngineLive: 'GPT-Live (tam çift yönlü, Hermes’e devreder)',
    voiceEngineLiveNeedsKey: 'OpenAI API Anahtarı Gerektirir',
    voiceEngineChangeFailed: 'Sesli sohbet motoru değiştirilemedi.',
    voiceEngineChainedShort: 'Konuşmadan Metne',
    voiceEngineLiveShort: 'GPT-Live',
    voiceDictation: 'Sesli Dikte',
    speakReplies: 'Yanıtları Sesli Okuyun',
    stopSpeakingReplies: 'Yanıtları Sesli Okumayı Durdurun',
    wakeWord: phrase => `Uyandırma Sözcüğü “${phrase}”`,
    wakeWordListening: phrase => `Uyandırma Sözcüğü: “${phrase}” — Dinliyor`,
    wakeWordOff: phrase => `Uyandırma Sözcüğü: “${phrase}” — Kapalı`,
    wakeWordPausedVoice: phrase => `Uyandırma Sözcüğü: “${phrase}” — Sesli Sohbet Sırasında Duraklatıldı`,
    lookupLoading: 'Aranıyor…',
    lookupNoMatches: 'Eşleşme Yok',
    lookupTry: 'Deneyin',
    lookupOr: 'veya',
    commonCommands: 'Yaygın Komutlar',
    hotkeys: 'Kısayollar',
    helpFooter: 'Tam paneli açar · geri tuşu kapatır.',
    commandDescs: {
      '/help': 'Masaüstü eğik çizgi komutlarını gösterin.',
      '/clear': 'Yeni Bir Oturum Başlatın',
      '/resume': 'Kaydedilmiş bir oturumu sürdürün',
      '/details': 'Konuşma dökümünün ayrıntı düzeyini kontrol edin.',
      '/copy': 'Seçimi veya Son Asistan Mesajını Kopyalayın',
      '/quit': 'Hermes’ten Çıkın',
      '/start': 'Yanıt vermeden platform başlangıç pinglerini onaylayın',
      '/new': 'Yeni bir masaüstü sohbeti başlatın',
      '/topic': 'Telegram DM konu oturumlarını etkinleştirin veya inceleyin',
      '/save': 'Geçerli konuşma dökümünü JSON olarak kaydedin',
      '/retry': 'Son mesajı yeniden deneyin (ajana yeniden gönderin)',
      '/prompt': 'Sonraki isteminizi $EDITOR içinde (markdown) oluşturun, ardından gönderin',
      '/undo': 'N kullanıcı turunu yedekleyin ve yeniden istem gönderin (varsayılan 1)',
      '/title': 'Geçerli oturumu yeniden adlandırın',
      '/handoff': 'Bu oturumu bir mesajlaşma platformuna devredin',
      '/branch': 'En son mesajı yeni bir sohbete dallandırın',
      '/worktree': 'Yalıtılmış git çalışma ağaçlarını gösterin, listeleyin, oluşturun veya budayın',
      '/compress': 'Bu konuşmanın bağlamını sıkıştırın',
      '/rollback':
        'Dosya sistemi denetim noktalarını listeleyin veya geri yükleyin (geri yükleme el düzenlemelerinizi korur; --all bunu geçersiz kılar)',
      '/export': 'Bir profili (yapılandırma, yetenekler, tema) paylaşılabilir bir arşive aktarın',
      '/import': 'Paylaşılan bir profil arşivini yeni profil olarak içe aktarın',
      '/stop': 'Etkin turu ve arka plan süreçlerini durdurun',
      '/pause': 'Yeni işleri genel olarak duraklatın (acil durdurma); “/pause off” devam ettirir.',
      '/bg': 'Bir istemi ayrı bir arka plan oturumunda çalıştırın',
      '/btw': 'Bu konuşmayı kesmeden hakkında yan bir soru sorun',
      '/agents': 'Etkin ajanları ve çalışan görevleri gösterin',
      '/journey': 'Bellek grafiğini açın — zaman içindeki yetenekler ve anılar',
      '/queue':
        'Sonraki tur için bir istem sıraya alın veya sıradaki istemleri listeleyin/düzenleyin/silin/taşıyın/temizleyin',
      '/steer': 'Kesintisiz olarak bir sonraki araç çağrısından sonra bir mesaj ekleyin',
      '/goal': 'Hermes’in turlar boyunca ulaşılana kadar üzerinde çalışacağı kalıcı bir hedef belirleyin',
      '/heartbeat': 'Boşta olduğunda bu oturuma yeniden giren yinelenen bir istem ayarlayın',
      '/refine': 'Bu konuşmayı şimdi inceleyin ve dersleri bellek/yeteneklere kaydedin',
      '/review': 'Az önce tartışılan işi (PR, kod, belgeler) incelemek için bağımsız bir alt ajan başlatın',
      '/loop': 'Bu oturumda bir istemi yinelenen aralıkla yeniden çalıştırın',
      '/plan': 'Hiçbir şey yürütmeden .hermes/plans/ dizinine markdown uygulama planı yazın',
      '/moa': 'Bir istemi varsayılan Ajan Karışımı ön ayarıyla çalıştırın, ardından modelinizi geri yükleyin',
      '/subgoal': 'Etkin hedefe ek ölçütler ekleyin veya yönetin',
      '/status': 'Geçerli oturum durumunu gösterin',
      '/egress': 'Docker çıkış proxy durumunu gösterin',
      '/context':
        'Kullanım göstergesi, kategori dökümü, sıkıştırma istatistikleri ve iş hacmiyle ayrıntılı bağlam penceresi görünümünü gösterin.',
      '/whoami': 'Eğik çizgi komutu erişiminizi gösterin (yönetici / kullanıcı)',
      '/profile': 'Etkin Hermes profilini değiştirin',
      '/codex-runtime': 'OpenAI/Codex modelleri için codex uygulama sunucusu çalışma zamanını açın veya kapatın',
      '/personality': 'Önceden tanımlanmış bir kişilik ayarlayın',
      '/battery': 'Durum çubuğunda renk kodlu pil göstergesini açın veya kapatın',
      '/timestamps': 'Mesajlarda ve /history’de [HH:MM] zaman damgalarını açın veya kapatın',
      '/diff': 'Çalışma dizinindeki git değişikliklerini gösterin',
      '/focus': 'Odak görünümünü açın veya kapatın — yalnızca isteminizi ve son yanıtı gösterin',
      '/yolo': 'YOLO’yu açın veya kapatın — tehlikeli komutları otomatik onaylayın',
      '/approvals': 'Kalıcı tehlikeli komut onay modunu gösterin veya ayarlayın',
      '/reasoning': 'Akıl yürütme eforu veya görünümü [<level> [--global]|show|hide|full|clamp]',
      '/skin': 'Masaüstü temasını değiştirin veya bir sonrakine geçin',
      '/wake': 'Masaüstü uyandırma sözcüğü dinleyicisini kontrol edin [on|off|status]',
      '/tools': 'Araçları yönetin: /tools [list|disable|enable] [name...]',
      '/memory': 'Bekleyen bellek yazımlarını inceleyin / onay kapısını açın veya kapatın',
      '/bundles': 'Yetenek paketlerini listeleyin (birden çok yetenek için /<name> takma adları)',
      '/pet': 'Bir petdex maskotunu açın/kapatın veya sahiplenin (/pet, /pet list, /pet boba)',
      '/hatch': 'Yeni bir evcil hayvan oluşturun (evcil hayvan oluşturucuyu açar)',
      '/learn':
        'Tanımladığınız her şeyden (dizinler, URL’ler, bu sohbet, notlar) yeniden kullanılabilir bir yetenek öğrenin',
      '/init': 'Depo taramasından AGENTS.md proje talimatları oluşturun veya güncelleyin',
      '/suggestions': 'Önerilen otomasyonları inceleyin (kabul edin/reddedin)',
      '/blueprint': 'Blueprint şablonundan bir otomasyon kurun',
      '/browser': 'Ajan tarayıcısını yönetin [connect|disconnect|status|use]',
      '/palette': 'Bulanık komut paletini açın (Ctrl+P de olur)',
      '/usage':
        'Token kullanımını ve hız sınırlarını gösterin; `reset` biriktirilmiş Codex sınır sıfırlamasını kullanır',
      '/subscription': 'Nous planınızı görüntüleyin ve tarayıcıda değiştirin',
      '/topup': 'Nous bakiyenizi görüntüleyin ve portalda faturalandırmayı yönetin',
      '/platform': 'Başarısız bir ağ geçidi platformunu duraklatın, sürdürün veya listeleyin',
      '/version': 'Hermes Agent sürümünü gösterin',
      '/debug': 'Hata ayıklama raporunu (sistem bilgileri ve günlükler) yükleyin ve paylaşılabilir bağlantılar alın',
      '/model': 'Bu oturum için modeli değiştirin'
    },
    hotkeyDescs: {
      'composer.mention': 'Dosyalara, klasörlere, URL’lere ve git’e başvurun',
      'composer.slash': 'Eğik çizgi komut paleti',
      'composer.help': 'Bu hızlı yardım (kapatmak için delete).',
      'composer.sendNewline': 'Gönderin · yeni satır için Shift+Enter',
      'composer.sendQueued': 'Sıradaki kuyruktaki turu gönderin',
      'keybinds.openPanel': 'Tüm klavye kısayolları',
      'composer.cancel': 'Açılır pencereyi kapatın · çalıştırmayı iptal edin',
      'composer.history': 'Açılır pencerede / geçmişte gezinin'
    },
    attachUrlTitle: 'URL Ekleyin',
    attachUrlDesc: 'Hermes sayfayı getirir ve bu tur için bağlam olarak ekler.',
    urlPlaceholder: 'https://example.com/post',
    urlHintPre: 'Tam URL’yi ekleyin, örneğin.',
    attach: 'Ekleyin',
    queued: count => `${count} Kuyrukta`,
    queuedPaused: count => `${count} Kuyrukta — Duraklatıldı`,
    attachmentOnly: 'Yalnızca Ek İçeren Tur',
    emptyTurn: 'Boş Tur',
    hiddenQueued: 'Kurulum Notu',
    attachments: count => `${count} Ek`,
    editingInComposer: 'Oluşturucuda Düzenleniyor',
    editingQueuedInComposer: 'Kuyruktaki Tur Oluşturucuda Düzenleniyor',
    restoredDraftNotice: 'Gönderilmemiş mesajınız geri yüklendi.',
    restoredDraftUndo: 'Geri Alın',
    queueEdit: 'Düzenleyin',
    queueExpand: 'Genişletin',
    queueCollapse: 'Daraltın',
    queueSendNext: 'Sonraki',
    queueSteer: 'Yönlendirin — canlı turu şimdi başka yöne çevirin',
    queueSend: 'Gönderin',
    queueDelete: 'Silin',
    queueLostNote: 'Turn lost during restart',
    restoreImageDraft: 'Restore image draft',
    queueCancelFailed: "Couldn't remove the queued turn",
    queueLostDiscard: 'Discard',
    queueLostDiscardTip:
      'The gateway restarted mid-turn and cannot finish this one. Discard it so the queued turns behind it run.',
    queueResume: 'Sürdürün',
    queueResumeTip: 'Durdurma düğmesiyle duraklatıldı — kuyruktaki turları göndermeye devam edin.',
    queueStuckTitle: 'Kuyruktaki Mesaj Gönderilmedi',
    queueStuckBody: 'Kuyruktaki bir tur gönderilemedi. Hâlâ kuyrukta — yeniden göndermeyi deneyin.',
    queueDroppedTitle: 'Kuyruktaki İstem Bırakıldı',
    queueDroppedBody:
      'Bu arka plan kuyruğu girdisi, oturumu art arda denemelere rağmen sürdürülemediği için bırakıldı. Kuyruktaki diğer hiçbir şey etkilenmedi.',
    terminalSelectionMissingTitle: 'Terminal Seçimi Kullanılamıyor',
    terminalSelectionMissingBody:
      'Göndermeden önce terminal satırlarını yeniden seçin (Ctrl/Cmd+L) — bu parçacığın özgün metni yok.',
    queuedTerminalSelectionExpiredBody:
      'Bu kuyruktaki terminal seçimi artık kullanılamıyor. Satırları yeniden seçin (Ctrl/Cmd+L) ve mesajı tekrar kuyruğa alın.',
    previewUnavailable: 'Önizleme Kullanılamıyor',
    previewLabel: label => `${label} Önizlemesi`,
    couldNotPreview: label => `${label} Önizlenemedi`,
    removeAttachment: label => `${label} Kaldırın`,
    dictating: 'Dikte Ediliyor',
    preparingAudio: 'Ses Hazırlanıyor',
    speakingResponse: 'Yanıt Seslendiriliyor',
    readingAloud: 'Sesli Okunuyor',
    themeSuggestions: 'Masaüstü Tema Önerileri',
    noMatchingThemes: 'Eşleşen Tema Yok',
    themeTryPre: 'Deneyin: ',
    themeTryPost: '.',
    attachLabel: 'Ekleyin',
    files: 'Dosyalar…',
    folder: 'Klasör…',
    images: 'Görseller…',
    pasteImage: 'Görsel Yapıştırın',
    url: 'URL…',
    promptSnippets: 'İstem Parçacıkları…',
    tipPre: 'İpucu: dosyalara satır içinde başvurmak için ',
    tipPost: ' yazın',
    snippetsTitle: 'Hazır İstemler',
    snippetsDesc: 'İleti alanına eklemek için bir başlangıç istemi seçin.',
    dropFiles: 'Eklemek İçin Dosyaları Bırakın',
    dropSession: 'Bu Sohbeti Bağlamak İçin Bırakın',
    snippets: {
      codeReview: {
        label: 'Kod İncelemesi',
        description: 'Geçerli değişikliği gerilemeler, gözden kaçan uç durumlar ve eksik testler açısından denetleyin.',
        text: 'Lütfen bunu hatalar, gerilemeler ve eksik testler açısından inceleyin.'
      },
      implementationPlan: {
        label: 'Uygulama Planı',
        description: 'Koda dokunmadan önce bir yaklaşım taslağı çıkarın, böylece fark odaklı kalır.',
        text: 'Kodu değiştirmeden önce lütfen kısa bir uygulama planı hazırlayın.'
      },
      explainThis: {
        label: 'Bunu Açıklayın',
        description: 'Seçili kodun nasıl çalıştığını adım adım anlatın ve önemli dosyalara bağlantı verin.',
        text: 'Lütfen bunun nasıl çalıştığını açıklayın ve önemli dosyaları işaret edin.'
      }
    }
  },
  statusStack: {
    hideStack: 'Durum Yığınını Gizleyin',
    showStack: 'Durum Yığınını Gösterin',
    agents: 'Ajanlar',
    background: count => `${count} Arka Plan`,
    goalActive: 'Hedef Etkin',
    goalBlocked: 'Hedef Engellendi',
    goalDone: 'Hedef Tamamlandı',
    goalPaused: 'Hedef Duraklatıldı',
    goalWaiting: 'Hedef Bekliyor',
    subagents: count => `${count} Alt Ajan`,
    todos: (done, total) => `Görevler ${done}/${total}`,
    previousTodos: (done, total) => `Önceki Görevler ${done}/${total}`,
    running: 'Çalışıyor',
    stop: 'Durdurun',
    dismiss: 'Kapatın',
    exit: code => `Çıkış ${code}`,
    control: {
      goalActiveTurns: (turn, maxTurns) => `Tur ${turn}/${maxTurns}`,
      goalDoneTurns: turns => `${turns} Tur`,
      goalTurn: turn => `Tur ${turn}`,
      goalActions: 'Hedef Eylemleri',
      viewDetails: 'Ayrıntıları görüntüleyin.',
      addCriterion: 'Ölçüt Ekleyin',
      addCriterionDialogTitle: 'Ölçüt Ekleyin',
      addCriterionPlaceholder: 'Ölçüt Metnini Girin…',
      criterionLabel: 'Ölçüt',
      pauseGoal: 'Hedefi Duraklatın',
      resumeGoal: 'Hedefi Sürdürün',
      resumeNow: 'Şimdi Sürdürün',
      clearGoal: 'Hedefi Temizleyin',
      clearGoalConfirmTitle: 'Hedef Temizlensin mi?',
      clearGoalConfirmBody: 'Etkin hedefi temizlemek istediğinizden emin misiniz? Bu işlem geri alınamaz.',
      copyCriterion: index => `Ölçüt ${index} Kopyalayın`,
      removeCriterion: index => `Ölçüt ${index} Kaldırın`,
      removeCriterionConfirmTitle: index => `Ölçüt ${index} Kaldırılsın mı?`,
      removeCriterionConfirmBody: index => `Ölçüt ${index} kaldırmak istediğinizden emin misiniz?`,
      clearCriteria: 'Tüm Ölçütleri Temizleyin',
      clearCriteriaConfirmTitle: 'Tüm Ölçütler Temizlensin mi?',
      clearCriteriaConfirmBody: 'Bu hedeften tüm ölçütleri kaldırmak istediğinizden emin misiniz?',
      criteriaHeader: count => `Ölçütler · ${count}`,
      noCriteria: 'Ölçüt Yok',
      goalDetailsTitle: 'Hedef ayrıntıları',
      objectiveLabel: 'Amaç',
      contractOutcome: 'Sonuç',
      contractVerification: 'Doğrulama',
      contractConstraints: 'Kısıtlar',
      contractBoundaries: 'Sınırlar',
      contractStopWhen: 'Şu Durumda Durdurun',
      waitBarrierTitle: 'Bekleme Koşulu',
      waitUntil: target => `${target} Zamanına Kadar Bekleniyor`,
      waitSession: target => `Oturum ${target} Bekleniyor`,
      waitPid: pid => `İşlem ${pid} Bekleniyor`,
      qualityGatesTitle: 'Kalite Kapıları',
      gateCommand: 'Komut',
      gateAttempts: (attempts, max) => `${attempts}/${max} Deneme`,
      gateTimeout: seconds => `${seconds} sn Zaman Aşımı`,
      gateLastExit: code => `Çıkış Kodu: ${code}`,
      loopActive: 'Döngü Etkin',
      loopPaused: 'Döngü Duraklatıldı',
      loopDeferred: 'Döngü Ertelendi',
      loopFinished: 'Döngü Tamamlandı',
      loopRuns: runs => `${runs} Çalıştırma`,
      loopRunCount: (current, total) => `Çalıştırma ${current}/${total}`,
      loopNext: time => `Sonraki ${time}`,
      loopEverySeconds: seconds => `Her ${seconds} Sn`,
      loopEveryMinutes: minutes => `Her ${minutes} Dk`,
      loopEveryHours: hours => `Her ${hours} Sa`,
      loopSelfPaced: 'Kendi Hızında',
      loopActions: 'Döngü Eylemleri',
      pauseLoop: 'Döngüyü Duraklatın',
      resumeLoop: 'Döngüyü Sürdürün',
      stopLoop: 'Döngüyü Durdurun',
      stopLoopConfirmTitle: 'Döngü Durdurulsun mu?',
      stopLoopConfirmBody: 'Bu döngüyü durdurmak istediğinizden emin misiniz?',
      dismissLoop: 'Döngüyü Kapatın',
      loopPromptLabel: 'İstem',
      loopCadenceLabel: 'Sıklık',
      loopUntilLabel: 'Şu Koşula Kadar',
      loopDeferredNotice: 'Etkin bir hedef şu anda oturumu kontrol ediyor.',
      loopAwaitingResponse: 'Yanıt Bekleniyor',
      heartbeatActive: 'Kalp Atışı Etkin',
      heartbeatPaused: 'Kalp Atışı Duraklatıldı',
      heartbeatEveryMinutes: minutes => `Her ${minutes} Dk`,
      heartbeatEveryHours: hours => `Her ${hours} Sa`,
      heartbeatEverySeconds: seconds => `Her ${seconds} Sn`,
      heartbeatNext: time => `Sonraki ${time}`,
      dueWaitingForIdle: 'Zamanı Geldi — Boşta Bekleniyor',
      heartbeatActions: 'Kalp Atışı Eylemleri',
      pauseHeartbeat: 'Kalp Atışını Duraklatın',
      resumeHeartbeat: 'Kalp Atışını Sürdürün',
      clearHeartbeat: 'Kalp Atışını Temizleyin',
      clearHeartbeatConfirmTitle: 'Kalp Atışı Temizlensin mi?',
      clearHeartbeatConfirmBody: 'Bu kalp atışını temizlemek istediğinizden emin misiniz?',
      heartbeatFiredCount: count => `${count} Kez Tetiklendi`,
      actionFailed: msg => `Eylem başarısız oldu: ${msg}.`,
      actionSucceeded: 'Eylem Başarılı',
      copySuccess: 'Ölçüt Panoya Kopyalandı',
      copyFailure: 'Ölçüt Panoya Kopyalanamadı',
      continuationFailed: 'Hedef sürdürme isteği gönderilemedi.',
      continuationQueued: 'Hedef Sürdürüldü — Sürdürme, Geçerli Tur Bitene Kadar Kuyruğa Alındı',
      continuationBusy:
        'Hedef Sürdürüldü — Oturum Meşgul, Devam Etmek İçin Önce Geçerli Yanıtı Durdurun (Durdur Düğmesi veya Esc)',
      controlUnavailable: msg => `Oturum Kontrolleri Kullanılamıyor: ${msg}`,
      dismissError: 'Hatayı kapatın',
      add: 'Ekleyin'
    },
    coding: {
      title: 'Çalışma Ağacı',
      noBranch: 'Dal Yok',
      detached: 'Ayrık',
      clean: 'Temiz',
      changed: count => `${count} Değişti`,
      ahead: count => `${count} İleri`,
      behind: count => `${count} Geride`,
      review: 'İnceleyin',
      close: 'Kapatın',
      openChanges: 'Değişiklikleri Açın',
      openFile: 'Dosyayı Açın',
      stage: 'Hazırlayın',
      unstage: 'Hazırlamayı Geri Alın',
      stageAll: 'Tümünü Hazırlayın',
      viewAsTree: 'Ağaç Olarak Görüntüleyin',
      viewAsList: 'Liste Olarak Görüntüleyin',
      revert: 'Geri Alın',
      revertAll: 'Tümünü Geri Alın',
      revertConfirm:
        'Bu dosyadaki değişiklikler atılsın ve dosya commit edilmiş duruma döndürülsün mü? Bu işlem geri alınamaz',
      revertAllConfirm:
        'Tüm değişiklikler atılsın ve dosyalar commit edilmiş duruma döndürülsün mü? Bu işlem geri alınamaz',
      staged: 'Hazırlanan',
      noChanges: 'Değişiklik Yok',
      notRepo: 'Git Deposu Değil',
      noDiff: 'Gösterilecek Fark Yok',
      scopeUncommitted: 'Commit Edilmemiş',
      scopeBranch: 'Dal',
      scopeLastTurn: 'Son Tur',
      readOnlyScope:
        'Salt okunur görünüm — hazırlama, geri alma ve commit işlemleri Commit Edilmemişler için geçerlidir',
      commit: 'Commit’leyin',
      commitAndPush: 'Commit’leyin ve Gönderin',
      commitPlaceholder: shortcut => `Mesaj (${shortcut} İle Commit’lemek İçin)`,
      generateCommitMessage: 'Commit mesajı oluşturun.',
      stopGenerating: 'Üretimi Durdurun',
      createPr: 'PR Oluşturun',
      openPr: 'PR Açın',
      ghMissing: 'PR Açmak İçin GitHub CLI’yi (gh) Yükleyin ve Oturum Açın',
      agentShip: 'Hermes’ten PR Açmasını İsteyin',
      agentShipUnavailable: 'Bu Değişiklikleri Barındıran Sohbet Ekranda Değil',
      agentShipPrompt:
        'Mevcut değişiklikleri inceleyin, açıklayıcı bir conventional commit mesajıyla commit’leyin, dalı gönderin ve bir pull request açın',
      newBranch: 'Yeni Dal',
      branchOffFrom: base => `${base} Dalından Yeni Dal`,
      switchTo: branch => `${branch} Dalına Geçin`,
      switchFailed: branch => `${branch} dalına geçilemedi.`,
      worktrees: 'Çalışma Ağaçları'
    }
  },
  updates: {
    discontinuedTitle: 'Hermes’in Bu Derlemesi Artık Desteklenmiyor',
    discontinuedBody:
      'Hermes’in bu derlemesi artık desteklenmiyor ve bozulabilir — kaldırın. Verileriniz diskte kalır.',
    channels: {
      stable: 'Kararlı',
      canary: 'Canary'
    },
    bundleSwapPending: 'Güncellemeyi Tamamlamak için Yeniden Başlatın',
    bundleSwapPendingDesc:
      'Güncellenen uygulama zaten yüklü — Hermes’in onu yüklemesi için yalnızca yeniden başlatılması gerekiyor. Sohbetler ve ayarlar etkilenmez.',
    bundleSwapPendingAction: 'Hermes’i Yeniden Başlatın',
    stages: {
      idle: 'Hazırlanıyor…',
      prepare: 'Hazırlanıyor…',
      fetch: 'İndiriliyor…',
      pull: 'Neredeyse Bitti…',
      pydeps: 'Tamamlanıyor…',
      update: 'Hermes Güncelleniyor…',
      rebuild: 'Masaüstü Uygulaması Yeniden Derleniyor…',
      restart: 'Hermes Yeniden Başlatılıyor…',
      done: 'Güncelleme Tamamlandı',
      manual: 'Terminalinizden Güncelleyin',
      guiSkew: 'Masaüstü Uygulamasını Güncelleyin',
      error: 'Güncelleme duraklatıldı.'
    },
    checking: 'Güncellemeler Aranıyor…',
    checkFailedTitle: 'Güncellemeler denetlenemedi.',
    tryAgain: 'Yeniden Deneyin',
    notAvailableTitle: 'Güncelleme Kullanılamıyor',
    unsupportedMessage: 'Hermes’in bu sürümü uygulama içinden kendini güncelleyemez.',
    connectionRetry:
      'Hermes Güncelleme Sunucusuna Ulaşamadı. İnternet Bağlantınızı Kontrol Edip Yeniden Deneyin. Uzak Bir Hermes Kullanıyorsanız Çevrimiçi Olduğundan Emin Olun',
    gitUnusable: 'Hermes Bu Bilgisayarda Git’i Çalıştıramadı, Bu Nedenle Güncellemeleri Denetleyemedi',
    connectionSettings: 'Bağlantı Ayarları',
    openDownloadPage: 'İndirme Sayfasını Açın',
    latestBody: 'En son sürümü çalıştırıyorsunuz.',
    latestBodyBackend: 'Arka uç en son sürümü çalıştırıyor.',
    allSetTitle: 'Her Şey Hazır',
    availableTitle: 'Yeni Güncelleme Mevcut',
    availableBody: 'Hermes’in yeni bir sürümü yüklenmeye hazır.',
    availableTitleBackend: 'Arka Uç Güncellemesi Mevcut',
    availableBodyBackend: 'Bağlı Hermes arka ucunun daha yeni bir sürümü yüklenmeye hazır.',
    availableBodyNoChangelog: 'Daha yeni bir sürüm hazır. Bu kurulum türü için sürüm notları mevcut değil.',
    availableBodyAppInstaller:
      'Hermes’in yeni bir sürümü hazır. Hermes kapanacak, güncellemeyi Windows tamamlayacak ve Hermes kendiliğinden yeniden açılacak.',
    updateNow: 'Şimdi Güncelleyin',
    maybeLater: 'Belki Daha Sonra',
    moreChanges: count => `+ ${count} değişiklik daha dahil`,
    copyFullLog: 'Tam Değişiklik Günlüğünü Kopyalayın',
    manualTitle: 'Terminalinizden Güncelleyin',
    manualUnavailableTitle: 'Buradan Güncellenemiyor',
    manualBody:
      'Hermes’i komut satırından yüklediniz, bu nedenle güncellemeler de orada çalışır. Bunu terminalinize yapıştırın:',
    manualBodyBackend: 'Hermes arka ucu bu uygulamanın dışında yönetiliyor. Bunu barındıran sunucuda çalıştırın:',
    manualPickedUp: 'Hermes Yeni Sürümü Bir Sonraki Başlatmanızda Alacak',
    manualPickedUpBackend: 'Güncelleme Tamamlandıktan Sonra Arka Uç Yeni Sürümü Alır',
    guiSkewTitle: 'Masaüstü Uygulamasını Güncelleyin',
    guiSkewBody:
      'Arka uç güncellendi, ancak bu masaüstü uygulaması paketi değişmedi. Eşleşmesi için Hermes masaüstü uygulamasını (AppImage / .deb / .rpm) güncelleyin veya yeniden yükleyin.',
    copy: 'Kopyalayın',
    copied: 'Kopyalandı',
    done: 'Tamamlandı',
    applyingBody:
      'Hermes güncelleyicisi kendi penceresinde devreye girer ve işlem bittiğinde Hermes’i otomatik olarak yeniden açar. Güncelleme sırasında lütfen Hermes’i kendiniz yeniden açmayın.',
    applyingBodyBackend:
      'Uzak arka uç güncellemeyi uyguluyor ve yeniden başlayacak. Arka uç geri geldiğinde Hermes otomatik olarak yeniden bağlanır.',
    applyingClose: 'Güncelleme Çalışırken Bu Pencere Kapanacak, Ardından Hermes Kendiliğinden Yeniden Açılacak',
    applyingBodyAppInstaller:
      'Hermes kapanacak ve güncellemeyi Windows tamamlayacak. İşlem bittiğinde Hermes yeniden açılacak — herhangi bir şey yapmanız gerekmez.',
    applyingCloseAppInstaller:
      'Bu Pencere Kapanacak, Güncellemeyi Windows Tamamlayacak ve Hermes Kendiliğinden Yeniden Açılacak',
    checkUnknownTitleAppInstaller: 'Güncellemeler Denetlenemedi',
    checkUnknownBodyAppInstaller:
      'Windows şu anda güncellemeleri denetleyemedi. Güncellemeler Hermes’i yeniden başlattığınızda da otomatik olarak yüklenir.',
    errorTitle: 'Güncelleme tamamlanmadı.',
    errorBody: 'Endişelenmeyin — hiçbir şey kaybolmadı. Şimdi yeniden deneyebilirsiniz.',
    blockerTitle: 'Hermes’i Güncellemek için Yerel Önizlemeler Kapatılsın mı?',
    blockerBody:
      'Hermes’in güncelleme öncesinde bu yerel önizlemeleri durdurması gerekiyor. Bu işlem dosyalarınızı değiştirmez veya silmez.',
    foreignBlockerTitle: 'Hermes’i Güncellemek için Diğer Süreçleri Kapatın',
    foreignBlockerBody:
      'Hermes bu süreçleri güvenli bir şekilde otomatik olarak kapatamaz. Her birine ait uygulamayı, terminali veya hizmeti kapatın, ardından güncellemeyi yeniden deneyin.',
    mixedBlockerBody:
      'Hermes aşağıda listelenen yerel önizlemeleri kapatabilir. Güncellemenin devam edebilmesi için diğer süreçlerin el ile kapatılması gerekir.',
    closePreviewsAndUpdate: 'Önizlemeleri Kapatın ve Güncelleyin',
    closePreviewsAndCheckAgain: 'Önizlemeleri Kapatın ve Yeniden Denetleyin',
    localPreview: 'Yerel Önizleme',
    portLabel: port => `Bağlantı Noktası ${port}`,
    pidLabel: pid => `PID ${pid}`,
    technicalDetails: 'Teknik ayrıntılar',
    notNow: 'Şimdi Değil',
    clientAlsoBehindTitle: 'Masaüstü Uygulaması Geride',
    clientAlsoBehindMessage:
      'Arka uç güncel, ancak bu masaüstü uygulaması hâlâ daha eski bir sürümde. En son düzeltmeleri almak için uygulamayı güncelleyin.',
    clientAlsoBehindAction: 'Masaüstü Uygulamasını Güncelleyin',
    everythingDispatched: 'Güncelleme Gönderildi',
    everythingSkipped: 'Atlandı',
    everythingRowFailed: 'Güncelleme başarısız oldu.',
    everythingFanoutFailedTitle: 'Diğer örnekler güncellenemedi.',
    changeLogNew: 'Yenilikler',
    changeLogFixed: 'Düzeltildi',
    changeLogFaster: 'Daha Hızlı',
    changeLogImproved: 'İyileştirildi',
    changeLogOther: 'Diğer İyileştirmeler',
    changeLogFallbackLabel: 'Bu Güncellemede',
    changeLogFallbackItem: 'İyileştirmeler ve Düzeltmeler',
    applyStatus: {
      preparing: 'Arka Uç Güncelleniyor…',
      pulling: 'Arka Uç Güncelleniyor…',
      restarting: 'Güncellemeyi Yüklemek için Arka Uç Yeniden Başlatılıyor…',
      notAvailable: 'Bu Arka Uç için Güncelleme Kullanılamıyor',
      failed: 'Arka uç güncellemesi başarısız oldu.',
      noReturn:
        'Arka Uç Yeniden Çevrimiçi Olmadı. Güncelleme Tamamlanmamış Olabilir — Arka Uç Ana Bilgisayarını Kontrol Edin',
      owed: steps =>
        `Arka Uç Güncellendi, Ancak Hâlâ Bekleyen: ${steps}. Tamamlamak için \`hermes update\` Komutunu Yeniden Çalıştırın`
    },
    appName: 'Hermes',
    version: value => `${value} Sürümü`,
    versionUnavailable: 'Sürüm Kullanılamıyor',
    checkNow: 'Şimdi Denetleyin',
    seeWhatsNew: 'Yeniliklere Göz Atın',
    releaseNotes: 'Sürüm Notları',
    onLatest: 'En Son Sürümdesiniz',
    installing: 'Şu Anda Bir Güncelleme Yükleniyor',
    cantReach: 'Güncelleme Sunucusuna Ulaşamadık',
    tapCheck: 'Güncellemeleri Aramak için “Şimdi Denetleyin” Seçeneğine Dokunun',
    updateReady: count => `Yeni Bir Güncelleme Hazır (${count} Değişiklik Dahil)`,
    updateReadyUnknown: 'Yeni Bir Güncelleme Hazır',
    availableBodyRelease: tag => `${tag} sürümü yüklenmeye hazır.`,
    lastChecked: age => `Son Denetleme ${age}`,
    never: 'Hiçbir Zaman',
    justNow: 'Az Önce',
    minAgo: count => `${count} dk önce`,
    hoursAgo: count => `${count}sa önce`,
    daysAgo: count => `${count}g önce`,
    justNowSuffix: ' · Az Önce',
    bundleOutOfSync: 'Uygulama Derlemesi Güncel Değil',
    bundleOutOfSyncDesc:
      'Hermes çalışma zamanı güncellendi, ancak masaüstü uygulamasının kendisi hâlâ eski bir derleme. En son düzeltmeleri almak için uygulamayı güncelleyin.',
    bundleOutOfSyncAction: 'Yükleyiciyi Edinin',
    checkingShort: 'Denetleniyor…',
    releaseAvailable: tag => `${tag} Sürümü Mevcut`,
    versionDetailsTitle: 'Sürüm ayrıntıları',
    versionDetailsBody: 'Bu kurulum uygulamanın dışında yönetiliyor. Yüklediğiniz şekilde güncelleyin.',
    versionDetailsVersion: 'Sürüm',
    versionDetailsCommit: 'Commit',
    versionDetailsBackend: 'Bağlı arka uç',
    versionDetailsClient: 'Bu cihaz',
    versionDetailsBuildOrigin: 'Derleme kaynağı',
    versionDetailsDistribution: 'Dağıtım',
    versionDetailsDistributionDesktop: 'Masaüstü uygulaması.',
    versionDetailsDistributionDesktopMsix: 'Masaüstü uygulaması (MSIX).',
    versionDetailsDistributionDesktopInstaller: 'Masaüstü uygulaması (yükleyici).',
    versionDetailsDistributionSourceInstaller: 'Kaynak (yükleme betiği).',
    versionDetailsDistributionSourceInstallerDesktop: 'Kaynak (yükleme betiği) + hermes masaüstü.',
    versionDetailsDistributionSource: 'Kaynak',
    versionDetailsDistributionSourceDesktop: 'Kaynak + hermes masaüstü.',
    versionDetailsDistributionStore: 'Microsoft Store',
    versionDetailsRuntime: 'Çalışma zamanı',
    versionDetailsRuntimeEmbedded: 'Gömülü çalışma zamanı.',
    versionDetailsRuntimeExternal: 'Harici (makinenin çalışma zamanını kullanır).',
    versionDetailsInstallId: 'Yükleme ID’si',
    versionDetailsUncommittedChanges: 'işlenmemiş değişiklikler.'
  },
  install: {
    stageStates: {
      pending: 'Bekliyor',
      running: 'Kuruluyor',
      succeeded: 'Tamamlandı',
      skipped: 'Atlandı',
      failed: 'Başarısız'
    },
    oneTimeTitle: 'Hermes Tek Seferlik Bir Kurulum Gerektiriyor',
    unsupportedDesc: platform =>
      `İlk açılışta otomatik kurulum ${platform} üzerinde henüz kullanılamıyor. Terminali açın ve aşağıdaki komutu çalıştırın, ardından bu uygulamayı yeniden başlatın. Sonraki başlatmalarda bu adım atlanır.`,
    installCommand: 'Kurulum Komutu',
    copyCommand: 'Komutu Kopyalayın',
    viewDocs: 'Kurulum Belgelerini Görüntüleyin',
    installTo: 'Kurulacağı Konum',
    retryAfterRun: 'Çalıştırdım — Yeniden Deneyin',
    setupChoiceTitle: 'Hermes Desktop’ı Kurun',
    setupChoiceDesc:
      'Bu uygulamayı hâlihazırda çalıştırdığınız bir Hermes ağ geçidine bağlayın veya Hermes’i bu bilgisayara yerel olarak kurun.',
    setupChoiceDescLocal:
      'Hermes’i bu bilgisayara kurun veya hâlihazırda çalıştırdığınız bir Hermes ağ geçidine bağlanın.',
    connectExistingTitle: 'Mevcut Hermes’e Bağlanın',
    connectExistingShort: 'Mevcut Olana Bağlanın',
    connectExistingDesc:
      'Oturum tokenı veya tarayıcıda oturum açma ile uzak bir arka uç kullanın. Yerel kurulum başlatılmaz.',
    installLocalTitle: 'Hermes’i Yerel Olarak Kurun',
    installLocalDesc: 'Hermes’i indirin, Python ortamını oluşturun ve arka ucu bu bilgisayarda çalıştırın.',
    useLocalTitle: 'Bu Bilgisayardaki Hermes’i Kullanın',
    useLocalDesc: 'Burada zaten bir Hermes çalışma zamanı kurulu — tek tıklamayla başlatın. Hiçbir şey indirilmez.',
    bundledLocalDesc:
      'Bu uygulamayla birlikte gelen Hermes çalışma zamanını kullanın — paketlenmiş arka uç, yerel kurulumdur.',
    localStartUnavailable: 'Yerel kurulum başlatılamadı. Hermes Desktop’ı yeniden başlatıp tekrar deneyin',
    remoteSetupTitle: 'Mevcut Hermes’e Bağlanın',
    remoteSetupDesc:
      'Ağ geçidi URL’nizi girin. Hermes Desktop, token mı yoksa tarayıcıda oturum açma mı gerektiğini algılar.',
    remoteUrlTitle: 'Ağ Geçidi URL’si',
    remoteUrlDesc: 'Hermes ağ geçidinin temel URL’sini kullanın; uzak bağlantıda https:// ekleyin.',
    remoteUrlPlaceholder: 'https://gateway.example.com/hermes',
    probing: 'Ağ Geçidi Kimlik Doğrulaması Algılanıyor…',
    probeError:
      'Hermes bu adrese ulaşamıyor. URL’yi ve diğer bilgisayarda Hermes’in çalıştığını kontrol edin — yanıt geldiğinde oturum açma seçenekleri görünür.',
    probeErrorDetails: 'Ayrıntılar',
    identityProvider: 'Kimlik Sağlayıcınız',
    authTitle: 'Kimlik Doğrulama',
    authNeedsOauth: provider => `Bu ağ geçidini test etmeden önce ${provider} ile oturum açın`,
    authSignedIn: 'Tarayıcıda Oturum Açma Tamamlandı',
    connected: 'Bağlandı',
    signIn: 'Oturum Açın',
    signInWith: provider => `${provider} ile Oturum Açın`,
    enterUrlFirst: 'Önce bir ağ geçidi URL’si girin',
    signInIncomplete: 'Oturum açma penceresi, kimlik doğrulama tamamlanmadan kapandı',
    tokenTitle: 'Oturum Tokenı',
    tokenDesc: 'Uzak ağ geçidinin .env dosyasındaki oturum tokenını yapıştırın.',
    pasteSessionToken: 'Oturum Tokenını Yapıştırın',
    incompleteSignInTest: 'OAuth korumalı bu ağ geçidini test etmeden önce oturum açın',
    incompleteTokenTest: 'Bu ağ geçidini test etmeden önce bir oturum tokenı girin',
    testConnection: 'Bağlantıyı Test Edin',
    testSucceeded: (baseUrl, version) => `${baseUrl} (${version}) ile Bağlandı`,
    applyRemote: 'Uygulayın ve Yeniden Bağlanın',
    backToSetup: 'Geri',
    failedTitle: 'Kurulum başarısız oldu.',
    settingUpTitle: 'Hermes Ajanı Kuruluyor',
    finishingTitle: 'Tamamlanıyor',
    failedDesc:
      'Kurulum adımlarından biri tamamlanamadı. Bu durum, Hermes’in başka bir kopyası çalışırken, internet bağlantısı kesildiğinde veya antivirüs yükleyiciyi engellediğinde yaşanabilir. Diğer Hermes pencerelerini kapatın, ardından Yeniden Yükle’yi seçip yeniden deneyin. Yine başarısız olursa günlükleri açın ve destek ekibine gönderin.',
    activeDesc:
      'Bu tek seferlik bir kurulumdur. Hermes yükleyicisi bağımlılıkları indiriyor ve makinenizi yapılandırıyor. Sonraki başlatmalarda bu adım atlanır.',
    progress: (completed, total) => `${completed} / ${total} adım tamamlandı`,
    currentStage: stage => ` — şimdi: ${stage}`,
    fetchingManifest: 'Yükleyici Bildirimi Alınıyor…',
    error: 'Hata',
    hideOutput: 'Yükleyici Çıktısını Gizleyin',
    showOutput: 'Yükleyici Çıktısını Gösterin',
    lines: count => `${count} Satır`,
    noOutput: 'Henüz Çıktı Yok',
    cancelling: 'İptal Ediliyor…',
    cancelInstall: 'Kurulumu İptal Edin',
    transcriptSaved: 'Tam Döküm Şuraya Kaydedildi',
    copiedOutput: 'Kopyalandı!',
    copyOutput: 'Çıktıyı Kopyalayın',
    reloadRetry: 'Yeniden Yükleyin ve Deneyin',
    openLogs: 'Günlükleri Açın'
  },
  onboarding: {
    headerTitle: 'Hermes Agent İle Kuruluma Başlayalım',
    headerDesc: 'Sohbete başlamak için bir model sağlayıcı bağlayın. Çoğu seçenek tek tıklamayla tamamlanır.',
    preparingInstall: 'Hermes Kurulumu Tamamlıyor. İlk Çalıştırmada Bu Genellikle Bir Dakikadan Az Sürer',
    starting: 'Hermes Başlatılıyor…',
    setupSlowTitle: 'Kurulum Normalden Daha Uzun Sürüyor',
    setupSlowBody: 'Hermes arka planda hâlâ başlatılıyor.',
    continueWithoutSetup: 'Kurulum Olmadan Devam Edin',
    lookingUpProviders: 'Sağlayıcılar Aranıyor…',
    collapse: 'Daraltın',
    otherProviders: 'Diğer Sağlayıcılar',
    haveApiKey: 'API Anahtarım Var',
    chooseLater: 'Sağlayıcıyı Daha Sonra Seçeceğim',
    recommended: 'Önerilen',
    connected: 'Bağlandı',
    featuredPitch: 'Tek Abonelik, 300’den Fazla Öncü Model — Hermes’i Çalıştırmanın Önerilen Yolu',
    fireworksPitch: 'Doğrudan Model API’si — Fireworks Tarafından Barındırılan Öncü Modeller',
    localModelsTitle: 'Modelleri Yerel Olarak Çalıştırın',
    localModelsPitch: 'Hesap Gerekmez — Bir Model İndirip Bu Makinede Çalıştırın',
    openRouterPitch: 'Tek Anahtar, Yüzlerce Model — Sağlam Bir Varsayılan',
    apiKeyOptions: {
      fireworks: {
        short: 'Doğrudan Model API’si',
        description: 'Fireworks AI tarafından barındırılan modellere doğrudan erişim.'
      },
      openrouter: {
        short: 'Tek Anahtar, Çok Model',
        description: 'Tek bir anahtar arkasında yüzlerce model barındırır. Yeni kurulumlar için iyi bir varsayılan.'
      },
      openai: {
        short: 'GPT Sınıfı Modeller',
        description: 'OpenAI modellerine doğrudan erişim.'
      },
      gemini: {
        short: 'Gemini Modelleri',
        description: 'Google Gemini modellerine doğrudan erişim.'
      },
      xai: {
        short: 'Grok Modelleri',
        description: 'xAI Grok modellerine doğrudan erişim.'
      },
      local: {
        short: 'Kendi Barındırılan',
        description:
          'Hermes’i yerel veya kendi barındırdığınız OpenAI uyumlu bir uç noktaya (vLLM, llama.cpp, Ollama vb.) yönlendirin.'
      }
    },
    backToSignIn: 'Oturum Açmaya Dönün',
    getKey: 'Anahtar Alın',
    replaceCurrent: 'Geçerli Değeri Değiştirin',
    pasteApiKey: 'API Anahtarını Yapıştırın',
    localApiKeyPlaceholder: 'API Anahtarı (İsteğe Bağlı — Yalnızca Uç Noktanız Gerektiriyorsa)',
    localModelNamePlaceholder: 'Model Adı (Ör. command-a-plus-05-2026)',
    couldNotSave: 'Kimlik Bilgisi Kaydedilemedi',
    connecting: 'Bağlanıyor',
    update: 'Güncelleyin',
    flowSubtitles: {
      pkce: 'Oturum Açmak İçin Tarayıcınızı Açar, Sonra Burada Devam Eder',
      device_code: 'Tarayıcınızda Bir Doğrulama Sayfası Açar — Hermes Otomatik Olarak Bağlanır',
      external: 'Terminalinizde Bir Kez Oturum Açın, Sonra Sohbete Dönün'
    },
    startingSignIn: provider => `${provider} İçin Oturum Açma Başlatılıyor…`,
    verifyingCode: provider => `Kodunuz ${provider} İle Doğrulanıyor…`,
    connectedProvider: provider => `${provider} Bağlandı`,
    connectedPicking: provider => `${provider} Bağlandı. Varsayılan Model Seçiliyor…`,
    signInFailed: 'Oturum açma başarısız oldu. Tekrar deneyin.',
    signInExpired:
      'Oturum Açma Sayfası Siz Tamamlamadan Zaman Aşımına Uğradı. Tekrar Deneyin Ve Tarayıcı Adımını Birkaç Dakika İçinde Tamamlayın Veya Bunun Yerine Bir API Anahtarı Kullanın',
    signInDidNotFinish: provider =>
      `${provider} İle Oturum Açma Tamamlanmadı. İnternet Bağlantınızı Kontrol Edip Tekrar Deneyin Veya Farklı Bir Sağlayıcı Seçin`,
    tryAgain: 'Yeniden Deneyin',
    useApiKeyInstead: 'Bir API Anahtarı Kullanın',
    errorDetails: 'Ayrıntılar',
    pickDifferentProvider: 'Farklı Bir Sağlayıcı Seçin',
    signInWith: provider => `${provider} İle Oturum Açın`,
    openedBrowser: provider => `${provider} Tarayıcınızda Açtık`,
    authorizeThere: 'Hermes’i Orada Yetkilendirin',
    copyAuthCode: 'Yetkilendirme Kodunu Kopyalayıp Aşağıya Yapıştırın',
    pasteAuthCode: 'Yetkilendirme Kodunu Yapıştırın',
    reopenAuthPage: 'Yetkilendirme Sayfasını Yeniden Açın',
    waitingAuthorize: 'Yetkilendirmeniz Bekleniyor…',
    externalPending: provider =>
      `${provider} Kendi CLI’si Üzerinden Oturum Açar. Bu Komutu Bir Terminalde Çalıştırın, Sonra Geri Dönüp “Oturum Açtım” Seçeneğini Seçin:`,
    signedIn: 'Oturum Açtım',
    deviceCodeOpened: provider => `${provider} Tarayıcınızda Açtık. Bu Kodu Oraya Girin:`,
    reopenVerification: 'Doğrulama Sayfasını Yeniden Açın',
    copy: 'Kopyalayın',
    defaultModel: 'Varsayılan Model',
    freeTier: 'Ücretsiz Katman',
    pro: 'Pro',
    free: 'Ücretsiz',
    price: (input, output) => `Mtok Başına ${input} Girdi / ${output} Çıktı`,
    change: 'Değiştirin',
    startChatting: 'Başlayın',
    docs: provider => `${provider} Belgeleri`
  },
  freeTier: {
    providerRowTitle: 'Nous · Ücretsiz Katman',
    providerRowPitch: 'Daha Fazla Model ve Araç Açmak İçin Bir Nous Hesabıyla Oturum Açın',
    readyTitle: 'Hermes Hazır',
    readyCaption: 'Ücretsiz · Bağlantılar Dahil',
    begin: 'Başlayın',
    signInInstead: 'Bunun Yerine Nous Hesabıyla Oturum Açın',
    otherProviders: 'Diğer Sağlayıcılar',
    stripTitle: 'Ücretsiz Nous çıkarımı ve bağlantıları artık kullanılabilir',
    stripBody: 'Denemek için model seçiciyi açın veya Nous hesabıyla oturum açın.',
    openModelPicker: 'Model Seçiciyi Açın',
    dismiss: 'Kapatın',
    providerName: 'Nous',
    statusLabel: model => `Nous · ${model}`,
    signIn: 'Oturum Açın',
    signInHeading: 'Daha fazla model ve araç açmak için Nous hesabıyla oturum açın',
    settingUp: 'Ücretsiz Çıkarım Ayarlanıyor…',
    finishInBrowser: 'Tarayıcıda tamamla',
    doNotShare: 'Bu Kodu Paylaşmayın',
    openPageAgain: 'Sayfayı tekrar aç',
    waiting: 'Oturum Açma Bekleniyor…',
    finishingHeading: 'Oturum Açma Tamamlanıyor…',
    finishingBody: 'Tarayıcıda onaylandı. Hesap token’larınız alınıyor.',
    signedInAsLabel: 'Giriş yapan:',
    signedIn: 'Oturum Açıldı',
    completedBody: 'Hesabınız artık çıkarım ve araçları kapsıyor.',
    reconnect: 'Yeniden bağlan',
    openConnectors: "Bağlayıcılar'ı Aç",
    defaultModel: 'Varsayılan Model',
    change: 'Değiştirin',
    done: 'Tamamlandı',
    notNow: 'Şimdi Değil',
    tryAgain: 'Yeniden Deneyin',
    didNotComplete: 'Oturum Açma Tamamlanmadı',
    timedOutHeading: 'Bu Oturum Açma Bağlantısının Süresi Doldu',
    timedOutBody: 'Hazır olduğunuzda yeniden başlatın. Hâlâ ücretsiz Nous hizmetindesiniz.',
    errorBody: 'Oturum açma tamamlanmadı. Hazır olduğunuzda yeniden deneyin.',
    busyHeading: 'Neredeyse Tamam',
    busyBody: wait =>
      `Nous hizmeti meşgul olduğu için Hermes oturum açma işlemini tamamlayamadı. ${wait} sonra yeniden deneyin. Bu arada oturumunuz burada duruyor.`,
    unreachableBody:
      'Hermes, oturum açma işlemini tamamlamak için Nous hizmetine ulaşamadı. İnternet bağlantınızı kontrol edip yeniden deneyin. Oturumunuz hâlâ burada.',
    alreadySignedInHeading: 'Zaten Oturum Açıldı',
    alreadySignedInBody: 'Bu Hermes zaten bir Nous hesabıyla oturum açmış.',
    offer: {
      heading: 'Hermes’le Devam Edin',
      body: 'Ücretsiz kullanım hakkındasınız. Hermes’i kullanmaya devam ederseniz sınırlarla karşılaşmaya başlarsınız. Daha büyük bir hak için ücretsiz Nous hesabıyla oturum açın.',
      signIn: 'Oturum Açın',
      notNow: 'Şimdi Değil'
    },
    setupFailed: {
      gateClosed:
        'Hermes’in bu sürümü Nous hesabı olmadan başlatılamaz. Oturum açın veya bir hesap oluşturun; ücretsizdir ve yalnızca bir dakika sürer',
      paused:
        'Hermes’i oturum açmadan kullanma bir süreliğine duraklatıldı. Hermes kontrol etmeye devam edecek. Oturum açmak ücretsizdir ve hemen başlamanızı sağlar',
      rateLimited: wait =>
        `Şu anda çok sayıda kişi başlangıç yapıyor, bu nedenle Hermes ${wait} sonra yeniden deneyecek. Oturum açmak ücretsizdir ve beklemeyi atlar`,
      unreachable:
        'Hermes, Nous hizmetine ulaşamadı. İnternet bağlantınızı kontrol edin, ardından “Yeniden Deneyin”e dokunun. Veya şimdilik başka bir sağlayıcıya bağlanın',
      serverError:
        'Nous hizmetinde küçük bir aksaklık yaşandı. Birazdan “Yeniden Deneyin”e dokunun veya şimdilik başka bir sağlayıcıya bağlanın.',
      powRequired:
        'Nous sunucusu bir iş kanıtı istedi, ancak bu henüz Ajanınızda uygulanmıyor. Devam etmek için oturum açın veya ücretsiz bir Nous hesabı oluşturun',
      locked:
        'Bu oturum, oturum açmadan devam edemez. Devam etmek için oturum açın veya ücretsiz bir Nous hesabı oluşturun',
      generic:
        'Hermes oturum açmadan ücretsiz erişimi ayarlayamadı. Oturum açmak ücretsizdir veya başka bir sağlayıcı bağlayın',
      signInBelow: 'Oturum Açmak Ücretsizdir. Aşağıdan Nous’u Seçin',
      tryAgain: 'Yeniden Deneyin',
      retrying: 'Yeniden Deneniyor…'
    }
  },
  modelPicker: {
    title: 'Model Değiştirin',
    current: 'Geçerli:',
    unknown: '(Bilinmiyor)',
    search: 'Sağlayıcıları Ve Modelleri Filtreleyin…',
    noModels: 'Model Bulunamadı',
    addProvider: 'Sağlayıcı Ekleyin',
    loadFailed: 'Modeller yüklenemedi.',
    loadingIntoMemory: 'Belleğe Yükleniyor',
    downloading: 'İndiriliyor',
    localDownloadsHeading: 'Yerel',
    noAuthenticatedProviders: 'Kimliği Doğrulanmış Sağlayıcı Yok',
    pro: 'Pro',
    proNeedsSubscription: 'Pro Modeller Ücretli Nous Aboneliği Gerektirir',
    free: 'Ücretsiz',
    freeTier: 'Ücretsiz Katman',
    priceTitle: 'Milyon Token Başına Girdi / Çıktı Fiyatı',
    wasPrice: 'Önceki',
    customModel: 'Özel Model',
    addCustomModelAction: 'Özel Model Ekleyin…',
    customModelPlaceholder: 'Bir Model ID’si Yazın, Ör. openai/gpt-5',
    today: 'Bugün',
    week: 'Hafta',
    month: 'Ay',
    topTier: 'Büyük Modeller (Aylık)',
    included: 'Aşağıdaki tüm modeller dahildir',
    pausedRenewal: 'duraklatıldı: yenileme ödenmedi',
    pausedOther: 'duraklatıldı',
    includedUsedUp: 'Dahil kullanım tükendi',
    limitReached: name => `${name.charAt(0).toUpperCase()}${name.slice(1)} limiti doldu`,
    limitNames: {
      day: 'günlük',
      month: 'aylık',
      top_tier: 'aylık büyük model',
      week: 'haftalık'
    },
    limitThenCredits: 'ücretli modeller artık kredilerinizi kullanıyor (kullandıkça öde)',
    limitThenCreditsLarge: 'Büyük modeller artık kredilerinizi kullanıyor (kullandıkça öde)',
    limitThenWait: 'o zamana kadar sadece Ücretsiz modeller',
    limitThenWaitLarge: 'Büyük modeller o zamana kadar duraklatıldı',
    percentUsed: percent => `${percent} kullanıldı`,
    resetsIn: duration => `${duration} sonra yenileniyor`,
    usageLevels: {
      free: 'Ücretsiz',
      top_tier: 'Büyük'
    },
    sectionRecommended: 'Ã–nerilen',
    sectionOther: 'Diğer Modeller',
    largeFootnote: 'Büyük modeller ayrıca aylık büyük model limitinizi kullanır.'
  },
  modelVisibility: {
    title: 'Modeller',
    search: 'Modellerde Arayın',
    noAuthenticatedProviders: 'Kimliği Doğrulanmış Sağlayıcı Yok',
    addProvider: 'Sağlayıcı Ekleyin…',
    addCustomModel: 'Özel Model Ekleyin',
    removeCustomModel: 'Özel Modeli Kaldırın',
    resetToDefaults: 'Varsayılanlara Sıfırlayın',
    resetConfirm: 'Model Görünürlüğü Varsayılanlara Sıfırlansın mı?',
    resetDescription:
      'Gösterilen ve gizlenen model seçimleriniz temizlenir ve her sağlayıcının varsayılan listesi geri gelir. Eklediğiniz özel modeller korunur ve gösterilir.',
    resetAction: 'Sıfırlayın'
  },
  shell: {
    windowControls: 'Pencere Denetimleri',
    paneControls: 'Bölme Kontrolleri',
    appControls: 'Uygulama Kontrolleri',
    modelMenu: {
      pickDeferred: (model: string) => `${model} bir sonraki mesajınızdan itibaren geçerlidir`,
      search: 'Model Arayın',
      noModels: 'Model Bulunamadı',
      editModels: 'Modelleri Düzenleyin…',
      followDefault: 'Ayarlardaki Varsayılanı Kullanın',
      refreshModels: 'Modelleri Yenileyin',
      favorites: 'Favoriler',
      addFavorite: 'Favorilere Ekleyin',
      removeFavorite: 'Favorilerden Kaldırın',
      favoriteShortcut: '⇧ Tıklayın',
      fast: 'Hızlı',
      free: 'Ücretsiz',
      cacheRead: 'Önbellekten Okuma',
      priceTitle: (input, output, cache) =>
        `Girdi ${input}/Mtok · Çıktı ${output}/Mtok · Önbellekten Okuma ${cache}/Mtok`,
      localSetup: {
        title: 'Yerel Olarak Çalıştırın · Ücretsiz, Gizli',
        text: (model, size) => `${model} bu makineye uyar · ${size} indirme.`,
        action: 'Kurun'
      },
      limited: 'Sınırlı',
      limitedUntil: time => `${time} Tarihine Kadar Sınırlı`,
      limitedTip: (provider, time) =>
        `${provider} Kullanım Sınırına Ulaştı. ${time} İtibarıyla Sıfırlanır; Sonrası İçin Yine de Bir Model Seçebilirsiniz`,
      modelResets: time => `${time} Tarihinde Sıfırlanır`,
      modelLimitedTip: time =>
        `Bu Model Kendi Sınırına Ulaştı ve ${time} İtibarıyla Sıfırlanır. Buradaki Diğer Modeller Hâlâ Çalışır`,
      usageLeft: (percent, time) => `%${percent} kaldı · ${time} tarihinde sıfırlanır`,
      poolAccounts: count => `${count} Hesap`,
      poolLimited: (limited, total) => `${limited}/${total} Hesap Sınırlı`,
      poolAccount: number => `Hesap ${number}`,
      poolUnknown: 'Kullanım Bilgisi Kullanılamıyor',
      poolUnavailable: 'Yeniden Oturum Açın',
      usageTip: provider => `${provider} Kullanım Sınırına Yaklaşıyor`,
      usageWindow: (label, percent, time) => `${label}: %${percent} kaldı, ${time} tarihinde sıfırlanır`
    },
    modelOptions: {
      noOptions: 'Bu Model İçin Seçenek Yok',
      options: 'Seçenekler',
      thinking: 'Düşünme',
      fast: 'Hızlı',
      ultrafast: 'Ultra Hızlı',
      useStandardSpeed: 'Standart Hızı Kullanın',
      effort: 'Çaba',
      minimal: 'Asgari',
      low: 'Düşük',
      medium: 'Orta',
      high: 'Yüksek',
      xhigh: 'Çok Yüksek',
      max: 'Maksimum',
      ultra: 'Ultra',
      sendsOnRoute: level => `Bu Yolda ${level} Gönderir`,
      updateFailed: 'Model seçeneği güncellenemedi.',
      fastFailed: 'Hızlı mod güncellenemedi.'
    },
    gatewayMenu: {
      gateway: 'Ağ Geçidi',
      connected: 'Bağlı',
      connecting: 'Bağlanıyor',
      offline: 'Çevrimdışı',
      inferenceReady: 'Çıkarım Hazır',
      inferenceNotReady: 'Çıkarım Hazır Değil',
      checkingInference: 'Çıkarım Denetleniyor',
      disconnected: 'Bağlantı Kesildi',
      reconnectGateway: 'Ağ Geçidini Yeniden Bağlayın',
      openSystem: 'Sistem Panelini Açın',
      connection: label => `Bağlantı: ${label}`,
      recentActivity: 'Son Etkinlik',
      viewAllLogs: 'Tüm Günlükleri Görüntüleyin →',
      messagingPlatforms: 'Mesajlaşma Platformları'
    },
    approvalMode: {
      title: 'Onay Modu',
      ariaLabel: mode => `Onay Modu: ${mode}`,
      manual: 'Manuel',
      manualDescription: 'Onay gerektiren eylemlerden önce izin isteyin.',
      smart: 'Akıllı',
      smartDescription: 'Eylemleri otomatik olarak değerlendirir ve gerektiğinde sorar.',
      off: 'Kapalı',
      offDescription: 'Onay istemleri olmadan çalıştırın.'
    },
    statusbar: {
      unknown: 'bilinmiyor',
      restart: 'yeniden başlat',
      update: 'güncelle',
      updateInProgress: 'Güncelleme Sürüyor',
      commitsBehind: (count, branch) => `${branch} Dalının ${count} Commit Gerisinde`,
      releaseAvailable: tag => `Sürüm ${tag} Kullanılabilir`,
      desktopVersion: version => `Hermes Desktop v${version}`,
      backendVersion: version => `Arka Uç v${version}`,
      clientLabel: version => `istemci v${version}`,
      connectionSsh: host => `SSH: ${host}`,
      connectionRemote: host => `Uzak: ${host}`,
      connectionCloud: host => `Bulut: ${host}`,
      connectionCloudTooltip: host => `Hermes Cloud · ${host}.`,
      connectionSshTooltip: host => `SSH · ${host}`,
      connectionRemoteTooltip: host => `Uzak · ${host}`,
      backendLabel: version => `arka uç v${version}`,
      commit: sha => `commit ${sha}`,
      branch: branch => `dal ${branch}`,
      closeCommandCenter: 'Komut Merkezi’ni Kapatın',
      openCommandCenter: 'Komut Merkezi’ni Açın',
      showTerminal: 'Terminali Gösterin',
      hideTerminal: 'Terminali Gizleyin',
      gateway: 'Ağ Geçidi',
      backend: 'Arka Uç',
      messagingStopped: 'mesajlaşma durdu',
      messagingDegraded: name => `${name} çalışmıyor`,
      gatewayReady: 'hazır',
      gatewayNeedsSetup: 'kurulum gerekiyor',
      gatewayUnavailable: 'çıkarım kullanılamıyor',
      gatewayChecking: 'denetleniyor',
      gatewayConnecting: 'bağlanıyor',
      gatewayOffline: 'çevrimdışı',
      gatewayRestarting: 'yeniden başlatılıyor…',
      gatewayTitle: 'Ağ Geçidi',
      customizeTitle: 'Durum Çubuğunda Gösterin',
      hideStatusbar: 'Durum Çubuğunu Gizleyin',
      resetStatusbar: 'Varsayılanlara Sıfırlayın',
      toggleApprovalMode: 'Onaylar',
      toggleBackendVersion: 'Arka Uç Sürümü',
      toggleCacheHitRate: 'Önbellek İsabet Oranı',
      toggleCommandCenter: 'Komut Merkezi',
      toggleContextUsage: 'Bağlam ölçer',
      toggleRunningTimer: 'Tur Zamanlayıcısı',
      toggleSessionTimer: 'Oturum Zamanlayıcısı',
      toggleTerminal: 'Terminal',
      toggleTokensPerSecond: 'Saniyedeki Token',
      toggleVersion: 'Sürüm ve Güncellemeler',
      toggleFreeTier: 'Ücretsiz Katman',
      toggleWorkspace: 'Çalışma Alanı',
      cacheHitRateTitle:
        'Bu Oturumdaki İstem Önbelleği İsabet Oranı — Önbelleğe Alınan Token’lar Daha Ucuza Gelir, Bu Nedenle Yüksek Olması Daha Ekonomiktir',
      tokensPerSecondTitle: 'Son 10 model çağrısı üzerinden ortalama saniyedeki çıktı token sayısı',
      togglePlanUsage: 'Plan kullanımı',
      planUsageTitle: (used, resetsIn) =>
        `${used} plan kullanımınız kullanıldı${resetsIn ? ` · ${resetsIn} sonra yenilenir` : ''} · Faturalandırmayı aç`,
      agents: 'Ajanlar',
      closeAgents: 'Ajanları Kapatın',
      openAgents: 'Ajanları Açın',
      subagents: count => `${count} alt ajan`,
      failed: count => `${count} başarısız`,
      running: count => `${count} çalışıyor`,
      cron: 'Cron',
      openCron: 'Cron İşlerini Açın',
      webhooks: 'Webhook’lar',
      openWebhooks: 'Webhook’ları Açın',
      starmap: 'Bellek Grafiği',
      openStarmap: 'Bellek Grafiğini Açın',
      turnRunning: 'Çalışıyor',
      contextUsage: 'Bağlam kullanımı',
      compressions: count => `Sıkıştırmalar: ${count}`,
      systemResources: {
        title: 'Sistem Kaynakları',
        loading: 'Kaynaklar…',
        gpuUtilization: 'GPU Kullanımı',
        gpuMemory: 'GPU Belleği',
        ram: 'RAM',
        unifiedNote: 'Birleşik bellek — GPU ve sistem bu havuzu paylaşır',
        toggle: 'Sistem kaynakları'
      },
      contextUsagePanel: {
        categories: {
          conversation: 'Sohbet',
          mcp: 'MCP',
          memory: 'Bellek',
          rules: 'Kurallar',
          skills: 'Yetenekler',
          subagent_definitions: 'Alt Ajan Tanımları',
          system_prompt: 'Sistem İstemi',
          tool_definitions: 'Araç Tanımları'
        },
        empty: 'Henüz Bağlam Verisi Yok',
        loading: 'Dağılım Yükleniyor…',
        percentFull: percent => `%${percent} Dolu`,
        title: 'Bağlam Kullanımı',
        tokenSummary: (used, max) => `${used} / ${max} Token`
      },
      focusedSince: 'Odaklanma Süresi',
      focusedSinceTitle: 'Bu sohbetin odaklandığı süre — bir turun ne kadar sürdüğü değil',
      yoloOn: 'YOLO açık — tehlikeli komutlar otomatik onaylanıyor. Genel olarak değiştirmek için Shift+tıklayın',
      yoloOff: 'YOLO kapalı. Genel olarak değiştirmek için Shift+tıklayın',
      modelNone: 'yok',
      noModel: 'model yok',
      switchModel: 'Modeli Değiştirin',
      openModelPicker: 'Model Seçiciyi Açın',
      modelPinned: 'Sizin sabitlediğiniz; yeni sohbetler Ayarlar varsayılanı yerine bunu kullanır',
      modelTitle: (provider, model) => `Model · ${provider}: ${model}`,
      providerModelTitle: (provider, model) => `${provider} · ${model}`
    }
  },
  rightSidebar: {
    terminalReadOnly: 'Salt Okunur Çıktı',
    terminalReadOnlyHelp:
      'İstemlere yanıt vermek için arka plan komutunu durdurun ve yeni bir terminalde çalıştırın. Yeni terminal ayrı bir kabuk açar; bu sürece bağlanmaz.',
    terminalOpenInteractive: 'Yeni Terminal Açın',
    aria: 'Sağ Kenar Çubuğu',
    panelsAria: 'Sağ Kenar Çubuğu Panelleri',
    files: 'Dosya Sistemi',
    terminal: 'Terminal',
    noFolderSelected: 'Klasör Seçilmedi',
    changeCwdTitle: 'Çalışma Dizinini Değiştirin',
    remotePickerTitle: 'Uzak Klasör Seçin',
    remotePickerDescription: 'Bağlı arka uçtaki klasörlere göz atın.',
    remotePickerSelect: 'Klasör Seçin',
    remotePickerNewFolder: 'Yeni Klasör',
    remotePickerFolderName: 'Klasör Adı',
    remotePickerCreateFolder: 'Klasör Oluşturun',
    remotePickerInvalidFolderName: 'Eğik çizgi içermeyen tek bir klasör adı girin',
    remotePickerCreateFolderFailed: error => `Klasör oluşturulamadı (${error}).`,
    folderTip: cwd => `${cwd}`,
    openFolder: 'Klasör Açın',
    refreshTree: 'Ağacı Yenileyin',
    collapseAll: 'Tüm Klasörleri Daraltın',
    showIgnored: 'Git Tarafından Yoksayılan Dosyaları Gösterin',
    hideIgnored: 'Git Tarafından Yoksayılan Dosyaları Gizleyin',
    previewUnavailable: 'Önizleme Kullanılamıyor',
    couldNotPreview: path => `${path} Önizlenemedi`,
    noProjectTitle: 'Proje Yok',
    noProjectBody: 'Dosyalarına göz atmak ve değişiklikleri incelemek için bir proje açın.',
    noProjectOpen: 'Açık Proje Yok',
    noDiffs: 'Fark Yok',
    unreadableTitle: 'Okunamıyor',
    unreadableBody: error => `Bu klasör okunamadı (${error}).`,
    emptyTitle: 'Boş',
    emptyBody: 'Bu klasör boş.',
    treeErrorTitle: 'Ağaç hatası',
    treeErrorBody: 'Dosya ağacı bu klasörü işlerken bir hatayla karşılaştı.',
    tryAgain: 'Yeniden Deneyin',
    loadingTree: 'Dosya Ağacı Yükleniyor',
    loadingFiles: 'Dosyalar Yükleniyor',
    terminalHide: 'Terminali Gizleyin',
    terminalsAria: 'Terminaller',
    terminalNew: 'Yeni Terminal',
    terminalCloseOthers: 'Diğerlerini Kapatın',
    terminalCloseAll: 'Tümünü Kapatın',
    terminalDropUploadFailed: (name: string) => `${name} yüklenemedi`,
    terminalDropTooLargeTitle: 'Yüklemek için çok büyük',
    terminalDropTooLarge: (names: string, limit: string) => `Her dosya en fazla ${limit} olabilir. Yüklenmeyenler: ${names}`,
    terminalDropControlTitle: 'Terminale yazılmadı',
    terminalDropControl: (paths: string) => `Bu adlar, kabuğun tuş olarak işleyeceği kontrol karakterleri içeriyor: ${paths}`,
    terminalDropUnquotable: (shell: string, paths: string) => `Bu adları ${shell} içinde güvenli biçimde yazmanın yolu yok: ${paths}`,
    addToChat: 'Sohbete Ekleyin'
  },
  preview: {
    tab: 'Önizleme',
    pin: 'Çalışma Alanına Sabitleyin',
    unpin: 'Çalışma Alanından Ayırın',
    closePane: 'Önizleme Bölmesini Kapatın',
    loading: 'Önizleme Yükleniyor',
    unavailable: 'Önizleme Kullanılamıyor',
    missingTarget: 'Bu Yol Bu Bilgisayarda Mevcut Değil',
    missingTitle: 'Dosya Artık Mevcut Değil',
    missingBody: label =>
      `${label} silindi, taşındı veya geçici konumu temizlendi. Bu sekme bir sonraki başlatmada geri yüklenmeyecek.`,
    opening: 'Açılıyor…',
    hide: 'Gizleyin',
    openPreview: 'Önizlemeyi Açın',
    openInBrowser: 'Tarayıcıda Açın',
    openInExternal: 'Harici Uygulamada Açın',
    popIn: 'İçeri Alın',
    popOut: 'Dışarı Açın',
    linkHint: 'Önizleme bölmesi için ⌘/Ctrl ile tıklayın.',
    sourceLineTitle: 'Seçmek İçin Tıklayın · Genişletmek İçin Shift Tuşuyla Tıklayın · Giriş Alanına Sürükleyin',
    source: 'KAYNAK',
    renderedPreview: 'ÖNİZLEME',
    diff: 'FARK',
    unknownSize: 'Bilinmeyen Boyut',
    binaryTitle: 'Bu Bir İkili Dosyaya Benziyor',
    binaryBody: label => `${label} önizlemesi okunamayan metin gösterebilir.`,
    largeTitle: 'Bu Dosya Büyük',
    largeBody: (label, size) => `${label} boyutu ${size}. Hermes yalnızca ilk 512 KB’yi gösterecek.`,
    previewAnyway: 'Yine De Önizleyin',
    truncated: 'İlk 512 KB Gösteriliyor',
    noInlineTitle: 'Satır İçi Önizleme Yok',
    noInlineBody: mimeType => `${mimeType} yine de bağlam olarak eklenebilir.`,
    edit: 'Düzenleyin',
    editing: 'Düzenleniyor',
    unsavedChanges: 'Kaydedilmemiş Değişiklikler',
    saveFailed: message => `Kaydedilemedi: ${message}.`,
    saveScopeChanged: 'Bu Taslağı Kaydetmek İçin Özgün Bağlantıya Ve Profile Geri Dönün',
    diskChangedTitle: 'Dosya Diskte Değişti',
    diskChangedBody:
      'Bu dosya siz açtıktan sonra değişti. Sürümünüzle üzerine yazılsın mı, yoksa düzenlemelerinizden vazgeçip yeniden mi yüklensin?',
    overwrite: 'Üzerine Yazın',
    discardReload: 'Vazgeçin Ve Yeniden Yükleyin',
    console: {
      deselect: 'Girdinin Seçimini Kaldırın',
      select: 'Girdi Seçin',
      copyFailed: 'Konsol çıktısı kopyalanamadı.',
      copyEntry: 'Bu Girdiyi Kopyalayın',
      sendEntry: 'Bu Girdiyi Sohbete Gönderin',
      messages: count => `${count} konsol mesajı`,
      resize: 'Önizleme Konsolunu Yeniden Boyutlandırın',
      title: 'Önizleme Konsolu',
      selected: count => `${count} Seçildi`,
      sendToChat: 'Sohbete Gönderin',
      copySelected: 'Seçilenleri Panoya Kopyalayın',
      copyAll: 'Tümünü Panoya Kopyalayın',
      copy: 'Kopyalayın',
      clear: 'Temizleyin',
      empty: 'Henüz Konsol Mesajı Yok',
      promptHeader: 'Önizleme Konsolu:',
      sentTitle: 'Sohbete Gönderildi',
      sentMessage: count => `${count} günlük girdisi mesaj oluşturucuya eklendi.`
    },
    web: {
      appFailedToBoot: 'Önizleme uygulaması başlatılamadı.',
      serverNotFound: 'Sunucu Bulunamadı',
      remoteLoopback:
        'Bu adres, ajanınızı çalıştıran makineyi işaret ediyor, bu makineyi değil. Tarayıcı paneli sayfaları yerel olarak yüklediğinden, uzak bir geliştirme sunucusu için port yönlendirmesi veya erişilebilir bir ana bilgisayar adı gerekir',
      failedToLoad: 'Önizleme yüklenemedi.',
      tryAgain: 'Yeniden Deneyin',
      restarting: 'Hermes Yeniden Başlatıyor…',
      askRestart: 'Hermes’ten Sunucuyu Yeniden Başlatmasını İsteyin',
      lookingRestart: taskId => `Hermes Yeniden Başlatılacak Bir Önizleme Sunucusu Arıyor (${taskId})`,
      restartingTitle: 'Önizleme Sunucusu Yeniden Başlatılıyor',
      restartingMessage: 'Hermes arka planda çalışıyor. İlerlemeyi önizleme konsolundan takip edin.',
      startRestartFailed: message => `Sunucu yeniden başlatma işlemi başlatılamadı: ${message}.`,
      restartFailed: 'Sunucu yeniden başlatılamadı.',
      hideConsole: 'Önizleme Konsolunu Gizleyin',
      showConsole: 'Önizleme Konsolunu Gösterin',
      hideDevTools: 'Önizleme DevTools’unu Gizleyin',
      openDevTools: 'Önizleme DevTools’unu Açın',
      goBack: 'Geri',
      goForward: 'İleri',
      reload: 'Sayfayı Yeniden Yükleyin',
      address: 'Adres',
      addressPlaceholder: 'Adres Girin',
      blankPageBody: 'Gezinmek için yukarıya bir adres yazın veya Hermes’ten bir sayfa açmasını isteyin.',
      finishedRestarting: message => `Hermes Önizleme Sunucusunu Yeniden Başlatmayı Tamamladı: ${message}`,
      failedRestarting: message => `Sunucu yeniden başlatılamadı: ${message}.`,
      unknownError: 'bilinmeyen hata',
      restartedTitle: 'Önizleme Sunucusu Yeniden Başlatıldı',
      reloadingNow: 'Önizleme Şimdi Yeniden Yükleniyor',
      restartFailedTitle: 'Önizleme yeniden başlatılamadı.',
      restartFailedMessage: 'Hermes sunucuyu yeniden başlatamadı.',
      stillWorking:
        'Hermes hâlâ çalışıyor ancak henüz bir yeniden başlatma sonucu gelmedi. Sunucu komutu ön planda çalışıyor olabilir',
      workspaceReloading: 'Çalışma Alanı Değişti, Önizleme Yeniden Yükleniyor',
      fileChanged: url => `Dosya Değişti, Önizleme Yeniden Yükleniyor: ${url}`,
      filesChanged: (count, url) => `${count} Dosya Değişikliği, Önizleme Yeniden Yükleniyor: ${url}`,
      watchFailed: message => `Önizleme dosyası izlenemedi: ${message}.`,
      moduleMimeDescription:
        'Modül betikleri yanlış MIME türüyle sunuluyor. Bu genellikle projenin geliştirme sunucusu yerine statik bir dosya sunucusunun Vite/React uygulamasını sunduğu anlamına gelir.',
      loadFailedConsole: (code, message) => `Yükleme başarısız (${code}): ${message}.`,
      unreachableDescription: 'Önizleme sayfasına ulaşılamadı.',
      openTarget: url => `${url} Öğesini Açın`,
      fallbackTitle: 'Önizleme',
      annotate: 'Not Ekleyin',
      annotateOn: 'Notlandırmayı Durdurun',
      annotateNeedPage: 'Önce Uygulama İçi Tarayıcıda Bir Sayfa Açın',
      annotateFailed: 'Notlandırma modu başlatılamadı.',
      commenting: 'Yorum Yapılıyor',
      addComments: count => `${count} Yorum Ekleyin`,
      commentPlaceholder: 'Yorum Ekleyin…',
      commentTitle: n => `Yorum ${n}`,
      saveComment: 'Kaydedin',
      cancelComment: 'Yorumu İptal Edin',
      embeddedPreviewHint: 'Bazı siteler gömülü önizlemeleri engeller. Orijinal sayfayı bir tarayıcı sekmesinde açın.'
    }
  },
  interfaceMode: {
    title: 'Arayüz Modu',
    hint: 'Hermes’in neler yapabileceğini değil, nelerin gösterildiğini değiştirir.',
    sessionNote:
      'Basit mod tarafından ayarlandı. Buradaki değişiklik bu oturum boyunca geçerli olur; kalıcı hale getirmek için Gelişmiş moda geçin',
    simple: {
      label: 'Basit',
      description: 'Hermes ile konuşmak için. Kenar çubuğu ve sohbet; terminal, dosya veya fark panelleri yok.'
    },
    advanced: {
      label: 'Gelişmiş',
      description:
        'Geliştiriciler için. Terminal, dosyalar, farklar, durum çubuğu ve düzenler, kendi ayarladığınız gibi.'
    }
  },
  zones: {
    showTabStrip: 'Sekmeleri Gösterin',
    hideTabStrip: 'Sekmeleri Gizleyin',
    showStripTab: title => `${title} Gösterin`,
    hideStripTab: title => `${title} Gizleyin`,
    zoneMenuLabel: title => `${title} için Bölge Seçenekleri`,
    lastTabKeptTitle: 'Son Sekme Kalır',
    lastTabKeptBody:
      'Bu bölgenin en az bir görünür sekmesi olmalı. Önce başka bir sekmeyi gösterin veya kenar çubuğunun tamamını daraltın.',
    toggleStripTab: title => `${title} Sekmesini Açın/Kapatın`,
    minimize: 'Küçültün',
    restore: 'Geri Yükleyin',
    closeRunningTitle: 'Çalışan Sekme Kapatılsın mı?',
    closeRunningBody:
      'Bu sohbet hâlâ çalışıyor (veya girdinizi bekliyor). Sekmeyi kapatmak onu gizler — oturum ilerlemesini korur ve kenar çubuğundan yeniden açılabilir.',
    closeRunningConfirm: 'Sekmeyi Kapatın',
    reload: 'Yeniden Yükleyin',
    closeOthers: 'Diğerlerini Kapatın',
    closeToRight: 'Sağdakileri Kapatın',
    closeAll: 'Tümünü Kapatın',
    newSessionTab: 'Yeni Oturum Sekmesi',
    newTab: 'Yeni Sekme',
    pluginDisabled: pluginId => `“${pluginId}” Eklentisi Devre Dışı`,
    pluginDisabledBody: 'Bölmeyi geri getirmek için Yetenekler → Eklentiler bölümünde yeniden etkinleştirin.',
    missingPane: paneId => `Eksik Bölme: ${paneId}`,
    editTitle: 'Düzenler',
    editHint: 'Bir düzen seçin veya bölmeleri bölgeler arasında sürükleyin.',
    reset: 'Sıfırlayın',
    templates: 'Şablonlar',
    custom: 'Özel',
    newGridLayout: 'Yeni Izgara Düzeni',
    saveCurrentAs: 'Geçerli Düzeni Şablon Olarak Kaydedin',
    nameLayoutPlaceholder: 'Bu Düzeni Adlandırın…',
    deletePreset: name => `${name} Silin`,
    zoneEditorTitle: 'Bölge Düzenleyicisi',
    editorHintPre: 'bölmek için tıklayın ·.',
    editorHintPost:
      'çizgiyi değiştirir · bölgeler arasında sürükleyerek birleştirin · paylaşılan kenarları sürükleyerek yeniden boyutlandırın.',
    templateColumns: 'Sütunlar',
    templateRows: 'Satırlar',
    templateGrid: 'Izgara',
    templatePriority: 'Öncelik',
    zoneTag: index => `Bölge ${index}`,
    mergeZones: count => `${count} Bölgeyi Birleştirin`,
    customZoneName: count => `Özel ${count} Bölgesi`,
    layoutNamePlaceholder: fallback => `Düzen Adı (${fallback})`,
    saveApply: 'Kaydedin ve Uygulayın',
    notExpressible: 'Bu Düzen Birbirine Kenetleniyor (Fırıldak) — Henüz İç İçe Bölmeler Olarak İfade Edilemiyor',
    zoneCount: count => `${count} Bölge`,
    tabCount: count => `${count} Sekme`
  },
  contextMenu: {
    link: {
      openInApp: 'Uygulama İçi Tarayıcıda Açın',
      openExternal: 'Harici Tarayıcıda Açın',
      copyUrl: 'URL’yi Kopyalayın',
      copyResolvedUrl: 'Çözümlenmiş URL’yi Kopyalayın'
    },
    image: {
      copyImage: 'Görseli Kopyalayın',
      copyImageAddress: 'Görsel Adresini Kopyalayın',
      saveImageAs: 'Görseli Farklı Kaydedin…'
    },
    edit: {
      cut: 'Kesin',
      paste: 'Yapıştırın',
      selectAll: 'Tümünü Seçin',
      addToDictionary: 'Sözlüğe Ekleyin'
    },
    page: {
      copyPageUrl: 'Sayfa URL’sini Kopyalayın',
      inspectElement: 'Öğeyi İnceleyin'
    }
  },
  assistant: {
    thread: {
      loadingSession: 'Oturum Yükleniyor',
      showEarlier: 'Önceki Mesajları Gösterin',
      loadingResponse: 'Hermes bir yanıt yükleniyor',
      loadingLocalModel: (model: string) => `${model} belleğe yükleniyor`,
      processingPrompt: 'İstem işleniyor',
      resumeWhenBackgroundDone: (count: number) => `${count} arka plan görevi bitince devam edilecek`,
      thinking: 'Düşünüyor',
      thought: 'Düşünce',
      thoughtBriefly: 'Kısa düşündü',
      thoughtFor: (duration: string) => `${duration} düşündü`,
      turnDuration: (duration: string) => `Bu tur ${duration} sürdü`,
      today: (time: string) => `Bugün, ${time}`,
      yesterday: (time: string) => `Dün, ${time}`,
      copy: 'Kopyalayın',
      refresh: 'Yenileyin',
      moreActions: 'Daha Fazla Eylem',
      branchNewChat: 'Yeni Sohbette Dallanın',
      react: 'Tepki Verin',
      dismissError: 'Hatayı Kapatın',
      responseStopped: 'Yanıt durduruldu',
      errorLayers: {
        auth: 'Oturum Açma Sorunu',
        billing: 'Kredi Tükendi',
        disk: 'Disk Dolu',
        endpoint: 'Model Sunucunuza Ulaşılamıyor',
        gateway: 'Hermes Bir Sorunla Karşılaştı',
        generic: 'Hermes Bu Yanıtı Tamamlayamadı',
        provider: 'Yapay Zekâ Hizmeti Bir Hata Döndürdü',
        runtime: 'Hermes Bir Sorunla Karşılaştı',
        streaming: 'Yanıt Kesildi'
      },
      errorLayerBodies: {
        auth: 'Yapay zekâ hizmeti oturum açmanızı reddetti. Bu sağlayıcının kimlik bilgilerini kontrol edin, ardından mesajınızı yeniden gönderin',
        billing:
          'Hesabınızda bu sağlayıcı için kredi kalmadı. Yükleme yapın veya sağlayıcıyı değiştirin, ardından yeniden gönderin',
        disk: 'Diskiniz dolu olduğu için Hermes bu konuşmayı kaydedemedi. Biraz yer açın, ardından yeniden deneyin',
        endpoint:
          'Hermes özel model sunucunuza ulaşamıyor. Çalıştığını kontrol edin, ardından mesajınızı yeniden gönderin',
        gateway:
          'Hermes bu yanıtı başlatırken dahili bir sorunla karşılaştı. Mesajınızı yeniden gönderin; sorun sürerse tanılama bilgilerini gönderin',
        generic: 'Hermes yanıt verirken bir sorun oluştu. Yeniden deneyin veya sorun sürerse ayrıntıları kopyalayın',
        provider:
          'Yapay zekâ hizmeti bu isteği tamamlayamadı. Bir süre sonra yeniden deneyin veya sağlayıcıyı değiştirin',
        runtime:
          'Hermes bu yanıtı başlatırken dahili bir sorunla karşılaştı. Mesajınızı yeniden gönderin; sorun sürerse tanılama bilgilerini gönderin',
        streaming: 'Yanıt tamamlanmadan bağlantı kesildi. Tekrar göndermek için yeniden deneyin'
      },
      errorCodes: {
        auth: {
          title: (provider: string) => `${provider} oturum açmanızı reddetti`,
          body: (provider: string) =>
            `${provider} için kaydedilen kimlik bilgileri kabul edilmedi. Bunları Ayarlar'da düzeltin veya sağlayıcıyı değiştirin, ardından mesajınızı yeniden gönderin.`
        },
        auth_permanent: {
          title: (provider: string) => `${provider} oturum açmanızı reddetti`,
          body: (provider: string) =>
            `${provider} için kaydedilen kimlik bilgileri geçersiz veya iptal edildi. Bunları güncelleyin veya sağlayıcıyı değiştirin, ardından mesajınızı yeniden gönderin.`
        },
        billing: {
          title: 'Kredi Kalmadı',
          body: (provider: string) =>
            `${provider} hesabınızda kredi kalmadı. Yükleme yapın veya sağlayıcıyı değiştirin, ardından yeniden gönderin.`
        },
        rate_limit: {
          title: 'Yapay Zekâ Hizmeti Meşgul',
          body: (provider: string) =>
            `${provider} şu anda istekleri sınırlıyor. Bir dakika bekleyin, ardından yeniden deneyin.`
        },
        upstream_rate_limit: {
          title: 'Yapay Zekâ Hizmeti Meşgul',
          body: (provider: string) =>
            `${provider} şu anda istekleri sınırlıyor. Bir dakika bekleyin, ardından yeniden deneyin.`
        },
        overloaded: {
          title: 'Yapay Zekâ Hizmeti Aşırı Yüklendi',
          body: (provider: string) =>
            `${provider} şu anda sorun yaşıyor. Birazdan yeniden deneyin veya sağlayıcıyı değiştirin.`
        },
        server_error: {
          title: 'Yapay Zekâ Hizmetinde Hata Oluştu',
          body: (provider: string) =>
            `${provider} bir sunucu hatası döndürdü. Birazdan yeniden deneyin veya sağlayıcıyı değiştirin.`
        },
        timeout: {
          title: 'Yapay Zekâ Hizmetine Ulaşılamıyor',
          body: (provider: string) =>
            `${provider} erişilemedi veya zamanında yanıt vermedi. İnternet bağlantınızı kontrol edin, ardından yeniden deneyin.`
        },
        stream_drop: {
          title: 'Yanıt Kesildi',
          body: 'Bağlantı, yanıt tamamlanmadan koptu. Yeniden göndermek için yeniden deneyin.'
        },
        no_reply: {
          title: 'Yanıt Tamamlanmadı',
          body: 'Hermes bu turu yanıt vermeden sonlandırdı. Yeniden göndermek için yeniden deneyin.'
        },
        upstream_blocked: {
          title: 'Bir Güvenlik Duvarı İsteği Engelledi',
          body: (provider: string) =>
            `${provider} önündeki bir güvenlik duvarı veya CDN, istek modele ulaşmadan engelledi — anahtarınız büyük olasılıkla sorunsuz. Ayarlar'da sağlayıcının extra_headers seçeneğiyle bir User-Agent başlığı ayarlayın veya sağlayıcıyı değiştirin, ardından mesajınızı yeniden gönderin.`
        },
        ssl_cert_verification: {
          title: 'Güvenli Bağlantı Doğrulanamadı',
          body: (provider: string) =>
            `Hermes, ${provider} ile güvenli bağlantıyı doğrulayamadı. Ağ veya proxy ayarlarınızı kontrol edin veya sağlayıcıyı değiştirin, ardından mesajınızı yeniden gönderin.`
        },
        context_overflow: {
          title: 'Bu Sohbet Çok Uzun',
          body: 'Sohbet artık modele sığmıyor. Sıkıştırın veya yeni bir sohbet başlatın, ardından yeniden gönderin.'
        },
        payload_too_large: {
          title: 'Bu Mesaj Çok Büyük',
          body: 'İstek model için çok büyüktü. Sohbeti sıkıştırın veya yeni bir sohbet başlatın, ardından yeniden gönderin.'
        },
        model_not_found: {
          title: 'Bu Model Kullanılamıyor',
          body: (provider: string) =>
            `${provider} bu modeli hesabınız için sunmuyor. Başka bir model seçin, ardından mesajınızı yeniden gönderin.`
        },
        provider_policy_blocked: {
          title: 'Bu Model Hesap Ayarlarınızda Engellendi',
          body: (provider: string) =>
            `${provider}, hesabınızın veri veya gizlilik ayarları gereği bu isteği yönlendirmiyor. Başka bir model seçin veya sağlayıcıyı değiştirin.`
        },
        content_policy_blocked: {
          title: 'Yapay Zekâ Hizmeti Bu İsteği Reddetti',
          body: (provider: string) =>
            `${provider} bu mesajı yanıtlamak istemedi. Mesajı düzenleyin ve yeniden gönderin.`
        },
        format_error: {
          title: 'Yapay Zekâ Hizmeti İsteği Reddetti',
          body: (provider: string) =>
            `${provider} isteğin bu biçimde oluşturulmasını kabul etmedi. Sağlayıcıyı değiştirin veya inceleyebilmemiz için tanılama gönderin.`
        },
        truncated: {
          title: 'Yanıt Kısaltıldı',
          body: 'Model bitirmeden durdu. Tam bir yanıt almak için yeniden deneyin.'
        },
        invalid_response: {
          title: 'Yapay Zekâ Hizmeti Okunamaz Bir Yanıt Gönderdi',
          body: (provider: string) => `${provider}, Hermes'in okuyamadığı bir şey döndürdü. Birazdan yeniden deneyin.`
        },
        empty_response: {
          title: 'Yapay Zekâ Hizmeti Boş Bir Yanıt Gönderdi',
          body: (provider: string) => `${provider} bu mesaja hiçbir şey döndürmedi. Birazdan yeniden deneyin.`
        },
        loop_error: {
          title: 'Hermes Bir Döngüye Takıldı',
          body: 'Yanıt aynı adımları tekrarladı, bu nedenle Hermes onu durdurdu. Yeniden deneyin veya tekrar olursa yeni bir sohbet başlatın.'
        },
        SESSION_OWNER_BUSY: {
          title: 'Hermes Bu Sohbette Meşgul',
          body: 'Burada başka bir tur çalışıyor ve mesajınızı kuyruğa ekleyemedi. Hiçbir şey gönderilmedi. O tur bittikten sonra yeniden deneyin.'
        },
        cron_session_read_only: {
          title: 'Bu Sohbet Bir Cron İşine Ait',
          body: 'Yalnızca bu görevi çalıştırır, bu nedenle mesajınız çalıştırılmadı. Göndermek için yeni bir sohbet başlatın.'
        },
        session_read_only: {
          title: 'Bu sohbet salt okunur',
          body: 'Bu, Hermes’in gösterebildiği ama sürdüremediği kayıtlı bir geçmiş; bu yüzden mesajınız çalıştırılmadı. Göndermek için yeni bir sohbet başlatın.'
        },
        launch_credentials_unavailable: {
          title: 'Bu sohbetin API anahtarı değişti',
          body: 'Bu sohbet, o zamandan beri değişen veya kaldırılan bir API anahtarıyla başladı, bu yüzden mesajınız gönderilmedi. Açık bir sohbet kendiliğinden başka bir anahtara geçmez. Güncel anahtarınızı kullanmak için yeni bir oturum başlatın.'
        },
        workspace_unavailable: {
          title: 'Bu sohbetin klasörü artık yok',
          body: 'Bu sohbetin çalıştığı klasör taşındı veya silindi, bu nedenle mesajınız çalıştırılmadı. Klasörü yeniden oluşturun veya sohbet için başka bir tane atamak üzere Projeye taşı seçeneğini kullanın, ardından tekrar deneyin.'
        },
        SESSION_OWNER_UNCONFIRMED: {
          title: 'Mesajınız Zaten Kuyrukta Olabilir',
          body: 'Ağ geçidi mesajınızı zamanında onaylamadı. Kuyruğa alınmışsa, önceki tur bittikten veya çözüldükten sonra çalışır. Yeniden göndermeden önce sohbeti kontrol edin.'
        },
        SESSION_NOT_OWNED: {
          title: 'Bu Sohbet Başka Bir Yerde Açık',
          body: 'Bu sohbet şu anda başka bir Hermes penceresinde veya terminalinde açık. Orada kapatın ve mesajınızı yeniden gönderin ya da burada yeni bir sohbet başlatın.'
        },
        disk_full: {
          title: 'Disk Dolu',
          body: 'Diskiniz dolu olduğu için Hermes bu sohbeti kaydedemedi. Biraz yer açın, ardından yeniden deneyin.'
        },
        free_tier_disabled: {
          title: 'Oturum Açmadan Sohbet Etme Şu Anda Kapalı',
          body: 'Sohbet etmeye devam etmek için bir Nous hesabıyla oturum açın, ücretsizdir.'
        },
        free_tier_rate_limited: {
          title: 'Oturum Açmadan Sohbet Etme Hakkınızı Kullandınız',
          body: 'Çok yakında yenilenecek. Daha yüksek bir kota için bir Nous hesabıyla oturum açın, ücretsizdir.'
        },
        free_tier_at_capacity: {
          title: 'Oturum Açmadan Sohbet Etme Şu Anda Çok Yoğun',
          body: 'Sırayı atlamak için oturum açın, ücretsizdir, ya da birazdan yeniden deneyin.'
        },
        free_tier_model_not_free: {
          title: 'Bu Model Oturum Açmadan Kullanılamıyor',
          body: 'Hermes şimdilik ücretsiz modeli kullanıyor. Daha fazla model için bir Nous hesabıyla oturum açın, ücretsizdir.'
        },
        free_tier_route: {
          title: 'Hermes Bu Rotada Ücretsiz Modele Ulaşamadı',
          body: 'Bir Nous hesabıyla oturum açın, ücretsizdir, ya da NOUS_INFERENCE_BASE_URL ayarını kontrol edin.'
        },
        free_tier_outage: {
          title: 'Ücretsiz Model Şu Anda Yanıt Vermekte Zorlanıyor',
          body: 'Bir dakika sonra mesajınızı yeniden göndermeyi deneyin.'
        },
        free_tier_refused: {
          title: 'Hermes Bunu Oturum Açmadan Gönderemedi',
          body: 'Bir Nous hesabıyla oturum açmak ücretsizdir.'
        },
        usage_window: {
          title: 'Dahil kullanım tükendi',
          body: 'Planınızın dahil kullanımı sıfırlanana kadar tükendi. Devam etmek için /topup üzerinden kredi ekleyin.'
        }
      },
      errorAuthKinds: {
        api_key: {
          title: (provider: string) => `${provider} API anahtarınızı reddetti`,
          body: (provider: string) =>
            `${provider} için kaydedilen anahtar geçersiz veya iptal edildi. Güncelleyin, ardından yeniden deneyin.`
        },
        oauth: {
          title: (provider: string) => `${provider} oturum açmanızın süresi doldu`
        }
      },
      errorDetails: 'Ayrıntılar',
      errorGenericProvider: 'Yapay Zekâ Hizmeti',
      errorToastTitle: 'Hermes yanıtı tamamlayamadı',
      errorRetry: 'Yeniden Deneyin',
      errorLimitResets: (time: string) => `Sınır ${time} saatinde sıfırlanır`,
      errorRetryAtReset: (time: string) => `Sınır sıfırlandığında yeniden deneyin (${time})`,
      errorRetryScheduled: (time: string, wait: string) => `${time} saatinde yeniden denenecek — ${wait} içinde`,
      errorRetryScheduledCancel: 'İptal',
      errorStartNewSession: 'Yeni Oturum Başlatın',
      errorSwitchProvider: 'Sağlayıcıyı Değiştirin',
      errorChooseModel: 'Bir Model Seçin',
      errorSwitchToModel: (model, note) => (note ? `${model} modeline geç (${note})` : `${model} modeline geç`),
      errorSwitchModelFailed: 'Model değiştirilemedi',
      errorUseCredits: 'Kredilerle Devam Et özelliğini açın',
      errorUseCreditsFailed: 'Kredilerle Devam Et özelliği açılamadı',
      errorAddCredits: 'Kredi ekleyin',
      errorOpenBillingSettings: 'Faturalandırma ayarlarını aç',
      errorCompressConversation: 'Sohbeti Sıkıştırın',
      errorCompressFailed: 'Sohbet sıkıştırılamadı',
      errorOpenHermesFolder: 'Hermes Klasörünü Açın',
      errorOpenHermesFolderFailed: 'Hermes klasörü açılamadı',
      errorUpdateApiKey: 'API Anahtarını Güncelleyin',
      errorSignInAgain: (provider: string) => `${provider} ile yeniden oturum açın`,
      errorSignInFreeTier: 'Nous hesabıyla oturum açın',
      errorOauthExpired: (provider: string) =>
        `${provider} oturum açmanızın süresi doldu veya iptal edildi. Sohbet etmeye devam etmek için yeniden oturum açın.`,
      errorOpenLogs: 'Günlükleri Açın',
      errorOpenLogsFailed: 'Günlük klasörü açılamadı',
      errorOpenDesktopLogs: 'Masaüstü Günlüklerini Açın',
      errorCopyDiagnostics: 'Hata Ayrıntılarını Kopyalayın',
      errorSendDiagnostics: 'Tanılamayı Gönderin',
      filesChanged: (count: number) => (count === 1 ? '1 dosya değişti' : `${count} dosya değişti`),
      reviewChanges: 'İnceleyin',
      readAloudFailed: 'Okuma başarısız oldu',
      preparingAudio: 'Ses hazırlanıyor…',
      stopReading: 'Okumayı Durdurun',
      readAloud: 'Sesli Okuyun',
      copyFullResponse: 'Yanıtın Tamamını Kopyalayın',
      readAloudFullResponseHint: 'Shift+tıklama: yanıtın tamamını okuyun',
      editMessage: 'Mesajı Düzenleyin',
      expandMessage: 'Mesajı Genişletin',
      scrollToBottom: 'Aşağı Kaydırın',
      stop: 'Durdurun',
      restorePrevious: 'Önceki Kontrol Noktasını Geri Yükleyin',
      restoreCheckpoint: 'Kontrol Noktasını Geri Yükleyin',
      restoreFromHere: 'Kontrol Noktasını Geri Yükleyin — bu istemden yeniden çalıştırın',
      restoreTitle: 'Bu kontrol noktasına geri yüklensin mi?',
      restoreBody: 'Bu istemden sonraki her şey sohbetten silinir ve istem buradan yeniden çalışır.',
      restoreConfirm: 'Geri Yükleyin ve Yeniden Çalıştırın',
      restoreNext: 'Sonraki Kontrol Noktasını Geri Yükleyin',
      goForward: 'İleri Git',
      sendEdited: 'Düzenlenmiş Mesajı Gönderin',
      attachingFile: 'Ekleniyor…'
    },
    approval: {
      gatewayDisconnected:
        'Hermes şu anda çevrimdışı. Komut hâlâ yanıtınızı bekliyor (onay zaman aşımına kadar). Yeniden bağlanın, ardından tekrar gönderin',
      sendFailed: 'Yanıtınız gönderilemedi.',
      reconnect: 'Yeniden Bağlanın',
      timedOutSystemLine:
        'Onay zaman aşımına uğradı — komut çalıştırılmadı. Hermes’ten tekrar denemesini isteyin veya Ayarlar → Güvenlik → Onay zaman aşımı bölümünde sınırı yükseltin',
      openSafetySettings: 'Güvenlik Ayarlarını Açın',
      run: 'Çalıştırın',
      command: 'Komut',
      commandDetails: 'Komut ayrıntıları',
      moreOptions: 'Daha Fazla Onay Seçeneği',
      allowSession: 'Bu Oturuma İzin Verin',
      alwaysAllowMenu: 'Her Zaman İzin Verin…',
      jumpToApproval: 'Onay Gerekli',
      reject: 'Reddedin',
      alwaysTitle: 'Bu Komuta Her Zaman İzin Verilsin Mi?',
      alwaysDescription: pattern =>
        `Bu, “${pattern}” kalıbını kalıcı izin listenize (~/.hermes/config.yaml) ekler. Hermes bu tür komutlar için bir daha sormaz — ne bu oturumda ne de gelecekteki oturumlarda.`,
      alwaysAllow: 'Her Zaman İzin Verin'
    },
    clarify: {
      notReady: 'Netleştirme İsteği Henüz Hazır Değil',
      gatewayDisconnected: 'Hermes şu anda çevrimdışı. Yeniden bağlanın, ardından tekrar gönderin',
      sendFailed: 'Netleştirme yanıtı gönderilemedi.',
      loadingQuestion: 'Soru Yükleniyor…',
      other: 'Diğer (Yanıtınızı Yazın)',
      placeholder: 'Yanıtınızı Yazın…',
      skip: 'Atlayın',
      skipped: 'Atlandı',
      noAnswer: 'Yanıt Yok',
      confirmAndContinueLabel: 'Onaylayın ve Devam Edin',
      singleSelectHint: 'Birini seçin.',
      multiSelectHint: 'Uygun olanların tümünü seçin.',
      oneQuestion: '1 Soru',
      questionProgress: (answered, total) => `${total} Sorudan ${answered} Yanıtlandı`,
      notDelivered:
        'Bu soru uygulamaya ulaşmadı, bu nedenle burada yanıtlanamıyor. Turu bitirmek için Durdur’a basın, ardından sohbette yanıtlayın'
    },
    themePicker: {
      accent: 'Vurgu Rengi',
      layout: 'Düzen',
      mode: 'Görünüm',
      customColor: 'Özel Renk',
      themeAccent: 'Tema Varsayılanı',
      basic: 'Temel',
      basicDetail: 'Hermes ile konuşmak için.',
      elite: 'Elit',
      eliteDetail: 'Geliştiriciler için: terminal, dosyalar, farklar.',
      noPick: 'Seçim Yok'
    },
    catalogInstall: {
      preparing: 'Kurulum Hazırlanıyor…',
      install: 'Kurun',
      advanced: 'Gelişmiş',
      skip: 'Atlayın',
      installing: 'Kuruluyor…',
      installed: 'Kurulu',
      notInstalled: 'Kurulu Değil',
      failed: 'Başarısız',
      showNames: 'Adları Gösterin',
      hideNames: 'Adları Gizleyin',
      skill: name => `Yetenek ${name}`,
      kind: {
        plugin: 'Eklenti',
        skill: 'Yetenek'
      },
      tier: {
        official: 'Resmî',
        verified: 'Doğrulanmış',
        community: 'Topluluk'
      },
      targetProfile: profile => `${profile} Profilinize Kurulur`,
      sendFailed: 'Yanıtınız gönderilemedi. Tekrar deneyin.',
      commitLabel: 'Commit',
      subdirLabel: 'Klasör',
      securityHeading: 'Güvenlik',
      scan: {
        passed: 'Tarama Geçti',
        warnings: 'Tarama Uyarı Buldu',
        failed: 'Tarama başarısız oldu.'
      },
      requirementsLabel: 'Gereksinimler',
      requiresHermes: range => `Hermes ${range}`,
      envVar: name => `${name} Ortam Değişkeni`,
      credentialsHeading: 'Kimlik Bilgileri',
      phase: {
        downloading: 'İndiriliyor…',
        python_packages: 'Python Paketleri Kuruluyor…',
        loading_tools: 'Araçları Yükleniyor…'
      },
      serverNotConnected: (server, reason) => `MCP Sunucusu ${server} Bağlı Değil: ${reason}`,
      notEnabled: 'Kurulu Ancak Açık Değil',
      missingEnv: names => `Kurulumu Tamamlamak İçin ${names} Ayarlayın`,
      alreadyInstalled: 'Zaten Kurulu; Olduğu Gibi Bırakıldı'
    },
    mcpSetup: {
      installTitle: 'MCP Sunucuları Ekleyin',
      enableTitle: 'MCP Sunucularını Etkinleştirin',
      authorizeTitle: 'MCP Sunucularını Yetkilendirin',
      installAction: 'Kurun',
      enableAction: 'Etkinleştirin',
      authorizeAction: 'Yetkilendirin',
      installed: server => `${server} Kuruldu`,
      enabled: server => `${server} Etkinleştirildi`,
      authorized: server => `${server} Yetkilendirildi`,
      failed: server => `${server} için kurulum başarısız oldu.`,
      toolCount: count => `${count} Araç`,
      envRequired: 'Önce Gerekli Kimlik Bilgilerini Doldurun',
      sendFailed: 'MCP kurulum yanıtı gönderilemedi.',
      reloadFailed: 'Sunucu kaydedildi, ancak MCP araçları yeniden yüklenemedi — bir sonraki oturumda yüklenir.',
      gatewayDisconnected: 'Hermes şu anda çevrimdışı. Yeniden bağlanın, ardından tekrar gönderin'
    },
    tool: {
      copyCode: 'Kodu Kopyalayın',
      renderingImage: 'Görsel Oluşturuluyor',
      copyOutput: 'Çıktıyı Kopyalayın',
      copyCommand: 'Komutu Kopyalayın',
      copyContent: 'İçeriği Kopyalayın',
      copyUrl: 'URL’yi Kopyalayın',
      copyResults: 'Sonuçları Kopyalayın',
      copyQuery: 'Sorguyu Kopyalayın',
      copyFile: 'Dosyayı Kopyalayın',
      copyPath: 'Yolu Kopyalayın',
      failedCalls: count => `${count} araç çağrısı başarısız oldu.`,
      skillActivity: {
        loading: 'Yetenek Yükleniyor',
        loaded: 'Yetenek Yüklendi',
        loadFailed: 'Yetenek yüklenemedi.',
        readingResource: 'Yetenek Kaynağı Okunuyor',
        readResource: 'Yetenek Kaynağı Okundu',
        resourceFailed: 'Yetenek kaynağı okunamadı.',
        listing: 'Yetenekler Listeleniyor',
        listed: 'Yetenekler Listelendi',
        listFailed: 'Yetenekler listelenemedi.',
        unavailable: 'Yetenek Sonucu Kullanılamıyor'
      },
      outputAlt: 'Araç Çıktısı',
      rawResponse: 'Ham Yanıt',
      copyActivity: 'Etkinliği Kopyalayın',
      recoveredOne: '1 Başarısız Adımdan Sonra Toparlandı',
      recoveredMany: count => `${count} Başarısız Adımdan Sonra Toparlandı`,
      failedOne: '1 adım başarısız oldu.',
      failedMany: count => `${count} adım başarısız oldu.`,
      statusRunning: 'Çalışıyor',
      statusError: 'Hata',
      statusRecovered: 'Toparlandı',
      statusDone: 'Tamamlandı',
      resultUnavailable: 'Sonuç Kullanılamıyor',
      resultInterrupted: 'Kesildi',
      memoryWriteNoted: 'Belleğe Yazma Kaydedildi',
      actions: {
        read: 'Okundu',
        reading: 'Okunuyor',
        opened: 'Açıldı',
        opening: 'Açılıyor',
        failedToOpen: 'Açılamadı.',
        searched: 'Arama Yapıldı',
        searching: 'Aranıyor',
        ran: 'Çalıştırıldı',
        running: 'Çalışıyor',
        ranCode: 'Kod Çalıştırıldı',
        runningCode: 'Betik Çalıştırılıyor'
      },
      prefixes: {
        browser: 'Tarayıcı',
        web: 'Web'
      },
      titleTemplates: {
        actionCommand: (action, command) => `${action} ${command}`,
        actionQuoted: (action, value) => `${action} “${value}”`,
        actionTarget: (action, target) => `${action} ${target}`,
        prefixedDone: (prefix, action) => `${prefix} ${action}`,
        runningPrefixedTool: (prefix, action) => `__arg0__ __arg1__ Çalıştırılıyor`,
        runningTool: action => `__arg0__ Çalıştırılıyor`
      },
      titles: {
        browser_click: {
          done: 'Sayfa Öğesine Tıklandı',
          pending: 'Sayfa Öğesine Tıklanıyor',
          pendingAction: 'Tıklanıyor'
        },
        browser_fill: {
          done: 'Form Alanı Dolduruldu',
          pending: 'Form Alanı Dolduruluyor',
          pendingAction: 'Dolduruluyor'
        },
        browser_navigate: {
          done: 'Sayfa Açıldı',
          pending: 'Sayfa Açılıyor',
          pendingAction: 'Açılıyor'
        },
        browser_snapshot: {
          done: 'Sayfa Anlık Görüntüsü Alındı',
          pending: 'Sayfa Anlık Görüntüsü Alınıyor',
          pendingAction: 'Görüntü Alınıyor'
        },
        browser_take_screenshot: {
          done: 'Ekran Görüntüsü Alındı',
          pending: 'Ekran Görüntüsü Alınıyor',
          pendingAction: 'Görüntü Alınıyor'
        },
        browser_type: {
          done: 'Sayfaya Yazı Yazıldı',
          pending: 'Sayfaya Yazı Yazılıyor',
          pendingAction: 'Yazılıyor'
        },
        clarify: {
          done: 'Soru Soruldu',
          pending: 'Soru Soruluyor',
          pendingAction: 'Soruluyor'
        },
        cronjob: {
          done: 'Cron İşi',
          pending: 'Cron İşi Planlanıyor',
          pendingAction: 'Planlanıyor'
        },
        edit_file: {
          done: 'Dosya Düzenlendi',
          pending: 'Dosya Düzenleniyor',
          pendingAction: 'Düzenleniyor'
        },
        execute_code: {
          done: 'Kod Çalıştırıldı',
          pending: 'Betik Çalıştırılıyor',
          pendingAction: 'Betik Çalıştırılıyor'
        },
        image_generate: {
          done: 'Görsel Oluşturuldu',
          pending: 'Görsel Oluşturuluyor',
          pendingAction: 'Oluşturuluyor'
        },
        list_files: {
          done: 'Dosyalar Listelendi',
          pending: 'Dosyalar Listeleniyor',
          pendingAction: 'Listeleniyor'
        },
        memory: {
          done: 'Belleğe Kaydedildi',
          pending: 'Belleğe Kaydediliyor',
          pendingAction: 'Kaydediliyor'
        },
        patch: {
          done: 'Dosyaya Yama Uygulandı',
          pending: 'Dosyaya Yama Uygulanıyor',
          pendingAction: 'Yama Uygulanıyor'
        },
        read_file: {
          done: 'Dosya Okundu',
          pending: 'Dosya Okunuyor',
          pendingAction: 'Okunuyor'
        },
        search_files: {
          done: 'Dosyalarda Arama Yapıldı',
          pending: 'Dosyalarda Arama Yapılıyor',
          pendingAction: 'Aranıyor'
        },
        session_search_recall: {
          done: 'Oturum Geçmişinde Arama Yapıldı',
          pending: 'Oturum Geçmişinde Arama Yapılıyor',
          pendingAction: 'Aranıyor'
        },
        terminal: {
          done: 'Komut Çalıştırıldı',
          pending: 'Komut Çalıştırılıyor',
          pendingAction: 'Çalıştırılıyor'
        },
        todo: {
          done: 'Yapılacaklar Güncellendi',
          pending: 'Yapılacaklar Güncelleniyor',
          pendingAction: 'Güncelleniyor'
        },
        vision_analyze: {
          done: 'Görsel Analiz Edildi',
          pending: 'Görsel Analiz Ediliyor',
          pendingAction: 'Analiz Ediliyor'
        },
        web_extract: {
          done: 'Web Sayfası Okundu',
          pending: 'Web Sayfası Okunuyor',
          pendingAction: 'Okunuyor'
        },
        web_search: {
          done: 'Web’de Arama Yapıldı',
          pending: 'Web’de Arama Yapılıyor',
          pendingAction: 'Aranıyor'
        },
        write_file: {
          done: 'Dosya Düzenlendi',
          pending: 'Dosya Düzenleniyor',
          pendingAction: 'Düzenleniyor'
        }
      }
    }
  },
  prompts: {
    gatewayDisconnected: 'Hermes şu anda çevrimdışı. Yeniden bağlanın ve ardından tekrar gönderin',
    reconnect: 'Yeniden Bağlanın',
    sudoSendFailed: 'sudo parolası gönderilemedi.',
    secretSendFailed: 'Gizli değer gönderilemedi.',
    sudoTitle: 'Yönetici Parolası',
    sudoDesc:
      'sudo parolanızı girmeden önce komutu inceleyin. Parolanız, komutu çalıştıran ajana gönderilir ve bu oturum için önbelleğe alınır.',
    sudoCommandUnavailable: 'Bu ajan komutu sağlamadı. Sohbette doğrulayamıyorsanız iptal edin',
    sudoInstallDesc:
      'Hermes’in, ağ geçidi ana bilgisayarına Bot Screen paketlerini (TigerVNC + Xfce) yüklemek için sudo parolanıza ihtiyacı var. Parola yalnızca o ana bilgisayara gönderilir.',
    sudoPlaceholder: 'sudo Parolası',
    secretTitle: 'Gizli Değer Gerekli',
    secretDesc: 'Devam etmek için Hermes’in bir kimlik bilgisine ihtiyacı var.',
    secretPlaceholder: 'Gizli Değer',
    vaultUnlockSendFailed: 'Ana parola gönderilemedi.',
    vaultUnlockTitle: name => `${name} Kilidini Açın`,
    vaultUnlockDesc: name =>
      `Ajan, ${name} içinde kayıtlı bir girişle bir siteye oturum açmak istiyor. Bu oturum için kilidi açmak üzere ana parolanızı girin — parola doğrudan bu makinedeki ${name} uygulamasına gider ve asla saklanmaz veya ajana gösterilmez.`,
    vaultUnlockPlaceholder: 'Ana parola',
    vaultUnlockKeepLocked: 'Kilitli Tutun',
    vaultUnlockConfirm: 'Kilidi Açın',
    vaultSaveSendFailed: 'Oturum açma bilgileri kaydedilemedi.',
    vaultSaveTitle: site => `${site} Oturum Açma Bilgileri Kaydedilsin Mi?`,
    vaultSaveDesc: origin =>
      `Hermes, ${origin} adresinde bir oturum açma sayfasına ulaştı ancak bunun için kayıtlı bir girişi yok. Bilgileri burada bir kez girin; bu makinede şifrelenir ve model parolayı hiç görmeden sayfaya doldurulur.`,
    vaultSaveIdentifierLabel: 'E-posta Veya Kullanıcı Adı',
    vaultSaveIdentifierPlaceholder: 'siz@example.com',
    vaultSavePasswordPlaceholder: 'Parola',
    vaultSaveFootnote: 'Kaydedilmiş girişleri Ayarlar → Parolalar ve Oturum Açmalar bölümünden yönetin',
    vaultSaveDecline: 'Kaydetmeyin',
    vaultSaveConfirm: 'Kaydedin ve Oturum Açın',
    vaultCodeSendFailed: 'Kod gönderilemedi.',
    vaultCodeTitle: site => `${site} İçin Doğrulama Kodu`,
    vaultCodeDesc: site =>
      `${site} tek kullanımlık bir kod istiyor (kısa mesaj, e-posta veya kimlik doğrulayıcı uygulama). Kodu buraya girin; Hermes sayfaya yazar ve model kodu hiçbir zaman görmez.`,
    vaultCodeLabel: 'Kod',
    vaultCodeFootnote:
      'İpucu: kimlik doğrulayıcı anahtarını Ayarlar → Parolalar ve Oturum Açmalar bölümünde bu oturum açmayla birlikte kaydedin; Hermes kodları sizin için girer',
    vaultCodeSkip: 'Atlayın',
    vaultCodeConfirm: 'Kodu Girin'
  },
  desktop: {
    attachFailed: 'Ekleme başarısız oldu',
    dropFilesMore: (count: number) => `ve ${count} tane daha`,
    audioReadFailed: 'Kaydedilen ses okunamadı.',
    sessionUnavailable: 'Oturum Kullanılamıyor',
    createSessionFailed: 'Yeni oturum oluşturulamadı.',
    promptFailed: 'İstem başarısız.',
    providerCredentialRequired: 'İlk mesajınızı göndermeden önce bir sağlayıcı kimlik bilgisi ekleyin',
    emptySlashCommand: 'Boş Eğik Çizgi Komutu',
    slashCommandIgnoredTitle: 'Komut Gönderilmedi',
    slashCommandIgnoredBody:
      'Eğik çizgi komutları eklerle birlikte kullanılamaz. Eki kaldırın veya komutu ayrı gönderin.',
    desktopCommands: 'Masaüstü Komutları',
    skillCommandsAvailable: count => `${count} Yetenek Komutu Kullanılabilir`,
    warningLine: message => `Uyarı: ${message}`,
    yoloArmed: 'Bu Sohbet İçin YOLO Etkinleştirildi',
    yoloOff: 'YOLO Kapalı',
    yoloSystem: active => `Bu Oturum İçin YOLO Açık`,
    yoloTitle: 'YOLO',
    yoloToggleFailed: 'YOLO değiştirilemedi.',
    profileStatus: current =>
      `Profil: ${current}. Başka bir profilde sohbet başlatmak için /profile <name> komutunu veya "Yeni oturum" seçicisini kullanın`,
    unknownProfile: 'Bilinmeyen Profil',
    noProfileNamed: (target, available) => `"${target}" adlı profil yok. Kullanılabilir: ${available}`,
    newChatsProfile: name => `Yeni sohbetler ${name} profilini kullanacak`,
    setProfileFailed: 'Profil ayarlanamadı.',
    sttDisabled: 'Konuşmadan metne dönüştürme ayarlarda devre dışı',
    stopFailed: 'Durdurma başarısız.',
    regenerateFailed: 'Yeniden oluşturma başarısız.',
    editFailed: 'Düzenleme başarısız.',
    editTurnUnavailable: 'Bu tur artık sunucu geçmişinde yok (sıkıştırılarak kaldırılmış olabilir)',
    resumeFailed: 'Sürdürme başarısız.',
    readOnlyTranscriptTitle: 'Salt Okunur Açıldı',
    readOnlyTranscriptBody:
      'Bağlı hiçbir arka uç henüz bu eski sohbeti sahiplenmiyor, bu nedenle salt okunur bir döküm olarak açıldı. Geçmişi bozulmadı; bir arka uç sahiplenene kadar gönderim devre dışı.',
    readOnlyTranscriptSendBlocked: 'Bu sohbet salt okunur döküm olarak açık — gönderim devre dışı',
    resumeStrandedTitle: 'Bu Oturum Yüklenemedi',
    resumeStrandedBody:
      'Bu oturumla bağlantı kurulamadı ve otomatik yeniden denemeler vazgeçti. Ağ geçidinin çalıştığını kontrol edip yeniden deneyin.',
    poolSlotTimeoutBody:
      'Bu bilgisayarın sınırı için aynı anda çok fazla bot çalışıyor. Ayarlar → Gelişmiş bölümünden sınırı yükseltin veya biri bitene kadar bekleyip yeniden deneyin.',
    poolSlotTimeoutOpenSettings: 'Gelişmiş Ayarları Açın',
    resumeRetry: 'Yeniden Deneyin',
    nothingToBranch: 'Dallandırılacak Bir Şey Yok',
    branchNeedsChat: 'Dallandırmadan önce bir sohbet başlatın veya sürdürün',
    sessionBusy: 'Oturum Meşgul',
    branchStopCurrent: 'Bu sohbeti dallandırmadan önce geçerli turu durdurun',
    branchNoText: 'Bu iletide dallandırılacak metin yok.',
    branchTitle: n => `Taslak: Dal #${n}`,
    branchFailed: 'Dallandırma başarısız.',
    deleteFailed: 'Silme başarısız.',
    archived: 'Arşivlendi',
    archiveFailed: 'Arşivleme başarısız.',
    restored: 'Geri Yüklendi',
    unarchiveFailed: 'Arşivden çıkarma başarısız.',
    cwdChangeFailed: 'Çalışma dizini değiştirilemedi.',
    cwdStagedTitle: 'Çalışma Dizini Hazırlandı',
    cwdStagedMessage:
      'Çalışma dizini değişikliklerini bu etkin oturuma uygulamak için masaüstü arka ucunu yeniden başlatın.',
    modelSwitchConfirmBody: 'Bu model değişikliği onay gerektiriyor.',
    modelSwitchConfirmLabel: 'Yine de Değiştirin',
    modelSwitchConfirmTitle: model => `${model} Modeline Geçilsin Mi?`,
    modelSwitchConfirmTitleFallback: 'Model Değiştirilsin Mi?',
    modelSwitchFailed: 'Model değiştirilemedi.',
    modelSwitchKeepLabel: 'Geçerli Modeli Koruyun',
    modelSwitchStaleNotice: 'Seçim değişti — model değişikliği uygulanmadı.',
    hydrationSyncing: profile => `${profile} Eşitleniyor…`,
    sessionExported: 'Oturum Dışa Aktarıldı',
    sessionExportFailed: 'Oturum dışa aktarılamadı.',
    imageSaved: 'Görsel Kaydedildi',
    downloadStarted: 'İndirme Başladı',
    restartToUseSaveImage: 'Görseli Kaydet’i Kullanmak İçin Hermes Desktop’ı Yeniden Başlatın',
    restartToSaveImages: 'Görselleri Kaydetmek İçin Hermes Desktop’ı Yeniden Başlatın',
    imageDownloadFailed: 'Görsel indirilemedi.',
    openImage: 'Görseli Açın',
    downloadImage: 'Görseli İndirin',
    savingImage: 'Görsel Kaydediliyor',
    zoomIn: 'Yakınlaştırın',
    zoomOut: 'Uzaklaştırın',
    resetZoom: 'Yakınlaştırmayı Sıfırlayın',
    imagePreviewFailed: 'Görsel önizlemesi başarısız.',
    imageAttach: 'Görsel Ekleme',
    imageWriteFailed: 'Görsel diske yazılamadı.',
    imageAttachFailed: 'Görsel eklenemedi.',
    pastedContent: 'Yapıştırılan İçerik',
    pasteAttachFailed: 'Yapıştırılan metin eklenemedi.',
    attachImages: 'Görselleri Ekleyin',
    clipboard: 'Pano',
    noClipboardImage: 'Panoda Görsel Bulunamadı',
    clipboardPasteFailed: 'Panodan yapıştırma başarısız.',
    dropFiles: 'Dosyaları Bırakın',
    handoff: {
      pickPlatform: 'Bir Hedef Seçin',
      success: platform => `${platform} üzerine devredildi. İstediğiniz zaman buradan sürdürebilirsiniz`,
      systemNote: platform => `↻ ${platform} üzerine devredildi — istediğiniz zaman buradan sürdürebilirsiniz`,
      failed: error => `Devir başarısız: ${error}.`,
      timedOut:
        'Hermes mesajlaşma bağlantınıza ulaşamadı. Ayarlar → Mesajlaşma bölümünden başlatın ve devri yeniden deneyin',
      startMessaging: 'Mesajlaşmayı Başlatın'
    }
  },
  tips: {
    close: 'Bu İpucunu Bir Daha Göstermeyin',
    items: {
      'new-session': {
        title: 'Sıfırdan Başlayın',
        text: 'Yeni bir sohbet kendi bağlamına, terminaline ve çalışma dizinine sahip olur.'
      },
      skills: {
        title: 'Bir Kez Öğretin',
        text: 'Yetenekler, Hermes’in iş gerektirdiğinde yüklediği talimat klasörleridir.'
      },
      messaging: {
        title: 'Masanızdan Uzaktaki Hermes',
        text: 'Telegram, Discord, Slack ve daha fazlasını bağlayın — aynı ajan, aynı bellek.'
      },
      artifacts: {
        title: 'Hermes’in Oluşturduğu Her Şey',
        text: 'Her oturumdaki görseller, dosyalar ve bağlantılar tek bir yerde dizinlenir.'
      },
      cron: {
        title: 'Kendi Kendine Çalışan İşler',
        text: 'Bir istemi saatlik, gecelik veya Cron ifadesiyle zamanlayın.'
      },
      'command-palette': {
        title: 'Her Şey için Tek Kutu',
        text: 'Oturumlar, ayarlar, yetenekler ve komutların tümü komut paletinden çalıştırılabilir.'
      },
      profiles: {
        title: 'Profiller Ayrıdır',
        text: 'Her biri kendi Hermes’idir — kendi anahtarları, kendi belleği, kendi oturumları.'
      },
      'composer-mentions': {
        title: 'Ekleyin ve Komut Verin',
        text: 'Bir dosyayı konuşmaya eklemek için @, komut çalıştırmak için / yazın.'
      },
      'local-runtime-update': {
        title: 'Yerel Motor Güncellemesi Mevcut',
        text: 'Yerel modellerinizi çalıştıran motoru güncelleyin. Etkin yerel istekler kesintiye uğrayabilir.',
        action: 'Şimdi Güncelleyin'
      },
      'right-pane': {
        title: 'Çalışma Bölmesi',
        text: 'Dosyalar, terminal, inceleme ve uygulama içi tarayıcı sağ tarafı paylaşır.'
      }
    }
  },
  errors: {
    genericFailure: 'Bir Sorun Oluştu',
    boundaryTitle: 'Arayüzde Bir Sorun Oluştu',
    boundaryDesc: 'Görünüm beklenmeyen bir hatayla karşılaştı. Sohbetleriniz ve ayarlarınız güvende.',
    boundaryDetails: 'Ayrıntılar',
    sendDiagnostics: 'Tanılamayı Gönderin',
    reloadWindow: 'Pencereyi Yeniden Yükleyin',
    openLogs: 'Günlükleri Açın'
  },
  ui: {
    search: {
      clear: 'Aramayı Temizleyin'
    },
    logs: {
      bottom: 'Günlüğün Sonu',
      search: 'Günlüklerde Arayın…',
      top: 'Günlüğün Başı'
    },
    pagination: {
      label: 'Sayfalama',
      previous: 'Önceki',
      previousAria: 'Önceki Sayfaya Gidin',
      next: 'Sonraki',
      nextAria: 'Sonraki Sayfaya Gidin'
    },
    sidebar: {
      title: 'Kenar Çubuğu',
      description: 'Mobil kenar çubuğunu görüntüler.',
      toggle: open => `Kenar Çubuğunu Gösterin`
    }
  },
} satisfies TranslationOverrides

export const tr = defineLocale(trOverrides)
