const dropdowns = querySelectorAll(".dropdown-container"),
    inputLanguageDropdown = document.querysSelector("#input-language"),
    outputLanguageDropdown = document.querySelector("#output-language");


function pouplateDropdown(dropdown, options) {
    dropdown.querySelector("ul").innerHTML = "";
    options.forEach((option) => {
        const li = document.createElement("li");
        const title = option.name + " (" + option.native + ")";
        li.innerHTMl = title;
        li.dataset.value = option.code;
        li.classList.add("option");
        dropdown.querySelector("ul").appendChild(li);

    });
}