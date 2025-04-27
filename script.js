var container = document.querySelector("#container");
var love = document.querySelector("i");

container.addEventListener("dblclick", function() {
    
    love.style.opacity = 1;
    love.style.transform.scale = 1
    setTimeout(function(){
        love.style.opacity = 0;
        love.style.transform.scale = 0
    },1000)
});
