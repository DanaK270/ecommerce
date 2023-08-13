const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const adsCrsl=[
    {id:1, text: 'Execlusive Jewelery Designs!', image:'images/jewe.jpg' , link:'#'},
    {id:2, text: 'Explore our New Collection of Accessories', image:'images/acc.jpg' , link:'#'}
];


const products = [
  { id: 1, name:'white tshirt', price: 15 , image: 'images/tshirt.jpg', view:'productDetails.html?id=1', rating: 3,category:'clothes', description:'classic white t-shirt, crafted from soft and breathable cotton for ultimate comfort.'},
  { id: 2, name: 'blue polo shirt', price: 20 , image: '../images/shirt.jpg', view:'productDetails.html?id=2', rating: 3,category:'clothes', description:' stylish blue polo shirt, designed with a modern twist on a classic silhouette. Crafted from high-quality materials.'},
  { id: 3, name: 'hat', price: 12 , image: '../images/hat.jpg', view:'productDetails.html?id=3', rating: 2,category:'accessories', description:'Made from durable materials, this hat features an adjustable strap for a customized fit and a wide brim for excellent sun protection, making it the perfect accessory for outdoor adventures or everyday wear.'},
  { id: 4, name: 'watch', price: 40 , image: '../images/watch.jpg', view:'productDetails.html?id=4', rating: 3,category:'accessories', description:'boasts a sleek stainless steel case, a reliable quartz movement, and a luxurious leather strap, making it a sophisticated accessory that seamlessly blends timeless style with modern functionality.'},
  { id: 5, name: 'bracelet', price: 70 , image: '../images/bracelet.jpg', view:'productDetails.html?id=5', rating: 4,category:'jewelery', description:' Made from 21K gold and featuring a delicate yet durable design'},
  { id: 6, name: 'leather bag', price: 50 , image: '../images/bag.jpg', view:'productDetails.html?id=6', rating: 5,category:'accessories', description:'Made from genuine leather, this spacious bag offers both style and functionality, with multiple compartments and sturdy handles, making it the perfect companion for any occasion.'}
];



app.listen(5000, () => console.log('Server is running on port 5000'));


app.get('/adsCrsl', (req, res) => {
    res.json(adsCrsl);
});
// GET /products
app.get('/products', (req, res) => {
    res.json(products);
  });

app.get('/products/:category', (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(product => product.category === category);
  res.json(filteredProducts);
});

app.get('/products/category/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  console.log("product id",productId);
  // Find the product with the matching ID
  const product = products.find(product => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});



  