$(function() {
    var $mobileInput = $('#mobileInput');
    var $loginBtn = $('#loginBtn');
    var $protocolCheckbox = $('.protocol-checkbox');
    var $sureModal = $('.sure-modal');
    var $checkModal = $('.check-modal');
    var $unableObtainModal = $('.unable-obtain-modal');
    var $sureBtn = $('#sureBtn');

    var wifi = true;
    var ua = window.navigator.userAgent;
    var con = window.navigator.connection;

    var getAuthUrl = '';

    getAuthentication();
    // 点击头部"×"
    $('.header-close').click(function() {
        window.location.href = '../index.html';
    });

    // 点击“选框”
    $protocolCheckbox.click(function() {
        var $this = $(this);
        if($protocolCheckbox.hasClass('checked')) {
            $this.removeClass('checked');
        } else {
            $this.addClass('checked');
        }
    });

    // 点击确认弹框中的“确定”按钮
    $sureBtn.click(function() {
        $sureModal.removeClass('active');
    });

    // 点击“登录”按钮
    $loginBtn.click(function() {
        if($('.protocol-checkbox').hasClass('checked')) {
             window.location.href = 'one_key_success.html';
        } else {
            $checkModal.addClass('active');
            autoClose();
        }
    });

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

    // 判断网络环境
    function get_status() {
         // 如果是微信
        if(/MicroMessenger/.test(ua)){
            // 如果是微信6.0以上版本，用UA来判断
            if(/NetType/.test(ua)){
                if(ua.match(/NetType\/(\S*)$/)[1] != 'WIFI'){
                    wifi = false;
                }
            // 如果是微信6.0以下版本，调用微信私有接口WeixinJSBridge
            }else{
                document.addEventListener("WeixinJSBridgeReady",function onBridgeReady(){
                    WeixinJSBridge.invoke('getNetworkType',{},function(e){
                        if(e.err_msg != "network_type:wifi"){
                            wifi = false;
                        }
                    });
                });
            }
        // 如果支持navigator.connection
        }else if(con){
            var network = con.type;
            if(network != "wifi" && network != "2" && network != "unknown"){  // unknown是为了兼容Chrome Canary
                wifi = false;
            }
        }
        window.networkWIFI = wifi;
    }

    // 统一认证
    function getAuthentication(setDefaultPhone) {
        get_status();
        if(window.networkWIFI == false ) {
            $('.loader').hide();
            $unableObtainModal.addClass('active');
            $('.content').css('visibility', 'hidden');
        } else {
            sendRequest(getAuthUrl, 'get', null, function (res) {
                $('.loader').hide();
                if (res.bizCode === '1') {
                    $sureModal.addClass('active');
                    $mobileInput.val(res.phone);
                } else if(res.bizCode === '2') {
                    // $unableObtainModal.addClass('active');
                    // $('.content').css('visibility', 'hidden');
                }
            }, function () {
                return null;
            });
        }
    }
    
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