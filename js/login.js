$(function () {
    var numberPrompt = $('.password-login .number-prompt');   //用户名提示
    var passwordPrompt = $('.password-login .password-prompt');  //密码提示
    var sliderPrompt = $('.password-login .slider-prompt');      //滑块提示

    var phoneNumber = $('.sms-login .number-prompt');  //手机号提示
    var smsSlider = $('.sms-login .slider-prompt');    //验证码登录滑块提示
    var codePrompt = $('.sms-login .code-prompt');     //验证码提示
    // var phone = $('#phone-number1 input').val();


    //密码登录传参
    var passwordParameters = {
        phoneNumber:'',
        code:'',
        slider:''
    };
    //验证码登录传参
    var smsParameters = {
        phone:'',
        slider:'',
        code:''
    };

    //手机号码验证
    // var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    function mobileVerification(mobileInputValue) {
        if (!(myreg.test(mobileInputValue) )) {
            if (mobileInputValue === '' || mobileInputValue === undefined) {
                $('.number-prompt').html('请输入手机号');
                return false;
            } else {
                $('.number-prompt').html('请输入11位正确手机号');
                return false;
            }
        } else {
            return true;
        }
    }
    
    //密码校验
    var regNull=/\s+/g;
    function passwordVerification(passwordTnputValue) {
        if(passwordTnputValue === '' || passwordTnputValue === undefined){
            $('.password-prompt').html('请输入密码');
            return false;
        }else if(regNull.test(passwordTnputValue)){
            $('.password-prompt').html('密码不能包含空格');
            return false;
        }else{
            return true;
        }
    }

    //验证码校验
    function codeVerification(codeInputValue) {
        if(codeInputValue === '' || codeInputValue === undefined){
            codePrompt.html('请输入验证码');
            return false;
        }else if(codeInputValue !== smsParameters.code){
            codePrompt.html('验证码错误，请重新输入');
            return false;
        }else{
            return true;
        }
    }


    //选择密码登录或者验证码登录
    $('.login-title li').each(function (i) {
        // console.log(i);
        // var index = i;
        $(this).on('click',function () {

            var index = $(this).index();
            $('.login-title li').removeClass('on');
            $('.login-title li i').removeClass('bg-on');
            $(this).addClass('on');
            $(this).find('i').addClass('bg-on');


            $('.login-window form').removeClass('form-show');
            $('.login-window form').eq(index).addClass('form-show');
        })
    });

    //是否选中自动登录
    // function automaticLogon(inputName) {
    //     //    判断是否选中自动登录
    //     inputName.change(function () {
    //         var check = $(this).is(':checked');
    //         alert(check);
    //         return check;
    //
    //     });
    // }
    // automaticLogon('.checkout input');


    //发送验证码按钮
    $('.send-code').attr('disabled',true);

    //滑块插件调用
    var slider1 = new SliderUnlock(".sliders1",{
        successLabelTip : "验证成功"
    },function(){
//            alert("验证成功,即将跳转至素材火");
//            window.location.href="http://www.sucaihuo.com"
//            console.log(1)
//         $('.login-main #labelTip').attr('isOk','true');
        $('.login-main #labelTip2').attr('isOk','true');
    });
    slider1.init();

    var slider2 = new SliderUnlock(".sliders2",{
        successLabelTip : "验证成功"
    },function(){
//            alert("验证成功,即将跳转至素材火");
//            window.location.href="http://www.sucaihuo.com"
//            console.log(1)
        $('#labelTip1').attr('ok','true');

        //发送验证码按钮
        $('.send-code').attr('disabled',false);
        $('.send-code').css({'background':'#6699ff','color':'#ffffff','opacity':1})
    });
    slider2.init();

    //密码登录
    $(document).on('click','.password-login .login',function () {
        //    手机号码获取
        passwordParameters.phoneNumber = $('.password-login .phone-number input').val();
        //    密码获取
        passwordParameters.code = $('.password-login .password input').val();
        //    是否滑动滑块了
        // if(!($('#labelTip').attr('isOk'))){
        //     $('.password-login .slider-prompt').html('请拖动滑块/请输入验证码');
        // }
        if(mobileVerification(passwordParameters.phoneNumber)){
            numberPrompt.removeClass('p-show');

            if(passwordVerification(passwordParameters.code)){
                passwordPrompt.removeClass('p-show');

                if($('#labelTip2').attr('isOk')){
                    sliderPrompt.removeClass('p-show');

                    var req = {
                        bizCode :'1',
                        data:{
                            userNumber:'',
                            code :''
                        }
                    };

                    getContent(req);

                    //    登录
                    // $.ajax({
                    //     url:"",    //请求的url地址
                    //     dataType:"json",   //返回格式为json
                    //     async:false,//请求是否异步，默认为异步，这也是ajax重要特性
                    //     data:passwordParameters,    //参数值
                    //     type:"POST",   //请求方式
                    //     success:function(req){
                    //         //请求成功时处理
                    //         // getContent(req);
                    //     },
                    //     error:function(){
                    //         //请求出错处理
                    //     }
                    // });
                }else{
                    sliderPrompt.addClass('p-show');
                }
            }else{
                passwordPrompt.addClass('p-show');
            }
        }else{
            numberPrompt.addClass('p-show');
        }
    });


    //读取存储数据
    $(document).ready(function () {
        var strName = localStorage.getItem('keyName');
        var strPass = localStorage.getItem('keyPass');

        if(strName){
            $('#user').val(strName);
        }if(strPass){
            $('#pass').val(strPass);
        }

        if(strName !=='' && strName !== undefined && strName !== null && strPass !=='' && strPass != undefined && strPass != null){
            $('.automatic-login input').prop("checked",true);
        }else{
            $('.automatic-login input').prop("checked",false);
        }
    });

    //密码登录请求成功回调函数
    // getContent(req);
    function getContent(req) {
        if(req.bizCode === '1'){
            // passwordParameters.phoneNumber = req.data.userNumber;
            // passwordParameters.code = req.data.code;

            //    判断用户是否选中了记住密码
            if($('.automatic-login input').prop("checked")) {
                //    选中了记住密码
                if (window.localStorage) {
                    //    缓存数据
                    // var strName = passwordParameters.phoneNumber;
                    // var strPass = passwordParameters.code;

                    var strName = $('#user').val();
                    var strPass = $('#pass').val();
                    localStorage.setItem('keyName', strName);
                    localStorage.setItem('keyPass', strPass);
                } else {
                    alert('对不起您的浏览器版本过低，暂不支持缓存')
                }
            }else{
                localStorage.removeItem('keyPass');
            }
            //    跳转登录前页面 显示已经登录
            // window.location.href = 'www.baidu.com';
        }
    }

    //验证码登录


    //验证码倒计时
    function countDown(obj) {
        var time = 60 ;
        setTime(obj);
        function setTime(obj) {
            if(time <= 0){
                clearInterval(timer);
                $(obj).attr('disabled',false);
                // $(obj).html('重新发送');
                $(obj).val('重新发送');
                $(obj).css({'background':'#6699ff','color':'#ffffff','opacity':1});

                time = 60 ;
                return;
            }else {
                $(obj).attr('disabled',true);
                time--;
                time = time < 10 ? '0'+time:''+time;
                // $(obj).html(""+ time +" s");
                $(obj).val(""+ time +" s");
                $(obj).css({'background':'#cccccc','color':'#000','opacity':1});
            }
        }
        var timer = setInterval(function () {
            setTime(obj)
        },1000)
    }

    //发送验证码
    $(document).on('click','.send-code',function () {
        //手机号码获取
        smsParameters.phone = $('.p-n').val();

        //验证手机号
        if(mobileVerification(smsParameters.phone)){
            phoneNumber.removeClass('p-now');
            $(this).attr('disabled',true);

            // 发送短信
            // $.ajax({
            //     url:"",    //请求的url地址
            //     dataType:"json",   //返回格式为json
            //     async:false,//请求是否异步，默认为异步，这也是ajax重要特性
            //     data:smsParameters,    //参数值
            //     type:"POST",   //请求方式
            //     success:function(req){
            //         //请求成功时处理
            //         if(req.bizCode === '1'){
            //             smsParameters.phone = req.data.phoneNumber;
            //             smsParameters.code = req.data.code;
            //
            //             countDown($(this));
            //             //提示已经发送验证码
            //             $('.send-prompt').addClass('p-now');
            //             //关闭验证码提示
            //             var timer1 = setTimeout(function () {
            //                 $('.send-prompt').removeClass('p-now');
            //             },500);
            //         }
            //     },
            //     error:function(){
            //         //请求出错处理
            //     }
            // });
            countDown($(this));
            //提示已经发送验证码
            $('.send-prompt').addClass('p-now');
            //关闭验证码提示
            var timer1 = setTimeout(function () {
                $('.send-prompt').removeClass('p-now');
            },1000);
            return;
        }else {
            phoneNumber.addClass('p-now');
            $(this).attr('disabled',false);
            return false;
        }
    });


    //读取验证码存储数据
    $(document).ready(function () {
        var strName1 = localStorage.getItem('keyName1');

        if(strName1){
            $('#user1').val(strName1);
        }


        if(strName1 !=='' && strName1 !== undefined && strName1 !== null){
            $('.checkout-number input').prop("checked",true);
        }else{
            $('.checkout-number input').prop("checked",false);
        }
    });

    //密码登录请求成功回调函数
    // getContent1(req);
    function getContent1(req) {
        // if(req.bizCode === '1'){
        //     // smsParameters.phone = req.data.phone;

            //    判断用户是否选中了记住密码
            if($('.checkout-number input').prop("checked")) {
                //    选中了记住密码
                if (window.localStorage) {
                    //    缓存数据
                    // var strName1 = smsParameters.phone;

                    var strName1 = $('#user1').val();
                    localStorage.setItem('keyName1', strName1);
                } else {
                    alert('对不起您的浏览器版本过低，暂不支持缓存')
                }
            }else{
                localStorage.removeItem('keyName1');
            }
            //    跳转登录前页面 显示已经登录
            // window.location.href = 'www.baidu.com';
        // }
    }

    //验证码登录
    $(document).on('click','.sms-login .login',function () {
        smsParameters.phone = $('.p-n').val();
        //验证手机号
        if(!mobileVerification(smsParameters.phone)){
            phoneNumber.addClass('p-now');
            return;
        }else {
            phoneNumber.removeClass('p-now');
        }

        //验证是否滑动滑块
        if(!($('#labelTip1').attr('ok'))){
            smsSlider.addClass('p-now');
            return;
        }else{
            smsSlider.removeClass('p-now');
        }

        //验证码比较
        if(codeVerification($('.verification-code input').val())){
            // clearTimeout(timer);
            codePrompt.removeClass('p-now');
        }else{
            codePrompt.addClass('p-now');
        }

        getContent1();

    });


//    点击客服弹出登录 关闭按钮
    $('.login-close').on('click',function () {
        $('#login-main').hide();
    });

//    点击客户 弹出登录注册
    $('.csd').on('click',function () {
        $('#login-main').show();
    });


    //ie input提示信息兼容问题
    if($('.ie').length){
        $('.phone-number').find('em').addClass('em-show');
        $('.password').find('em').addClass('em-show');
        $('.verification-code > div').find('em').addClass('em-show');

        // if($('.phone-number input').val() !=='' || $('.phone-number input').val() !== undefined){
        //     $('.phone-number').find('em').removeClass('em-show');
        // }else {
        //     $('.phone-number').find('em').addClass('em-show');
        // }
        // if($('.password input').val() !=='' || $('.password input').val() !== undefined){
        //     $('.password').find('em').removeClass('em-show');
        // }else {
        //     $('.password').find('em').addClass('em-show');
        // }
        // if($('.verification-code input').val() !=='' || $('.verification-code input').val() !==undefined){
        //     $('.verification-code').find('em').removeClass('em-show');
        // }else {
        //     $('.verification-code').find('em').addClass('em-show');
        // }

    }
    $('.phone-number').click(function () {
        $(this).find('em').removeClass('em-show');
    });
    $('.password').click(function () {
        $(this).find('em').removeClass('em-show');
    });
    $('.verification-code > div').click(function () {
        $(this).find('em').removeClass('em-show');
    })


    //用户注册成功弹窗
    $('.succe-bottom-close').click(function () {
        $('.login-succe').removeClass('login-succe-show')
    });

    //协议的显示和隐藏
    $('.login-agreement-left').click(function () {
        // $('body').addClass('modal-open');
        $('.login-service-agreement').removeClass('login-user-agreement-hidden');
    });
    $('.login-service-agreement-btn').click(function () {
        // $('body').removeClass('modal-open');
        $('.login-service-agreement').addClass('login-user-agreement-hidden');
    });
    $('.login-agreement-right').click(function () {
        // $('body').addClass('modal-open');
        $('.login-privacy-agreement').removeClass('login-user-agreement-hidden');
    });
    $('.login-privacy-agreement-btn').click(function () {
        // $('body').removeClass('modal-open');
        $('.login-privacy-agreement').addClass('login-user-agreement-hidden');
    });

});


$(function(){
    if(browserRedirect() === 'pc') {
        $('.login-window').css({"width":"420px","margin-left":"-210px","margin-top":"-223px"});
        $('.password-login').css({"padding":"35px 30px 16px 30px;"});
        $('.sms-login').css({"padding":"35px 30px 16px 30px;"});
        $('.login-user-succe').css({"width":"498px","margin-left":"-249px"});
        $('.login-agreement').css({"font-size":"12px"});
        $('.login-agreement a').css({"font-size":"12px"});
        $('.login-succe-bottom p').css({"font-size":"18px"});
    }else{
        $('.login-window').css({"width":"370px","margin-left":"-185px","margin-top":"-210px"});
        $('.password-login').css({"padding":"35px 5px 16px"});
        $('.sms-login').css({"padding":"35px 5px 16px"});
        $('.login-user-succe').css({"width":"370px","margin-left":"-185px"});
        $('.login-agreement').css({"font-size":"10px"});
        $('.login-agreement a').css({"font-size":"10px"});
        $('.login-succe-bottom p').css({"font-size":"14px"});

    }
});


function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'mobile';
    } else {
        return 'pc';
    }
}