const dateArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const dateValidator = (dateArray) => {
  dateArray = dateArray
    .map((date) => {
      if (date.includes('-')) {
        date = date.split('-');
        console.log(date);
        if (date.length === 3) {
          if (Number(date[0]) > 0 && Number(date[0] <= 31)) {
            if (Number(date[1]) > 0 && Number(date[1] <= 12)) {
              console.log('nice');
              return date.join('-');
            }
          }
        }
      }
      if (date.includes('/')) {
        date = date.split('/');
        if (date.length === 3) {
          if (Number(date[1]) > 0 && Number(date[1] <= 31)) {
            if (Number(date[0]) > 0 && Number(date[0] <= 12)) {
              return `${date[1]}-${date[0]}-${date[2]}`;
            }
          }
        }
      }
    })
    .filter((value) => value);
  return dateArray;
};

console.log(dateValidator(dateArray));
