const RU_TO_DLR = 30;
const DLR_TO_RU = 1 / 30;
const RU_TO_EUR = 40;
const EUR_TO_RU = 1 / 40;
const DLR_TO_EUR = 30 / 40;
const EUR_TO_DLR = 40 / 30;

const convertRuToDlr = (money) => money * RU_TO_DLR;
const convertDlrToRu = (money) => money * DLR_TO_RU;
const convertRuToEur = (money) => money * RU_TO_EUR;
const convertEurToRu = (money) => money * EUR_TO_RU;
const convertDlrToEur = (money) => money * DLR_TO_EUR;
const convertEurToDlr = (money) => money * EUR_TO_DLR;

// const switchConvert = (money, currencyFrom, currencyTo) => {
//   switch (currencyTo) {
//     case 'ru':
//       con
//       break;

//     default:
//       break;
//   }
// }

const converter = (money, currencyFrom, currencyTo) => {
  if (currencyFrom && currencyTo) {
    return null;
  }
  if (currencyFrom === currencyTo) {
    return money;
  }
  switch (currencyFrom) {
    case 'ru':
      switch (currencyTo) {
        case 'dlr':
          return convertRuToDlr;
        case 'eur':
          return convertRuToEur;
      }
    case 'dlr':
      switch (currencyFrom) {
        case 'ru':
          return convertDlrToRu;
        case 'eur':
          return convertDlrToEur;
      }
    case 'eur':
      switch (currencyFrom) {
        case 'ru':
          return convertEurToRu;
        case 'dlr':
          return convertEurToDlr;
      }
  }
};
