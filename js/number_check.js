$(function() {
    var $mobileInput = $('#mobileInput');
    var $mobileHelpBlock = $('#mobileHelpBlock');
    var $verifyBtn = $('#verifyBtn');
    var $protocolCheckbox = $('.protocol-checkbox');
    var $sureModal = $('.sure-modal');
    var $checkModal = $('.check-modal');
    var $sureBtn = $('#sureBtn');

    var verifyMobileUrl = '';

    // 点击头部"×"
    $('.header-close').click(function() {
        window.location.href = '../index.html';
    });

    // 点击确认弹框中的“确定”按钮
    $sureBtn.click(function() {
        $sureModal.removeClass('active');
    });

    // 点击“本机号码校验”按钮
    $verifyBtn.click(function() {
        $('.loader').show();
        if(checkMobile($mobileInput.val())) {
            sendRequest(verifyMobileUrl, 'GET', $mobileInput.val(), function(res) {
                $('.loader').hide();
                if(res.bizCode == '1') {
                     window.location.href = 'number_check_success.html';
                } else if(res.bizCode == '2') {
                    $checkModal.addClass('active');
                    autoClose();
                }
            }, function() {
                return null;
            });
        } 
    });

    // 显示错误信息
    var displayError = function(obj, msg) {
        obj.css('visibility', 'visible');
        obj.text(msg);
    }

    // 隐藏错误信息
    var hiddenError = function(obj) {
        obj.css('visibility', 'hidden');
    }

    // 判断手机号码是否为空
    var checkMobile = function(phone) {
        if(!( /^1\d{10}$/ ).test ( phone )) {
            if(phone === '' || phone === undefined) {
                displayError($mobileHelpBlock, '手机号码不能为空');
                return false;
            } else {
                displayError($mobileHelpBlock, '请输入正确格式的手机号码');
                return false;
            }
        } else {
            hiddenError($mobileHelpBlock);
            return true;
        }
    };

    // 自动消失
    var autoClose = function() {
        var timeCheck = setTimeout(function(){
            $checkModal.removeClass('active');
        },3000)
    }

    // 点击错误页的“x”
    $('.unable-obtain-close').click(function() {
        window.location.href = '../index.html';
    });
   
    // 数据请求函数
    function sendRequest(url, method, data, callback, failCallBack ) {
        var dataParams = {
            url: url,
            type: method,
            data: data,
            dataType: 'json'
        };
        if(method.toUpperCase() === 'POST') {
            dataParams.contentType = 'application/json';
            DataTransfer.data = JSON.stringify(data);
        }
        $.ajax(dataParams).done(callback).fail(failCallBack);
    }
})