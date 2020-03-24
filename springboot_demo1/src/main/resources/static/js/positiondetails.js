
//===========
// 收藏job
//此处模拟，后期应该由数据库中取值
//===========
//给一个变量值判断是否收藏； 0：未收藏 ；1：已收藏
let collectionFlag = 0;
$(".col_stat,.job_col_star").click(function () {
    checkCollection();
    // console.log(collectionFlag);
    // console.log(typeof collectionFlag); //number
});
function checkCollection() {
    if (collectionFlag == 0) {
        $(".job_col_star").attr("src","../images/star-real.png");
        collectionFlag = 1;
        alert("职位收藏成功")
    }else {
        $(".job_col_star").attr("src","../images/star-empty.png");
        collectionFlag = 0;
    }

}

//===========
// 添加工作信息
//此处由json模拟，后期应从数据库取值
//===========

//获取工作对象的json
//使用ajax获取工作信息的json文件

//创建XMLHttpRequest请求
let xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
//打开连接对象
xhr.open("GET","../data/post.json",true);
// 准备连接
let data;
xhr.onreadystatechange = function () {
    //判断连接状态
    if (xhr.readyState == 4 && xhr.status == 200) {
        //获得json里的内容
        let jsonData = xhr.responseText;
        // 将json类型的文件转为js类型的文件
        data = JSON.parse(jsonData);
        console.log(data);
        loadJobData(data);
    }
};
//发送请求
xhr.send();
//将json
function loadJobData(data) {
    //工作名
    $(".job_name").text(data.jobName);
    //公司
    $(".job_name_a").text(data.jobCom);
    //薪水
    $(".min_salary").text(data.minSalary);
    $(".max_salary").text(data.maxSalary);
    //工作要求
    let requiresArr = new Array();
    requiresArr = data.jobRequire.split(",");
    for (let i = 0;i<requiresArr.length;i++) {
        $("#job_require").append(
            `<span>${requiresArr[i]}&nbsp;&nbsp;</span>`
        )
    }
    //公司福利
    let welfareArr = new Array();
    welfareArr = data.jobWelfare.split(",");
    for (let i = 0;i<welfareArr.length;i++) {
        $(".com_welfare").append(
            `<span>${welfareArr[i]}&nbsp;</span>`
        )
    }
}

