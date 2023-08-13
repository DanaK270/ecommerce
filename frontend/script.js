fetch('http://localhost:5000/adsCrsl')
  .then((response) => response.json())
  .then((data) => {
    let crslData = "";
    data.forEach((values, index) => {
      const isActive = index === 0 ? "active" : ""; // Add 'active' class to the first item
      crslData += `
        <div class="carousel-item ${isActive}">
            <div class="carousel-image-container">
                <img src="${values.image}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h2 class="text-light">${values.text}</h2>
                <a class="text-light text-light" href="${values.link}"> View Now </a>
            </div>
        </div>
      `;
    });
    document.getElementById("carousel-inner").innerHTML = crslData;
  })
  .catch((error) => {
    console.error("Error:", error);
  });


fetch('http://localhost:5000/products').then((data) =>{
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
