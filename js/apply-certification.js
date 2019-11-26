$(function () {
    //鼠标经过的效果
    // $('.apply-list li').hover(function () {
    //     // $(this).find('.apply-list-icon').slideUp(300);
    //     // $(this).find('.apply-list-icon').stop().animate({height:'0',opacity:'0'},300);
    //     $(this).find('.apply-list-icon').css('display','none');
    // },function () {
    //     // $(this).find('.apply-list-icon').slideDown(300);
    //     // $(this).find('.apply-list-icon').stop().animate({height:'90',opacity:'1'},300);
    //     $(this).find('.apply-list-icon').css('display','block');
    // });

    $('.apply-list li').mouseover(function () {
        // console.log(1)
        $(this).find('.apply-list-content').css({'top':'-103px'});
        $(this).find('.apply-list-icon').css({'opacity':'0'});

        // $(this).find('.apply-list-content').animate({'top':'-113px'},300);
        // $(this).find('.apply-list-icon').animate({'opacity':'0'},300);
    })
    $('.apply-list li').mouseout(function () {
        $(this).find('.apply-list-content').css({'top':'0'});
        $(this).find('.apply-list-icon').css({'opacity':'1'});

        // $(this).find('.apply-list-content').animate({'top':'0'},300);
        // $(this).find('.apply-list-icon').animate({'opacity':'1'},300);
    })
});