function initMap() {
        var uluru = {lat: 26.890752, lng: 112.580466};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        
        var image = 'images/mario.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 26.890752, lng: 112.580466},
          map: map,
          icon: image
        });
      }