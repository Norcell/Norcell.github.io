let products = {
  data: [
    {
      productName: "NVIDIA GeForce RTX 3090",
      category: "gpu",
      price: "2099.99",
      image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-600-p@2x.png",
    },
    {
        productName: "AMD RYZEN 7 5700X",
        category: "processor",
        price: "399.99",
        image: "https://www.amd.com/system/files/2020-09/616656-amd-ryzen-7-5000-series-PIB-1260x709_0.png",
    },
    {
        productName: "DEEPCOOL MATREXX 55",
        category: "case",
        price: "139.99",
        image: "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cases/Matrexx_55_Mesh_4F/Overview/01.png?fm=webp&q=60",
        
    },
    {
        productName: "SAPLOS Radeon RX 550",
        category: "gpu",
        price: "240.00",
        image: "https://i.ibb.co/S71yzTX/600.png",
    },
    {
        productName: "GAMER XTREME WDB 100",
        category: "prebuild",
        price: "1999.99",
        image: "https://www.cyberpowerpc.com/images/cs/amethystii241v/cs-450-166_400.png",
    },
    { 
        productName: "CORSAIR 7000D AIRFLOW",
        category: "case",
        price: "359.99",
        image: "https://i.ibb.co/8b1QvX0/CC-9011218-WW-Gallery-7000-D-AIRFLOW-BLACK-01.webp",
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
