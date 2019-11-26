
'use strict';

$(function(){
    // var minHeight = $(document).height();
    // $('.pop').css({
    //     minHeight: minHeight
    // });

    // var $index_solution_id = window.location.href.split('id=')[1];
    // 20180320 更改ID匹配问题（由于地址栏拼接了营销码 所以导致ID匹配问题）
    // console.log(window.location.href.split('id=')[1]);
    var $index_solution_id;
    if(window.location.href.split('id=')[1] === undefined){
        $index_solution_id = window.location.href.split('id=')[1];
    }else {
        $index_solution_id = /id=(\d*)(&)?/g.exec(window.location.search)[1];
    }
    // console.log($index_solution_id)
    var template = Handlebars.compile($("#solution_data").html());
    $("#spolution_data_con").html(template(data));
    $('.banLeft').on('click', 'li', function(event) {
        event.preventDefault();
        // $(this).addClass('act').siblings().removeClass('act')
    });

    /*回到顶部箭头是否显示*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){$('.toTop').css('visibility', 'visible');}else{$('.toTop').css('visibility', 'hidden');}
        if($(window).scrollTop() > 450){
            $('.tabWrap').addClass('fixed');
        }else{
            $('.tabWrap').removeClass('fixed');
        }
    });

    /*左侧导航点击样式改变*/
    $(".tabTitle").on('click','li',function (){
        $(this).addClass('act').siblings().removeClass('act');
        var index=$(this).index();
        $('html, body').animate({
            scrollTop: $(".tabCon").eq(index).offset().top-60
        }, 500);
    });

    /*回到顶部箭头点击事件*/
    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*侧边导航*/
    var navStr = "";
    $(data.solution).each(function(index,item){
        navStr += '<li id="'+ item.id +'" class=""><a><i class="icon" style="background: url('+ item.icon +') no-repeat" > </i> '+ item.name +'</a></li>';
    });
    $("#nav-left").html(navStr);
    if ( !$index_solution_id  ) {
        $("#nav-left li:first-child").addClass("act").find("i").css("backgroundImage","url(" + data.solution[0].iconHoverUrl + ")");
    }

    var liNav = $(".scrollbar li").length;
    // alert(liNav);
    /*渲染数据*/
    $("#nav-left li").on("click",function(){
        $(".rCon,.engA").css("margin-left","0");
        $("#left").css("display","none");
        $("#A-left").css("display","none");
        if ( !$(this).hasClass("act") ) {
            var iconSilblingsId =  $("#nav-left").find(".act").attr("id");
        }
        $(this).addClass("act").siblings().removeClass("act");
        var selectId = $(this).attr("id");
        var changeIconData = data.solution;
        
        for ( var i = 0 ; i < changeIconData.length ; i++ ) {
            if ( changeIconData[i].id == selectId ) {
                $(this).find("i").css("backgroundImage","url(" + changeIconData[i].iconHoverUrl+ ")");
            }
            if ( iconSilblingsId ) {
                if ( changeIconData[i].id == iconSilblingsId ) {
                    $( "#"+ iconSilblingsId ).find("i").css("backgroundImage", "url(" + changeIconData[i].icon +")");
                }
            }
        };

        //updata 20180316  添加事件码
        var solution_code = changeIconData[$(this).index()].so_event_code;
        // alert(solution_code);
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', solution_code]});

        /*console.log(data)*/
        var $li = $(".rCon>li");
        var thisLi = $(this);
        var thisIndex = thisLi.index();
        // console.log(thisIndex);
        var resultList = data.solution;
        // Webtrends.multiTrack({argsa:['DCS.dcsuri','/nopv.gif','WT.event','resultList[thisIndex].so_event_code']});
        // var title = '<h2><img src="'+resultList[thisIndex].imgage+'" class="icon" />'+resultList[thisIndex].name+'</h2>'+
        //     '<p>'+resultList[thisIndex].description+'</p>';

        var title = '<h2><img src="'+resultList[thisIndex].imgage+'"/>'+resultList[thisIndex].name+'</h2>'+
            '<p>'+resultList[thisIndex].description+'</p>';
        $("#title").html(title);
        var advantageStr = '';
        var kk=0;
        $(resultList[thisIndex].advantage).each(function(iadv,tadv){
            kk++;
            advantageStr += '<li>'+
                            '<div>'+
                                '<h3><i class="icon icon'+kk+'"></i>'+tadv.name+'</h3>'+
                                '<p>'+tadv.ad_description+'</p>'+
                            '</div>'+
                        '</li>';
        });
        $("#advantage").html(advantageStr);

        /*console.log(resultList[thisIndex]);*/
        /*解决方案及痛点分析*/
        var cc = 0;
        var analysisAndSolution = '';
        $(resultList[thisIndex].analysis_and_solution).each(function(iaas,taas){
            var ii = cc++;
            analysisAndSolution += '<tr>'+
                    /*'<td>'+ii+'</td>'+*/
                    '<td>'+taas.analysis+'</td>'+
                    '<td>'+taas.solution+'</td>'+
                '</tr>';
        });
        $("#analysis_and_solution").html(analysisAndSolution);
        var useAbility = '';
        $(resultList[thisIndex].use_ability).each(function(iua,tua){
            useAbility +=' <li>'+
                    '<div>'+

                        '<div class="uaimg"><img src="'+tua.icon+'" /></div>'+
                        '<p class="title">'+tua.name+'</p>'+
                    '</div>'+
                '</li>';
        });
        $("#use_ability").html(useAbility);

        // var title = '<h2><img src="'+resultList[thisIndex].imgage+'" class="icon" />'+resultList[thisIndex].name+'</h2>'+
            // '<p>'+resultList[thisIndex].description+'</p>';

        var title = '<h2><img src="'+resultList[thisIndex].imgage+'"/>'+resultList[thisIndex].name+'</h2>'+
            '<p>'+resultList[thisIndex].description+'</p>';

        $("#title").html(title);

        //应用效果
        $("#result").html(resultList[thisIndex].result);

        //成功案例
        var successfulCases = '';
        $(resultList[thisIndex].successful_cases).each(function(i,t){
            successfulCases += '<li>'+
                '<div class="img">'+
                    '<img src="'+t.icon+'" alt="">'+
                '</div>'+
                '<p class="title">'+t.name+'</p>'+
                '<p class="text">'+t.cases_description+'</p>'+
            '</li>';
        });
        $("#successful_cases").html(successfulCases);
        if(resultList[thisIndex].successful_cases[0].icon.indexOf("data/images/solution/look-forward.png")>=0) {
            $(".eg li").mouseover(function(){
                $(this).css({"border":"1px solid rgba(0,0,0,.1)","cursor":"default"})
            })
        }else{
            caseMO();
            /*案例详情弹窗数据*/
            $("#successful_cases li").on("click", function () {

                var caseLi = $(this);
                var caseIndex = caseLi.index();
                // console.log(caseIndex)
                var caseDetail = data.solution[thisIndex].successful_cases;
                $(".pop-s").show();
                $(".pop-s .details-con h4").html(caseDetail[caseIndex].name);
                $("#cooperative_content").html(caseDetail[caseIndex].cooperative_content);
                $("#cooperative_effect").html(caseDetail[caseIndex].cooperative_effect);
                $(".pop-s .details-con .details-img img").attr("src", caseDetail[caseIndex].cooperative_img);
                $(".pop-s .details-con .details-img img").hide();
                $(".pop-s .details-con .details-img img").load(function(){
                    $(".pop-s .details-con .details-img img").show();
                });
            });
            $(".pop-icon").on("click", function () {
                $(".pop-s").hide();
                $(".pop-s .details-con .details-img img").attr("src", "");
            });
        }

        /*var successfulUrl = '<a class="suc-url" target="_blank" href="'+resultList[thisIndex].successful_url+'">更多详情</a>';
        $("#successful_url").html(successfulUrl);*/
        $("#suc-url").attr("href",resultList[thisIndex].successful_url);

        //20180316 添加事件码 查看详情
        $("#suc-url").attr("code",resultList[thisIndex].so_more_event_code);
        // console.log($("#suc-url").attr('code'));

        solution_api();
        scrollR();
        scrollA();
    });

    $("#suc-url").click(function () {
        // alert($(this).attr('code'));
        var so_more_code = $(this).attr('code');
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', so_more_code]});
    });

    // 渲染数据  lalala

    var $li = $(".rCon>li");
    var thisIndex = 0;
    if($index_solution_id){
        thisIndex = $index_solution_id;
    }else{
        thisIndex = 0;
    }

    var resultList = data.solution;
    // var title = '<h2><img src="'+resultList[thisIndex].imgage+'" class="icon" />'+resultList[thisIndex].name+'</h2>'+
    // '<p>'+resultList[thisIndex].description+'</p>';

    var title = '<h2><img src="'+resultList[thisIndex].imgage+'"/>'+resultList[thisIndex].name+'</h2>'+
        '<p>'+resultList[thisIndex].description+'</p>';
    $("#title").html(title);
    var advantageStr = '';
    var kk=0;
    $(resultList[thisIndex].advantage).each(function(iadv,tadv){
        kk++;
        advantageStr += '<li>'+
        '<div>'+
        '<h3><i class="icon icon'+kk+'"></i>'+tadv.name+'</h3>'+
        '<p>'+tadv.ad_description+'</p>'+
        '</div>'+
        '</li>';
    });
    $("#advantage").html(advantageStr);

    //updata 20180316  添加事件码
    // var solution_code = resultList[thisIndex].so_event_code;
    // alert(solution_code);
    // Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', solution_code]});

    /*解决方案及痛点分析*/
    var cc = 0;
    var analysisAndSolution = '';
    $(resultList[thisIndex].analysis_and_solution).each(function(iaas,taas){
        var ii = cc++;
        analysisAndSolution += '<tr>'+
        /*'<td>'+ii+'</td>'+*/
        '<td>'+taas.analysis+'</td>'+
        '<td>'+taas.solution+'</td>'+
        '</tr>';
    });
    $("#analysis_and_solution").html(analysisAndSolution);
        var useAbility = '';
        $(resultList[thisIndex].use_ability).each(function(iua,tua){
        useAbility +=' <li>'+
        '<div>'+

        '<div class="uaimg"><img src="'+tua.icon+'" /></div>'+
        '<p class="title">'+tua.name+'</p>'+
        '</div>'+
        '</li>';
    });
    $("#use_ability").html(useAbility);

    var successfulCases = '';
    $(resultList[thisIndex].successful_cases).each(function(i,t){
        successfulCases += '<li>'+
        '<div class="img">'+
        '<img src="'+t.icon+'" alt="">'+
        '</div>'+
        '<p class="title">'+t.name+'</p>'+
        '<p class="text">'+t.cases_description+'</p>'+
        '</li>';
    });
    $("#successful_cases").html(successfulCases);
    if(resultList[thisIndex].successful_cases[0].icon.indexOf("data/images/solution/look-forward.png")>=0){
        $(".eg li").mouseover(function(){
            $(this).css({"border":"1px solid rgba(0,0,0,.1)","cursor":"default"})
        });
    }else{
        caseMO();

        /*案例详情弹窗数据*/
        $("#successful_cases li").on("click",function(){
            var caseLi = $(this);
            var caseIndex = caseLi.index();
            // console.log(caseIndex)
            var caseDetail = data.solution[thisIndex].successful_cases;
            $(".pop-s").show();
            $(".pop-s .details-con h4").html(caseDetail[caseIndex].name);
            $("#cooperative_content").html(caseDetail[caseIndex].cooperative_content);
            $("#cooperative_effect").html(caseDetail[caseIndex].cooperative_effect);
            $(".pop-s .details-con .details-img img").attr("src",caseDetail[caseIndex].cooperative_img);
            $(".pop-s .details-con .details-img img").hide();
            $(".pop-s .details-con .details-img img").load(function(){
                $(".pop-s .details-con .details-img img").show();
            });
        });
        $(".pop-icon").on("click",function(){
            $(".pop-s").hide();
            $(".pop-s .details-con .details-img img").attr("src", "");
        });
    }

    /*var successfulUrl = '<a class="suc-url" target="_blank" href="'+resultList[thisIndex].successful_url+'">更多详情</a>';
    $("#successful_url").html(successfulUrl);*/
    $("#suc-url").attr("href",resultList[thisIndex].successful_url);

    //20180316 添加事件码 查看详情
    $("#suc-url").attr("code",resultList[thisIndex].so_more_event_code);
    // $("#suc-url").click(function () {
    //     alert($(this).attr('code'));
    //     var so_more_code = $(this).attr('code');
    //     Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', so_more_code]});
    // });



    if ( $index_solution_id ) {
        $("#nav-left li").eq($index_solution_id).addClass("act").siblings().removeClass("act");
        var jumpIconData = data.solution;
        var changeIconId =  $("#nav-left").find('.act').attr('id');
        for ( var i = 0 ; i < jumpIconData.length ; i++ ) {
            if ( jumpIconData[i].id == changeIconId ) {
                $("#"+ changeIconId ).find('i').css("backgroundImage", "url("+ jumpIconData[i].iconHoverUrl +")");
            }
        } 
    }
    
    $("#result").html(resultList[thisIndex].result);
    solution_api();
    scrollR();
    scrollA();
    // caseDetails();


    $("#successful_cases li").on("click",function(){
        var caseLi = $(this);
        var caseIndex = caseLi.index();
        // console.log(caseIndex)
        // var sIndex = data.solution.index();
        var id=data.solution[thisIndex].id;
        // alert(id);
        var caseDetail = data.solution[thisIndex].successful_cases;
        $(".pop-s").show();
        $(".pop-s .details-con h4").html(caseDetail[caseIndex].name);
        $("#cooperative_content").html(caseDetail[caseIndex].cooperative_content);
        $("#cooperative_effect").html(caseDetail[caseIndex].cooperative_effect);
        $(".pop-s .details-con .details-img img").attr("src",caseDetail[caseIndex].cooperative_img);
        $(".pop-s .details-con .details-img img").hide();
        $(".pop-s .details-con .details-img img").load(function(){
            $(".pop-s .details-con .details-img img").show();
        });
    });
    $(".pop-icon").on("click",function(){
        $(".pop-s").hide();
    });

    $(function(){
        if(browserRedirect() === 'pc') {
            if(thisIndex > (liNav-7)){
                // console.log(thisIndex);
                $(".scrollbar").css("top",-49*(liNav-6));
            }else {
                $(".scrollbar").css("top",-49*thisIndex);
            }
        }else{
            /*$('html, body').animate({
                scrollTop: $(".scrollbar li").eq(thisIndex).offset().top-60
            }, 500);*/
            // $(".scrollbar").css("top",-49*thisIndex);
            $('.nav-box').animate({
                scrollTop: $(this).find("li").eq(thisIndex).offset().top
            },10);
       }
    });

});
function scrollR(){
    var $li = $("#advantage>li");
    var screenWidth = $(window).width(); //屏幕的宽度
    var indexL = 0;
    var oneWidth = 0; //移动的宽度
    var scrollSum = 0; //卷进去的宽度
    var liSum = 0;
    var c=0; //li总长度
    if($li.length <= 3){
        $(".arrow").css("visibility","hidden");
    }else{
        $(".arrow").css("visibility","visible");
        $("#right").show();
        // $("#left").css("display","none");

        $("#left").click(function() {
            $("#right").show();
            indexL = indexL - 1;
            oneWidth = oneWidth + $li.eq(indexL).width();
            $(".rCon").stop(true, false).animate({
                "margin-left": oneWidth
            }, 500);
            scrollSum = scrollSum - $li.eq(indexL).width();
            if (indexL <= 0) {
                $("#left").hide();
                return false;
            }else{
                $("#left").show();
            }
        });
        for(var i = 0;i < $li.length;i++){
            liSum = $li.eq(i).width()+2+liSum;
        }

        $("#right").click(function() {

            $("#left").show();
            oneWidth = oneWidth - $li.eq(indexL).width();
            $(".rCon").stop(true, false).animate({
                "margin-left": oneWidth
            }, 500);
            scrollSum = scrollSum + $li.eq(indexL).width();
            indexL = indexL + 1;
            if (liSum - scrollSum < 275*(4)) {
                $("#right").hide();
                return false;
            }else{
                $("#right").show();
            }
        });
    }
}

function scrollA(){
    var $liA = $("#use_ability>li");
    if($liA.length <= 4){
        $(".arrowA").css("visibility","hidden");
    }else{
        $(".arrowA").css("visibility","visible");

        var screenWidthA = $(window).width(); //div快的宽度
        var indexLA = 0;
        var oneWidthA = 0; //移动的宽度
        var scrollSumA = 0; //卷进去的宽度
        var liSumA = 0;
        $("#A-left").click(function() {
            $("#A-right").show();
            indexLA = indexLA - 1;
            oneWidthA = oneWidthA + $liA.eq(indexLA).width();
            $(".engA").stop(true, false).animate({
                "margin-left": oneWidthA
            }, 500);
            scrollSumA = scrollSumA - $liA.eq(indexLA).width();
            if (indexLA <= 0) {
                $("#A-left").hide();
                return false;
            }
        });
        for(var i = 0;i < $liA.length;i++){
            liSumA = $liA.eq(i).width()+2+liSumA;
        };
        $("#A-right").click(function() {

            $("#A-left").show();
            oneWidthA = oneWidthA - $liA.eq(indexLA).width();
            $(".engA").stop(true, false).animate({
                "margin-left": oneWidthA
            }, 500);
            scrollSumA = scrollSumA + $liA.eq(indexLA).width();
            indexLA = indexLA + 1;
            if (liSumA - scrollSumA < screenWidthA - 280) {
                $("#A-right").hide();
                return false;
            }
        });
        /*$("#A-right").click(function(){

            if(liSumA - scrollSumA < screenWidthA-280){
                return;
            }else{
                oneWidthA = oneWidthA - $liA.eq(indexLA).width();
                $(".engA").stop(true,false).animate({
                    "margin-left":oneWidthA
                });
                scrollSumA = scrollSumA + $liA.eq(indexLA).width();
                indexLA = indexLA + 1;
            }
        })*/
    }
}

function solution_api(){
    // solution点击使用能力获取对应的值
    var $solution_api_index;
    var $solution_api_text;
    var $api_left_str;
    var $api_left_first_len = api_json.ability.length;
    var $api_left_second_len;
    var $api_left_second_str;
    $("#use_ability li").on("click",function(){
        var _that = $(this);
        $solution_api_index = _that.index();
        $solution_api_text = _that.find(".title").text();
        var $solution_api_url = 'api.html?index='+ $solution_api_index+'&text=' + $solution_api_text;
        for(var p=0;p<$api_left_first_len;p++){
            $api_left_second_len = api_json.ability[p].sub_ability.length;
            for(var q=0;q<$api_left_second_len;q++){
                $api_left_second_str = api_json.ability[p].sub_ability[q].sub_name;
                if($api_left_second_str == $solution_api_text){
                    window.open($solution_api_url);
                    /*window.location.href = $solution_api_url;*/
                }
            }
        }
        //alert($solution_api_text);
    })
}

 /*解决方案 成功案例动态鼠标悬浮*/
function caseMO(){
    $(".eg li").hover(function(){
        // alert("ooo");
        $(this).children('.img').find('img').stop().animate({
            height:"120%",
            width:"120%",
            top:"-10%",
            left:"-10%"
        })
    },function(){
        $(this).children('.img').find('img').stop().animate({
            height:"100%",
            width:"100%",
            top:"0",
            left:"0"
        })
    })
}


//solution_details跳转
function solDetails(){
    var solId = getUrlParam("id");
    for(var i = 0;i<=data.solution.length;i++){
        if(data.solution[i].id == solId){
            //选中部分添加样式
            var tindex = solId-1;
            $(".nav-left li").eq(tindex).addClass('act').siblings().removeClass('act');
            solData(data.solution[i]);
        }
    }
}


function solData(obj){
    $(".rCon,.engA").css("margin-left","0");

        // var title = '<h2><img src="'+obj.imgage+'" class="icon" />'+obj.name+'</h2>'+
            // '<p>'+obj.description+'</p>';

    var title = '<h2><img src="'+obj.imgage+'"/>'+obj.name+'</h2>'+
        '<p>'+obj.description+'</p>';
        $("#title").html(title);
        var advantageStr = '';
        var kk=0;
        $(obj.advantage).each(function(iadv,tadv){
            kk++;
            advantageStr += '<li>'+
                            '<div>'+
                                '<h3><i class="icon icon'+kk+'"></i>'+tadv.name+'</h3>'+
                                '<p>'+tadv.ad_description+'</p>'+
                            '</div>'+
                        '</li>';
        });
        $("#advantage").html(advantageStr);

        /*console.log(resultList[thisIndex]);*/
        /*解决方案及痛点分析*/
        var cc = 0;
        var analysisAndSolution = '';
        $(obj.analysis_and_solution).each(function(iaas,taas){
            var ii = cc++;
            analysisAndSolution += '<tr>'+
                    /*'<td>'+ii+'</td>'+*/
                    '<td>'+taas.analysis+'</td>'+
                    '<td>'+taas.solution+'</td>'+
                '</tr>';
        });
        $("#analysis_and_solution").html(analysisAndSolution);
        var useAbility = '';
        $(obj.use_ability).each(function(iua,tua){
            useAbility +=' <li>'+
                    '<div>'+

                        '<div class="uaimg"><img src="'+tua.icon+'" /></div>'+
                        '<p class="title">'+tua.name+'</p>'+
                    '</div>'+
                '</li>';
        });
        $("#use_ability").html(useAbility);

        /*var title = '<h2><img src="'+obj.imgage+'" class="icon" />'+obj.name+'</h2>'+
            '<p>'+obj.description+'</p>';
        $("#title").html(title);*/

        $("#result").html(obj.result);

        var successfulCases = '';
        $(obj.successful_cases).each(function(i,t){
            successfulCases += '<li>'+
                '<div class="img">'+
                    '<img src="'+t.icon+'" alt="">'+
                '</div>'+
                '<p class="title">'+t.name+'</p>'+
                '<p class="text">'+t.cases_description+'</p>'+
            '</li>';
        });
        $("#successful_cases").html(successfulCases);
        /*var successfulUrl = '<a class="suc-url" target="_blank" href="'+obj.successful_url+'">更多详情</a>';
        $("#successful_url").html(successfulUrl);*/
         $("#suc-url").attr("href",resultList[thisIndex].successful_url);


}

//获取url中的参数值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        // return unescape(r[2]);
        return decodeURI(r[2]); //解决中文乱码问题
    return null;
}

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