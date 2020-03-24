var pager = {
    pageIndex:1,//当前页码
    pageCount:3,//每页显示多少条数据
    pageMax:0,//数据有一共多少页

}
var i = "<div class=\"apox\" >\n" +
    "                                <div class=\"l11\">\n" +
    "                                    <a href=\"\">Java开发实习生</a>\n" +
    "                                    <span class=\"sav\">4-6千/月</span><br>\n" +
    "                                    <a class=\"gongsi\" href=\"\">江苏亿友慧云软件股份有限公司</a>\n" +
    "                                    <span class=\"gong\">|</span>\n" +
    "                                    <span class=\"city\">苏州</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"l2\">\n" +
    "                                    <label class=\"rq\">申请于</label>\n" +
    "                                    <label class=\"rq\">2010-01-13</label><br>\n" +
    "                                    <label class=\"jl\">申请简历：</label>\n" +
    "                                    <label class=\"jl\">我的简历1</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"l3\">\n" +
    "                                    <label>近两月申请：</label>\n" +
    "                                    <i>268</i>\n" +
    "                                    <label>人</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"l4\">\n" +
    "                                    <a href=\"\" class=\"l4a\">我的竞争力分析</a>\n" +
    "                                </div>\n" +
    "                            </div>";

var b = "<div class=\"apox\" >\n" +
    "                                <div class=\"l11\">\n" +
    "                                    <a href=\"\">Java项目经理</a>\n" +
    "                                    <span class=\"sav\">8千/月</span><br>\n" +
    "                                    <a class=\"gongsi\" href=\"\">江苏亿友慧云软件股份有限公司</a>\n" +
    "                                    <span class=\"gong\">|</span>\n" +
    "                                    <span class=\"city\">苏州</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"l2\">\n" +
    "                                    <label class=\"rq\">申请于</label>\n" +
    "                                    <label class=\"rq\">2010-01-13</label><br>\n" +
    "                                    <label class=\"jl\">申请简历：</label>\n" +
    "                                    <label class=\"jl\">我的简历1</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"l3\">\n" +
    "                                    <label>近两月申请：</label>\n" +
    "                                    <i>268</i>\n" +
    "                                    <label>人</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"l4\">\n" +
    "                                    <a href=\"\" class=\"l4a\">我的竞争力分析</a>\n" +
    "                                </div>\n" +
    "                            </div>";
var obj={other:{},value:[i,b,b,b,i,]};//模拟数据

document.querySelector(".mt-l i").innerText = obj.value.length;

$(function(){
//一共有多少页
    pager.pageMax=obj.value.length % pager.pageCount?parseInt(obj.value.length / pager.pageCount)+1:obj.value.length / pager.pageCount;
    var btnBox='';

//循环出多少页
    btnBox+='<a href="javascript:;" data-type="first">首页</span><a href="javascript:;" data-type="firstPage">上一页</a>'
    for(var i=1;i<=pager.pageMax;i++){
        var j =i;
        btnBox+='<a href="javascript:;" data-type="'+j+'">'+j+'</a>'
    }
    btnBox+='<a href="javascript:;" data-type="nextPage"">下一页</a><input type="text" value="1" class="int" placeholder="1"><button class="btn-yes">确定</button><a href="javascript:;" data-type="last">尾页</a>'
    console.log(pager.pageMax)

    $('#page').html(btnBox)
    $('#page a:nth-child(3)').addClass('active')
    listBox(1);
//页码选中


//点击页数获取数据
    $('#page a').on('click',function(){

        var num= $(this).attr('data-type')
        if(!isNaN(num)){
            listBox(num)
            pager.pageIndex=Number(num)//unm是字符串，要转为数字类型

        }else{
            switch(num){
                case 'first':listBox(1);//首页
                    pager.pageIndex=1
                    break;
                case 'last':listBox(pager.pageMax);//尾页
                    pager.pageIndex=pager.pageMax
                    break;
                case 'nextPage'://下一页
                    if(pager.pageIndex < pager.pageMax){
                        console.log(typeof(pager.pageIndex))
                        listBox(pager.pageIndex+1)
                        pager.pageIndex=pager.pageIndex+1
                        console.log(pager.pageIndex)
                    }
                    break;
                case 'firstPage'://上一页
                    if(pager.pageIndex > 1){
                        listBox(pager.pageIndex-1)
                        pager.pageIndex=pager.pageIndex-1
                    }
                    break;
            }
        }

        pageNum()
        $('.int').val(pager.pageIndex)

    })

//填写页数搜索
    $('.btn-yes').on('click',function(){
        if($('.int').val()){

            if($('.int').val()<1){
                listBox(1)
                pager.pageIndex=1
                $('.int').val(1)
            }else if($('.int').val()>pager.pageMax){
                listBox(pager.pageMax)
                pager.pageIndex=pager.pageMax
                $('.int').val(pager.pageMax)
            }else{
                listBox($('.int').val())
                pager.pageIndex=$('.int').val()
            }
        }
        pageNum()
    })


})

//选中页码

function pageNum(){
    $('#page a').each(function(){

        if($(this).attr('data-type')==pager.pageIndex){
            $(this).addClass('active').siblings().removeClass('active')
        }
    })
}
//列表
function listBox(numIndex){

    var numList=numIndex * pager.pageCount>obj.value.length?obj.value.length:numIndex * pager.pageCount;//循环到的数据
    var numNext=(numIndex-1) * pager.pageCount//从那条数据开始循环
    console.log(numNext)
    console.log(numList)
    var xhtml='';

    for(var i=numNext;i<numList;i++){

        xhtml+=obj.value[i]
    }
    console.log(xhtml)
    $('#list').html(xhtml);
}
