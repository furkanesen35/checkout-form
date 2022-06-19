const taxRate = 0.18;
const shippingPrice = 15.0;
window.addEventListener("load", () => {
 // localStorage.setItem("taxRate", taxRate);
 // localStorage.setItem("shippingPrice", shippingPrice);
 sessionStorage.setItem("taxRate", taxRate);
 sessionStorage.setItem("shippingPrice", shippingPrice);
});

let productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event)=> {
 if(event.target.className == "minus"){
  if(event.target.nextElementSibling.innerText > 1){  
   event.target.nextElementSibling.innerText--;
  } 
  else { 
   if(confirm("Product will be deleted"))

  }
  // console.log("minus clicked");
 }
 else if(event.target.className == "plus"){
  event.target.previousElementSibling.innerText++;
  // console.log(event.target.classList);
  // console.log("plus clicked");
 }
 else if(event.target.classList.contains("remove-product") ){
  event.target.parentElement.parentElement.parentElement.remove();
  // console.log(event.target.classList);
  // console.log("remove clicked");
 }
 else {
  // console.log(event.target.classList);
  // console.log("others clicked"); 
 }
})