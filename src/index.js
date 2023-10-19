(async () => {
    const data = await (await fetch("https://tycho10101.github.io/Share10101/data/index.json")).json();
    data.forEach(data => {
        const div = document.createElement("div");
        div.className = "Project";
        div.oncontextmenu = e => {
            e.preventDefault();
            let menu = document.getElementById("contextMenu");
            menu.querySelector(".Open").hidden = false;
            menu.querySelector(".NewTab").hidden = false;
            menu.querySelector(".Original").hidden = false;
            menu.querySelector(".Open a").href = "https://tycho10101.github.io/Share10101/" + data.id + "/";
            menu.querySelector(".NewTab a").href = "https://tycho10101.github.io/Share10101/" + data.id + "/";
            menu.querySelector(".Original a").href = "https://scratch.mit.edu/projects/" + data.id;
            menu.hidden = false;
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
        div.innerHTML = `
            <div class="thumbnail-image">
                <a href="https://tycho10101.github.io/Share10101/${data.id}/">
                    <img src="${data.thumbnail}">
                </a>
            </div>
            <div class="thumbnail-info">
                <a target="_blank" href="https://scratch.mit.edu/users/${data.author}/">
                    <img src="${data.pfp}">
                </a>
                <div class="thumbnail-title">
                    <a href="https://tycho10101.github.io/Share10101/${data.id}/">
                        <div class="title">${data.title}</div>
                    </a>
                    <div class="username" target="_blank" href="https://scratch.mit.edu/users/${data.author}/">${data.author}</div>
                </div>
            </div>
        `;
        document.getElementById("ModLoaders").appendChild(div);
    });
        document.querySelector("#search input").oninput = e => {
        [...document.getElementById("ModLoaders").children].forEach(element => {
            if (element.children[1].children[1].children[0].innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                element.style.display = "";
            } else {
                element.style.display = "none";
            }
        });
    }

    document.addEventListener("click", () => document.getElementById("contextMenu").hidden = true);
})();