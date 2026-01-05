const productsDiv = document.querySelector('.productArea')

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
       products.forEach(product => {
         const div  = document.createElement('div');
        //  if(product.category === "women's clothing") {
        //      div.style.display = 'none'
        //  }

         div.innerHTML = `
          <img class = 'images' src='${product.image}'>
          <h3 class = 'hh3'>${product.title}</h3>
          <p> Rate: ${product.rating.rate} / 10</p>
          <p class='price'>${product.price} $</p>
         `;
       
      productsDiv.appendChild(div)
       })
  })
