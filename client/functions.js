module.exports = {
  postMarker: function (newPin) {
    const eventName = newPin.title;
    const eventDescription = newPin.description;
    const latitude = newPin.coordinate.latitude;
    const longitude = newPin.coordinate.longitude;
    // const userId = document.getElementById('desc').value;
    if (eventName && eventDescription) {
      // REPLACE THE IP ADDRESS WITH YOUR NETWORK WIFI IP ADDRESS
      return fetch('http://192.168.1.89:3333/newMarker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName,
          eventDescription,
          latitude,
          longitude,
          // userId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // this is where we update state, so we need to return the right type of object to send to setMarkerList
          return {
            coordinate: { latitude: data.latitude, longitude: data.longitude },
            title: data['event_name'],
            description: data['event_description'],
            pinColor: 'green',
          };
        })
        .catch((err) => console.log(err));
    } else {
      return new Promise((resolve) => {
        alert('Need to include an event name AND a description.');
        resolve(null);
      });
    }
  },

  getMarkers: function () {
    console.log('Getting markers...');
    const locations = [];
    return fetch('http://192.168.8.107:3333/getMarkers')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (let obj of data.rows) {
          locations.push({
            coordinate: { latitude: obj.latitude, longitude: obj.longitude },
            title: obj['event_name'],
            description: obj['event_description'],
            pinColor: 'green',
          });
        }
        console.log(locations);
        return locations;
        // console.log(data);
        // this is where we update state, so we need to return the right type of object to send to setMarkerList
      })
      .catch((err) => console.log(err));
  },
};
