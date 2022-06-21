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
  let quantityP = event.target.nextElementSibling;
  if(quantityP.innerText > 1){  
   quantityP.innerText--;
   calculateProductAndCartTotal(event.target.parentElement.parentElement);
  }
  else { 
   if(confirm("Product will be deleted")){
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
   }
  }
  // console.log("minus clicked");
 }
 else if(event.target.className == "plus"){
  event.target.previousElementSibling.innerText++;
  calculateProductAndCartTotal(event.target.parentElement.parentElement);
  // console.log(event.target.classList);
  // console.log("plus clicked");
 }
 else if(event.target.classList.contains("remove-product") ){
  event.target.parentElement.parentElement.parentElement.remove();
  calculateCartTotal();
  // console.log(event.target.classList);
  // console.log("remove clicked");
 }
 else {
  // console.log(event.target.classList);
  // console.log("others clicked"); 
 }
})

//calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) => {
 let quantity = productInfoDiv.querySelector("strong").innerText;
 let price = productInfoDiv.querySelector("#product-quantity").innerText;
 let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
 productTotalDiv.innerText = (price * quantity).toFixed(2);
 calculateCartTotal();
}

const calculateCartTotal = () => {
 let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
 // console.log(productsTotalPriceDivs);
 let subtotal = 0;
 productsTotalPriceDivs.forEach(eachProductTotalDiv => {
  subtotal += parseFloat(eachProductTotalDiv.innerText);
 });
 
 let taxPrice = subtotal * localStorage.getItem("taxRate");
 let shipping = parseFloat(localStorage.getItem("shippingPrice"));
 let cartTotal = parseFloat(taxPrice + shipping + subtotal);

 document.getElementById("cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);
 
 document.getElementById("cart-tax").lastElementChild.innerText = taxPrice.toFixed(2);

 document.getElementById("cart-shipping").lastElementChild.innerText = shipping.toFixed(2);

 document.getElementById("cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}