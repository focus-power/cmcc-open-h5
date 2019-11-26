$(function() {

	var $api_id = getUrlParam("id");
    var $api_id_subid = getUrlParam("subId");

	var tt = api_json.ability.length;
	var kk = -1;
	var fitst_title = '';
	var str = '';
	for(var i =0;i < tt;i++){
		kk++;
		var $name = api_json.ability[i].name;

		if (api_json.ability[i].id == $api_id) {
			//选中的大分类添加样式
			fitst_title = "<li class='boxLi' data='"+api_json.ability[i].id+"'><div class='menu2-show'><i class='icon icon"+kk+"' style='background: url("+api_json.ability[i].ability_menu+") no-repeat'></i><span>"+$name+"</span>" +
			"<i class='icon-tri icon-triD'></i></div><ul style='display:block'  class='nav-hide index"+i+"'>";
		}else{
			fitst_title = "<li class='boxLi' data='"+api_json.ability[i].id+"'><div class='menu2-show'><i class='icon icon"+kk+"' style='background: url("+api_json.ability[i].ability_menu+") no-repeat'></i><span>"+$name+"</span>" +
			"<i class='icon-tri icon-triU'></i></div><ul class='nav-hide index"+i+"'>";
		}

		var $mian = api_json.ability[i].sub_ability.length;
		var second_name = '';
		for(var j =0; j< $mian; j++){
			var $sub_name = api_json.ability[i].sub_ability[j].sub_name;
			if (api_json.ability[i].id == $api_id && $api_id_subid == api_json.ability[i].sub_ability[j].sub_id) {
				//二级分类添加样式
				second_name += "<li class='active' data='"+api_json.ability[i].sub_ability[j].sub_id+"'><a>"+$sub_name+"</a></li>";
				//右侧显示选中分类的内容
				rihtShow(api_json.ability[i].sub_ability[j]);
			}else{
				second_name += "<li data='"+api_json.ability[i].sub_ability[j].sub_id+"'><a>"+$sub_name+"</a></li>";
			}
		}
		str = second_name;
		second_name = '';
		$("#left_nav").append(fitst_title+"</ul></li>");
		$(".index"+i+"").html(str);
	}

})

//获取url中的参数值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

//从api_json中获取小分类中的数据
function rihtShow(obj){
	$(".inf-text h2").html(obj.sub_name);
	$("#des").html(obj.description);
	$(".inf-img img").attr("src",obj.ability_icon);
	$("#api_list_more").attr("href",obj.detail_url);

	var caseStr = '';
    $(obj.cases).each(function(icase,tcase){
    	caseStr += "<li class='cap-img'><img src='"+tcase.image_url+"' alt=''></li>"
    });
    $(".cases").html(caseStr);

    var $index_scene_str = "<li><span>"+obj.scene+"</span></li>"
    $("#application_scene").html($index_scene_str);

    var apiList = '';
    $(obj.api_list).each(function(ilist,tlist){
    	apiList += '<tr>'+
                    '<td>'+tlist.sub_api_name+'</td>'+
                    '<td>'+tlist.sub_api_desc+'</td>'+
                    '<td>'+obj.sub_api_owner+'</td>'+
                    '<td>'+tlist.sub_api_type+'</td>'+
                '</tr>';
    });
    $("#api_list").html(apiList);

    /*在线订购签约显示隐藏*/
    var signOnline = obj.close_a_deal;
    // alert(signOnline);
    if(signOnline==""||signOnline==undefined){
        // $(".btnCQ .btn-q").css({display: 'none!import'});
		$("#isShow").hide();
    }else{
        $(".btnCQ #isShow").show().click(function(){
            window.open(signOnline);
        })
    }
}