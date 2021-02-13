const url = "https://kea-alt-del.dk/t7/api/subcategories"

fetch(url)
.then(function(res) {
    return res.json()
})
.then(function(data) {
    handleSubcategories(data)
})

function handleSubcategories(data) {
    data.forEach(showSubcat)
}

function showSubcat(subcat) {
    console.log(subcat)
    const template = document.querySelector("template").content;
    const copy =template.cloneNode(true);
    copy.querySelector(".subcategory p").textContent = subcat.subcategory;
    const parent = document.querySelector("section");
    parent.appendChild(copy);
}

//<div class="subcategory" id=belts><a href=""><p>Belts</p></a></div>