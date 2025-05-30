const videos = [
    { title: "karavan Çekme", file: "videos/html.mp4" },
    { title: "CSS Öğren", file: "videos/css.mp4" },
    { title: "JavaScript Öğren", file: "videos/js.mp4" },
];

const container = document.getElementById("videoContainer");
const searchInput = document.getElementById("searchInput");

function showVideos(filter = "") {
    container.innerHTML = "";
    videos
        .filter(video => video.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(video => {
            const div = document.createElement("div");
            div.className = "video";
            div.innerHTML = `
                <h3>${video.title}</h3>
                <video width="100%" controls>
                    <source src="${video.file}" type="video/mp4">
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            `;
            container.appendChild(div);
        });
}

searchInput.addEventListener("input", () => {
    showVideos(searchInput.value);
});

showVideos(); // Sayfa yüklenince videoları göster