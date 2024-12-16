import { TaxCalculator } from "../tax-calculator";
import { Vehicle } from "../vehicle";

// /**
// * @deprecated
// */
class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super(2019);
  }

  calculateTax(vehicle: Vehicle) {
    console.log(vehicle, vehicle.co2Emissions);
    if (vehicle.fuelType === "Petrol") {
      if (vehicle.co2Emissions === 0) {
        return 0;
      } else if (vehicle.co2Emissions >= 1 && vehicle.co2Emissions <= 50) {
        return 10;
      } else if (vehicle.co2Emissions >= 51 && vehicle.co2Emissions <= 75) {
        return 25;
      } else if (vehicle.co2Emissions >= 76 && vehicle.co2Emissions <= 90) {
        return 105;
      } else if (vehicle.co2Emissions >= 91 && vehicle.co2Emissions <= 100) {
        return 125;
      } else if (vehicle.co2Emissions >= 101 && vehicle.co2Emissions <= 110) {
        return 145;
      } else if (vehicle.co2Emissions >= 111 && vehicle.co2Emissions <= 130) {
        return 165;
      } else if (vehicle.co2Emissions >= 131 && vehicle.co2Emissions <= 150) {
        return 205;
      } else if (vehicle.co2Emissions >= 151 && vehicle.co2Emissions <= 170) {
        return 515;
      } else if (vehicle.co2Emissions >= 171 && vehicle.co2Emissions <= 190) {
        return 830;
      } else if (vehicle.co2Emissions >= 191 && vehicle.co2Emissions <= 225) {
        return 1240;
      } else if (vehicle.co2Emissions >= 226 && vehicle.co2Emissions <= 255) {
        return 1760;
      } else {
        return 2070;
      }
    } else {
      if (vehicle.co2Emissions === 0) {
        return 0;
      } else if (vehicle.co2Emissions >= 1 && vehicle.co2Emissions <= 50) {
        return 25;
      } else if (vehicle.co2Emissions >= 51 && vehicle.co2Emissions <= 75) {
        return 105;
      } else if (vehicle.co2Emissions >= 76 && vehicle.co2Emissions <= 90) {
        return 125;
      } else if (vehicle.co2Emissions >= 91 && vehicle.co2Emissions <= 100) {
        return 145;
      } else if (vehicle.co2Emissions >= 101 && vehicle.co2Emissions <= 110) {
        return 165;
      } else if (vehicle.co2Emissions >= 111 && vehicle.co2Emissions <= 130) {
        return 205;
      } else if (vehicle.co2Emissions >= 131 && vehicle.co2Emissions <= 150) {
        return 515;
      } else if (vehicle.co2Emissions >= 151 && vehicle.co2Emissions <= 170) {
        return 830;
      } else if (vehicle.co2Emissions >= 171 && vehicle.co2Emissions <= 190) {
        return 1240;
      } else if (vehicle.co2Emissions >= 191 && vehicle.co2Emissions <= 225) {
        return 1760;
      } else if (vehicle.co2Emissions >= 226 && vehicle.co2Emissions <= 255) {
        return 2070;
      } else {
        return 2070;
      }
    }
  }
}

export { DefaultTaxCalculator };
