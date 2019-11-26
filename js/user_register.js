$(function () {
    var numberVal = $('.register-number input');   //手机号
    var codeVal = $('.register-sms input');  //验证码
    var emailVal = $('.register-email input');      //邮箱
    var passwordVal = $('.register-code input');      //密码
    var passwordReVal = $('.confirm-code input');      //确认密码

    //注册传参
    var registerParameters = {
        phoneNumber:'',
        code:'',
        email:'',
        password:'',
        passwordRe:''
    };
    //验证码传参
    var codeParameters = {
        phone:'',
        code:''
    };

    //ie input提示信息兼容问题
    if($('.ie').length){
        $('.register-info li').each(function () {
            $(this).find('i').addClass('info-show');

            $(this).click(function () {
                $(this).find('i').removeClass('info-show');
            })
        })
    }

    //手机号码验证
    var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    function mobileVerification(mobileInputValue) {
        if (!(myreg.test(mobileInputValue) )) {
            if (mobileInputValue === '' || mobileInputValue === undefined || mobileInputValue === null) {
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
        if(codeInputValue === '' || codeInputValue === undefined || codeInputValue === null){
            $('.sms-error').html('请输入验证码');
            return false;
        }else if(codeInputValue !== codeParameters.code){
            $('.sms-error').html('验证码错误，请重新输入');
            return false;
        }else{
            return true;
        }
    }

    //邮箱正则
    // var emailReg = /^\w[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})$/;
    // var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // var emailReg = /^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/;
    // var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    // var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    function emailVerification(emailInputValue) {
        if (!(emailReg.test(emailInputValue) )) {
            if (emailInputValue === '' || emailInputValue === undefined || emailInputValue === null) {
                $('.email-error').html('请输入邮箱地址');
                return false;
            } else {
                $('.email-error').html('请输入正确邮箱地址');
                return false;
            }
        } else {
            return true;
        }
    }

    //密码正则
    // var passwordReg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/;
    var passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,}$/;
    var regNull=/\s+/g;
    function passwordVerification(passwordInputValue) {
        // if (!(passwordReg.test(passwordInputValue) )) {
        //     if (passwordInputValue === '' || passwordInputValue === undefined || passwordInputValue === null) {
        //         $('.code-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     } else {
        //         $('.code-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     }
        // } else {
        //         return true;
        // }

        // if (!(passwordReg.test(passwordInputValue))) {
        //         $('.code-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //     console.log(1)
        //         return false;
        //
        // } else {　
        //     if(regNull.test(passwordInputValue)){
        //         $('.code-error').html('密码不能包含空格');
        //         console.log(2)
        //         return false;
        //     }else {
        //         console.log(3)
        //         return true;
        //     }
        // }
        if(!(passwordReg.test(passwordInputValue)) || regNull.test(passwordInputValue)){
            $('.code-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
            return false;
        }else if(passwordReg.test(passwordInputValue) && regNull.test(passwordInputValue)){
            $('.code-error').html('密码不能包含空格');
            return false;
        }else{
            return true;
        }



    }

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

    //发送验证码
    $(document).on('click','.get-code',function () {

        //手机号码获取
        codeParameters.phone = numberVal.val();

        //验证手机号
        if(mobileVerification(codeParameters.phone)){
            $('.number-error').removeClass('error-show');
            $(this).attr('disabled',true);
            $('.register-number .info-yes').addClass('span-show');
            $('.register-number .info-no').removeClass('span-show');

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
            //             codeParameters.phone = req.data.phoneNumber;
            //             codeParameters.code = req.data.code;
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
            $('.number-error').addClass('error-show');
            $('.register-number .info-yes').removeClass('span-show');
            $('.register-number .info-no').addClass('span-show');
            $(this).attr('disabled',false);
            return false;
        }
    });

    //注册
    $(document).on('click','.register-login',function () {
        //手机号码获取
        registerParameters.phoneNumber = numberVal.val();
        //验证码获取
        var code = codeVal.val();
        //邮箱获取
        registerParameters.email = emailVal.val();
        //密码获取
        registerParameters.password = passwordVal.val();
        //再次确认密码获取
        registerParameters.passwordRe = passwordReVal.val();
        var phone_Boolean = false;
        var code_Boolean = false;
        var email_Boolean = false;
        var password_Boolean = false;
        var passwordRe_Boolean = false;
        var agree_Boolean = false;
        // 验证手机号
        if(mobileVerification(registerParameters.phoneNumber)){
            $('.number-error').removeClass('error-show');
            // $(this).attr('disabled',true);
            $('.register-number .info-yes').addClass('span-show');
            $('.register-number .info-no').removeClass('span-show');
            phone_Boolean = true;
        }else {
            $('.number-error').addClass('error-show');
            $('.register-number .info-yes').removeClass('span-show');
            $('.register-number .info-no').addClass('span-show');
            // $(this).attr('disabled',false);
            phone_Boolean = false;
        }

        //验证验证码
        if(codeVerification(code)){
            $('.sms-error').removeClass('error-show');
            $('.register-sms .info-yes').addClass('span-show');
            $('.register-sms .info-no').removeClass('span-show');
            code_Boolean = true;
        }else {
            $('.sms-error').addClass('error-show');
            $('.register-sms .info-yes').removeClass('span-show');
            $('.register-sms .info-no').addClass('span-show');
            code_Boolean = false;
        }
        // console.log('验证码')
        //邮箱验证
        if(emailVerification(registerParameters.email)){
            $('.email-error').removeClass('error-show');
            $('.register-email .info-yes').addClass('span-show');
            $('.register-email .info-no').removeClass('span-show');
            email_Boolean = true;
        }else {
            $('.email-error').addClass('error-show');
            $('.register-email .info-yes').removeClass('span-show');
            $('.register-email .info-no').addClass('span-show');
            email_Boolean = false;
        }
        // console.log('邮箱')

        //密码验证
        if(passwordVerification(registerParameters.password)){
            $('.code-error').removeClass('error-show');
            $('.register-code .info-yes').addClass('span-show');
            $('.register-code .info-no').removeClass('span-show');
            password_Boolean = true;
        }else {
            $('.code-error').addClass('error-show');
            $('.register-code .info-yes').removeClass('span-show');
            $('.register-code .info-no').addClass('span-show');
            password_Boolean = false;
        }

        // alert(password_Boolean)
        // console.log('密码')
        //再次输入密码验证
        if(registerParameters.passwordRe === registerParameters.password){
            $('.confirm-code-error').removeClass('error-show');
            $('.confirm-code .info-yes').addClass('span-show');
            $('.confirm-code .info-no').removeClass('span-show');
            passwordRe_Boolean = true;
        }else {
            $('.confirm-code-error').addClass('error-show');
            $('.confirm-code .info-yes').removeClass('span-show');
            $('.confirm-code .info-no').addClass('span-show');
            passwordRe_Boolean = false;
        }

        //是否选中同意条款
        if($('.agree input').prop("checked")){
            $('.agree-error').removeClass('error-show');
            agree_Boolean = true;
        }else{
            $('.agree-error').addClass('error-show');
            agree_Boolean = false;
        }

        if(phone_Boolean && code_Boolean && email_Boolean && password_Boolean && passwordRe_Boolean &&　agree_Boolean　== true){
            //同意条款
            $('.register-bottom').hide();
            $('.login-succe').show();
        }else{
            $('.register-bottom').show();
            $('.login-succe').hide();
        }
    });


    //协议的显示和隐藏
    $('.service-agreement-entrance').click(function () {
        $('body').addClass('modal-open');
        $('.service-agreement').removeClass('user-agreement-hidden');
    });
    $('.service-agreement-btn').click(function () {
        $('body').removeClass('modal-open');
        $('.service-agreement').addClass('user-agreement-hidden');
    });
    $('.privacy-agreement-entrance').click(function () {
        $('body').addClass('modal-open');
        $('.privacy-agreement').removeClass('user-agreement-hidden');
    });
    $('.privacy-agreement-btn').click(function () {
        $('body').removeClass('modal-open');
        $('.privacy-agreement').addClass('user-agreement-hidden');
    });
});