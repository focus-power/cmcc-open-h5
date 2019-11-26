(function(){
    var s=document.createElement("script"); s.async=true; s.src="js/webtrends.load.js ";
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);

    //营销码
    //点击首页banner
    var marketingCode_banner  = ['banner1','banner2','banner3','banner4','banner5'];

    // 导航栏搜索结果页面  参数加在搜索结果页面url链接后
    var marketingCode_search = ['SS'];

    // 点击导航栏能力API按钮
    var marketingCode_nav_api = ['API2'];

    //点击导航栏解决方案按钮
    var marketingCode_nav_sol = ['SOL2'];


    // 头部导航 事件码
    var headCode = ['HOME_top_home', 'HOME_top_API', 'HOME_top_solution', 'HOME_top_help', 'HOME_top_news', 'HOME_top_hc','HOME_top_search', 'HOME_top_cooperate'];
    //头部导航事件码
    $('.h-menu-list > li').click(function () {
        var header_code = headCode[$(this).index()];
        if($(this).index() != 7){
            onClick(header_code);
            //头部导航添加营销码
            // if($(this).index() == 1){
            //     var head_href = $($('.h-menu-list > li > a')[1]).attr('href');
            //     if(head_href != 'javascript:void(0);') {
            //         $($('.h-menu-list > li > a')[1]).attr("href",head_href+'?WT.ac='+marketingCode_nav_api[0]);
            //     }
            // }else if($(this).index() == 2){
            //     var head_href = $($('.h-menu-list > li > a')[2]).attr('href');
            //     if(head_href != 'javascript:void(0);') {
            //         $($('.h-menu-list > li > a')[2]).attr("href",head_href+'?WT.ac='+marketingCode_nav_sol[0]);
            //     }
            // }
        }
    });


    //合作意向购物车 事件码
    $('.cooperate a').click(function(){
        var header_code = headCode[7];
        onClick(header_code);
    });


    //搜索框
    var home_top_search = ['HOME_top_search'];
    //搜索框事件码
    document.onkeydown = function(e){
        var ev = document.all ? window.event : e;
        var hasFocus = $('.api-search input').is(':focus');
        if(ev.keyCode==13&&hasFocus) {
            var code = home_top_search[0];

            $('.api-search').css({"border-color":"#4682EE"});
            onClick(code);
        }
    };
    //搜索框营销码
    //后端form表单中添加属性及ID添加


    //首页轮播图
    var home_banner = ['HOME_banner1','HOME_banner2','HOME_banner3','HOME_banner4','HOME_banner5'];
    //首页轮播图营销码拼接
    $('#swiperContainer2 a').each(function (i, domEle) {
        var href = $(domEle).attr('href');
        $(domEle).attr('href',href+'?WT.ac='+marketingCode_banner[i]);
        // $(domEle).attr('href',href+'?WT.ac='+marketingCode_banner[i]+'&'+home_banner[i]);
        // $(domEle).attr('href','https://open.10086.cn/open/ability/?WT.ac=?WT.ac='+marketingCode_banner[i]+'&'+home_banner[i]);
    });
    $('#swiperContainer3 a').each(function (i, domEle) {
        var href = $(domEle).attr('href');
        $(domEle).attr('href',href+'?WT.ac='+marketingCode_banner[i]);
        // $(domEle).attr('href',href+'?WT.ac='+marketingCode_banner[i]+'&'+home_banner[i]);
        // $(domEle).attr('href','https://open.10086.cn/open/ability/?WT.ac=?WT.ac='+marketingCode_banner[i]+'&'+home_banner[i]);
    });
    //首页轮播图事件码
    $('#swiperContainer2 a').click(function () {
        var banner_event_code1 = home_banner[$(this).index()-1];
        onClick(banner_event_code1)
    });
    $('#swiperContainer3 a').click(function () {
        var banner_event_code = home_banner[$(this).index()-1];
        onClick(banner_event_code);
    });


    //首页更多动态
    var home_news_more = ['HOME_news_more'];

    $('.more-active').click(function () {
        var home_news_more_code = home_news_more[0];
        onClick(home_news_more_code);
    });


    //首页-合作伙伴-加入我们
    var home_joinus = ['HOME_joinus'];
    $('.coop-text').click(function () {
        var home_joinus_code = home_joinus[0];
        onClick(home_joinus_code);
    });


    // 底部菜单
    var footer_btn = ['HOME_btn_hlwnl','HOME_btn_txkf','HOME_btn_OneNet','HOME_btn_wlwnlkf','HOME_btn_szjt','HOME_btn_hyyysn','HOME_btn_hbzf','HOME_btn_mgspy','HOME_btn_Itnlkf','HOME_btn_ydy','HOME_btn_xyfw','HOME_btn_wzfw','HOME_btn_zywl','HOME_btn_zyyq'];
    // 底部菜单 事件码
    $('.footer-menu li').click(function () {
        var footer_btn_code = footer_btn[$(this).index()];
        onClick(footer_btn_code);
    });

    function onClick(code) {
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', code]});
    }


    //导航登录、注册

    //如果用户登录成功了
    $('.no-login').css('display','none');
    $('.yes-login').css('display','block');

    //点击个人中心图标
    // $(document).click(function () {
    //     $('.personal-info').css('display','none');
    //     // $('.yes-login').find('img').attr('src','images/login/login-icon14.png');
    //     $('.yes-login').find('img').attr('src','images/login/login-icon-new14.png');
    //     // $('.yes-login').find('img').attr('src','images/solution_new/login_icon.png');
    // });
    // $('.yes-login').click(function (event) {
    //     // $('.yes-login').find('img').attr('src','images/login/login-icon15.png');
    //     $('.yes-login').find('img').attr('src','images/login/login-icon-new15.png');
    //     // $('.yes-login').find('img').attr('src','images/solution_new/login_icon1.png');
    //     event.stopPropagation();
    //     $('.personal-info').css('display','block');
    // });
    //鼠标经过个人中心图标 显示用户中心下拉菜单
    $('.login-register').hover(function () {
        //只有登录成功的时候 才显示用户中心下拉菜单
        if($('.yes-login').is(":visible")){
            $('.personal-info').css('display','block');
            $('.yes-login').find('img').attr('src','images/login/login-icon-new15.png');
        }
    },function () {
        $('.personal-info').css('display','none');
        $('.yes-login').find('img').attr('src','images/login/login-icon-new14.png');
    });
    
    //点击退出
    $('.info-list2').click(function () {
        $('.personal-info').css('display','none');
        $('.yes-login').css('display','none');
        // $('.yes-login').find('img').attr('src','images/login/login-icon14.png');
        $('.yes-login').find('img').attr('src','images/login/login-icon-new14.png');
        // $('.yes-login').find('img').attr('src','images/solution_new/login_icon.png');
        $('.no-login').css('display','block');
    });

    //搜索框的显示和隐藏
    $(document).on('mouseover','.api-search',function () {
        // $('.api-search').stop().animate({width:"152px"},500);
        $('.api-search').stop().animate({width:"150px"},500).css({"background-color":"#f5f5f8","border-color":"#e9e9e9"});
        $('.cooperate').css({width:'0px',opacity:'0',display:'none'});
        $('.search-line').css('display','none');
        // $('.head .logo').css('margin-right','74px');
    });
    // // $('.api-search').mouseover(function () {
    //     $('.api-search').stop().animate({width:"152px"},500);
    //     // $('.cooperate').stop().animate({width:"0",display:'none'},500);
    //     // $('.cooperate').stop().animate({width:"0",opacity:'0',display:'none'},500);
    //     $('.cooperate').css({width:'0px',opacity:'0',display:'none'});
    // });

    $(document).click(function () {
        // $('.api-search').stop().css('width','29px');
        $('.api-search').stop().css({"width":"29px","background-color":"transparent","border-color":"transparent"});
        $('.cooperate').css({'width':'auto','opacity':'1',display:'block'});
        $('.search-line').css('display','block');
        // $('.head .logo').css('margin-right','90px');
    });

    $(document).on('click','.api-search',function (e) {
        // $('.api-search').css('width','152px');
        $('.api-search').css({"width":"180px","background-color":"#f5f5f8","border-color":"#4682ee"});
        $('.cooperate').css({width:'0px',opacity:'0',display:'none'});
        $('.search-line').css('display','none');
        // $('.head .logo').css('margin-right','74px');
        e.stopPropagation()
    });

}());


