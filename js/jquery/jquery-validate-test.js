    $.validator.setDefaults({
        submitHandler:function(){
            alert('提交事件！取消跳过验证')
        }
    });
    $().ready(function(){
        $("#form1").validate({
            errorLabelContainer:$("#form1 div.error")
        });
        var container = $('div.container');
        var validator = $("#form2").validate({
            errorContainer:container,
            errorLabelContainer:$('ol',container),
            wrapper:'li'
        });
        $('.cancle').click(function(){
            validator.resetForm();
        });
    });