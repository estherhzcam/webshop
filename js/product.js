//Const the url params
const urlParams = new URLSearchParams(window.location.search);
//in the URL grab the id and store its value
const id = urlParams.get("id");
console.log(id);

//URL API
const url ="https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
.then(res=>res.json())
.then(data=>showProduct(data));

function showProduct(product){
console.log(product);
document.querySelector(".product-name").textContent = product.productdisplayname;
document.querySelector(".subcategory").textContent = product.subcategory;
document.querySelector(".brand").textContent = product.brandname;
document.querySelector(".price").textContent = product.price;
document.querySelector("img.product-img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector("img.product-img").alt = product.productdisplayname;
}
//populate psgr