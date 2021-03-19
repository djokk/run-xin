// Initialize and add the map
function initMap() {
  // The location of Uluru 41.23618159663432, 69.21449173897206
  const uluru = { lat: 41.23618159663432, lng: 69.21449173897206 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    fillColor: '#FA0102',
    styles:[
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "color": "#FFFFFF"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#303030"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#FFFFFF"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#808080"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#FFFFFF"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#303030"
              }
          ]
      }
  ]
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    icon: '../img/marker.png',
    map: map,
  });
}