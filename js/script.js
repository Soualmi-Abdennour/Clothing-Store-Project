let menu_btn = document.getElementById('menu');
let navbar = document.getElementById('navbar')
let close_btn = document.getElementById('close-btn')
menu_btn.addEventListener('click', () => navbar.classList.add('active'))
close_btn.addEventListener('click', () => navbar.classList.remove('active'))


let current_product=document.getElementById('current-product-img')
let slider_products=document.querySelectorAll('.slider div')
let slider_product_arr=Array.from(slider_products)
slider_product_arr.forEach((product)=>product.addEventListener('click' ,()=>current_product.setAttribute('src',product.children[0].getAttribute('src'))))
