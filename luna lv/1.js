const carbtn = document.querySelector('.cart-btn');
const CloseCarBtn = document.querySelector('.close-cart');
const ClearCarBtn = document.querySelector('.clear-cart');
const CartDom = document.querySelector('.cart');
const Cartoverlay = document.querySelector('.cart-overlay');
const  CarItem= document.querySelector('.cart-item');
const Cartotal = document.querySelector('.cart-total');
const CartContent  = document.querySelector('.cart-content');
const proudcutsDOM = document.querySelector('.products-center');


//cart
let cart=[];
let buttonsDOM =[];
//these are the methods 
//getting the products  first locally from jeson and secand throught data mangment
//the below item responsable about getting item watch retuen from products  and getiing them from locall storage
class Products{
async getproducts(){
    try{ let result = await fetch("products.json");
    let data = await result.json();

    let products = data.items;
    products = products.map(item =>{
        const {title,price} = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title,price,id,image};
    })
    return products
}catch(error){
console.log(error);
}
}
}

//geting products

//display prouducts 
class UI{
displayProduct(products){
let result ="";
products.forEach(product => {
    result +=`
    <article class="product">
    <div class="img-container">
        <img src=${product.image} alt="product" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            add to bag
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price}</h4>
</article>`;
    
});
proudcutsDOM.innerHTML = result ;
for(let i of result){
let card = document.createElement("div");
}let card = document.createElement("div");
//image div
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
//img tag
let image = document.createElement("img");
image.setAttribute("src", i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
//container
let container = document.createElement("div");
container.classList.add("container");
//product name
let name = document.createElement("h5");
name.classList.add("sys");
name.innerText = i.sys.toUpperCase();
container.appendChild(name);
//price
let price = document.createElement("h6");
price.innerText = "$" + i.price;
container.appendChild(price);

card.appendChild(container);
document.getElementById("products").appendChild(card);

};





getBagButtons(){
    // Selecting Button through class name -
    const buttons = [...document.querySelectorAll('.bag-btn')];
    buttonsDOM = buttons;
    // .dataset(selecting the attribute in HTML i.e data)
    // than .id (it is the -id thing [data-id = 1])
    buttons.forEach(button => {
        let id = button.dataset.id;
        let inCart = cart.find(item => item.id === id);
        if (inCart){
            button.innerText = "In Cart";
            button.disabled = true;
        }else {
            button.addEventListener('click', (event) =>{
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                
                // get product from products
                // spread operator                     number of items in cart
                let cartItem = {...storage.getProduct(id), amount:1};
                // add product to the cart
                cart = [...cart, cartItem];
                // save cart in local storage
               storage.saveCart(cart);
                // set cart values
                this.setCartValues(cart);
                // display/add cart item
                this.addCartItem(cartItem);
                // show the cart
                this.showCart();
            });
        }
    });
}
setCartValues(cart){
    let tempTotal = 0 ;
    let itemsTotal = 0;
    cart.map(item =>{
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount;
    });
    Cartotal.innerText = parseFloat(tempTotal.toFixed
        (2));
    CarItem.innerText = itemsTotal;
}
    
addCartItem(item) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
        <img src=${item.image} alt="product">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>
    `
    cartContent.appendChild(div);
}
   showCart(){
    Cartoverlay.classList.add("transparentBcg");
    CartDom.classList.add("showCart")

   }
   setuppAPP(){
cart = storage.getCart();
this.setCartValues(cart);
this.populatCart(cart);
carbtn.addEventListener('click',this.showCart);
CloseCarBtn.addEventListener('click',this.hideCart)

   }
   populatCart(cart){
    cart.forEach(item =>this.addCartItem(item));

   }
   hideCart(){
    Cartoverlay.classList.remove("transparentBcg");
    CartDom.classList.remove("showCart")
    
   }
   cartLogic(){
    // Clear cart button
    clearCartBtn.addEventListener('click', () =>{
        this.clearCart();
    });
    // Cart Adding & Removing Functionality
    cartContent.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item')){
            let removeItem = event.target;
            let id = removeItem.dataset.id;     // Selects parent element of parent element i.e item-cart.
            cartContent.removeChild(removeItem.parentElement.parentElement)
            this.removeItem(id);
        }
        else if(event.target.classList.contains('fa-chevron-up')){
            let addAmount = event.target;
            let id =addAmount.dataset.id;
            let tempItem = cart.find(item => item.id === id);
            tempItem.amount = tempItem.amount + 1;
            Storage.saveCart(cart);
            this.setCartValues(cart);
            addAmount.nextElementSibling.innerText = tempItem.amount;
        }
        else if (event.target.classList.contains('fa-chevron-down')){
            let lowerAmount = event.target;
            let id = lowerAmount.dataset.id;
            let tempItem = cart.find(item => item.id === id);
            tempItem.amount = tempItem.amount - 1;
            if (tempItem.amount > 0){
                Storage.saveCart(cart);
                this.setCartValues(cart);
                lowerAmount.previousElementSibling.innerText = tempItem.amount;
            }
            else {
                cartContent.removeChild(lowerAmount.parentElement.parentElement);
                this.removeItem(id);
            }
        }
    });
}
  clearCart (){
    let  cartItem = cart.map(item=>item.id);
   cartItem.forEach(id=>this.removeItem(id));
   console.log(CartContent.children);

   while(CartContent.children.length > 0){
    CartContent.removeChild(CartContent.children[0]);
   

   }
   this.hideCart();
   }
   removeItem(id){
    cart = cart.filter( item => item.id !==id);
    this.setCartValues(cart);
    storage.saveCart(cart);
    let button = this.getsiglebutton(id);
    button.disabled = false;
    button.innerHTML = 
    `<i class="fas fa-shopping-cart"></i>add to cart`;

   }
   getsiglebutton(id){
    return buttonsDOM.find(button => button.dataset.id===id);


}
}

//local storage 
class storage{
    static saveProducts (products){
        localStorage.setItem("products",JSON .stringify
        (products));

        
    }
    static getProduct(id) {
        // goes into Browser -> Application -> localStorage -> method(getItem(stuff here it is array)) -> 
        let products = JSON.parse(localStorage.getItem('products')); 
        return products.find(product => product.id === id)
    }

    static saveCart(cart){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart(){
        return localStorage. getItem("cart")
        ?JSON.parse(localStorage.getItem("cart"))
        :[];
    }
}




//where are we going to kick things off and call the comback function these gong to call the funcations 
document.addEventListener("DOMContentLoaded", () => {
    const ui= new UI();
    const prodcuts = new Products ();
    ui.setuppAPP();

//get all product 

prodcuts
.getproducts()
.then(products =>{
    ui.displayProduct( products);
    storage.saveProducts(products);
}).then(()=>{
ui.getBagButtons();
});

});

