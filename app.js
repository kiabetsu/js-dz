const navigator = (positionLat, positionLong, addressLat, addressLong) => {
  const lat = addressLat - positionLat;
  const long = addressLong - positionLong;
  return (lat ** 2 + long ** 2) ** 0.5;
};

console.log(navigator(5, 5, -7, -9));
