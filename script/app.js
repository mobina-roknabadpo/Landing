const accordinContent = document.querySelectorAll(".accordin-item");
const portal = document.querySelector(".portal");
const apps = document.querySelector(".apps");
const accessories = document.querySelector(".accessories");
const image = document.querySelector(".more-info > img");

//accordin
accordinContent.forEach((item, index) => {
  let panel = item.querySelector(".panel");
  let svg = item.getElementsByTagName("svg")[0];
  item.addEventListener("click", () => {
    item.classList.toggle("isActive");
    if (item.classList.contains("isActive")) {
      panel.style.display = "block";
      svg.style.transform = "rotate(180deg)";
    } else {
      panel.style.display = "none";
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
      item.classList.remove("isActive");
      let panel = item.querySelector(".panel");
      let svg = item.getElementsByTagName("svg")[0];
      panel.style.display = "none";
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

// moreInfo.addEventListener("click", () => {
//   console.log(window.innerWidth);
//   moreInfo.classList.toggle("isOpen");
//   console.log(moreInfo);
//   if (moreInfo.classList.contains("isOpen")) {
//     apps.classList.add("expanded-s");
//     accessories.classList.add("expanded-s");
//     portal.classList.add("expanded-s");
//     image.style.transform = "rotate(180deg)";
//   } else {
//     apps.classList.remove("expanded-s");
//     accessories.classList.remove("expanded-s");
//     portal.classList.remove("expanded-s");
//     image.style.transform = "rotate(0)";
//   }
// });
// moreInfo.addEventListener("click", () => {
//   console.log(window.innerWidth, "1280");
//   moreInfo.classList.toggle("isOpen");
//   if (moreInfo.classList.contains("isOpen")) {
//     apps.classList.add("expanded-m");
//     accessories.classList.add("expanded-m");
//     portal.classList.add("expanded-m");
//     image.style.transform = "rotate(180deg)";
//   } else {
//     apps.classList.remove("expanded-m");
//     accessories.classList.remove("expanded-m");
//     portal.classList.remove("expanded-m");
//     image.style.transform = "rotate(0)";
//   }
// });

// moreInfo.addEventListener("click", () => {
//   console.log(apps.scrollHeight);
//   moreInfo.classList.toggle("isOpen");
//   if (moreInfo.classList.contains("isOpen")) {
//     if (window.innerWidth < 640) {
//       apps.style.height = `${apps.scrollHeight}px`;
//       accessories.style.height = `${accessories.scrollHeight}px`;
//       portal.style.height = `${portal.scrollHeight}px`;
//       image.style.transform = "rotate(180deg)";
//       apps.style.visibility = "visible";
//       accessories.style.visibility = "visible";
//       portal.style.visibility = "visible";
//     } else if (window.innerWidth < 1280) {
//       accessories.style.height = `${accessories.scrollHeight}px`;
//       portal.style.height = `${portal.scrollHeight}px`;
//       image.style.transform = "rotate(180deg)";

//       accessories.style.visibility = "visible";
//       portal.style.visibility = "visible";
//     }
//   } else {
//     if (window.innerWidth < 640) {
//       apps.style.height = 0;
//       accessories.style.height = 0;
//       portal.style.height = 0;
//       image.style.transform = "rotate(0)";
//       apps.style.visibility = "hidden";
//       accessories.style.visibility = "hidden";
//       portal.style.visibility = "hidden";
//     } else if (window.innerWidth < 1280) {
//       accessories.style.height = 0;
//       portal.style.height = 0;
//       image.style.transform = "rotate(0)";
//       accessories.style.visibility = "hidden";
//       portal.style.visibility = "hidden";
//     } else {
//       accessories.style.height = `${accessories.scrollHeight}px`;
//       portal.style.height = `${portal.scrollHeight}px`;
//       image.style.transform = "rotate(0)";
//       accessories.style.visibility = "visible";
//       portal.style.visibility = "visible";
//     }
//   }
// });
