export interface HelpTopic {
  id: string;
  title: string;
  short_description: string;
  content: string;
  icon: string;
  order: number;
}

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: "sektor-gercekleri",
    title: "Kargo Şirketlerinin Çalışma Modeli ve Sektör Gerçekleri",
    short_description: "Pandemi sonrası değişen iş yükü, personel dinamikleri ve şube işleyişinin perde arkası.",
    icon: "briefcase",
    order: 1,
    content: `## Sektörün Gerçek Sorunu: Personel Sirkülasyonu

Kargo sektöründeki memnuniyetsizliğin ana kaynağı personel eksikliğidir. Düşük maaş politikası ve ağır fiziksel tempo, personelin sürekli değişmesine neden olur. Bölgeyi tanımadan işten ayrılan her personel, kargoların gecikmesine veya yanlış adrese gitmesine yol açan bir zinciri başlatır.

## Operasyonel Süreçte Neden Aksaklık Yaşanır?

Kargo yükünün pandemiyle beraber 3 katına çıkması, altyapısı ve personeli hazır olmayan şirketleri kapasite aşımı sorunuyla karşı karşıya bırakmıştır:

- **📈 Aşırı İş Yükü:** Personel başına düşen kargo sayısının artması, dikkat dağınıklığına ve fiziksel yorgunluğa bağlı hataları (yanlış adres, hasarlı koli) beraberinde getirir.
- **📍 Bölge Tecrübesi:** Adresleri ezberlemek zaman alır. Deneyimli personelin istifası, o bölgedeki dağıtım kalitesini doğrudan düşürür.
- **🏬 Şube Baskısı:** Bölge müdürlükleri şubelere tüm kargoları dağıtma baskısı yapar. Kasıtlı bekletme yoktur; yaşanan gecikmeler tamamen yetişilememekten kaynaklıdır.

## Google Puanları Neden Hep Düşük?

Hemen hemen her kargo şirketinin puanı çok düşüktür. Bunun sebebi, sektörün gerçeklerinin (yoğunluk, personel yetersizliği) bilinmemesidir. Hiçbir şirket kasten verimsiz çalışmak istemez; düşük puanlar aslında sistemin insan gücüyle yetişemediği o devasa hacmin bir yansımasıdır.

> **Kargolojik Notu:** Kargo süreçlerinde yaşanan sorunların çözümü, personelin iş yükünün dengelenmesi ve maaş politikalarının iyileştirilmesinden geçer. Kullanıcı olarak sabırlı olmak ve şube ile sağlıklı iletişim kurmak, sorunu çözmenin en hızlı yoludur.`
  },
  {
    id: "hasar-tutanak",
    title: "Hasar ve Tutanak Prosedürü",
    short_description: "Gönderinin hasarlı olması durumunda izlenmesi gereken yasal prosedürler.",
    icon: "alert-triangle",
    order: 2,
    content: `## ⚠️ Altın Kural: Hasarlı Paketi Teslim Almayın!

Kargo dış ambalajında gözle görülür bir hasar (ezilme, ıslanma, yırtılma) mevcutsa paketi kesinlikle teslim almayınız. Paketin teslim alınması, gönderinin sağlam ve eksiksiz bir şekilde ulaştığının yasal olarak kabul edilmesi anlamına gelmektedir.

## Tutanak Yetkisi ve Prosedür

Sektörel uygulamada sıklıkla karşılaşılan yanılgının aksine, kuryelerin resmi tutanak düzenleme yetkisi bulunmamaktadır. Tutanak tanzim etme yetkisi münhasıran ilgili kargo şubesine aittir.

1. Hasarlı paketi teslim almayarak kuryeye iade sürecini başlatması gerektiğini bildirin.
2. Paketin şubeye geri dönmesiyle birlikte, şube yetkilileri tarafından durum tespit edilerek resmi "Hasar Tespit Tutanağı" düzenlenmelidir.
3. Tutanak tutulmadan şubeden çıkan paketlerde tüm sorumluluk alıcıya geçmektedir.

> **Resmi Not:** 6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca, kargo şirketleri taşıma sırasında meydana gelen zararlardan doğrudan sorumludur. Ancak bu sorumluluğun belgelendirilmesi için şube onaylı tutanak şarttır.`
  },
  {
    id: "gizli-hasar",
    title: "Gizli Hasar ve Tazminat Prosedürü",
    short_description: "Dış ambalajı hasarsız olup, içeriği zarar görmüş gönderilerde hak arama rehberi.",
    icon: "eye-off",
    order: 3,
    content: `## Şube Savunması: "Ambalaj Sağlamdı"

Şubelerin "ambalaj sağlam, sorumluluk kabul etmiyoruz" beyanı, gizli hasar durumlarında her zaman geçerli bir savunma değildir. Eğer ürün faturası varsa ve hasar kullanım hatasından kaynaklanmıyorsa, tazmin süreci yasal haklar çerçevesinde takip edilmelidir.

## A. E-Ticaret Alışverişleri

Satın alınan ürün bir e-ticaret platformu üzerinden gelmişse, hasar tespit edildiği an satın alınan platform üzerinden "İade Talebi" başlatılmalıdır. Bu süreçte muhatabınız kargo şubesi değil, satıcı firmadır.

## B. Bireysel Gönderiler

Şahıstan şahısa gelen gönderilerde hasar durumu için gönderi faturası ile birlikte ilgili kargo şubesine gidilerek "Tazmin Dilekçesi" verilmelidir.

## ⚠️ Fatura Zorunluluğu

Kargo tazminat süreçlerinde en kritik belge ürün faturasıdır. Faturası ibraz edilemeyen gönderiler için herhangi bir hak talep edilmesi hukuken mümkün değildir. Ürünün maddi değeri ancak resmi bir fatura ile ispatlanabilir.`
  },
  {
    id: "eksik-icerik",
    title: "Eksik İçerik ve Hasar Kayıp Süreçleri",
    short_description: "Barkodu düşen kargonun 'Araf' yolculuğu ve kayıp araştırma prosedürü.",
    icon: "package",
    order: 4,
    content: `## Barkodu Düşen Kargonun "Araf" Yolculuğu

Bir kargonun kimliği üzerindeki barkoddur. Barkodu düşen paket, sistemde kör noktaya düşer. Her aktarma merkezinde bu kargoları tespit etmekle görevli "Hasar Kayıp Servisi" bulunur. Kargonuz "çalınmış" değil, sadece barkodsuz kaldığı için bu serviste sahibinin (şubenin) onu tarif etmesini bekliyor olabilir.

## Koli İçinden Ürün Eksilmesi Neden Olur?

Taşıma sırasında ağır kolilerin baskısıyla yırtılan veya patlayan paketlerden ürünler dışarı dökülebilir. Bu durumda boşta kalan ürün, aktarma merkezindeki görevli tarafından korumaya alınır ancak hangi koliye ait olduğu o an bilinemez.

## ⚠️ Eksik İçerik Durumunda İzlenecek Adımlar:

1. **Şubeye Bildirim:** Paket eksik geldiyse vakit kaybetmeden teslimat şubesine gidin.
2. **Kayıp Araştırma Maili:** Şube personelinden, ilgili Aktarma Merkezine "Kayıp Araştırma Maili" atmasını isteyin. Bu mailde ürünün fiziksel özelliklerini (rengi, markası, boyutu) detaylıca tarif ettirin.
3. **E-Ticaret Bildirimi:** Eğer ürün bir online alışveriş sitesinden alındıysa, satıcıya ve siteye "eksik ürün" bildirimi yapın.
4. **Sabır Süresi:** Aktarma merkezindeki "Hasar Kayıp" biriminin ürünü eşleştirmesi için şubeye birkaç gün mühlet verin.

## Personeli Suçlamadan Önce Bilmeniz Gerekenler

Kargo aktarma merkezleri 7/24 yüksek çözünürlüklü kameralarla izlenir. Bir personelin kargo içerisinden ürün çalması operasyonel olarak çok zordur. Eksikliklerin %99'u, taşıma esnasında ambalajın zarar görmesi ve ürünün kutudan düşmesiyle ilgilidir.

> **Çözüm Yolu:** Eğer araştırma sonucunda ürün bulunamazsa, "Hasar Kayıp Tazmin" süreci başlatılmalı ve zarar kargo şirketinden talep edilmelidir.`
  },
  {
    id: "tazminat-odeme",
    title: "Tazminat Ödeme Prosedürleri",
    short_description: "Gönderi değer tespiti ve tazminat tutarının belirlenmesinde uygulanan kriterler.",
    icon: "dollar-sign",
    order: 5,
    content: `## Tazminat Tutarı Belirleme Esasları

Kargo gönderilerinde tazminat süreci başlatıldığında, ödenecek tutar doğrudan fatura üzerinde yazan rakamın otomatik onayı anlamına gelmemektedir. Kargo firmaları, zarar tespiti ve bedel belirleme aşamasında şu kriterleri baz almaktadır:

### 1. Piyasa Değeri ve Rayiç Araştırması

Faturada beyan edilen tutarın, ürünün piyasadaki güncel değeriyle uyumlu olup olmadığı incelenir. Ürün bedelinin gerçeğe aykırı veya piyasa koşullarının çok üzerinde beyan edildiği durumlarda, firma kendi araştırmasını yaparak gerçeğe en yakın rayiç bedel üzerinden ödeme planı oluşturur.

### 2. Yüksek Tutarlı Gönderilerde Kısmi Ödeme

Özellikle çok yüksek tutarlı gönderilerde kargo firmaları, taşıma sözleşmesi ve sorumluluk limitleri çerçevesinde tutarın tamamını değil, belirli bir kısmını tazmin edebilir. Bu durum, gönderi sırasında ek bir sigorta veya değer beyanı yapılmamış olmasıyla doğrudan ilişkilidir.

> **Hukuki Hatırlatma:** Tazminat süreçlerinde hak kaybı yaşamamak için fatura bilgilerinin tam ve doğru olması şarttır. Gerçeği yansıtmayan yüksek beyanlı faturalar, inceleme aşamasında reddedilme veya piyasa rayicine göre revize edilme riski taşımaktadır.`
  },
  {
    id: "btk-sikayet",
    title: "BTK Resmi Şikayet Yönetimi",
    short_description: "e-Devlet üzerinden yapılan başvurularda dikkat edilmesi gereken teknik detaylar.",
    icon: "file-text",
    order: 6,
    content: `## Şikayet Metninde Kullanılması Gereken Teknik Terimler

BTK (Bilgi Teknolojileri ve İletişim Kurumu) üzerinden yapılan başvuruların ciddiyetle ele alınması için metin içerisinde hukuki dayanağı olan teknik terimlerin kullanılması süreci hızlandırmaktadır. Şikayetinizde şu ifadelerden uygun olanlara yer vermeniz önerilir:

1. **Hizmet Kusuru:** Kargonun taahhüt edilen sürede teslim edilmemesi veya operasyonel hatalar için kullanılır.
2. **Gönderi Akıbetinin Belirsizliği:** 7 günü geçen ve takip sisteminde güncellenmeyen paketler için durumun vahametini belirtir.
3. **Mevzuata Aykırılık:** Firmanın Posta Hizmetleri Kanunu ve yönetmeliklerdeki yükümlülüklerini yerine getirmediğini vurgular.
4. **Bilgi Edinme Hakkının Engellenmesi:** Müşteri hizmetlerinin yetersiz kaldığı veya eksik bilgi verdiği durumlar için eklenmelidir.

## Resmi Başvuru Şablonu

> "... numaralı gönderimle ilgili kargo firması üzerinden çözüm sağlanamamıştır. Gönderinin akıbeti belirsizliğini korumakta olup, taahhüt edilen teslimat süresi aşılmıştır. Yaşanan bu hizmet kusurunun giderilmesini, ilgili firmanın Posta Hizmetleri Yönetmeliği çerçevesinde denetlenmesini ve tarafıma resmi bir bilgilendirme yapılmasını arz ederim."

> **Hatırlatma:** BTK şikayeti öncesinde firmanın kendi kanalları üzerinden en az bir kez şikayet kaydı oluşturmuş olmanız, BTK başvurusunun geçerliliği açısından önem arz etmektedir.`
  },
  {
    id: "teslim-hatasi",
    title: "Sistemsel Teslimat Hataları",
    short_description: "Kargonun teslim edildi görünmesine rağmen pakete ulaşılamaması durumunda yapılması gerekenler.",
    icon: "x-circle",
    order: 7,
    content: `## Durum Analizi: Neden Teslim Edildi Görünür?

Sistemde paketinizin teslim edildiği bildirilmiş ancak tarafınıza ulaşmamışsa, bu durum genellikle şu operasyonel nedenlerden kaynaklanmaktadır:

- **Sistemsel Hatalar:** Kuryenin iş yükünü azaltmak amacıyla paketi sehven teslim edildi olarak işaretlemesi.
- **Adres Karışıklığı:** Paketin farklı veya yanlış bir adrese teslim edilmiş olması ihtimali.
- **Operasyonel Kayıp:** Paketin kaybolması ancak sistemde sürecin sonlandırılması.

## Adım Adım Çözüm Prosedürü

1. **Şube İletişimi:** İlk etapta ilgili şubeyi arayarak veya şubeye giderek paketin akıbeti hakkında bilgi alın. Sorunun çözülmesi için makul bir süre tanıyın.
2. **Bölge Müdürlüğü:** Şube düzeyinde çözüm sağlanamazsa, durumu kargo şirketinin Bölge Müdürlüğü'ne yazılı şikayet talebi olarak iletin.
3. **E-Ticaret Bildirimi:** Gönderi bir e-ticaret sitesinden gelmişse, süreci mutlaka alışveriş yapılan platforma bildirin ve talebinizi kayıt altına alın.

> **Kritik Hatırlatma:** Kargo şubeleri yüksek iş yükü nedeniyle bu tarz süreçleri "zaman aşımına" uğratabilir veya takibini unutabilir. Kullanıcı olarak sürecin sonuçlandığını görene kadar takibi elden bırakmamalısınız.`
  },
  {
    id: "iade-zaman",
    title: "İade Kargolarında Zaman Yönetimi",
    short_description: "14 günlük yasal iade süresini korumak için dikkat edilmesi gereken operasyonel detaylar.",
    icon: "clock",
    order: 8,
    content: `## ⚠️ Kritik Uyarı: Kurye Beklemek Risk Taşır!

E-ticaret iadelerinde 14 günlük yasal süre, ürünün kargoya verilmesiyle kesilir. Kargo firmalarının iş yükü, personel eksikliği veya dağıtım önceliği gibi nedenlerle kuryelerin iade alımına gelmemesi sık karşılaşılan bir durumdur.

## Kurye Çağırma Yerine Şubeye Teslimat

Kargo şirketleri operasyonel olarak "teslimat" odaklı çalışır; kapıdan iade alımı (alıp gelme) işlemleri her zaman ikincil plandadır. Bu nedenle iade sürenizin dolmasına az bir zaman kaldıysa şu adımları izlemelisiniz:

1. **Bireysel Teslimat:** Kuryenin gelmesini beklemek yerine, iade kodunuzla birlikte paketi doğrudan en yakın kargo şubesine kendiniz teslim edin.
2. **Gönderi Fişi:** Şubeye teslimat yaptıktan sonra mutlaka iade takip numarasını içeren gönderi fişini (veya barkod çıktısını) alın. Bu fiş, süresi içinde iade yaptığınızın tek yasal ispatıdır.
3. **Personel Eksikliği Faktörü:** Şubelerin kurye personeli eksikliği nedeniyle iade taleplerini erteleme hakkı operasyonel olarak mevcuttur. Mağduriyet yaşamamak adına "kapıdan alım" hizmetine güvenerek son güne bırakılmamalıdır.

> **Sonuç:** Yasal iade süresinin aşılması durumunda "kurye gelmedi" savunması, satıcı firmalar veya Hakem Heyetleri nezdinde ispatı zor bir gerekçedir. Sorumluluk tüketicidedir.`
  },
  {
    id: "barkod-dusen",
    title: "Barkodu Düşen Kargo: Kimliksiz Paketler",
    short_description: "Aktarma merkezlerinde barkodu düşen veya hasar alan gönderilerin izlediği zorlu yol.",
    icon: "tag",
    order: 9,
    content: `## Bir Kargonun Tek Kimliği Barkodudur

Kargo sisteminde paketler isimle değil, barkod numarasıyla yol alır. Eğer taşıma sırasında barkod düşerse, kargo dilsiz kalır. Hangi şubeye gideceği, kimin gönderdiği ve kime teslim edileceği sistemsel olarak imkansız hale gelir.

## Aktarma Merkezlerindeki Görünmez Kahramanlar: Hasar Kayıp Birimi

Kargonuz aktarma merkezinde takılı kaldıysa, bu durum paketinizin "Hasar Kayıp Bölümü"ne alındığı anlamına gelebilir. Burada görev yapan personelin tek bir misyonu vardır:

- **🔍 Barkod Tespiti:** Barkodu düşmüş kargoların içeriğinden, koli yapısından veya şubelerden gelen "kayıp" ihbarlarından yola çıkarak kimlik eşleştirmesi yaparlar.
- **📦 Yeniden Kimliklendirme:** Kimliği tespit edilen kargolar yeniden barkodlanarak ait olduğu şubeye sevk edilir.
- **⚠️ Müşteri Memnuniyeti:** Hiçbir kargo şirketi kargoyu "kaybetmek" istemez. Kayıp kargo demek; tazminat, masraf ve prestij kaybı demektir.

## "Kargom Çalındı mı?" Şüphesine Gerçekçi Bakış

Aktarma merkezleri 7/24 yüksek çözünürlüklü kameralarla izlenir. Personelin bu denli sıkı denetim altında bir kargoyu çalması neredeyse imkansızdır. Eğer kargonuz bir yerde takıldıysa, hırsızlıktan ziyade üzerine ağır bir koli gelmesi sonucu barkodun yırtılması veya düşmesi en büyük ihtimaldir.

> **Tüketiciye Tavsiye:** Kargonuz takılı kaldığında şubeye kargonun dış görünüşünü, koli tipini ve varsa üzerindeki ayırt edici işaretleri detaylıca tarif edin. Bu bilgiler "Hasar Kayıp Personeli"nin eşleştirme yapmasını %90 kolaylaştıracaktır.`
  },
  {
    id: "guvenli-paketleme",
    title: "Güvenli Paketleme ve Teknik Esaslar",
    short_description: "Lojistik operasyonların fiziksel gerçeklerine uygun paketleme yöntemleri.",
    icon: "box",
    order: 10,
    content: `## Lojistik Gerçekler: Paketinizin Yolculuğu

Her gönderi sahibi için kendi kargosu özeldir; ancak unutulmamalıdır ki lojistik operasyonlarda tüm kargolar eşittir ve aynı koşullarda yolculuk yapar. Paketiniz aktarma merkezleri arasında seyahat ederken şu fiziksel şartlara maruz kalır:

- Binlerce farklı ağırlık ve boyuttaki kargo ile aynı kamyon içerisinde taşınır.
- Taşıma sırasında üzerine çok daha ağır veya sivri köşeli bir başka gönderi denk gelebilir.
- Kamyon sarsıntısı, ani frenleme ve merkezkaç kuvveti gibi fiziksel unsurlar paket içerisindeki ürünün yer değiştirmesine neden olur.

> "Kargomun üzerinde 'Kırılacak Eşya' yazıyor" düşüncesi, bu fiziksel baskılara karşı bir koruma kalkanı değildir. Paketleme, bu dış etkenlerin tamamı hesap edilerek yapılmalıdır.

## ✅ Paketleme Püf Noktaları

- **Çift Oluklu Koli:** Kamyon içi baskılara dayanması için mukavemeti yüksek koliler tercih edilmelidir.
- **Tamponlama:** Ürünün koli çeperine teması kesilmeli, sarsıntılara karşı iç dolgu malzemesi (balonlu naylon, köpük) bol tutulmalıdır.

## ❌ Sık Yapılan Paketleme Hataları

- **Eski Koli Kullanımı:** Mukavemeti bitmiş, yumuşamış kolilerin üzerine yük binince ezilmesi kaçınılmazdır.
- **Boşluk Bırakmak:** Koli içindeki boşluklar, üst üste dizilim sırasında kolinin çökmesine neden olur.

> **Tazminat Notu:** Kargo firmaları, yukarıdaki lojistik şartları (sarsıntı, üst üste istifleme) standart kabul eder. Bu şartlara uygun paketlenmeyen ürünlerde hasar sorumluluğu göndericiye aittir.`
  },
  {
    id: "yasakli-gonderiler",
    title: "Taşınması Yasaklı Gönderiler ve Yasal Sorumluluklar",
    short_description: "Lojistik ağında taşınması yasal olarak engellenmiş maddeler ve oluşabilecek hak kayıpları.",
    icon: "slash",
    order: 11,
    content: `## 🚫 ÖNEMLİ: TAZMİNAT HAKKININ KAYBI

Taşınması yasaklı veya kısıtlı olduğu halde gönderilen kargoların hasar alması, kırılması veya kaybolması durumunda kullanıcı hiçbir hak talep edemez.

Bu tür gönderilerde kargo firmasının tazminat sorumluluğu yasal olarak ortadan kalkmaktadır. Gönderici, yasaklı maddeyi kargo sistemine dahil ederek taşıma sözleşmesini tek taraflı olarak ihlal etmiş sayılır.

## 🔥 Yanıcı ve Kimyasal

- Benzin, tiner, alkol, parfümeri ürünleri.
- Basınçlı spreyler ve gaz içeren tüpler.
- Lityum piller ve aküler.

## 💎 Kıymetli Gönderiler

- Nakit para, ziynet eşyası, altın.
- Çek, senet, kıymetli evraklar.
- Pasaport ve resmi kimlik belgeleri.

## 📦 Hassas ve Diğer

- Canlı hayvan ve bitkiler.
- Çabuk bozulabilecek gıdalar.
- Sıvı sızıntısı yapabilecek tüm maddeler.

> **Genişletilmiş Sorumluluk:** Yasaklı bir ürünün (örneğin akma yapan bir sıvının) kargo aracındaki diğer gönderilere veya kargo personeline zarar vermesi durumunda, oluşan tüm maddi ve manevi zararların tazmini yasal yollarla göndericiden talep edilir. Yasaklı gönderi yapmak sadece tazminat hakkını bitirmez, sizi borçlu konuma düşürebilir.`
  },
  {
    id: "dilekce-ornekleri",
    title: "Dilekçe Örnekleri",
    short_description: "Hasarlı kargo, kayıp ve tazminat talepleri için resmi dilekçe şablonları.",
    icon: "file-text",
    order: 12,
    content: `## 📄 HASARLI KARGO TAZMİN DİLEKÇESİ

**[KARGO ŞİRKETİ ADI] BÖLGE MÜDÜRLÜĞÜNE / GENEL MÜDÜRLÜĞÜNE**

### KONU: [KARGO TAKİP NO] Numaralı Gönderi İçin Hasar Tazmin Talebi

---

**SAYIN YETKİLİ,**

[TARİH] tarihinde firmanızın [ÇIKIŞ ŞUBESİ ADI] şubesinden gönderilen ve [VARIŞ ŞUBESİ ADI] şubesine teslim edilen/edilmesi planlanan, **[KARGO TAKİP NO]** gönderi takip numaralı kargom, taşıma operasyonu sırasında gerekli özenin gösterilmemesi nedeniyle hasar görmüş ve maddi zarara uğramıştır.

**6502 Sayılı Tüketicinin Korunması Hakkında Kanun** ve ilgili taşıma yönetmelikleri gereğince, hizmet sağlayıcı olarak kargonun sağlam teslim edilmesinden firmanız sorumludur.

Ekte sunduğum ürün faturası ve hasar durumunu kanıtlayan görseller ışığında; ürünün fatura bedeli olan **[FATURA TUTARI] TL**'nin tarafıma tazmin edilerek, aşağıda belirttiğim banka hesabına yatırılmasını talep ederim.

Gereğini bilgilerinize arz ederim.

---

### KİŞİSEL BİLGİLER

**AD SOYAD:** [ADINIZ SOYADINIZ]  
**TC KİMLİK NO:** [TC NO]  
**TELEFON:** [TELEFON NUMARASI]  
**İMZA:**

---

### BANKA HESAP BİLGİLERİ (Tazminatın Yatacağı Hesap)

**BANKA ADI:** [BANKA ADI]  
**IBAN:** TR[IBAN NUMARASI]  
**HESAP SAHİBİ:** [AD SOYAD]

---

### EKLER:

1. Ürün Faturası
2. Hasarlı Ürün ve Koli Görselleri
3. (Varsa) Hasar Tespit Tutanağı

---

> **Önemli Hatırlatma:** Dilekçenizi iki nüsha olarak hazırlayın. Bir nüshayı şubeye teslim edin ve diğer nüshaya şube görevlisinden "alındı" kaşesi veya imzası aldırtın. Bu belge, yasal süreçlerde başvurunuzun ispatı olacaktır.`
  }
];
