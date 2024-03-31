console.log(products);
let filteredProducts = [...products];


const productsContainer = document.querySelector('.products-container')

const displayProducts = () =>{
//if statement

if(filteredProducts.length < 1){
  productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
  return;
}

productsContainer.innerHTML = filteredProducts.map(({id, title, image, price})=>{
    return`<article class="product" data-id="${id}">
    <img src="${image}" 
    class="product-img img"
    />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </footer>

  </article>`;
}).join('');
};

displayProducts();

//Text Filter 

const form = document.querySelector('.input-form')
const searchInput = document.querySelector('.search-input')

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((banana)=>{
    return banana.title.toLowerCase().includes(inputValue);
  });
  displayProducts()

});


