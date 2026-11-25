let urlParams = new URLSearchParams(window.location.search);

let productId = parseInt(urlParams.get("id"));

console.log(productId);

fetch("./js/products.json")
    .then(function(response) {
        if (response.ok === false) {
            throw new Error("Fout, kan niet data fetchen");
        }
        return response.json();
    })
    .then(function(data) {
        let product = null;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === productId) {
                product = data[i];
            }
        }

        if (product === null) {
            showError("niet werkend");
            return;
        }
        buildProductPage(product);
    })
    .catch(function(error) {
        console.error("Fout: ", error);
        showError("product niet gevonden");
    });

// error bericht totnen
function showError(message) {
    let main = document.getElementById("product-page");
    main.innerHTML = "";

    let backLink = document.createElement("a");
    backLink.href = "shop.html";
    backLink.className = "back-link";
    backLink.textContent = "Terug naar shop";

    let errorMsg = document.createElement("p");
    errorMsg.textContent = message;

    main.appendChild(backLink);
    main.appendChild(errorMsg);
}
console.log(errorMsg);

// bonus 3 = dynamisch opbouwen
function buildProductPage(product) {
    let main = document.getElementById("product-page");

    main.innerHTML = "";

    // terug link
    let backLink = document.createElement("a");
    backLink.href = "shop.html";
    backLink.className = "back-link";
    backLink.textContent = "Terug naar shop";

    let detail = document.createElement("div");
    detail.className = "product-detail";

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = product.image;
    img.alt =  product.name;
    let caption = document.createElement("figcaption");
    figure.appendChild(img);
    figure.appendChild(caption);

    let title = document.createElement("h1");
    title.textContent = product.name;

    let description = document.createElement("p");
    description.className = "description";
    description.textContent = product.description;

    let specTitle = document.createElement("h2");
    specTitle.textContent = "Specifications";

    let specList = document.createElement("ul");
    specList.className = "specifications";

    for (let i = 0; i < product.specifications.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = product.specifications[i];
        specList.appendChild(listItem);
    }

    let price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "€" + product.price.toFixed(2).replace(".", ",");

    // knoppen
    let actions = document.createElement("div");
    actions.className = "product-actions";

    let cartBtn = document.createElement("button");
    cartBtn.className = "btn";
    cartBtn.textContent = "🛒Toevoegen aan winkl,andej";

    let wishBtn = document.createElement("button");
    wishBtn.className = "btn-secondary"
    wishBtn.textContent = "❤️ Toevogen aan wishlist";

    actions.appendChild(cartBtn);
    actions.appendChild(wishBtn);

    detail.append(figure);
    detail.append(title);
    detail.append(description);
    detail.append(specTitle);
    detail.append(specList);
    detail.append(price);
    detail.append(actions);
    
    main.appendChild(backLink);
    main.appendChild(detail);
}