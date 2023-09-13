const accordinContent = document.querySelectorAll(".accordin-item");
const portal = document.querySelector(".portal");
const apps = document.querySelector(".apps");
const accessories = document.querySelector(".accessories");
const image = document.querySelector(".more-info > img");

//accordin
accordinContent.forEach((item, index) => {
  let panel = item.querySelector(".panel");
  let svg = item.getElementsByTagName("svg")[0];
  const header = item.querySelector(".accrodin-header");
  header.addEventListener("click", () => {
    header.classList.toggle("isActive");
    if (header.classList.contains("isActive")) {
      panel.style.height = `${panel.scrollHeight}px`;
      svg.style.transform = "rotate(180deg)";
    } else {
      panel.style.height = 0;
      svg.style.transform = "rotate(0)";
    }
    removeIsActiveClasses(index);
  });
});

//remove is active class
function removeIsActiveClasses(index) {
  accordinContent.forEach((item, index1) => {
    if (index !== index1) {
      console.log(index, index !== index1);
      const header = item.querySelector(".accrodin-header");
      header.classList.remove("isActive");
      let panel = item.querySelector(".panel");
      let svg = item.getElementsByTagName("svg")[0];
      panel.style.height = 0;
      svg.style.transform = "rotate(0)";
    }
  });
}

const moreInfo = document.querySelectorAll(".more-info");

moreInfo.forEach((item) => {
  if (item.classList.contains("more-expanded-s")) {
    item.addEventListener("click", () => resizable(item, "expanded-s"));
  } else {
    item.addEventListener("click", () => resizable(item, "expanded-m"));
  }
});

function resizable(item, name) {
  console.log(item, name);
  item.classList.toggle("isOpen");
  if (item.classList.contains("isOpen")) {
    apps.classList.add(name);
    accessories.classList.add(name);
    portal.classList.add(name);
    image.style.transform = "rotate(180deg)";
  } else {
    apps.classList.remove(name);
    accessories.classList.remove(name);
    portal.classList.remove(name);
    image.style.transform = "rotate(0)";
  }
}
