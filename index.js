// const arguments = process.argv.slice(2);

let result = document.getElementById("result");

const creditCardControl = () => {
  let ccArr = [];
  let isSixteenDigit = true;
  let isNumberDigit = true;
  let isEven = true;
  let isSum = true;
  let isCheckDigit = true;

  let cc = document.getElementById("inputCC").value;
  let cd = document.getElementById("myCheck").checked;

  // Girdi içinde sayı ve orta çizgi olmayan bir karakter var mı?
  for (let e of cc) {
    if (e >= 0 && e <= 9) {
      ccArr.push(parseInt(e));
    } else if (!(e == "-")) {
      isNumberDigit = false;
    }
  }

  // Girdi 16 haneli mi?
  isSixteenDigit = ccArr.length === 16 ? true : false;

  // Girdinin son iki hanesi çift mi?
  isEven =
    (ccArr[ccArr.length - 2] * 10 + ccArr[ccArr.length - 1] * 1) % 2 === 0
      ? true
      : false;

  // Girdinin toplamı 16 dan büyük mü?
  isSum = ccArr.reduce((a, b) => a + b) > 16 ? true : false;

  // Chech digit doğru mu?
  let checkDigit = [];
  checkDigit = ccArr.map((e, i) => {
    if ((i + 1) % 2 === 0) {
      return e * 2 > 9 ? e * 2 - 9 : e * 2;
    } else {
      return e;
    }
  });

  isCheckDigit = checkDigit.reduce((a, b) => a + b) % 10 === 0 ? true : false;

  !cd ? (isCheckDigit = true) : ""; // Eğer checkbox kontrolü kapalıysa checkDigit değişkeni true kabul edilir.

  console.log(
    "isSixteenDigit: " +
      isSixteenDigit +
      " isNumberDigit: " +
      isNumberDigit +
      " isEven: " +
      isEven +
      " isSum: " +
      isSum +
      " isCheckDigit: " +
      isCheckDigit
  );

  result.innerHTML =
    isSixteenDigit && isNumberDigit && isEven && isSum && isCheckDigit
      ? "Valid"
      : "Invalid";
};

// creditCardControl(arguments[0]);
