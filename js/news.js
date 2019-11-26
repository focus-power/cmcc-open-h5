/*
* @Author: name
* @Date:   2017-10-16 10:13:38
* @Last Modified by:   name
* @Last Modified time: 2017-11-08 10:05:03
*/

$(function(){

    /*回到顶部箭头是否显示*/
    $(window).scroll(function(){
        if($(window).scrollTop() > 70){$('.toTop').css('visibility', 'visible');}else{$('.toTop').css('visibility', 'hidden');}
        if($(window).scrollTop() > 450){
            $('.tabWrap').addClass('fixed');
        }else{
            $('.tabWrap').removeClass('fixed');
        }
    });

    $('.toTop').on('click',function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    // //显示第一个新闻内容
    // $(".main").first().css("display","block");
    // $(".scrollbar li a").first().css("color","#3399ff");
    // //首页点击选中新闻，在新闻页进行展示
    // var $index_news_id = window.location.href.split('id=')[1];
    var template = Handlebars.compile($("#foo").html());
    $("#news_con").html(template(news_json));

    //数据的显示和隐藏
    var lis = $(".scrollbar li").length;
    var arr = [];
    //隐藏数据
    $(".scrollbar li").eq(8).nextAll().css('display','none');
    arr = $(".scrollbar li").eq(8).nextAll();
    var counter = 0;
    var pageStart = 0;
    var pageSize = 9; //每次显示的条数
    //显示数据
    function loadMore(star,size) {
        var sum = arr.length;
        if(sum - star < size){
            size = sum - star
        }
        //显示数据
        for( var i = pageStart ; i< (pageStart+size) ; i++){
            $(arr[i]).fadeIn();
        }
        //没有数据了查看更多隐藏
        if ( (star + size) >= sum){
            $('.news-more').hide();
        }else{
            $('.news-more').show();
        }
    }
    $('.news-more').click(function () {
        pageStart = counter * pageSize;
        loadMore(pageStart,pageSize);
        counter++;
    });
    // $('.news-more').click(function () {
    //     var aText = $('.news-more span').html();
    //     for(var i=0;i<arr.length;i++){
    //         if(aText == '查看更多'){
    //             $(arr[i]).fadeIn();
    //             $('.news-more span').html('收起')
    //         }else{
    //             $(arr[i]).fadeOut();
    //             $('.news-more span').html('查看更多')
    //         }
    //     }
    // });

    $(".scrollbar li a").attr("href", './news_page.html');
    $(".scrollbar li").on("click",function(){
        // debugger
        $index_news_id = $(this).index();
        $(this).find('a').attr("href", './news_page.html'+'?page='+ $index_news_id);
        // window.open('./news_page.html'+'?page='+ $index_news_id);

        //updata 20180315 添加事件码
        var news_code = news_json.news[$index_news_id].event_code;
        // alert(news_code);
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', news_code]});
    });
    // if($index_news_id != null && $index_news_id != undefined && $index_news_id != ''){
    //     $(".scrollbar li").eq($index_news_id).children("a").css("color","#3399ff").parents(".scrollbar li").siblings().children("a").css("color","#666");
    //     $(".main").eq($index_news_id).css("display","block").siblings(".main").css("display","none");
    // }else{
    //    $(".main").first().css("display","block");
    //    $(".scrollbar li a").first().css("color","#3399ff");
    // }
    // // tab切换
    // var $news_index;
    // $(".scrollbar li").on("click",function(){
    //     $news_index = $(this).index();
    //     $(this).children("a").css("color","#3399ff").parents(".scrollbar li").siblings().children("a").css("color","#666");
    //     // alert($news_index);
    //     $(".main").eq($news_index).css("display","block").siblings(".main").css("display","none");
    // });


    // //解析新闻页的json content中的内容
    // var reg =  /<[^>]+>/g;
    // var shortStr = news_json.news;
    // var str1 = '';
    // var ii;
    // //console.log(shortStr.length)
    // for(var i = 0 ; i<shortStr.length;i++){
    //     (function(ui){
    //         str1 = shortStr[ui].content;
    //     })(i)
    //    $(".main").eq(i).children('.news-text').html(str1)
    // }
});


//updata 20180307 GYJ
$(function() {
    //鼠标经过 图片缩放及文字
    $('.scrollbar li').hover(
        function(){
            var $this = $(this);
            $this.find('img').stop().animate({'color':'#3399ff','height':'120%','top':'-10%','left':'-10%'});
        },
        function(){
            var $this = $(this);
            $this.find('img').stop().animate({'color':'#666','height':'100%','top':'0%','left':'0%'});
        }
    );
});

