$(document).ready(function(){

    var solutionId = getUrlParam("id");
    var casesName = getUrlParam("casesName");
    // alert(casesName)
    var solLength = data.solution.length;
    // alert(data.solution[0].id)
    for (var i=0;i<=solLength-1;i++){
        //var id = data.solution[i].id; //找到solution的id
        //var solutionId = getUrlParam("id");

        if(data.solution[i].id == solutionId){
            var caseLength = data.solution[i].successful_cases.length;
            for(var j=0;j<=caseLength-1;j++){
                // var caseName = data.solution[i].successful_cases[j].name;
                if(data.solution[i].id == solutionId && data.solution[i].successful_cases[j].name == casesName){
                    detailsU(data.solution[i].successful_cases[j]);
                }
            }
        }

    }

    // soluion-details跳转
    $(".solution-det").on("click",function(){
        var id = getUrlParam("id")-1;
        location.href = 'solution.html?id='+id;
    })



})

//获取url中的参数值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        // return unescape(r[2]);
        return decodeURI(r[2]); //解决中文乱码问题
    return null;
}

function detailsU(obj){
    $(".case h4").html(obj.name);
    $("#cooperative_content").html(obj.cooperative_content);
    $("#cooperative_effect").html(obj.cooperative_effect);
    $(".detail-img img").attr("src",obj.cooperative_img)
}