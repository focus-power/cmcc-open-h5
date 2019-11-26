/**
 * Created by QWS on 2017/11/17.
 */
/*轮播图*/
$(document).ready(function(){
    /*$("#banner").unslider({
     speed: 500,
     delay:3000,
     complete:function(){},
     keys:true,
     dots:true,
     fluid:false,
    });*/
    var MobileUA = (function() {  
            var ua = navigator.userAgent.toLowerCase();  
            
            var mua = {  
                IOS: /ipod|iphone|ipad/.test(ua), //iOS  
                IPHONE: /iphone/.test(ua), //iPhone  
                IPAD: /ipad/.test(ua), //iPad  
                ANDROID: /android/.test(ua), //Android Device  
                WINDOWS: /windows/.test(ua), //Windows Device  
                TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device  
                MOBILE: /mobile/.test(ua), //Mobile Device (iPad)  
                ANDROID_TABLET: false, //Android Tablet  
                WINDOWS_TABLET: false, //Windows Tablet  
                TABLET: false, //Tablet (iPad, Android, Windows)  
                SMART_PHONE: false //Smart Phone (iPhone, Android)  
        };  
  
        mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;  
        mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);  
        mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;  
        mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;  
  
        return mua;  
    }());  
     // 数据中心
    var $inforRecord = $('#inforRecord');
    var apiDataValue = [
        {"field_datatype_value":"0","field_callnum_value":"1234567890","field_contractnum_value":"1234567890"},
        {"field_datatype_value":"1","field_callnum_value":"1100","field_contractnum_value":"4100"},
        {"field_datatype_value":"2","field_callnum_value":"1200","field_contractnum_value":"4200"},
        {"field_datatype_value":"2","field_callnum_value":"1300","field_contractnum_value":"4300"},
        {"field_datatype_value":"2","field_callnum_value":"1400","field_contractnum_value":"4400"},
        {"field_datatype_value":"2","field_callnum_value":"1500","field_contractnum_value":"4500"},
        {"field_datatype_value":"2","field_callnum_value":"1600","field_contractnum_value":"4600"},
        {"field_datatype_value":"2","field_callnum_value":"1700","field_contractnum_value":"4700"},
        {"field_datatype_value":"2","field_callnum_value":"1800","field_contractnum_value":"4800"},
        {"field_datatype_value":"2","field_callnum_value":"1900","field_contractnum_value":"4900"},
        {"field_datatype_value":"2","field_callnum_value":"11000","field_contractnum_value":"41000"},
        {"field_datatype_value":"2","field_callnum_value":"11100","field_contractnum_value":"41100"},
        {"field_datatype_value":"2","field_callnum_value":"11200","field_contractnum_value":"41200"},
        {"field_datatype_value":"2","field_callnum_value":"11300","field_contractnum_value":"41300"}
    ];

    $inforRecord.find('.information-record-item:eq(0) .record-item-data').attr('data-value', apiDataValue[0].field_callnum_value);
    $inforRecord.find('.information-record-item:eq(1) .record-item-data').attr('data-value', apiDataValue[0].field_contractnum_value);

    $inforRecord.find('.information-record-item').each(function(index, value) {
        var $currDataEle = $(this).find('.record-item-data');
        numberGrow($currDataEle);
    })
    
    function numberGrow(element) {
        var $this = element, time = $this.data('time'), num = $this.data('value'), step = num * 16 / (time * 1000), start = 0, intervalNum;
        intervalNum = setInterval(function() {
            start = start + step;
            if(start >= num) {
                clearInterval(intervalNum);
                intervalNum = undefined;
                start = num;
            }
            stepData = Math.floor(start);
            $this.text(stepData.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'));
        },16);
    }
    /*向上箭头*/
    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*回到顶部箭头是否显示*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 70){$('.toTop').css('visibility', 'visible');}else{$('.toTop').css('visibility', 'hidden');}
        if($(window).scrollTop() > 450){
            $('.tabWrap').addClass('fixed');
        }else{
            $('.tabWrap').removeClass('fixed');
        }
    });

    // 新闻动态
    var $index_news_id;
    $(".dynamics li").on("click",function(){
        // debugger
        $index_news_id = $(this).index();
        // var url = 'news.html?id='+ $index_news_id;

        //updata 20180315  添加事件码
        var home_news = ['HOME_news_1','HOME_news_2','HOME_news_3'];
        var news_code = home_news[$index_news_id];
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', news_code]});

        //updata 20180307
        // var url = news_json.news[$(this).index()].url;
        var url = 'news_page.html?page='+ $index_news_id;
        location.href = url;
    });

    /*解决方案鼠标悬浮效果*/
    /*$(".imgB").hover(function(){
     var lId = $(this).parent("li").attr("id");
     // $(".solution-description").find("p."+lId).slideDown('400').siblings().hide();
     $(".solution-description").find("p."+lId).stop().animate({top:"0",opacity:"1"},"slow");

     },function(){
     $(".solution-description").find("p").stop().animate({top:"50px",opacity:"0"},"slow",function(){
     $(".solution-description").find("p").css({"top":"-100px","opacity":"0"})
     });
     // $(".solution-description").find("p").stop().animate({top:"-100px",opacity:"0"});

     });*/
    // ie8
    $(".imgB").hover(function(){
        var lId = $(this).parent("li").attr("id");
        $(this).children(".solution-img").attr("src", $(this).children(".solution-img").attr("alt") + '_hover.png');
        $(".solution-description").find("p."+lId).show().siblings().hide();
    },function(){
        $(this).children(".solution-img").attr("src", $(this).children(".solution-img").attr("alt") + '.png'); 
        $(".solution-description").find("p").hide();
    });

    /*首页新闻动态鼠标悬浮*/
    /*$(".information-list li ").hover(function(){
        console.log($(this).children());
        $(this).children(".dynamics-img").find('img').stop().animate({
            height:"120%",
            width:"120%",
            top:"-10%",
            left:"-10%"
        })
    },function(){
        $(this).children(".dynamics-img").find('img').stop().animate({
            height:"100%",
            width:"100%",
            top:"0",
            left:"0"
        })
    })*/

     // 返回此页面定位
    // var $uni_pos = getUrlParam('pos');
    // if($uni_pos == 1) {
    //     var expStack = $('.exp-stack').offset().top;//  获取需要跳转到标签的top值
    //     $(window).scrollTop(expStack);// 跳转到指定位置
    // }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    // 体验栈
    var $experienceModal = $('.experience-modal');
    var $tableInfo = $('.table-info');
    var $moreThanTimes = $('.more-than-times');
    var $timesBtn = $('.times-btn');
    var $templateMobile = $('#templateMobile');
    var $templateSms = $('#templateSms');
    var $receiveSms = $('#receiveSms');
    var $sendSms= $('#sendSms');
    var $labelTip = $('#labelTip');
    var $smsCodeBtn = $('#smsCodeBtn');
    var $immediateBtn = $('#immediateBtn');
    var $cancel = $('#cancel');
    var $templateResult = $('.template-result');

    var $authModal = $('.auth-modal');

    var $mobileHelpBlock = $('#mobileHelpBlock');
    var $captchaHelpBlock = $('#captchaHelpBlock');
    var $receiveHelpBlock = $('#receiveHelpBlock');
    var $sendHelpBlock = $('#sendHelpBlock');
    var $slideHelpBlock = $('#slideHelpBlock');

    var getSmsCodeUrl;
    var immediatePerUrl;
    
    var erCodeId = null;
    var overtimeNum = 0;

    var countDownTimer = new CountDownTimer(60, $smsCodeBtn);

    if(MobileUA.SMART_PHONE) {
        $('#index_experience li').click(function() {
            if($(this).find('.stack-img').css('display') == 'block') {
                $(this).find('.stack-img').stop().slideUp(300);
                $(this).siblings().find('.stack-img').stop().slideDown(300);
            } else {
                $(this).find('.stack-img').stop().slideDown(300);
            }
        })
    } else {
        $('#index_experience li').hover(function() {
            $(this).find('.stack-img').stop().slideUp(300);
        }, function() {
            $(this).find('.stack-img').stop().slideDown(300);
        });
    }

    // 免费体验按钮
    $('.free-experience').click(function() {
        var indexFree = $(this).attr('data-free');
        if(indexFree == 0) {
            showExperienceModal();  
        } else {
            showAuthModal();
            $('.auth-modal-section').eq(indexFree - 1).addClass('act').siblings('.auth-modal-section').removeClass('act');
            $('.auth-modal-title h3').text('您正在体验' + '-' + $(this).attr('data-title'));

            if(MobileUA.SMART_PHONE) {
                // 手机端时
                $('.auth-modal-section').eq(indexFree - 1).find('.mobile-warn').addClass('act');
            } else {
                if(($('.auth-modal-section.act').children('div').hasClass("act"))) {
                    if(!($('.auth-modal-section.act').find('.erwei-code.act'))) {
                        $('.auth-modal-section.act').children('div.act').removeClass('act');
                    }
                }
                $('.auth-modal-section.act').find('.erwei-code').addClass('act');
                erCodeId = setInterval(scanningCode, 3000);
            }
        }
    })

    var scanningCode = function() {
        if(overtimeNum < 600000) {
            sendRequest(getErCodeUrl, 'GET', null, function(res){
                if(res == '1') {
                    if(MobileUA.SMART_PHONE) {
                        window.location.href = 'mobile/one_key.html';
                    } else {
                        $('.auth-modal-section.act .erwei-result').addClass('act').siblings('.erwei-code').removeClass('act');
                        clearInterval(erCodeId);
                        erCodeId = null;
                        overtimeNum = 0;
                    }
                } else if(res == '2'){
                    if(MobileUA.SMART_PHONE) {
                        window.location.href = 'mobile/number_check.html';
                    } else {
                        $('.auth-modal-section.act .erwei-result').addClass('act').siblings('.erwei-code').removeClass('act');
                        clearInterval(erCodeId);
                        erCodeId = null;
                        overtimeNum = 0;
                    }
                }
            }, function() {
                return null;
            });
        } else {
            clearInterval(erCodeId);
            erCodeId = null;
            overtimeNum = 0;
            $('.auth-modal-section.act .erwei-code').removeClass('act').siblings('.erwei-overtime').addClass('act');
        }
    }

    // 关闭提示框
    $('.times-close').on('click', function() {
        $experienceModal.hide();
        $moreThanTimes.hide();
    });

    $timesBtn.on('click', function() {
        $experienceModal.hide();
        $moreThanTimes.hide();
    })

    // 关闭模板体验页
    $('.close').on('click', function() {
        hideExperienceModal();
    });

    $cancel.on('click', function() {
        hideExperienceModal();
    })

    // 关闭统一认证
    $('.auth-close').on('click', function() {
        hideAuthModal();
        clearInterval(erCodeId);
        erCodeId = null;
        overtimeNum = 0;
        $('.auth-modal-section.act').children('div').removeClass('act');
    })

    // 模板体验页出现
    var showExperienceModal = function() {
        $experienceModal.show();
    }

    // 模板体验页隐藏
    var hideExperienceModal = function() {
        $experienceModal.hide();
        clearInputTemp();
        clearTempInterval();
        $('.error-tip').hide();
    };

    // 统一认证弹框出现
    var showAuthModal = function() {
        $authModal.show();
    }

    // 统一认证弹框隐藏
    var hideAuthModal = function() {
        $authModal.hide();
    }

    // 清除模板短信页倒计时
    var clearTempInterval = function() {
        clearInterval(countDownTimer.taskId);
        countDownTimer.taskId = null;
        countDownTimer.enableBtn();
    };

    // 清空输入数据
    var clearInputTemp = function() {
        $experienceModal.find('input').val('');
        slider1.init();
        slider1.reset();
        $labelTip.attr('isOk','false');
        $labelTip.css({
            color: 'rgb(153, 153, 153)'
        });
        $labelTip.text('拖动滑块完成验证');
    };

    var slider1 = new SliderUnlock(".slider",{
        successLabelTip : "验证成功"
    },function(){
        $labelTip.attr('isOk','true');

    });
    slider1.init();

    // 展示错误快
    var displayError = function(obj, msg) {
        obj.css('display', 'block');
        obj.text(msg);
    };

    // 隐藏错误信息
    var hiddenError = function(obj) {
        obj.css('display', 'none');
    }
    // 判断手机号码是否为空
    var checkMobile = function(phone) {
        if(!( /^1\d{10}$/ ).test ( phone )) {
            if(phone === '' || phone === undefined) {
                displayError($mobileHelpBlock, '* 输入项不能为空');
                return false;
            } else {
                displayError($mobileHelpBlock, '* 请输入正确格式的手机号码');
                return false;
            }
        } else {
            hiddenError($mobileHelpBlock);
            return true;
        }
    };

    // 判断验证码是否为空
    var checkCaptcha = function(smsCode) {
        if(smsCode === '' || smsCode === undefined) {
            displayError($captchaHelpBlock, '* 输入项不能为空');
            return false;
        } else {
            hiddenError($captchaHelpBlock);
            return true;
        }
    };

    // 判断接收方是否为空
    var checkReceive = function(rece) {
        if(rece === '' || rece === undefined) {
            displayError($receiveHelpBlock, '* 输入项不能为空');
            return false;
        } else {
            hiddenError($receiveHelpBlock);
            return true;
        }
    }

    // 判断发送方是否为空
    var checkSend = function(send) {
        if(send === '' || send === undefined) {
            displayError($sendHelpBlock, '* 输入项不能为空');
            return false;
        } else {
            hiddenError($sendHelpBlock);
            return true;
        }
    }

    // 判断滑块是否为空
    var checkSlide = function() {
        if($labelTip.attr('isOk') === 'false') {
            displayError($slideHelpBlock, '* 请拖动滑块进行验证');
            return false;
        } else {
            hiddenError($slideHelpBlock);
            return true;
        }
    }

    // 倒计时
    function CountDownTimer(start, obj) {
        this.start= start;
        this.curr = this.start;
        var timer = this;

        this.countDown = function(number) {
            timer.curr = number;
            timer.disableBtn();
            timer.taskId = setInterval(timer.render, 1000);
        }

        this.disableBtn = function() {
            obj.prop('disabled', true);
            obj.text(timer.curr + 's');
        }

        this.enableBtn = function() {
            obj.text('获取验证码');
            obj.prop('disabled', false);
        }

        this.render = function() {
            if(--timer.curr > 0) {
                obj.text(timer.curr + 's');
            } else {
                clearInterval(timer.taskId);
                timer.taskId = null;
                timer.enableBtn();
            }
        }
    }

    // 获取短信验证码 失败回调
    function complexFail() {
        clearTempInterval();
    };
    
    // 获取短信验证码
    var sendCode = function(phone, succCall, failCall) {
        if(checkMobile(phone)) {
            countDownTimer.countDown(countDownTimer.start);
            sendRequest(getSmsCodeUrl, 'GET', phone, succCall, failCall);
        }   
    };

    // 获取短信验证码事件
    $smsCodeBtn.click(function() {
        sendCode($templateMobile.val(), function(res) {
            if(res.bizCode == '1') {
                return;
            } else {
                displayError($mobileHelpBlock, res.bizDesc);
                clearTempInterval();
            }
        }, complexFail)
    });

    // 立即体验
    var immediatePerFun = function(succCall, failCall) {
        var immediatePerPrarm = {
            mobile: $templateMobile.val(),
            smsCode: $templateSms.val(),
            receive: $receiveSms.val(),
            sendSms: $sendSms.val(),
            isOk: $labelTip.attr('isOk')
        }
        
        checkMobile(immediatePerPrarm.mobile);
        checkCaptcha(immediatePerPrarm.smsCode);
        checkReceive(immediatePerPrarm.receive);
        checkSend(immediatePerPrarm.sendSms);
        checkSlide();

        if(checkMobile(immediatePerPrarm.mobile) && checkCaptcha(immediatePerPrarm.smsCode) && checkReceive(immediatePerPrarm.receive) 
         && checkSend(immediatePerPrarm.sendSms) && checkSlide()) {
            sendRequest(immediatePerUrl, 'POST', immediatePerPrarm, succCall, failCall);
        }
    }

    // 立即体验事件
    $immediateBtn.click(function() {
        immediatePerFun(complexSuccess, complexFail);
    });

    // 体验成功回调
    function complexSuccess(res) {
        if(res.bizCode == '0') {
            displayError($captchaHelpBlock, res.bizDesc);
        } else {
            $templateResult.show();
            $tableInfo.hide();
            clearInputTemp();
        }
        clearTempInterval();
    }

    // 数据请求函数
    function sendRequest(url, method, data, callback, failCallBack ) {
        var dataParams = {
            url: url,
            type: method,
            data: data,
            dataType: 'json'
        };
        if(method.toUpperCase() === 'POST') {
            dataParams.contentType = 'application/json';
            DataTransfer.data = JSON.stringify(data);
        }
        $.ajax(dataParams).done(callback).fail(failCallBack);
    }

    // 模板短信再试一次事件
    $('.again-try').click(function() {
        $templateResult.hide();
        $tableInfo.show();
    })

    // 统一认证再试一次事件
    $('.auth-again-try').click(function() {
        $(this).parents('.erwei-result').removeClass('act');
        $(this).parents('.erwei-result').siblings('.erwei-code').addClass('act');
    })


    //API能力
    // var $index_api_id;
    // $(".api-classification li").on("click",function(){
    //     $index_api_id = $(this).index();
    //     var id = api_json.ability[$index_api_id].id;
    //     // var subIndex = api_json.ability[$index_api_id].sub_ability.index()
    //     var subId = api_json.ability[$index_api_id].sub_ability[0].sub_id;
    //
    //     //2018.3.15 updata  添加营销码
    //     var marketing_code_api = api_json.ability[$index_api_id].marketing_code;
    //     // alert(subId)
    //     var api_url = 'api.html?id='+ id +'&subId='+subId+'&WT.ac='+marketing_code_api;
    //     location.href = api_url;
    //
    //     //2018.3.15 updata  添加事件码
    //     var api_code = api_json.ability[$index_api_id].event_code;
    //     Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', api_code]});
    // });
    apiCon();
    function apiCon() {
        var apiContent = api_json.ability.length;
        var first_api_title = '';
        var apiStr = '';
        for(var i=0;i<apiContent;i++){
            var $name = api_json.ability[i].name;
            var $imgUrl = api_json.ability[i].imgUrl;
            var $description = api_json.ability[i].description;
            first_api_title='<li data="'+api_json.ability[i].id+'" class="api-list-first">' +
                '<div class="api-list-tip">' +
                '<div class="API-image">' +
                '<img src="'+$imgUrl+'" class="api-img" />' +
                '</div>' +
                '<div class="api-description">' +
                '<h4>'+$name+'</h4>' +
                '<p>'+$description+'</p>' +
                '</div>' +
                '</div>' +
                '<div class="api-list-content">' +
                '<ul class="api-list-second index'+i+'"></ul>' +
                '</div>' +
                '</li>';
            var $main = api_json.ability[i].sub_ability.length;
            var second_name = '';
            for(var j=0;j<$main;j++){
                var $sub_name = api_json.ability[i].sub_ability[j].sub_name;
                second_name+='<li data="'+api_json.ability[i].sub_ability[j].sub_id+'">'+$sub_name+'</li>'
            }
            apiStr = second_name;
            second_name = '';
            $('#api-classification-list').append(first_api_title);
            // $('#api-classification-list').append('<li>出</li>');

            // console.log(first_api_title)
            // console.log( $('#api-classification-list'))
            $('.index'+i+'').html(apiStr);
        }
    }
    $('.api-classification-list > li').hover(function () {
        $(this).find('.api-list-tip').css({"top":"-236px"});
        $(this).find('.api-list-content').css({"top":"-236px"});

        //能力小于4个的时候  居中显示
        var liLength = $(this).find('li').length;
        if(liLength == 4){
            $('.api-list-content').css({"padding-top":"75px","height":"161px"})
        }else if(liLength == 3){
            $('.api-list-content').css({"padding-top":"88px","height":"148px"})
        }else if(liLength == 2){
            $('.api-list-content').css({"padding-top":"98px","height":"138px"})
        }else if(liLength == 1){
            $('.api-list-content').css({"padding-top":"108px","height":"128px"})
        }else{
            $('.api-list-content').css({"padding-top":"6px","height":"230px"})
        }
    },function () {
        $(this).find('.api-list-tip').css({"top":"0"});
        $(this).find('.api-list-content').css({"top":"0"});
    });
    var $api_index_li_subId;
    var $api_index_li_id;
    $(document).on('click','.api-list-second li',function () {
        $api_index_li_subId = $(this).attr("data")-1;
        $api_index_li_id = $(this).parents('.api-list-first').attr("data")-1;
        // var $api_index_li_url = 'api_new.html?id='+ $api_index_li_id +'&subId='+$api_index_li_subId;


        //添加API事件码
        var home_api_code = api_json.ability[$api_index_li_id].sub_ability[$api_index_li_subId].event_code_new;
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', home_api_code]});
        // alert(home_api_code);

        //API分类添加营销码
        var marketing_code_api = api_json.ability[$api_index_li_id].marketing_code;
        var $api_index_li_url = 'api_new.html?id='+ $api_index_li_id +'&subId='+$api_index_li_subId+'&WT.ac='+marketing_code_api;
        location.href = $api_index_li_url;
    });

    //解决方案
    var $solution_api_id;
    $(".solution-l li").on("click",function(){
        $solution_api_id = $(this).index();

        //2018.3.15 updata 添加营销码
        var marketing_code_solution = data.solution[$solution_api_id].marketing_code;

        var $solution_url = 'solution.html?id='+ $solution_api_id +'&WT.ac='+marketing_code_solution;

        //2018.3.15 updata 添加事件码
        Webtrends.multiTrack({argsa:['DCS.dcsuri','/nopv.gif','WT.event','data.solution[$solution_api_id].hso_event_code']});
        // var $solution_url = 'solution.html?id='+ $solution_api_id;
        // alert($solution_url);
        // debugger;
        location.href = $solution_url;
    });

    /*客服弹窗*/
    /*$(".csd").on("click",function(){
     $(".pop").show();
     });*/

    /*首页搜索框*/
    $(".api-search input").focus(function(){
        $(".api-search").css("border","1px solid #4682ee");
    });
    $(".api-search input").blur(function(){
        $(".api-search").css("border","1px solid rgb(233,233,233)");
    })

    scrollS();
})

function scrollS(){
    var liL = $(".solution-l li").width()*$(".solution-l li").length;
    // console.log(liL);
    var $li = $(".solution-l>li");
    var screenWidth = $(window).width(); //div快的宽度
    var indexL = 0;
    var oneWidth = 0; //移动的宽度
    var scrollSum = 0; //卷进去的宽度
    var liSum = 0;
    $("#left").click(function(){
        if(indexL >  0){
            indexL = indexL-1;
            oneWidth = oneWidth+$li.eq(indexL).outerWidth()*6;
            $(".rCon").stop(true,false).animate({
                "margin-left":oneWidth
            });

            scrollSum = scrollSum-$li.eq(indexL).outerWidth()*6;
        }else{
            return;
        }
    });
    for(var i = 0;i < $li.length;i++){
        liSum = $li.eq(i).width()+2+liSum;
    }
    $("#right").click(function(){

        if(liL - scrollSum <= $(".solution-l li").width()*6){
            return;
        }else{
            oneWidth = oneWidth - $li.eq(indexL).width()*6;
            $(".rCon").stop(true,false).animate({
                "margin-left":oneWidth
            });
            scrollSum = scrollSum + $li.eq(indexL).width()*6;
            indexL = indexL + 1;
        }
    });
}