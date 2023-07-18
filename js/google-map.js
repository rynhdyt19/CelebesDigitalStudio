// var google;

// function init() {
//     // Opsi dasar untuk Google Map sederhana
//     // Untuk opsi lebih lanjut, lihat: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
//     var myLatlng = new google.maps.LatLng(-5.201295605347722, 119.50232262408008);
//     // 39.399872
//     // -8.224454

//     var mapOptions = {
//         // Zoom awal pada peta (selalu diperlukan)
//         zoom: 7,

//         // Latitude dan longitude untuk mengatur pusat peta (selalu diperlukan)
//         center: myLatlng,

//         // Gaya tampilan peta
//         scrollwheel: false,
//         styles: [
//             {
//                 "featureType": "administrative.country",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "simplified"
//                     },
//                     {
//                         "hue": "#ff0000"
//                     }
//                 ]
//             }
//         ]
//     };

//     // Dapatkan elemen HTML DOM yang akan menampung peta
//     // Kami menggunakan div dengan id="map" seperti yang terlihat di bawah dalam <body>
//     var mapElement = document.getElementById('map');

//     // Buat Google Map menggunakan elemen dan opsi yang telah ditentukan sebelumnya
//     var map = new google.maps.Map(mapElement, mapOptions);

//     var addresses = ['Villa Samata'];

//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
//             var p = data.results[0].geometry.location;
//             var latlng = new google.maps.LatLng(p.lat, p.lng);
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map,
//                 icon: 'images/loc.png'
//             });

//         });
//     }

// }

// google.maps.event.addDomListener(window, 'load', init);
