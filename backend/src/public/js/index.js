import "../../../node_modules/bulma/css/bulma.min.css";
import "../css/spinner.css";
import "../css/map_leaflet.css";

import { Tabs, TabbedSections } from "./tabs";
import Mapper from "./Mapper";

export let checkExistence = (element) => {
  // let element = document.querySelector(el);
  if (typeof element != "undefined" && element != null) {
    return true;
  } else {
    return false;
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

window.onload = () => {
  test();
  Tabs();
  TabbedSections();
};
