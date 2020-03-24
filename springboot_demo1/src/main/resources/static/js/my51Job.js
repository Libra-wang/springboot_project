layui.use(['rate'], function() {
    var rate = layui.rate;
    //显示文字
    rate.render({
        elem: '#test2'
        , value: 2 //初始值
        // ,text: true //开启文本
    });
});

layui.use('layer', function(){ //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句

    //触发事件
    var active = {
        confirmTrans: function(){
            //配置一个透明的询问框
            layer.msg('<div class="d1">' +
                '<h4>提示</h4>' +
                '<span>简历刷新成功</span>' +
                '</div>', {
                time: 20000, //20s后自动关闭
                btn: ['<span class="s1">关闭</span>']
            });
        }
    };

    $('#layerDemo .layui-btn').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });

});
