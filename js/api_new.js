$(function() {
    var default_variable = {
        scene_mui_str: '',
        scene_nav_str: '',
        scene_des_str: '',
        scene_banner_str: '',
        advantage_str: '',
        case_str: '',
        case_details_str: '',
        guideline_str1: '',
        guideline_str2: '',
        api_list_str: '',
        api_recommen_mui_str: '',
        api_recommen_str: ''
    };

    $tolocation = "";

    var sceneNavLiSum = 0,
        endDouble = 0,
        maxSceneLength = 0;

    var advCardLiSum = 0;
    var moveDistanceAdv = 0,    //左右移动距离
        moveTimesAdv = 0;      //左右移动次数
    
    var caseObj;
    var caseCardLiNum = 0;
    var $caseModal = $('.case-modal');
    var moveDistanceCase = 0,    //左右移动距离
        moveTimesCase = 0;      //左右移动次数

    var apiNavLiSum = 0,
        apiEndDouble = 0,
        maxApiRecommenLength = 0;

    var clickCount = 0;

    // $('.menu-list-api>a').attr('href', 'javascript:void(0);');

    //获取url中的参数值
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    var $api_id = getUrlParam("id");
    var $api_id_subid = getUrlParam("subId");

    if($api_id && $api_id_subid) {
        createPage($api_id, $api_id_subid);
    } else {
        createPage(0, 0);
    }

    $('.api-child-list>li').click(function() {
        var mainId = $(this).parents('li').attr('data') - 1;
        var subId = $(this).attr('data') - 1;
        
        createPage(mainId, subId);
    })

    // 页面内容展示
    function createPage(id, sub_id) {
        createGeneralInfo(id, sub_id);
        createScene(id, sub_id);
        createaAdvantage(id, sub_id);
        createaCase(id, sub_id);
        createaGuideline(id, sub_id);
        createaApiList(id, sub_id);
        createaApiRecommen(id, sub_id);

        guidelineAnimate();
    }
    
    // 基本信息
    function createGeneralInfo(id, sub_id) {
        var generalInfoObj = api_json.ability[id].sub_ability[sub_id];
        var signOnline = generalInfoObj.close_a_deal;

        $('.general-inf .title').html(generalInfoObj.sub_name);
        $('.general-inf .des').html(generalInfoObj.description);

        //在线签约订购事件码
        $('.online-order').attr('onlineCode',generalInfoObj.online_event_code);

        if(signOnline==""||signOnline==undefined) {
            $('.online-order').hide();
        } else {
            $('.online-order').show();
            $tolocation = signOnline;
        }
    }

    function tolocation(url) {
        window.open(url);
    }

    $('.online-order').on('click', function() {
        //在线签约订购事件码
        var onlineClickCode = $(this).attr("onlineCode");
        // alert(onlineClickCode);
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', onlineClickCode]});

        tolocation($tolocation);
    });

    $('.join-coop').on('click', function() {
        $('.pop-sc').show();
        setTimeout(function() {
            $('.pop-sc').hide();
        }, 3000);
    });

    $('.pop-icon').on('click', function() {
        $('.pop-sc').hide();
    });

    // 应用场景
    function createScene(id, sub_id) {
        var sceneObj = api_json.ability[id].sub_ability[sub_id].scene;
        default_variable.scene_mui_str = '',

        sceneNavLiSum = $(sceneObj).length,
        endDouble = Math.ceil(sceneNavLiSum / 5);

        $('.scene-mui-wrap').html(default_variable.scene_mui_str);

        if(endDouble <= 2 ) {
            $('.scene-show-more').hide();
        } else {
            $('.scene-show-more').show();
        }

        if(sceneNavLiSum <= 0) {
            $('.scene').addClass('hide');
        } else {
            $('.scene').removeClass('hide');
            for(var i = 0; i < endDouble; i++) {
                default_variable.scene_nav_str = '';
                default_variable.scene_banner_str = '';
                default_variable.scene_des_str = '';

                if((5*i+5)<sceneNavLiSum) {
                    maxSceneLength = 5*i+5;
                } else {
                    maxSceneLength = sceneNavLiSum;
                }

                if(i < 2) {
                    default_variable.scene_mui_str = '<div class="scene-mui">' + '<ul class="scene-nav clearfix" id="sceneNav' + i+'">' + '</ul>' + '<div class="scene-container">' + '<div class="scene-container-wrap clearfix">' + '<div class="scene-container-left fl" id="sceneImg'+ i+'">' + '</div>' + '<div class="scene-container-right fl">' + '<h4 class="scene-des-title">' + '场景描述' + '</h4>' + '<ul class="scene-des" id="sceneDes'+ i +'">' + '</ul>' + '</div>' + '</div>' + '</div>' + '</div>';
                } else {
                    default_variable.scene_mui_str = '<div class="scene-mui scene-more-mui">' + '<ul class="scene-nav clearfix" id="sceneNav' + i+'">' + '</ul>' + '<div class="scene-container">' + '<div class="scene-container-wrap clearfix">' + '<div class="scene-container-left fl" id="sceneImg'+ i+'">' + '</div>' + '<div class="scene-container-right fl">' + '<h4 class="scene-des-title">' + '场景描述' + '</h4>' + '<ul class="scene-des" id="sceneDes'+ i +'">' + '</ul>' + '</div>' + '</div>' + '</div>' + '</div>';
                }
                
                for(var j = 5*i; j < maxSceneLength; j++) {
                    default_variable.scene_nav_str += '<li class="scene-nav-list fl">' + '<div class="scene-nav-icon">' + '<img src="'+ $(sceneObj)[j].scene_icon +'" alt="">' + '</div>' + '<span class="scene-nav-title">' + $(sceneObj)[j].scene_name  + '</span>' + '<div class="scene-shade">' + '<div class="scene-shade-icon">' + '<img src="'+ $(sceneObj)[j].scene_shade_icon +'" alt="">' + '</div>' + '<div class="scene-shade-title">' + $(sceneObj)[j].scene_name + '</div>' + '</div>' + '</li>';
                    if($(sceneObj)[j].scene_banner == '') {
                        default_variable.scene_banner_str += '<img src="" alt="" class="hide">';
                    } else {
                        default_variable.scene_banner_str += '<img src="'+ $(sceneObj)[j].scene_banner +'" alt="">';
                    }
                    default_variable.scene_des_str += '<li class="scene-des-lists">' + $(sceneObj)[j].scene_description + '</li>';
                }
                
                $('.scene-mui-wrap').append(default_variable.scene_mui_str);
                $('.scene-mui').eq(i).find('.scene-nav').html(default_variable.scene_nav_str + '<div class="clear"></div>');
                $('.scene-mui').eq(i).find('.scene-container-left').html(default_variable.scene_banner_str);
                $('.scene-mui').eq(i).find('.scene-des').html(default_variable.scene_des_str);
                
            }

            switchSceneDes(0, 0);
            switchSceneMui(0);
        }
    }

    function switchSceneDes(mui, scenei) {
        $('.scene-mui').find('.scene-nav>li').removeClass('act');
        $('.scene-mui').eq(mui).find('.scene-nav>li').eq(scenei).addClass('act');
        $('.scene-mui').eq(mui).find('.scene-container-left>img').eq(scenei).addClass('act').siblings().removeClass('act');
        $('.scene-mui').eq(mui).find('.scene-des>li').eq(scenei).addClass('act').siblings().removeClass('act');

        var lossImgValue = $('.scene-nav-list.act').parents('.scene-mui').find('.scene-container-left img').hasClass('hide');
        if(lossImgValue) {
            $('.scene-nav-list.act').parents('.scene-mui').find('.scene-container-right').addClass('change-wi');
        } else {
            $('.scene-nav-list.act').parents('.scene-mui').find('.scene-container-right').removeClass('change-wi');
        }
    }

    function  switchSceneMui(mui) {
        $('.scene-container').stop().slideUp(400);
        $('.scene-container').eq(mui).stop().slideDown(400);
    }

    $('.scene-mui-wrap').on('mouseenter', '.scene-nav-list', function() {
        var thisMuiObj = $(this).parents('.scene-mui');
        var $thisMuiObjIndex = $(thisMuiObj).index();
        var $thisIndex = $(this).index();

        if(!$(this).hasClass('act')) {
            switchSceneDes($thisMuiObjIndex, $thisIndex);
        }
        
        if($('.scene-container').eq($thisMuiObjIndex).css('display') == 'none') {
            switchSceneMui($thisMuiObjIndex);
        } 
    });

    $('.scene-show-more').on('click', function() {
        if($('.scene-more-mui:eq(0)').css('display') == 'none') {
            $('.scene-more-mui').show();
            $(this).text('收起');
        } else {
            $('.scene-more-mui').hide();
            $(this).text('查看更多');
            switchSceneDes(0, 0);
            switchSceneMui(0);
        }
    });

    // 产品优势
    function createaAdvantage(id, sub_id) {
        var advantageObj = api_json.ability[id].sub_ability[sub_id].advantage;
        default_variable.advantage_str = '';
        advCardLiSum  = $(advantageObj).length;
        moveDistanceAdv = 0; 
        moveTimesAdv = 0;
        $("#advantageCard").css('margin-left', '0px');
        $('#advantagePrevious').removeClass('active');
        $('#advantageNext').removeClass('active');

        if(advCardLiSum <= 0) {
            $('.advantage').addClass('hide');
        } else {
            $('.advantage').removeClass('hide');
            $(advantageObj).each(function(iadvantage, vadvantage) {
                default_variable.advantage_str += '<li class="advantage-card-list fl">' + '<div class="advantage-list-wrap">' + '<div class="advantage-card-icon">' + '<img src="'+ vadvantage.advantage_icon +'" alt="">' + 
                                                        '</div>' + '<div class="advantage-card-title">' + vadvantage.advantage_name + '</div>' + '<p class="advantage-card-des">' + vadvantage.advantage_description + '</p>' + '</div>' + '</li>';
            })

            if(advCardLiSum > 4) {
                $('#advantageNext').addClass('active');
            }
        }

        $('#advantageCard').html(default_variable.advantage_str);
    }

    $('#advantagePrevious').click(function() {
        if(moveTimesAdv == 1) {
            $(this).removeClass('active');
        }

        if(moveTimesAdv <= 0) {
            return false;
        } else {
            moveDistanceAdv = moveDistanceAdv + ($('#advantageCard>li').eq(moveTimesAdv).width() + 45);
            $("#advantageCard").stop(true, false).animate({
                "margin-left": moveDistanceAdv
            }, 500);
            moveTimesAdv--;
            $('#advantageNext').addClass('active');
            return true;
        }
    })

    $('#advantageNext').click(function() {
        if(moveTimesAdv == advCardLiSum - 5) {
            $(this).removeClass('active');
        }

        if(moveTimesAdv >= advCardLiSum - 4) {
            return false;
        } else {
            moveDistanceAdv = moveDistanceAdv - ($('#advantageCard>li').eq(moveTimesAdv).width() + 45);
            $("#advantageCard").stop(true, false).animate({
                "margin-left": moveDistanceAdv
            }, 500);
            moveTimesAdv++;
            $('#advantagePrevious').addClass('active');
            return true;
        }
    })

    $('#advantageCard').on("mouseenter", 'li', function () {
        $(this).find('.advantage-list-wrap').stop().animate({
            "margin-top": -17
        }, 300);
    });

     $('#advantageCard').on("mouseleave", 'li', function () {
        $(this).find('.advantage-list-wrap').stop().animate({
            "margin-top": 0
        }, 300);
    });

    // 客户案例
    function createaCase(id, sub_id) {
        caseObj = api_json.ability[id].sub_ability[sub_id].cases;
        default_variable.case_str = '';
        caseCardLiNum = $(caseObj).length;
        moveDistanceCase = 0,
        moveTimesCase = 0;
        $("#caseCard").css('margin-left', '0px');
        $('#casePrevious').removeClass('active');
        $('#caseNext').removeClass('active');

        if(caseCardLiNum <= 0) {
            $('.case').addClass('hide');
        } else {
            $('.case').removeClass('hide');
            $(caseObj).each(function(icase, vcase) {
                if(vcase.time !== '') {
                    default_variable.case_str += '<li class="case-card-list" data_case="'+ icase +'">' + '<div class="case-list-icon">' + '<img src="'+ vcase.image_url +'" alt="">' + '</div>' + '<div class="case-video-duration">' + vcase.time + '</div>' + '</li>';
                } else {
                    default_variable.case_str += '<li class="case-card-list" data_case="'+ icase +'">' + '<div class="case-list-icon">' + '<img src="'+ vcase.image_url +'" alt="">' + '</div>' + '<div class="case-shade">' + '<div class="case-shade-layer">' + '</div>' + '<div class="case-shade-content">' + '<p class="case-shade-title">' + vcase.case_details_title + '</p>' + '<div class="case-shade-icon">' + '<img src="'+ vcase.cases_icon +'" alt="">' + '</div>' + '<p class="case-shade-des">' + vcase.desc + '</p>' + '</div>' + '</div>' + '</li>';
                }
            })

            if(caseCardLiNum == 1 || caseCardLiNum == 2) {
                default_variable.case_str += '<li class="case-card-list"></li>';
            } 
            
            if(caseCardLiNum > 3) {
                $('#caseNext').addClass('active');
            }
        }

        $('#caseCard').html(default_variable.case_str);
    }

    function createaCaseDetails(num) {
        default_variable.case_details_str = '';
        $('.case-details').removeClass('case-details1');

        if($(caseObj)[num].time !== '') {
            default_variable.case_details_str += '<div class="case-video-close" id="caseVideoClose">' + '<div class="case-video-layer">' + '</div>' + '<span>' + '×' + '</span>' + '</div>' + '<video class="case-tech" controls="controls" src="'+ $(caseObj)[num].video_url +'" autoplay></video>';
            $('.case-details').addClass('case-details1');
        } else {
            if($(caseObj)[num].case_details_img !== '') {
                default_variable.case_details_str += '<div class="case-details-title clearfix">' + '<h4 class="case-details-left fl">' + '案例详情' + '</h4>' + '<div class="case-details-close fr" id="caseDetailsClose">' + '×' + '</div>' + '</div>' + '<div class="case-details-content">' + 
                                                '<h3 class="details-title">' + $(caseObj)[num].case_details_title + '</h3>' + '<div class="details-text">' + '<p id="cooperative_content">' + $(caseObj)[num].case_details_des + '</p>' + '</div>' + '<div class="details-img">' + '<img src="'+ $(caseObj)[num].case_details_img +'" alt="">' + '</div>' + '</div>'
            } else {
                default_variable.case_details_str += '<div class="case-details-title clearfix">' + '<h4 class="case-details-left fl">' + '案例详情' + '</h4>' + '<div class="case-details-close fr" id="caseDetailsClose">' + '×' + '</div>' + '</div>' + '<div class="case-details-content">' + 
                                                '<h3 class="details-title">' + $(caseObj)[num].case_details_title + '</h3>' + '<div class="details-text">' + '<p id="cooperative_content">' + $(caseObj)[num].case_details_des + '</p>' + '</div>' + '</div>'
            }
        } 

        $('.case-details').html(default_variable.case_details_str);
    }

    $('#caseCard .case-card-list').hover(function() {
        $(this).find('.case-shade').stop().animate({
            top: 0
        }, 300);
        $(this).find('.case-shade-title').stop().slideUp(300);
    }, function() {
        $(this).find('.case-shade').stop().animate({
            top: '232px'
        }, 300);
        $(this).find('.case-shade-title').stop().slideDown(300);
    });

    $('#casePrevious').click(function() {
        if(moveTimesCase == 1) {
            $(this).removeClass('active');
        }

        if(moveTimesCase <= 0) {
           return false;
        } else {
            moveDistanceCase = moveDistanceCase + ($('#caseCard>li').eq(moveTimesCase).width());
            $("#caseCard").stop(true, false).animate({
                "margin-left": moveDistanceCase
            }, 500);
            moveTimesCase--;
            $('#caseNext').addClass('active');
            return true;
        }
    })

    $('#caseNext').click(function() {
        if(moveTimesCase == caseCardLiNum - 4) {
            $(this).removeClass('active');
        }

        if(moveTimesCase >= caseCardLiNum - 3) {
           return false;
        } else {
            moveDistanceCase = moveDistanceCase - ($('#caseCard>li').eq(moveTimesCase).width());
            $("#caseCard").stop(true, false).animate({
                "margin-left": moveDistanceCase
            }, 500);
            moveTimesCase++;
            $('#casePrevious').addClass('active');
            return true;
        }
    })

    $('#caseCard').on('click', 'li', function() {
        var thisIndex = $(this).index();
        if($(this).attr('data_case')) {
            $caseModal.show();
            createaCaseDetails(thisIndex);
        }
    })

    $('.case-details').on('click', '#caseDetailsClose', function() {
        $caseModal.hide();
    })

    $('.case-details').on('click', '#caseVideoClose', function() {
        $caseModal.hide();
    })

    // 合作指引
    function createaGuideline(id, sub_id) {
        $('.guideline-container').removeClass('guideline2-container');
        $('.guideline-container').removeClass('guideline3-container');
        $('.guideline').removeClass('guideline5');
        
        var guidelineObj = api_json.ability[id].sub_ability[sub_id].guideline;
        guidelineCardLiNum = $(guidelineObj).length;
        default_variable.guideline_str1 = '',
        default_variable.guideline_str2 = '';
        var beforeHtml1 = '',beforeHtml2 = '',afterHtml = '';

        if(guidelineCardLiNum < 2 || guidelineCardLiNum > 5) {
            $('.guideline').addClass('hide');
             $('.guideline-container').html(default_variable.guideline_str1);
        } else {
            $('.guideline').removeClass('hide');

            if(guidelineCardLiNum == 2) {
                $('.guideline-container').addClass('guideline2-container');

                $(guidelineObj).each(function(iguideline, vguideline) {
                    default_variable.guideline_str1 += '<li class="guideline2-card-list guideline_card_'+ iguideline +'">' + '<div class="guideline2-list-left">' + '<div class="guideline-num">' + '0' + vguideline.guideline_id + '</div>' + '<h3 class="guideline2-card-title">' + vguideline.guideline_name + '</h3>' + '<div class="guideline-card-con">' + vguideline.guideline_description + '</div>' + '</div>' + '<div class="guideline2-list-right">' + '<i class="guideline2-link-circle guideline2-link-circle1">' + '</i>' + '<div class="guideline2-link-long guideline2-link-long1">' + '</div>' + '<div class="guideline2-link-skew guideline2-link-skew1">' + '</div>' + '<i class="guideline2-link-circle guideline2-link-circle2">' + '</i>' + '<div class="guideline2-link-short">' + '</div>' + '<i class="guideline2-link-circle guideline2-link-circle3">' + '</i>' + '<div class="guideline2-link-long guideline2-link-long2">' + '</div>' + '<div class="guideline2-link-skew guideline2-link-skew2">' + '</div>' + '</div>' + '</li>';
                })

                beforeHtml1 = '<ul class="guideline2-card clearfix">';
                afterHtml = '</ul>';
                $('.guideline-container').html(beforeHtml1 + default_variable.guideline_str1 + afterHtml);
            }

            if(guidelineCardLiNum == 3) {
                $('.guideline-container').addClass('guideline3-container');

                $(guidelineObj).each(function(iguideline, vguideline) {
                    default_variable.guideline_str1 += '<li class="guideline3-card-list">' + '<div class="guideline3-list-left">' + '<div class="guideline-num">' + '0' + vguideline.guideline_id + '</div>' + '<h3 class="guideline3-card-title">' + vguideline.guideline_name + '</h3>' + '<div class="guideline-card-con">' + vguideline.guideline_description + '</div>' + '</div>' + '</li>';
                })

                beforeHtml1 = '<div class="guideline3-card-wrap clearfix">' + '<div class="guideline3-list-right fl">' + '<i class="guideline3-link-circle guideline3-link-circle1"></i>' + '<div class="guideline3-link-long guideline3-link-long1">' + '</div>' + '<div class="guideline3-link-skew guideline3-link-skew1">' + '</div>' + '<i class="guideline3-link-circle guideline3-link-circle2">' + '</i>' + '<div class="guideline3-link-short">' + '</div>' + '<i class="guideline3-link-circle guideline3-link-circle3">' + '</i>' + '<div class="guideline3-link-long guideline3-link-long2">' + '</div>' + '<div class="guideline3-link-skew guideline3-link-skew2">' + '</div>' + '</div>' + '<ul class="guideline3-card fr">';
                afterHtml = '</ul></div>';
                $('.guideline-container').html(beforeHtml1 + default_variable.guideline_str1 + afterHtml);
            }
            
            if(guidelineCardLiNum == 4) {
                $(guidelineObj).each(function(iguideline, vguideline) {
                    if(iguideline < 2) {
                        default_variable.guideline_str1 += '<li class="guideline-card-list guideline_card_'+ iguideline +' clearfix">' + '<div class="guideline-list-left fl">' + '<div class="guideline-num">' + '0' + vguideline.guideline_id + '</div>' + '<h3 class="guideline-card-title">' + vguideline.guideline_name + '</h3>' + '<div class="guideline-card-con">' + vguideline.guideline_description + '</div>' + '</div>' + '<div class="guideline-list-right fr">' + '<i class="guideline-link-circle1">' + '</i>' + '<div class="guideline-link-long">' + '</div>' + '<div class="guideline-link-skew">' + '</div>' + '<i class="guideline-link-circle2">' + '</i>' + '</div>' + '</li>';
                    } else {
                        default_variable.guideline_str2 += '' + '<li class="guideline-card-list guideline_card_'+ iguideline +' clearfix">' + '<div class="guideline-list-left fr">' + '<div class="guideline-num">' + '0' + vguideline.guideline_id + '</div>' + '<h3 class="guideline-card-title">' + vguideline.guideline_name + '</h3>' + '<div class="guideline-card-con">' + vguideline.guideline_description + '</div>' + '</div>' + '<div class="guideline-list-right fl">' + '<i class="guideline-link-circle1">' + '</i>' + '<div class="guideline-link-long">' + '</div>' + '<div class="guideline-link-skew">' + '</div>' + '<i class="guideline-link-circle2">' + '</i>' + '</div>' + '</li>';
                    }
                })

                beforeHtml1 = '<ul class="guideline-card fl" id="guidelineCardL">';
                afterHtml = '</ul>';
                beforeHtml2 = '<ul class="guideline-card fr" id="guidelineCardR">';
                $('.guideline-container').html(beforeHtml1 + default_variable.guideline_str1 + afterHtml + beforeHtml2 + default_variable.guideline_str2 + afterHtml);
            }

            if(guidelineCardLiNum == 5) {
                $('.guideline').addClass('guideline5');

                default_variable.guideline_str1 = '<div class="guideline-card"><img src="'+ api_json.ability[id].sub_ability[sub_id].guideline_img +'" alt=""></div>';            
                $('.guideline-container').html(default_variable.guideline_str1);
            }
        }
    }

    function unfoldTwo(obj, start) {
         setTimeout(function() {
            obj.find('.guideline2-link-short').animate({
                'width':'21px',
                'height':'2px'
            }, 200);
        }, start);

        setTimeout(function() {
            obj.find('.guideline2-link-circle3').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            }, 200);
        }, start + 250);

        setTimeout(function() {
             obj.find('.guideline2-link-skew').animate({
                'width':'38px',
                'height':'65px'
            },200);
        }, start + 250 * 2);

       setTimeout(function() {
             obj.find('.guideline2-link-long').animate({
                'width':'48px',
                'height':'2px'
            },200);
        }, start + 250 * 3);

        setTimeout(function() {
            obj.find('.guideline2-link-circle1').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },200);
        }, start + 250 * 4);

        setTimeout(function() {
            obj.find('.guideline2-link-circle2').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },200);
        }, start + 250 * 4);

        setTimeout(function() {
            obj.find('.guideline2-list-left').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },500);
        }, start + 250 * 5);
    }

    function unfoldThree(obj, start) {
        setTimeout(function() {
            obj.find('.guideline3-link-short').animate({
                'width':'21px',
                'height':'2px'
            }, 200);
        }, start);

        setTimeout(function() {
            obj.find('.guideline3-link-circle3').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            }, 200);
        }, start + 250);

        setTimeout(function() {
             obj.find('.guideline3-link-skew').animate({
                'width':'38px',
                'height':'59px'
            },200);
        }, start + 250 * 2);

       setTimeout(function() {
             obj.find('.guideline3-link-long').animate({
                'width':'28px',
                'height':'2px'
            },200);
        }, start + 250 * 3);

        setTimeout(function() {
            obj.find('.guideline3-link-circle1').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },200);
        }, start + 250 * 4);

       setTimeout(function() {
            obj.find('.guideline3-link-circle2').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },200);
        }, start + 250 * 4);

        setTimeout(function() {
            obj.find('.guideline3-card-list:eq(0)').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },500);
        }, start + 250 * 5);

        setTimeout(function() {
            obj.find('.guideline3-card-list:eq(1)').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },500);
        }, start + 250 * 5 + 550);

        setTimeout(function() {
            obj.find('.guideline3-card-list:eq(2)').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },500);
        }, start + 250 * 5 + 550 + 550);
    }

    function unfoldFour(obj, start) {
        setTimeout(function() {
            obj.find('.guideline-link-circle2').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            }, 100);
        }, start);

        setTimeout(function() {
             obj.find('.guideline-link-skew').animate({
                'width':'35px',
                'height':'65px'
            },100);
        }, start + 150);

       setTimeout(function() {
             obj.find('.guideline-link-long').animate({
                'width':'46px',
                'height':'2px'
            },100);
       }, start + 150 * 2);

        setTimeout(function() {
            obj.find('.guideline-link-circle1').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },100);
        }, start + 150 * 3);

        setTimeout(function() {
            obj.find('.guideline-list-left').animate({
                opacity: 1,
                filter: "alpha(opacity=100)"
            },300);
        }, start + 150 * 4);
    }

    function guidelineAnimate() {
        var topGuideline = $('.guideline').offset().top - $('.guideline').height() + 79; 
        var scrollHeight = $(window).scrollTop();

        if(scrollHeight > topGuideline) {
            if(!$('.guideline').hasClass('animated')) {
                $('.guideline').addClass('animated');

                if(guidelineCardLiNum && guidelineCardLiNum == 2) {
                    unfoldTwo($('.guideline_card_0'), 0);
                    unfoldTwo($('.guideline_card_1'), 1800);
                    return;
                }

                if(guidelineCardLiNum && guidelineCardLiNum == 3) {
                    unfoldThree($('.guideline3-card-wrap'), 0);
                    return;
                }

                if(guidelineCardLiNum && guidelineCardLiNum == 4) {
                    unfoldFour($('.guideline_card_0'), 0);
                    unfoldFour($('.guideline_card_1'), 950);
                    unfoldFour($('.guideline_card_2'), 1900);
                    unfoldFour($('.guideline_card_3'), 2850);
                    return;
                }
            }
        }
    }

    $(window).scroll(function(){
          guidelineAnimate();
    });

    // API接口
    function createaApiList(id, sub_id) {
        var apiListObj = api_json.ability[id].sub_ability[sub_id].api_list;
        default_variable.api_list_str = '';

        $(apiListObj).each(function(iapi, vapi) {
            if(iapi > 4) {
                default_variable.api_list_str += '<tr class="interface-list no-show">' + '<td class="interface-list-name">' + vapi.sub_api_name + '</td>' + '<td class="interface-list-des">' + vapi.sub_api_desc + '</td>' + '</tr>';
            } else {
                default_variable.api_list_str += '<tr class="interface-list">' + '<td class="interface-list-name">' + vapi.sub_api_name + '</td>' + '<td class="interface-list-des">' + vapi.sub_api_desc + '</td>' + '</tr>';
            }
        });
        $('#interLearnMore').attr('href', api_json.ability[id].sub_ability[sub_id].detail_url);

        //更多详情事件码
        $('#interLearnMore').attr('clickCode', api_json.ability[id].sub_ability[sub_id].so_more_event_code);
        $('#interfaceTBody').html(default_variable.api_list_str);

        if($(apiListObj).length > 5) {
            $('.interface-footer').addClass('active');
        } else {
            $('.interface-footer').removeClass('active');
        }
    }
    
     $('.interface_drop').on('click', function() {
        $('.interface-footer').removeClass('active');
        $('#interfaceTBody tr').removeClass('no-show');
    });

    //更多详情的事件码
    $('#interLearnMore').click(function () {
        var moreClickCode = $(this).attr("clickCode");
        // alert(moreClickCode)
        Webtrends.multiTrack({argsa: ['DCS.dcsuri', '/nopv.gif', 'WT.event', moreClickCode]});
    });

    // 更多能力推荐
    function createaApiRecommen(id, sub_id) {
        clickCount = 0;
        var apiRecommenObj = api_json.ability[id].sub_ability[sub_id].ability_recommen;
        default_variable.api_recommen_mui_str = '';
        default_variable.api_recommen_str = '';

        $('.recommen-container-wrap').html(default_variable.api_recommen_mui_str);

        apiNavLiSum = $(apiRecommenObj).length,
        apiEndDouble = Math.ceil(apiNavLiSum / 4);

        for(var i = 0; i < apiEndDouble; i++) {
            default_variable.api_recommen_mui_str = '<ul class="recommen-card clearfix">' + '</ul>';
            default_variable.api_recommen_str = '';

            if((4*i+4)<apiNavLiSum) {
                maxApiRecommenLength = 4*i+4;
            } else {
                maxApiRecommenLength = apiNavLiSum;
            }

            for(var j = 4*i; j < maxApiRecommenLength; j++) {
                if(j != (maxApiRecommenLength - 1)) {
                    default_variable.api_recommen_str += '<li class="recommen-card-list fl">' + '<div class="recommen-card-icon">' + '<img src="'+ $(apiRecommenObj)[j].recommen_icon +'" alt="">' + '</div>' + '<div class="recommen-card-title">' + $(apiRecommenObj)[j].recommen_name + '</div>' + 
                                                 '<p class="recommen-card-des">' + $(apiRecommenObj)[j].recommen_description + '</p>' + '<div class="recommen-shade">' + '<div class="recommen-shade-layer">' + '</div>' + '<a href="'+ $(apiRecommenObj)[j].api_id +'" class="recommen-see-detail">' + '查看详情' + '</a>' + '</div> ' + '</li>';
                } else {
                    default_variable.api_recommen_str += '<li class="recommen-card-list fl clear-mar">' + '<div class="recommen-card-icon">' + '<img src="'+ $(apiRecommenObj)[j].recommen_icon +'" alt="">' + '</div>' + '<h2 class="recommen-card-title">' + $(apiRecommenObj)[j].recommen_name + '</h2>' + '<p class="recommen-card-des">' + $(apiRecommenObj)[j].recommen_description + '</p>' + '<div class="recommen-shade">' + '<div class="recommen-shade-layer">' + '</div>' + '<a href="'+ $(apiRecommenObj)[j].api_id +'" class="recommen-see-detail">' + '查看详情' + '</a>' + '</div> ' + '</li>';
                }
            }

            $('.recommen-container-wrap').append(default_variable.api_recommen_mui_str);
            $('.recommen-card').eq(i).html(default_variable.api_recommen_str);
        }

        $('.recommen-card').eq(0).addClass('now-recommen');

        // $(apiRecommenObj).each(function(irecommen, vrecommen) {
        //     if(irecommen < $(apiRecommenObj).length - 1) {
        //         default_variable.api_recommen_str += '<li class="recommen-card-list fl">' + '<div class="recommen-card-icon">' + '<img src="'+ vrecommen.recommen_icon +'" alt="">' + '</div>' + '<h2 class="recommen-card-title">' + vrecommen.recommen_name + '</h2>' + 
        //                                         '<p class="recommen-card-des">' + vrecommen.recommen_description + '</p>' + '<div class="recommen-shade">' + '<div class="recommen-shade-layer">' + '</div>' + '<a href="'+ vrecommen.api_id +'" class="recommen-see-detail">' + '查看详情' + '</a>' + '</div> ' + '</li>';
        //     } else {
        //         default_variable.api_recommen_str += '<li class="recommen-card-list fl clear-mar">' + '<div class="recommen-card-icon">' + '<img src="'+ vrecommen.recommen_icon +'" alt="">' + '</div>' + '<h2 class="recommen-card-title">' + vrecommen.recommen_name + '</h2>' + 
        //                                         '<p class="recommen-card-des">' + vrecommen.recommen_description + '</p>' + '<div class="recommen-shade">' + '<div class="recommen-shade-layer">' + '</div>' + '<a href="'+ vrecommen.api_id +'" class="recommen-see-detail">' + '查看详情' + '</a>' + '</div> ' + '</li>';
        //     }
        // })

        // $('#recommenCard').html(default_variable.api_recommen_str);

    }
    
    $('.another-batch').on('click', function() {
        if(clickCount < (apiEndDouble - 1)) {
            clickCount++;
        } else {
            clickCount = 0;
        }
        $('.recommen-card').eq(clickCount).addClass('now-recommen').siblings().removeClass('now-recommen');
    })


    //solution 跳转到api
    var $solution_api_id = decodeURI(window.location.href.split('index=')[1]);
    var $solution_api_text = decodeURI(window.location.href.split('&text=')[1]);
    if($solution_api_id == "" || $solution_api_text == undefined){
        return;
    }else{
        var $api_first_len = $('.api-list>li').length;
        var $api_second_text;
        // var $api_second_index;
        for(var p=0;p<$api_first_len;p++){
            var $api_second_len = $('.api-list>li').eq(p).find('li').length;
            for(var q=0;q<$api_second_len;q++){
                $api_second_text = $('.api-list>li').eq(p).find('li').eq(q).text();
                // $api_second_index = $('.api-list>li').eq(p).find('li').eq(q).index();
                if($api_second_text == $solution_api_text){
                    var $api_second_id = api_json.ability[p].sub_ability[q].sub_id;
                    var $api_first_id = api_json.ability[p].id;
                    var $api_first_id_new = $api_first_id-1;
                    var $api_second_id_new = $api_second_id-1;
                    createPage($api_first_id_new,$api_second_id_new)
                }
            }
        }
    }


});