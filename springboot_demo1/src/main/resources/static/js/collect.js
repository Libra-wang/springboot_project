var job= document.querySelector(".rli-list");
job.onclick =   function(event){
    var ele =  event.target;
    var op =   document.querySelector(".op");
    if(ele.nodeName == 'INPUT' && ele.checked == true){
        op.firstElementChild.className = "newdelete";
        op.lastElementChild.className = "newselect";
    }else if(ele.nodeName == 'INPUT' && ele.checked == false){
        op.firstElementChild.className = "delete";
        op.lastElementChild.className = "select";
    }
};

var jobAll= document.querySelector(".dw_tlc");
jobAll.onclick =   function(event){
    var ele =  event.target;
    var mycheckboxs =   document.querySelectorAll(".t12 input[type=checkbox]");
    var op =   document.querySelector(".op");
    if(ele.nodeName == 'INPUT' && ele.checked == true){
       for(var i=0;i<mycheckboxs.length;i++){
           mycheckboxs[i].checked = true;
       }
        op.firstElementChild.className = "newdelete";
        op.lastElementChild.className = "newselect";
    }else if(ele.nodeName == 'INPUT' && ele.checked == false){
        for(var i=0;i<mycheckboxs.length;i++){
            mycheckboxs[i].checked = false;
        }
        op.firstElementChild.className = "delete";
        op.lastElementChild.className = "select";
    }
};