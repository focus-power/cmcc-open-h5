'use strict';
$(function () {
    var template = Handlebars.compile($("#solution_data").html());
    $("#spolution_data_con").html(template(data));

    //副导航
    var navStr = '';
    $(data.solution).each(function (i,item) {
        navStr += '<li id="'+ item.id +'"><a>'+ item.name +'</a></li>'
    });
    $('.solution-list').html(navStr);

    //首页跳转过来 传过来的id
    var $index_solution_id;
    if(window.location.href.split('id=')[1] === undefined){
        $index_solution_id = window.location.href.split('id=')[1];
    }else {
        $index_solution_id = /id=(\d*)(&)?/g.exec(window.location.search)[1];
    }

    //回到顶部箭头是否显示 页面滚动定位
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.toTop').css('visibility', 'visible');
        }else{
            $('.toTop').css('visibility', 'hidden');
        }
        if($(window).scrollTop() > 530){
            $('.solution-tab').addClass('fixed');
        }else{
            $('.solution-tab').removeClass('fixed');
        }
    });
    //回到顶部箭头点击事件
    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    //具体内容的切换
    $('.tab-title li').on('click',function () {
        var indexLi = $(this).index();
        $(this).addClass('change-color').siblings().removeClass('change-color');
        $('html, body').animate({
            scrollTop: $(".solution-box").eq(indexLi).offset().top-80
        }, 500);
    });

    //切换解决方案内容 渲染数据
    // $(document).on('click','#solution-list li',function () {
    //
    // });
    $('#solution-list li').on('click',function () {
        // var selectId = $(this).attr("id");
        var resultList = data.solution;
        var thisIndex = $(this).index();
        //banner 文字展示
        var bannerText = '';
        //在线教育 行业视频 行业安全 没有查看更多详情
        if(thisIndex == '7' || thisIndex == '14' ||thisIndex == '15' ){
            bannerText = '<h2>'+ resultList[thisIndex].name +'</h2>'+
                '<p>'+ resultList[thisIndex].description +'</p>'+
                '<a href="javascript:;" id="'+resultList[thisIndex].id+'" class="a-hidden">查看更多详情</a>';
        }else{
            bannerText = '<h2>'+ resultList[thisIndex].name +'</h2>'+
                '<p>'+ resultList[thisIndex].description +'</p>'+
                '<a href="'+resultList[thisIndex].successful_url+'" id="'+resultList[thisIndex].id+'">查看更多详情</a>';
        }
        $('.solution-banner-content').html(bannerText);

        //20180316 添加事件码 查看详情
        // $("#suc-url").attr("code",resultList[thisIndex].so_more_event_code);

        //添加事件码
        //var solution_code = changeIconData[$(this).index()].so_event_code;
        // alert(solution_code);
        //Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', solution_code]});

        //特点 内容
        var advStr = '';
        var num = 0;
        $(resultList[thisIndex].advantage).each(function (i,item) {
            num++;
            advStr+='<li>' +
                '<div>' +
                '<h3><i class="icon">0'+num+'</i>'+item.name+'</h3>' +
                '<div><p>'+item.ad_description+'</p></div>' +
                '</div>' +
                '</li>'
        });
        $('.solution-adv-con').html(advStr);

        //解决方案及痛点分析 内容
        var planLeftStr = '';
        $(resultList[thisIndex].analysis_and_solution[0].analysis).each(function (i,item) {
            planLeftStr+='<li>' +
                '<i>' +
                '</i>'+item+'' +
                '</li>';
        });
        $('.plan-left-list').html(planLeftStr);

        var planRightStr = '';
        planRightStr = resultList[thisIndex].analysis_and_solution[0].solution;
        $('.plan-right-content').html(planRightStr);

        //特点按钮的展示效果
        scrollR('.solution-adv-con','.solution-adv-left','.solution-adv-right');

        //解决方案及痛点分析的显示
        planShow();

        //使用能力 内容
        var useStr = '';
        $(resultList[thisIndex].use_ability).each(function (i,item) {
            if(i==2){
                useStr+='<li class="padding-right-no">' +
                    '<div class="solution-use-list-main">' +
                    '<span class="solution-use-list-main-title">'+ item.name+'</span>' +
                    '<div><img src="'+item.icon+'" alt=""></div>' +
                    '</div>' +
                    '</li>'
            }else{
                useStr+='<li>' +
                    '<div class="solution-use-list-main">' +
                    '<span class="solution-use-list-main-title">'+ item.name+'</span>' +
                    '<div><img src="'+item.icon+'" alt=""></div>' +
                    '</div>' +
                    '</li>'
            }
        });
        $('.solution-use-list').html(useStr);
        //使用能力的跳转
        solutionUse();
        //使用能力按钮显示
        scrollR('.solution-use-list','.solution-use-btnL','.solution-use-btnR');

        //应用效果 内容
        var resultStr = '';
        $(resultList[thisIndex].result).each(function (i,item) {
            resultStr+='<div class="result-list-main">' +
                '<p>'+item+'</p>' +
                '</div>'
        });
        $('.solution-result-list').html(resultStr);

        //成功案例
        var successStr = '';
        $(resultList[thisIndex].successful_cases).each(function (i,item) {
            successStr+='<li>' +
                '<div class="success-case-content-top">' +
                '<img src="'+item.icon+'" alt="">' +
                '</div>' +
                '<div class="success-case-content-bottom">' +
                '<h4>'+item.name+'</h4>' +
                '<p>'+item.cases_description+'</p>' +
                '<div><a href="javascript:;"  class="success-pop-btn">进一步了解</a></div>' +
                '</div>' +
                '</li>'
        });
        $('.solution-success-case-list').html(successStr);
        if(resultList[thisIndex].successful_cases[0].icon.indexOf("data/images/solution/look-forward.png")>=0){
            $('.success-case-content-top').css({'height':'100%','padding':'0'});
            $('.success-case-content-top > img').css({'width':'100%','height':'100%'});
        }else{
            $('.success-case-content-top').css({'height':'auto','padding':'93px 0'});
            $('.success-case-content-top > img').css({'width':'180px','height':'64px'});
            //案例的效果
            caseShow();
            $('.solution-success-case-list li').each(function (i,item) {
                var index = i;
                var caseData = resultList[thisIndex].successful_cases;
              $(this).find('.success-pop-btn').on('click',function () {
                  $('.success-pop').show();
                  // $('body').addClass('modal-open');
                  $('.pop-main-content-text h3').html(caseData[index].name);
                  $('.pop-main-content-text .pop-content-text-top').html(caseData[index].cooperative_content);
                  $('.pop-main-content-text .pop-content-text-bottom').html(caseData[index].cooperative_effect);
                  $('.pop-main-content-text .pop-content-img img').attr('src',caseData[index].cooperative_img);
              })
            });
            $('.success-pop-close').on('click',function () {
                $('.success-pop').hide();
                // $('body').removeClass('modal-open');
                $('.pop-main-content-text .pop-content-img img').attr('src','');
            })
        }
    });


//首页跳转过来 数据的渲染
    var resultListInit = data.solution;
    var thisIndexInit;
    if($index_solution_id){
        thisIndexInit = $index_solution_id;
    }else{
        thisIndexInit = 0;
    }
    //banner文字展示 内容
    var bannerTextInit = '';
    if(thisIndexInit == '7' || thisIndexInit == '14' ||thisIndexInit == '15' ){
        bannerTextInit = '<h2>'+ resultListInit[thisIndexInit].name +'</h2>'+
            '<p>'+ resultListInit[thisIndexInit].description +'</p>'+
            '<a href="javascript:;" id="'+resultListInit[thisIndexInit].id+'" class="a-hidden">查看更多详情</a>';
    }else{
        bannerTextInit = '<h2>'+ resultListInit[thisIndexInit].name +'</h2>'+
            '<p>'+ resultListInit[thisIndexInit].description +'</p>'+
            '<a href="'+resultListInit[thisIndexInit].successful_url+'" id="'+resultListInit[thisIndexInit].id+'">查看更多详情</a>';
    }
    $('.solution-banner-content').html(bannerTextInit);
    //banner 特点 内容
    var advInitStr = '';
    var numInit = 0;
    $(resultListInit[thisIndexInit].advantage).each(function (i,item) {
        numInit++;
        advInitStr+='<li>' +
            '<div>' +
            '<h3><i class="icon"> 0'+numInit+'</i>'+item.name+'</h3>' +
            '<div><p>'+item.ad_description+'</p></div>' +
            '</div>' +
            '</li>';
    });
    $('.solution-adv-con').html(advInitStr);
    scrollR('.solution-adv-con','.solution-adv-left','.solution-adv-right');
    //解决方案 痛点分析 内容
    var planLeftInitStr = '';
    $(resultListInit[thisIndexInit].analysis_and_solution[0].analysis).each(function (i,item) {
        planLeftInitStr+='<li><i></i>'+item+'</li>'
    });
    $('.plan-left-list').html(planLeftInitStr);
    var planRightInitStr = '';
    planRightInitStr = resultListInit[thisIndexInit].analysis_and_solution[0].solution;
    $('.plan-right-content').html(planRightInitStr);
    //解决方案及痛点分析的显示
    planShow();
    //使用能力 内容
    var useInitStr = '';
    $(resultListInit[thisIndexInit].use_ability).each(function (i,item) {
        useInitStr+='<li>' +
            '<div class="solution-use-list-main">' +
            '<span class="solution-use-list-main-title">'+item.name+'</span>' +
            '<div><img src="'+item.icon+'" alt=""></div>' +
            '</div>' +
            '</li>'
    });
    $('.solution-use-list').html(useInitStr);
    //使用能力的显示效果
    scrollR('.solution-use-list','.solution-use-btnL','.solution-use-btnR');
    //使用能力的跳转
    solutionUse();
    //应用效果 内容
    var resultInitStr = '';
    $(resultListInit[thisIndexInit].result).each(function (i,item) {
        resultInitStr+='<div class="result-list-main"><p>'+item+'</p></div>';
    });
    $('.solution-result-list').html(resultInitStr);
    //成功案例 内容
    var successInitStr = '';
    $(resultListInit[thisIndexInit].successful_cases).each(function (i,item) {
        successInitStr+='<li>' +
            '<div class="success-case-content-top"><img src="'+item.icon+'" alt=""></div>' +
            '<div class="success-case-content-bottom">' +
            '<h4>'+item.name+'</h4>' +
            '<p>'+item.cases_description+'</p>' +
            '<div><a href="javascript:;" class="success-pop-btn">进一步了解</a></div>' +
            '</div>' +
            '</li>'
    });
    $('.solution-success-case-list').html(successInitStr);
    if(resultListInit[thisIndexInit].successful_cases[0].icon.indexOf('data/images/solution/look-forward.png')>=0){
        $('.success-case-content-top').css({'height':'250px','padding':'0px'});
        $('.success-case-content-top img').css({'width':'100%','height':'100%'});
    }else{
        $('.success-case-content-top').css({'height':'auto','padding':'93px 0px'});
        $('.success-case-content-top img').css({'width':'180px','height':'64px'});
        //案例的效果
        caseShow();
        $('.solution-success-case-list li').each(function (i,item) {
            var indexInit = i;
            var caseDataInit = resultListInit[thisIndexInit].successful_cases;
            $(this).find('.success-pop-btn').on('click',function () {
                $('.success-pop').show();
                // $('body').addClass('modal-open');
                $('.pop-main-content-text h3').html(caseDataInit[indexInit].name);
                $('.pop-main-content-text .pop-content-text-top').html(caseDataInit[indexInit].cooperative_content);
                $('.pop-main-content-text .pop-content-text-bottom').html(caseDataInit[indexInit].cooperative_effect);
                $('.pop-main-content-text .pop-content-img img').attr('src',caseDataInit[indexInit].cooperative_img);
            })
        });
        $('.success-pop-close').on('click',function () {
            $('.success-pop').hide();
            // $('body').removeClass('modal-open');
            $('.pop-main-content-text .pop-content-img img').attr('src','');
        })
    }
});

//特点的显示
function scrollR(box,btnL,btnR) {

    /**
     * 隐藏左右尖角号
     * @param left
     * @param right
     */
    function solutionDisplay(left, right) {
        var leftObj = $(btnL);
        var rightObj = $(btnR);
        left ? leftObj.show() : leftObj.hide();
        right ? rightObj.show() : rightObj.hide();
    }

    // var advLi = $('.solution-adv-con > li');
    var advLi = $(box).find('li');
    var indexL = 0;
    var oneWidth = 0; //移动的宽度
    var liLen = advLi.length;
    var step = 1;//步长
    // var advLiW = advLi.eq(0).width();
    var advLiW = advLi.eq(0).outerWidth();
    var stepW = advLiW*step;

    $(box).css({marginLeft:0});

    if(liLen <= 3){
        return solutionDisplay(false, false);
    }

    solutionDisplay(false, true);

    $(btnL).unbind().click(function () {

        indexL = indexL-step;
        indexL = indexL < 0 ? 0 :indexL;
        oneWidth = oneWidth + stepW;

        $(box).stop().animate({
            "margin-left" : oneWidth
        },500);

        if (indexL == 0) {
            solutionDisplay(false, true);
            if(box == '.solution-use-list'){
                advLi.eq(2).addClass('padding-right-no');
                advLi.eq(3).removeClass('padding-right-no');
            }
        }else if(indexL == liLen-3) {
            solutionDisplay(true, false);
            if(box == '.solution-use-list'){
                advLi.eq(2).removeClass('padding-right-no');
                advLi.eq(3).addClass('padding-right-no');
            }
        } else{
            solutionDisplay(true, true);
            if(box == '.solution-use-list'){
                advLi.eq(2).removeClass('padding-right-no');
                advLi.eq(3).addClass('padding-right-no');
            }
        }

    });

    $(btnR).unbind().click(function () {

        oneWidth = oneWidth - stepW;
        indexL = indexL + step;
        indexL = indexL > liLen-3 ? liLen-3 : indexL;

        $(box).stop().animate({
            "margin-left" : oneWidth
        },500);

        if (indexL == liLen-3) {
            solutionDisplay(true, false);
            if(box == '.solution-use-list') {
                advLi.eq(2).removeClass('padding-right-no');
                advLi.eq(3).addClass('padding-right-no');
            }
        }else if(indexL == 0){
            solutionDisplay(false, true);
            if(box == '.solution-use-list') {
                advLi.eq(2).addClass('padding-right-no');
                advLi.eq(3).removeClass('padding-right-no');
            }
        } else {
            solutionDisplay(true, true);
            if(box == '.solution-use-list') {
                advLi.eq(2).removeClass('padding-right-no');
                advLi.eq(3).addClass('padding-right-no');
            }
        }
    });
}

//解决方案及痛点分析的显示
function planShow() {
    $('.plan-left-img').css("display","none");
    $('.plan-right-img').css("display","none");
    $('.plan-right-img img').css("display","none");
    $('.plan-right-img b').css("display","none");
    $('.plan-left-list').css({"top":0});
    $('.plan-left-list').removeClass('plan-left-list-show animated fadeInLeft');
    $('.plan-right-content').removeClass('plan-right-content-show animated fadeInRight')

    setTimeout(planLeftImg,1000);
    setTimeout(planLeftList,2000);
    setTimeout(planRightImg,3000);
    setTimeout(planRightList,4000);
    function planLeftImg() {
        $('.plan-left-img').fadeIn();
        $('.plan-left-list').css({"top":-32});
        // clearTimeout(timer1);
    }
    function planLeftList() {
        $('.plan-left-list').addClass('plan-left-list-show animated fadeInLeft');
        // clearTimeout(timer2);
    }
    function planRightImg() {
        $('.plan-right-img').fadeIn();
        $('.plan-right-img img').fadeIn();
        $('.plan-right-img b').fadeIn();
        // clearTimeout(timer3);
    }
    function planRightList() {
        $('.plan-right-content').addClass('plan-right-content-show animated fadeInRight');
        // clearTimeout(timer4);
    }
}

//使用能力的跳转
function solutionUse() {
    var solutionUseIndex;
    var solutionUseText;
    var solutionUseFirstLen = api_json.ability.length;
    var solutionUseSecondLen;
    var solutionUseSecondStr;
    $('.solution-use-list li').on('click',function () {
        var _this = $(this);
        solutionUseIndex = _this.index();
        solutionUseText = _this.find('.solution-use-list-main-title').html();
        var solutionUseUrl = 'api.html?index='+solutionUseIndex+'&text='+solutionUseText+'';
        for(var p=0;p<solutionUseFirstLen;p++){
            solutionUseSecondLen = api_json.ability[p].sub_ability.length;
            for(var q=0;q<solutionUseSecondLen;q++){
                solutionUseSecondStr = api_json.ability[p].sub_ability[q].sub_name;
                if(solutionUseSecondStr == solutionUseText){
                    window.open(solutionUseUrl);
                }
            }
        }
    })
}

//案例的效果
function caseShow() {
    $('.solution-success-case-list li').hover(function () {
        $(this).find('.success-case-content-top').css({'top':'-250px'});
        $(this).find('.success-case-content-bottom').css({'top':'-250px'})
    },function () {
        $(this).find('.success-case-content-top').css({'top':'0px'});
        $(this).find('.success-case-content-bottom').css({'top':'0px'})
    });
}

// $('.solution-success-case-list li').mouseover(function () {
//     $(this).find('.success-case-content-top').css({'top':'-250px'});
//     $(this).find('.success-case-content-bottom').css({'top':'-250px'})
// });
// $('.solution-success-case-list li').mouseout(function () {
//     $(this).find('.success-case-content-top').css({'top':'0px'});
//     $(this).find('.success-case-content-bottom').css({'top':'0px'})
// });
// function scrollR() {
//     var advLi = $('.solution-adv-con > li');
//     var screenWidth = $(window).width(); //屏幕的宽度
//     var indexL = 0;
//     var oneWidth = 0; //移动的宽度
//     var scrollSum = 0; //卷进去的宽度
//     var liSum = 0;
//     var c=0; //li总长度
//
//     if(advLi.length <= 3){
//         $('.solution-adv-left').hide();
//         $('.solution-adv-right').hide();
//     }else{
//         // $('.solution-adv-left').hide();
//         $('.solution-adv-right').show();
//
//         $('.solution-adv-left').click(function () {
//             indexL = indexL-1;
//             oneWidth = oneWidth + advLi.eq(indexL).width();
//             $('.solution-adv-con').stop().animate({
//                 "margin-left" : oneWidth
//             },500);
//             scrollSum = scrollSum - advLi.eq(indexL).width();
//             if (indexL <= 0) {
//                 $('.solution-adv-left').hide();
//                 $('.solution-adv-right').show();
//                 return false;
//             }else{
//                 $('.solution-adv-left').show();
//                 $('.solution-adv-right').hide();
//             }
//         });
//         for(var i = 0;i < advLi.length;i++){
//             liSum = advLi.eq(i).width()+2+liSum;
//         }
//         $('.solution-adv-right').click(function () {
//             $('.solution-adv-left').show();
//             oneWidth = oneWidth - advLi.eq(indexL).width();
//             $('.solution-adv-con').stop().animate({
//                 "margin-left" : oneWidth
//             },500);
//             scrollSum = scrollSum + advLi.eq(indexL).width();
//             indexL = indexL + 1;
//             if (liSum - scrollSum < 386*(4)) {
//                 $('.solution-adv-right').hide();
//                 $('.solution-adv-left').show();
//                 return false;
//             }else{
//                 $('.solution-adv-right').show();
//                 $('.solution-adv-left').hide();
//             }
//         })
//     }
// }