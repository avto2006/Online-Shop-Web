const productsDiv = document.querySelector('.productArea');
const select = document.querySelector('.slct');
let allProducts = [];
let mensCloth = [];

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
       allProducts = products;
       renderProducts(allProducts);
       mensCloth =  products.filter(product  => 
        product.category === "men's clothing"

      )
      

  })

  select.addEventListener('change', () => {
     const value = select.value;

     if(value === 'All item') {
       renderProducts(allProducts)
     } else if(value === "Men's Clothes") {
       renderProducts(mensCloth)
     }
     
  });

  const renderProducts = (products) => {
       productsDiv.innerHTML = ''
  

   products.forEach(product => {
     const div = document.createElement('div')
   

         div.innerHTML = `
          <img class = 'images' src='${product.image}'>
          <h3 class = 'hh3'>${product.title}</h3>
          <p> Rate: ${product.rating.rate} / 10</p>
          <p class='price'>${product.price} $</p>
          <button class = 'buy'>Buy</button>
         `;
       
      productsDiv.appendChild(div)
  });
}
