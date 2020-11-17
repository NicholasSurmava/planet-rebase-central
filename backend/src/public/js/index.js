import "../../../node_modules/bulma/css/bulma.min.css";
import "../../../node_modules/chart.js/dist/Chart.min.css";
import "../../../node_modules/chart.js/dist/Chart.min.js";
import "../css/spinner.css";
import "../css/map_leaflet.css";
import { routes } from "../../../config";

import { Tabs, TabbedSections } from "./tabs";

// import Mapper from "./Mapper";

export let checkExistence = (element) => {
  // let element = document.querySelector(el);
  if (typeof element != "undefined" && element != null) {
    return true;
  } else {
    return false;
  }
};

// TODO: Create a factory function to return an initialized map object, export said object and import as needed. Example: import into tabs component to call the rerender method when map tab is clicked.
let mapDemo = () => {
  let mapContainer = document.getElementById("mapid");

  if (checkExistence(mapContainer) === true) {
    let mymap = L.map(mapContainer);
    mymap.setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);

    var circle = L.circle([51.505, -0.09], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 100,
    })
      .addTo(mymap)
      .on("click", onClick);

    function onClick(e) {
      const URL = `${routes.tower_360_report}?site=123456`;
      window.open(URL, "_blank");
    }

    var popup = L.popup();

    circle.on("mouseover", function () {
      circle.bindPopup("Site id: 12345").openPopup();
    });

    circle.on("mouseout", function () {
      circle.closePopup();
    });

    setTimeout(function () {
      mymap.invalidateSize();
    }, 4000);
  }
};

let ChartInit = () => {
  var ctx = document.getElementById("myChart");

  if (checkExistence(ctx) === true) {
    let ctx2 = ctx.getContext("2d");
    var myChart = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
};

let test = () => {
  let activeAlarmContainer = document.querySelector(
    '[data-js="activeAlarmContainer"]'
  );
  let openIncidentContainer = document.querySelector(
    '[data-js="openIncidentContainer"]'
  );
  let openMaintenanceContainer = document.querySelector(
    '[data-js="openMaintenanceContainer"]'
  );
  let siteSignInContainer = document.querySelector(
    '[data-js="siteSignInContainer"]'
  );

  if (checkExistence(activeAlarmContainer) === true) {
    setTimeout(() => {
      activeAlarmContainer.classList.remove("loader");
      activeAlarmContainer.innerHTML = "0";
    }, 2000);
  }

  if (checkExistence(openIncidentContainer) === true) {
    setTimeout(() => {
      openIncidentContainer.classList.remove("loader");
      openIncidentContainer.innerHTML = "10";
    }, 4000);
  }

  if (checkExistence(openMaintenanceContainer) === true) {
    setTimeout(() => {
      openMaintenanceContainer.classList.remove("loader");
      openMaintenanceContainer.innerHTML = "4";
    }, 1000);
  }

  if (checkExistence(siteSignInContainer) === true) {
    setTimeout(() => {
      siteSignInContainer.classList.remove("loader");
      siteSignInContainer.innerHTML = "1";
    }, 10000);
  }
};

// TODO: get some weather

let getWeather = () => {
  console.log("Getting weather");
  let weatherSection = document.querySelector('[data-js="weatherSection"]');
  let weatherSectionContainer;
  const ul = document.createElement("ul");

  weatherSection.childNodes.forEach((children) => {
    if (children.nodeName === "DIV") {
      weatherSectionContainer = children;
    }
  });

  weatherSectionContainer.classList.add("loader");

  fetch("/tower_360/__demo_weather")
    .then((response) => response.json())
    .then((data) => {
      // weatherSection.document.querySelector("div").innerHTML = data;
      // console.log(weatherSection.childNodes);
      // console.log(data);

      weatherSectionContainer.appendChild(ul);
      data.forEach((d) => {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = d.title;
      });
      weatherSectionContainer.classList.remove("loader");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

window.onload = () => {
  test();
  Tabs();
  TabbedSections();
  mapDemo();
  ChartInit();
  getWeather();

  document
    .querySelector('[data-js="getWeatherBtn"]')
    .addEventListener("click", getWeather);
};
