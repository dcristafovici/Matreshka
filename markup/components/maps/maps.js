$(document).ready(function() {
  if (document.getElementById('maped')) {
    var myPlacemark;
    var myCollection;
    var domain = 'static/img/assets/maps/marker.svg';
    var init = function init() {
      myMap = new ymaps.Map("maped", {
        center: [55.750036, 37.534400],
        zoom: 17,
        controls: []
      });
      var position = myMap.getGlobalPixelCenter();
      myMap.behaviors.disable('scrollZoom');
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: domain,
        iconImageSize: [48, 48],
        // iconImageOffset: [-22.5, -27],
      });
      myMap.geoObjects.add(myPlacemark);
    };

    ymaps.ready(init);
    var myMap;
  }
})