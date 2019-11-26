
$(document).ready(function(){
   /* $(".nav-hide li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })*/
    $tolocation = "";
    var $first_index = 0;

     /*左侧二级菜单显示隐藏*/
    $(".menu2-show").click(function(){
        var menu2 = $(this).siblings('ul').css("display");
        if(menu2=="none"){
            $(".nav-hide").slideUp();
            $(this).siblings('ul').slideDown();
            $(this).find(".icon-tri").addClass('icon-triD').removeClass('icon-triU').parents(".boxLi").siblings().find(".icon-tri").addClass('icon-triU').removeClass('icon-triD');
        }else{
            $(this).siblings('ul').slideUp();
            $(this).find(".icon-tri").addClass('icon-triU').removeClass('icon-triD');
        }
    })

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

     /*点击加入合作意向购物车+1*/
    var cooI = 0;
    $(".btn-coo").on("click",function(){
        cooI++;
        if(cooI<=0){
            $(".coo-add").hide();
        }else{
            $(".coo-add").show();
            $(".coo-num").html(cooI)
        }
    });

    index_api_default();

    var $api_id = getUrlParam("id");
    var $api_id_subid = getUrlParam("subId");
 // 第一个显示
    if($api_id == undefined || $api_id_subid == undefined){
        $(".boxLi").eq(0).find(".icon-tri").addClass('icon-triD').removeClass('icon-triU');
        $(".boxLi ul").first().css("display","block");
        $(".index0 li").first().addClass("active");

        var scene_str ='';
        var api_str ='';
        var $sub_name;
        var sub_name_scene;
        var $second_index = 0;
        var $api_list_more;
        var $api_cases_url;
        var $api_cases_url_str='';

        $sub_name = api_json.ability[$first_index].sub_ability[$second_index];
            $api_list_more = $sub_name.detail_url;
            $api_cases_url = $sub_name.cases;
                for(var mm = 0; mm < $api_cases_url.length;mm++){
                    $api_cases_url_str += "<li class='cap-img'><img src='"+$api_cases_url[mm].image_url+"' alt=''></li>";
            }
            $(".inf-text h2").text($sub_name.sub_name);
            $("#des").text($sub_name.description);
            $(".inf-img img").attr("src",$sub_name.ability_icon);
            $("#api_list_more").attr("href",$api_list_more);

        //20180316  添加事件码 更多详情
        $code = $sub_name.so_more_event_code;
        $("#api_list_more").attr("code",$code);

            $(".cases").html($api_cases_url_str);
            // $api_cases_url_str = '';
            // 应用场景
            sub_name_scene = api_json.ability[$first_index].sub_ability[$second_index].scene;
            // var $scene = sub_name_scene.split("。");
            var scene_con='';
            /*for(var n = 0;n< $scene.length; n++){
                scene_con += "<li><span>"+$scene[n]+"</span></li>"
            }*/
            scene_con += "<li><span>"+sub_name_scene+"</span></li>"
            scene_str = scene_con;
            $("#application_scene").html(scene_str);
            // API列表
            var $api_list = api_json.ability[$first_index].sub_ability[$second_index].api_list;
            var $api_con = '';
            for(var c = 0; c < $api_list.length; c++){
                var c2 = "<td>"+$api_list[c].sub_api_name+"</td>"
                var c3 = "<td>"+$api_list[c].sub_api_desc+"</td>"
                var c4 = "<td>"+$sub_name.sub_api_owner+"</td>"
                var c5 = "<td>"+$api_list[c].sub_api_type+"</td>"
                
                if((c + 1)%2 === 0) {
                    $api_con += "<tr style='background: #f6f9fe'>"+c2+c3+c4+c5+"</tr>";
                }else {
                    $api_con += "<tr>"+c2+c3+c4+c5+"</tr>";
                }
            }
            api_str = $api_con;
            $("#api_list").html($api_con);
            // senceSize();

            /*在线订购签约显示隐藏*/
            var signOnline = $sub_name.close_a_deal;

            // var online_event_code = $sub_name.event_code;

            //alert(signOnline)
            if(signOnline==""||signOnline==undefined){
                $(".btnCQ .btn-q").hide();
            }else{
                $(".btnCQ .btn-q").show();
                $tolocation = signOnline;
                /*$(".btnCQ .btn-q").click(function(){
                    window.open(signOnline);
                })*/

                // 20180319   增加事件码  在线订购签约
                $codeOnline = $sub_name.online_event_code;
            }

        //index_api_default();

     }else{
        $first_index = $api_id-1;
     }

     //在线订购签约显示隐藏
    var signOnlineC = api_json.ability[0].sub_ability[0].close_a_deal;

    // var codeOnline = api_json.ability[0].sub_ability[0].so_more_event_code;
    if(signOnlineC==""||signOnlineC==undefined){
        $(".btnCQ .btn-q").hide();
    }else{

        $(".btnCQ .btn-q").show();
        $tolocation = signOnlineC;
        //$(".btnCQ .btn-q").attr("onclick","window.open("+signOnlineC+");");
        // $(".btnCQ .btn-q").click(function(){
        //     window.open(signOnlineC);
        // })
    }
    function tolocation() {
        window.open($tolocation);
    }

    //20180316  添加事件码  在线订购签约
    function getEventcode() {
        // alert($codeOnline);
        var api_online_code = $codeOnline;
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', api_online_code]})

    }



    $(".btnCQ .btn-q").click(function(){
        tolocation();

        getEventcode()

    });

     $("#left_nav .boxLi").on("click",function(){
        // debugger
        $first_index = $(this).index();

        // 20180320  注销  为了阻止多次绑定点击事件
        // index_api_default();
    });


    //solution 跳转api

    var $solution_api_id = window.location.href.split('index=')[1];
    var $solution_api_text = decodeURI(window.location.href.split('&text=')[1]);
    if($solution_api_id == "" || $solution_api_id == undefined){
        return;
    }else{
        var $api_first_title = $(".menu2-show").length;
        var $api_li_text;
        var $api_li_index;
        var $api_first_index;
        for(var x =0;x<$api_first_title;x++){
            var $api_second_title = $(".menu2-show").eq(x).siblings(".nav-hide").children("li").length;
            for(var y=0;y< $api_second_title;y++){
                $api_li_text = $(".boxLi").eq(x).children(".nav-hide").children("li").eq(y).text();
                $api_li_index = $(".boxLi").eq(x).children(".nav-hide").children("li").eq(y).index();
                /*console.log($api_li_index,$api_li_text);*/
                if($api_li_text == $solution_api_text){
                    //debugger;
                    $(".boxLi").eq(x).children(".nav-hide").children("li").removeClass("active").eq(y).addClass("active");
                    $(".boxLi").eq(x).find(".icon-tri").addClass('icon-triD').removeClass('icon-triU').parents(".boxLi").siblings().find(".icon-tri").addClass('icon-triU').removeClass('icon-triD');
                    $(".boxLi").eq(x).find(".nav-hide").css("display","block").parents(".boxLi").siblings().find(".nav-hide").hide();
                    var $solution_api_name = api_json.ability[x].sub_ability[y];
                    var $solution_api_more = $solution_api_name.detail_url;
                    $(".inf-text h2").text($solution_api_name.sub_name);
                    $("#des").text($solution_api_name.description);
                    $(".inf-img img").attr("src",$solution_api_name.ability_icon);
                    $("#api_list_more").attr("href",$solution_api_more);

                    // 应用场景
                    var $index_scene_str ='';
                    var $index_api_str ='';
                    var $index_sub_name_scene;
                    $index_sub_name_scene = api_json.ability[x].sub_ability[y].scene;
                    // var $index_scene = $index_sub_name_scene.split("。");
                    var $index_scene_con='';
                    /*for(var nn = 0;nn< $index_scene.length; nn++){
                        $index_scene_con += "<li><span>"+$index_scene[nn]+"</span></li>"
                    }*/
                    $index_scene_con += "<li><span>"+$index_sub_name_scene+"</span></li>"
                    $index_scene_str = $index_scene_con;
                    $("#application_scene").html($index_scene_str);
                    // API列表
                    var $index_api_list = api_json.ability[x].sub_ability[y].api_list;
                    var $index_api_con = '';
                    for(var cc = 0; cc < $index_api_list.length; cc++){
                        var cc2 = "<td>"+$index_api_list[cc].sub_api_name+"</td>"
                        var cc3 = "<td>"+$index_api_list[cc].sub_api_desc+"</td>"
                        var cc4 = "<td>"+$solution_api_name.sub_api_owner+"</td>"
                        var cc5 = "<td>"+$index_api_list[cc].sub_api_type+"</td>"
                        $index_api_con += "<tr>"+cc2+cc3+cc4+cc5+"</tr>";
                    }
                    $index_api_str = $index_api_con;
                    $("#api_list").html($index_api_str);
                }
                /*在线订购签约显示隐藏*/
                var signOnline = api_json.ability[x].sub_ability[y].close_a_deal;
                //alert(signOnline)
                if(signOnline==""||signOnline==undefined){
                    $(".btnCQ .btn-q").hide();
                }else{
                    $(".btnCQ .btn-q").show();
                    $tolocation = signOnline;
                    /*$(".btnCQ .btn-q").click(function(){
                     window.open(signOnline);
                     })*/

                    // 20180319   增加事件码  在线订购签约
                    $codeOnline = $sub_name.online_event_code;
                }
            }
        }
    }

    // 不用单击第一级菜单即可获取数据
    function index_api_default(){
        $(".nav-hide li").on("click",function(){
            $api_cases_url_str ='';
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').parents(".boxLi").siblings().find(".nav-hide li").removeClass('active');

            // console.log(subId)
            // var _this= this;
            $second_index = $(this).index() > 0 ? $(this).index() : 0;
            // 大标题
            $sub_name = api_json.ability[$first_index].sub_ability[$second_index];
            $api_list_more = $sub_name.detail_url;
            $api_cases_url = $sub_name.cases;
                for(var mm = 0; mm < $api_cases_url.length;mm++){
                    $api_cases_url_str += "<li class='cap-img'><img src='"+$api_cases_url[mm].image_url+"' alt=''></li>";
            }
            $(".inf-text h2").text($sub_name.sub_name);
            $("#des").text($sub_name.description);
            $(".inf-img img").attr("src",$sub_name.ability_icon);
            $("#api_list_more").attr("href",$api_list_more);

            //20180316  添加事件码 更多详情
            $code = $sub_name.so_more_event_code;
            $("#api_list_more").attr("code",$code);

            $(".cases").html($api_cases_url_str);
            // $api_cases_url_str = '';
            // 应用场景
            sub_name_scene = api_json.ability[$first_index].sub_ability[$second_index].scene;
            // var $scene = sub_name_scene.split("。");
            var scene_con='';
            /*for(var n = 0;n< $scene.length; n++){
                scene_con += "<li><span>"+$scene[n]+"</span></li>"
            }*/
            scene_con += "<li><span>"+sub_name_scene+"</span></li>"
            scene_str = scene_con;
            $("#application_scene").html(scene_str);
            // API列表
            var $api_list = api_json.ability[$first_index].sub_ability[$second_index].api_list;
            var $api_con = '';
            for(var c = 0; c < $api_list.length; c++){
                var c2 = "<td>"+$api_list[c].sub_api_name+"</td>"
                var c3 = "<td>"+$api_list[c].sub_api_desc+"</td>"
                var c4 = "<td>"+$sub_name.sub_api_owner+"</td>"
                var c5 = "<td>"+$api_list[c].sub_api_type+"</td>"
                // $api_con += "<tr>"+c2+c3+c4+c5+"</tr>";

                if((c + 1)%2 === 0) {
                    $api_con += "<tr style='background: #f6f9fe'>"+c2+c3+c4+c5+"</tr>";
                }else {
                    $api_con += "<tr>"+c2+c3+c4+c5+"</tr>";
                }
            }
            api_str = $api_con;
            $("#api_list").html($api_con);
            // senceSize();

            /*在线订购签约显示隐藏*/
            var signOnline = $sub_name.close_a_deal;
            //alert(signOnline)
            if(signOnline==""||signOnline==undefined){
                $(".btnCQ .btn-q").hide();
            }else{
                $(".btnCQ .btn-q").show();
                $tolocation = signOnline;
                /*$(".btnCQ .btn-q").click(function(){
                    window.open(signOnline);
                })*/


                // 20180319   增加事件码  在线订购签约
                $codeOnline = $sub_name.online_event_code;
            }


            //updata 20180315 增加事件码
            var api_code = $sub_name.event_code;
            // alert(api_code);
            Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', api_code]});

        });
    }
});
$("#api_list_more").click(function () {
    // alert($(this).attr("code"));
    var so_more_event_code = $(this).attr("code");
    Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', so_more_event_code]});
});


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}