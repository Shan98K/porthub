const foldersEl = document.getElementById("folders");
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");

let data = {};
let active = "";

// Load data.json
fetch("data.json")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load data.json");
    return res.json();
  })
  .then(json => {
    data = json;
    active = Object.keys(data)[0];
    render();
  })
  .catch(err => {
    console.error(err);
    gridEl.innerHTML = "<p>Failed to load projects.</p>";
  });

function render() {
  foldersEl.innerHTML = "";
  tabsEl.innerHTML = "";
  gridEl.innerHTML = "";

  Object.keys(data).forEach(projectName => {
    // desktop folder
    const folder = document.createElement("div");
    folder.className = "folder" + (projectName === active ? " active" : "");
    folder.textContent = projectName;
    folder.onclick = () => {
      active = projectName;
      render();
    };
    foldersEl.appendChild(folder);

    // mobile tab
    const tab = document.createElement("div");
    tab.className = "tab" + (projectName === active ? " active" : "");
    tab.textContent = projectName;
    tab.onclick = () => {
      active = projectName;
      render();
    };
    tabsEl.appendChild(tab);
  });

  data[active].forEach(item => {
    // 🚫 ignore metadata
    if (item.__code__) return;

    const card = document.createElement("div");
    card.className = "item";

    const link = document.createElement("a");
    link.href = item.link;
    link.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc || ""}</p>
    `;

    link.addEventListener("click", e => {
      e.preventDefault();

      if (item.title === "Live Demo") {
        window.open(item.link, "_blank");
      } else {
        window.location.href = item.link;
      }
    });

    card.appendChild(link);
    gridEl.appendChild(card);
  });
}
