const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    handleProductList(data);
})

function handleProductList(data){
    console.log (data)
    data.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    //grab template
    const template = document.querySelector("#smallProductTemplate").content;
     //clone template
    const copy = template.cloneNode(true);   
    //populate data
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    copy.querySelector("img").alt = product.productdisplayname;
    copy.querySelector("h2").textContent = product.productdisplayname;
    copy.querySelector(".subtitle").textContent = `${product.articletype} - ${product.brandname}`;
    if(product.soldout) {
        copy.querySelector("article").classList.add("soldout");
    }
    if(product.discount) {
        let disc = product.discount / 100;
        let discounted = product.price * disc;
        copy.querySelector("article").classList.add("onsale");
        copy.querySelector(".discounted p:last-child").textContent = `- ${product.discount}%`;
        copy.querySelector(".discounted p").textContent = `New DKK ${product.price - discounted}`;
        copy.querySelector(".price").textContent = "Prev. DKK " + product.price;
    }
    //grab parent
    const parent = document.querySelector("#product-grid")
    //append it
    parent.appendChild(copy);

}

/*<article class="smallproduct">
<img src="https://kea-alt-del.dk/t7/images/webp/640/1526.webp" alt="Big Cat Backpack Black">
<div class=info-product>
<h2>Big Cat Backpack Black</h2>
<p class=subtitle>Bags - Puma</p>
<p class=price><span>Prev.</span>DKK 1299.-</p>
<div class=discounted><p>Now .-</p><p>-34%</p></div></div>    
<div class=product-link><a href="product.html" target="_blank">Ver producto</a></div>
</article>*/