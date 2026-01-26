const foldersEl = document.getElementById("folders");
const tabsEl = document.getElementById("tabs");
const gridEl = document.getElementById("grid");

let data = {};    // Holds JSON data
let active = "";  // Currently active website

// Fetch data.json dynamically
fetch("data.json")
  .then(res => {
    if (!res.ok) throw new Error("Could not load data.json");
    return res.json();
  })
  .then(json => {
    data = json;
    active = Object.keys(data)[0]; // default active website
    render();
  })
  .catch(err => {
    console.error("Error loading data.json:", err);
    gridEl.innerHTML = "<p style='color: var(--muted)'>Failed to load projects.</p>";
  });

// Render function
function render() {
  foldersEl.innerHTML = "";
  tabsEl.innerHTML = "";
  gridEl.innerHTML = "";

  // Create desktop folders & mobile tabs
  Object.keys(data).forEach(website => {
    // Desktop folder
    const folderDiv = document.createElement("div");
    folderDiv.className = "folder" + (website === active ? " active" : "");
    folderDiv.textContent = website;
    folderDiv.onclick = () => { active = website; render(); };
    foldersEl.appendChild(folderDiv);

    // Mobile tab
    const tabDiv = document.createElement("div");
    tabDiv.className = "tab" + (website === active ? " active" : "");
    tabDiv.textContent = website;
    tabDiv.onclick = () => { active = website; render(); };
    tabsEl.appendChild(tabDiv);
  });

  // Render each tech/project as a clickable box
// Render each tech/project as a clickable box
data[active].forEach(project => {
  const item = document.createElement("div");
  item.className = "item";

  // Wrap the content in a link
  const link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank"; // open in new tab
  link.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc || ""}</p>
  `;

  // Intercept click to check if link is valid
  link.addEventListener("click", async (e) => {
    e.preventDefault(); // prevent default navigation
    try {
      const res = await fetch(project.link, { method: "HEAD" }); // check if link exists
      if (!res.ok) throw new Error("Link not reachable");
      window.open(project.link, "_blank"); // open valid link
    } catch (err) {
      console.warn("Link failed, redirecting to notFound:", project.link, err);
      window.location.href = "./pages/notFound.html"; // redirect on error
    }
  });

  item.appendChild(link);
  gridEl.appendChild(item);
});

}
