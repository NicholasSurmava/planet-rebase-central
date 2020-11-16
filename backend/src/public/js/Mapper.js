// TODO: Create a factory function to return an initialized map object, export said object and import as needed. Example: import into tabs component to call the rerender method when map tab is clicked.
// export let mapDemo = () => {
//   let mapContainer = document.querySelector("#mapid");

//   if (checkExistence(mapContainer) === true) {
//     let mymap = L.map();
//     mymap.setView([51.505, -0.09], 13);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(mymap);

//     var circle = L.circle([51.505, -0.09], {
//       color: "red",
//       fillColor: "#f03",
//       fillOpacity: 0.5,
//       radius: 100,
//     })
//       .addTo(mymap)
//       .on("click", onClick);

//     function onClick(e) {
//       const URL = `${routes.tower_360_report}?site=123456`;
//       window.open(URL, "_blank");
//     }

//     var popup = L.popup();

//     circle.on("mouseover", function () {
//       circle.bindPopup("Site id: 12345").openPopup();
//     });

//     circle.on("mouseout", function () {
//       circle.closePopup();
//     });

//     setTimeout(function () {
//       mymap.invalidateSize();
//     }, 4000);
//   }
// };
