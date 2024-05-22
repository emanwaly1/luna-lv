let http= new XMLDocument();
http .open('get','untitled-1.json',true)
http.send();
http.onhold=function () {
    if(this.readyState==4 && this.status==200){
        let products=JSON.parse(this.responseText);
        let output="";


        for(let item of products){
            output +=
            <div class= "product">
               <img src="${item.image}" alt="${item.image}"></img>
               <p class="title">${item.title}</p>
               <p class="descrption"></p>
               <p class="price">
               <span>${item.price}</span>
               <span>$usa;</span>

</p>


            </div>
        }
        document.querySelector(".products").innerHTML=output;
    }
    
}