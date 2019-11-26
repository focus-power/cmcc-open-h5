
'use strict';
$(document).ready(function(){
    /*左侧二级菜单显示隐藏*/
    $(".menu2-show").click(function(){
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

    /*回到顶部箭头是否显示*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 70){$('.toTop').css('visibility', 'visible');}else{$('.toTop').css('visibility', 'hidden');}
        /*if($(window).scrollTop() > 170){
            $('.tabWrap').addClass('fixed');
            $(".main").css("margin-left","190px");
        }else{
            $('.tabWrap').removeClass('fixed');
            $(".main").css("margin-left","30px");
        }*/
    });

    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*左侧导航点击样式改变*/
    // $(".help-navO").eq(0).on('click','li',function (){
    //     $(this).addClass('act').siblings().removeClass('act')
    //     var index=$(this).index();
    //     // alert(index)
    //     $('html, body').animate({
    //         scrollTop: $(".surveyL").eq(index).offset().top
    //     }, 500);
    // });
    // $(".help-navO").eq(1).on('click','li',function (){
    //     $(this).addClass('act').siblings().removeClass('act')
    //     var index1=$(this).index()+$(".help-navO").eq(0).find("li").length;
    //     // alert(index1)
    //     $('html, body').animate({
    //         scrollTop: $(".surveyL").eq(index1).offset().top
    //     }, 500);
    // });
    // $(".help-navO").eq(2).on('click','li',function (){
    //     $(this).addClass('act').siblings().removeClass('act')
    //     var index2=$(this).index()+$(".help-navO").eq(0).find("li").length+$(".help-navO").eq(1).find("li").length;
    //     // alert(index2)
    //     $('html, body').animate({
    //         scrollTop: $(".surveyL").eq(index2).offset().top
    //     }, 500);
    // });


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