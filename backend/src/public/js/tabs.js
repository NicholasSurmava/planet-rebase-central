import { checkExistence } from ".";

// TODO: Convert to class?
export default function Tabs() {
  let tabs = document.querySelector('[data-js="tabs"]');
  let sections = document.querySelector('[data-js="sections"]');

  let getActiveTab = () => {
    let activeTab;

    tabs.childNodes.forEach((tab) => {
      if (tab.nodeName === "LI") {
        if (tab.classList.contains("is-active")) {
          activeTab = tab;
        }
      }
    });
    return activeTab;
  };

  //   TODO: Create a function to check visible function? Need to somehow display and hide different sections based on the clicked tab
  //   if (checkExistence(sections) === true) {
  //     //   if (sections.childNodes === "SECTION") {
  //     //     console.log()
  //     //   }
  //     sections.childNodes.forEach((section) => {
  //       if (section.nodeName === "SECTION") {
  //         console.log(section);
  //       }
  //     });
  //   }

  if (checkExistence(tabs) === true) {
    tabs.childNodes.forEach((tab) => {
      if (tab.nodeName === "LI") {
        tab.addEventListener("click", () => {
          getActiveTab().classList.remove("is-active");
          tab.classList.add("is-active");
        });
      }
    });
  }
}
