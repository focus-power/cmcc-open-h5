
'use strict';

$(function() {
    var $delModal = $('.del-modal');
    // 点击消息的"×"按钮
    var thisIndex = 0;
    $('#infoCon').on('click', '.del-message', function() {
        thisIndex = $(this).parents('.message-list').index();
        $delModal.show();
    });

    // 点击“查看详情”
    $('#infoCon').on('click', '.see-det', function() {
        $(this).parent().siblings('.message-list-top').find('.unread').css('visibility', 'hidden');
        window.location.href = 'message_details.html';
    })

    // 点击“×”
    $('.close-icon').click(function() {
        $delModal.hide();
    })

    // 点击“取消”按钮
    $('.del-modal-cancel').click(function() {
        $delModal.hide();
    })

    // 点击“确定”按钮
    $('.del-modal-sure').click(function() {
        $delModal.hide();
        $('#infoCon').find('.message-list').eq(thisIndex).remove();
    })
})