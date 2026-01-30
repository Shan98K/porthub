const codeArea = document.getElementById("codeArea");
const fileNameEl = document.getElementById("fileName");
const fileListEl = document.getElementById("fileList");

const params = new URLSearchParams(window.location.search);
const projectName = params.get("project");
const type = params.get("type");

const allowedTypes = ["html", "css", "js"];
const NOT_FOUND = "../../pages/notFound.html";

// ---------- VALIDATION ----------
if (!projectName || !type) {
  redirectNotFound();
}

if (!allowedTypes.includes(type)) {
  redirectNotFound();
}

// ---------- LOAD DATA ----------
fetch("../../data.json")
  .then(res => {
    if (!res.ok) throw new Error("DATA_LOAD_FAIL");
    return res.json();
  })
  .then(data => {
    const project = data[projectName];
    if (!project) throw new Error("PROJECT_NOT_FOUND");

    const meta = project.find(p => p.__code__)?.__code__;
    if (!meta) throw new Error("META_MISSING");

    const files = meta[type];
    if (!files || files.length === 0) throw new Error("NO_FILES");

    renderFileList(files, meta.basePath);
    loadFile(files[0], meta.basePath);
  })
  .catch(() => {
    redirectNotFound();
  });

// ---------- FUNCTIONS ----------

function renderFileList(files, basePath) {
  fileListEl.innerHTML = "";

  files.forEach((file, index) => {
    const item = document.createElement("div");
    item.className = "file-item" + (index === 0 ? " active" : "");
    item.textContent = file;

    item.onclick = () => {
      document
        .querySelectorAll(".file-item")
        .forEach(el => el.classList.remove("active"));

      item.classList.add("active");
      loadFile(file, basePath);
    };

    fileListEl.appendChild(item);
  });
}

function loadFile(file, basePath) {
  const fullPath = "../../" + basePath + file;
  fileNameEl.textContent = file;
  codeArea.textContent = "// Loading...";

  fetch(fullPath)
    .then(res => {
      if (!res.ok) throw new Error("FILE_NOT_FOUND");
      return res.text();
    })
    .then(code => {
      if (!code.trim()) {
        codeArea.textContent = "// File is empty";
        return;
      }
      codeArea.textContent = code;
    })
    .catch(() => {
      redirectNotFound();
    });
}

function redirectNotFound() {
  window.location.href = NOT_FOUND;
}
