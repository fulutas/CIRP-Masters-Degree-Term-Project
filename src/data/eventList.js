export const eventList = [
    {   
        eventId: 1,
        unit: "it",
        unitName: "IT",
        title: "Fidye saldırısına karşı ne yapılmalı?",
        content: "Kurum Çalışanı Z.A PTT'den gelen kargosu olduğunu ve adreste bulunamadığı için adresi güncellemesi yönünde bağlantı linki içeren bir mail alır. Z.A maildeki linkin  (https://www.ptttt.gov.tr/) doğruluğunu kontrol etmeden linke tıklar ve PC'deki dosyalar bir anda şifrelenir açılması için ise 2. mail gelerek bir ücret talep edilir. Z.A 2. maile cevap vermese dahi PC virüs yiyerek dosyalar erişilemez hale gelmiştir.",
        eventSteps: [
            {
                unit: "user",
                unitName: "Kullanıcı",
                correctEvent: "Z.A maildeki linke tıklamadan linki kontrol etmeliydi. IT'ye maili yönlendirerek kontrolünü sağlamasını yapmalıydı",
                incorrectEvent: "Lorem ipsum dolor sit amet.."
            },
            {
                unit: "it",
                unitName: "IT",
                correctEvent: "Z.A'dan gelen maildeki linki ve içeriği kontrol ederek olası başka ihlallere karşı üst yönetime rapor sunmalı",
                incorrectEvent: "Virüs taraması yapmadan linke tıklayabilirsiniz diye Z.A'ya döner."
            },
            {
                unit: "bm",
                unitName: "Üst Yönetim",
                correctEvent: "Üst yönetim Z.A'nın yaşadığı ihlalden dolayı tüm personellerine farkındalığı sağlamaya yönelik eğitim talimatı",
                incorrectEvent: "İtibar için olayın üstünü kapatmak (böyle bir durum ilerisi için daha risk oluşturacaktır)"
            },
            {
                unit: "ik",
                unitName: "İnsan Kaynakları",
                correctEvent: "Üst yönetimden gelen bilgi ile personellere farkındalık eğitimi planlanması",
                incorrectEvent: "-"
            },
        ]
    },
    {
        eventId: 2,
        unit: "it",
        unitName: "IT",
        title: "Sahte IT Destek Çağrısı",
        content: "Saldırgan,şirketin bilgisayar sistemlerine sızabilmek için IT çalışanına ait verilere (ad-soyad,pozisyon, iletişim,) ulaşır ve kendisin şirketteki IT çalışanı olarak tanıtır. Saldırı hedeflendiği üst yönetim ve İK departmanı hakkında bilgi toplar.",
        eventSteps: [
            {
                unit: "user",
                unitName: "Kullanıcı",
                correctEvent: "-",
                incorrectEvent: "-"
            },
            {
                unit: "it",
                unitName: "IT",
                correctEvent: "Şüpheli aktiviteleri izlemek ve erken uyarı sistemleri kullanarak olası saldırıları tespit etmek için güvenlik olaylarını sürekli olarak izlemelidir",
                incorrectEvent: "-"
            },
            {
                unit: "bm",
                unitName: "Üst Yönetim",
                correctEvent: "Manüpilasyona kapılmadan saldırganın taleplerini yerine getirmemeli, hassas verileri hemen inanarak paylaşmamalı. Farkındalığı artırmalı gerekli durumlarda yazılımla desteklemeli.",
                incorrectEvent: "Şirketin kritik bilgileri tehlikeye girmemesi ve finansal kayıplar yaşanmaması adına IT'den teyit sağlanmadan bilgi paylaşımı yapılmamalı."
            },
            {
                unit: "ik",
                unitName: "İnsan Kaynakları",
                correctEvent: "IT Destek çağrısının kontrolünü iç ekiple teyit etmeli.",
                incorrectEvent: "Sahte IT destek çağrısını gerçek bir yardım talebi olarak algılar ve gerekli izinleri vererek saldırganın bilgisayara erişim sağlamasına izin verir."
            },

        ]
    },
]