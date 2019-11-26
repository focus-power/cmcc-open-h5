$(function () {
    //解决方案副导航
    var navSolutionStr = '';
    $(data.solution).each(function (i,item) {
        navSolutionStr += '<li id="'+ item.id +'"><a>'+ item.name +'</a></li>'
    });
    $('#solution-new-list').html(navSolutionStr);
    //api副导航
    var tt = api_json.ability.length;

    var fitst_title = '';
    var str = '';
    for(var i =0;i < tt;i++){
        var $name = api_json.ability[i].name;
        fitst_title = "<li data='"+api_json.ability[i].id+"' class='head-api-list"+i+"'><h3>"+$name+"</h3><ul class='api-child-list index"+i+"'></ul>";
        var $mian = api_json.ability[i].sub_ability.length;
        var second_name = '';
        for(var j =0; j< $mian; j++){
            var $sub_name = api_json.ability[i].sub_ability[j].sub_name;
            second_name += "<li data='"+api_json.ability[i].sub_ability[j].sub_id+"'><a>"+$sub_name+"</a></li>";
        }
        str = second_name;
        second_name = '';
        $("#api-list").append(fitst_title);
        $(".index"+i+"").html(str);
    }

    apiLocation($('.main-choose-nav'), $('.head-api-list>li'));

    $('.menu-list-api').hover(function () {
        $('.menu-list-api .main-choose-nav').css({'visibility':'visible'})
        // $('.menu-list-api .main-choose-nav').fadeIn()
    },function () {
        $('.menu-list-api .main-choose-nav').css({'visibility':'hidden'})
        // $('.menu-list-api .main-choose-nav').fadeOut()
    });
    $('.menu-list-solution').hover(function () {
        $('.menu-list-solution .main-choose-nav').css({'visibility':'visible'})
        // $('.menu-list-solution .main-choose-nav').fadeIn()
    },function () {
        $('.menu-list-solution .main-choose-nav').css({'visibility':'hidden'})
        // $('.menu-list-solution .main-choose-nav').fadeOut()
    });

    var $solution_li_index;
    $(document).on('click','#solution-new-list li',function () {
        $solution_li_index = $(this).index();
        var $solution_li_url = 'solution_new.html?id='+$solution_li_index;
        location.href = $solution_li_url;

        //添加事件码  解决方案
        var float_solution_code = data.solution[$solution_li_index].float_event_code;
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', float_solution_code]});
    });

    var $api_li_subId;
    var $api_li_id;
    $(document).on('click','.api-child-list li',function () {
        // $api_li_subId = $(this).attr("data");
        // $api_li_id = $(this).parent().parent().attr("data");
        // var $api_li_url = 'api.html?id='+ $api_li_id +'&subId='+$api_li_subId;

        $api_li_subId = $(this).attr("data")-1;
        $api_li_id = $(this).parent().parent().attr("data")-1;
        var $api_li_url = 'api_new.html?id='+ $api_li_id +'&subId='+$api_li_subId;
        location.href = $api_li_url;

        //添加API事件码
        var float_api_code = api_json.ability[$api_li_id].sub_ability[$api_li_subId].float_event_code;
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', float_api_code]});
        // alert(float_api_code)
    });

    function apiLocation(outBox, obj){
        //用jquery获取所有的box
        var box = obj;
        //box的宽度
        var boxWidth = box.eq(0).innerWidth();
        //每行共有几个box
        var num = Math.floor(outBox.width()/boxWidth);
        //存放box的boxHeight
        var boxArr = [];
        //each方法遍历box，当只有一行的时候记录boxHeight，多于一行则找出minBoxHeight，并设置样式。
        box.each(function(index,value){
            var boxHeight = box.eq(index).innerHeight();
            if(index<num){
                boxArr[index] = boxHeight + 25;
            }else{
                var minBoxHeight = Math.min.apply(null,boxArr);  //找出数组中最小数
                var minBoxIndex = $.inArray(minBoxHeight,boxArr); //确定第一个参数在数组中的位置
                $(value).css({
                    "position":"absolute",
                    "top":minBoxHeight,
                    "left":box.eq(minBoxIndex).position().left
                });
                //动态变化minBoxIndex
                boxArr[minBoxIndex] += box.eq(index).innerHeight();
            }
        });
    }
});

$(function(){
    if(browserRedirect() === 'pc') {
        $('.main-choose-nav').removeClass('main-choose-nav-center');
    }else{
        $('.main-choose-nav').addClass('main-choose-nav-center');
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
