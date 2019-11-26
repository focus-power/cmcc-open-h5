
$(function () {
    // //解决方案副导航
    // var navSolutionStr = '';
    // $(data.solution).each(function (i,item) {
    //     navSolutionStr += '<li id="'+ item.id +'"><a>'+ item.name +'</a></li>'
    // });
    // $('.solution-list').html(navSolutionStr);
    // //api副导航
    // var tt = api_json.ability.length;
    // var fitst_title = '';
    // var str = '';
    // for(var i =0;i < tt;i++){
    //     var $name = api_json.ability[i].name;
    //     fitst_title = "<li data='"+api_json.ability[i].id+"' class='api-list"+i+"'><h3>"+$name+"</h3><ul class='api-child-list index"+i+"'></ul>";
    //     var $mian = api_json.ability[i].sub_ability.length;
    //     var second_name = '';
    //     for(var j =0; j< $mian; j++){
    //         var $sub_name = api_json.ability[i].sub_ability[j].sub_name;
    //         second_name += "<li data='"+api_json.ability[i].sub_ability[j].sub_id+"'><a>"+$sub_name+"</a></li>";
    //     }
    //     str = second_name;
    //     second_name = '';
    //     $("#api-list").append(fitst_title);
    //     $(".index"+i+"").html(str);
    // }
    
    $('.menu-list-solution>a').attr('href', 'javascript:void(0);');

    //首页跳转过来 传过来的id
    var $index_solution_id;
    if(window.location.href.split('id=')[1] === undefined){
        $index_solution_id = window.location.href.split('id=')[1];
    }else {
        $index_solution_id = /id=(\d*)(&)?/g.exec(window.location.search)[1];
    }

    var bool = true;
    var tabChoose = 0;
    //回到顶部箭头是否显示 页面滚动定位
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.toTop').css('visibility', 'visible');
        }else{
            $('.toTop').css('visibility', 'hidden');
        }
        if($(window).scrollTop() > 600){
            $('.solution-tab').addClass('fixed');
            tabChoose = Math.floor(($(window).scrollTop()-610)/470);
            $('.tab-title li').eq(tabChoose).addClass('change-color').siblings().removeClass('change-color');
        }else{
            $('.solution-tab').removeClass('fixed');
            tabChoose = 0;
        }
        if($(window).scrollTop() < 583){
            tabChoose = 0;
        }
        if($(window).scrollTop() > 380 && bool){
            //解决方案及痛点分析的显示
            planShow();
            bool = false;
        }
    });

    //回到顶部箭头点击事件
    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    //具体内容的切换
    // 切换不同解决方案，默认选中解决方案按钮
    $('.tab-title-first').addClass('change-color').siblings().removeClass('change-color');
    $('.tab-title li').on('click',function () {
        var indexLi = $(this).index();
        $(this).addClass('change-color').siblings().removeClass('change-color');
        $('html, body').animate({
            scrollTop: $(".solution-box").eq(indexLi).offset().top-70
        }, 500);

        if($('.tab-title-first').is('.change-color')){
            //解决方案及痛点分析的显示
            planShow();
        }
    });




    //切换解决方案内容 渲染数据
    // $(document).on('click','#solution-list li',function () {
    //
    // });
    $('#solution-new-list li').on('click',function () {
        var resultList = data.solution;
        var thisIndex = $(this).index();

       // 切换不同解决方案，默认选中解决方案按钮
        $('.tab-title-first').addClass('change-color').siblings().removeClass('change-color');

        //banner 文字展示
        var bannerText = '';
        //在线教育 行业视频 行业安全 没有查看更多详情
        // if(thisIndex == '7' || thisIndex == '14' ||thisIndex == '15' ){
        //     bannerText = '<h2>'+ resultList[thisIndex].name +'</h2>'+
        //         '<p>'+ resultList[thisIndex].description +'</p>'+
        //         '<a href="javascript:;" id="'+resultList[thisIndex].id+'" class="a-hidden" code="'+resultList[thisIndex].so_more_event_code+'">查看更多详情</a>';
        // }else{
        //     bannerText = '<h2>'+ resultList[thisIndex].name +'</h2>'+
        //         '<p>'+ resultList[thisIndex].description +'</p>'+
        //         '<a href="'+resultList[thisIndex].successful_url+'" id="'+resultList[thisIndex].id+'" code="'+resultList[thisIndex].so_more_event_code+'">查看更多详情</a>';
        // }
        bannerText = '<div class="title-h2">'+ resultList[thisIndex].name +'</div>'+
                '<br/>' +
                '<div class="solution-banner-introduction">'+ resultList[thisIndex].description +'</div>'+
                '<br/>' +
                '<a href="'+resultList[thisIndex].successful_url+'" id="'+resultList[thisIndex].id+'" code="'+resultList[thisIndex].so_more_event_code+'">查看更多详情</a>';
        $('.solution-banner-content').html(bannerText);

        //添加事件码  解决方案
        var solution_code = resultList[thisIndex].so_event_code;
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', solution_code]});

        //特点 内容
        var advStr = '';
        var num = 0;
        $(resultList[thisIndex].advantage).each(function (i,item) {
            num++;
            // advStr+='<li>' +
            //     '<div>' +
            //     '<h3><i class="icon">0'+num+'</i>'+item.name+'</h3>' +
            //     '<div><div class="solution-adv-explain">'+item.ad_description+'</div></div>' +
            //     '</div>' +
            //     '</li>';

            advStr+='<li>' +
                '<div>' +
                '<i class="icon"> 0'+numInit+'</i>' +
                '<h3>'+item.name+'</h3>' +
                '<div><div class="solution-adv-explain">'+item.ad_description+'</div></div>' +
                '</div>' +
                '</li>';
        });
        $('.solution-adv-con').html(advStr);

        //解决方案及痛点分析 内容
        var planLeftStr = '';
        $(resultList[thisIndex].analysis_and_solution[0].analysis).each(function (i,item) {
            // planLeftStr+='<li>' +
            //     '<i>' +
            //     '</i>'+item+'' +
            //     '</li>';
            // planLeftStr+='<li class="clearfix">' +
            //     '<i></i><p>'+item+'</p>' +
            //     '</li>'
            planLeftStr+='<li>'+item+'</li>'
        });
        $('.plan-left-list').html(planLeftStr);

        var planRightStr = '';
        planRightStr = resultList[thisIndex].analysis_and_solution[0].solution;
        $('.plan-right-content').html(planRightStr);

        //特点按钮的展示效果
        scrollR('.solution-adv-con','.solution-adv-left','.solution-adv-right');

        //解决方案及痛点分析的显示
        // planShow();

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
                '<div class="esult-list-info">'+item+'</div>' +
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
            $('.solution-success-case').css({'height':'335px'});
            $('.solution-success-case-content ul > li').css({'width':'100%','height':'165px'});
            $('.success-case-content-bottom').css({'display':'none'});
            $('.success-case-content-top').css({'height':'100%','background':'transparent'});
            $('.success-case-content-top > img').css({'width':'998px','height':'165px'});
        }else{
            $('.solution-success-case').css({'height':'454px'});
            $('.solution-success-case-content ul > li').css({'width':'279','height':'210px'});
            $('.success-case-content-bottom').css({'display':'block'});
            $('.success-case-content-top').css({'height':'auto','background':'#ffffff'});
            $('.success-case-content-top > img').css({'width':'279px','height':'210px'});
            //案例的效果
            caseShow();
            $('.solution-success-case-list li').each(function (i,item) {
                var index = i;
                var caseData = resultList[thisIndex].successful_cases;
                // $(this).find('.success-pop-btn').on('click',function () {
                $(this).on('click',function () {
                    $('.success-pop').show();
                    // $('body').addClass('modal-open');
                    // ModalHelper.afterOpen();
                    $('.pop-main-content-text h3').html(caseData[index].name);
                    $('.pop-main-content-text .pop-content-text-top').html(caseData[index].cooperative_content);
                    $('.pop-main-content-text .pop-content-text-bottom').html(caseData[index].cooperative_effect);
                    $('.pop-main-content-text .pop-content-img img').attr('src',caseData[index].cooperative_img);
                })
            });
            $('.success-pop-close').on('click',function () {
                $('.success-pop').hide();
                // ModalHelper.beforeClose();
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
    // if(thisIndexInit == '7' || thisIndexInit == '14' ||thisIndexInit == '15' ){
    //     bannerTextInit = '<h2>'+ resultListInit[thisIndexInit].name +'</h2>'+
    //         '<p>'+ resultListInit[thisIndexInit].description +'</p>'+
    //         '<a href="javascript:;" id="'+resultListInit[thisIndexInit].id+'" class="a-hidden" code="'+resultListInit[thisIndexInit].so_more_event_code+'">查看更多详情</a>';
    // }else{
    //     bannerTextInit = '<h2>'+ resultListInit[thisIndexInit].name +'</h2>'+
    //         '<p>'+ resultListInit[thisIndexInit].description +'</p>'+
    //         '<a href="'+resultListInit[thisIndexInit].successful_url+'" id="'+resultListInit[thisIndexInit].id+'" code="'+resultListInit[thisIndexInit].so_more_event_code+'">查看更多详情</a>';
    // }
    bannerTextInit = '<div class="title-h2">'+ resultListInit[thisIndexInit].name +'</div>'+ 
        '<br/>' +
        '<div class="solution-banner-introduction">'+ resultListInit[thisIndexInit].description +'</div>'+
        '<br/>' +
        '<a href="'+resultListInit[thisIndexInit].successful_url+'" id="'+resultListInit[thisIndexInit].id+'" code="'+resultListInit[thisIndexInit].so_more_event_code+'">查看更多详情</a>';
    $('.solution-banner-content').html(bannerTextInit);
    //banner 特点 内容
    var advInitStr = '';
    var numInit = 0;
    $(resultListInit[thisIndexInit].advantage).each(function (i,item) {
        numInit++;
        // advInitStr+='<li>' +
        //     '<div>' +
        //     '<h3><i class="icon"> 0'+numInit+'</i>'+item.name+'</h3>' +
        //     '<div><div class="solution-adv-explain">'+item.ad_description+'</div></div>' +
        //     '</div>' +
        //     '</li>';

        advInitStr+='<li>' +
            '<div>' +
            '<i class="icon"> 0'+numInit+'</i>' +
            '<h3>'+item.name+'</h3>' +
            '<div><div class="solution-adv-explain">'+item.ad_description+'</div></div>' +
            '</div>' +
            '</li>';
    });
    // console.log(resultListInit[thisIndexInit].advantage.length)
    //特点少于3条 居中
    solutionAdvCon();
    $('.solution-adv-con').html(advInitStr);

    //特点少于3条 居中
    function solutionAdvCon() {
        // var solutionAdvConLiLen = $('.solution-adv-con li').length;
        var solutionAdvConLiLen = resultListInit[thisIndexInit].advantage.length;
        if(solutionAdvConLiLen == 1){
            $('.solution-adv-con').css({"padding":"0 0 0 417px"})
        }else if(solutionAdvConLiLen == 2){
            $('.solution-adv-con').css({"padding":"0 0 0 254px"})
        }else{
            $('.solution-adv-con').css({"padding":"0 0 0 0"})
        }
    }

    scrollR('.solution-adv-con','.solution-adv-left','.solution-adv-right');
    //解决方案 痛点分析 内容
    var planLeftInitStr = '';
    $(resultListInit[thisIndexInit].analysis_and_solution[0].analysis).each(function (i,item) {
        // planLeftInitStr+='<li><i></i>'+item+'</li>'
        // planLeftInitStr+='<li class="clearfix">' +
        //     '<i></i><p>'+item+'</p>' +
        //     '</li>'
        planLeftInitStr+='<li>'+item+'</li>'
    });
    $('.plan-left-list').html(planLeftInitStr);
    var planRightInitStr = '';
    planRightInitStr = resultListInit[thisIndexInit].analysis_and_solution[0].solution;
    $('.plan-right-content').html(planRightInitStr);
    //解决方案及痛点分析的显示
    // planShow();
    //使用能力 内容
    var useInitStr = '';
    $(resultListInit[thisIndexInit].use_ability).each(function (i,item) {
        if(i==2){
            useInitStr+='<li class="padding-right-no">' +
                '<div class="solution-use-list-main">' +
                '<span class="solution-use-list-main-title">'+item.name+'</span>' +
                '<div><img src="'+item.icon+'" alt=""></div>' +
                '</div>' +
                '</li>'
        }else{
            useInitStr+='<li>' +
                '<div class="solution-use-list-main">' +
                '<span class="solution-use-list-main-title">'+item.name+'</span>' +
                '<div><img src="'+item.icon+'" alt=""></div>' +
                '</div>' +
                '</li>'
        }
    });
    $('.solution-use-list').html(useInitStr);
    //使用能力少于3条 居中
    solutionUseList();

    //使用能力的显示效果
    scrollR('.solution-use-list','.solution-use-btnL','.solution-use-btnR');
    //使用能力的跳转
    solutionUse();
    //应用效果 内容
    var resultInitStr = '';
    $(resultListInit[thisIndexInit].result).each(function (i,item) {
        resultInitStr+='<div class="result-list-main"><div class="esult-list-info">'+item+'</div></div>';
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
        $('.solution-success-case').css({'height':'335px'});
        $('.solution-success-case-content ul > li').css({'width':'100%','height':'165px'});
        $('.success-case-content-bottom').css({'display':'none'});
        $('.success-case-content-top').css({'height':'100%','background':'transparent'});
        $('.success-case-content-top > img').css({'width':'998px','height':'165px'});
    }else{
        $('.solution-success-case').css({'height':'454px'});
        $('.solution-success-case-content ul > li').css({'width':'279','height':'210px'});
        $('.success-case-content-bottom').css({'display':'block'});
        $('.success-case-content-top').css({'height':'auto','background':'#ffffff'});
        $('.success-case-content-top > img').css({'width':'279px','height':'210px'});

        //案例的效果
        caseShow();
        $('.solution-success-case-list li').each(function (i,item) {
            var indexInit = i;
            var caseDataInit = resultListInit[thisIndexInit].successful_cases;
            // $(this).find('.success-pop-btn').on('click',function () {
            $(this).on('click',function () {
                $('.success-pop').show();
                // $('body').addClass('modal-open');
                // ModalHelper.afterOpen();
                $('.pop-main-content-text h3').html(caseDataInit[indexInit].name);
                $('.pop-main-content-text .pop-content-text-top').html(caseDataInit[indexInit].cooperative_content);
                $('.pop-main-content-text .pop-content-text-bottom').html(caseDataInit[indexInit].cooperative_effect);
                $('.pop-main-content-text .pop-content-img img').attr('src',caseDataInit[indexInit].cooperative_img);
            })
        });
        $('.success-pop-close').on('click',function () {
            $('.success-pop').hide();
            // ModalHelper.beforeClose();
            // $('body').removeClass('modal-open');
            $('.pop-main-content-text .pop-content-img img').attr('src','');
        })
    }


    //添加事件码 查看详情
    $(document).on('click','.solution-banner-content a',function () {
        var so_more_code = $(this).attr('code');
        // alert(so_more_code);
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', so_more_code]});
    })
});
//滚轮穿透事件
// var ModalHelper = (function(bodyCls) {
//     var scrollTop;
//     return {
//         //打开弹窗
//         afterOpen: function() {
//             scrollTop = document.scrollingElement.scrollTop;
//             document.body.classList.add(bodyCls);
//             document.body.style.top = -scrollTop + 'px';
//         },
//         //关闭弹窗
//         beforeClose: function() {
//             document.body.classList.remove(bodyCls);
//             // scrollTop lost after set position:fixed, restore it back.
//             document.scrollingElement.scrollTop = scrollTop;
//         }
//     };
// })('modal-open');

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
    // $('.plan-left-img').css("display","none");
    $('.plan-left-image2 img').css({'width':'0px','height':'0px'});
    $('.plan-left-image1 img').css({'width':'0px','height':'0px'});
    $('.plan-right-img1 img').css({'width':'0px','height':'0px'});
    $('.plan-right-img2 img').css({'width':'0px','height':'0px'});
    // $('.plan-left-img b').removeClass('b-show animated twinkle');
    // $('.plan-right-img b').removeClass('b-show animated twinkle');
    $('.plan-img b').removeClass('b-show animated twinkle');
    // $('.plan-right-img').css("display","none");
    // $('.plan-right-img img').css("display","none");
    // $('.plan-right-img b').css("display","none");
    // $('.plan-left-list').css({"top":0});
    $('.plan-left-list').removeClass('plan-left-list-show animated fadeInLeft');
    $('.plan-right-content').removeClass('plan-right-content-show animated fadeInRight');

    setTimeout(planLeftImg1,1000);
    setTimeout(planLeftB,500);
    setTimeout(planLeftImg1,1000);
    setTimeout(planLeftImg2,1500);
    setTimeout(planLeftList,2000);
    setTimeout(planRightB,2500);
    setTimeout(planRightImg1,3000);
    setTimeout(planRightImg2,3500);
    setTimeout(planRightList,4000);
    // function planLeftImg() {
    //     $('.plan-left-img').fadeIn();
    //     $('.plan-left-list').css({"top":-32});
    //     // clearTimeout(timer1);
    // }
    function planLeftB(){
        $('.plan-left-img b').addClass('b-show animated twinkle');
    }
    function planLeftImg1() {
        $('.plan-left-image2 img').animate({
            'width':'61px',
            'height':'44px'
        },500)
    }
    function planLeftImg2() {
        $('.plan-left-image1 img').animate({
            'width':'442px'
            // 'height':'44px'
        },500);
        $('.plan-left-image1 img').css('height','44px');
    }
    function planLeftList() {
        $('.plan-left-list').addClass('plan-left-list-show animated fadeInLeft');
        // clearTimeout(timer2);
    }
    // function planRightImg() {
    //     // $('.plan-right-img').fadeIn();
    //     // $('.plan-right-img img').fadeIn();
    //     // $('.plan-right-img b').fadeIn();
    //     // clearTimeout(timer3);
    // }
    function planRightB(){
        $('.plan-right-img b').addClass('b-show animated twinkle');
    }
    function planRightImg1() {
        $('.plan-right-img1 img').animate({
            'width':'60px',
            'height':'48px'
        },500)
    }
    function planRightImg2() {
        $('.plan-right-img2 img').animate({
            'width':'190px'
            // 'height':'48px'
        },500);
        $('.plan-right-img2 img').css('height','48px');
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
    var solutionUseSecondIndex;
    $('.solution-use-list li').on('click',function () {
        var _this = $(this);
        solutionUseIndex = _this.index();
        solutionUseText = _this.find('.solution-use-list-main-title').html();
        var solutionUseUrl = 'api_new.html?index='+solutionUseIndex+'&text='+solutionUseText+'';
        // var solutionUseUrl = 'api_new.html?id='+solutionUseIndex+'';
        // var solutionUseUrl = 'api_new.html?id='+solutionUseIndex;
        for(var p=0;p<solutionUseFirstLen;p++){
            solutionUseSecondLen = api_json.ability[p].sub_ability.length;
            for(var q=0;q<solutionUseSecondLen;q++){
                solutionUseSecondStr = api_json.ability[p].sub_ability[q].sub_name;

                solutionUseSecondIndex = api_json.ability[p].sub_ability[q].sub_id;

                if(solutionUseSecondStr === solutionUseText){
                    solutionUseUrl=solutionUseUrl+'&sub_id='+solutionUseSecondIndex;
                    window.open(solutionUseUrl);
                    // location.href = solutionUseUrl;
                }
            }
        }
    })
}

//案例的效果
function caseShow() {
    $('.solution-success-case-list li').hover(function () {
        $(this).find('.success-case-content-top').css({'top':'-210px'});
        $(this).find('.success-case-content-bottom').css({'top':'-210px'})
    },function () {
        $(this).find('.success-case-content-top').css({'top':'0px'});
        $(this).find('.success-case-content-bottom').css({'top':'0px'})
    });
}

// //特点少于3条 居中
// function solutionAdvCon() {
//     var solutionAdvConLiLen = $('.solution-adv-con li').length;
//     if(solutionAdvConLiLen == 1){
//         $('.solution-adv-con').css({"padding":"0 0 0 417px"})
//     }else if(solutionAdvConLiLen == 2){
//         $('.solution-adv-con').css({"padding":"0 0 0 254px"})
//     }else{
//         $('.solution-adv-con').css({"padding":"0 0 0 0"})
//     }
// }

//使用能力 少于3条 居中
function solutionUseList() {
    var solutionUseListLen = $('.solution-use-list li').length;
    if(solutionUseListLen == 1){
        $('.solution-use-list').css({"padding":"0 0 0 420px"})
    }else if(solutionUseListLen == 2){
        $('.solution-use-list').css({"padding":"0 0 0 210.75px"})
    }else{
        $('.solution-use-list').css({"padding":"0 0 0 0"})
    }
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