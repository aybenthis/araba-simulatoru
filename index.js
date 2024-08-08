function carSimulator(marka, model, kilometre, fiyat) {
  const araba = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function () {
      return `Arabanın güncel piyasa değeri ${this.fiyat} TL'dir.`;
    },
    refuel: function (dolulukOrani) {
      this.depo += dolulukOrani;
      if (this.depo > 100) {
        this.depo = 100;
      }
      return `Depo %${this.depo} doludur.`;
    },
    drive: function (kullanilanKm) {
      this.kilometre += kullanilanKm;

      const harcananBenzin = (kullanilanKm / 100) * 5;
      this.depo -= harcananBenzin;
      this.fiyat -= (kullanilanKm / 100) * 50;
      return `Araba'nın güncel kilometresi: ${this.kilometre}`;
    },
  };

  return araba;
}

const simulator = carSimulator('Toyota', 'Corolla', 40000, 1200000);
console.log(simulator.getPrice());
console.log(simulator.refuel(20));
console.log(simulator.refuel(120));
console.log(simulator.drive(100));
console.log(simulator.fiyat);
