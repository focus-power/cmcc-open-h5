$(function () {
    //ie input提示信息兼容问题
    if($('.ie').length){
        $('.revise-list li').find('em').addClass('em-revise-show');
        $('.revise-list li').on('click',function () {
            $(this).find('em').removeClass('em-revise-show');
        });

        $('.info-list li').find('em').addClass('em-revise-show');
        $('.info-list li').on('click',function () {
            $(this).find('em').removeClass('em-revise-show');
        });
    }

    //插件滑块
    var slider3 = new SliderUnlock(".revise-slider-main",{
        successLabelTip : "验证成功"
    },function(){
        $('#labelTip').attr('isOk','true');
    });
    slider3.init();

    //验证码倒计时
    var timer = null;
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
                $(obj).html(""+ time +"ｓ秒后重新发送");
                $(obj).css({'background':'#cccccc','color':'#666','opacity':1});
            }
        }
        timer = setInterval(function () {
            setTime(obj)
        },1000)
    }

    //联系客服
    $('.revise-call').on('click',function () {
        $('.call-us').show();
    });
    $('.call-close').on('click',function () {
        $('.call-us').hide();
    });

    //邮箱正则
    // var emailReg = /^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/;
    // var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    function emailVerification(emailInputValue) {
        if (!(emailReg.test(emailInputValue) )) {
            if (emailInputValue === '' || emailInputValue === undefined) {
                $('.email-error').html('请输入邮箱地址');
                return false;
            } else {
                $('.email-error').html('请输入正确邮箱地址');
                return false;
            }
        } else {
            return true;
        }
    };

    //手机号码验证
    var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    function mobileVerification(mobileInputValue) {
        if (!(myreg.test(mobileInputValue) )) {
            if (mobileInputValue === '' || mobileInputValue === undefined) {
                $('.phone-error').html('请输入手机号');
                return false;
            } else {
                $('.phone-error').html('请输入11位正确手机号');
                return false;
            }
        } else {
            return true;
        }
    };

    //修改邮箱的提交
    $(document).on('click','.info-btn',function () {
        //获取邮箱地址
        var infoEmail = $('.list-email input').val();
        var timer2 = null;

        if(emailVerification(infoEmail)){
            $('.account-info').removeClass('user-show');
            $('.revise-email-succe').addClass('user-show');
            $('.info-list .email-error').removeClass('info-error-show');

            timer2 = setTimeout(function () {
                $('.revise-email-succe').removeClass('user-show');
                $('.account-info').addClass('user-show');
            },3000);
        }else {
            $('.revise-email-succe').removeClass('user-show');
            $('.account-info').addClass('user-show');
            $('.info-list .email-error').addClass('info-error-show');
        }
    });

    //修改手机号码页面显示
    $(document).on('click','.revise-nb',function () {
        $('.account-info').removeClass('user-show');
        $('.revise-phone-number').addClass('user-show');
    });

    //修改手机页面 验证
    //旧手机号验证码验证
    $(document).on('click','.revise-btn1',function () {
        // 发送短信
        // $.ajax({
        //     url:"",    //请求的url地址
        //     dataType:"json",   //返回格式为json
        //     async:false,//请求是否异步，默认为异步，这也是ajax重要特性
        //     data:'',    //参数值
        //     type:"POST",   //请求方式
        //     success:function(req){
        //         //请求成功时处理
        //         if(req.bizCode === '1'){
        //             countDown($('.revise-btn1'));
        //             //提示已经发送验证码
        //         }
        //     },
        //     error:function(){
        //         //请求出错处理
        //     }
        // });
        countDown($('.revise-btn1'));
    });

    var reviseParameters = {
        phoneNumber:''
    };
    //新手机号验证码验证
    $(document).on('click','.revise-btn2',function () {
        //获取手机号码
        var reviseNewNumber = $('.revise-number input').val();
        if(mobileVerification(reviseNewNumber)){
            $('.phone-error').removeClass('revise-error-show');
            // 发送短信
            // $.ajax({
            //     url:"",    //请求的url地址
            //     dataType:"json",   //返回格式为json
            //     async:false,//请求是否异步，默认为异步，这也是ajax重要特性
            //     data:reviseNewNumber,    //参数值
            //     type:"POST",   //请求方式
            //     success:function(req){
            //         //请求成功时处理
            //         if(req.bizCode === '1'){
            //             countDown($('.revise-btn2'));
            //             //提示已经发送验证码
            //         }
            //     },
            //     error:function(){
            //         //请求出错处理
            //     }
            // });
            countDown($('.revise-btn2'));

            // clearInterval(timer);
            // $('.revise-btn2').attr('disabled',false);
            // $('.revise-btn2').html('重新发送');
            // $('.revise-btn2').css({'background':'#6699ff','color':'#ffffff','opacity':1,'cursor':'pointer'});
        }else{
            $('.phone-error').addClass('revise-error-show');
        }

    });
    
    //修改手机号码提交
    $(document).on('click','.number-btn',function () {
        var oldBoolean = false;
        var phoneBoolean = false;
        var newBoolean = false;
        var sliderBoolean = false;
        //旧手机号验证码不能为空
        var oldCode = $('.old-code input').val();
        if(oldCode !== ''  &&  oldCode !== undefined  &&  oldCode !== null){
            $('.sms-error').removeClass('revise-error-show');
            oldBoolean = true;
        }else{
            $('.sms-error').addClass('revise-error-show');
            oldBoolean = false;
        }
        //新手机号码验证码不能为空
        var newCode = $('.new-code input').val();
        if(newCode !== ''  &&  newCode !== undefined  &&  newCode !== null){
            $('.code-error').removeClass('revise-error-show');
            newBoolean = true;
        }else{
            $('.code-error').addClass('revise-error-show');
            newBoolean = false;
        }
        //新手机号符合要求
        var newNumber = $('.revise-number input').val();
        if(mobileVerification(newNumber)){
            $('.phone-error').removeClass('revise-error-show');
            phoneBoolean = true;
        }else{
            $('.phone-error').addClass('revise-error-show');
            phoneBoolean = false;
        }
        //滑块要滑动
        if($('#labelTip').attr('isOk')){
            $('.slider-error').removeClass('revise-error-show');
            sliderBoolean = true;
        }else{
            $('.slider-error').addClass('revise-error-show');
            sliderBoolean = false;
        }

        if(oldBoolean && phoneBoolean && newBoolean && sliderBoolean === true){
            $('.revise-number-success').addClass('user-show');
            $('.revise-phone-number').removeClass('user-show');

            //修改手机号码之后 头像下面的手机号码 还有 用户名 还有旧手机号码都应该同步更新
            reviseParameters.phoneNumber = $('.revise-number input').val();
            $('.head-phone').html(regMobile(reviseParameters.phoneNumber));
            // $('.list-name span').html(regMobile(reviseParameters.phoneNumber));
            // $('.list-number span').html(regMobile(reviseParameters.phoneNumber));
            // $('.revise-old b').html(regMobile(reviseParameters.phoneNumber));
        }
    });

    //替换手机字符
    function regMobile(mobile) {
        if (mobile.length > 7) {
            var new_mobile = mobile.substr(0, 3) + '*****' + mobile.substr(8)
        }
        return new_mobile
    }
});