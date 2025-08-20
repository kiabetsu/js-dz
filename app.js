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

const converter = (money, currencyFrom, currencyTo) => {
  if (currencyFrom !== 'ru' || currencyFrom !== 'dlr' || currencyFrom !== 'eur') {
    return null;
  }
  if (currencyTo !== 'ru' || currencyTo !== 'dlr' || currencyTo !== 'eur') {
    return null;
  }
  if (currencyFrom === currencyTo) {
    return money;
  }
  switch (currencyFrom) {
    case 'ru':
      switch (currencyTo) {
        case 'dlr':
          return convertRuToDlr(money);
        case 'eur':
          return convertRuToEur(money);
      }
    case 'dlr':
      switch (currencyTo) {
        case 'ru':
          return convertDlrToRu(money);
        case 'eur':
          return convertDlrToEur(money);
      }
    case 'eur':
      switch (currencyTo) {
        case 'ru':
          return convertEurToRu(money);
        case 'dlr':
          return convertEurToDlr(money);
      }
  }
};
