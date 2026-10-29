import type { GatewayHostTranslations } from './types_gateway_host'

// Settings › Gateways copy where the connection cannot change, spread into tr.ts.
export const trGatewayHost: GatewayHostTranslations = {
  unavailableTitle: 'Ağ Geçidi Ayarları Kullanılamıyor',
  unavailableDesc:
    'Bağlantı ayarları yalnızca Hermes’i çalıştıran bilgisayardaki Hermes Desktop uygulamasından değiştirilebilir.',
  webappHostTitle: 'Hermes sunucusu',
  webappHostDesc:
    'Web Uygulaması her zaman kendisini sunan Hermes sunucusunu kullanır. Ağ geçidini değiştirmek, Hermes Cloud’a giriş yapmak veya kayıtlı bağlantıları yönetmek için Hermes Desktop uygulamasını kullanın.',
  webAccess: {
    title: 'Web erişimi',
    intro:
      'Bu bilgisayardaki Hermes’i telefonunuzdan veya başka bir bilgisayardan Nous hesabınızla giriş yaparak açın. Giriş yapan herkes bu bilgisayarda komut çalıştırabilir.',
    failed: 'Web erişimi değiştirilemedi',
    running: 'Çalışıyor',
    stopped: 'Durduruldu',
    starting: 'Başlatılıyor',
    stopping: 'Durduruluyor',
    restartNeeded: 'Yeniden başlatma gerekiyor',
    unavailable: 'Kullanılamıyor',
    notRunningDetail: 'Hermes’i başka bir cihazdan açmak için başlatın.',
    needsNous: 'Önce Sağlayıcılar bölümünden Nous hesabınıza giriş yapın.',
    runningLan: 'Bu adresi aynı ağdaki bir cihazda açın.',
    runningPublic: 'URL’niz üzerinden sunuluyor.',
    runningLocal:
      'Yalnızca bu bilgisayar açabilir. Diğer cihazlardan açmak için durdurun, ardından yeniden başlatın.',
    pendingOn: 'Kaydedildi. Ağ geçidi yeniden başladığında web uygulamasını sunacak.',
    pendingOff: 'Kapatıldı, ancak ağ geçidi yeniden başlayana kadar web uygulamasını sunmaya devam ediyor.',
    unavailableDetail: reason => `Ağ geçidi web uygulamasını sunamadı: ${reason}`,
    restartBusy:
      'Kaydedildi. Bir sohbet çalıştığı için ağ geçidi yeniden başlatılmadı. Sohbet bittiğinde Ağ geçidini yeniden başlat seçeneğini kullanın.',
    restartFailed:
      'Kaydedildi, ancak ağ geçidi yeniden başlatılamadı. Yeniden denemek için Ağ geçidini yeniden başlat seçeneğini kullanın.',
    restartFailedBecause: reason => `Ağ geçidi yeniden başlatılamadı: ${reason}`,
    startTimedOut: 'Ağ geçidi web uygulamasını 90 saniye içinde sunmadı.',
    stopTimedOut: 'Ağ geçidi web uygulamasını 90 saniye içinde durdurmadı.',
    start: 'Başlatın',
    stop: 'Durdurun',
    restartGateway: 'Ağ geçidini yeniden başlatın',
    modeLan: 'Bu ağ',
    modeLanDetail: url => `Wi-Fi ağınızdaki cihazlar ${url} adresini açar. Yalnızca güvendiğiniz bir ağda kullanın.`,
    lanUnencrypted: 'Bağlantı şifrelenmiyor: bu ağdaki diğer kişiler gönderip aldıklarınızı okuyabilir.',
    noLan: 'Diğer cihazların erişebileceği bir ağ adresi yok.',
    modePublic: 'Kendi URL’im',
    modePublicDetail: port =>
      `Zaten çalıştırdığınız bir HTTPS adresi (örneğin Tailscale Serve veya bir tünel) http://127.0.0.1:${port} adresine yönlendirir.`
  }
}
