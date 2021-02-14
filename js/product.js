//Const the url params
const urlParams = new URLSearchParams(window.location.search);
//in the URL grab the id and store its value
const id = urlParams.get("id");

//URL API
const url ="https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
.then(res=>res.json())
.then(data=>showProduct(data));

function showProduct(product){
let discount = product.discount;
document.querySelector(".product-name").textContent = product.productdisplayname;
document.querySelector(".subcategory").textContent = product.subcategory;
document.querySelector(".brand").textContent = product.brandname;
document.querySelector(".price").textContent = `DKK ${product.price}`;
document.querySelector("img.product-img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector("img.product-img").alt = product.productdisplayname;
if(product.soldout) {
    document.querySelector(".product").classList.add("soldout");
}
if(discount) {
    let disc = product.discount / 100;
    let discounted = product.price * disc;
    document.querySelector("#product-card").classList.add("onsale");
    document.querySelector("#sale").textContent = `- ${discount}%`;
    document.querySelector(".discounted-price").textContent = `New DKK ${product.price - discounted}`;
}
}
//populate psgr