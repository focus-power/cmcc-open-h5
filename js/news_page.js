/**
 * Created by GYJ on 2018/3/7.
 */
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

//updata 20180307 GYJ
    var new_arr = new Array();
    for (var i=0;i<news_json.news.length;i++){
        new_arr[i] = news_json.news[i];
    }
    var page = window.location.href.split('page=')[1];
    var now_content = new_arr[page];
    $('#title').html(now_content.title);
    $('#crumb-title').html(now_content.title);
    $('#date').html(now_content.date);
    $('#author').html(now_content.author);
    $('#news-text').html(now_content.content)
});