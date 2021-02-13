//create navigation
//<li><a hrf="#letter_a">A</a></li>

const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArray = letters.split("");
console.log(letterArray);
letterArray.forEach(getLetter);

function getLetter(letter) {
    createNavLink(letter);
    createSection(letter);
}

function createSection(letter) {
const template = document.querySelector("#section-header").content;
const copy = template.cloneNode(true);
copy.querySelector("h1").textContent = letter;
copy.querySelector("section").id = `letter_${letter}`;
document.querySelector(".group").appendChild(copy);
}

function createNavLink(letter) {
    const template = document.querySelector("#letters").content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").textContent=letter;
    copy.querySelector("a").href = `#letter_${letter}`
    document.querySelector(".letterLinks ol").appendChild(copy);
}


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
    const temp = document.querySelector("#letters").content;
    const clone = temp.cloneNode(true);
    clone.querySelector("a").textContent = subcat.subcategory;
    clone.querySelector("a").href = `productlist.html?subcategory=${subcat.subcategory}`
    const firstLetter = subcat.subcategory[0].toLowerCase();
    const topParent = document.querySelector(`#letter_${firstLetter}`);
    const elemParent = topParent.querySelector("ol");
    elemParent.appendChild(clone);
}

//<div class="subcategory" id=belts><a href=""><p>Belts</p></a></div>