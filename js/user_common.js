$(function() {
     // 点击侧导航
    $('.last-menu').click(function() {
        var menu2 = $(this).siblings('ul').css("display");
        if(menu2=="none"){
            $(".nav-hide").slideUp();
            $(this).siblings('ul').slideDown();
            $(this).find(".icon-tri").addClass('icon-triD').removeClass('icon-triU').parents(".help-navO").siblings().find(".icon-tri").addClass('icon-triU').removeClass('icon-triD');
        }else{
            $(this).siblings('ul').slideUp();
            $(this).find(".icon-tri").addClass('icon-triU').removeClass('icon-triD');
        }
    });

    //导航登录、注册

    //如果用户登录成功了
    $('.no-login').css('display','none');
    $('.yes-login').css('display','block');

    $('.login-register').hover(function () {
        //只有登录成功的时候 才显示用户中心下拉菜单
        if($('.yes-login').is(":visible")){
            $('.personal-info').css('display','block');
            $('.yes-login').find('img').attr('src','../images/login/login-icon-new15.png');
        }
    },function () {
        $('.personal-info').css('display','none');
        $('.yes-login').find('img').attr('src','../images/login/login-icon-new14.png');
    });

    //点击退出
    $('.info-list2').click(function () {
        $('.personal-info').css('display','none');
        $('.yes-login').css('display','none');
        $('.yes-login').find('img').attr('src','../images/login/login-icon-new14.png');
        $('.no-login').css('display','block');
    });
});