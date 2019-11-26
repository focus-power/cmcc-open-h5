$(function() {
    var $orderTime = $('.order-time');
    var $orderNumber = $('.order-number a');
    var $lookDet = $('.look-det');
    var $orderedAbility = $('.ordered-ability');

    changeColor();

    // 颜色控制
    function changeColor() {
        $orderedAbility.find(".card-sort .ordered-list:nth-child(odd)").css("background-color","#fff"); 
        $orderedAbility.find(".card-sort .ordered-list:nth-child(even)").css("background-color","#f7f7f7"); 
    }
})