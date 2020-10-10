const getWarehouseData = () => {
  URL = "/api/v1/warehouse";

  let ticket_container = document.querySelector(".temp");
  ticket_container.innerHTML = "Loading...";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      ticket_container.innerHTML = "";

      data.forEach((note) => {
        const h2 = document.createElement("h2");
        const h2_text = note.author;
        h2.innerHTML = h2_text;
        ticket_container.appendChild(h2);

        const p = document.createElement("p");
        const p_text = note.note;
        p.innerHTML = p_text;
        ticket_container.appendChild(p);
      });

      // ticket_container.innerHTML = `Message: ${data.note}`;
    });
};

let get_notes_btn = document.querySelector("[data-js='get_notes']");

get_notes_btn.addEventListener("click", getWarehouseData);

let isOpen = false;

let menuBtn = document.querySelector('[data-js="menuBtn"]');

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  toggleMenuDrawer();
});

const toggleMenuDrawer = () => {
  let menuDrawer = document.querySelector('[data-js="menuDrawer"]');

  if (isOpen === true) {
    menuDrawer.classList.remove("hidden");
    menuDrawer.classList.add("block");
  } else {
    menuDrawer.classList.remove("block");
    menuDrawer.classList.add("hidden");
  }
};

let site_id = document.querySelector('[data-js="site_id"]').innerHTML;
let site_lat = document.querySelector('[data-js="site_lat"]').innerHTML;
let site_long = document.querySelector('[data-js="site_long"]').innerHTML;

var mymap = L.map("mapid").setView(
  [parseInt(site_lat), parseInt(site_long)],
  13
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var circle = L.circle([parseInt(site_lat), parseInt(site_long)], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 100,
})
  .addTo(mymap)
  .on("click", onClick);

function onClick(e) {
  const URL = "/site_status/report?site_id=" + site_id;
  window.open(URL, "_blank");
}

var popup = L.popup();

circle.on("mouseover", function () {
  circle.bindPopup("Site id: " + site_id).openPopup();
});

circle.on("mouseout", function () {
  circle.closePopup();
});

let theme_switcher = document.querySelector('[data-js="theme_switcher"]');

theme_switcher.addEventListener("change", () => {
  const cls = ["bg-gray-900", "text-white"];
  if (theme_switcher.checked) {
    document.body.classList.add(...cls);
    document.querySelector('[data-js="theme_switcher_label"]').innerHTML =
      "Dark";
  } else {
    document.body.classList.remove(...cls);
    document.querySelector('[data-js="theme_switcher_label"]').innerHTML =
      "Light";
  }
});
