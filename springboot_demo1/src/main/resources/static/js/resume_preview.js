var resumeData = {
    "基本资料": {
        "姓名": "张中浩",
        "照片": "../images/man.png",
        "状态": "目前正在找工作",
        "手机": "13912345678",
        "邮箱": "zhangjun@xiaoming.com",
        "性别": "男",
        "年龄": "30",
        "常住地区": "苏州",
        "工作年份": "4",
    },
    "个人信息": {
        "户口/国籍":"徐州沛县",
        "婚姻状态":"未婚",
        "政治面貌":"人民群众",
        "目前年收入":"10"
    },
    "求职意向": {
        "期望月薪": "6000-8000",
        "期望地点": "北京",
        "期望职位": "Java开发工程师",
        "期望行业": "计算机软件",
        "到岗时间": "一周内",
        "工作类型": "全职",
        "自我评价": "这就像今天我们要说的这4个专业，要学就学到最好，如果不是专业人才，毕业无人问津。"
    },
    "工作经历": [
        {
            "工作时间": "2016-2019",
            "职位名称": "技术总监",
            "公司名称": "北京腾讯科技有限公司",
            "公司行业": "计算机软件",
            "公司规模": "1000人以上",
            "公司性质": "民营",
            "工作描述": "asnasdasnbcyue聚餐随啥都能撒啊时间"
        },
        {
            "工作时间": "2015-2016",
            "职位名称": "技术总监",
            "公司名称": "南京腾讯科技有限公司",
            "公司行业": "计算机软件",
            "公司规模": "1000人以上",
            "公司性质": "民营",
            "工作描述": "asnasdasnbcyue聚餐随啥都能撒啊时间"
        }
    ],
    "项目经验": [
        {
            "项目时间": "2016-2019",
            "项目名称": "晓明办公管理系统",
            "公司名称": "南京腾讯科技有限公司",
            "项目描述": "晓明项目管理软件，是一套以进度为主线、合同为约束、预算为基准，成本/资金管理为核心、科学决策为目标的项目型企业一体化信息管理平台。\n通过这个平台,可以将项目管理有关的市场企业的利润最大化，实现了事前有计划、事中有控制、事后有分析的科学化管理。",
            "责任描述": "1、对项目进行前期调查、收集整理相关资料，制定初步的项目可行性研究报告，为决策层提供建议。协同配合制定和申报立项报告材料。\n2、对项目进行分析和需求策划。\n3、对项目的组成部分或模块目执行和控制的基本计划。",
        },
        {
            "项目时间": "2016-2019",
            "项目名称": "晓明办公管理系统",
            "公司名称": "南京腾讯科技有限公司",
            "项目描述": "晓明项目管理软件，是一套以进度为主线、合同为约束、预算为基准，成本/资金管理为核心、科学决策为目标的项目型企业一体化信息管理平台。\n通过这个平台,可以将项目管理有关的市场企业的利润最大化，实现了事前有计划、事中有控制、事后有分析的科学化管理。",
            "责任描述": "1、对项目进行前期调查、收集整理相关资料，制定初步的项目可行性研究报告，为决策层提供建议。协同配合制定和申报立项报告材料。\n2、对项目进行分析和需求策划。\n3、对项目的组成部分或模块目执行和控制的基本计划。",
        }
    ],

    "教育经历": [
        {
            "时间": "2016-2019",
            "学校名称": "北京科技大学",
            "学历": "本科",
            "专业名称": "计算机软件工程",
            "专业描述": "计算机软件阿大撒大撒vv建议买个盒饭那你还能",
        }
    ],
    "校内荣誉": [
        {
            "获奖时间": "2016",
            "奖项名称": "全国高数比赛一等奖",
            "奖项级别": "国家级",
        }
    ],
    "技能特长": [
        {
            "技能名": "分布式文件系统",
            "掌握程度": "精通",
        },
        {
            "技能名": "Linux",
            "掌握程度": "熟练",
        },
        {
            "技能名": "MySQL",
            "掌握程度": "精通",
        }
    ]
};

//
$(".name").text(resumeData.基本资料.姓名);
var info_datil_1="🚩"+resumeData.基本资料.状态+"； 📱："+resumeData.基本资料.手机+"；✉："+resumeData.基本资料.邮箱;
$(".info-datil-1").text(info_datil_1);
var info_datil_2=resumeData.基本资料.性别+" | "+resumeData.基本资料.年龄+"岁 | "+"现居住:"+resumeData.基本资料.常住地区+"|"+resumeData.基本资料.工作年份+"年工作经验";
$(".info-datil-2").text(info_datil_2);
$(".id").text("ID:400720661")


$(".intro-work-2").text(resumeData.工作经历[0].职位名称);
$(".intro-work-4").text(resumeData.工作经历[0].公司名称);
$(".intro-work-6").text(resumeData.工作经历[0].公司行业);

$(".intro-edu-2").text(resumeData.教育经历[0].专业名称);
$(".intro-edu-4").text(resumeData.教育经历[0].学校名称);
$(".intro-edu-6").text(resumeData.教育经历[0].学历);
// $(".info-datil-1").text()
$(".personal-2").text(resumeData.个人信息["户口/国籍"]);
$(".personal-4").text(resumeData.个人信息.婚姻状态);
$(".personal-6").text(resumeData.个人信息.政治面貌);


$(".salary-year").text(resumeData.个人信息.目前年收入);


$(".intention-2").text(resumeData.求职意向.期望月薪+"元/月");
$(".intention-4").text(resumeData.求职意向.期望地点);
$(".intention-6").text(resumeData.求职意向.期望职位);
$(".intention-8").text(resumeData.求职意向.期望行业);
$(".intention-10").text(resumeData.求职意向.到岗时间);
$(".intention-12").text(resumeData.求职意向.工作类型);
$(".intention-14").text(resumeData.求职意向.自我评价);


for (var i=0;i<resumeData.工作经历.length;i++){
    var eleAdd=`<div class="experience-single">
                <span class="experience-single-1">${resumeData.工作经历[i].工作时间}年</span>
                <span class="experience-single-2">${resumeData.工作经历[i].职位名称}</span>
                <span class="experience-single-3">${resumeData.工作经历[i].公司名称}</span>
                <span class="experience-single-4">${resumeData.工作经历[i].公司行业}&nbsp;|&nbsp; ${resumeData.工作经历[i].公司规模}&nbsp; |&nbsp; ${resumeData.工作经历[i].公司性质}</span>
                <span class="experience-single-5">工作描述：</span>
                <span class="experience-single-6">${resumeData.工作经历[i].工作描述}</span>
            </div>`;
    $(".experience").append(eleAdd);
}

// $(".info-datil-1").text()
for (var i=0;i<resumeData.项目经验.length;i++) {
    var eleAdd=`<div class="project-single">
                <span class="project-single-1">${resumeData.项目经验[i].项目时间}</span>
                <span class="project-single-2">${resumeData.项目经验[i].项目名称}</span>
                <span class="project-single-3">所属公司：</span>
                <span class="project-single-4">${resumeData.项目经验[i].公司名称}</span>
                <span class="project-single-5">项目描述:</span>
                <span class="project-single-6">${resumeData.项目经验[i].项目描述}</span>
                <span class="project-single-7">责任描述：</span>
                <span class="project-single-8">${resumeData.项目经验[i].责任描述}</span>
            </div>`;

    $(".project").append(eleAdd);
}
//教育经历
for (var i=0;i<resumeData.教育经历.length;i++) {
    var eleAdd=`<div class="edu-single">
                <span class="edu-single-1">${resumeData.教育经历[i].时间}</span>
                <span class="edu-single-2">${resumeData.教育经历[i].学校名称}</span>
                <span class="edu-single-3">${resumeData.教育经历[i].学历}&nbsp;|&nbsp;${resumeData.教育经历[i].专业名称}</span>
                <span class="edu-single-4">专业描述:</span>
                <span class="edu-single-5">${resumeData.教育经历[i].专业描述}</span>
            </div>`;

    $(".edu").append(eleAdd);
}
//校内荣誉
for (var i=0;i<resumeData.校内荣誉.length;i++) {
    var eleAdd=`<div class="honor-single">
                <span class="honor-single-1">${resumeData.校内荣誉[i].获奖时间}年</span>
                <span class="honor-single-2">${resumeData.校内荣誉[i].奖项名称}</span>
                <span class="honor-single-3">${resumeData.校内荣誉[i].奖项级别}</span>
            </div>`;

    $(".honor").append(eleAdd);
}
// 技能特长
for (var i=0;i<resumeData.技能特长.length;i++) {
    var eleAdd=`<div class="skills-single">
                <span class="skills-single-1">技能:</span>
                <span class="skills-single-2">${resumeData.技能特长[i].技能名}</span>
                <span class="skills-single-3">掌握程度:</span>
                <span class="skills-single-4">${resumeData.技能特长[i].掌握程度}</span>
            </div>`;

    $(".skills").append(eleAdd);
}

















