var productContainer= document.querySelector(".myl3");
productContainer.onclick =   function(event){
    var q =  event.target;
    if(q.nodeName == 'EM' && q.className == 'myoff'){
        q.className = "myopen";
    }else {
        q.className = "myoff";
    }
};