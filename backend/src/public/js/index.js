import "../../../node_modules/bulma/css/bulma.min.css";
import "../css/spinner.css";

// let checkExistence = (el) => {
//   let element = document.querySelector(el);
//   if (typeof element != "undefined" && element != null) {
//     return true;
//   } else {
//     return false;
//   }
// };

// TODO: Create a Tab object/class w/ methods for switching tabs, setting active tab, remove active tab, get active tab
// let setActiveTab = (tab) => {
//     tab.classList()

// }

// let getActiveTab = (tabs) => {
//   let activeTab;
//   //   console.log(tabs);
//   tabs.forEach((tab) => {
//     if (tab.nodeName === "LI" && tab.className === "is-active") {
//       //   console.log("hello");
//       //   console.log(tab);
//       activeTab = tab;
//     }
//   });
//   return activeTab;
// };
// let tabs = document.querySelector('[data-js="tabs"]').childNodes;

// console.log(tabs);
// console.log(getActiveTab(tabs));

// console.log(tabs);

// let activeNode;

// let tabSwticher = (function () {
//   let tabs = document.querySelector('[data-js="tabs"]').childNodes;

//   tabs.forEach((tab) => {
//     if (tab.nodeName === "LI") {
//       if (tab.className === "is-active") {
//         activeTab = tab;
//       }
//       tab.addEventListener("click", () => {
//         if (tab.className != "is-active") {
//           tab.classList.add("is-active");
//           activeTab.classList.remove("is-active");
//         }
//       });
//     }
//   });
// })();

// let hideShowTest = () => {
//   let progressBar = document.querySelector('[data-js="progressBar"]');
//   let summarySection = document.querySelector('[data-js="summarySection"]');

//   setTimeout(() => {
//     progressBar.classList.add("is-hidden");
//     summarySection.classList.remove("is-hidden");
//   }, 5000);
// };

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

  setTimeout(() => {
    activeAlarmContainer.classList.remove("loader");
    activeAlarmContainer.innerHTML = "0";
  }, 2000);

  setTimeout(() => {
    openIncidentContainer.classList.remove("loader");
    openIncidentContainer.innerHTML = "10";
  }, 4000);

  setTimeout(() => {
    openMaintenanceContainer.classList.remove("loader");
    openMaintenanceContainer.innerHTML = "4";
  }, 1000);

  setTimeout(() => {
    siteSignInContainer.classList.remove("loader");
    siteSignInContainer.innerHTML = "1";
  }, 10000);
};

window.onload = () => {
  // hideShowTest();
  //   console.log(getActiveTab(tabs));
  test();
};
