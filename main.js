const productsDiv = document.querySelector('.productArea');
const select = document.querySelector('.slct');
let allProducts = [];
let mensCloth = [];

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
       allProducts = products;
       renderProducts(allProducts);


      })

  select.addEventListener('change', () => {
     const value = select.value;

     if(value === 'all') {
       renderProducts(allProducts)
     } else {
      const filtred = allProducts.filter(product => {
        return product.category === value
      });
      renderProducts(filtred)
      
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
