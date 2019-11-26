

'use strict';

$(function() {
    var $emptyCart = $('.empty-cart');
    var $noEmptyCart = $('.no-empty-cart');
    var $batchAdditionModal = $('.batch-addition-modal');
    var $delModal = $('.del-modal');
    var $cartSummitBtn = $('.cart-summit-btn');

    var selApiSum = 0;  //批量添加api选中数
    var cartApiSum = $('.list-input').length; // 添加到购物车的api总数

    var subNumA = 0;
    var mainApiStr = '';
    var subApiStr = '';
    var apiResultStr ='';
    var cartApiStr = '';

    var delApiIndex = 0;
    var delOrSubmit = 'one';

    var downSelApiNum = 0; //已下架能力选中数
    var delDownApiIndex = 0;

    createApiCateList();
    coodata();

    // 获取api数据

    // 创建一级api分类
    function createApiCateList() {
        var apiAbility = api_json.ability;
        $(apiAbility).each(function(index, val) {
            if(index === 0) {
                mainApiStr += '<li class="nav-tab-li act">' + val.name + '</li>';
            } else {
                mainApiStr += '<li class="nav-tab-li">' + val.name + '</li>';
            }
            $('#mainApi').html(mainApiStr);

            // 创建二级api分类
            subApiStr = '';
             $(val.sub_ability).each(function(i, v) {
                subApiStr += '<li class="api-list-li" data-m="'+val.id+'" data-s="'+v.sub_id+'"><span class="api-list-licon" id="api-' + val.id + '-' + v.sub_id +'">' + v.sub_name + '</span></li>';
            }) 
            $('#subApi').append('<ul class="api-list">' + subApiStr + '</ul>');
            $('#subApi').find('.api-list').eq(0).addClass('act');

            subNumA = $('#subApi .apiBlueBox').length;

            createSelectedApi();
        })
    }

     // 创建已选api列表
    function createSelectedApi() {
        apiResultStr = '';
        $("#subApi .api-list-li").find(".apiBlueBox").each(function(ii,vv){
            apiResultStr += '<li class="api-add-li fl"><p>'+$(this).text()+ '<input type="button" value="×" class="api-add-del"></p></li>';
        });
        $("#apiAdd").html(apiResultStr);
        coodata();
    }
    
    // 点击一级api分类
    $('#mainApi .nav-tab-li').click(function() {
        var thisMainIndex = $(this).index();

        if($(this).hasClass('act')) {
            return;
        } else {
            $(this).addClass('act').siblings().removeClass('act');
            $('#subApi').find('.api-list').eq(thisMainIndex).addClass('act').siblings().removeClass('act');
        }
    });

    // 点击二级api列表
    $('#subApi').on('click', '.api-list-licon', function() {
        var curEle = $(this);
        var ids = curEle.attr('id').split('-');
        if(curEle.hasClass('apiBlueBox')) {
            curEle.removeClass('apiBlueBox');
            subNumA--;
        } else {
            curEle.addClass('apiBlueBox');
            subNumA++;
        }

        createSelectedApi();
    });

    // 点击批量添加弹窗上的"x"关闭按钮
    $('.batch-close').click(function() {
        hideBatchAddition();
    })

      // 批量添加api弹框中删除对应api事件
    $('#apiAdd').on('click', '.api-add-del', function() {
        var thisIndex = $(this).parents('.api-add-li').index();
        $(this).parents('.api-add-li').remove();
        $('#subApi .apiBlueBox').eq(thisIndex).removeClass('apiBlueBox');
        subNumA--;
        coodata();
    });

    // 点击批量添加中的"提交"按钮
    $('#batchBottomSubmit').click(function() {
        if(subNumA <= 0) {
            if($('.no-empty-cart .cart-list').length <= 0) {
                $emptyCart.show();
            } else {
                $noEmptyCart.show();
            }
        } else {
            $noEmptyCart.show();
            $emptyCart.hide();
        }
        hideBatchAddition();

        cartApiSum += subNumA;
        for(var i = 0; i < subNumA; i++) {
            cartApiStr += '<tr class="cart-list cart-tr off-the-shelves"><td class="cart-list-sel"><span class="list-input sel-input"></span></td>' + 
            '<td class="cart-list-name"><a href="#">来/去电身份显示</a><i class="off-the-shelves-tip"></i></td><td class="cart-list-des">拨打企业电话时，自动展示企业预先设定的名片内容，以达到企业宣传、商情传递等目的，同时提升电话接通率。</td><td class="cart-list-opera clearfix"><a class="fl" href="check_order.html">提交</a>' + 
            '<span class="cart-del fr">删除</span><div class="clear"></div></td></tr>';
        }
        $('#apiApp').append(cartApiStr);

        changeColor();   
    })

    // 点击批量添加中“取消”按钮
    $('#batchBottomCancel').click(function() {
        hideBatchAddition();
    })

    //购物车角标数字
    function coodata() {
        if(subNumA<=0){
            $(".coo-add").hide();
        }else{
            $(".coo-add").show();
            $(".coo-num").html(subNumA);
        }
    }
    
    // 点击全选框
    $('.all-sel').click(function() {
        if($(this).hasClass('blueBox')) {
            $('.sel-input').removeClass('blueBox');
            selApiSum = 0;
        } else {
            selApiSum = cartApiSum;
            $('.sel-input').addClass('blueBox');
        }
        selSubmitApiSum();
    });

    function selSubmitApiSum() {
        $('.cart-num').text(selApiSum);
    }

    // 点击“批量添加”
    $('.batch-addition').click(function() {
        showBatchAddition();
    })
    
    // 点击api列表选框
    $('#apiApp').on('click', '.list-input', function() {
        if($(this).hasClass('blueBox')) {
            if($('.all-sel').hasClass('blueBox')) {
                $('.all-sel').removeClass('blueBox');
            } 
            $(this).removeClass('blueBox');
            selApiSum--;
        } else {
            $(this).addClass('blueBox');
            selApiSum++;
        }

        if($('.list-input.blueBox').length === cartApiSum) {
            $('.all-sel').addClass('blueBox');
        }

        selSubmitApiSum();
    });

    // 点击'删除'按钮
    $('#apiApp').on('click', '.cart-del', function() {
        delApiIndex = $(this).parents('.cart-list').index() - 1;
        showDelModal('确定删除？');
        delOrSubmit = 'one';
        // $(this).parents('.cart-list').remove();
        // cartApiSum--;
        // selApiSum--;
        // selSubmitApiSum();

        // changeColor();
    });

    // 点击'删除选中的api'
    $('#delSelApi').click(function() {
        if($('#apiApp').find('.list-input').hasClass('blueBox')) {
            delOrSubmit = 'mui';
            showDelModal('确定删除这些api？');
        } else {
            delOrSubmit = 'muiNull';
            showDelModal('请选择api！');
        }
        // $('.cart-list').find('.blueBox').parents('.cart-list').remove();
        // selApiSum = 0;
        // selSubmitApiSum();

        // changeColor();
    })

    // 点击“提交”按钮
    $cartSummitBtn.click(function() {
        delOrSubmit = 'submit';
        if($('#apiApp').find('.list-input').hasClass('blueBox')) {
            $(this).attr('href', 'check_order.html');
        } else {
            showDelModal('请选择api！');
        }
    })

    // 点击提示弹框的“取消”按钮
    $('.del-modal-cancel').click(function() {
        hideDelModal();
    })

    // 点击提示弹框的“确定”按钮
    $('.del-modal-sure').click(function() {
        if(delOrSubmit == 'one') {
            $('#apiApp').find('.cart-list').eq(delApiIndex).remove();
            cartApiSum--;
            selApiSum--;
            selSubmitApiSum();
            changeColor();
        } else if(delOrSubmit == 'mui') {
            $('#apiApp').find('.blueBox').parents('.cart-list').remove();
            selApiSum = 0;
            selSubmitApiSum();
            changeColor();
        } else if(delOrSubmit == 'muiNull') {
            hideDelModal();
        } else if(delOrSubmit == 'submit') {
            hideDelModal();
        }
        hideDelModal();
    })

    // 点击提示弹框的“×”
    $('.close-icon').click(function() {
        hideDelModal();
    })

    // api列表颜色控制
    function changeColor() {
        $("#apiApp .cart-list:nth-child(even)").css("background-color","#fff"); 
        $("#apiApp .cart-list:nth-child(odd)").css("background-color","#f7f7f7"); 
    }
    
     // 批量添加API弹框消失
    function hideBatchAddition() {
        $batchAdditionModal.hide();
    }
    // 批量添加API弹框出现
    function showBatchAddition() {
        $batchAdditionModal.show();
    }

    // 提示弹框出现
    function showDelModal(info) {
        $delModal.show();
        $('.del-modal-middle').text(info);
    }

    // 提示弹框消失
    function hideDelModal() {
        $delModal.hide();
    }

    // 已下架能力
    // 点击api列表选框
    $('#downApiApp').on('click', '.down-list-input', function() {
        var downApiSum = $('#downApiApp').find('.down-list-input').length;

        if($(this).hasClass('blueBox')) {
            if($('.down-all-sel').hasClass('blueBox')) {
                $('.down-all-sel').removeClass('blueBox');
            } 
            $(this).removeClass('blueBox');
            downSelApiNum--;
        } else {
            $(this).addClass('blueBox');
            downSelApiNum++;
        }

        if($('.down-list-input.blueBox').length === downApiSum) {
            $('.down-all-sel').addClass('blueBox');
        }

        selClearApiSum();
    });

    // 点击全选框
    $('.down-all-sel').click(function() {
        var downApiSum = $('#downApiApp').find('.down-list-input').length;

        if($(this).hasClass('blueBox')) {
            $('.down-sel-input').removeClass('blueBox');
            downSelApiNum = 0;
        } else {
            downSelApiNum = downApiSum;
            $('.down-sel-input').addClass('blueBox');
        }
        selClearApiSum();
    });

     // 点击'删除'按钮
    $('#downApiApp').on('click', '.down-list-del', function() {
        // delDownApiIndex = $(this).parents('.down-list').index() - 1;
        $(this).parents('.down-list').remove();
    });

    // 点击'删除选中的api'
    $('#downDelSel').click(function() {
        $('#downApiApp').find('.down-list-input.blueBox').parents('.down-list').remove();
    })

    function selClearApiSum() {
        $('.down-sel-num').text(downSelApiNum);
    }

    // 下架api列表颜色控制
    function downChangeColor() {
        $("#downApiApp .down-list:nth-child(even)").css("background-color","#fff"); 
        $("#downApiApp .down-list:nth-child(odd)").css("background-color","#f7f7f7"); 
    }
})