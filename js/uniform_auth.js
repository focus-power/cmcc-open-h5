$(document).ready(function() {
    var $authSection = $('.auth-section');
    var $uniform_id = getUrlParam("id") - 1;
    var $uniformMainTitle = $('.uniform-main-title');

    var subTitle = ['统一认证本机号码一键登录', '统一认证本机号码校验'];
    $authSection.eq($uniform_id).show();
    $uniformMainTitle.text(subTitle[$uniform_id]);
})

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}