let products = {
  data: [
    {
      productName: "forg bodyoil",
      category: "recips",
      price: "30",
      image: "product-21.jpg",
    },
    {
      productName: "bittles eyes",
      category: "recips",
      price: "49",
      image: "product-20.jpg",
    },
    {
      productName: "effect granted ",
      category: "recips",
      price: "99",
      image: "product-19.jpg",
    },
    {
      productName: "ring of crab",
      category: "recips",
      price: "29",
      image: "product-23.jpg",
    },
    {
      productName: "jas de dragon",
      category: "recips",
      price: "129",
      image: "product-25.jpg",
    },
    {
      productName: "corpse beath",
      category: "recips",
      price: "89",
      image: "product-15.jpg",
    },
    {
      productName: "encer de pauple glossal",
      category: "recips",
      price: "189",
      image: "product-9.jpg",
    },
    {
      productName: "worm wart",
      category: "recips",
      price: "49",
      image: "product-22.jpg",
    },
    {
      productName: "ash of vaimpire",
      category: "recips",
      price: "49",
      image: "product-18.jpg",
    },
    {
      productName: "boomslang skin",
      category: "recips",
      price: "49",
      image: "prodcut-33.jpg",
    },
    {
      productName: "drakoula blood",
      category: "Bottomwear",
      price: "49",
      image: "product-11.jpg",
    },
    {
      productName: "moth dust",
      category: "recips",
      price: "49",
      image: "prodcut-40.jpg",
    },
    {
      productName: "drogon eggs and brians",
      category: "recips",
      price: "49",
      image: "product-13.jpg",
    },
    {
      productName: "magic steak model (rolw)",
      category: "steaks",
      price: "49",
      image: "prodcut-36.jpg",
    },
    {
      productName:  "magic steak model (esia)",
    
      category: "steaks",
      price: "49",
      image: "1.jpg",
    },
    
    {
      productName: "magic steak model (eron)",
      category: "steaks",
      price: "49",
      image: "2.jpg",
    },
     
    {
      productName: "magic steak model (kon)",
      category: "steaks",
      price: "49",
      image: "7.jpg",
    },
     
    {
      productName: "magic steak model (eman)",
      category: "steaks",
      price: "49",
      image: "8.jpg",
    },
  
     
    {
      productName: "magic steak model (yosinta)",
      category: "steaks",
      price: "49",
      image: "77.jpg",
    },
     
    {
      productName: "magic steak model (zharaa)",
      category: "steaks",
      price: "49",
      image: "00.jpg",
    },
     
    {
      productName: "magic steak model (nosa)",
      category: "steaks",
      price: "49",
      image: "78.jpg",
    },
    {
      productName: "sneaks spells",
      category: "Topwear",
      price: "30",
      image: "1q.jpg",
    },
    {
      productName: "black magic",
      category: "book",
      price: "30",
      image: "33q.jpg",
    },
    {
      productName: "sneak eye",
      category: "book",
      price: "30",
      image: "2q.jpg",
    },
    {
      productName: "elean's book",
      category: "book",
      price: "30",
      image: "3q.jpg",
    },
    {
      productName: "11thousand tonges",
      category: "book",
      price: "30",
      image: "4q.jpg",
    },
    {
      productName: "dark years",
      category: "Topwear",
      price: "30",
      image: "5q.jpg",
    },
    {
      productName: "1400bc of magic history",
      category: "book",
      price: "30",
      image: "6q.jpg",
    },
    {
      productName: "learning magic",
      category: "book",
      price: "30",
      image: "7q.jpg",
    },
    {
      productName: "mark's last words",
      category: "book",
      price: "30",
      image: "i.jpg",
    },
    {
      productName: "devil's notes",
      category: "book",
      price: "30",
      image: "ee.jpg",
    },
    {
      productName: "thousand years of widoms",
      category: "book",
      price: "30",
      image: "ww.jpg",
    },
    {
      productName: "plants seweden",
      category: "creatures",
      price: "30",
      image: "prosuct-24.jpg",
    },
    {
      productName: "plants o+ ",
      category: "creatures",
      price: "30",
      image: "product-46.jpg",
    },
    
    {
      productName: "plants A+",
      category: "creatures",
      price: "30",
      image: "prodcut-21.jpg",
    },
    {
      productName: "green legs ",
      category: "creatures",
      price: "30",
      image: "ss.jpg",
    },
    {
      productName: "baby green ",
      category: "creatures",
      price: "30",
      image: "so.jpg",
    },
    {
      productName: "grossl's ",
      category: "creatures",
      price: "30",
      image: "dd.jpg",
    },
    {
      productName: "DOdwly ",
      category: "creatures",
      price: "30",
      image: "do.jpg",
    },
    {
      productName: "pinky sweris ",
      category: "creatures",
      price: "30",
      image: "es.jpg",
    },
    {
      productName: "سحر اسود ",
      category: "arabic",
      price: "30",
      image: "2.jpeg",
    },
    {
      productName: "سحر ربط ",
      category: "arabic",
      price: "30",
      image: "33.jpeg",
    },
    {
      productName: "سحر تفريق ",
      category: "arabic",
      price: "355",
      image: "w.jpeg",
    },
    {
      productName: "جلب الحبيب ",
      category: "arabic",
      price: "355",
      image: "R.jpeg",
    },
    {
      productName: " رد المطلقه",
      category: "arabic",
      price: "355",
      image: "R.png",
    },
    
    
    
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
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
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
