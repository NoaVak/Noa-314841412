//mark the current page in 
const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('nav a').
forEach(link => {    
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

//function that  blut the backround and pops a message- for shipment and "add to cart"
function toggle(){
    var blur=document.getElementById('blur')
    blur.classList.toggle('active')
    var PopUp=document.getElementById('PopUp')
    PopUp.classList.toggle('active')
}


//return the date-for the baker's orders page
function ShowToday(){
    date = new Date().toLocaleDateString();
    document.write(date);
}


