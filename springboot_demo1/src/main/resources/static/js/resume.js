
//左侧导航栏固定
var leftnavEle = document.querySelector(".left-nav");
$(window).scroll(function () {
    if ($(document).scrollTop()>72) {
        leftnavEle.className="fixed";
    }else {
        leftnavEle.className="left-nav";
    }
});
//跳转简历预览
function jumpPreview() {
    window.open("../resume/resume_preview.html");
}


//修改简历名 选项隐藏切换
var updatenameEle=document.querySelector(".left-nav-top");
updatenameEle.onmouseover=function () {
    document.querySelector(".updatename").style.display="inline-block";
}
updatenameEle.onmouseout=function () {
    document.querySelector(".updatename").style.display="none";
}



var btnUpdatename=document.querySelector(".updatename");

btnUpdatename.onclick=function () {
    document.querySelector(".updatename-ipt").style.display="block";
}
document.querySelector(".updatename-ipt").onblur=function () {
    this.previousElementSibling.innerText=this.value;
    this.style.display="none";
}

//显示更多个人信息
function showmore() {
    var moreInfo=document.querySelector(".info-datil");
    if (moreInfo.style.display=="none"){
        moreInfo.style.display="block";
    } else {
        moreInfo.style.display="none"
    }
}

//打开修改info
function openUpdateInfo() {
    document.querySelector(".main-body-info").style.display="none";
    document.querySelector(".update-body-info").style.display="block";
}
//修改info
function updateInfo() {
    var name=document.querySelector(".update-body-info-datil-name").value;
    var gender=$(".update-body-info-datil-gender:radio:checked").val();
    var age=document.querySelector(".update-body-info-datil-age").value;
    var worktime=document.querySelector(".update-body-info-datil-year").value;
    var telno=document.querySelector(".update-body-info-datil-telno").value;
    var status=$("#work-status").val();
    var email=$(".update-body-info-datil-email").val();
    var address=$(".update-body-info-datil-address").val();
    if (name!=""&&gender!=""&&age!=""&&worktime!=""&&telno!=""&&status!=""&&email!=""&&address!=""){
        $(".name").text(name);
        var at=address+" | "+worktime+"年工作经验"+" | "+gender+" | "+age+" | "+status;
        $(".at").text(at);
        var emailStr="邮箱： "+email;
        $(".info-email").text(emailStr);
        var telnoStr="手机： "+telno;
        $(".info-telno").text(telnoStr);
        document.querySelector(".update-body-info").style.display="none";
        document.querySelector(".main-body-info").style.display="block";
    }else {
        alert("所有选项都为必填")
    }
}

//关闭修改info
function closeUpdateInfo() {
    document.querySelector(".update-body-info").style.display="none";
    document.querySelector(".main-body-info").style.display="block";

}

//打开修改年收入
function showUpdateSalary(){
    document.querySelector(".salary-update").style.display="block";
}

function updateSalary() {
    var newsalary=document.querySelector(".new-salary").value;
    if (newsalary>0){
        document.querySelector(".salary-year").innerText=newsalary;
    }
    document.querySelector(".salary-update").style.display="none";

}
//关闭修改年收入

function closeUpdateSalary() {
    document.querySelector(".salary-update").style.display="none";

}

//开启修改求职意向
function showUpdateintention(){
    document.querySelector(".error-tip").style.display="none";
    document.querySelector(".intention-datil").style.display="block";
}
function updateintention() {
    var salaryselect=document.getElementById("salary-type");
    var index=salaryselect.selectedIndex ;
    var timeselect=document.getElementById("work-time");
    var index1=timeselect.selectedIndex ;
    var typeselect=document.getElementById("work-type");
    var index2=typeselect.selectedIndex ;

    if (document.querySelector(".salary-input").value!=""&&document.querySelector(".address-input").value!=""
        &&document.querySelector(".post-input").value!="") {
        var addEle=`<p>期望薪资：${salaryselect.options[index].value}<span>${document.querySelector(".salary-input").value}</span></p>
                <p>工作地点：<span>${document.querySelector(".address-input").value}</span></p>
                <p>期望职位：<span>${document.querySelector(".post-input").value}</span></p>
                <p>到岗时间：<span>${timeselect.options[index1].value}</span></p>
                <p>工作类型：<span>${typeselect.options[index2].value}</span></p>`;
        document.querySelector(".update-intention-div").innerHTML=addEle;

        document.querySelector(".intention-datil").style.display="none";
    }else {
        document.querySelector(".error-tip").style.display="block";
    }
}


//关闭修改求职意向
function closeupdateintention() {
    document.querySelector(".intention-datil").style.display="none";
}



//打开新增工作经验
function openaddExperience() {
    document.querySelector(".add-experience").style.display="block";
}
//新增工作经验
function addexperience() {
    if (document.querySelector(".starttime").value != "" && document.querySelector(".endtime").value != ""
        && document.querySelector(".companyname").value != "" &&document.querySelector(".companyjob").value != ""
        && document.querySelector(".companydept").value != "" &&document.querySelector(".companypeople").value != ""
        &&document.querySelector(".companytype").value != ""){

        var addEle=`<div class="experience-datail"><p>时间：${document.querySelector(".starttime").value}到${document.querySelector(".endtime").value}</p>
                <p>公司：${document.querySelector(".companyname").value}</p>
                <p>职位：${document.querySelector(".companyjob").value}</p>
                <p>公司规模、性质：${document.querySelector(".companypeople").value}、${document.querySelector(".companytype").value}</p>
                <p>工作描述：${document.querySelector("#companyDes").value}</p> <button class="delete-experience" onclick="deleteexperience(event)">删除</button>
                </div>`;
        document.querySelector(".main-body-experience").innerHTML+=addEle;
        document.querySelector(".experience-null").style.display="none";
        document.querySelector(".add-experience").style.display="none";

    }else {
        document.querySelector(".error-tip-experience").style.display="block";
    }

}

//关闭新增工作经验
function closeaddExperience() {
    document.querySelector(".add-experience").style.display="none";
}
//删除工作经验
function deleteexperience(event) {
    event.target.parentElement.style.display="none";
}




//打开新增项目经验
function openaddProject() {
    document.querySelector(".add-project").style.display="block";
}
//新增项目经验
function addproject() {
    if (document.querySelector(".companyname-project").value != "" && document.querySelector(".starttime-project").value != ""
        && document.querySelector(".endtime-project").value != "" &&document.querySelector(".projectname").value != ""
        && document.querySelector("#project-des").value != "" &&document.querySelector("#duty-des").value != ""){

        var addEle=`<div class="project-datail"><p>公司：${document.querySelector(".companyname-project").value}</p>
                <p>时间：${document.querySelector(".starttime-project").value}到${document.querySelector(".endtime-project").value}</p>
                <p>项目名：${document.querySelector(".projectname").value}</p>
                <p>项目描述：${document.querySelector("#project-des").value}</p>
                <p>责任描述：${document.querySelector("#duty-des").value}</p> <button class="delete-project" onclick="deleteproject(event)">删除</button>
                </div>`;
        document.querySelector(".main-body-project").innerHTML+=addEle;
        document.querySelector(".project-null").style.display="none";
        document.querySelector(".add-project").style.display="none";

    }else {
        document.querySelector(".error-tip-project").style.display="block";
    }

}
//关闭新增项目经验
function closeaddproject() {
    document.querySelector(".add-project").style.display="none";
}
//删除项目经验
function deleteproject(event) {
    event.target.parentElement.style.display="none";
}

//
//打开新增教育经历
function openaddedu() {
    document.querySelector(".add-edu").style.display="block";
}
//新增教育经历
function addedu() {
    if (document.querySelector(".schoolname").value != "" && document.querySelector(".starttime-edu").value != ""
        && document.querySelector(".endtime-edu").value != "" &&document.querySelector(".education").value != ""
        && document.querySelector(".major").value != "" &&document.querySelector("#major-des").value != ""){

        var addEle=`<div class="edu-datail">
                <p>时间：${document.querySelector(".starttime-edu").value}到${document.querySelector(".endtime-edu").value}</p>
                <p>学校：${document.querySelector(".schoolname").value}</p>
                <p>专业：${document.querySelector(".major").value}</p>
                <p>学历：${document.querySelector(".education").value}</p>
                <p>专业描述：${document.querySelector("#major-des").value}</p> <button class="delete-edu" onclick="deleteedu(event)">删除</button>
                </div>`;
        document.querySelector(".main-body-edu").innerHTML+=addEle;
        document.querySelector(".edu-null").style.display="none";
        document.querySelector(".add-edu").style.display="none";

    }else {
        document.querySelector(".error-tip-edu").style.display="block";
    }

}
//关闭新增教育经历
function closeaddedu() {
    document.querySelector(".add-edu").style.display="none";
}
//删除教育经历
function deleteedu(event) {
    event.target.parentElement.style.display="none";
}


//
//打开新增校内荣誉
function openaddhonor() {
    document.querySelector(".add-honor").style.display="block";
}
//新增校内荣誉
function addhonor() {
    if (document.querySelector(".time-honor").value != "" && document.querySelector(".honorname").value != ""){

        var addEle=`<div class="honor-datail">
                <p>时间：${document.querySelector(".time-honor").value}</p>
                <p>荣誉：${document.querySelector(".honorname").value}</p>
                <p>级别：${document.querySelector(".honorlevel").value}</p>
                <button class="delete-honor" onclick="deletehonor(event)">删除</button>
                </div>`;
        document.querySelector(".main-body-honor").innerHTML+=addEle;
        document.querySelector(".honor-null").style.display="none";
        document.querySelector(".add-honor").style.display="none";

    }else {
        document.querySelector(".error-tip-honor").style.display="block";
    }

}
//关闭新增校内荣誉
function closeaddhonor() {
    document.querySelector(".add-honor").style.display="none";
}
//删除校内荣誉
function deletehonor(event) {
    event.target.parentElement.style.display="none";
}



//
//打开新增技能
function openaddskills() {
    document.querySelector(".add-skills").style.display="block";
}
//新增技能
function addskills() {
    if (document.querySelector(".skillsname").value != "" && document.querySelector(".skillslevel").value != ""){

        var addEle=`<div class="skills-datail">
                <p>技能：${document.querySelector(".skillsname").value}</p>
                <p>程度：${document.querySelector(".skillslevel").value}</p>
                <button class="delete-skills" onclick="deleteskills(event)">删除</button>
                </div>`;
        document.querySelector(".main-body-skills").innerHTML+=addEle;
        document.querySelector(".skills-null").style.display="none";
        document.querySelector(".add-skills").style.display="none";

    }else {
        document.querySelector(".error-tip-skills").style.display="block";
    }

}
//关闭新增技能
function closeaddskills() {
    document.querySelector(".add-skills").style.display="none";
}
//删除技能
function deleteskills(event) {
    event.target.parentElement.style.display="none";
}


//导航栏跳转高度
function jumpPage(event){
    var eleText=event.target.innerText;
    if (eleText=="") {
        eleText=event.target.parentElement.innerText;
    }

    var targetList=$(".main-body>div");
    for (var i=0;i<targetList.length;i++){
        var targetText=targetList[i].firstElementChild.nextElementSibling.innerText;
        if (eleText==targetText){
            $("post,body").animate({scrollTop:$(targetList[i]).offset().top},{duration:500,easing:"swing"});
        }else if (eleText=="基本信息"){
            $(document).scrollTop(0);
            // $("post,body").animate({scrollTop:0},{duration:400,easing:"swing"});
        }
    }

}
$(window).scroll(function () {
    var elelist =$(".left-nav-body>div");
    var targetList=$(".main-body>div");
    // for (var i=0;i<elelist.length;i++){
    //     $(elelist[i]).css("color","black");
    //     $(elelist[i]).css("border","none");
    //     $(elelist[i]).css("border-bottom","1px solid #e4eaee");
    // }

        for (var j=0;j<targetList.length-1;j++){
            var targetText=targetList[j].firstElementChild.nextElementSibling.innerText;
            if ($(document).scrollTop()>$(targetList[j]).offset().top){
                for (var i=0;i<elelist.length;i++) {
                    var eleText = elelist[i].innerText;
                    if (targetText==eleText) {
                        $(elelist[i]).css("color","#ff6000");
                        $(elelist[i]).css("border-left","2px solid #ff6000");
                        $(elelist[i-1]).css("color","black");
                        $(elelist[i-1]).css("border","none");
                        $(elelist[i-1]).css("border-bottom","1px solid #e4eaee");
                        $(elelist[i+1]).css("color","black");
                        $(elelist[i+1]).css("border","none");
                        $(elelist[i+1]).css("border-bottom","1px solid #e4eaee");


                    }
                }
            }
        }

})

var data = {
    "基本资料": {
        "姓名": "张中浩",
        "性别": "男",
        "照片": "http://m.ywxdh.cn/images/1791aHR0cDo/vL1AuMz/c7MS6jb70vcGljLzQ6NjAxMzkyNjg/4NjYwLmpwZw==.jpg",
        "公司名称": "北京晓明科技有限公司",
        "当前行业职能": "首席技术官CTO/首席信息官CIO",
        "开始工作年份": "2010",
        "职位名称": "总经理",
        "常住地区": "北京",
        "出生年份": "1986",
        "婚姻状况": "已婚",
        "手机": "13912345678",
        "邮箱": "zhangjun@xiaoming.com",
        "国籍": "中国",
        "户口": "北京",
        "状态": "在职，急寻新工作"
    },
    "职业意向": {
        "期望行业": "计算机软件",
        "期望职能": "首席执行官CEO/总裁/总经理",
        "期望地点": "北京",
        "期望月薪": "30000",
        "期望月薪数": "12",
        "面议期望月薪": "否",
        "目前月薪": "20000",
        "目前月薪数": "12",
        "保密目前月薪": "否"
    },
    "工作经历": [
        {
            "公司名称": "北京晓明科技有限公司",
            "公司行业": "计算机软件",
            "任职开始年份": "2014",
            "任职开始月份": "1",
            "任职结束年份": "至今",
            "任职结束月份": "",
            "任职": [
                {
                    "职位名称": "首席执行官CEO/总裁/总经理",
                    "工作地点": "北京",
                    "下属人数": "100",
                    "任职开始年份": "2015",
                    "任职开始月份": "1",
                    "任职结束年份": "至今",
                    "任职结束月份": "",
                    "工作职责": "1、参与制定公司发展战略、年度经营计划和预算方案。\n2、全面管理公司研发和技术支持工作,全面负责技术层面的整体运营,包括软件研发、项目实施、销售支持及技术管理；\n3、规划公司的技术发展路线与新产品开发，实现公司的技术创新目标，及时了解和监督技术发展战略规划的执行情况；\n4、保证公司技术、产品及解决方案的市场领先性，领导公司技术发展方向及技术进步；\n5、参与重大技术项目的决策，指导、审核项目总体技术方案，对各项目进行质量评估；\n6、培养公司技术团队，监督及指导技术部门的工作，打造一支高绩效的技术团队；\n7、参与重大商务谈判和商务活动。"
                },
                {
                    "职位名称": "技术总监",
                    "工作地点": "北京",
                    "下属人数": "10",
                    "任职开始年份": "2014",
                    "任职开始月份": "1",
                    "任职结束年份": "2015",
                    "任职结束月份": "1",
                    "工作职责": "1、制订并组织实施技术系统工作目标和工作计划。\n2、组织制订并实施技术系统规章制度和实施细则。\n3、组织不合格品的审理工作。\n4、组织技术、产品开发与创新。"
                }
            ]
        },
        {
            "公司名称": "北京创新科技有限公司",
            "公司行业": "计算机软件",
            "任职开始年份": "2010",
            "任职开始月份": "1",
            "任职结束年份": "2014",
            "任职结束月份": "1",
            "任职": {
                "职位名称": "技术总监",
                "工作地点": "北京",
                "下属人数": "10",
                "任职开始年份": "2010",
                "任职开始月份": "1",
                "任职结束年份": "2014",
                "任职结束月份": "1",
                "工作职责": "1、制订并组织实施技术系统工作目标和工作计划。\n2、组织制订并实施技术系统规章制度和实施细则。\n3、组织不合格品的审理工作。\n4、组织技术、产品开发与创新。"
            }
        }
    ],
    "教育经历": [
        {
            "学校名称": "北京科技大学",
            "专业名称": "计算机软件",
            "就读开始年份": "2006",
            "就读开始月份": "9",
            "就读结束年份": "2010",
            "就读结束月份": "7",
            "学历": "本科",
            "是否统招": "是"
        },
        {
            "学校名称": "北京第一中学",
            "专业名称": "高中",
            "就读开始年份": "2003",
            "就读开始月份": "9",
            "就读结束年份": "2006",
            "就读结束月份": "7",
            "学历": "高中",
            "是否统招": "是"
        }
    ],
    "语言能力": "英语、普通话",
    "项目经验": [
        {
            "项目名称": "晓明项目管理系统",
            "公司名称": "中国移动通信集团公司",
            "项目职务": "规划设计",
            "项目开始年份": "2015",
            "项目开始月份": "1",
            "项目结束年份": "2016",
            "项目结束月份": "1",
            "项目描述": "晓明项目管理软件，是一套以进度为主线、合同为约束、预算为基准，成本/资金管理为核心、科学决策为目标的项目型企业一体化信息管理平台。\n通过这个平台,可以将项目管理有关的市场、工程、合同、预算、采购、仓库、成本、质量、安全、资料、财务、办公、售后、人力资源等进行快速整合，在提升工作效率的同时，可以通过精细化管理使企业的利润最大化，实现了事前有计划、事中有控制、事后有分析的科学化管理。",
            "项目职责": "1、对项目进行前期调查、收集整理相关资料，制定初步的项目可行性研究报告，为决策层提供建议。协同配合制定和申报立项报告材料。\n2、对项目进行分析和需求策划。\n3、对项目的组成部分或模块进行完整系统设计。\n4、制定项目目标及项目计划、项目进度表。\n5、制定项目执行和控制的基本计划。",
            "项目业绩": "项目顺利完成，客户非常满意。"
        },
        {
            "项目名称": "晓明办公管理系统",
            "公司名称": "中国联合网络通信集团有限公司",
            "项目职务": "规划设计",
            "项目开始年份": "2014",
            "项目开始月份": "1",
            "项目结束年份": "2015",
            "项目结束月份": "1",
            "项目描述": "晓明办公系统将需要关注的内容主动推送出来，让需要处理的工作一目了然。同时增加以人的维度来查看和操作数据，可直接与流程等数据发起人员进行沟通。移动门户中的组件内容、形式和UI可由用户自定义，且其他异构系统也能在门户上集成统一展现，门户有列表和九宫格的方式展现。",
            "项目职责": "1、对项目进行前期调查、收集整理相关资料，制定初步的项目可行性研究报告，为决策层提供建议。协同配合制定和申报立项报告材料。\n2、对项目进行分析和需求策划。\n3、对项目的组成部分或模块进行完整系统设计。\n4、制定项目目标及项目计划、项目进度表。\n5、制定项目执行和控制的基本计划。",
            "项目业绩": "项目顺利完成，客户非常满意。"
        }
    ],
    "自我评价": "本人性格开朗、为人诚恳、乐观向上、兴趣广泛、拥有较强的组织能力和适应能力、并具有较强的管理策划与组织管理协调能力。",
    "附加信息": "曾担任系学生会外联部干部、系团总支组织部副部长、班级生活委员等，在学生工作和外出拉赞助与商家联系的过程中，大大提高了自己的办事和处事能力",
    "擅长技能": "分布式文件系统,运维自动化,Linux,Oracle"
};





