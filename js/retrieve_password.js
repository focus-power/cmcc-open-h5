$(function () {
    //参数
    var passwordParameters = {
        number:'',
        code:''
    };

    //手机号码验证
    var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    function mobileVerification(mobileInputValue) {
        if (!(myreg.test(mobileInputValue) )) {
            if (mobileInputValue === '' || mobileInputValue === undefined) {
                $('.number-error').html('请输入手机号');
                return false;
            } else {
                $('.number-error').html('请输入11位正确手机号');
                return false;
            }
        } else {
            return true;
        }
    }

    //验证码校验
    function codeVerification(codeInputValue) {
        if(codeInputValue === '' || codeInputValue === undefined  || codeInputValue === null){
            $('.code-error').html('请输入验证码');
            return false;
        }else{
            return true;
        }
    }

    //密码正则
    // var passwordReg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/;
    var passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,}$/;
    var regNull=/\s+/g;
    function passwordVerification(passwordInputValue) {

        // if (!(passwordReg.test(passwordInputValue) )) {
        //     if (passwordInputValue === '' || passwordInputValue === undefined) {
        //         $('.password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     } else {
        //         $('.password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     }
        // } else {
        //     return true;
        // }

        if(!(passwordReg.test(passwordInputValue)) || regNull.test(passwordInputValue)){
            $('.password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
            return false;
        }else if(passwordReg.test(passwordInputValue) && regNull.test(passwordInputValue)){
            $('.password-error').html('密码不能包含空格');
            return false;
        }else{
            return true;
        }
    }

    //ie input提示信息兼容问题
    if($('.ie').length){
        $('.step-prompt').find('em').addClass('em-show');
        $('.step-prompt').on('click',function () {
            $(this).find('em').removeClass('em-show');
        });
    }

    //插件滑块
    var slider1 = new SliderUnlock(".slider",{
        successLabelTip : "验证成功"
    },function(){
        $('#labelTip').attr('isOk','true');
    });
    slider1.init();

    //验证码倒计时
    function countDown(obj) {
        var time = 60 ;
        setTime(obj);
        function setTime(obj) {
            if(time <= 0){
                clearInterval(timer);
                $(obj).attr('disabled',false);
                $(obj).html('重新发送');
                $(obj).css({'background':'#6699ff','color':'#ffffff','opacity':1,'cursor':'pointer'});

                time = 60 ;
                return;
            }else {
                $(obj).attr('disabled',true);
                time--;
                time = time < 10 ? '0'+time:''+time;
                $(obj).html(""+ time +"秒后重新发送");
                $(obj).css({'background':'#cccccc','color':'#666','opacity':1});
            }
        }
        var timer = setInterval(function () {
            setTime(obj)
        },1000)
    }

    //联系客服
    $('.step2-call').on('click',function () {
        $('.call-us').show();
    });
    $('.call-close').on('click',function () {
        $('.call-us').hide();
    });

    //步骤一
    $(document).on('click','.retrieve-step1 .next-step',function () {
        //获取手机号
        passwordParameters.number = $('.step1-number input').val();

        var number_Boolean = false;
        var slider_Boolean = false;
        if(mobileVerification(passwordParameters.number)){
            $('.number-error').removeClass('p-show');
            number_Boolean = true;
        }else{
            $('.number-error').addClass('p-show');
            slider_Boolean = false;
        }

        //检测滑块是否滑动
        if($('#labelTip').attr('isOk')){
            $('.slider-error').removeClass('p-show');
            slider_Boolean = true;
        }else {
            $('.slider-error').addClass('p-show');
            slider_Boolean = false;
        }

        if(number_Boolean && slider_Boolean == true){
            $('.retrieve-step1').removeClass('div-show');
            $('.retrieve-step2').addClass('div-show');
            $('.choose-step2').addClass('li-on');
            $('.step2-phone').html(passwordParameters.number);
        }
    });

    //步骤二
    //验证码
    $(document).on('click','.step2-get',function () {
        //获取手机号
        passwordParameters.number = $('.step2-phone').html();

        //验证手机号
        if(mobileVerification(passwordParameters.number)){
            $('.number-error').removeClass('p-show');
            $(this).attr('disabled',true);
            // 发送短信
            // $.ajax({
            //     url:"",    //请求的url地址
            //     dataType:"json",   //返回格式为json
            //     async:false,//请求是否异步，默认为异步，这也是ajax重要特性
            //     data:codeParameters,    //参数值
            //     type:"POST",   //请求方式
            //     success:function(req){
            //         //请求成功时处理
            //         if(req.bizCode === '1'){
            //             passwordParameters.number = req.data.phoneNumber;
            //             passwordParameters.code = req.data.code;
            //
            //             countDown($(this));
            //             //提示已经发送验证码
            //         }
            //     },
            //     error:function(){
            //         //请求出错处理
            //     }
            // });
            countDown($(this));
            return;
        }else {
            $('.number-error').addClass('p-show');
            $(this).attr('disabled',false);
            return false;
        }
    });
    //第二步的下一步
    $(document).on('click','.retrieve-step2 .next-step',function () {
        //获取客户输入的验证码
        var code = $('.step2-code input').val();
        // if(codeVerification(code)){
        //     $('.code-error').removeClass('p-show');

            $('.retrieve-step2').removeClass('div-show');
            $('.retrieve-step3').addClass('div-show');
            $('.choose-step3').addClass('li-on');
        // }else{
        //     $('.code-error').addClass('p-show');
        // }
    });

    //步骤三
    $(document).on('click','.retrieve-step3 .next-step',function () {
        //获取密码
        var password = $('.new-password').val();
        if(passwordVerification(password)){
            $('.password-error').removeClass('p-show');

            if($('.re-password').val() === password){
                $('.re-error').removeClass('p-show');

                $('.retrieve-step3').removeClass('div-show');
                $('.retrieve-step4').addClass('div-show');
                $('.choose-step4').addClass('li-on');
            }else {
                $('.re-error').addClass('p-show');
            }
        }else{
            $('.password-error').addClass('p-show');
        }
    })
});