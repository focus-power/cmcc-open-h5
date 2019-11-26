$(function () {
    //ie input提示信息兼容问题
    if($('.ie').length){
        $('.revise-password-list li').find('em').addClass('em-revise-show');
        $('.revise-password-list li').on('click',function () {
            $(this).find('em').removeClass('em-revise-show');
        });
    }

    //密码正则
    var passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,}$/;
    var regNull=/\s+/g;
    function passwordVerification(passwordInputValue) {

        // if (!(passwordReg.test(passwordInputValue) )) {
        //     if (passwordInputValue === '' || passwordInputValue === undefined) {
        //         $('.new-password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     } else {
        //         $('.new-password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
        //         return false;
        //     }
        // } else {
        //     return true;
        // }

        if(!(passwordReg.test(passwordInputValue)) || regNull.test(passwordInputValue)){
            $('.new-password-error').html('请输入8-15位密码，必须包含字母、数字和特殊字符中的两种');
            return false;
        }else if(passwordReg.test(passwordInputValue) && regNull.test(passwordInputValue)){
            $('.new-password-error').html('密码不能包含空格');
            return false;
        }else{
            return true;
        }
    };

    //修改密码页面
    $('.revise-pw-btn').on('click',function () {
        var change_old_boolean = false;
        var change_new_boolean = false;
        var change_sure_boolean = false;
        //旧密码不能为空
        var changeOldCode = $('.change-old-code input').val();
        if(changeOldCode !== '' && changeOldCode !== undefined && changeOldCode !== null){
            $('.password-error').removeClass('revise-error-show');
            change_old_boolean = true;
        }else{
            $('.password-error').addClass('revise-error-show');
            change_old_boolean = false;
        }
        //新密码要符合规则
        var changeNewCode = $('.change-new-code input').val();
        if(passwordVerification(changeNewCode)){
            $('.new-password-error').removeClass('revise-error-show');
            change_new_boolean = true;
        }else{
            $('.new-password-error').addClass('revise-error-show');
            change_new_boolean = false;
        }
        //确认密码
        var changeSure = $('.change-sure input').val();
        if( changeSure === changeNewCode ){
            $('.sure-password-error').removeClass('revise-error-show');
            change_sure_boolean = true;
        }else{
            $('.sure-password-error').addClass('revise-error-show');
            change_sure_boolean = false;
        }

        //是否显示登录成功
        if(change_old_boolean && change_new_boolean && change_sure_boolean === true){
            //修改成功页面显示
            $('.change-content').removeClass('revise-pd-succe');
            $('.change-sure').addClass('revise-pd-succe');
        }else{
            $('.change-content').addClass('revise-pd-succe');
            $('.change-sure').removeClass('revise-pd-succe');
        }
    })
});
