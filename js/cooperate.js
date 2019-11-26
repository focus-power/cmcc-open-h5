$(document).ready(function(){
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
})

// 加载API列表
var tt = api_json.ability.length;
var apiShopNum = api_shop.ability;
var fitst_title = '';
var str = '';
for(var i =0;i < tt;i++){
	var $name = api_json.ability[i].name;
	var $id = api_json.ability[i].id;
	if (i==0) {
		fitst_title = "<li class='active'><a href='#api-"+i+"'data-toggle='tab' id='"+$id+"'>"+$name+"</a></li>" ;
	}else{
		fitst_title = "<li><a href='#api-"+i+"'data-toggle='tab' id='"+$id+"'>"+$name+"</a></li>" ;
	}
	var $mian = api_json.ability[i].sub_ability.length;
	var second_name = '';
	for(var j =0; j< $mian; j++){
		var $sub_name = api_json.ability[i].sub_ability[j].sub_name;
		var $sub_id = api_json.ability[i].sub_ability[j].sub_id;
		second_name += "<li><label class='checkbox-inline'>"
						+"<input type='checkbox' value='"+$sub_name+"' id='"+$sub_id+"'><span class='whiteBox'>"+$sub_name+"</span>"
						+"</label></li>";
	}

	if (i==0) {
		str += "<div id='api-"+i+"' class='tab-pane fade in active'><ul>"
			+second_name
			+"</ul></div>"
	}else{
		str += "<div id='api-"+i+"' class='tab-pane fade'><ul>"
			+second_name
			+"</ul></div>"
	}

	$(".nav-tabs").append(fitst_title);
	$(".api-list").html(str);
}

shopApi();
// 加载购物车内的API选项
function shopApi(){
	var apiListName = $(".api-list input"); //所有复选input
	// var apiShopNum = api_shop.ability.length;
	for (var i = 0; i <apiShopNum.length ; i++) {
		var $ability = apiShopNum[i].sub_ability.length;

		for (var n = 0; n < $ability; n++) {
			var $shop_name = apiShopNum[i].sub_ability[n].sub_name;

			for (var m = 0; m <apiListName.length; m++) {
				var nameVal = $(apiListName[m]).val();
				if ($shop_name == nameVal) {
					// $(apiListName[m]).attr("checked",true);
					$(apiListName[m]).siblings('span').addClass('blueBox');
				}
			}
		};		
	}

}

showAPI('start');
//显示被勾选的API
function showAPI (initParams, checkText) {
	if (initParams === 'start') {
		checkedApi();
	} else if (initParams === 'click') {
		$(".api-list").find(".whiteBox").each(function(){
			if ($(this).hasClass('blueBox')) {
				if($(this).text() === checkText) {
					$(this).removeClass('blueBox');
				}
			} else {
				if($(this).text() === checkText) {
					$(this).addClass('blueBox');
				}
			}
		});

		checkedApi();
	} else {
		$(".api-list").find(".whiteBox").each(function(){
			if ($(this).text() === initParams) {
				$(this).removeClass('blueBox');
			}
		});  
		checkedApi();
	}
	
}

function checkedApi() {
	var resuNam ="";
	$(".api-list").find(".blueBox").each(function(){
		resuNam += '<span>'+$(this).text()+'<input type="button" value="×" /></span>';
	});
	$(".api-input").html(resuNam);
}

// 勾选API
$(".api-list span").click(function(){
	showAPI('click', $(this).text());
	clickFn();
});

clickFn();
// 删除API
function clickFn(){
	var listInput = $(".api-input input");
	var apiList = $(".api-list").find(".blueBox");
	var subNumC = 0;
	for(var i= 0 ;i < listInput.length; i++){
		listInput[i].onclick=function(){
			var apiName = $(this).parent().text();
			for (var u = 0; u < apiList.length; u++) {
				var listapi = $(apiList[u]).text();
				if (apiName == listapi) {
					// $(apiList[u]).attr("checked",false);
					$(apiList[u]).removeClass('blueBox');
					$(this).parent().remove();
					subNumC++;
					showAPI($(apiList[u]).text());
					clickFn();
				}
			};

		}
	}
	var subNumA = listInput.length-subNumC;

	//购物车角标数字
	if(subNumA<=0){
	    $(".coo-add").hide();
	}else{
	    $(".coo-add").show();
	    $(".coo-num").html(subNumA);
	}
}

// 发短信
function sendsms() {
	var mobile = $("#phoneNum").val();

	if (mobile == "" || mobile == "请输入手机号码") {
		$("#smsphone_err").text("*请输入手机号码");
		$("#smsphone_err").show();
		$("#smsphone_err").parent().addClass("has-error");
		return false;
	}

	$("#smsphone_err").hide();
	$("#smsphone_err").parent().removeClass("has-error");

	sendDynamicPasswd(mobile);

	send(60);
}

// 60秒
function send(num) {
	var clearTimer = setInterval(changeTime, 1000);

	$('#getSms').attr('disabled',"true");
	$("#getSms").html("重新获取(" + 60 + "秒)");

	function changeTime() {
		if (num > 0) {
			num = num - 1;
			curnum = num;
			$("#getSms").html("重新获取(" + curnum + "秒)");
		} else {
			if (num == 0) {
				//短信验证码
				$("#getSms").html("重新获取");
				$('#getSms').removeAttr("disabled");

				clearInterval(clearTimer);
				num = 60;
			}
			num = num - 1;
		}
	}
	clearTimer;
}

// 发送动态密码
function sendDynamicPasswd(mobile) {
	$.ajax({
		type : "POST",
		url : "/cooperationIntention/sendSMS.do",
		timeout : 10000,
		async : false,
		data : {
			mobile : mobile,
		},
		success : function(data) {
			if(data.msg=='1'){
				$("#smsNum_err").html('*已将短信随机码发送至手机，请查收!');
				$("#smsNum_err").parent().removeClass("has-error");
				$("#smsNum_err").show();
			}else if (data.msg == '2'){
				$("#smsNum_err").html('*短信随机码暂时不能发送，请一分钟以后再试！');
				$("#smsNum_err").parent().addClass("has-error");
				$("#smsNum_err").show();
			}else if (data.msg == '4'){
				$("#smsNum_err").html('*请输入中国移动手机号码');
				$("#smsNum_err").parent().addClass("has-error");
				$("#smsNum_err").show();
			}
		},
		error : function() {
			init_modal("对不起，连接超时，请重新输入！",null);
			return;
		}
	});
}

//提交信息检查
function ensure() {
	//API
	var Input = $(".api-input span").length;
	if(Input == null || Input == 0 || Input == undefined){
		$("#api_err").show();
		return false;
	}
	$("#api_err").hide();

	//姓名
	var nickName = $("#nickname").val();
	if(nickName == null || nickName == "" || nickName == undefined){
		$("#nickname_err").show();
		$("#nickname_err").parent().addClass("has-error");
		return false;
	}
	$("#nickname_err").hide();
	$("#nickname_err").parent().removeClass("has-error");

	//邮箱
	if(!checkEamil()){
		$("#email_err").parent().addClass("has-error");
		return false;
	}
	$("#email_err").hide();
	$("#email_err").parent().removeClass("has-error");

	//手机号
	var mobile = $("#phoneNum").val();
	if (mobile == "" || mobile == "请输入手机号") {
		$("#smsphone_err").text("*请输入手机号码");
		$("#smsphone_err").show();
		$("#smsphone_err").parent().addClass("has-error");
		return false;
	}

	$("#smsphone_err").hide();
	$("#smsphone_err").parent().removeClass("has-error");

	//验证码
	var mobile = $("#smsNum").val();
	if (mobile == "" || mobile == "请输入验证码") {
		$("#sendsms_err").text("*请输入验证码");
		$("#sendsms_err").show();
		$("#sendsms_err").parent().addClass("has-error");
		return false;
	}else{
		$("#sendsms_err").hide();
		$("#sendsms_err").parent().removeClass("has-error");
		updateInfo();
	}

}
//检查邮箱
function checkEamil(){
	var email = $("#email").val();
	if(email == null || email == '' || email == undefined){
		$("#email_err").text("*请输入邮箱");
		$("#email_err").show();
		return false;
	}
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(email)){
    	$("#email_err").text("*请输入有效的邮箱地址");
		$("#email_err").show();
	    return false;
	}
	return true;
}

//提交所有信息
function updateInfo(phone) {
	var nickName = $("#nickname").val();//姓名
	var email = $("#email").val();//邮箱
	var phone =$("#phoneNum").val();//手机号码
	var smsNum = $("#smsNum").val();//验证码
	var company = $("#company").val();//公司名称
	var department = $("#department").val();//所属部门
	var message = $("#message").val();//留言内容

	var resu = "";
    var temp ="";//勾选的API
    var resuNam = "";
    var newresuNam = '';
	for (var m = 0; m < api_json.ability.length; m++) {
	 	//循环获取数据
		var SMSname = api_json.ability[m].name;

		if($("#api-"+m+" .blueBox").length > 0) {
			$("#api-"+m+" .blueBox").each(function(){
				resuNam += $(this).text();
				resuNam += ",";
	
				var len = resuNam.length-1;
				newresuNam = resuNam.substring(0,len);
			});
			resu = SMSname+":"+newresuNam;
			resu += ";";
			resuNam = "";
			newresuNam="";
			temp += resu;
		}
	};

	$.ajax({
		url: "/cooperationIntention/saveUserDate.do",
		type: "post",
		data : {
			"name" : nickName,
			"email": email,
			"phone": phone,
			"smsContent": smsNum,
			"company": company,
			"department": department,
			"message": message,
			"ability_id_str": temp
		},
		dataType: 'json',
		success:function(data){
			if(data.msg == "1"){
				init_modal("您已成功登记，我们将在2个工作日内与您联系。如有疑问，请咨询在线客服或客服电话XXXXXXX",function (){
					window.location.href = "index.html";
				});
			}else if (data.msg == "2") {
				init_modal("对不起，验证码错误，请重新输入！",null);
				return;
			}else if (data.msg == "3") {
				init_modal("对不起，提交失败，请重新输入！",null);
				return;
			}
		},
		error: function() {
			init_modal("对不起，连接超时，请重新输入！",null);
			return;
		}
	});
}
/* 初始化模态框*/
function show_modal() {
	$(".pop").show();
	// $(".b-inner").show();
	// $(".b-popover-bk").show();
}

function hide_modal() {
	$(".pop").hide();
	// $(".b-inner").hide();
	// $(".b-popover-bk").hide();
}

function init_modal(notice_text,callFunc) {
	//文字提示设置
	$(".suc-text p").text(notice_text);
	// $(".modal_btn").text(btn_text);
	
	//按钮事件绑定
	$(".btn-qd").on("click", function() {
		hide_modal();
		if (callFunc != null) {
			callFunc();
		}
	});
	$('.pop-icon').click(function(){
			hide_modal();
	});
	show_modal();		
}