$(function () {
    //公司成立日期
    $('#box').datebox({             //将两个输入框，执行日期输入框方法
        panelWidth: 376,
        panelHeight: 200
        // formatter:function (date) {  //重新格式化如果，以/作为分隔符
        //     var y = date.getFullYear();
        //     var m = date.getMonth()+1;
        //     var d = date.getDate();
        //     return y+'/'+m+'/'+d;
        // }
        // sharedCalendar:'#sc'        //将日历控件指向id为sc的元素
    });

    //委托书有效期
    $('#box1').datebox({
        panelWidth: 376,
        panelHeight: 200
    });

    //公司所在地
    $('#cityId').combobox({
        valueField:'code',
        textField:'name_ch',
        onSelect:function (record) {
            var county = record.city;
            $('#countyId').combobox('clear');
            $('#countyId').combobox('loadData',county);
        }
    });
    $.getJSON('../data/city_json.txt',function(data){
        $('#cityId').combobox('loadData',data);
        $('#cityId').combobox('select','请选择');
    });

    //公司性质选择
    var comNature = {"00":"国有企业","01":"民营企业","02":"外商独资","03":"私营企业","04":"中外合资","05":"股份制企业","06":"其他"};
    var comNatureStr = '';
    jQuery.each(comNature, function(i, val) {
        comNatureStr+='<option>'+val+'</option>';
    });
    $('.company-nature').append(comNatureStr);

    //所属行业
    var trade = {"00":"软件业","01":"文化娱乐业","02":"制造业","03":"服务业","04":"金融业","05":"其他"};
    var tradeStr = '';
    jQuery.each(trade, function(i, val) {
        tradeStr+='<option>'+val+'</option>';
    });
    $('.trade').append(tradeStr);

    //公司规模
    var companySize = {"00":"1-50","01":"50-100","02":"100-200","03":"200以上"};
    var companySizeStr = '';
    jQuery.each(companySize, function(i, val) {
        companySizeStr+='<option>'+val+'</option>';
    });
    $('.company-size').append(companySizeStr);

    //证件类型
    var idType;
    idType = {
        "00": "居民身份证",
        "01": "临时居民身份证",
        "02": "户口簿（仅用于未成年客户）",
        "03": "军人身份证件",
        "04": "武装警察身份证件",
        "05": "港澳居民往来内地通行证",
        "06": "台湾居民来往大陆通行证",
        "07": "护照",
        "99": "其他证件"
    };
    var idTypeStr = '';
    jQuery.each(idType, function(i, val) {
        idTypeStr+='<option>'+val+'</option>';
    });
    $('.id-type').append(idTypeStr);

    //判断用户选的是三证合一还是三证
    $('.main1-choose-license').click(function () {
        var options = $('.main1-choose-license option:selected');
        if(options.val() == '1'){//企业三证
            $('.three-evidence').removeClass('company-apply-main1-hide');
            $('.syncretic').addClass('company-apply-main1-hide');
        }else {
            $('.three-evidence').addClass('company-apply-main1-hide');
            $('.syncretic').removeClass('company-apply-main1-hide');
        }
    });

    //图片上传
    var routeUrl = "http://www.lertour.com";
    //组织机构代码上传
    $('.organization').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="organization-choice" id="organization-upload"><img src="../images/user/user-icon08.png" alt=""></div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.organization-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="organization-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="organization-close"></i>';
                $('.main1-organization').css({'height':'152px'});
                $('.organization').css({'width':'152px','height':'152px'});
                $('.organization .selectbtn').css({'display':'none'});
                $('.organization .uploadify-button').css({'display':'none'});
                $('.organization .uploadify-queue').css({'display':'none'});
                $('.organization .uploadify-queue-item').css({'display':'none'});
                $('.organization').append(innerHtml);
            }
        }
    });
    //组织机构代码上传 删除图片
    $(document).on('click','.organization-close',function () {
        $('.organization-img').remove();
        $('.main1-organization').css({'height':'80px'});
        $('.organization').css({'width':'80px','height':'80px'});
        $('.organization .selectbtn').css({'display':'none'});
        $('.organization .uploadify-button').css({'display':'inline-block'});
        $('.organization .uploadify-queue').css({'display':'inline-block'});
        $('.organization .uploadify-queue-item').css({'display':'none'});
        $('.organization-images-url').val('');
        $('.organization-close').hide();
    });

    //税务登记证上传
    $('.tax').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="tax-choice" id="tax-upload"><img src="../images/user/user-icon08.png" alt=""></div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.tax-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="tax-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="tax-close"></i>';
                $('.main1-tax').css({'height':'152px'});
                $('.tax').css({'width':'152px','height':'152px'});
                $('.tax .selectbtn').css({'display':'none'});
                $('.tax .uploadify-button').css({'display':'none'});
                $('.tax .uploadify-queue').css({'display':'none'});
                $('.tax .uploadify-queue-item').css({'display':'none'});
                $('.tax').append(innerHtml);
            }
        }
    });
    //税务登记证上传 删除图片
    $(document).on('click','.tax-close',function () {
        $('.tax-img').remove();
        $('.main1-tax').css({'height':'80px'});
        $('.tax').css({'width':'80px','height':'80px'});
        $('.tax .selectbtn').css({'display':'none'});
        $('.tax .uploadify-button').css({'display':'inline-block'});
        $('.tax .uploadify-queue').css({'display':'inline-block'});
        $('.tax .uploadify-queue-item').css({'display':'none'});
        $('.tax-images-url').val('');
        $('.tax-close').hide();
    });

    //营业执照上传
    $('.license').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="license-choice" id="license-upload"><img src="../images/user/user-icon08.png" alt=""></div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.license-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="license-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="license-close"></i>';
                $('.main1-license').css({'height':'152px'});
                $('.license').css({'width':'152px','height':'152px'});
                $('.license .selectbtn').css({'display':'none'});
                $('.license .uploadify-button').css({'display':'none'});
                $('.license .uploadify-queue').css({'display':'none'});
                $('.license .uploadify-queue-item').css({'display':'none'});
                $('.license').append(innerHtml);
            }
        }
    });
    //营业执照上传 删除图片
    $(document).on('click','.license-close',function () {
        $('.license-img').remove();
        $('.main1-license').css({'height':'80px'});
        $('.license').css({'width':'80px','height':'80px'});
        $('.license .selectbtn').css({'display':'none'});
        $('.license .uploadify-button').css({'display':'inline-block'});
        $('.license .uploadify-queue').css({'display':'inline-block'});
        $('.license .uploadify-queue-item').css({'display':'none'});
        $('.license-images-url').val('');
        $('.license-close').hide();
    });

    //公司信息页附件图片或者文件 上传
    var now_url;
    $('.accessory').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="accessory-choice" id="accessory-upload">上传附件</div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.doc;*.docx;*.jpg;*.pdf;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.accessory-images-url').val(json_data.message);
                var now_size = bytesToSize(file.size);
                var now_name = file.name;
                var now_images_url =  json_data.message;
                var innerHtml;
                now_url = now_images_url.split('.')[1];//判断传入的文件类型
                if( now_url === 'doc' || now_url === 'docx'){
                    innerHtml = '<div class="accessory-text" style=""><img src="../images/user/user-icon09.png" alt="">'+now_name +' '+ now_size+'<i class="accessory-close"></i></div>';
                }
                else if( now_url === 'pdf'){
                    innerHtml = '<div class="accessory-pdf" style=""><img src="../images/user/user-icon10.png" alt="">'+now_name +' '+ now_size+'<i class="accessory-close"></i></div>';
                }else {
                    innerHtml = '<div class="accessory-img" style=""><img src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="accessory-close"></i></div>';
                    $('.main1-accessory').css({'height':'152px'});
                    $('.accessory').css({'width':'auto','height':'152px'});
                }
                $('.accessory .selectbtn').css({'display':'none'});
                $('.accessory .uploadify-button').css({'display':'none'});
                $('.accessory .uploadify-queue').css({'display':'none'});
                $('.accessory .uploadify-queue-item').css({'display':'none'});
                $('.accessory').append(innerHtml);
            }else {
                alert("上传文件不能为空")
            }
        }
    });
    //删除公司信息页附件图片或者文件
    $(document).on('click','.accessory-close',function () {
        if( now_url === 'doc' || now_url === 'docx'){
            $('.accessory-text').remove();
        }else if( now_url === 'pdf'){
            $('.accessory-pdf').remove();
        }else{
            $('.accessory-img').remove();
            $('.main1-accessory').css({'height':'40px'});
            $('.accessory').css({'width':'auto','height':'40px'});
        }
        $('.accessory .selectbtn').css({'display':'none'});
        $('.accessory .uploadify-button').css({'display':'inline-block'});
        $('.accessory .uploadify-queue').css({'display':'inline-block'});
        $('.accessory .uploadify-queue-item').css({'display':'none'});
        $('.accessory-images-url').val('');
        $('.accessory-close').hide();
    });

    //授权委托书上传
    var now_url1;
    $('.proxy').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="proxy-choice" id="proxy-upload">上传附件</div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.doc;*.docx;*.jpg;*.pdf;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.proxy-images-url').val(json_data.message);
                var now_size = bytesToSize(file.size);
                var now_name = file.name;
                var now_images_url =  json_data.message;
                var innerHtml;
                now_url1 = now_images_url.split('.')[1];//判断传入的文件类型
                if( now_url1 === 'doc' || now_url1 === 'docx'){
                    innerHtml = '<div class="proxy-text" style=""><img src="../images/user/user-icon09.png" alt="">'+now_name +' '+ now_size+'<i class="proxy-close"></i></div>';
                }
                else if( now_url1 === 'pdf'){
                    innerHtml = '<div class="proxy-pdf" style=""><img src="../images/user/user-icon10.png" alt="">'+now_name +' '+ now_size+'<i class="proxy-close"></i></div>';
                }else {
                    innerHtml = '<div class="proxy-img" style=""><img src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="proxy-close"></i></div>';
                    $('.main1-proxy').css({'height':'152px'});
                    $('.proxy').css({'width':'auto','height':'152px'});
                }
                $('.proxy .selectbtn').css({'display':'none'});
                $('.proxy .uploadify-button').css({'display':'none'});
                $('.proxy .uploadify-queue').css({'display':'none'});
                $('.proxy .uploadify-queue-item').css({'display':'none'});
                $('.proxy').append(innerHtml);
            }else {
                alert("上传文件不能为空")
            }
        }
    });
    //删除图片或者文件
    $(document).on('click','.proxy-close',function () {
        if( now_url1 === 'doc' || now_url1 === 'docx'){
            $('.proxy-text').remove();
        }else if( now_url1 === 'pdf'){
            $('.proxy-pdf').remove();
        }else{
            $('.proxy-img').remove();
            $('.main1-proxy').css({'height':'40px'});
            $('.proxy').css({'width':'auto','height':'40px'});
        }
        $('.proxy .selectbtn').css({'display':'none'});
        $('.proxy .uploadify-button').css({'display':'inline-block'});
        $('.proxy .uploadify-queue').css({'display':'inline-block'});
        $('.proxy .uploadify-queue-item').css({'display':'none'});
        $('.proxy-images-url').val('');
        $('.proxy-close').hide();
    });
    //文件大小转换
    function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        var k = 1024;
        sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
        //toPrecision(3) 后面保留一位小数，如1.0GB
    }
    
    //管理者身份信息上传
    //管理者身份证正面
    $('.controller-full-face').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="controller-full-face-choice" id="controller-full-face-upload">+</br>正面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.controller-full-face-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="controller-full-face-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="controller-full-face-close"></i>';
                $('.apply-main1-id').css({'height':'152px'});
                $('.controller-full-face').css({'width':'152px','height':'152px'});
                $('.controller-full-face .selectbtn').css({'display':'none'});
                $('.controller-full-face .uploadify-button').css({'display':'none'});
                $('.controller-full-face .uploadify-queue').css({'display':'none'});
                $('.controller-full-face .uploadify-queue-item').css({'display':'none'});
                $('.controller-full-face').append(innerHtml);
            }
        }
    });
    //管理者身份证正面删除
    $(document).on('click','.controller-full-face-close',function () {
        $('.controller-full-face-img').remove();
        if($('.controller-reverse-photo').height() == '152'){
            $('.apply-main1-id').css({'height':'152px'});
        }else {
            $('.apply-main1-id').css({'height':'59px'});
        }
        $('.controller-full-face').css({'width':'59px','height':'59px'});
        $('.controller-full-face .selectbtn').css({'display':'none'});
        $('.controller-full-face .uploadify-button').css({'display':'inline-block'});
        $('.controller-full-face .uploadify-queue').css({'display':'inline-block'});
        $('.controller-full-face .uploadify-queue-item').css({'display':'none'});
        $('.controller-full-face-images-url').val('');
        $('.controller-full-face-close').hide();

    });
    //管理者身份证背面
    $('.controller-reverse-photo').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="controller-reverse-photo-choice" id="controller-reverse-photo-upload">+</br>反面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.controller-reverse-photo-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="controller-reverse-photo-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="controller-reverse-photo-close"></i>';
                $('.apply-main1-id').css({'height':'152px'});
                $('.controller-reverse-photo').css({'width':'152px','height':'152px'});
                $('.controller-reverse-photo .selectbtn').css({'display':'none'});
                $('.controller-reverse-photo .uploadify-button').css({'display':'none'});
                $('.controller-reverse-photo .uploadify-queue').css({'display':'none'});
                $('.controller-reverse-photo .uploadify-queue-item').css({'display':'none'});
                $('.controller-reverse-photo').append(innerHtml);
            }
        }
    });
    //管理者身份证背面删除
    $(document).on('click','.controller-reverse-photo-close',function () {
        $('.controller-reverse-photo-img').remove();
        if($('.controller-full-face').height() == '152'){
            $('.apply-main1-id').css({'height':'152px'});
        }else {
            $('.apply-main1-id').css({'height':'59px'});
        }
        $('.controller-reverse-photo').css({'width':'59px','height':'59px'});
        $('.controller-reverse-photo .selectbtn').css({'display':'none'});
        $('.controller-reverse-photo .uploadify-button').css({'display':'inline-block'});
        $('.controller-reverse-photo .uploadify-queue').css({'display':'inline-block'});
        $('.controller-reverse-photo .uploadify-queue-item').css({'display':'none'});
        $('.controller-reverse-photo-images-url').val('');
        $('.controller-reverse-photo-close').hide();
    });

    //电话号码正则
    var regTell=/^[0-9/-]{11,32}$/;
    //身份证校验
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    //公司信息页信息校验
    function comInfoCheck() {
        var comNameValue = $('.company-name input').val();//公司名称
        var comCityId = $("input[name='cityId']").val();//省
        var comCountyId = $("input[name='countyId']").val();//市
        var comAddressValue = $('.company-address input').val();//公司详细地址
        var comNatureValue = $('#company-nature option:selected').text();//公司性质
        var comTradeValue = $('#trade option:selected').text();//所属行业
        var comSizeValue = $('#company-size option:selected').text();//公司规模
        var comDateValue = $('.main1-date .textbox-value').val();//成立日期
        var comChooseLicenseValue = $('#main1-choose-license option:selected').text();//执照类型
        var comOrganValue = $('.company-organization input').val();//组织结构代码
        var comOrganImgValue = $('.organization-images-url').val();//组织机构证
        var comTypeValue = $('#organization-type option:selected').text();//机构类型
        var comTimeStar1Value = $('.time-slot1-star .textbox-value').val();//有效时间段开始
        var comTimeEnd1Value = $('.time-slot1-end .textbox-value').val();//有效时间段结束
        var comTaxIdValue = $('.company-tax-id input').val();//税务登记号
        var comTaxImgValue = $('.tax-images-url').val();//税务登记证
        var comBusinessValue = $('.business-license input').val();//营业执照号
        var comSyncreticValue = $('.company-syncretic input').val();//统一社会信用代码
        var comBusinessImgValue = $('.license-images-url').val();//营业执照证
        var comTimeStar2Value = $('.time-slot2-star .textbox-value').val();//营业日期开始
        var comTimeEnd2Value = $('.time-slot2-end .textbox-value').val();//营业日期结束
        var comLegalValue = $('.legal-person input').val();//法人
        var comTellValue = $('.company-tell input').val();//电话
        var comTaxpayerValue = $('.company-taxpayer input').val();//纳税人识别号
        var comAccessoryImgValue = $('.accessory-images-url').val();//说明附件

        var comName = $('.company-name input');//公司名称
        var comCity = $('.main1-city1 .textbox');//省 市
        var comAddress = $('.company-address input');//公司详细地址
        var comNature = $('#company-nature');//公司性质
        var comTrade = $('#trade');//所属行业
        var comSize = $('#company-size');//公司规模
        var comDate = $('.main1-date .textbox');//成立日期
        var comChooseLicense = $('#main1-choose-license');//执照类型
        var comOrgan = $('.company-organization input');//组织结构代码
        var comOrganImg = $('.organization .uploadify-button');//组织机构证
        var comType = $('#organization-type');//机构类型
        var comTimeStar1 = $('.time-slot1-star .textbox');//有效时间段开始
        var comTimeEnd1 = $('.time-slot1-end .textbox');//有效时间段结束
        var comTaxId = $('.company-tax-id input');//税务登记号
        var comTaxImg = $('.tax .uploadify-button');//税务登记证
        var comBusiness = $('.business-license input');//营业执照号
        var comSyncretic = $('.company-syncretic input');//统一社会信用代码
        var comBusinessImg = $('.license .uploadify-button');//营业执照证
        var comTimeStar2 = $('.time-slot2-star .textbox');//营业日期开始
        var comTimeEnd2 = $('.time-slot2-end .textbox');//营业日期结束
        var comLegal = $('.legal-person input');//法人
        var comTell = $('.company-tell input');//电话
        var comTaxpayer = $('.company-taxpayer input');//纳税人识别号
        // var comAccessoryImg = $('.accessory-images-url');//说明附件

        var comNameErr = $('.company-name-error');
        var comCityErr = $('.company-city-error');
        var comAddressErr = $('.company-address-error');
        var comNatureErr = $('.company-nature-error');
        var comTradeErr = $('.company-trade-error');
        var comSizeErr = $('.company-size-error');
        var comDateErr = $('.main1-date-error');
        var comOrganErr = $('.company-organization-error');
        var comOrganImgErr = $('.main1-organization-prompt');
        var comTypeErr = $('.organization-type-error');
        var comTimeErr1 = $('.time-slot1-error');
        var comTaxIdErr = $('.company-tax-id-error');
        var comTaxImgErr = $('.main1-tax-prompt');
        var comBusinessErr = $('.business-license-error');
        var comSyncreticErr = $('.company-syncretic-error');
        var comBusinessImgErr = $('.main1-license-prompt');
        var comTimeErr2 = $('.time-slot2-error');
        var comLegalErr = $('.legal-person-error');
        var comTellErr = $('.company-tell-error');
        var comTaxpayerErr = $('.company-taxpayer-error');
        var comAccessoryImgErr = $('.main1-accessory-error');


        //验证公司名称
        if(comNameValue === '' || comNameValue === undefined || comNameValue === null){
            comNameErr.addClass('error-show-color');
            comName.css('border-color','#ff3a3a');
            return false;
        }else{
            comNameErr.removeClass('error-show-color');
            comName.css('border-color','#dadada');
        }

        //公司所在地
        if(((comCityId === '' || comCityId === undefined || comCityId === null)||(comCountyId === ''|| comCountyId === undefined || comCountyId === null))){
            comCityErr.removeClass('error-hidden');
            comCity.css('border-color','#ff3a3a');
            return false;
        }else{
            comCityErr.addClass('error-hidden');
            comCity.css('border-color','#dadada');
        }

        //详细地址
        if(comAddressValue === '' || comAddressValue === undefined || comAddressValue === null){
            comAddressErr.addClass('error-show-color');
            comAddress.css('border-color','#ff3a3a');
            return false;
        }else{
            comAddressErr.removeClass('error-show-color');
            comAddress.css('border-color','#dadada');
        }

        //公司性质
        if(comNatureValue == '请选择' || comNatureValue === '' || comNatureValue === undefined || comNatureValue === null){
            comNatureErr.removeClass('error-hidden');
            comNature.css('border-color','#ff3a3a');
            return false;
        }else {
            comNatureErr.addClass('error-hidden');
            comNature.css('border-color','#dadada');
        }

        //所属行业
        if(comTradeValue == '请选择' || comTradeValue === '' || comTradeValue === undefined || comTradeValue === null){
            comTradeErr.removeClass('error-hidden');
            comTrade.css('border-color','#ff3a3a');
            return false;
        }else {
            comTradeErr.addClass('error-hidden');
            comTrade.css('border-color','#dadada');
        }

        //公司规模
        if(comSizeValue == '请选择' || comSizeValue === '' || comSizeValue === undefined || comSizeValue === null){
            comSizeErr.removeClass('error-hidden');
            comSize.css('border-color','#ff3a3a');
            return false;
        }else {
            comSizeErr.addClass('error-hidden');
            comSize.css('border-color','#dadada');
        }

        //成立日期
        if(comDateValue === '' || comDateValue === undefined || comDateValue === null){
            comDateErr.removeClass('error-hidden');
            comDate.css('border-color','#ff3a3a');
            return false;
        }else{
            comDateErr.addClass('error-hidden');
            comDate.css('border-color','#dadada');
        }

        //执照类型选择
        if(comChooseLicenseValue == '企业三证'){
            //组织结构代码
            if(comOrganValue === '' || comOrganValue === undefined || comOrganValue === null){
                comOrganErr.addClass('error-show-color');
                comOrgan.css('border-color','#ff3a3a');
                return false;
            }else{
                comOrganErr.removeClass('error-show-color');
                comOrgan.css('border-color','#dadada');
            }

            //组织结构证
            if(comOrganImgValue === '' || comOrganImgValue === undefined || comOrganImgValue == null){
                comOrganImgErr.addClass('prompt-show-color');
                comOrganImg.css('border-color','#ff3a3a');
                return false;
            }else{
                comOrganImgErr.removeClass('prompt-show-color');
                comOrganImg.css('border-color','#808080');
            }

            //机构类型
            if(comTypeValue == '请选择' || comTypeValue === '' || comTypeValue === undefined || comTypeValue === null){
                comTypeErr.removeClass('error-hidden');
                comType.css('border-color','#ff3a3a');
                return false;
            }else {
                comTypeErr.addClass('error-hidden');
                comType.css('border-color','#dadada');
            }

            //有效时间段
            if(comTimeStar1Value === '' || comTimeStar1Value === undefined || comTimeStar1Value === null){
                comTimeErr1.removeClass('error-hidden');
                comTimeStar1.css('border-color','#ff3a3a');
                return false;
            }else{
                comTimeErr1.addClass('error-hidden');
                comTimeStar1.css('border-color','#dadada');
            }
            if(comTimeEnd1Value === '' || comTimeEnd1Value === undefined || comTimeEnd1Value === null){
                comTimeErr1.removeClass('error-hidden');
                comTimeEnd1.css('border-color','#ff3a3a');
                return false;
            }else{
                comTimeErr1.addClass('error-hidden');
                comTimeEnd1.css('border-color','#dadada');
            }

            //税务登记号
            if(comTaxIdValue === '' || comTaxIdValue === undefined || comTaxIdValue === null){
                comTaxIdErr.addClass('error-show-color');
                comTaxId.css('border-color','#ff3a3a');
                return false;
            }else{
                comTaxIdErr.removeClass('error-show-color');
                comTaxId.css('border-color','#dadada');
            }

            //税务登记证
            if(comTaxImgValue === '' || comTaxImgValue === undefined || comTaxImgValue == null){
                comTaxImgErr.addClass('prompt-show-color');
                comTaxImg.css('border-color','#ff3a3a');
                return false;
            }else{
                comTaxImgErr.removeClass('prompt-show-color');
                comTaxImg.css('border-color','#808080');
            }

            //营业执照号
            if(comBusinessValue === '' || comBusinessValue === undefined || comBusinessValue === null){
                comBusinessErr.addClass('error-show-color');
                comBusiness.css('border-color','#ff3a3a');
                return false;
            }else{
                comBusinessErr.removeClass('error-show-color');
                comBusiness.css('border-color','#dadada');
            }
        }else {
            //统一社会信用代码
            if(comSyncreticValue === '' || comSyncreticValue === undefined || comSyncreticValue === null){
                comSyncreticErr.addClass('error-show-color');
                comSyncretic.css('border-color','#ff3a3a');
                return false;
            }else{
                comSyncreticErr.removeClass('error-show-color');
                comSyncretic.css('border-color','#dadada');
            }
        }

        //营业执照证
        if(comBusinessImgValue === '' || comBusinessImgValue === undefined || comBusinessImgValue == null){
            comBusinessImgErr.addClass('prompt-show-color');
            comBusinessImg.css('border-color','#ff3a3a');
            return false;
        }else{
            comBusinessImgErr.removeClass('prompt-show-color');
            comBusinessImg.css('border-color','#808080');
        }

        //营业日期
        if(comTimeStar2Value === '' || comTimeStar2Value === undefined || comTimeStar2Value === null){
            comTimeErr2.removeClass('error-hidden');
            comTimeStar2.css('border-color','#ff3a3a');
            return false;
        }else{
            comTimeErr2.addClass('error-hidden');
            comTimeStar2.css('border-color','#dadada');
        }
        if(comTimeEnd2Value === '' || comTimeEnd2Value === undefined || comTimeEnd2Value === null){
            comTimeErr2.removeClass('error-hidden');
            comTimeEnd2.css('border-color','#ff3a3a');
            return false;
        }else{
            comTimeErr2.addClass('error-hidden');
            comTimeEnd2.css('border-color','#dadada');
        }

        //法人代表
        if(comLegalValue === '' || comLegalValue === undefined || comLegalValue === null){
            comLegalErr.removeClass('error-hidden');
            comLegal.css('border-color','#ff3a3a');
            return false;
        }else{
            comLegalErr.addClass('error-hidden');
            comLegal.css('border-color','#dadada');
        }

        //公司电话
        if(!(regTell.test(comTellValue))){
            comTellErr.addClass('error-show-color');
            comTell.css('border-color','#ff3a3a');
            return false;
        }else {
            comTellErr.removeClass('error-show-color');
            comTell.css('border-color','#dadada');
        }

        //纳税人识别号
        if(comTaxpayerValue === '' || comTaxpayerValue === undefined || comTaxpayerValue === null){
            comTaxpayerErr.removeClass('error-hidden');
            comTaxpayer.css('border-color','#ff3a3a');
            return false;
        }else{
            comTaxpayerErr.addClass('error-hidden');
            comTaxpayer.css('border-color','#dadada');
        }

        //说明附件
        if(comAccessoryImgValue === '' || comAccessoryImgValue === undefined || comAccessoryImgValue == null){
            comAccessoryImgErr.addClass('error-show-color');
            return false;
        }else{
            comAccessoryImgErr.removeClass('error-show-color');
        }

        return true;
    };
    
    //公司管理者信息校验
    function comControllerCheck() {
        var comConName = $('.company-controller-name input');//管理者姓名
        var comConId = $('.company-controller-id input');//管理者证件号码
        var comConFace = $('.controller-full-face .uploadify-button');//管理者证件照正面
        var comConBack = $('.controller-reverse-photo .uploadify-button');//管理者证件照背面
        var comConDepartment = $('.company-controller-department input');//管理者所属部门
        var comConTerm = $('.main1-term .textbox-invalid');//授权委托书有效期

        var comConNameValue = $('.company-controller-name input').val();
        var comConIdValue = $('.company-controller-id input').val();
        var comConFaceValue = $('.controller-full-face-images-url').val();
        var comConBackValue = $('.controller-reverse-photo-images-url').val();
        var comConDepartmentValue = $('.company-controller-department input').val();
        var comConProxyValue = $('.proxy-images-url').val();//授权委托书
        var comConTermValue = $('.main1-term .textbox-value').val();

        var comConNameErr = $('.company-controller-name-error');
        var comConIdErr = $('.company-controller-id-error');
        var comConPhotoErr = $('.company-controller-photo-error');
        var comConDepartmentErr = $('.ompany-controller-department-error');
        var comConProxyErr = $('.main1-proxy-error');
        var comConTermErr = $('.main1-term-error');

        //管理者姓名
        if(comConNameValue === '' || comConNameValue === undefined || comConNameValue === null){
            comConNameErr.removeClass('error-hidden');
            comConName.css('border-color','#ff3a3a');
            return false;
        }else{
            comConNameErr.addClass('error-hidden');
            comConName.css('border-color','#dadada');
        }

        //管理者证件号码
        if(comConIdValue === '' || comConIdValue === undefined || comConIdValue === null){
            comConIdErr.removeClass('error-hidden');
            comConId.css('border-color','#ff3a3a');
            comConIdErr.text('请输入证件号码');
            return false;
        }else if(!regIdNo.test(comConIdValue)){
            comConIdErr.removeClass('error-hidden');
            comConId.css('border-color','#ff3a3a');
            comConIdErr.text('请输入正确的证件号码');
            return false;
        }else{
            comConIdErr.addClass('error-hidden');
            comConId.css('border-color','#dadada');
            comConIdErr.text('');
        }

        //证件照
        if(comConFaceValue === '' || comConFaceValue === undefined || comConFaceValue === null){
            comConPhotoErr.addClass('error-show-color');
            comConFace.css('border-color','#ff3a3a');
            return false;
        }else{
            comConPhotoErr.removeClass('error-show-color');
            comConFace.css('border-color','#808080');
        }
        if(comConBackValue === '' || comConBackValue === undefined || comConBackValue === null){
            comConPhotoErr.addClass('error-show-color');
            comConBack.css('border-color','#ff3a3a');
            return false;
        }else{
            comConPhotoErr.removeClass('error-show-color');
            comConBack.css('border-color','#808080');
        }

        //所属部门
        if(comConDepartmentValue === '' || comConDepartmentValue === undefined || comConDepartmentValue === null){
            comConDepartmentErr.removeClass('error-hidden');
            comConDepartment.css('border-color','#ff3a3a');
            return false;
        }else{
            comConDepartmentErr.addClass('error-hidden');
            comConDepartment.css('border-color','#dadada');
        }

        //授权委托书
        if(comConProxyValue === '' || comConProxyValue === undefined || comConProxyValue === null){
            comConProxyErr.addClass('error-show-color');
            return false;
        }else{
            comConProxyErr.removeClass('error-show-color');
        }

        //授权委托书有效期
        if(comConTermValue === '' || comConTermValue === undefined || comConTermValue === null){
            comConTermErr.removeClass('error-hidden');
            comConTerm.css('border-color','#ff3a3a');
            return false;
        }else{
            comConTermErr.addClass('error-hidden');
            comConTerm.css('border-color','#dadada');
        }

        return true;
    }
    
    //切换步骤
    //第一步的下一步按钮
    $(document).on('click','.company-btn-next',function () {
        if(comInfoCheck()){
            $('.company-apply-content1').addClass('company-apply-content-hiden');
            $('.company-apply-content2').removeClass('company-apply-content-hiden');
        }
    });
    //第二步的提交
    $(document).on('click','.controller-btn-next',function () {
        if(comControllerCheck()){
            $('.company-apply-content2').addClass('company-apply-content-hiden');
            $('.company-apply-content3').removeClass('company-apply-content-hiden');
        }
    });
    //第二部的上一步
    $(document).on('click','.controller-btn-back',function () {
        $('.company-apply-content2').addClass('company-apply-content-hiden');
        $('.company-apply-content1').removeClass('company-apply-content-hiden');
    });
    /*/!*第三步的提交*!/
    $(document).on('click','.company-btn-next',function () {
        $('.company-apply-content2').addClass('company-apply-content-hiden');
        $('.company-apply-content3').removeClass('company-apply-content-hiden');
    })*/
});