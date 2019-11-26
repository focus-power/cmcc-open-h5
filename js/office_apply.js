$(function () {
    //图片上传
    var routeUrl = "http://www.lertour.com";
    //组织机构代码上传
    $('.office-organization').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="office-organization-choice" id="office-organization-upload"><img src="../images/user/user-icon08.png" alt=""></div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.office-organization-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="office-organization-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="office-organization-close"></i>';
                $('.main-office-organization').css({'height':'152px'});
                $('.office-organization').css({'width':'152px','height':'152px'});
                $('.office-organization .selectbtn').css({'display':'none'});
                $('.office-organization .uploadify-button').css({'display':'none'});
                $('.office-organization .uploadify-queue').css({'display':'none'});
                $('.office-organization .uploadify-queue-item').css({'display':'none'});
                $('.office-organization').append(innerHtml);
            }
        }
    });
    //组织机构代码上传 删除图片
    $(document).on('click','.office-organization-close',function () {
        $('.office-organization-img').remove();
        $('.main-office-organization').css({'height':'80px'});
        $('.office-organization').css({'width':'80px','height':'80px'});
        $('.office-organization .selectbtn').css({'display':'none'});
        $('.office-organization .uploadify-button').css({'display':'inline-block'});
        $('.office-organization .uploadify-queue').css({'display':'inline-block'});
        $('.office-organization .uploadify-queue-item').css({'display':'none'});
        $('.office-organization-images-url').val('');
        $('.office-organization-close').hide();
    });

    //管理者身份信息上传
    //管理者身份证正面
    $('.office-full-face').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="office-full-face-choice" id="office-full-face-upload">+</br>正面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.office-full-face-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="office-full-face-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="office-full-face-close"></i>';
                $('.main-controller-id').css({'height':'152px'});
                $('.office-full-face').css({'width':'152px','height':'152px'});
                $('.office-full-face .selectbtn').css({'display':'none'});
                $('.office-full-face .uploadify-button').css({'display':'none'});
                $('.office-full-face .uploadify-queue').css({'display':'none'});
                $('.office-full-face .uploadify-queue-item').css({'display':'none'});
                $('.office-full-face').append(innerHtml);
            }
        }
    });
    //管理者身份证正面删除
    $(document).on('click','.office-full-face-close',function () {
        $('.office-full-face-img').remove();
        if($('.office-reverse-photo').height() == '152'){
            $('.main-controller-id').css({'height':'152px'});
        }else {
            $('.main-controller-id').css({'height':'59px'});
        }
        $('.office-full-face').css({'width':'59px','height':'59px'});
        $('.office-full-face .selectbtn').css({'display':'none'});
        $('.office-full-face .uploadify-button').css({'display':'inline-block'});
        $('.office-full-face .uploadify-queue').css({'display':'inline-block'});
        $('.office-full-face .uploadify-queue-item').css({'display':'none'});
        $('.office-full-face-images-url').val('');
        $('.office-full-face-close').hide();

    });
    //管理者身份证背面
    $('.office-reverse-photo').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<span class="office-reverse-photo-choice" id="office-reverse-photo-upload">+</br>反面</span>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.jpg;*.png;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.office-reverse-photo-images-url').val(json_data.message);
                var now_images_url =  json_data.message;
                var innerHtml = '<img class="office-reverse-photo-img" src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="office-reverse-photo-close"></i>';
                $('.main-controller-id').css({'height':'152px'});
                $('.office-reverse-photo').css({'width':'152px','height':'152px'});
                $('.office-reverse-photo .selectbtn').css({'display':'none'});
                $('.office-reverse-photo .uploadify-button').css({'display':'none'});
                $('.office-reverse-photo .uploadify-queue').css({'display':'none'});
                $('.office-reverse-photo .uploadify-queue-item').css({'display':'none'});
                $('.office-reverse-photo').append(innerHtml);
            }
        }
    });
    //管理者身份证背面删除
    $(document).on('click','.office-reverse-photo-close',function () {
        $('.office-reverse-photo-img').remove();
        if($('.office-full-face').height() == '152'){
            $('.main-controller-id').css({'height':'152px'});
        }else {
            $('.main-controller-id').css({'height':'59px'});
        }
        $('.office-reverse-photo').css({'width':'59px','height':'59px'});
        $('.office-reverse-photo .selectbtn').css({'display':'none'});
        $('.office-reverse-photo .uploadify-button').css({'display':'inline-block'});
        $('.office-reverse-photo .uploadify-queue').css({'display':'inline-block'});
        $('.office-reverse-photo .uploadify-queue-item').css({'display':'none'});
        $('.office-reverse-photo-images-url').val('');
        $('.office-reverse-photo-close').hide();
    });

    //所属地区
    $('#cityId1').combobox({
        valueField:'code',
        textField:'name_ch',
        onSelect:function (record) {
            var county = record.city;
            $('#countyId1').combobox('clear');
            $('#countyId1').combobox('loadData',county);
        }
    });
    $.getJSON('../data/city_json.txt',function(data){
        $('#cityId1').combobox('loadData',data);
        $('#cityId1').combobox('select','请选择');
    });

    //公司规模
    var officeSize = {"00":"1-50","01":"50-100","02":"100-200","03":"200以上"};
    var officeSizeStr = '';
    jQuery.each(officeSize, function(i, val) {
        officeSizeStr+='<option>'+val+'</option>';
    });
    $('.office-size').append(officeSizeStr);

    //单位信息页附件图片或者文件 上传
    var now_url;
    $('.office-accessory').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="office-accessory-choice" id="office-accessory-upload">上传附件</div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.doc;*.docx;*.jpg;*.pdf;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.office-accessory-images-url').val(json_data.message);
                var now_size = bytesToSize(file.size);
                var now_name = file.name;
                var now_images_url =  json_data.message;
                var innerHtml;
                now_url = now_images_url.split('.')[1];//判断传入的文件类型
                if( now_url === 'doc' || now_url === 'docx'){
                    innerHtml = '<div class="office-accessory-text" style=""><img src="../images/user/user-icon09.png" alt="">'+now_name +' '+ now_size+'<i class="office-accessory-close"></i></div>';
                }
                else if( now_url === 'pdf'){
                    innerHtml = '<div class="office-accessory-pdf" style=""><img src="../images/user/user-icon10.png" alt="">'+now_name +' '+ now_size+'<i class="office-accessory-close"></i></div>';
                }else {
                    innerHtml = '<div class="office-accessory-img" style=""><img src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="office-accessory-close"></i></div>';
                    $('.main-office-accessory').css({'height':'152px'});
                    $('.office-accessory').css({'width':'auto','height':'152px'});
                }
                $('.office-accessory .selectbtn').css({'display':'none'});
                $('.office-accessory .uploadify-button').css({'display':'none'});
                $('.office-accessory .uploadify-queue').css({'display':'none'});
                $('.office-accessory .uploadify-queue-item').css({'display':'none'});
                $('.office-accessory').append(innerHtml);
            }else {
                $('.office-accessory .uploadify-queue-item').css({'display':'none','opacity':'0','overflow':'hidden'});
                alert("上传文件不能为空")
            }
        }
    });
    //删除公司信息页附件图片或者文件
    $(document).on('click','.office-accessory-close',function () {
        if( now_url === 'doc' || now_url === 'docx'){
            $('.office-accessory-text').remove();
        }else if( now_url === 'pdf'){
            $('.office-accessory-pdf').remove();
        }else{
            $('.office-accessory-img').remove();
            $('.main-office-accessory').css({'height':'40px'});
            $('.office-accessory').css({'width':'auto','height':'40px'});
        }
        $('.office-accessory .selectbtn').css({'display':'none'});
        $('.office-accessory .uploadify-button').css({'display':'inline-block'});
        $('.office-accessory .uploadify-queue').css({'display':'inline-block'});
        $('.office-accessory .uploadify-queue-item').css({'display':'none'});
        $('.office-accessory-images-url').val('');
        $('.office-accessory-close').hide();
    });

    //授权委托书上传
    var now_url1;
    $('.office-proxy').Huploadify({
        'auto': true,//是否开启自动上传
        'fileObjName': 'file',
        'uploader': 'http://upload.whf0.com/upload?app_name=ou51_com',
        'buttonText': '<div class="office-proxy-choice" id="office-proxy-upload">上传附件</div>',
        'multi': false,
        'showUploadedSize': false,//是否实时显示已上传的文件大小，如1M/2M
        'fileTypeExts': '*.doc;*.docx;*.jpg;*.pdf;',
        'fileSizeLimit': 1 * 1024,
        'removeTimeout': 1000,//上传完成后进度条的消失时间，单位毫秒
        onUploadSuccess: function (file, data, response) {
            var json_data = eval('(' + data + ')');
            if (json_data.status) {
                $('.office-proxy-images-url').val(json_data.message);
                var now_size = bytesToSize(file.size);
                var now_name = file.name;
                var now_images_url =  json_data.message;
                var innerHtml;
                now_url1 = now_images_url.split('.')[1];//判断传入的文件类型
                if( now_url1 === 'doc' || now_url1 === 'docx'){
                    innerHtml = '<div class="office-proxy-text" style=""><img src="../images/user/user-icon09.png" alt="">'+now_name +' '+ now_size+'<i class="office-proxy-close"></i></div>';
                }
                else if( now_url1 === 'pdf'){
                    innerHtml = '<div class="office-proxy-pdf" style=""><img src="../images/user/user-icon10.png" alt="">'+now_name +' '+ now_size+'<i class="office-proxy-close"></i></div>';
                }else {
                    innerHtml = '<div class="office-proxy-img" style=""><img src="' +routeUrl + now_images_url + '" width="150" height="150">'+'<i class="office-proxy-close"></i></div>';
                    $('.main-office-proxy').css({'height':'152px'});
                    $('.office-proxy').css({'width':'auto','height':'152px'});
                }
                $('.office-proxy .selectbtn').css({'display':'none'});
                $('.office-proxy .uploadify-button').css({'display':'none'});
                $('.office-proxy .uploadify-queue').css({'display':'none'});
                $('.office-proxy .uploadify-queue-item').css({'display':'none'});
                $('.office-proxy').append(innerHtml);
            }else {
                alert("上传文件不能为空")
            }
        }
    });
    //删除图片或者文件
    $(document).on('click','.office-proxy-close',function () {
        if( now_url1 === 'doc' || now_url1 === 'docx'){
            $('.office-proxy-text').remove();
        }else if( now_url1 === 'pdf'){
            $('.office-proxy-pdf').remove();
        }else{
            $('.office-proxy-img').remove();
            $('.main-office-proxy').css({'height':'40px'});
            $('.office-proxy').css({'width':'auto','height':'40px'});
        }
        $('.office-proxy .selectbtn').css({'display':'none'});
        $('.office-proxy .uploadify-button').css({'display':'inline-block'});
        $('.office-proxy .uploadify-queue').css({'display':'inline-block'});
        $('.office-proxy .uploadify-queue-item').css({'display':'none'});
        $('.office-proxy-images-url').val('');
        $('.office-proxy-close').hide();
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

    //委托书有效期
    $('#box2').datebox({
        panelWidth: 376,
        panelHeight: 200
    });

    //身份证校验
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    //单位信息验证
    function officeInfoCheck() {
        var offName = $('.office-name input');//机构全称
        var offOrgan = $('.office-organization-code input');//组织机构代码
        var offOrganImg = $('.office-organization .uploadify-button');//组织机构证件
        var offType = $('.office-organization-type');//机构类型
        var offTimeStar1 = $('.time-slot1-star .textbox');//有效时间段 开始
        var offTimeEnd1 = $('.time-slot1-end .textbox');//有效时间段 结束
        var offCity = $('.main-city1 .textbox');//所属地区
        var offAddress = $('.office-address input');//详细地址
        var offSize = $('.office-size');//公司规模
        var offTaxpayer = $('.office-taxpayer input');//纳税人识别号
        // var offAccessoryImg = $('');//说明附件

        var offNameValue = $('.office-name input').val();
        var offOrganValue = $('.office-organization-code input').val();
        var offOrganImgValue = $('.office-organization-images-url').val();
        var offTypeValue = $('.office-organization-type option:selected').text();
        var offTimeStar1Value = $('.time-slot1-star .textbox-value').val();
        var offTimeEnd1Value = $('.time-slot1-end .textbox-value').val();
        var offCityId = $("input[name='cityId1']").val();//省
        var offCountyId = $("input[name='countyId1']").val();//市
        var offAddressValue = $('.office-address input').val();
        var offSizeValue = $('.office-size option:selected').text();
        var offTaxpayerValue = $('.office-taxpayer input').val();
        var offAccessoryImgValue = $('.office-accessory-images-url').val();

        var offNameErr = $('.office-name-error');
        var offOrganErr = $('.office-organization-code-error');
        var offOrganImgErr = $('.main-office-organization-prompt');
        var offTypeErr = $('.office-organization-type-error');
        var offTime1Err = $('.main-time-slot1-error');
        var offCityErr = $('.main-city1-error');
        var offAddressErr = $('.office-address-error');
        var offSizeErr = $('.office-size-error');
        var offTaxpayerErr = $('.office-taxpayer-error');
        var offAccessoryImgErr = $('.office-accessory-error');

        //机构全称
        if(offNameValue === '' || offNameValue === undefined || offNameValue === null){
            offNameErr.addClass('main-error-color');
            offName.css('border-color','#ff3a3a');
            return false;
        }else{
            offNameErr.removeClass('main-error-color');
            offName.css('border-color','#dadada');
        }

        //组织机构代码
        if(offOrganValue === '' || offOrganValue === undefined || offOrganValue === null){
            offOrganErr.removeClass('main-error-hidden');
            offOrgan.css('border-color','#ff3a3a');
            return false;
        }else{
            offOrganErr.addClass('main-error-hidden');
            offOrgan.css('border-color','#dadada');
        }

        //组织机构证件
        if(offOrganImgValue === '' || offOrganImgValue === undefined || offOrganImgValue == null){
            offOrganImgErr.addClass('prompt-color');
            offOrganImg.css('border-color','#ff3a3a');
            return false;
        }else{
            offOrganImgErr.removeClass('prompt-color');
            offOrganImg.css('border-color','#808080');
        }

        //机构类型
        if(offTypeValue == '请选择' || offTypeValue === '' || offTypeValue === undefined || offTypeValue === null){
            offTypeErr.removeClass('main-error-hidden');
            offType.css('border-color','#ff3a3a');
            return false;
        }else {
            offTypeErr.addClass('main-error-hidden');
            offType.css('border-color','#dadada');
        }

        //有效时间段
        if(offTimeStar1Value === '' || offTimeStar1Value === undefined || offTimeStar1Value === null){
            offTime1Err.removeClass('main-error-hidden');
            offTimeStar1.css('border-color','#ff3a3a');
            return false;
        }else{
            offTime1Err.addClass('main-error-hidden');
            offTimeStar1.css('border-color','#dadada');
        }
        if(offTimeEnd1Value === '' || offTimeEnd1Value === undefined || offTimeEnd1Value === null){
            offTime1Err.removeClass('main-error-hidden');
            offTimeEnd1.css('border-color','#ff3a3a');
            return false;
        }else{
            offTime1Err.addClass('main-error-hidden');
            offTimeEnd1.css('border-color','#dadada');
        }

        //所属地区
        if(((offCityId === '' || offCityId === undefined || offCityId === null)||(offCountyId === ''|| offCountyId === undefined || offCountyId === null))){
            offCityErr.removeClass('main-error-hidden');
            offCity.css('border-color','#ff3a3a');
            return false;
        }else{
            offCityErr.addClass('main-error-hidden');
            offCity.css('border-color','#dadada');
        }

        //详细地址
        if(offAddressValue === '' || offAddressValue === undefined || offAddressValue === null){
            offAddressErr.addClass('main-error-color');
            offAddress.css('border-color','#ff3a3a');
            return false;
        }else{
            offAddressErr.removeClass('main-error-color');
            offAddress.css('border-color','#dadada');
        }

        //公司规模
        if(offSizeValue == '请选择' || offSizeValue === '' || offSizeValue === undefined || offSizeValue === null){
            offSizeErr.removeClass('main-error-hidden');
            offSize.css('border-color','#ff3a3a');
            return false;
        }else {
            offSizeErr.addClass('main-error-hidden');
            offSize.css('border-color','#dadada');
        }

        //纳税人识别号
        if(offTaxpayerValue === '' || offTaxpayerValue === undefined || offTaxpayerValue === null){
            offTaxpayerErr.addClass('main-error-color');
            offTaxpayer.css('border-color','#ff3a3a');
            return false;
        }else{
            offTaxpayerErr.removeClass('main-error-color');
            offTaxpayer.css('border-color','#dadada');
        }

        //说明附件
        if(offAccessoryImgValue === '' || offAccessoryImgValue === undefined || offAccessoryImgValue == null){
            offAccessoryImgErr.addClass('main-error-color');
            return false;
        }else{
            offAccessoryImgErr.removeClass('main-error-color');
        }

        return true;
    }

    //单位管理者验证
    function officeConInfoCheck() {
        var offConName = $('.office-controller-name input');//管理者姓名
        var offConId = $('.office-controller-id input');//管理者证件号码
        var offConFace = $('.office-full-face .uploadify-button');//管理者证件照正面
        var offConBack = $('.office-reverse-photo .uploadify-button');//管理者证件照背面
        var offConDepartment = $('.office-controller-department input');//管理者所属部门
        var offConTerm = $('.main-office-term .textbox-invalid');//授权委托书有效期

        var offConNameValue = $('.office-controller-name input').val();
        var offConIdValue = $('.office-controller-id input').val();
        var offConFaceValue = $('.office-full-face-images-url').val();
        var offConBackValue = $('.office-reverse-photo-images-url').val();
        var offConDepartmentValue = $('.office-controller-department input').val();
        var offConProxyValue = $('.office-proxy-images-url').val();//授权委托书
        var offConTermValue = $('.main-office-term .textbox-value').val();

        var offConNameErr = $('.office-controller-name-error');
        var offConIdErr = $('.office-controller-id-error');
        var offConPhotoErr = $('.main-controller-id-error');
        var offConDepartmentErr = $('.office-controller-department-error');
        var offConProxyErr = $('.office-proxy-error');
        var offConTermErr = $('.main-office-term-error');

        //管理者姓名
        if(offConNameValue === '' || offConNameValue === undefined || offConNameValue === null){
            offConNameErr.removeClass('main-error-hidden');
            offConName.css('border-color','#ff3a3a');
            return false;
        }else{
            offConNameErr.addClass('main-error-hidden');
            offConName.css('border-color','#dadada');
        }

        //管理者证件号码
        if(offConIdValue === '' || offConIdValue === undefined || offConIdValue === null){
            offConIdErr.removeClass('main-error-hidden');
            offConId.css('border-color','#ff3a3a');
            offConIdErr.text('请输入证件号码');
            return false;
        }else if(!regIdNo.test(offConIdValue)){
            offConIdErr.removeClass('main-error-hidden');
            offConId.css('border-color','#ff3a3a');
            offConIdErr.text('请输入正确的证件号码');
            return false;
        }else{
            offConIdErr.addClass('main-error-hidden');
            offConId.css('border-color','#dadada');
            offConIdErr.text('');
        }

        //证件照
        if(offConFaceValue === '' || offConFaceValue === undefined || offConFaceValue === null){
            offConPhotoErr.addClass('main-error-color');
            offConFace.css('border-color','#ff3a3a');
            return false;
        }else{
            offConPhotoErr.removeClass('main-error-color');
            offConFace.css('border-color','#808080');
        }
        if(offConBackValue === '' || offConBackValue === undefined || offConBackValue === null){
            offConPhotoErr.addClass('main-error-color');
            offConBack.css('border-color','#ff3a3a');
            return false;
        }else{
            offConPhotoErr.removeClass('main-error-color');
            offConBack.css('border-color','#808080');
        }

        //所属部门
        if(offConDepartmentValue === '' || offConDepartmentValue === undefined || offConDepartmentValue === null){
            offConDepartmentErr.removeClass('main-error-hidden');
            offConDepartment.css('border-color','#ff3a3a');
            return false;
        }else{
            offConDepartmentErr.addClass('main-error-hidden');
            offConDepartment.css('border-color','#dadada');
        }

        //授权委托书
        if(offConProxyValue === '' || offConProxyValue === undefined || offConProxyValue === null){
            offConProxyErr.addClass('main-error-color');
            return false;
        }else{
            offConProxyErr.removeClass('main-error-color');
        }

        //授权委托书有效期
        if(offConTermValue === '' || offConTermValue === undefined || offConTermValue === null){
            offConTermErr.removeClass('main-error-hidden');
            offConTerm.css('border-color','#ff3a3a');
            return false;
        }else{
            offConTermErr.addClass('main-error-hidden');
            offConTerm.css('border-color','#dadada');
        }

        return true;
    }

    //第一步的下一步
    $(document).on('click','.office-btn-next',function () {
        if(officeInfoCheck()){
            $('.office-apply-content1').addClass('office-apply-content-hidden');
            $('.office-apply-content2').removeClass('office-apply-content-hidden');
            $('.choose-list2').addClass('choose-color');
        }
    });

    //第二步的下一步
    $(document).on('click','.controller-btn-next',function () {
        if(officeConInfoCheck()){
            $('.office-apply-content2').addClass('office-apply-content-hidden');
            $('.office-apply-content3').removeClass('office-apply-content-hidden');
            $('.choose-list3').addClass('choose-color');
        }
    });
    //第二步的上一步
    $(document).on('click','.controller-btn-back',function () {
        $('.office-apply-content2').addClass('office-apply-content-hidden');
        $('.office-apply-content1').removeClass('office-apply-content-hidden');
        $('.choose-list2').removeClass('choose-color');
    })
});