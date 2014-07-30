var taipei = 
{
  "中正區": {
    "lat": 25.0293008,
    "lng": 121.5205833
  },
  "大同區": {
    "lat": 25.0645027,
    "lng": 121.513314
  },
  "中山區": {
    "lat": 25.0685028,
    "lng": 121.5456014
  },
  "萬華區": {
    "lat": 25.0294936,
    "lng": 121.4978838
  },
  "信義區": {
    "lat": 25.0287142,
    "lng": 121.5723162
  },
  "松山區": {
    "lat": 25.0601727,
    "lng": 121.5593073
  },
  "大安區": {
    "lat": 25.0263074,
    "lng": 121.543846
  },
  "南港區": {
    "lat": 25.038392,
    "lng": 121.6219879
  },
  "北投區": {
    "lat": 25.1531486,
    "lng": 121.5174287
  },
  "內湖區": {
    "lat": 25.0835016,
    "lng": 121.5903754
  },
  "士林區": {
    "lat": 25.1347802,
    "lng": 121.5324453
  },
  "文山區": {
    "lat": 24.9880073,
    "lng": 121.5752716
  }
};
var showMap = function(area) {
  var lat = taipei[area].lat;
  var lng = taipei[area].lng;
  
  var popinfo = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    scrollwheel: false,
    center: {lat: lat, lng: lng}
  });

  map.data.loadGeoJson('http://poponfire.herokuapp.com/api/taipei/' + area);
      // Set the stroke width, and fill color for each polygon
  var featureStyle = {
    fillColor: 'red',
    strokeWeight: 1
  };
  map.data.setStyle(featureStyle);

  map.data.addListener('click', function(event) {
     var properties = ['面積', '路段', '地號', '管理者', '使用分區'];

    var content = "<table class='ui table segment'>";
    properties.forEach(function(element, index, array){
      content += "<tr><td>"+ element + "</td><td>" + event.feature.getProperty(element) + "</td></tr>";
    });
    content += "</table>";

    popinfo.close();
    popinfo.setContent(content);
    popinfo.setPosition(event.latLng);
    popinfo.open(map);
  });
   
};


(function(){
  
  $('.dropdown').dropdown(
    {
    'onChange': function(val) {
      $('.map-notice').hide();
      showMap(val);
      $("html, body").animate(
        { scrollTop: $(document).height()- $(window).height() }, "slow");
    }
  });
  
})();