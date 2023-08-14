function displayProducts(category) {
    fetch(`http://localhost:5000/products/${category}`).then((data) =>{
            return data.json(); //converted to object
        }).then((objectData) => {
            let cardsData="";
            objectData.map((values)=>{
            let starsHTML = "";
            for (let i = 0; i < values.rating; i++) {
                starsHTML += ` <i class="fa-solid fa-star" style="color: #fee439;"></i>`;
            }
                cardsData+=`<div class="col-md-4 themed-grid-col">
                <div class="card mb-4 rounded-3 shadow-sm" style="width: 18rem;">
                    <div class="img-container">
                        <img src="${values.image}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${values.name}</h5>
                        <h5 class="card-title">$${values.price}</h5>
                        ${starsHTML}<br>
                        <a class="card-text" href="${values.view}"> Product Details </a>
                        <br><br>
                        <a href="#" class="btn btn-secondary">Add to Bag</a>
                    </div>
                </div>
            </div>`;
            });
            document.getElementById("cards-container").innerHTML=cardsData;
        });
    }




// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');


fetch(`http://localhost:5000/products/category/${productId}`)
  .then(response =>response.json()) 
  .then(product => {

    var pCat=product.category;
    // Access the product data and render it on the page
    document.getElementById('product-img-cont').innerHTML=`<img src="${product.image}"  alt="...">`;
    
    let starsHTML = "";
    for (let i = 0; i < product.rating; i++) {
        starsHTML += ` <i class="fa-solid fa-star" style="color: #fee439;"></i>`;
    }
    
    let productInfo=
    `<h2>${product.name}</h2><br>
    <h5> Price: $${product.price}</h5>
    ${starsHTML}<br><br>
    <p>${product.description}</p>`;

    document.getElementById('product-info').innerHTML=productInfo;
    displayProducts(pCat);

  })
  .catch(error => {
    console.error('Error:', error);
  });

