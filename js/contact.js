let map = L.map('map').setView([51.2172, 4.4211], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let iconLogo = L.icon({
    iconUrl: './assets/logo.svg',
    iconSize: [80, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

L.marker([51.2172, 4.4211], {
    icon: iconLogo
})
    .addTo(map)
    .bindPopup('Hier is ons bedrijf gevestigd!')
    .openPopup();

L.marker([51.2194, 4.4025], {
    icon: iconLogo
})
    .addTo(map)
    .bindPopup('Hier is ons bedrijf gevestigd!')
    .openPopup();