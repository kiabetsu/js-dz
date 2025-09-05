function is14yo(date) {
  const myDate = new Date(date);
  const today = new Date();
  if (myDate.getFullYear() - today.getFullYear() > 14) {
    return true;
  }
  if (today.getFullYear() - myDate.getFullYear() === 14) {
    if (today.getMonth() > myDate.getMonth()) {
      return true;
    }
    if (today.getMonth() === myDate.getMonth() && today.getDate() >= myDate.getDate()) {
      return true;
    }
  }
  return false;
}

console.log(is14yo('2011-09-06'));
