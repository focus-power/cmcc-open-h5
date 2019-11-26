
'use strict';

$(function() {
    var afewPosition = 0;
    var scrollHeight = 0;
    var firstHeight = ($('.recomn-tab-con').eq(0).width()) * 489/1440;
    var $inforRec = $('.recomn-tab-con.rtc .information-record');

    setPosition();

     var apiDataValue = [
        {"field_datatype_value":"0","field_callnum_value":"1000","field_contractnum_value":"4000"},
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

     $inforRec.each(function(index, value) {
        $(this).find('.information-record-item:eq(0) .record-item-data').text(apiDataValue[index + 1].field_callnum_value);
        $(this).find('.information-record-item:eq(1) .record-item-data').text(apiDataValue[index + 1].field_contractnum_value);

        $(this).find('.information-record-item').each(function(i, v) {
            var $thisIn = $(this);
            if($thisIn.find('.record-item-data').text() === '0') {
                $thisIn.css('display', 'none');
            }
        })
     })
    
    // 页面尺寸变化
    $(window).on('resize', function() {
        firstHeight = ($('.recomn-tab-con').eq(0).width()) * 489/1440;
        $('.recomn-tab-section').css('background-position-y', firstHeight-5);
        if($('.recomn-tab').hasClass('fixed')) {
            return;
        } else {
            $('.recomn-tab-title').css('top', firstHeight-40);
        }
    });

    // 设置背景图片位置及导航标题位置
    function setPosition() {
        $('.recomn-tab-section').css('background-position-y', firstHeight-5);
        // $('.recomn-tab-title').css('top', firstHeight-40);
        if(scrollHeight > firstHeight){
            $('.recomn-tab').addClass('fixed');
            $('.recomn-tab-title').css('top', 0);
            afewPosition = Math.floor((scrollHeight - firstHeight) /680);
            $('#recomnTabTitle li').eq(afewPosition).addClass('act').siblings().removeClass('act');
            $('#recomnTabTitle li').eq(afewPosition).prev().find('a').addClass('no-border');
            $('#recomnTabTitle li').eq(afewPosition).prev().siblings().find('a').removeClass('no-border');
        }else{
            $('.recomn-tab').removeClass('fixed');
            $('.recomn-tab-title').css('top', firstHeight-40);
        }
    }

    // tab是否悬浮
    $(window).scroll(function(){
        scrollHeight = $(window).scrollTop();
        setPosition();
    });

    // var hoverAfew = 0;
    // $('.recomn-tab-wrap li').hover(function() {
    //     hoverAfew = $(this).index();
    //     $('#recomnTabTitle li').eq(hoverAfew).prev().find('a').addClass('no-border');
    //     $('#recomnTabTitle li').not(".act").eq(hoverAfew).prev().find('a').removeClass('no-border');
    // },function() {
    //     $('#recomnTabTitle li').not(".act").eq(hoverAfew).prev().find('a').removeClass('no-border');
    // })

    // tab切换定位
    $('#recomnTabTitle li').on('click', function() {
        // $(this).addClass('act').siblings().removeClass('act');
        var thisIndex = $(this).index();
        $(this).prev().find('a').addClass('no-border');
        $(this).prev().siblings().find('a').removeClass('no-border');
        $('html, body').animate({
            scrollTop: $('.recomn-tab-con').eq(thisIndex+1).offset().top
        })
    });

    // 通信服务能力子切换
    var thisComIndex, thisCreIndex;
    var comSerTitle = ['模板短信', '拨打验证', '中间号'];
    var comSerLink = ['api.html?id=1&subId=1', 'api.html?id=1&subId=6','api.html?id=1&subId=7'];

    $('#comSer .polygon-wrap').on('click', function() {
        $(this).addClass('act').siblings().removeClass('act');
        thisComIndex = $(this).index();

        // 子标题切换
        $('#comSer .recomn-con-sub-size').text(comSerTitle[thisComIndex]);
        // 控制选中背景色及亮点
        $(this).find('.polygon-small').addClass('add-back');
        $(this).siblings().find('.polygon-small').removeClass('add-back');
        $(this).find('.light-effect').addClass('light-act');
        $(this).siblings().find('.light-effect').removeClass('light-act');

        // 控制选中图标状态
        if(thisComIndex == 0) {
             $(this).find('.polygon-wrap-logo').addClass('change-icon1');
             $('#comSer .polygon-wrap').eq(1).find('.polygon-wrap-logo').removeClass('change-icon2');
             $('#comSer .polygon-wrap').eq(2).find('.polygon-wrap-logo').removeClass('change-icon3');
        } else if (thisComIndex == 1) {
             $(this).find('.polygon-wrap-logo').addClass('change-icon2');
             $('#comSer .polygon-wrap').eq(0).find('.polygon-wrap-logo').removeClass('change-icon1');
             $('#comSer .polygon-wrap').eq(2).find('.polygon-wrap-logo').removeClass('change-icon3');
        } else {
             $(this).find('.polygon-wrap-logo').addClass('change-icon3');
             $('#comSer .polygon-wrap').eq(0).find('.polygon-wrap-logo').removeClass('change-icon1');
             $('#comSer .polygon-wrap').eq(1).find('.polygon-wrap-logo').removeClass('change-icon2');
        }

        // api内容及链接地址切换
        $('#comSer .recomn-tab-des').eq(thisComIndex).addClass('act').siblings('.recomn-tab-des').removeClass('act');
        $('#comSer .information-record').eq(thisComIndex).addClass('act').siblings('.information-record').removeClass('act');
        $('#comSer a').attr('href', comSerLink[thisComIndex]);
    });

    // 和信用分子切换
    var creScoreTitle = ['免押骑行', '酒店快速入住', '信用购机'];
    var creScoreLink = ['solution.html?id=10','solution.html?id=9','solution.html?id=8'];
    $('#creScore .polygon-wrap').on('click', function() {
        $(this).addClass('act').siblings().removeClass('act');
        thisCreIndex = $(this).index();
       
        // 子标题切换
        $('#creScore .recomn-con-sub-size').text(creScoreTitle[thisCreIndex]);
        // 控制选中背景色及亮点
        $(this).find('.polygon-small').addClass('add-back');
        $(this).siblings().find('.polygon-small').removeClass('add-back');
        $(this).find('.light-effect').addClass('light-act');
        $(this).siblings().find('.light-effect').removeClass('light-act');

        // 控制选中图标状态
        if(thisCreIndex == 0) {
            $(this).find('.polygon-wrap-logo').addClass('change-icon4');
            $('#creScore .polygon-wrap').eq(1).find('.polygon-wrap-logo').removeClass('change-icon5');
            $('#creScore .polygon-wrap').eq(2).find('.polygon-wrap-logo').removeClass('change-icon6');
        } else if (thisCreIndex == 1) {
            $(this).find('.polygon-wrap-logo').addClass('change-icon5');
            $('#creScore .polygon-wrap').eq(0).find('.polygon-wrap-logo').removeClass('change-icon4');
            $('#creScore .polygon-wrap').eq(2).find('.polygon-wrap-logo').removeClass('change-icon6');
        } else {
            $(this).find('.polygon-wrap-logo').addClass('change-icon6');
            $('#creScore .polygon-wrap').eq(0).find('.polygon-wrap-logo').removeClass('change-icon4');
            $('#creScore .polygon-wrap').eq(1).find('.polygon-wrap-logo').removeClass('change-icon5');
        } 

        // api内容及链接地址切换
        $('#creScore .recomn-tab-des').eq(thisCreIndex).addClass('act').siblings('.recomn-tab-des').removeClass('act');
        $('#creScore .information-record').eq(thisCreIndex).addClass('act').siblings('.information-record').removeClass('act');
        $('#creScore a').attr('href', creScoreLink[thisCreIndex]);
    });

})