$(document).ready(function(){

    // api列表
    var apiTable = '';
    // alert(api_json.ability.length);
    // alert(api_json.ability[1].name);
    for(var i=0;i<api_json.ability.length;i++){
        apiTable += '<tr>'+
        '<td width="12%">'+api_json.ability[i].name+'</td>'+
        '<td width="88%">';
        for(var j=0;j<api_json.ability[i].sub_ability.length;j++){
            var id = i+1;
            var subId = j+1;
            apiTable += '<a href="../api.html?id='+id+'&subId='+subId+'">'+api_json.ability[i].sub_ability[j].sub_name+'</a>';
        }
        apiTable += '</td></tr>';
    }+
    $("#apiTable").html(apiTable);

    // $("#apiTable").html(apiTable);

    // solution列表

});