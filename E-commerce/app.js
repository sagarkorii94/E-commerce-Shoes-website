const wrapper= document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 15000,
      colors: [
        {
          code: "black",
          img: "./img11/air.png",
        },
        {
          code: "darkblue",
          img: "./img11/air2.png",
        },
      ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: "₹ 25,000",
        colors: [
          {
            code: "lightgray",
            img: "./img11/jordan.png",
          },
          {
            code: "green",
            img: "./img11/jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: "₹ 10,000",
        colors: [
          {
            code: "lightgray",
            img: "./img11/blazer.png",
          },
          {
            code: "green",
            img: "./img11/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price:"₹ 12000" ,
        colors: [
          {
            code: "black",
            img: "./img11/crater.png",
          },
          {
            code: "lightgray",
            img: "./img11/crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: "₹ 10,000",
        colors: [
          {
            code: "gray",
            img: "./img11/hippie.png",
          },
          {
            code: "black",
            img: "./img11/hippie2.png",
          },
        ],
      },
    ];
let choosenProduct=products[0]
const currentProductImg =document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice =document.querySelector(".productPrice");
const currentProductColors =document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform =`translate(${-100*index}vw)`;
        choosenProduct=products[index]
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent=choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;

        });

    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor="white"
            size.style.color="black";
        });   
        size.style.backgroundColor="black"
        size.style.color="white";
    });
});
const productButton=document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
 
productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});
close.addEventListener("click",()=>{
    payment.style.display="none"
}); 
