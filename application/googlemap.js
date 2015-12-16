(function(){
    this.googleMap = this.googleMap || {};
    var ns = this.googleMap; // namespace
    var map;
    var home = new google.maps.LatLng(38.858357, -77.053987);
    function HomeControl(controlDiv, map) {
      controlDiv.style.padding = '5px';
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#EEE';
      controlUI.style.border='1px solid';
      controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Set map to Home';
      controlDiv.appendChild(controlUI);
      var controlText = document.createElement('div');
      controlText.style.fontFamily='Arial,sans-serif';
      controlText.style.fontSize='12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.innerHTML = '<b>Home<b>'
      controlUI.appendChild(controlText);

        // Setup click-event listener: simply set the map to London
      google.maps.event.addDomListener(controlUI, 'click', function() {
        map.setCenter(home)
      });
}

    ns.initialize = function() {

      var mapProp = {
        center:home,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

      var marker=new google.maps.Marker({
      position:home,
      animation:google.maps.Animation.BOUNCE
      });

      marker.setMap(map);

      google.maps.event.addListener(marker,'click',function() {
      map.setZoom(9);
      map.setCenter(marker.getPosition());
      });

      var work_range = new google.maps.Circle({
      center:home,
      radius:40000,
      strokeColor:"#CC0000",
      strokeOpacity:0.4,
      strokeWeight:2,
      fillColor:"#FF0000",
      fillOpacity:0.4
      });

      work_range.setMap(map);

      var homeControlDiv = document.createElement('div');
      var homeControl = new HomeControl(homeControlDiv, map);
        //  homeControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
}
}())


