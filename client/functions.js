module.exports = {

  postMarker: (newPin) => {
    const eventName = newPin.title;
    const eventDescription = newPin.description;
    const latitude = newPin.coordinate.latitude;
    const longitude = newPin.coordinate.longitude;
    // const userId = document.getElementById('desc').value;

    if (eventName && eventDescription){
      fetch('/newMarker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
              coordinate:{ latitude: data.latitude, longitude: data.longitude },
              title: data.eventName,
              description: data.eventDescription,
              pinColor:'green'
          }
        })
        .catch((err) => console.log(err))
    } else {
        alert('Need to include an event name AND a description.')
    }
  }
}