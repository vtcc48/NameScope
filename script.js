let searchCount = 0;

document.addEventListener("DOMContentLoaded", () => {

    searchCount = 0;

    const counter = document.getElementById("counter");
    const totalSearches = document.getElementById("searchCount");

    if (counter) {
        counter.innerHTML = "Searches: 0";
    }

    if (totalSearches) {
        totalSearches.innerHTML = "0";
    }

    const savedColor = localStorage.getItem("themeColor");

    if (savedColor) {
        document.documentElement.style.setProperty(
            "--main-color",
            savedColor
        );
    }

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }

});

function updateSearchField() {

    const type =
    document.getElementById("searchType").value;

    const input =
    document.getElementById("searchInput");

    if (type === "name") {

        input.placeholder =
        "Enter Full Name";

    } else {

        input.placeholder =
        "Enter Username";

    }

}

function searchProfiles() {

    const searchType =
    document.getElementById("searchType").value;

    const searchValue =
    document.getElementById("searchInput")
    .value
    .trim();

    const city =
    document.getElementById("city")
    .value
    .trim();

    const country =
    document.getElementById("country")
    .value;

    if (searchValue === "") {

        alert(
            "Please enter a name or username."
        );

        return;

    }

    let name = "";
    let username = "";

    if (searchType === "name") {
        name = searchValue;
    } else {
        username = searchValue;
    }

    const searchTerm =
    searchValue;

    const fullQuery = [
        name,
        username,
        city,
        country
    ]
    .filter(Boolean)
    .join(" ");

    searchCount++;

    document.getElementById("counter")
    .innerHTML =
    `Searches: ${searchCount}`;

    const totalSearches =
    document.getElementById("searchCount");

    if (totalSearches) {
        totalSearches.innerHTML =
        searchCount;
    }

    const history =
    document.getElementById("history");

    const item =
    document.createElement("li");

    item.textContent =
    searchTerm;

    history.prepend(item);

    document.getElementById("results")
    .innerHTML =
    `<div class="loader"></div>`;

    const instagramLink =
    username
    ? `https://www.instagram.com/${username}`
    : `https://www.google.com/search?q=${encodeURIComponent('"' + name + '" site:instagram.com')}`;

    const githubLink =
    username
    ? `https://github.com/${username}`
    : `https://github.com/search?q=${encodeURIComponent(name)}&type=users`;

    const xLink =
    username
    ? `https://x.com/${username}`
    : `https://x.com/search?q=${encodeURIComponent(name)}`;

    const tiktokLink =
    `https://www.tiktok.com/search?q=${encodeURIComponent(searchTerm)}`;

    const results = `

    <div class="card">
        <h3>🌐 Google Search</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery)}" target="_blank">
            Open Search
        </a>
    </div>

    <div class="card">
        <h3>💼 LinkedIn</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:linkedin.com/in')}" target="_blank">
            Open LinkedIn Search
        </a>
    </div>

    <div class="card">
        <h3>📸 Instagram</h3>
        <a href="${instagramLink}" target="_blank">
            Open Instagram
        </a>
    </div>

    <div class="card">
        <h3>🎵 TikTok</h3>
        <a href="${tiktokLink}" target="_blank">
            Search on TikTok
        </a>
    </div>

    <div class="card">
        <h3>🐦 X</h3>
        <a href="${xLink}" target="_blank">
            Open X Profile/Search
        </a>
    </div>

    <div class="card">
        <h3>💻 GitHub</h3>
        <a href="${githubLink}" target="_blank">
            Open GitHub
        </a>
    </div>

    <div class="card">
        <h3>📘 Facebook</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:facebook.com')}" target="_blank">
            Open Facebook Search
        </a>
    </div>

    <div class="card">
        <h3>🎥 YouTube</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:youtube.com')}" target="_blank">
            Open YouTube Search
        </a>
    </div>

    <div class="card">
        <h3>👽 Reddit</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:reddit.com')}" target="_blank">
            Open Reddit Search
        </a>
    </div>

    <div class="card">
        <h3>📱 Snapchat</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:snapchat.com')}" target="_blank">
            Open Snapchat Search
        </a>
    </div>

    <div class="card">
        <h3>📌 Pinterest</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:pinterest.com')}" target="_blank">
            Open Pinterest Search
        </a>
    </div>

    <div class="card">
        <h3>📨 Telegram</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:t.me')}" target="_blank">
            Open Telegram Search
        </a>
    </div>

    <div class="card">
        <h3>🧵 Threads</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:threads.net')}" target="_blank">
            Open Threads Search
        </a>
    </div>

    <div class="card">
        <h3>🎨 Behance</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:behance.net')}" target="_blank">
            Open Behance Search
        </a>
    </div>

    <div class="card">
        <h3>✍️ Medium</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:medium.com')}" target="_blank">
            Open Medium Search
        </a>
    </div>

    <div class="card">
        <h3>📰 News Search</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' news')}" target="_blank">
            View News
        </a>
    </div>

    <div class="card">
        <h3>🖼️ Google Images</h3>
        <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(fullQuery)}" target="_blank">
            View Images
        </a>
    </div>

    <div class="card">
        <h3>📄 PDF Documents</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' filetype:pdf')}" target="_blank">
            View PDFs
        </a>
    </div>

    <div class="card">
        <h3>🌍 Reverse Image Search</h3>

        <a href="https://images.google.com" target="_blank">
            Google Lens
        </a>

        <br><br>

        <a href="https://tineye.com" target="_blank">
            TinEye
        </a>

        <br><br>

        <a href="https://yandex.com/images" target="_blank">
            Yandex Images
        </a>

    </div>

    `;

    setTimeout(() => {

        document.getElementById("results")
        .innerHTML =
        results;

    }, 700);

}

function clearResults() {

    document.getElementById("results").innerHTML = "";

    document.getElementById("history").innerHTML = "";

    searchCount = 0;

    document.getElementById("counter").innerHTML =
    "Searches: 0";

    const totalSearches =
    document.getElementById("searchCount");

    if (totalSearches) {
        totalSearches.innerHTML = "0";
    }

}

function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );

}

function changeThemeColor(color) {

    document.documentElement.style.setProperty(
        "--main-color",
        color
    );

    localStorage.setItem(
        "themeColor",
        color
    );

}

function changeLanguage() {

    const lang =
    document.getElementById("language")
    .value;

    if (lang === "ar") {

        document.querySelector("h1")
        .innerHTML =
        "🔍 نطاق الأسماء";

        document.querySelector(".subtitle")
        .innerHTML =
        "أداة احترافية للبحث عن الحسابات والملفات العامة";

    } else {

        document.querySelector("h1")
        .innerHTML =
        "🔍 NameScope";

        document.querySelector(".subtitle")
        .innerHTML =
        "Professional OSINT Profile Search Tool";

    }

}

setInterval(() => {

    const dateBox =
    document.getElementById("datetime");

    if (dateBox) {

        dateBox.innerHTML =
        new Date().toLocaleString();

    }

}, 1000);

document.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        searchProfiles();

    }

});