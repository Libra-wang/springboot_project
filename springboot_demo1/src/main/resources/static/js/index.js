document.querySelector(".mome").onclick=function () {
   if(document.querySelector(".mome").id=="mome1"){
       document.querySelector(".hcbox").style.display = "block";
       document.querySelector(".mome").id="mome2";
   }
    else {
        document.querySelector(".hcbox").style.display = "none";
        document.querySelector(".mome").id="mome1";
    }
}


/*加载最新的10条招聘记录*/
getLatest();


function getLatest() {
    // console.log("getget ....");
    $.ajax({
        type:"GET",
        url:"/job?op=getlatest",
        datatype:"json",
        success:function (jsonResult) {
            // console.log(jsonResult);
            var jobList = JSON.parse(jsonResult).data;
            // 渲染
            $(".newJobUl").html("");

            $.each(jobList,function(index,job){
                var liEle = "<li>\n" +
                    "            <a href=\"javascript:getById(1001)\">\n" +
                    "                <span class=\"jobName\">"+job.jobName+"</span>\n" +
                    "                <span class=\"jobSalary\">"+job.jobMaxSalary+"</span>\n" +
                    "                <span class=\"jobSalary\">元</span>\n" +
                    "            </a>\n" +
                    "        </li>";
                $(".newJobUl").append(liEle);
            });


        }

    })
}

//首页的搜索按钮
$(".sbtn").click(function () {
    var kw = $(".keyword").val();
    location.href="/job/all.jsp?kw="+kw;
});