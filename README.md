# araba-simulatoru
Volvo firması web sitesinde bir araba simülatörü eklemek istiyor. Bu simülatörde kullanıcılar (marka, model, kilometre, fiyat) bilgilerini alıp bir araba oluşturabilmeli ve bu arabada bazı metodlar tanımlayıp bazı aksiyonları gerçekleştirebilmeli.

Bunun için adı carSimulator olan bir fonksiyon yazalım.
Bu fonksiyon sırasıyla marka, model, kilometre, ve fiyat bilgilerini parametre olarak almalı.
Aşağıdaki kriterlere göre bir nesne dönmeli:
Aldığı tüm parametreleri içermeli.
Her yeni araba için deponun doluluk oranını 50 olarak tanımlamalı (depo: 50)
getPrice, refuel, drive, gibi 3 metodu olmalı.
getPrice metodu "Arabanın güncel piyasa değeri {price} TL'dir." metnini dönmeli
refuel metodu dolan benzin oranını parametre olarak almalı.
depodaki benzini dolan benzin kadar artırmalı.
depo 100'den fazla dolmamalı.
"Depo %{depo} doludur." metnini dönmeli.
drive metodu kullanılan km bilgisini parametre olarak almalı
Arabanın kilometresine kullanılan kilometre'yi eklemeli.
her 100 km'de 5 litre benzin harcamalı ve deposu harcanan benzine göre azalmalı.
Araba kullanılan her 100 km için 50 TL değer kaybetmeli.
"Araba'nın güncel kilometresi: {kilometre}" metnini dönmeli
Örnek Kullanım:

const simulator = carSimulator('Toyota', 'Corolla', 40000, 1200000);
simulator.getPrice(); // "Arabanın güncel piyasa 1200000 TL'dir" dönmeli
simulator.refuel(20); // "Depo %70 doludur." dönmeli
simulator.refuel(120); // "Depo %100 doludur." dönmeli
simulator.drive(100);
// "Araba'nın güncel kilometresi: 40100" dönmeli ve `simulator.fiyat` değeri 1199950 olmalı.
