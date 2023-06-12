
var icon1 = document.querySelector(".icon-search")
var searchBox = document.querySelector(".search-box")
var icon2 = document.querySelector(".icon-search2")
var bg = document.querySelector(".bg")
icon1.addEventListener("click" , function(){
    icon1.classList.add("active")
    document.body.style.backgroundColor = "black"
    searchBox.classList.remove("active")
    icon2.classList.remove("active")
    setTimeout(function(){
        bg.classList.remove("active")
    } , 500)
    

})

bg.addEventListener("click" , function(){
    icon1.classList.remove("active")
    document.body.style.backgroundColor = "white"
    searchBox.classList.add("active")
    icon2.classList.add("active")
    setTimeout(function(){
        bg.classList.add("active")
    } , 500)
})












