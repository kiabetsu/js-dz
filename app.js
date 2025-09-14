function getLocation() {
  return new Promise((resolve, reject) => {
    const options = { enableHighAccuracy: true };

    function success(position) {
      resolve(position);
    }

    function error(err) {
      if (err.code === 2) {
        console.warn('Местоположение временно недоступно, пробуем снова...');
        setTimeout(() => {
          navigator.geolocation.getCurrentPosition(success, error, options);
        }, 1000);
      } else {
        reject(err);
      }
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}

getLocation();
