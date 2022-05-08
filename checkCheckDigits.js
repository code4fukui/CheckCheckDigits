import { Damm } from "https://code4fukui.github.io/Damm/Damm.js";
import { Verhoeff } from "https://code4fukui.github.io/Verhoeff/Verhoeff.js";
import { Luhn } from "https://code4fukui.github.io/Luhn/Luhn.js";
import { Modulus10 } from "https://code4fukui.github.io/Modulus10/Modulus10.js";
import { Modulus11 } from "https://code4fukui.github.io/Modulus11/Modulus11.js";
import { Modulus9 } from "https://code4fukui.github.io/Modulus9/Modulus9.js";

export const checkCheckDigits = (num) => {
  return {
    Damm: Damm.check(num),
    Verhoeff: Verhoeff.check(num),
    Luhn: Luhn.check(num),
    Modulus10: Modulus10.check(num),
    Modulus11: Modulus11.check(num),
    Modulus9: Modulus9.check(num),
  };
};
