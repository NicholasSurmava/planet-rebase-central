import { checkExistence } from ".";

// TODO: Convert to class?
export function Tabs() {
  let tabs = document.querySelector('[data-js="tabs"]');

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

  let tabbedSection = new TabbedSections();

  // console.log(activeSection);
  // console.log(tabbedSection.getAllSections());

  let activeSection;

  if (checkExistence(tabs) === true) {
    tabs.childNodes.forEach((tab) => {
      if (tab.nodeName === "LI") {
        tab.addEventListener("click", () => {
          getActiveTab().classList.remove("is-active");
          tab.classList.add("is-active");
          // console.log(tab.textContent);

          activeSection = tabbedSection.getActiveSection();
          activeSection.classList.add("is-hidden");
          tabbedSection.getAllSections().forEach((section) => {
            if (section.attributes.name.textContent === tab.textContent) {
              // console.log("matched!");
              section.classList.remove("is-hidden");
            }
          });
        });
      }
    });
  }
}

export function TabbedSections() {
  let tabbedSections = document.querySelector('[data-js="tabbedSections"]');

  let getActiveSection = function () {
    let activeSection;
    tabbedSections.childNodes.forEach((section) => {
      if (section.nodeName === "SECTION") {
        if (!section.classList.contains("is-hidden")) {
          // console.log(section);
          activeSection = section;
        }
      }
    });
    return activeSection;
  };

  let getAllSections = function () {
    let allSections = [];
    tabbedSections.childNodes.forEach((section) => {
      if (section.nodeName === "SECTION") {
        allSections.push(section);
      }
    });
    return allSections;
  };

  return {
    getActiveSection,
    getAllSections,
  };
}
