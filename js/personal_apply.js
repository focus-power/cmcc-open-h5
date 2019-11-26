$(function () {
    //图片上传
    var routeUrl = "http://www.lertour.com";
    //身份证正面
    $('.full-face').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="full-face-upload" id="full-face-upload">+</br>正面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.full-face-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="full-face-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="full-face-close"></i>';
                $('.apply-main1-list3').css({'height':'152px'});
                $('.full-face').css({'width':'152px','height':'152px'});
                $('.full-face .selectbtn').css({'display':'none'});
                $('.full-face .uploadify-button').css({'display':'none'});
                $('.full-face .uploadify-queue').css({'display':'none'});
                $('.full-face .uploadify-queue-item').css({'display':'none'});
                $('.full-face').append(innerHtml);
            }
        }
    });
    //删除  身份证正面
    $(document).on('click','.full-face-close',function () {
        $('.full-face-img').remove();
        if($('.reverse-photo').height() == '152'){
            $('.apply-main1-list3').css({'height':'152px'});
        }else {
            $('.apply-main1-list3').css({'height':'59px'});
        }
        $('.full-face').css({'width':'59px','height':'59px'});
        $('.full-face .selectbtn').css({'display':'none'});
        $('.full-face .uploadify-button').css({'display':'inline-block'});
        $('.full-face .uploadify-queue').css({'display':'inline-block'});
        $('.full-face .uploadify-queue-item').css({'display':'none'});
        $('.full-face-images-url').val('');
        $('.full-face-close').hide();

    });

    //身份证背面
    $('.reverse-photo').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="reverse-photo-upload" id="reverse-photo-upload">+</br>反面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.reverse-photo-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="reverse-photo-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="reverse-photo-close"></i>';
                $('.apply-main1-list3').css({'height':'152px'});
                $('.reverse-photo').css({'width':'152px','height':'152px'});
                $('.reverse-photo .selectbtn').css({'display':'none'});
                $('.reverse-photo .uploadify-button').css({'display':'none'});
                $('.reverse-photo .uploadify-queue').css({'display':'none'});
                $('.reverse-photo .uploadify-queue-item').css({'display':'none'});
                $('.reverse-photo').append(innerHtml);
            }
        }
    });
    //删除 身份证背面
    $(document).on('click','.reverse-photo-close',function () {
        $('.reverse-photo-img').remove();
        if($('.full-face').height() == '152'){
            $('.apply-main1-list3').css({'height':'152px'});
        }else {
            $('.apply-main1-list3').css({'height':'59px'});
        }
        $('.reverse-photo').css({'width':'59px','height':'59px'});
        $('.reverse-photo .selectbtn').css({'display':'none'});
        $('.reverse-photo .uploadify-button').css({'display':'inline-block'});
        $('.reverse-photo .uploadify-queue').css({'display':'inline-block'});
        $('.reverse-photo .uploadify-queue-item').css({'display':'none'});
        $('.reverse-photo-images-url').val('');
        $('.reverse-photo-close').hide();
    });

    //个人所在地
    var cityCodeChoose;
    var cityChoose;
    var countyCodeChoose;
    var countyChoose;
    $('#cityId-personal').combobox({
        valueField:'code',
        textField:'name_ch',
        onSelect:function (record) {
            cityCodeChoose = record.code;
            cityChoose = record.name_ch;

            var county = record.city;
            $('#countyId-personal').combobox('clear');
            $('#countyId-personal').combobox('loadData',county);
        }
    });
    // $('#countyId-personal').combobox({
    //     onChange:function (newValue, oldValue) {
    //         console.log(newValue)
    //         console.log(oldValue)
    //     }
    // })
    $.getJSON('../data/city_json.txt',function(data){
        $('#cityId-personal').combobox('loadData',data);
        $('#cityId-personal').combobox('select','请选择');
    });


    //信息查看页面
    //身份证正面
    $('.full-face1').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="full-face-upload1" id="full-face-upload1">+</br>正面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.full-face-images-url1').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="full-face-img1" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="full-face-close1"></i>';
                $('.apply-conserve-list3').css({'height':'152px'});
                $('.full-face1').css({'width':'152px','height':'152px'});
                $('.full-face1 .selectbtn').css({'display':'none'});
                $('.full-face1 .uploadify-button').css({'display':'none'});
                $('.full-face1 .uploadify-queue').css({'display':'none'});
                $('.full-face1 .uploadify-queue-item').css({'display':'none'});
                $('.full-face1').append(innerHtml);
            }
        }
    });
    //删除  身份证正面
    $(document).on('click','.full-face-close1',function () {
        $('.full-face-img1').remove();
        if($('.reverse-photo1').height() == '152'){
            $('.apply-conserve-list3').css({'height':'152px'});
        }else {
            $('.apply-conserve-list3').css({'height':'59px'});
        }
        $('.full-face1').css({'width':'59px','height':'59px'});
        $('.full-face1 .selectbtn').css({'display':'none'});
        $('.full-face1 .uploadify-button').css({'display':'inline-block'});
        $('.full-face1 .uploadify-queue').css({'display':'inline-block'});
        $('.full-face1 .uploadify-queue-item').css({'display':'none'});
        $('.full-face-images-url1').val('');
        $('.full-face-close1').hide();

    });

    //身份证背面
    $('.reverse-photo1').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="reverse-photo-upload1" id="reverse-photo-upload1">+</br>反面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.reverse-photo-images-url1').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="reverse-photo-img1" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="reverse-photo-close1"></i>';
                $('.apply-conserve-list3').css({'height':'152px'});
                $('.reverse-photo1').css({'width':'152px','height':'152px'});
                $('.reverse-photo1 .selectbtn').css({'display':'none'});
                $('.reverse-photo1 .uploadify-button').css({'display':'none'});
                $('.reverse-photo1 .uploadify-queue').css({'display':'none'});
                $('.reverse-photo1 .uploadify-queue-item').css({'display':'none'});
                $('.reverse-photo1').append(innerHtml);
            }
        }
    });
    //删除 身份证背面
    $(document).on('click','.reverse-photo-close1',function () {
        $('.reverse-photo-img1').remove();
        if($('.full-face1').height() == '152'){
            $('.apply-conserve-list3').css({'height':'152px'});
        }else {
            $('.apply-conserve-list3').css({'height':'59px'});
        }
        $('.reverse-photo1').css({'width':'59px','height':'59px'});
        $('.reverse-photo1 .selectbtn').css({'display':'none'});
        $('.reverse-photo1 .uploadify-button').css({'display':'inline-block'});
        $('.reverse-photo1 .uploadify-queue').css({'display':'inline-block'});
        $('.reverse-photo1 .uploadify-queue-item').css({'display':'none'});
        $('.reverse-photo-images-url1').val('');
        $('.reverse-photo-close1').hide();
    });

    //个人所在地
    $('#cityId-personal1').combobox({
        valueField:'code',
        textField:'name_ch',
        onSelect:function (record) {
            var county = record.city;
            $('#countyId-personal1').combobox('clear');
            $('#countyId-personal1').combobox('loadData',county);
        }
    });
    $.getJSON('../data/city_json.txt',function(data){
        $('#cityId-personal1').combobox('loadData',data);
        $('#cityId-personal1').combobox('select','请选择');
    });


    //身份证校验
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    //信息校验
    function informationCheck() {
        var perNameValue = $(".personal-user-name input").val();//获取用户名姓名
        var perIdValue = $(".personal-user-id input").val();//获取用户证件号码
        var perFaceUrl = $(".full-face-images-url").val();//获取用户证件照正面
        var perBackUrl = $(".reverse-photo-images-url").val();//获取用户证件照反面
        var cityId = $("input[name='cityId-personal']").val();//省
        var countyId = $("input[name='countyId-personal']").val();//市

        var perNameErr = $('.name-error');
        var perIdErr = $('.id-error');
        var perPhotoErr = $('.main1-list3-prompt');
        var perAddressErr = $('.city-error');

        //验证用户名
        if(perNameValue === '' || perNameValue === undefined || perNameValue === null){
            perNameErr.removeClass('main1-error-hidden');
            $('.personal-user-name input').css('border-color','#ff3a3a');
            return false;
        }else{
            perNameErr.addClass('main1-error-hidden');
            $('.personal-user-name input').css('border-color','#dadada');
        }

        //验证证件号
        if(perIdValue === '' || perIdValue === undefined || perIdValue === null){
            perIdErr.removeClass('main1-error-hidden');
            $('.personal-user-id input').css('border-color','#ff3a3a');
            perIdErr.text('请输入证件号码');
            return false;
        }else if(!regIdNo.test(perIdValue)){
            perIdErr.removeClass('main1-error-hidden');
            $('.personal-user-id input').css('border-color','#ff3a3a');
            perIdErr.text('请输入正确的证件号码');
            return false;
        }else{
            perIdErr.addClass('main1-error-hidden');
            $('.personal-user-id input').css('border-color','#dadada');
            perIdErr.text('');
        }

        //验证证件照片
        if(((perFaceUrl === '' || perFaceUrl === undefined || perFaceUrl == null)||(perBackUrl === ''|| perBackUrl === undefined || perBackUrl == null))){
            perPhotoErr.css('color','#ff3a3a');
            $('.apply-main1-list3 .uploadify-button').css('border-color','#ff3a3a');
            return false;
        }else{
            perPhotoErr.css('color','#999999');
            $('.apply-main1-list3 .uploadify-button').css('border-color','#808080');
        }

        //验证省市选择
        if(((cityId === '' || cityId === undefined || cityId === null)||(countyId === ''|| countyId === undefined || countyId === null))){
            perAddressErr.removeClass('main1-error-hidden');
            $('.apply-main1-list4 input').css('border-color','#ff3a3a');
            return false;
        }else{
            perAddressErr.addClass('main1-error-hidden');
            $('.apply-main1-list4 input').css('border-color','#dadada');
        }
        return true;
    }

    //input框要变色
    //身份证校验
    // function idCard(idNo) {
    //     if(!regIdNo.test(idNo)){
    //         $('.id-error').removeClass('main1-error-hidden');
    //         return false;
    //     }else{
    //         $('.id-error').addClass('main1-error-hidden');
    //         return true;
    //     }
    // }

    //用户名不能为空
    // function userName(name) {
    //     if(name === '' || name === undefined || name === null){
    //         $('.name-error').removeClass('main1-error-hidden');
    //         return false;
    //     }else{
    //         $('.name-error').addClass('main1-error-hidden');
    //         return true;
    //     }
    // }

    //证件照是否上传  检测隐藏域里面是否有img的url
    //地区是否选择  检测input里面是否有值 并且省里面的值不能为  请选择

    $(document).on('click','.personal-btn',function () {
        if(informationCheck()){
            if (window.localStorage) {
                //    缓存数据
                var strName = $(".personal-user-name input").val();
                var strId = $(".personal-user-id input").val();
                var strFace = $(".full-face-images-url").val();
                var strBack = $(".reverse-photo-images-url").val();
                // var strCity = $("input[name='cityId-personal']").val();
                var strCity = cityChoose;
                var strCityCode = cityCodeChoose;
                var strCounty = $("input[name='countyId-personal']").val();

                var data = {
                    keyName:strName,
                    keyId:strId,
                    keyFace:strFace,
                    keyBack:strBack,
                    keyCity:strCity,
                    keyCityCode:strCityCode,
                    keyCounty:strCounty
                };

                console.log(data.keyName)
                console.log(data.keyId)
                console.log(data.keyFace)
                console.log(data.keyBack)
                console.log(data.keyCity)
                console.log(data.keyCityCode)
                console.log(data.keyCounty)
                var perStr = JSON.stringify(data);
                localStorage.setItem("data",perStr);
                // console.log(localStorage.data)
            } else {
                alert('对不起您的浏览器版本过低，暂不支持缓存')
            }

            // var personalObj = {
            //     name:$(".personal-user-name input").val(),
            //     id:$(".personal-user-id input").val(),
            //     faceUrl:$(".full-face-images-url").val(),
            //     backUrl:$(".reverse-photo-images-url").val(),
            //     city:$("input[name='cityId-personal']").val(),
            //     county:$("input[name='countyId-personal']").val()
            // };

            // $.ajax({
            //     url:"",
            //     dataType:"json",
            //     // async:true,
            //     data:personalObj,  //参数值
            //     type:"POST",
            //     success:function(data){
            //         if(data.msg == '1'){
            //             //页面切换
            //             $('.personal-apply-sumbit').addClass('main1-hidden');
            //             $('.personal-success').removeClass('main1-hidden');
            //         }
            //     },
            //     error:function(){
            //
            //     }
            // });

            //页面切换
            $('.personal-apply-sumbit').addClass('main1-hidden');
            $('.personal-apply-conserve').removeClass('main1-hidden');
            // $('.personal-success').removeClass('main1-hidden');
        };


        //读取存储数据
        var perJson = localStorage.getItem("data");
        var perJsonObj = JSON.parse(perJson);

        if(perJsonObj.keyName){
            $('.personal-user-name1 input').val(perJsonObj.keyName);
        }
        if(perJsonObj.keyId){
            $('.personal-user-id1 input').val(perJsonObj.keyId);
        }
        if(perJsonObj.keyFace){
            $(".full-face-images-url1").val(perJsonObj.keyFace);
            var innerHtml = '<img class="full-face-img1" src="' + routeUrl + perJsonObj.keyFace + '" width="150" height="150">'+'<i class="full-face-close1"></i>';
            $('.apply-conserve-list3').css({'height':'152px'});
            $('.full-face1').css({'width':'152px','height':'152px'});
            $('.full-face1 .selectbtn').css({'display':'none'});
            $('.full-face1 .uploadify-button').css({'display':'none'});
            $('.full-face1 .uploadify-queue').css({'display':'none'});
            $('.full-face1 .uploadify-queue-item').css({'display':'none'});
            $('.full-face1').append(innerHtml);
        }
        if(perJsonObj.keyBack){
            $(".reverse-photo-images-url1").val(perJsonObj.keyBack);
            var innerHtml = '<img class="reverse-photo-img1" src="' +routeUrl + perJsonObj.keyBack + '" width="150" height="150">'+'<i class="reverse-photo-close1"></i>';
            $('.apply-conserve-list3').css({'height':'152px'});
            $('.reverse-photo1').css({'width':'152px','height':'152px'});
            $('.reverse-photo1 .selectbtn').css({'display':'none'});
            $('.reverse-photo1 .uploadify-button').css({'display':'none'});
            $('.reverse-photo1 .uploadify-queue').css({'display':'none'});
            $('.reverse-photo1 .uploadify-queue-item').css({'display':'none'});
            $('.reverse-photo1').append(innerHtml);
        }
        if(perJsonObj.keyCityCode && perJsonObj.keyCounty){
            var infor = {
                code:'perJsonObj.keyCityCode',
                city:'perJsonObj.keyCity'
            }
            $('#cityId-personal1').form('load',infor);
            console.log(perJsonObj.keyCity)
            console.log(perJsonObj.keyCityCode)
            console.log(perJsonObj.keyCounty)
        }

        //input框禁用
        $('.personal-apply-conserve li input').attr("disabled","disabled");
        //照片的关闭按钮
        $('.full-face1 .full-face-close1').css('display','none');
        $('.reverse-photo1 .reverse-photo-close1').css('display','none');
        //地区选择框
        $('.apply-main1-list4 .textbox-addon').css('display','none');
        $('.apply-main1-list4 input').attr("disabled","disabled");
    });

    //读取存储数据
    // $(document).ready(function () {
    //     var perJson = localStorage.getItem("data");
    //     var perJsonObj = JSON.parse(perJson);
    //
    //     console.log(perJsonObj.keyName)
    //     console.log(perJsonObj.keyId)
    //     console.log(perJsonObj.keyFace)
    //     console.log(perJsonObj.keyBack)
    //     console.log(perJsonObj.keyCity)
    //     console.log(perJsonObj.keyCityCode)
    //     console.log(perJsonObj.keyCounty)
    //     if(perJsonObj.keyName){
    //         $('.personal-user-name1 input').val(perJsonObj.keyName);
    //     }
    //     if(perJsonObj.keyId){
    //         $('.personal-user-id1 input').val(perJsonObj.keyId);
    //     }
    //     if(perJsonObj.keyFace){
    //         $(".full-face-images-url1").val(perJsonObj.keyFace);
    //         var innerHtml = '<img class="full-face-img1" src="' + routeUrl + perJsonObj.keyFace + '" width="150" height="150">'+'<i class="full-face-close1"></i>';
    //         $('.apply-conserve-list3').css({'height':'152px'});
    //         $('.full-face1').css({'width':'152px','height':'152px'});
    //         $('.full-face1 .selectbtn').css({'display':'none'});
    //         $('.full-face1 .uploadify-button').css({'display':'none'});
    //         $('.full-face1 .uploadify-queue').css({'display':'none'});
    //         $('.full-face1 .uploadify-queue-item').css({'display':'none'});
    //         $('.full-face1').append(innerHtml);
    //     }
    //     if(perJsonObj.keyBack){
    //         $(".reverse-photo-images-url1").val(perJsonObj.keyBack);
    //         var innerHtml = '<img class="reverse-photo-img1" src="' +routeUrl + perJsonObj.keyBack + '" width="150" height="150">'+'<i class="reverse-photo-close1"></i>';
    //         $('.apply-conserve-list3').css({'height':'152px'});
    //         $('.reverse-photo1').css({'width':'152px','height':'152px'});
    //         $('.reverse-photo1 .selectbtn').css({'display':'none'});
    //         $('.reverse-photo1 .uploadify-button').css({'display':'none'});
    //         $('.reverse-photo1 .uploadify-queue').css({'display':'none'});
    //         $('.reverse-photo1 .uploadify-queue-item').css({'display':'none'});
    //         $('.reverse-photo1').append(innerHtml);
    //     }
    //     if(perJsonObj.keyCityCode && perJsonObj.keyCounty){
    //         // $('#cityId-personal1').combobox('clear');
    //         // $("input[name='cityId-personal1']").val(strCity);
    //         // $('#cityId-personal1').combobox('setText',strCity.toString());
    //         // $('#cityId-personal1').combobox('setText',strCity.toString());
    //         // $('#cityId-personal1').combobox('setValue',perJsonObj.keyCityCode.toString()).combobox('setText',perJsonObj.keyCity.toString());
    //         // var obj = {
    //         //     cityCode:perJsonObj.keyCityCode,
    //         //     countryCode:perJsonObj.keyCounty
    //         // }
    //         var infor = {
    //             code:'perJsonObj.keyCityCode',
    //             city:'perJsonObj.keyCity'
    //         }
    //         $('#cityId-personal1').form('load',infor);
    //         console.log(perJsonObj.keyCity)
    //         console.log(perJsonObj.keyCityCode)
    //         console.log(perJsonObj.keyCounty)
    //     }
    //     // if(perJsonObj.keyCounty){
    //     //     // $("input[name='countyId-personal1']").val('海淀区');
    //     //     // $('#countyId-personal1').combobox('setValue',strCounty.toString());
    //     //     $('#countyId-personal1').combobox('setText',perJsonObj.keyCounty.toString());
    //     //     console.log(perJsonObj.keyCounty)
    //     // }
    //
    //     // if(strName !=='' && strName !== undefined && strName !== null && strPass !=='' && strPass != undefined && strPass != null){
    //     //     $('.automatic-login input').prop("checked",true);
    //     // }else{
    //     //     $('.automatic-login input').prop("checked",false);
    //     // }
    // });

    //点击修改
    $(document).on('click','.personal-change',function () {
        //恢复input框
        $('.personal-apply-conserve li input').removeAttr("disabled");
        $('.personal-apply-conserve li input').css({"border-color":"#dadada","cursor":"pointer"});
        //照片的关闭按钮
        $('.full-face1 .full-face-close1').css('display','block');
        $('.reverse-photo1 .reverse-photo-close1').css('display','block');
        //地区选择框
        $('.apply-main1-list4 .textbox-addon').css('display','block');
        $('.apply-main1-list4 input').removeAttr("disabled");
    })
});