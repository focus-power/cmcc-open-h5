$(function() {

  var $mobile = $('#mobile');
  var $emailAdd = $('#emailAdd');
  var $name = $('#registerUser');
  var $firmName = $('#firmName');
  var $dept = $('#dept');
  var $emailHelp = $('#emailHelp');
  var $nameHelp = $('#nameHelp');
  var $modifyTip = $('.modify-tip');
  var $editStatus = $('.edit-status');
  var $completeStatus = $('.complete-status');

  var userInfo = {
      email: '',
      name: '',
      firmName: '',
      dept: ''
  }

  var isCancel = false;
  var orderInfo = {
      time: '',
      orderId : 0000000
  }

  var phone = '13454134456';
  var newPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');;
  $mobile.val(newPhone);

  var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

  // 禁止输入框输入
  function disableInput(obj) {
    obj.prop('disabled', true);
    obj.parent('.content-left-input').addClass('jin');
  }

  // 解除输入框的禁止状态
  function enableInput(obj) {
    obj.prop('disabled', false);
    obj.parent('.content-left-input').removeClass('jin');
  }

  // 展示错误快
    var displayError = function(obj, msg) {
        obj.css('display', 'block');
        obj.text(msg);
    };

    // 隐藏错误信息
    var hiddenError = function(obj) {
        obj.css('display', 'none');
    }

  // 判断邮箱是否为空
  var checkMailbox = function(mail) {
    if(mail === '' || mail === undefined) {
        displayError($emailHelp, '* 输入项不能为空');
        return false;
    } else if(!re.test (mail)) {
        displayError($emailHelp, '* 请输入正确格式的邮箱地址');
        return false;
    } else {
        hiddenError($emailHelp);
        return true;
    }
  };

  // 判断姓名是否为空
  var checkName = function(name) {
      if(name === '' || name === undefined) {
          displayError($nameHelp, '* 输入项不能为空');
          return false;
      } else {
          hiddenError($nameHelp);
          return true;
      }
  };

    //   判断输入框是否有已填项（除手机号码输入框）
    var isExistFull = function() {
        if($('#userInfoTable .input-box').parent('.content-left-input').hasClass('jin')) {
            $editStatus.hide();
            $completeStatus.show();
            $modifyTip.show();
        } else {
            $completeStatus.hide();
            $editStatus.show();
            $modifyTip.hide();
        }
    }

    // 保存用户信息状态
    var saveUserInfoStatus = function() {
        userInfo.email = $emailAdd.val();
        userInfo.name = $name.val();
        userInfo.firmName = $firmName.val();
        userInfo.dept = $dept.val();
    }

    // 还原用户信息状态
    var resetUserInfoStatus = function() {
        if(isCancel === true) {
            $emailAdd.val(userInfo.email);
            $name.val(userInfo.name);
            $firmName.val(userInfo.firmName);
            $dept.val(userInfo.dept);
            disableInput($('#userInfoTable .input-box'));
        }
    }

  isExistFull();

  //   获取订单编号
  var getOrderNumber = function() {
    myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();

    orderInfo.time = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
    orderInfo.orderId++;
  }

  // 点击“修改”按钮
  $('.alter-btn').click(function() {
    enableInput($('#userInfoTable .input-box'));
    $modifyTip.show();
    $editStatus.show();
    $completeStatus.hide();
    $modifyTip.hide();
  })

  // 点击“取消”按钮
  $('.cancel-btn').click(function() {
    resetUserInfoStatus();
  })

  // 点击“保存”按钮
  $('.save-btn').click(function() {
      if(checkMailbox($emailAdd.val()) && checkName($name.val())) {
        disableInput($('#userInfoTable .input-box'));
        saveUserInfoStatus();
        isCancel = true;
      }
      isExistFull();
  })

  // 点击“提交”按钮
  $('#obsBtn').click(function() {
      if(checkMailbox($emailAdd.val()) && checkName($name.val())) {
         getOrderNumber();

        $('.line').addClass('line-blue');
        $('.progress-substep').addClass('progress-substep-pass');
        $('.progress-destail').hide();
        $('.progress-complete').show();
      } else {
          $('.submit-wrap').attr('href', '#progressDestail');
      }
  })

//   点击“查看已订购的能力”按钮
    $('.look-over').click(function() {
        window.location.href = './ordered_api.html';
    })
})