var api_json={
    "ability": [
    {
        "id": "1",
        "event_code":"HOME_api_txfw",
        "marketing_code":"API1",
        "name": "通信服务能力",
        "imgUrl": "images/apiImg/tongxin.png",
        "description": "包括音视频、消息等能力",
        "ability_menu": "images/apiMenu/menuIcon_01.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_mbdx",
                "so_more_event_code":"API_moredetail_hyyysn",
                "online_event_code":"API_orderonline_hyyysn",
                "float_event_code":"Float_API_mbdx",
                "event_code_new":"HOME_api_txfw_mbdx",
                "sub_name": "模板短信",
                "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                "description": "通过API的方式，提供发送模板短信的能力，客户在发送前先提交模板给中国移动进行审核，审核通过后，客户可通过系统接口下发符合模板内容的短信。",
                "ability_icon":"data/images/api/api1-1.png",
                "guideline_img": "images/apiImg_new/guideline/guideline_five1.png",

                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "物流通知",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/wuliutongzhi_banner.png",
                        "scene_description": "当物流状态发生变化时，系统自动下发发货通知、收货提醒等。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "会议通知",
                        "scene_icon": "images/apiImg_new/scene/xiaoxi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xiaoxi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/huiyitongzhi_banner.png",
                        "scene_description": "在线发起会议创建、更改时间等操作，以短信形式发送给参会人。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "验证码发送",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yanzhengma_banner.png",
                        "scene_description": "客户提交验证码模板，审核通过后直接调用模板短信接口触发验证码发送。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "自定义模板",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "支持自定义短信模版，模版审核通过后可直接使用。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "全网端口",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "支持全国范围内的移动、联通、电信短信业务。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "安全加密",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "提供数据安全加密认证，保证用户数据安全。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "成为合作伙伴",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "开通能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "配置能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "调用能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "5",
                        "guideline_name": "产品优化与运营",
                        "guideline_description": ""
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "发送普通短信",
                        "sub_api_desc": "HTTP客户端向云MAS平台发送请求，带上相应的请求参数，云MAS平台接收请求，并进行验证，验证通过后进行短信发送。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "发送模板短信",
                        "sub_api_desc": "模板短信发送，HTTP客户端向云MAS平台发送请求，根据指定模板ID，传入模板所需参数发送短信，云MAS平台接收请求，并进行验证，验证通过后进行短信发送。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "推送状态报告",
                        "sub_api_desc": "云MAS平台将提交报告采用POST方式推送至开户时设定的HTTP 地址，如果推送失败，两秒后将再次推送，连续失败三次后将丢弃数据。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "推送上行短信",
                        "sub_api_desc": "云MAS平台将上行短信采用POST方式推送至开户时设定的HTTP地址，如果推送失败，两秒后将再次推送，连续失败三次后将丢弃数据。",
                        "sub_api_type": "通信服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "移动认证",
                        "recommen_description": "是中国移动面向移动互联网应用提供的登录及认证服务。基于运营商..."
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网应用开发",
                        "recommen_description": "OneNET平台提供近300种API包括：设备管理、数据管理..."
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                        
                        "recommen_name": "AndLink",
                        "recommen_description": "基于中国移动智能网关的And-link快连方案免除了常用的智..."
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "和包支付能力",
                        "recommen_description": "支持商户通过在移动端应用APP中集成和包支付能力开放SDK调..."
                    }
                ],
                "sub_api_owner": "中国移动行业应用使能平台",
                "detail_url": "http://112.35.23.8:1080/open_devportal/productIntroductionAction.action?eaId=1",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/guowangdianli_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/guowangdianli_logo.jpg",
                        "time": "",
                        "desc":"国网湖南电力有限公司通过数据专线接入云MAS业务平台，以接口对接方式接入平台进行电力检修、缴费、催缴等模板短信发送。",
                        "case_details_title": "国网湖南省电力有限公司",
                        "case_details_des": "国网湖南电力有限公司通过数据专线接入云MAS业务平台，以接口对接方式接入平台进行电力检修、缴费、催缴等模板短信发送。目前月发送量900万条，发送成功率超过95%。",
                        "case_details_img": "./images/apiImg_new/case/guowangdianli_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/baojianyuan_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/baojianyuan_logo.jpg",
                        "time": "",
                        "desc":"秦皇岛市妇幼保健院是河北省重要集团客户，承担着全市妇女儿童的医疗保健、计划生育及基层妇幼保健业务的指导监督检查任务。该单位开通云MAS业务后，通过平台对接实现医患回访、账单、院内通知等短信自动下发功能。因短信发送稳定、网间短信成功率高等优点，云MAS得到了集团客户的好评。",
                        "case_details_title": "秦皇岛市妇幼保健院",
                        "case_details_des": "秦皇岛市妇幼保健院是河北省重要集团客户，承担着全市妇女儿童的医疗保健、计划生育及基层妇幼保健业务的指导监督检查任务。该单位开通云MAS业务后，通过平台对接实现医患回访、账单、院内通知等短信自动下发功能。因短信发送稳定、网间短信成功率高等优点，云MAS得到了集团客户的好评。",
                        "case_details_img": "./images/apiImg_new/case/baojianyuan_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_lqdsfts",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_lqdsfts",
                "event_code_new":"HOME_api_txfw_lqdsfts",
                "sub_name": "来/去电身份提示",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "拨打企业电话时，自动展示企业预先设定的名片内容，以达到企业宣传、商情传递等目的，同时提升电话接通率。",
                "ability_icon":"data/images/api/api1-2.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "企业名片",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyemingpian_banner.png",
                        "scene_description": "开通了来电身份提示的企业成员手机用户，能够设置消息内容为企业或员工身份信息，当企业的客户收到企业成员的来电时，企业的客户手机将收到预设的消息内容并弹屏显示，能够提升电话接通率。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "企业宣传",
                        "scene_icon": "images/apiImg_new/scene/tuiguang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tuiguang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyexuanchuan_banner.png",
                        "scene_description": "开通了去电身份提示的企业成员手机用户，能够设置消息内容为企业或活动宣传信息，当企业的客户致电企业成员时，企业的客户手机将收到预设的消息内容并弹屏显示，实现一次点对点的企业宣传。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "自动回复",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zidonghuifu_banner.png",
                        "scene_description": "开通了去电身份提示的企业成员手机用户，在开会等不便接听电话的情况下，能够设置消息内容为自动回复信息，当他人拨打其电话时告知呼叫方现在手机不在身边，不便接听。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "不被拦截",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "终端软件无法拦截，确保信息有效传达。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "阅后即焚",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "实现弹屏投递，阅后即焚，内存零消耗。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "终端无门槛",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "以移动号码为主要推送对象，支持安卓、ios等所有机型，无需安装额外客户端，无需手机数据联网，不消耗流量。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "开发方便",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "API封装简洁，详细的接口文档及Demo，问题快速响应。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "白名单添加接口",
                        "sub_api_desc": "开发者通过该接口将最终用户添加到API调用白名单当中。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "白名单删除接口",
                        "sub_api_desc": "开发者通过该接口将最终用户从API调用白名单当中删除。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "白名单查询接口",
                        "sub_api_desc": "查询白名单中的被定位手机用户列表。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "开户校验接口",
                        "sub_api_desc": "查询用户是否具备开通来去电身份她是业务的基本条件。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "开销户接口",
                        "sub_api_desc": "开发者为用户订购/退订来去电身份提示业务接口。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "开销户结果通知接口",
                        "sub_api_desc": "来去电身份提示开销户结果通知推送。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "业务订购状态查询接口",
                        "sub_api_desc": "开发者通过该接口查询手机用户的来去电身份提示业务开销户状态。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "展示规则设置接口",
                        "sub_api_desc": "设置企业名片的展示规则，如每周工作日上班时间展示，下班时间及国定节假日不展示。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "展示规则查询接口",
                        "sub_api_desc": "开发者通过该接口查询手机用户企业名片业务的展示规则。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "展示规则删除接口",
                        "sub_api_desc": "开发者通过该接口删除手机用户企业名片业务的展示规则。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "提示模板申请接口",
                        "sub_api_desc": "开发者通过该接口新增企业名片模板，待审核通过后，开发者可以使用。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "模板审核结果通知接口",
                        "sub_api_desc": "通信开放平台调用该接口通知开发者，来去电身份提示模板审批结果。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "模板删除接口",
                        "sub_api_desc": "开发者通过该接口删除来去电身份提示模板。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "模板修改接口",
                        "sub_api_desc": "开发者通过该接口修改来去电身份提示模板，该接口为异步接口。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "模板申请状态查询接口",
                        "sub_api_desc": "开发者通过该接口查询模板审核进度。",
                        "sub_api_type": "消息类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",           
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",             
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",  
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                      
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=23",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/kuaiditongzhi_logo.png",
                        "time": "",
                        "desc":"快递员派发包裹过程中，需要向用户进行电话通知，用户对陌生号码抱有防范心理，电话接通率不高，影响了快递的工作效率。通过来电身份提示能力向用户提示来电号码的身份信息，从而提升接听率。",
                        "case_details_title": "DHL",
                        "case_details_des": "合作背景<br/>快递员派发包裹过程中，需要向用户进行电话通知，用户对陌生号码抱有防范心理，电话接通率不高，影响了快递的工作效率。客户希望通过来电身份提示帮助提升电话接通率。<br/><br/>合作成效<br/>客户电话接听率提升，提升了快递的派发效率。<br/><br/>产品层<br/>企业成员手机外呼过程中，系统自动向被叫号码投递身份消息，为来电正名。",
                        "case_details_img": "./images/apiImg_new/case/kuaiditongzhi_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/shenfentishi_logo.png",
                        "time": "",
                        "desc":"去电身份提示以企业统一形象身份面向客户，增强企业信任感和忠诚度，企业通过员工的社会关系进行企业客户关怀和宣传，可以让企业的每一个客户在最短时间内了解到企业品牌。",
                        "case_details_title": "宁波伟达电器",
                        "case_details_des": "合作背景<br/>客户希望通过员工的社会关系进行企业客户关怀和宣传，以企业统一形象身份面向客户，增强企业信任感和忠诚度。<br/><br/>合作成效<br/>提升了企业品牌黏性、活动转化率。<br/><br/>产品层<br/>企业成员手机作为被叫时，系统自动向主叫号码（企业的客户）投递企业信息，为客户提供企业关怀服务。",
                        "case_details_img": "./images/apiImg_new/case/shenfentishi_img.png"
                    }
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_spdx",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_spdx",
                "event_code_new":"HOME_api_txfw_spdx",
                "sub_name": "视频短信",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "通过短信同时传送视频、文字、图像、声音，适用于信息发布、企业宣传等场景，内容更丰富 ，展现更直观 。 ",
                "ability_icon":"data/images/api/api1-3.png",
                "guideline_img": "",

                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "政府公益宣传",
                        "scene_icon": "images/apiImg_new/scene/zhengfu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhengfu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhengfugongyi_banner.png",
                        "scene_description": "支持政府、公安等对管辖范围内民众发送公益宣传类视频短信，如“512防灾减灾日”下发防灾减灾宣传片。丽水市遂昌县人防办在2017年5月12日时，向县内群众推送宣传片，提高民众减灾意识，宣传效果良好。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "企业内部宣传",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyexuanchuan_banner.jpg",
                        "scene_description": "支持企业宣传片、一分钟党课、工作技能指导等内容，通过视频短信下发给企业员工，进行企业学习宣传。如浙江公司党群办已使用视频短信产品对全公司内部党员发送党课学习视频，全面加强公司党建工作。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "影视宣传",
                        "scene_icon": "images/apiImg_new/scene/shipin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shipin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yingshixuanchuan_banner.jpg",
                        "scene_description": "支持线上线下影院最新影视资讯推广，通过视频短信对会员用户进行新片推广，提升影片的观影率。如咪咕爱看通过视频短信产品，每周向其百万会员用户推送最新影视资讯，促进app日活量，提升新片用户观影数。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "及时稳定",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "专业通道，短信能在5-10秒内到达，支持获取短信发送状态报告。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "资费便宜",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "按条计费、足够便宜，还能支持购买优惠包，价格更便宜。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "信息安全",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "采用私密专线更能有效保护用户隐私不外泄。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "开发方便",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "API封装简洁，详细的接口文档及Demo，问题快速响应。"
                    },
                    {
                        "advantage_id": "5",
                        "advantage_name": "形式丰富",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "可通过多媒体信息进行信息推广，如图片、视频、音频等方式。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "模板提交",
                        "guideline_description": "您可先行制作视频短信内容，并通过模板提交接口上传内容，待审核人员审核完毕后，可使用该内容进行批量下发。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "批量发送",
                        "guideline_description": "您可选择已审核完毕的内容，通过发送接口进行视频短信批量下发。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "获取文件上传URL接口",
                        "sub_api_desc": "本接口用于文件上传者获取用于上传实体文件的URL，用于后续上传实体文件到HFS（Http File Server）。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "上传实体文件接口",
                        "sub_api_desc": "本接口用于文件上传者向HFS（Http File Server）上传实体文件。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "设置文件权限接口",
                        "sub_api_desc": "本接口用于文件上传者在HFS（Http File Server）上为文件获取者设置下载权限。只有开通了下载权限的文件获取者才能下载文件。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "查询文件权限接口",
                        "sub_api_desc": "本接口用于文件上传者或者文件获取者查询文件的权限信息。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "删除文件接口",
                        "sub_api_desc": "本接口用于文件上传者或者文件获取者调用此API删除文件，删除文件的同时会删除文件实体。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "视频短信模板申请接口",
                        "sub_api_desc": "开发者通过该接口向通信开放平台申请或者删除视频短信模板信息。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "模板审核结果通知接口",
                        "sub_api_desc": "南向视频短信能力网元通过该接口向通信开放平台通知模板同步结果。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "查询视频短信模板状态",
                        "sub_api_desc": "开发者通过该接口向通信开放平台查询视频短信模板状态。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "发送视频短信接口",
                        "sub_api_desc": "开发者通过该接口向通信开放平台请求发送视频短信。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "状态报告通知接口",
                        "sub_api_desc": "通信开放平台通过该接口向开发者通知视频短信发送结果。",
                        "sub_api_type": "消息类"
                    },
                    {
                        "sub_api_name": "查询状态报告",
                        "sub_api_desc": "开发者通过该接口向通信开放平台查询发送视频短信的结果。",
                        "sub_api_type": "消息类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",  
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                      
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=24",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_music.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/tengxunyouxi_logo.jpg",
                        "time": "",
                        "desc":"腾讯游戏通过视频短信产品进行游戏推广，对腾讯游戏会员用户下发最新游戏资讯，提高手游安装量以及日活量。",
                        "case_details_title": "腾讯游戏",
                        "case_details_des": "腾讯游戏通过视频短信产品进行游戏推广，如寻仙手游、奇迹手游、QQ炫舞等，其客户转化率可达3 - 4%，是普通短信转化率的4倍，遥遥领先于同期其他推广渠道，并表示将于我方建立长期合作关系。",
                        "case_details_img": "./images/apiImg_new/case/tengxunyouxi_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/ximalaya_logo.jpg",
                        "time": "",
                        "desc":"喜马拉雅通过视频短信产品对其会员用户进行最新产品推广。",
                        "case_details_title": "喜马拉雅",
                        "case_details_des": "喜马拉雅通过视频短信产品对其会员用户进行最新产品推广，如蔡康永的新节目《好好说话2·康永来了》、小雅AI音响会员推广等。",
                        "case_details_img": "./images/apiImg_new/case/ximalaya_img.png"
                    }
                ]
            },
            {
                "sub_id": "4",
                "event_code":"API_yytzyzm",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_yytzyzm",
                "event_code_new":"HOME_api_txfw_yytzyzm",
                "sub_name": "语音通知/验证码",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "将文字信息通过语音播报的形式传达给用户，适用于会议通知、用户注册、异地登录、身份验证等场景，通知方式及时有效。",
                "ability_icon":"data/images/api/api1-4.png",
                "guideline_img": "",

                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "会议通知",
                        "scene_icon": "images/apiImg_new/scene/xiaoxi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xiaoxi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yuyinhuiyitongzhi_banner.png",
                        "scene_description": "传统的短信通知方式实时性差和查看率低，无法引起用户重视。通知推送方式受终端限制，实时性受限，到达率低，无法达到紧急通知的目的。将文字以电话拨打、语音播报的形式通知给用户，通知方式及时有效。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "身份验证",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/shenfenyanzheng_banner.png",
                        "scene_description": "传统的短信验证码有查看率低、容易被客户拉黑等问题，语音验证码支持将验证码信息通过电话拨打、语音播报的形式传达给用户，用户接通率高。可广泛用于用户注册、异地登录、支付验证、身份校验等场景。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "快递派送",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/kuaidipaisong_banner.png",
                        "scene_description": "在快递派送中，快递员只需对快递物品条码扫描，即可完成信息录入，批量拨打电话通知客户取件，轻轻松松一键搞定。特别是在用户密集的高峰时段，快递员使用语音通知业务，可一键向多个用户发起批量的快递送达通知，大大缩短等待时间，提高送件效率。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "内容灵活",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "可自定义通知内容，支持各种通知业务场景。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "信息安全",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "语音通知不易被窃取，安全有保障。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "稳定可靠",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "支持大容量，高并发。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "语音状态推送",
                        "sub_api_desc": "用于将话音的状态返回给用户应用。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "TTS语音模板通知接口",
                        "sub_api_desc": "话音业务接口，开发者填完参数后可直接调用接口使用TTS语音通知功能。",
                        "sub_api_type": "音视频"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                        
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=4",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/yingshi_logo.jpg",
                        "time": "",
                        "desc":"在海康威视的萤石云视频APP中，客户为最终用户提供了“电话提醒”的增值服务，当设备产生报警时，平台使用语音通知呼叫用户设置的手机号。对比传统报警通知采用短信通知的方式，语音通知的方式更加及时有效，不易被用户遗漏。",
                        "case_details_title": "萤石",
                        "case_details_des": "合作背景<br/>在社会生活和设备平台维护工作中，如果发生突发的重大安全事件或者设备故障告警，传统的短信通知方式实时性差和查看率低，无法引起用户重视。通知推送方式受终端限制，实时性受限，到达率低，无法达到紧急通知的目的。语音通知平台可以7*24小时全天候地将告警信息第一时间通知到相关处理人员，确保重大事件和故障得到及时响应。<br/><br/>合作成效<br/>将文字以语音播报的形式通知给用户，通知方式及时有效。<br/><br/>产品层<br/>在海康威视的萤石云视频APP中，客户为最终用户提供了“电话提醒”的增值服务，当设备产生报警时，平台使用语音通知呼叫用户设置的手机号。对比传统报警通知采用短信通知的方式，语音通知的方式更加及时有效，不易被用户遗漏。",
                        "case_details_img": "./images/apiImg_new/case/yingshi_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/sihaitong_logo.png",
                        "time": "",
                        "desc":"杭州思言使用语音通知/验证码能力，通过语音的方式向村民下发重要通知，村民接到来电立即接听，相较于传统的短信通知，信息触达率大幅提升。",
                        "case_details_title": "四海通",
                        "case_details_des": "合作背景<br/>传统的短信通知方式实时性差和查看率低，无法引起用户重视。通知推送方式受终端限制，实时性受限，到达率低，无法达到紧急通知的目的。<br/><br/>合作成效<br/>将文字以语音播报的形式通知给用户，通知方式及时有效。<br/><br/>产品层<br/>客户使用语音通知/验证码能力，通过语音的方式向村民下发重要通知，村民接到来电立即接听，相较于传统的短信通知，信息触达率大幅提升。",
                        "case_details_img": "./images/apiImg_new/case/sihaitong_img.png"
                    }
                ]
            },
            {
                "sub_id": "5",
                "event_code":"API_djbh",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_djbh",
                "event_code_new":"HOME_api_txfw_djbh",
                "sub_name": "点击拨号",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "通过平台呼叫通话双方，实现企业统一付费，通话双方号码隐藏。支持大容量、高并发，稳定可靠。",
                "ability_icon":"data/images/api/api1-5.png",
                "guideline_img": "",

                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "网络社交",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/wangluoshejiao_banner.png",
                        "scene_description": "用户在交友网站或者社交APP上查看交友信息，交友网站展示用户的介绍信息，并提供联系按钮。用户点击按钮，平台自动拉起双方电话，建立通话，保护双方隐私、避免骚扰，更便于交友网站或者社交APP开展个性化定制服务。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "快递取件",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/kuaidiqujian_banner.png",
                        "scene_description": "快递单上不直接显示买家电话，快递员用App直接扫描快件上的二维码，App解析二维码，成功检索客户号码后将通过APP快速建立起快递员和客户之间的通话，通知客户取快件，保障客户号码信息不外泄，通话双方不付费，简单高效。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "心理咨询",
                        "scene_icon": "images/apiImg_new/scene/yiliao_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yiliao_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/xinlizixun_banner.png",
                        "scene_description": "业务形态原因用户信息更加敏感，对隐私保护的需求更强烈。使用平台号码连通咨询专家和用户之间的通话，隐藏呼叫双方真实的号码信息，保护双方的隐私。提升平台通话接通率，通话质量高，投诉回溯处理快，平台计费，通话双方不计费。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "保护隐私",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "双方终端上只显示系统接入码，保护通话双方号码隐私。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "优化体验",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "用户双方呼叫免费。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "应用灵活",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "由开发者自定义使用场景，可在PC端或APP端拉起呼叫。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "点击拨号接口",
                        "sub_api_desc": "点击拨号接口用于第三方开发者填入参数后能够直接调用测试接口呼叫主叫用户和被叫用户进行通话。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "点击拨号终止",
                        "sub_api_desc": "点击拨号终止接口用于第三方开发者填入参数后能够直接调用测试接口终止点击拨号类业务。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "点击拨号语音状态推送",
                        "sub_api_desc": "用于将话音的状态返回给用户应用。",
                        "sub_api_type": "音视频"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=5",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/yidianling_logo.png",
                        "time": "",
                        "desc":"壹点灵App在医患咨询场景中接入点击拨号能力，通过平台拉起两方通话，隐藏呼叫双方真实号码信息，保护用户隐私，同时话音质量大幅度提升，咨询效果得到很大改善。",
                        "case_details_title": "壹点灵",
                        "case_details_des": "合作背景<br/>心理咨询业务形态原因用户信息更加敏感，对隐私保护的需求更强烈。使用平台号码连通咨询专家和用户之间的通话，隐藏呼叫双方真实的号码信息，保护双方的隐私。<br/><br/>合作成效<br/>接通率、通话质量均得到提升，业务量增长显著。<br/><br/>产品层<br/>集成点击拨号能力，使用平台号码连通咨询专家和用户之间的通话，隐藏呼叫双方真实的号码信息，保护双方的隐私，且大幅提升话音质量。",
                        "case_details_img": "./images/apiImg_new/case/yidianling_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_map.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/cainiao_logo.png",
                        "time": "",
                        "desc":"菜鸟网络新研发的面单隐私保护技术，面单上消费者的名字和电话号码中间4个数字，都被*字符代替，只有快递小哥能通过APP点击采用点击拨号能力联系到收件人，配送员能一键拨打的方式联系消费者，无需人工识别手机号码，大大提升效率，降低信息泄露可能性。",
                        "case_details_title": "菜鸟",
                        "case_details_des": "合作背景<br/>传统的物流面单信息一览无遗，客户信息泄露严重，引起客户投诉。<br/><br/>合作成效<br/>携物流企业用隐私面单，快递员APP联系消费者。<br/><br/>产品层<br/>菜鸟网络新研发的面单隐私保护技术，面单上消费者的名字和电话号码中间4个数字，都被*字符代替，只有快递小哥能通过APP点击采用点击拨号能力联系到收件人，配送员能一键拨打的方式联系消费者，无需人工识别手机号码，大大提升效率，降低信息泄露可能性。",
                        "case_details_img": "./images/apiImg_new/case/cainiao_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "6",
                "event_code":"API_bdyz",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_bdyz",
                "event_code_new":"HOME_api_txfw_bdyz",
                "sub_name": "拨打验证",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "新型手机号验证方式，用户拨打平台分配号码，即可完成验证，验证安全级别更高，更难窃取，有效防止刷单、信息泄露，提升验证便利性。",
                "ability_icon":"data/images/api/api2-2.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "注册认证",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhucerenzheng_banner.png",
                        "scene_description": "用户注册时，系统通过移动网络侧信令方式查询来话号码是否与用户递交的号码一致，并分析来话的操作是否从终端发起，从而验证用户的真实身份，杜绝恶意注册、改号软件，确保用户的真实性。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "信息变更",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/xinxibiangeng_banner.png",
                        "scene_description": "当用户需要变更信息或修改密码时，通过拨打验证一键外呼至平台，由平台对需要变更信息的用户进行操作行为验证，验证当前操作是由用户发起，能有效识别金融欺诈，保障账号信息安全。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "支付确认",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhifuqueren_banner.png",
                        "scene_description": "资金转移环节，需要手机身份验证，确保资金安全，如确认支付、确认转账、买家撤销退款、卖家同意退款、买家确认收到、卖家确认收到退货等操作时，需要进行手机身份验证，以保障资金安全。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "高成功率",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "用户主动发起进行验证，相对于短信验证码、语音验证码下行发送验证码的方式，成功率更高。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "安全性高",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "独有的信令验证技术，避免验证码被劫持的风险，有效识别刷单、改号软件行为，安全有保障。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "资费便宜",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "资费上相对于短信验证码、语音验证码价格更低。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "拨打验证绑定接口",
                        "sub_api_desc": "用户号码与平台验证小号绑定",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "拨打验证解绑接口",
                        "sub_api_desc": "用户号码与平台验证小号解绑",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "呼叫事件推送接口",
                        "sub_api_desc": "呼叫事件推送",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "结果事件推送接口",
                        "sub_api_desc": "验证结果推送",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "查询号码归属运营商",
                        "sub_api_desc": "开发者通过调用该接口查询号码所归属的运营商。",
                        "sub_api_type": "音视频"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",             
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",           
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=22",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/witsky_logo.png",
                        "time": "",
                        "desc":"用户注册账号时，需要进行手机验证，用户输入手机号码后，平台会为用户分配一个随机临时号码并提示用户拨打该号码，当用户呼入后，平台验证用户的来话号码和来话信令，拨打验证能够杜绝恶意注册、改号软件，确保用户的真实性。",
                        "case_details_title": "诚智天扬",
                        "case_details_des": "合作背景<br/>由于短信/语音验证码信息易泄露，且无法有效防范机器刷单和改号软件等安全性问题，长期以来充斥着大量的虚假注册、改号注册、恶意刷单等多种非法行为。而使用拨打验证使用了主动上行的方式，大大增加了机器刷单的软件开发成本、号卡成本，且平台对来话信令进行分析验证，有效防范了改号软件行为，真正做到了高安全性。<br/><br/>合作成效<br/>自客户使用拨打验证以来，大大降低了非法注册、烂注册的数据，累计防范虚假注册20万次，预计为商家减少损失达4000万元。<br/><br/>产品层<br/>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;1、用户注册流程精简，不再需要输入验证码，一键外呼即可完成验证。<br/>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;2、一次呼叫过程中可完成来话号码识别、语音验证码、信令分析的多重安全机制验证。",
                        "case_details_img": "./images/apiImg_new/case/witsky_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_pay.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/mengxiangxiaozhen_logo.png",
                        "time": "",
                        "desc":"活期转账汇款、定活互转、向企业转账、跨行转账、预约转账、批量转账等应用场景下需要使用安全性较高的验证机制，拨打验证解决了传统验证码方式存在的到达率、安全性缺陷问题，加入了独有的信令分析技术，确保了支付转账应用场景的高安全性要求。",
                        "case_details_title": "梦想小镇",
                        "case_details_des": "合作背景<br/>活期转账汇款、定活互转、向企业转账、跨行转账、预约转账、批量转账等应用场景下需要使用安全性较高的验证机制，传统验证码是当前验证方式的主流，但其存在到达率、易被拦截和盗取等安全性问题，客户对验证机制提出了更高安全性的需求。<br/><br/>合作成效<br/>业务上线以来，累计拦截19万非法用户，最高金额达数百万元，为用户减少了大量的经济损失。<br/><br/>产品层<br/>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp1、用户流程精简，不再需要输入验证码，一键外呼即可完成验证。<br/>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp2、一次呼叫过程中可完成来话号码识别、语音验证码、信令分析的多重安全机制验证。",
                        "case_details_img": "./images/apiImg_new/case/mengxiangxiaozhen_img.png"
                    }
                ]
            },
            {
                "sub_id": "7",
                "event_code":"API_zjh",
                "so_more_event_code":"API_moredetail_hlwnl",
                "online_event_code":"",
                "float_event_code":"Float_API_zjh",
                "event_code_new":"HOME_api_txfw_zjh",
                "sub_name": "中间号",
                "close_a_deal": "",
                "description": "此方案依托全网移动号码资源，面向商户和用户双方提供中间安全号码，充分发挥虚拟副号灵活绑定的优势，实现临时号码跟随订单状态的捆绑使用功能，从而实现在交易双方之间建立安全屏障。",
                "ability_icon":"data/images/api/api1-6.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "AXB模式",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/AXBmoshi_banner.png",
                        "scene_description": "能力支撑：支持单个号码（A）与单个号码（B）通过中间号，进行双向语音及短信通信。<br/><br/>目标市场：在网约车、快递等行业，通过虚拟副号与订单的灵活绑定，为交易双方实现隐私“双加密“。<br/><br/>场景举例：以网约车场景为例"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "GXB模式",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/GXBmoshi_banner.png",
                        "scene_description": "能力支撑：支持包含1个号码列表的集合（G）与单个号码（B）通过中间号，进行多对一语音及短信通信。<br/><br/>目标市场：在网上招聘、租房等行业，满足高效沟通及真实号码多对一隐藏需求，保护个人信息安全。<br/><br/>场景举例：以网上招聘场景为例"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "AXYB模式",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/AXYBmoshi_banner.png",
                        "scene_description": "能力支撑：支持为买方消费者（A）分配中间号（X），为卖方商家（B）长期分配绑定中间号（Y）进行联系。<br/><br/>目标市场：在网上二手交易平台通过两个中间号的绑定，满足商家及消费者对信息安全的不同需求侧重。<br/><br/>场景举例：以网上二手车交易场景为例"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "XB模式",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/XBmoshi_banner.png",
                        "scene_description": "能力支撑：为目标客户（B）长期分配绑定中间号（X），单向为客户号码进行号码隐藏。<br/><br/>目标市场：针对商家要求量身打造专属中间号，确保高效通信及隐私保护。<br/><br/>场景举例：以物流平台场景为例"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "助力O2O安全通信",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "中间号根据订单灵活绑，作为交易双方联系号码，全程不会泄露真实主号。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "提升企业服务能力",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "O2O平台为交易双方实现手机号“双加密”，提升企业形象， 彰显社会责任。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "降低通信维护成本",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "中间号为虚拟号码，无需人力及设备维护，为O2O平台通信成本减负。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "业务选购",
                        "guideline_description": "企业根据自身需求，选择合作模式，选购中间号业务。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "需求评审",
                        "guideline_description": "提交需求申请表，和多号平台进行需求评审，并与需求方深入沟通明确产品需求。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "开发测试",
                        "guideline_description": "评审通过后，进行产品开发打通接口，并测试联调。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "运营上线",
                        "guideline_description": "进行业务上线运营，和多号平台提供客服、数据等运营支撑服务。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "绑定接口",
                        "sub_api_desc": "为主被叫号码分配中间号，并把中间号与主被叫号码做绑定，绑定期间，主被叫可以通过中间号进行语音通信。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "解绑接口",
                        "sub_api_desc": "把中间号与主被叫号码解绑，解绑后，呼叫无法接通。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "通话结束话单推送接口",
                        "sub_api_desc": "在中间号绑定期间，主被叫的语音通话，在通话结束以后，通过该接口把通话信息（通话主被叫号码、中间号、通话起始时间、结束时间、通话时长）推送给外部对接平台。",
                        "sub_api_type": "通信服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",  
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                      
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动互联网能力平台",
                "detail_url": "http://dev.10086.cn/wiki/?page-zjh_1",
                "cases":[
                     {
                        "image_url" :"./images/apiImg_new/case/didichuxing_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/didichuxing_logo.png",
                        "time": "",
                        "desc":"滴滴出行作为目前国内最大的网约车平台，用中间号支持订单生成后乘客和司机号码隐私保护；支持任意运营商手机号码使用；支持录音场景和不录音场景。",
                        "case_details_title": "滴滴出行",
                        "case_details_des": "滴滴出行作为目前国内最大的网约车平台，用中间号支持订单生成后乘客和司机号码隐私保护；支持任意运营商手机号码使用；支持录音场景和不录音场景。",
                        "case_details_img": "./images/apiImg_new/case/didichuxing_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/wubatongcheng_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/wubatongcheng_logo.png",
                        "time": "",
                        "desc":"和多号基于招聘网站多对一模式（GXB），与58同城展开合作推出“招聘中间号”：在招聘团队及应聘者建立通话的同时，为双方分配同一个临时中间号，高效沟通的同时保护双方隐私信息。",
                        "case_details_title": "58同城",
                        "case_details_des": "和多号基于招聘网站多对一模式（GXB），与58同城展开合作推出“招聘中间号”：在招聘团队及应聘者建立通话的同时，为双方分配同一个临时中间号，高效沟通的同时保护双方隐私信息。",
                        "case_details_img": "./images/apiImg_new/case/wubatongcheng_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/yichewang_logo.jpg",
                        "time": "",
                        "desc":"和多号平台为易车网卖家（B）长期分配绑定中间号（Y），为卖家号码进行号码隐藏。买家（A）通过拨打中间号码Y与卖家通话时，系统平台主动分配中间号X，在卖家侧显示的为中间号号码X；卖家拨打中间号X则可以联系买家进行通话，买家显示的是卖中间号Y。",
                        "case_details_title": "易车网",
                        "case_details_des": "和多号平台为易车网卖家（B）长期分配绑定中间号（Y），为卖家号码进行号码隐藏。买家（A）通过拨打中间号码Y与卖家通话时，系统平台主动分配中间号X，在卖家侧显示的为中间号号码X；卖家拨打中间号X则可以联系买家进行通话，买家显示的是卖中间号Y。<br/><br/>绑定周期结束时，中间号号码X被收回；当卖家在平台下线之后，中间号码Y被收回。",
                        "case_details_img": "./images/apiImg_new/case/yichewang_img.png"
                    }
                ]
            },
            {
                "sub_id": "8",
                "event_code":"API_yyhy",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_yyhy",
                "event_code_new":"HOME_api_txfw_yyhy",
                "sub_name": "语音会议",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "支持多方高清语音会议，具备强大的会场控制功能，完美支撑远程高效沟通，提升在线办公体验和效率。",
                "ability_icon":"data/images/api/api1-7.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "内部会议",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/neibuhuiyi_banner.png",
                        "scene_description": "使用语音会议能力发起会议通话，只需接听电话即可参与会议。支撑企业移动办公，提升企业工作效率（如彩云多方通话），方便多人组织交流，参与者不需要额外的app，只需要接听电话即可参会，简单方便实用性强。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "保护隐私",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "双方终端上只显示系统接入码，保护通话双方号码隐私。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "优化体验",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "用户双方呼叫免费。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "应用灵活",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "由开发者自定义使用场景，可在PC端或APP端拉起呼叫。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "创建会场",
                        "sub_api_desc": "创建一个会议，开发者的APP调用该接口完成电话会议的创建。与会人员号码必须为国内手机号或者固定电话号码，并且必须添加国家码“+86”，不支持国际号码。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "加入会场",
                        "sub_api_desc": "加入会场，开发者的APP调用该接口完成会议成员的增加功能。 调用该接口之前，需要先调用“创建会场”接口，获取对应的“meetId”。 与会人员号码必须为国内手机号或者固定电话号码，并且必须添加国家码“+86”，不支持国际号码。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "静音/取消静音设置",
                        "sub_api_desc": "开发者的APP调用该接口对与会人员进行静音设置和取消静音设置。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "对会场放音",
                        "sub_api_desc": "对会场放音，开发者的APP调用该接口，完成对会场的放音设置。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "关闭会场",
                        "sub_api_desc": "关闭会场，退出会议，开发者的APP调用该接口完成会议关闭释放。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "获取会场成员状态",
                        "sub_api_desc": "获取会议中电话状态，开发者的APP调用该接口查询会议状态。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "对会场成员进行挂机",
                        "sub_api_desc": "开发者的APP调用该API对会场成员进行挂机。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "获取会议时长",
                        "sub_api_desc": "开发者的APP调用该接口获取会议时长（会议进行时间）。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "获取会议总时长",
                        "sub_api_desc": "开发者的APP调用该接口获取会议总时长（会议进行总计时间，包含所有线路时间）。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "状态变更通知接口",
                        "sub_api_desc": "会议系统/用户状态发生变化后（如与会人员挂断电话），由能力开放平台主动通知开发者。",
                        "sub_api_type": "音视频"
                    },
                    {
                        "sub_api_name": "修改与会人员发言权",
                        "sub_api_desc": "修改与会人员的发言权。",
                        "sub_api_type": "音视频"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                        
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=6",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/caiyunapp_logo.png",
                        "time": "",
                        "desc":"彩云APP中使用语音会议能力，实现企业内部员工之间电话会议的功能。",
                        "case_details_title": "彩云app",
                        "case_details_des": "合作背景<br/>传统的语音会议需每个参会成员都安装app，通话受数据环境影响，波动大灵活性差。<br/><br/>合作成效<br/>优化用户体验，使用户脱离app，并拥有稳定流畅的会议体验。<br/><br/>产品层<br/>彩云APP中使用语音会议能力，实现企业内部员工之间电话会议的功能。",
                        "case_details_img": "./images/apiImg_new/case/caiyunapp_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/hangyanxiaoyi_logo.png",
                        "time": "",
                        "desc":"小移人家使用语音会议能力，实现集体内部员工之间电话会议的功能。中国移动60万员工将体验该能力带来的服务便利性。",
                        "case_details_title": "小移人家",
                        "case_details_des": "合作背景<br/>传统的语音会议需每个参会成员都安装app，通话受数据环境影响，波动大灵活性差。<br/><br/>合作成效<br/>优化用户体验，使用户脱离app，并拥有稳定流畅的会议体验。<br/><br/>产品层<br/>使用语音会议能力，实现集体内部员工之间电话会议的功能。中国移动60万员工将体验该能力带来的服务便利性。",
                        "case_details_img": "./images/apiImg_new/case/hangyanxiaoyi_img.png"
                    }
                ]
            },
            {
                "sub_id": "9",
                "event_code":"API_sphy",
                "so_more_event_code":"API_moredetail_hyyysn",
                "online_event_code":"API_orderonline_hyyysn",
                "float_event_code":"Float_API_sphy",
                "event_code_new":"HOME_api_txfw_sphy",
                "sub_name": "视频会议",
                "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                "description": "通过API/SDK开放点对点视频、视频会议能力，供用户封装调用，满足用户对实时高清、全方位功能覆盖的需求。支持高效并发，提供多种解决方案。",
                "ability_icon":"data/images/api/api1-8.png",
                "guideline_img": "images/apiImg_new/guideline/guideline_five1.png",

                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "党建",
                        "scene_icon": "images/apiImg_new/scene/zhengfu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhengfu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/dangjian_banner.png",
                        "scene_description": "基于领先高清视频会议直播技术，结合权威、全面、专业资源探索远程高清多媒体党员教育学习解决方案，借助视频会议，丰富教学内容、强化教学互动，实现基层两学一做、三会一课常态化、高效化教育。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "医疗行业",
                        "scene_icon": "images/apiImg_new/scene/yiliao_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yiliao_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yiliaohangye_banner.png",
                        "scene_description": "终端采用双屏蝴蝶式一体化设计，应用于远程问诊/会诊、分级诊疗判断与引导、远程医疗/研讨等多种医疗行业场景，将视频能力与远程就诊流程相结合，实现智能导诊、预约、挂号、视频诊疗、掌上支付、报告查询、慢病管理等功能。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "企业办公",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyebangong_banner.jpg",
                        "scene_description": "基于云端平台全面开放会管会控功能及移动端视频会议功能，客户可将云视讯视频会议作为子功能模块灵活嵌入至企业已有办公软件系统（如：手机APP、PC客户端、企业通讯录OA等），实现召开会议、管理会议、多方视频沟通、文档共享等功能，实现协同办公全流程。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "在线教育",
                        "scene_icon": "images/apiImg_new/scene/xuexi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xuexi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/spzaixianjiaoyu_banner.png",
                        "scene_description": "教师与学生通过网络方式开展远程教学活动，不受时间和地域的限制。在线教育平台引入丰富的课件、试题、名校课程、名师等教学资源，借助云视讯多点视频互动、课件共享、视频直播、录制下载的能力，可以提供超出校园向更广泛的地区辐射的开放式教育，如一对一/一对多/多对多的在线课堂、万人公开课、跨国互动教学等。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "视频清晰",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "动态选择高质量传输路径，保证视频清晰无卡顿。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "功能全面",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "支持1V1音视频通话，支持多方语音会议。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "高效并发",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "单机支持50万以上用户同时在线，满足高并发场景。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "低资费",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "可享受通信资费的优惠，可大幅度降低客户的通信成本。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "成为合作伙伴",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "开通能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "配置能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "调用能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "5",
                        "guideline_name": "产品优化与运营",
                        "guideline_description": ""
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "认证鉴权API",
                        "sub_api_desc": "SP简单认证API是提供给合作伙伴的一种简单的认证接口，仅允许批发模式的应用调用",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "刷新鉴权API",
                        "sub_api_desc": "Access token的有效期不是无限的。当用户授权给第三方应用使用的Access token超过了其生命周期时，可以通过刷新机制来获取新的Access Token。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "创建预定会议API",
                        "sub_api_desc": "预定会议API可以用于创建将来会议、即时会议和周期会议。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "修改预定会议API",
                        "sub_api_desc": "修改预订会议API用于修改未召开预订会议的相关设置，并根据预约会议时的设置自动向与会者及会议预定者发送短信或邮件进行通知。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "取消预定会议API",
                        "sub_api_desc": "取消预订会议API用于在创建预定会议成功后，取消未召开的预约会议或周期会议。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "查询预定会议API",
                        "sub_api_desc": "查询预订会议API用于查询还没有召开的单个预定会议的基本信息，如会议id、会议类型、会议密码等。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "查询会议列表API",
                        "sub_api_desc": "查询会议列表API用于查询当前用户权限所能查询的所有会议。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "加入会议API",
                        "sub_api_desc": "加入会议API用于与会者以特定的角色加入会议，并获取相应的会议控制权限。与会者加入会议后可根据获取的权限对会议进行控制，会议系统会按照系统的配置以及与会者加入会议时的角色决定与会者的权限。如果会议中已经有主席存在，并且系统不支持多主席，则与会者以主席的角色入会时，也只能获得普通与会者的权限。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "退出会议API",
                        "sub_api_desc": "退出会议API用于与会者主动退出正在进行的会议。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "邀请与会者加入会议API",
                        "sub_api_desc": "邀请与会者加入会议API用于在会议过程中会议主席邀请用户参加会议，可一次邀请多个用户加入会议。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "挂断与会者API",
                        "sub_api_desc": "挂断与会者API用于在会议中强制使与会者退出会议。会议主席可以挂断所有与会者，普通与会者只能挂断自己",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "静音API",
                        "sub_api_desc": "静音API用于将在会议中的与会者静音。被静音后的与会者只能听到会场中其他与会者的声音，而自己的声音不会被传入会场中让其他与会者听到。会议主席可以将任意一个与会者静音，普通与会者只能将自己静音。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "取消静音API",
                        "sub_api_desc": "取消静音API用于将被静音的与会者取消静音。取消静音后的与会者可以恢复听到会场中其他与会者的声音。会议主席可以将任意一个与会者取消静音，普通与会者只能将自己取消静音。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "保持与会者API",
                        "sub_api_desc": "保持与会者API用于保持与会者。被保持的与会者在参加会议过程中不能听到来自会场中其他与会者的声音，自己的声音也不能传入会场中让其他与会者听到。只有会议主席才有使用保持与会者功能的权限。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "取消保持API",
                        "sub_api_desc": "取消保持API用于使保持状态的与会者重新回到会场当中。取消保持之后的与会者能够听到来自会场中其他与会者的声音，自己的声音也能传入会场中让其他与会者听到。只有会议主席才有使用取消保持与会者功能的权限。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "全场静音API",
                        "sub_api_desc": "全场静音API用于会议主席对会议中的其他全部与会者都进行静音。全场静音后只有会议主席可以发言外，其他与会者均不能发言，只能听会议主席发言。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "取消全场静音API",
                        "sub_api_desc": "取消全场静音API用于会议主席对会议中的其他全部静音状态的与会者进行取消静音。取消全场静音后其他全部普通与会者可以恢复发言，发言的声音与会者都可以听到。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "锁定会议API",
                        "sub_api_desc": "锁定会议API用于在会议进行过程中，会议主席对会议进行锁定操作。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "取消锁定会议API",
                        "sub_api_desc": "取消锁定会议API用于在会议进行过程中，会议主席对锁定状态的会议进行解锁操作。会议被解锁后，所有新的普通与会者都可以主动加入会议",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "查询在线会议信息API",
                        "sub_api_desc": "查询在线会议信息API用于查询正在召开会议的相关信息。相关信息包括：会议中的与会人信息和会议的状态（如会议是否被静音、是否被锁定、会议时长等）信息。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "关闭会议API",
                        "sub_api_desc": "关闭会议API用于会议主席结束当前正在召开的会议。只有会议主席有关闭会议的权限，普通与会者没有关闭会议的权限。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "控制会议显示策略API",
                        "sub_api_desc": "控制会议显示策略API用于会议主席控制与会者观看的视频画面的显示方式。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "多画面选看API",
                        "sub_api_desc": "多画面选看API用于在会议显示策略为广播模式时，会议主席为自己设置想看到的视频画面。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "订阅会议状态通知API",
                        "sub_api_desc": "订阅会议状态通知API用于SP向Caas平台订阅指定会议的详细信息(会议状态信息和发言方变更信息)。Caas平台接受到订阅请求之后，会马上返回该会议的详细信息，并在会议状态发生改变时，发送Notification消息给订阅者。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "会议状态通知API",
                        "sub_api_desc": "会议状态通知API用于在会议过程中接收平台实时给订阅者推送的会议状态通知；订阅者需要部署服务用于接收会议状态通知。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "发言方变更通知API",
                        "sub_api_desc": "发言方变更通知API用于在会议中接收平台推送的会议发言方变更通知；订阅者需要部署服务用于接收会议状态通知。",
                        "sub_api_type": "通信服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动行业应用使能平台",
                "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=47",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/cunganbuxitong_logo.png",
                        "time": "",
                        "desc":"河北省委组织部搭建驻村干部管理系统，用于“省-市-县-村”四级远程管理。该系统通过在指挥中心集成云视讯会控API、在驻村干部手机APP集成云视讯视频会议SDK的方式，实现了指挥中心管理员一键呼叫驻村干部、视频会议实时查岗的场景化功能。",
                        "case_details_title": "河北省委组织部驻村干部管理系统",
                        "case_details_des": "河北省委组织部搭建驻村干部管理系统，用于“省-市-县-村”四级共2万余驻村扶贫干部的远程管理。该系统通过在指挥中心web管理平台集成云视讯会控API、在驻村干部手机APP集成云视讯视频会议SDK的方式，实现了指挥中心管理员一键呼叫驻村干部、视频会议实时查岗的场景化功能，满足了省市县村高清会场及所有驻村干部的集中化联动管理需求。",
                        "case_details_img": "./images/apiImg_new/case/cunganbuxitong_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jiangsuzhongyiyuan_logo.png",
                        "time": "",
                        "desc":"江苏省中医院联合十几个国家的海外医疗机构搭建“互联网医院远程会诊平台”，在其门户网站、PC/手机端应用中嵌入云视讯视频能力，并在医院部署高清诊室，海外华侨可在海外合作机构通过客户端与国内中医专家进行远程视频问诊，让海外侨胞也能享受中医服务。",
                        "case_details_title": "江苏省中医院海外惠侨项目",
                        "case_details_des": "江苏省中医院在实体医院的基础上，以互联网为载体，构建开放、互联的医疗信息化平台，打造互联网时代医疗服务的新生态。江苏省中医院联合英国、德国、荷兰等十几个国家的海外医疗机构搭建“互联网医院远程会诊平台”， 并与英国淑兰中医学院签署了中医远程会诊合作协议。在其门户网站、PC/手机端应用中嵌入云视讯视频能力，并在医院内署高清诊室，海外华侨可在海外合作机构通过客户端与国内中医专家进行远程视频问诊，让海外侨胞也能享受中医服务。<br/><br/>通过客户端应用，可实现智能导诊、远程预约挂号、远程视频问诊、电子处方、线上支付、快递送药的全流程就医服务。<br/><br/>2017年12月12日，全国首个中医惠侨基地“海外江苏之友中医惠侨基地”正式落成，并在当天开出全球首张跨洋中医处方。<br/><br/>2018年5月22日，举办了江苏省中医院惠侨基地专访活动暨国际中医远程会诊建设推进会，远程会诊效果受到现场观摩的国家卫计委领导、国务院侨务办公室领导及海外侨领的高度赞赏，来自于18个国家的华文媒体朋友对此进行了专访，对在全球弘扬中医文化起到了非常好的推进作用。",
                        "case_details_img": "./images/apiImg_new/case/jiangsuzhongyiyuan_img.png"
                    }
                ]
            },
            {
                "sub_id": "10",
                "event_code":"API_Qosjs",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_Qosjs",
                "event_code_new":"HOME_api_txfw_Qosjs",
                "sub_name": "QoS加速",
                "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                "description": "对指定终端用户访问特定IP时进行保障加速，提升用户游戏、观看直播等在线活动的体验。（目前仅在浙江试用）",
                "ability_icon":"data/images/api/api1-9.png",
                "guideline_img": "",
                "scene": [
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "网速保障",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "通过对指定地址的带宽申请，当客户访问该地址时提升网速。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "开发方便",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "API封装简洁，详细的接口文档，问题快速响应。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "信息安全",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "接入信息加密，保证信息安全。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "MBB带宽申请",
                        "sub_api_desc": "申请MBB（Mobile Broad Band）带宽更多资源，该API用于为某个用户申请所需的QoS，无线网络将对该用户做端到端的QoS保障。",
                        "sub_api_type": "网络加速"
                    },
                    {
                        "sub_api_name": "MBB带宽释放",
                        "sub_api_desc": "释放已申请的MBB（Mobile Broad Band）带宽资源。",
                        "sub_api_type": "网络加速"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=15",
                "cases":[
                ]
            },
            {
                "sub_id": "11",
                "event_code":"API_tpxx",
                "so_more_event_code":"API_moredetail_txkf",
                "online_event_code":"API_orderonline_txkf",
                "float_event_code":"Float_API_tpxx",
                "event_code_new":"HOME_api_txfw_tpxx",
                "sub_name": "弹屏消息",
                "close_a_deal": "",
                "description": "弹屏消息是短信的升级版，基于手机屏幕弹框提供信息推送服务，手机终端无需安装客户端，具有不易拦截、阅读率高、阅后即焚等特点，适用于验证码、订单/物流提醒、会议/事项通知、企业来电名片、客户关怀等多种应用场景。",
                "ability_icon":"data/images/api/api1_tanping.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "验证码",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/duanxinyanzheng_banner.png",
                        "scene_description": "用于下发短信验证码，手机屏幕直接弹屏显示，效果直观且无需保存。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "会议通知",
                        "scene_icon": "images/apiImg_new/scene/xiaoxi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xiaoxi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/tanpinghuiyitongzhi_banner.png",
                        "scene_description": "重要会议开始前，向参会人员下发会议通知弹屏消息，提醒参会人员。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "订单提醒",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/dingdantixing_banner.png",
                        "scene_description": "用户在门户网站或APP上完成网上交易时，向用户发送订单消息告知用户。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "快递通知",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/kuaiditongzhi_banner.png",
                        "scene_description": "快递包裹即将送达用户前，下发弹屏消息告知用户，提醒用户保持手机畅通并提前做好接收快递的准备。"
                    },
                    {
                        "scene_id": "5",
                        "scene_name": "企业名片",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/tanpingqiyemingpian_banner.png",
                        "scene_description": "可与企业热线、员工手机外呼APP相结合，在外呼时向对方手机推送一条携带企业/员工身份信息的弹屏消息，用以告知来电的身份信息，能够降低电话的拒接率、提升企业品牌形象。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "防木马、免拦截",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "终端软件无法拦截，确保信息有效传达。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "终端无门槛",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "以移动号码为主要推送对象，支持安卓、ios等所有机型，无需安装。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "阅读率高",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "推送时即时显示在用户屏幕上。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "更快响应",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "较之短信，更快的响应。"
                    },
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "注册后即可测试体验能力。如需正式使用能力，则需要进一步认证成为开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "选购与开通能力",
                        "guideline_description": "您可以前往能力详情页了解该能力的介绍、使用指导与价格等。如需试用或开通，可前往控制台选择所需的能力。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "创建应用",
                        "guideline_description": "创建应用是为了获取通信开放平台认证，用于产品开发，方便产品管理。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "线下开发",
                        "guideline_description": "基于REST原则封装能力接口，开发门槛低。您可以使用浏览器访问URL，也可以使用任何客户端通过编程语言与REAT API进行交互。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "接收状态报告接口",
                        "sub_api_desc": "用于接收发送的状态报告，通信开放平台将提交报告采用POST方式推送至客户设定的HTTP 地址。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "查询状态报告接口",
                        "sub_api_desc": "HTTP客户端向通信开放平台平台发起查询状态报告请求，用于查询消息发送的状态报告。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "发送弹屏消息接口",
                        "sub_api_desc": "HTTP客户端向通信开放平台平台发送请求，带上相应的请求参数，通信开放平台接收请求，并进行验证，验证通过后发送弹屏消息。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "消息模板申请接口",
                        "sub_api_desc": "HTTP客户端向通信开放平台平台申请弹屏消息内容模板。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "消息模板状态通知接口",
                        "sub_api_desc": "平台将弹屏消息模板内容的审核结果告知给开发者，只有审核通过的弹屏消息内容才可以被使用。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "查询消息模板状态接口",
                        "sub_api_desc": "查询已申请的弹屏消息模板的审核结果。",
                        "sub_api_type": "通信服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动通信开放平台",
                "detail_url": "http://dev.cmccopen.cn/portal/productIntroductionAction.action?eaId=26",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/dongxinbeiyou_logo.png",
                        "time": "",
                        "desc":"弹屏消息是一款基于手机屏幕弹框的信息推送服务，具有阅读率高、不易拦截、阅后即焚的特点，客户使用弹屏消息作为短信验证码，能够很好地解决短信被拦截且短信保存后占用空间的问题。",
                        "case_details_title": "东信北邮",
                        "case_details_des": "合作背景<br/>短信验证码每次都是随机生成，有效时间内无法重复使用，信息无需保存在手机上，且短信验证码存在易被拦截、到达率低、阅读率低的问题，而弹屏消息有效解决了以上问题。<br/><br/>合作成效<br/>由于弹屏消息的特性，验证码注册率进一步提升。<br/><br/>产品层<br/>&nbsp;&nbsp;&nbsp;&nbsp;1、消息不易被拦截，弹窗显示阅读率高，阅后即焚大大减少手机存储无效信息。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2、可与短信验证码共同使用，进一步提升接收率。",
                        "case_details_img": "./images/apiImg_new/case/dongxinbeiyou_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/huarenqiye_logo.png",
                        "time": "",
                        "desc":"由于骚扰电话、诈骗电话的出现，用户对陌生号码来电的拒接率居高不下，致使正常的企业来电受阻，正常的客户服务通知无法及时传达。通过弹屏消息能力在企业成员联系客户时投递一条企业名片，告知用户来电方的身份，从而减少电话的拒接率。",
                        "case_details_title": "华仁企业",
                        "case_details_des": "合作背景<br/>企业客户正常向用户去电，用户对陌生号码有防范心理，加之市场上部分安全APP误标识企业正常电话为骚扰电话，电话拒接率较高。<br/><br/>合作成效<br/>通过弹屏消息为企业来电正名，提升电话接通率。<br/><br/>产品层<br/>&nbsp;&nbsp;&nbsp;&nbsp;1、通过弹屏消息实现在手机号码、企业固话、企业热线号码（如400、95）外呼时同步投递，提升了电话接听率。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2、消息不易被拦截，弹窗显示阅读率高，阅后即焚大大减少手机存储无效信息。",
                        "case_details_img": "./images/apiImg_new/case/huarenqiye_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "event_code":"HOME_api_zhrz",
        "marketing_code":"API1",
        "name": "账号认证能力",
        "imgUrl": "images/apiImg/zhanghao.png",
        "description": "包括认证登录、号码校验等能力",
        "ability_menu": "images/apiMenu/menuIcon_02.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_tyrz",
                "so_more_event_code":"API_moredetail_hlwnl",
                "online_event_code":"API_orderonline_hlwnl",
                "float_event_code":"Float_API_tyrz",
                "event_code_new":"HOME_api_zhrz_ydrz",
                "sub_name": "移动认证",
                "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=",
                "description": "是中国移动面向移动互联网应用提供的登录及认证服务。基于运营商独有的数据网络认证+数据能力，为企业提供全面的用户账号使用和数据管理一站式解决方案，将手机号码从单一的通信行业账号打造成为服务于“通信、互联网、物联网、银行”等多行业的账号体系。",
                "ability_icon":"data/images/api/api2-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "登录",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/denglu_banner.jpg",
                        "scene_description": "调用运营商独有网关能力获取用户上网号码，用户一键授权免密登录，3秒内完成，比短信验证码登录快10倍，用于登录/注册。<br/><br/>亮点：<br/>1、网关认证无需填写密码，避免密码被劫持转发泄露，更安全；<br/>2、以号码为账号，无需填写密码，登录即注册，注册转化率提升20%以上。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "风控",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/fengkong_banner.jpg",
                        "scene_description": "调用网关认证能力实现免短验的基于手机号码的风控， 10秒内完成，比短信验证码验证快3倍，用于登录、注册、密码找回、支付等。<br/><br/>亮点：<br/>1、网关认证无需填写密码，避免密码被劫持转发泄露，更安全；<br/>2、操作便捷、低时延，适用于所有需对手机号码校验的风控场景。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "账号管理",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhanghaoguanli_banner.jpg",
                        "scene_description": "连接运营商独有大数据能力，及时知晓用户信息变更，提升账号管理效率。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "提升用户体验",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "无需记账号密码注册登录更快更便捷。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "减少用户纠纷",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "减少因二次号问题引起的投诉和纠纷。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "提升转化率",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "提升注册、应用跳转转化率。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "数据互联",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "APP与APP、数据与数据更易互联。"
                    },
                    {
                        "advantage_id": "5",
                        "advantage_name": "提升运营价值",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "账号可运营性更强，入口和广告价值更高。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "开发者注册",
                        "guideline_description": "注册成为中国移动社区开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "能力配置",
                        "guideline_description": "在开发者社区移动认证专区勾选和配置能力。"
                    },
                    {
                        "uideline_name": "开发集成",
                        "guguideline_id": "3",
                        "gideline_description": "进行能力集成、联调、测试。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "发布上线",
                        "guideline_description": "完成能力接入，进行商务签约（一键登录无需签约），发布应用上线。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "手机号码一键登录",
                        "sub_api_desc": "开放网关号码认证能力，提供本机号码免密一键注册+登录服务。",
                        "sub_api_type": "统一认证能力"
                    },
                    {
                        "sub_api_name": "本机号码校验",
                        "sub_api_desc": "利用应用层无法截取的网络层号码认证能力验证号码的真实性，是对短验的优化。",
                        "sub_api_type": "统一认证能力"
                    },
                    {
                        "sub_api_name": "二次号",
                        "sub_api_desc": "手机号码长时间停用会被回收并再次放号，引发一系列账号管理难题，二次号查询通过对比手机号码入网时间和应用注册时间可快速判断是否为二次放号，能有效预防二次号账号登录纠纷，保护账号体系安全。",
                        "sub_api_type": "统一认证能力"
                    },
                    {
                        "sub_api_name": "防刷单",
                        "sub_api_desc": "利用运营商独有的实时号码库、网络认证取号能力及大数据能力（通信行为、消费偏向等标签）帮助应用判断是否虚假手机账号注册和登录，降低养卡刷单几率。",
                        "sub_api_type": "统一认证能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动互联网能力平台",
                "detail_url": "http://dev.10086.cn/cmpassport/",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_music.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/aiqiyi_logo.jpg",
                        "time": "",
                        "desc":"爱奇艺接入移动认证，实现用户1.5秒快捷登录。",
                        "case_details_title": "爱奇艺 X 移动认证",
                        "case_details_des": "网络视频在中国的发展脚步很快，作为中国视频行业领先者，一贯奉行以“满足用户‘悦享品质’的生活追求”为宗旨的爱奇艺，近日与中国移动认证合作，接入移动认证一键登录能力，实现用户1.5秒快捷登录，根本降低用户流失率，赋能视频极速体验，共创轻松娱乐新生活。",
                        "case_details_img": "./images/apiImg_new/case/aiqiyi_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_pay.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhifubao_logo.jpg",
                        "time": "",
                        "desc":"移动认证的本机号码校验能力，为支付宝用户带来了“简单、安全、快速”的注册体验。",
                        "case_details_title": "支付宝",
                        "case_details_des": "支付宝接入本机号码校验能力后，用户注册时，网关自动校验用户输入的号码是否为本机号码，匹配成功无需验证码即可完成注册。用户校验身份无需漫长的等待，更无需输入短信验证码等信息，提高用户体验。",
                        "case_details_img": "./images/apiImg_new/case/zhifubao_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/xiaomi_logo.jpg",
                        "time": "",
                        "desc":"移动认证为小米终端系统提供运营商独有的用户手机号码识别能力，实现了操作系统层的号码认证能力,为小米提供新的用户身份识别和认证交互技术，实现用户身份映射关系。",
                        "case_details_title": "小米 X 移动认证",
                        "case_details_des": "移动认证为小米终端系统提供运营商独有的用户手机号码识别能力，实现了操作系统层的号码认证能力,为小米提供新的用户身份识别和认证交互技术，实现用户身份映射关系。优化体验流程，让用户实现3秒快速注册登录，帮助小米拉新促活，增加用户粘度。",
                        "case_details_img": "./images/apiImg_new/case/xiaomi_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "3",
        "event_code":"HOME_api_wlw",
        "marketing_code":"API1",
        "name": "物联网能力",
        "imgUrl": "images/apiImg/internet.png",
        "description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力",
        "ability_menu": "images/apiMenu/menuIcon_03.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_wlkgl",
                "so_more_event_code":"API_moredetail_wlwnlkf",
                "online_event_code":"",
                "float_event_code":"Float_API_wlkgl",
                "event_code_new":"HOME_api_wlw_wlkgl",
                "sub_name": "物联卡管理",
                "close_a_deal": "",
                "description": "查询用户号码信息、状态信息、多APN信息、用户的余额信息、用户当月的GPRS用量、用户的套餐资费、集团信息、短信用量、流量池使用情况、避免业务中断。同时支持客户能够发送上行短信、下行短信、终端通信等。",
                "ability_icon":"data/images/api/api3-5.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "物联卡终端控制",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "物联卡终端控制短信业务是面向物联网客户提供的业务平台与物联网终端之间以短信的形式进行终端控制的增值业务。支持上行短信、下行短信（模板短信）。具备以下优势：<br/><br/>1、解决终端节电问题：利用物联网终端控制降低终端电耗，延长待机时间；<br/><br/>2、减少平台连接数：利用物联网终端控制减少平台连接数，提升平台资源利用率；<br/><br/>3、弥补现有不足：短信具有自动寻址优点，弥补了GPRS、3G、4G的不足。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "物联卡位置定位",
                        "scene_icon": "images/apiImg_new/scene/dingwei_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/dingwei_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "物联卡位置定位基于基站定位技术，不需要终端支持，集团客户可以通过调用位置定位API获取目标终端所在基站的位置信息。具备以下优势：<br/><br/>1、粗精度定位领导者：作为GPS定位的补充，开放运营商优势资源，基于基站定位技术，无需终端支持，客户通过调用位置定位API获取终端位置信息；<br/><br/>2、低成本、低功耗：物联卡位置定位无需终端支持，从而减少了终端成本，功耗相对较低，省钱省电；<br/><br/>3．使用环境范围宽广：有移动信号即可实现物联卡位置定位，极端环境可用，如室内、地下室、隧道。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "物联卡状态数据",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "将物联卡中的开关机信息、在线信息等通信状态信息以API方式开放给物联卡客户，帮助物联卡客户进行业务情况分析、用户使用行为分析、故障预警、故障定位等。具备以下优势：<br/><br/>1、降低运营成本：为客户提供小流量套餐包，从而降低客户成本；<br/><br/>2、提高管理效率：将开关机信息、在线信息等能力，以API或SDK的方式开放给客户，从而提升客户管理效率；<br/><br/>3、提升服务质量：为客户提供远程查询、远程控制、故障预警等服务，帮助客户进行业务情况分析。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "核心电信能力开放",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "整合核心电信资源，向集团客户开放物联卡账务、通信、状态、控制等多种API能力。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "安全调用机制",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "白名单鉴权、调用IP鉴权、卡号归属鉴权等一系列安全机制，保证了API调用的安全性。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "高频度调用",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "API服务平台采用负载均衡分布式计算系统，支撑每日亿级访问。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "VIP资源保障",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "合理平衡VIP客户和普通客户API调用需求，优先保障VIP客户资源。"
                    },
                    {
                        "advantage_id": "5",
                        "advantage_name": "API接入技术支持",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "专业技术团队负责API接入问题解决，提供整体解决方案。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请",
                        "guideline_description": "填写申请信息"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "认证",
                        "guideline_description": "公司资质认证"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "使用",
                        "guideline_description": "开始使用能力"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "用户信息管理",
                        "sub_api_desc": "查询用户号码信息、状态信息、多APN信息等。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "集团信息管理",
                        "sub_api_desc": "查询到集团相关信息，便于管理集团用户信息及套餐使用情况。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "账务管理",
                        "sub_api_desc": "查询用户的余额信息，便于及时充值，避免业务中断。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "用量管理",
                        "sub_api_desc": "查询用户当月的GPRS用量、短信用量、流量池使用情况，便于掌握用户的使用情况。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "套餐管理",
                        "sub_api_desc": "查询用户的套餐资费情况。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "短信管理",
                        "sub_api_desc": "客户能够发送上行短信、下行短信、终端通信等。",
                        "sub_api_type": "物联网"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动物联卡能力开放平台",
                "detail_url": "http://api.iot.10086.cn/",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhongweikeji_logo.png",
                        "time": "",
                        "desc":"中位科技F3-中位物联网监管平台成功应用物联卡流量信息服务方案，极大的推动了车联网服务的纵深发展。",
                        "case_details_title": "中位科技F3-中位物联网监管平台",
                        "case_details_des": "中国位置服务联盟，由300多家企业构成，覆盖全国90%地级市。中位科技作为联盟成员，主要主导并提供车联网后装解决方案，服务了超1000家的企业客户，在OneLink能力的帮助下，提升了其现有F3平台的综合能力，包括异常报警、实时监控、物联卡管理、为之轨迹、终端控制等能力，为客户提供更多优质服务。目前月调用量接近3亿次。",
                        "case_details_img": "./images/apiImg_new/case/zhongweikeji_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jinka_logo.png",
                        "time": "",
                        "desc":"金卡高科技股份有限公司成功应用通信状态数据服务方案，极大的推动了能源行业服务的纵深发展。",
                        "case_details_title": "金卡",
                        "case_details_des": "金卡智能作为智慧燃气行业领导企业之一，在公用事业领域客户提供智能设备及端到端解决方案。服务企业超2000家，服务城市家庭用户超3500万。在OneLink能力的帮助下，丰富了现有能力，包括故障预警、远程抄表、物联卡管理、位置定位、风险控制等能力，为客户提供更多优质服务。目前月调用量近9000万",
                        "case_details_img": "./images/apiImg_new/case/jinka_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_wlwyykf",
                "so_more_event_code":"API_moredetail_OneNet",
                "online_event_code":"",
                "float_event_code":"Float_API_wlwyykf",
                "event_code_new":"HOME_api_wlw_wlwyykf",
                "sub_name": "物联网应用开发",
                "close_a_deal": "",
                "description": "OneNET平台提供近300种API包括：设备管理、数据管理、规则引擎、消息命令下发等，帮助开发者轻松实现设备接入与设备连接，快速完成产品开发部署；应用孵化器帮助开发者十分钟完成轻应用开发。",
                "ability_icon":"data/images/api/api3-6.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "智慧生活",
                        "scene_icon": "images/apiImg_new/scene/shenghuo_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shenghuo_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhihuishenghuo_banner.jpg",
                        "scene_description": "智能设备通过接入OneNET平台，将设备数据上传至平台，并与手机APP连接，即可实现设备管理、提醒及数据实时监测；设置的预警阈值，进行预警管理，并实现手机端的远程控制联动。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "智慧农业",
                        "scene_icon": "images/apiImg_new/scene/nongye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/nongye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhihuinongye_banner.jpg",
                        "scene_description": "本地化部署，构建精细化农业示范，利用动态自组织传感器网络，采集农业作物、农场牲畜、农牧环境等实时信息，如温度、光照度、土壤酸碱度、农业对象无力、生理情况，实现农业规模化、集约化和数字化管理，从而构建以OneNET为中心的农牧科学发展平台。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "共享经济",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/gongxiangjingji_banner.jpg",
                        "scene_description": "通过OneNET云服务方便智能同步所有终端设备数据、应用数据、并基于海量数据处理能力实现分析展现；帮助设备生产、运营方对设备监控、预警；对终端业务使用情况进行分析，并提供决策支持；综合管理系统设备的信息及人员信息，实现科学化管理；与支付系统对接，实现支付指令后对前端设备的方向控制功能。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "智慧市政",
                        "scene_icon": "images/apiImg_new/scene/zhengfu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhengfu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhihuishizheng_banner.jpg",
                        "scene_description": "基于OneNET平台，实现对市政设备的远程集中控制与管理，具有可视化远程控制、故障主动报警、防盗监控、远程控制、以及其他传感扩展应用等功能。基于OneNET协议兼容特性，实现不同厂商的设备协议兼容和互通。"
                    },
                    {
                        "scene_id": "5",
                        "scene_name": "车联网",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/chelianwang_banner.jpg",
                        "scene_description": "OneNET对所有车辆实现接入管理，对数据进行采集储存并提供给上层应用。平台提供基础管理、运用管理、安全管理、机务管理、车辆基础管理等基础通用功能，同时，针对不同行业还提供个性化定制服务功能。"
                    },
                    {
                        "scene_id": "6",
                        "scene_name": "智能表计",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhinengbiaoji_banner.jpg",
                        "scene_description": "基于OneNET提供底层采集数据的上报、存储和检索，以及设备状态和终端设备的控制管理，充分利用平台对海量连接、协议转换、消息路由等核心功能的支持实现业务逻辑和功能。在此基础上，应用基于企业应用图形界面展示工具，客户可实现公司业务的工艺图设计和展示，通过工艺图上节点与采集量测关联，实现数据的动态展示。"
                    },
                    {
                        "scene_id": "7",
                        "scene_name": "智能制造",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhinengzhizao_banner.jpg",
                        "scene_description": "对系统运行状况进行远程监控，实现设备运行指标可视化管理、分析、统计，自动触发预测性维修保养和实时维修保养任务；通过智能管控，准确设置更新维护周期，控制并降低运行能耗。"
                    },
                    {
                        "scene_id": "8",
                        "scene_name": "仓储物流",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/cangchuwuliu_banner.jpg",
                        "scene_description": "基于OneNET平台，兼容车载终端协议，能够通过车载终端将运输过程中的环境温度、车载位置等信息实时上传；实时将冷链武物品装载、冷链物品的卸货状态实时上传并和车辆位置、环境温度等进行匹配供上层数据分析。"
                    },
                    {
                        "scene_id": "9",
                        "scene_name": "智慧消防",
                        "scene_icon": "images/apiImg_new/scene/xiaofang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xiaofang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhihuixiaofang_banner.jpg",
                        "scene_description": "依托OneNET平台，在相关位置部署消防物联网传感器，实时监控消防设施运行状况，实现提前发现火灾隐患，开展快速有效的处置；管理平台提供火警信息、地点、时间、频次等报表展现功能，同时提供起火位置追溯、电话记录查询等，为火灾调查提供严谨的科学依据。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "大连接",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "OneNET兼容十余种网络协议，支持多种接入方式，轻松接入智能家居、车载终端、穿戴设备、行业终端等。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "云平台",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "OneNET专注物联网PaaS云服务，满足原型开发、产品商用和运营管理需求。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "易开发",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "OneNET终端快速接入、配置化开发中心、300+API满足开发场景、提供应用孵化器满足拖拽式轻应用开发。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "大数据",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "OneNET提供海量大数据分析引擎，助您从海量数据中遇见未来。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请入驻",
                        "guideline_description": "注册成为OneNET开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "产品创建",
                        "guideline_description": "结合应用场景选择接入协议完成产品的创建工作。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "硬件接入",
                        "guideline_description": "使用平台提供的SDK/认证模组进行二次开发，完成硬件与平台的对接工作。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "应用开发 & 上线发布",
                        "guideline_description": "使用OneNET提供的多种API进行应用的开发。<br/>发布产品。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "设备注册",
                        "sub_api_desc": "通过POST方法，生成新设备及key或获取原有设备及key。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "更新设备注册属性",
                        "sub_api_desc": "PUT方法更新设备注册属性。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "新增设备",
                        "sub_api_desc": "POST方法新增设备的详细信息。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "更新设备",
                        "sub_api_desc": "PUT方法更新设备信息。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询设备",
                        "sub_api_desc": "通过GET方法，api内置字段查询设备信息。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "批量查询设备状态",
                        "sub_api_desc": "通过GET方法，设备id查询设备状态。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "批量查询设备最新数据",
                        "sub_api_desc": "通过GET方法，设备id查询设备最新数据。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "删除设备",
                        "sub_api_desc": "通过DELETE方法，删除设备。删除设备会删除该设备下所有数据流和数据点。删除设备动作是异步的，系统会在后续逐步删除该设备下的数据流和数据点。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "新增数据流",
                        "sub_api_desc": "通过POST方法，新增数据流。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "更新数据流",
                        "sub_api_desc": "通过PUT方法，更新数据流。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询单个数据流",
                        "sub_api_desc": "通过GET方法，设备id查询单个数据流。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询多个数据流",
                        "sub_api_desc": "通过GET方法，设备id查询多个数据流。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "删除数据流",
                        "sub_api_desc": "通过DELETE方法，删除数据流。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "新增数据点",
                        "sub_api_desc": "通过POST方法，新增数据点，可以一次性向设备云上传多个数据流，每个数据流中可以包括多个数据点。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询数据点",
                        "sub_api_desc": "通过GET方法，可查询多个数据流某一段时间内的的多个数据点的数据。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "新增触发器",
                        "sub_api_desc": "通过POST方法，新增触发器。触发器的含义是：当指定范围内的数据点满足触发条件的要求时，会向url参数指定的地址发送post请求。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "更新触发器",
                        "sub_api_desc": "通过PUT方法，更新触发器。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询单个触发器",
                        "sub_api_desc": "通过GET方法，设备id查询单个触发器。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "模糊查询触发器",
                        "sub_api_desc": "通过GET方法，设备id查询多个触发器。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "删除触发器",
                        "sub_api_desc": "通过DELETE方法，删除触发器。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "发送命令",
                        "sub_api_desc": "通过POST方法，发送命令。命令是指应用发送命令数据给OneNET设备云、再由OneNET设备云转发给终端设备、终端设备收到命令后可以向设备云反馈响应的一种工作机制。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询命令状态",
                        "sub_api_desc": "通过GET命令，查询命令状态。",
                        "sub_api_type": "物联网"
                    },
                    {
                        "sub_api_name": "查询命令响应",
                        "sub_api_desc": "通过GET命令，查询命令响应内容。",
                        "sub_api_type": "物联网"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动OneNET平台",
                "detail_url": "",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/chongdianbao_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/chongdianbao_logo.png",
                        "time": "",
                        "desc":"在众多共享经济的案例中，整套物联网系统通过设备联网，扫码支付，数据汇集等方式，可以为设备运营者面向更大的市场省去大量的人力管理成本，同时，由于运营数据的汇集，使得管理者更容易通过数据进行当前运营状况的分析，作为运营决策的重要依据。",
                        "case_details_title": "充电宝",
                        "case_details_des": "案例背景<br/>共享经济目前已成为信息时代中物联网行业最大浪潮之一，共享经济的飞速发展，将移动扫码支付与各类不同的联网终端结合，实现便捷支付、终端共享、统一管理、数据汇集、高效运维，在促进人民的生活变得更加便捷的同时，也促使了一批诸如摩拜单车的高质量企业的诞生。<br/><br/>案例场景<br/>共享经济项目针对制造企业以共享模式产业产品生产为主，所有产品可不做任何改变，在接口上由第三方公司定制化开发，形成设备，通信，上层应用为主的一体化产品，适应于所有以公共场合租赁模式的行业，实现共享运营。主要有自行车，充电宝，洗衣机，自行车，娃娃机，按摩椅，摇摇车等。<br/>共享经济的案例中利用物联网公司的“云管端”一体的核心能力，从底层芯片及协议为客户定制化开发，主要定制化开发数据采集器，与终端设备进行通信，实现终端设备信息的收集，设备运行状态的远程控制，设备使用状况的图形分析。<br/>数据采集器搭载可管理的二维码，配合后台管理系统，具备完善的运营功能，实现共享经济下业务的运营，数据采集器可以在设备内部，二维码在设备外侧，方便扫码，灵活使用。案例普遍采用的架构如图所示。<br/>图中各层释义如下：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1) 感知层：由传统设备与扫码支付模块，配合二维码组成，扫码支付模块与传统设备通过可定制开发协议通信，实现设备数据采集与控制，二维码携带设备信息，完成支付后传递数据。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2) 网络层：实现数据的互联互通，提供传输通道，主要是运营商蜂窝网络，主要采用2G进行传输。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3)	平台层：实现所有硬件设备的数据采集和存储的云平台，并提供开发接口，简化方案整体架构和总体投资成本。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4)	应用层：展示上层应用-运营管理平台，通过不同权限管理员实现商户管理，设备管理，订单管理，收益管理，数据分析等功能。",
                        "case_details_img": "./images/apiImg_new/case/chongdianbao_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/anmoyi_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/anmoyi_logo.png",
                        "time": "",
                        "desc":"共享按摩椅的整套物联网系统通过设备联网，扫码支付，数据汇集等方式，可以为设备运营者面向更大的市场省去大量的人力管理成本，同时，由于运营数据的汇集，使得管理者更容易通过数据进行当前运营状况的分析，作为运营决策的重要依据。",
                        "case_details_title": "共享按摩椅案例",
                        "case_details_des": "案例背景<br/>共享经济目前已成为信息时代中物联网行业最大浪潮之一，共享经济的飞速发展，将移动扫码支付与各类不同的联网终端结合，实现便捷支付、终端共享、统一管理、数据汇集、高效运维，促进人民的生活变得更加舒适便捷。<br/><br/>客户案例<br/>福建秒道科技有限公司（http://miaodaokeji.com/wb/ ）是一家专业从事共享按摩椅的生产制造以及设备运营的科技公司，其利用OneNET平台提供的设备接入、设备管理、数据存储、消息触发、应用使能等功能，实现了互联网+传统按摩椅生产制造的转型升级。<br/>共享按摩椅主要是利用了物联网技术，通过在原来需要人工管理的租赁使用式的按摩椅的主控板上加装通信模块，使其物联网化。改进之后的按摩椅可以通过网络上报位置信息，当前设备使用状态等信息，信息汇聚之后，可以为运营者提供更加有效的数字运营工具。同时，由于设备联网，结合移动支付、二维码等成熟技术，使得设备的使用变得更加便捷，用户可以自助式完成订单下达，移动端支付以及远程设备启动，省去了大量的人力监管成本，可以方便的部署到诸如机场、车站、宾馆、KTV等场所。<br/><br/>案例结构<br/>本案例中，客户利用OneNET平台的设备接入（包含设备鉴权和自定义脚本解析）、设备管理、数据存储、消息触发、应用使能等功能。在上述功能的基础上用户需要进行自己的业务服务的开发，包括用户管理，数据分析，APP开发等，其他与设备以及设备数据相关的功能，可以利用平台提供的API接口来实现。如下图所示：",
                        "case_details_img": "./images/apiImg_new/case/anmoyi_img.png"
                    }
                ]
            },
            // {
            //     "sub_id": "3",
            //     "event_code":"API_zyhw",
            //     "so_more_event_code":"API_moredetail_OneNet",
            //     "online_event_code":"",
            //     "float_event_code":"Float_API_zyhw",
            //     "sub_name": "中移和物",
            //     "close_a_deal": "",
            //     "description": "中移和物——一站式智能化SAAS服务平台，通过联网模块+开发者平台+APP应用形成智能硬件端到端的解决方案。",
            //     "ability_icon":"data/images/api/api3_hewu.png",
            //     "guideline_img": "",
            //     "scene": [
            //         {
            //             "scene_id": "1",
            //             "scene_name": "智慧生活",
            //             "scene_icon": "images/apiImg_new/scene/shenghuo_icon.png",
            //             "scene_shade_icon": "images/apiImg_new/scene/shenghuo_shade_icon.png",
            //             "scene_banner": "images/apiImg_new/scene/zhihuishenghuo_banner.jpg",
            //             "scene_description": "智能设备通过接入中移和物，将设备数据上传至平台，并与手机APP连接，即可实现设备管理、提醒及数据实时监测；设置的预警阈值，进行预警管理，并实现手机端的远程控制联动。"
            //         }
            //     ],
            //     "advantage": [
            //         {
            //             "advantage_id": "1",
            //             "advantage_name": "快速的应用开发",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
            //             "advantage_description": "我们为您提供丰富的H5模板和UI组件，帮助您快速的完成应用开发。"
            //         },
            //         {
            //             "advantage_id": "2",
            //             "advantage_name": "标准化APP",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
            //             "advantage_description": "提供标准化APP，免去用户为多个产品安装多个APP的烦恼，同时减少厂家的开发成本。"
            //         },
            //         {
            //             "advantage_id": "3",
            //             "advantage_name": "开放的平台生态",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
            //             "advantage_description": "接入第三方应用开发者，为厂商提供更多应用层面的支持"
            //         },
            //         {
            //             "advantage_id": "4",
            //             "advantage_name": "全方位的云服务",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
            //             "advantage_description": "我们为您提供从设备接入、数据存储到应用系统的整套云服务，省去您自己搭建平台的成本。"
            //         }
            //     ],
            //     "guideline": [
            //         {
            //             "guideline_id": "1",
            //             "guideline_name": "创建产品",
            //             "guideline_description": "注册成为和物平台开发者。"
            //         },
            //         {
            //             "guideline_id": "2",
            //             "guideline_name": "产品功能定义 & 界面开发",
            //             "guideline_description": "自定义产品所需的功能，平台会根据定义的功能生成相应SDK；<br/>根据提供的H5模板快速完成设备应用的开发，实现对设备的控制。"
            //         },
            //         {
            //             "guideline_id": "3",
            //             "guideline_name": "设备接入调试 & 信息配置",
            //             "guideline_description": "下载设备接入SDK，并根据开发文档将设备接入进行产品调试;<br/>配置产品在APP展示所需的图文信息。"
            //         },
            //         {
            //             "guideline_id": "4",
            //             "guideline_name": "批量生产",
            //             "guideline_description": "发布产品，审核通过后即可批量生产。"
            //         }
            //     ],
            //     "api_list": [
            //         {
            //             "sub_api_name": "APP-和通行证登录",
            //             "sub_api_desc": "可以通过和通行证进行一键登录",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "APP-设备绑定、分享",
            //             "sub_api_desc": "对购买的智能产品进行点对点的配网绑定，同时对绑定的产品进行权限控制分享",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "APP-远程操控",
            //             "sub_api_desc": "通过APP对产品进行远程的监控与操控",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "APP-设备管理",
            //             "sub_api_desc": "对多产品进行统一的管理与管控",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-MCU SDK生成",
            //             "sub_api_desc": "平台提供MCU SDK业务功能的统一标准化打包与下载",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-功能点自定义",
            //             "sub_api_desc": "根据产品功能自行进行功能点配置与定义，同时平台提供行业产品标准化的功能点，可以一键生成功能能力",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-H5自由配置",
            //             "sub_api_desc": "模块化的方式进行H5界面配置，无需开发",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-在线调试",
            //             "sub_api_desc": "提供虚拟调试与真实设备在线调试功能，实现三端联调检查",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-产品管理",
            //             "sub_api_desc": "对多产品进行统计管理",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-设备管理",
            //             "sub_api_desc": "对多产品设备进行综合统计管理",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-用户管理",
            //             "sub_api_desc": "对用户进行实施的统计与管理",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-用户反馈",
            //             "sub_api_desc": "实施处理用户反馈的问题",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "SaaS端-云端定位/定时/倒计时",
            //             "sub_api_desc": "云端定义产品的功能，是定位、定时、倒计时等能力",
            //             "sub_api_type": "平台类"
            //         },
            //         {
            //             "sub_api_name": "wif/NB/2G4G联网模块",
            //             "sub_api_desc": "提供标准化的联网模块，实现上电即可连接平台",
            //             "sub_api_type": "平台类"
            //         }
            //     ],
            //     "ability_recommen": [
            //         {
            //             "recommen_id": "1",
            //             "api_id": "1",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "物联网能力",
            //             "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
            //         },
            //         {
            //             "recommen_id": "2",
            //             "api_id": "3",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "数字家庭能力",
            //             "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
            //         },
            //         {
            //             "recommen_id": "3",
            //             "api_id": "0",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "数字内容能力",
            //             "recommen_description": "包括视频点播、广告发布等能力。"
            //         },
            //         {
            //             "recommen_id": "4",
            //             "api_id": "12",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "云服务能力",
            //             "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
            //         }
            //     ],
            //     "sub_api_owner": "OneNET",
            //     "detail_url": "https://open.iot.10086.cn/hewu#/",
            //     "cases":[
            //     ]
            // },
            // {
            //     "sub_id": "4",
            //     "event_code":"API_spnl",
            //     "so_more_event_code":"API_moredetail_OneNet",
            //     "online_event_code":"",
            //     "float_event_code":"Float_API_spnl",
            //     "sub_name": "视频能力",
            //     "close_a_deal": "",
            //     "description": "视频能力基于中移物联OneNET设备云平台，构建了视频设备接入能力，为用户提供开放接入，远程设备控制，视频推流和云端分发等底层核心能力，并提供二次开发套件，方便用户定制开发自身行业应用。",
            //     "ability_icon":"data/images/api/api3_shipin.png",
            //     "guideline_img": "",
            //     "scene": [
            //         {
            //             "scene_id": "1",
            //             "scene_name": "课堂视频监护",
            //             "scene_icon": "images/apiImg_new/scene/xuexi_icon.png",
            //             "scene_shade_icon": "images/apiImg_new/scene/xuexi_shade_icon.png",
            //             "scene_banner": "images/apiImg_new/scene/shipinjiankong_banner.png",
            //             "scene_description": "在课堂安放摄像头，采集小朋友在课堂上课、游戏和活动的实时视频。通过OneNET提供的视频能力，满足多人查看视频直播的需求；同时也提供用户管理、设备管理、消息管理、权限管理等功能；家长可以通过独立APP或微信公众号来查看实时视频和历史视频。并可根据实际需求，自定义摄像头开启的时间段，更加灵活易用。"
            //         },
            //         {
            //             "scene_id": "2",
            //             "scene_name": "高危生产环境监控",
            //             "scene_icon": "images/apiImg_new/scene/shipin_icon.png",
            //             "scene_shade_icon": "images/apiImg_new/scene/shipin_shade_icon.png",
            //             "scene_banner": "images/apiImg_new/scene/huanjingjiankong_banner.png",
            //             "scene_description": "在高危的生产环境部署监控，如煤矿生产厂中，通过部署摄像头，将视频流数据上传到OneNET平台，以完成实时的视频监控，在发生紧急情况时，急救人员可以查看到实时的情况，以便采取下一步搜救行动；在事后也可以通过视频云上面的历史视频，进行调查协助查明原因。"
            //         },
            //         {
            //             "scene_id": "3",
            //             "scene_name": "防灾监控",
            //             "scene_icon": "images/apiImg_new/scene/yiliao_icon.png",
            //             "scene_shade_icon": "images/apiImg_new/scene/yiliao_shade_icon.png",
            //             "scene_banner": "images/apiImg_new/scene/fangzaijiankong_banner.png",
            //             "scene_description": "在灾害常发生的地方进行物联网监控，在进行数据检测的同时，通过部署摄像头，将视频流数据上传到OneNET平台，以完成实时的视频监控，防灾人员可以通过业务平台实时查看到现场的灾情情况，实时的视频流数据能够带来较多的有用信息，以便防灾人员部署下一步工作。"
            //         }
            //     ],
            //     "advantage": [
            //         {
            //             "advantage_id": "1",
            //             "advantage_name": "多终端接入",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
            //             "advantage_description": "基于OneNET统一接入，支持各种类型视频终端接入，具备海量终端接入能力。"
            //         },
            //         {
            //             "advantage_id": "2",
            //             "advantage_name": "开发便捷",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
            //             "advantage_description": "提供终端侧SDK、播放侧SDK，让开发者可以更轻松、便捷的开发视频类应用。"
            //         },
            //         {
            //             "advantage_id": "3",
            //             "advantage_name": "性能优越",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
            //             "advantage_description": "视频性能优越，端到端的低延时，让用户有良好流畅的使用体验。"
            //         },
            //         {
            //             "advantage_id": "4",
            //             "advantage_name": "节省成本",
            //             "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
            //             "advantage_description": "依托中国移动在数据传输、数据存储方面的成本优势，为开发者降低视频应用部署成本。"
            //         }
            //     ],
            //     "guideline": [
            //         {
            //             "guideline_id": "1",
            //             "guideline_name": "设备集成SDK",
            //             "guideline_description": "下载视频能力SDK并集成到设备中"
            //         },
            //         {
            //             "guideline_id": "2",
            //             "guideline_name": "创建产品",
            //             "guideline_description": "登陆OneNET平台，创建视频类产品"
            //         },
            //         {
            //             "guideline_id": "3",
            //             "guideline_name": "接入设备",
            //             "guideline_description": "根据开发文档、获取产品注册码将设备接入OneNET平台"
            //         },
            //         {
            //             "guideline_id": "4",
            //             "guideline_name": "应用开发",
            //             "guideline_description": "可根据需求进行控制设备、实时查看视频等操作开发应用"
            //         }
            //     ],
            //     "api_list": [
            //         {
            //             "sub_api_name": "查询设备下通道信息",
            //             "sub_api_desc": "查询设备下通道信息",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "删除设备下通道",
            //             "sub_api_desc": "删除设备下通道",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "设备下增加通道",
            //             "sub_api_desc": "若通道存在则更新，不存在则增加",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "查询设备在线状态",
            //             "sub_api_desc": "查询设备在线状态",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "命令下发",
            //             "sub_api_desc": "下发命令到设备",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "查询消息模板状态",
            //             "sub_api_desc": "HTTP客户端提交消息模板的查询请求，平台返回消息模板的内容及审核状态。",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "命令下发状态查询",
            //             "sub_api_desc": "查询设备接收下发命令的状态",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "命令下发回应查询",
            //             "sub_api_desc": "设备下发状态，设备回应，在设备回复平台后的TTL = 60s",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "本地视频列表查询指令",
            //             "sub_api_desc": "本地视频列表查询指令",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "本地视频列表指令响应查询",
            //             "sub_api_desc": "本地视频列表指令响应查询",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "设置码流级别",
            //             "sub_api_desc": "设置码流级别",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "云台控制",
            //             "sub_api_desc": "云台控制",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "拉流地址获取",
            //             "sub_api_desc": "获取拉流地址，但需要对返回接口进行拼接",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "查询设备透传消息",
            //             "sub_api_desc": "查询设备透传消息",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "播放记录列表查询",
            //             "sub_api_desc": "播放记录列表查询",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "推流记录列表查询",
            //             "sub_api_desc": "推流记录列表查询",
            //             "sub_api_type": "能力类"
            //         },
            //         {
            //             "sub_api_name": "摄像头禁用/启用接口",
            //             "sub_api_desc": "摄像头禁用/启用接口",
            //             "sub_api_type": "能力类"
            //         }
            //     ],
            //     "ability_recommen": [
            //         {
            //             "recommen_id": "1",
            //             "api_id": "1",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "物联网能力",
            //             "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
            //         },
            //         {
            //             "recommen_id": "2",
            //             "api_id": "3",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "数字家庭能力",
            //             "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
            //         },
            //         {
            //             "recommen_id": "3",
            //             "api_id": "0",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "数字内容能力",
            //             "recommen_description": "包括视频点播、广告发布等能力。"
            //         },
            //         {
            //             "recommen_id": "4",
            //             "api_id": "12",
            //             "recommen_icon": "./images/apiImg_new/recommen_icon.png",
            //             "recommen_name": "云服务能力",
            //             "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
            //         }
            //     ],
            //     "sub_api_owner": "OneNET",
            //     "detail_url": "https://open.iot.10086.cn/doc/art470.html#108",
            //     "cases":[
            //         {
            //             "image_url" :"./images/apiImg_new/case/yanglaokanhu_icon.png",
            //             "video_url": "",
            //             "cases_icon": "./images/apiImg_new/case/yanglaokanhu_logo.jpg",
            //             "time": "",
            //             "desc":"智慧型老人摄像头看护平台将摄像头设计成具有自动联网传输视频。长期装置在老人住所，可以帮助看护人员远程看护老人，了解老人生活，身体情况。在第一时间远程响应看护老人的需求，通过沟通及远程掌握的实际情况，及时上门为老人提供相关服务。",
            //             "case_details_title": "基于中国移动OneNET的智慧养老看护系统方案",
            //             "case_details_des": "应用场景<br/>智慧型老人摄像头看护平台将摄像头设计成具有自动联网传输视频。长期装置在老人住所，可以帮助看护人员远程看护老人，了解老人生活，身体情况。在第一时间远程响应看护老人的需求，通过沟通及远程掌握的实际情况，及时上门为老人提供相关服务。<br/>看护人员亦可在前往从事老人看护工作时，携带摄像头，其SD卡实时录像功能，能对工作进行实时记录，并实时上报管理平台。以每天工作8小时，服务时间6小时为例，最大支持128G存储卡，可存储约2个月历史工作视频。<br/>基于此平台的看护工作，在很大程度上提升了服务体验及服务水平。<br/><br/>方案架构<br/>方案利用中国移动公司提供的OneNet开放平台核心及平台视频能力为基础，结合网络、视频硬件设备，运用OneNet自定义协议扩展能力实现定制化产品。<br/>主要定制实现硬件设备、OneNet云平台、用户终端的互联互通。完成实时音视频采集、实时信令交互、远程网络通话、音视频存储服务。<br/><br/>网络架构如图所示：<br/><br/><img src='./images/apiImg_new/case/yanglaokanhu_img1.png' alt=''/><br/>业务流程如图所示：<br/><img src='./images/apiImg_new/case/yanglaokanhu_img2.png' alt=''/><br/><br/>方案优势<br/>方案可主要依托于中国移动运营商的建设能力和运营能力，提供本地化的服务和技术支持，拥有更专业更稳定的售后保障体系，同时方案本身具有前瞻性，满足后续发展需求，更加方便扩容与维护，节省整体TCO。<br/>整体方案具备良好的横向和纵向扩展能力，用以支撑用户群体的不断增长。基于Oauth鉴权机制，每模型均支持分层，分级管理。可集中运营，亦可小规模独立构成服务系统。<br/><br/>产品详情<br/><br/><img src='./images/apiImg_new/case/yanglaokanhu_img3.jpg' alt=''/>",
            //             "case_details_img": ""
            //         }
            //     ]
            // }
        ]
    },
    {
        "id": "4",
        "event_code":"HOME_api_szjt",
        "marketing_code":"API1",
        "name": "数字家庭能力",
        "imgUrl": "images/apiImg/shuzi.png",
        "description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力",
        "ability_menu": "images/apiMenu/menuIcon_04.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_AndLink",
                "so_more_event_code":"API_moredetail_Andlink",
                "online_event_code":"API_orderonline_Andlink",
                "float_event_code":"Float_API_AndLink",
                "event_code_new":"HOME_api_szjt_AndLink",
                "sub_name": "AndLink",
                "close_a_deal": "http://open.home.komect.com/dev/userLogin.action",
                "description": "基于中国移动智能网关的And-link快连方案免除了常用的智能设备连接wifi过程中的ssid、密码输入及切换网络等操作过程，只需一键触发即可实现智能设备快速、安全地接入家 庭WiFi网络。",
                "ability_icon":"data/images/api/api4-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "设备一键连网",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/shebeiyijianlianwang_banner.png",
                        "scene_description": "在和家亲APP中，点击进入设备版块，选择要添加的设备，确保连接的路由器及智能硬件处于正常工作状态，根据提示点击一键连接之后设备自动完成配网、绑定流程，即可在和家亲APP中控制使用。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "场景联动",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/changjingliandong_banner.png",
                        "scene_description": "用户可在在和家亲APP中绑定多个支持andlink的智能硬件，并且可以自定义智能硬件的使用场景（比如回家、离家等）、联动规则（比如时间联动、告警联动），在满足触发条件时，智能硬件可以完成场景联动。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "智能组网",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhinengzuwang_banner.png",
                        "scene_description": "用户可以根据家庭的无线网络覆盖情况，选择相应的智能组网设备，通过Andlink协议可以满足多种组网设备之间连接和管控，实时查看家庭网络覆盖、带宽等使用情况，为用户打造家中网络覆盖无死角的网络体验。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "极简体验",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "一键扫码设备，配合设备自动发现、按键触发、上电自动扫描。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "接入快速",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "设备完整联网过程可以在1分钟之内完成。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "准确率高",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "兼容设备各种WiFi芯片或模块，网络覆盖范围内100%联网成功。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "安全可靠",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "通过扫码认证可有效避免设备窜网或蹭网等网络不安全因素。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "合作申请",
                        "guideline_description": "登陆中国移动数字家庭合作伙伴门户网站，注册并申请开发者资质，填写基本资料，在线签署用户协议。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "资质审核",
                        "guideline_description": "开发者资质审核通过后，成为开发者，即可进入接入服务中心。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "自服务调测",
                        "guideline_description": "接入服务中心为开发者提供自服务系统，可进行在线自服务设备调试，包括APP界面的配置以及硬件模组的购买调测等。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "产品对接",
                        "guideline_description": "期望正式对接和家亲app并入库的产品需要在完成自服务调测后申请入库，提交产品资料，并进行线下开发联调测试。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "设备发送广播",
                        "sub_api_desc": "设备启动后，若发现本地未存储网关地址，则需触发本接口。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "网关响应广播",
                        "sub_api_desc": "设备在发送广播消息后，通过本服务接收网关响应消息。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备入网请求",
                        "sub_api_desc": "通过GET命令，查询命令状态设备连接引导通道成功后请求获取入网配置信息。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "通知设备入网信息",
                        "sub_api_desc": "网关经用户确认后，发送正式上网通道信息给设备，设备切换到上网通道，采用收到的入网配置接入WiFi网络。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备入网成功通知",
                        "sub_api_desc": "设备入网成功后，发送确认信息，网关更新相关信息并通知用户。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备注册",
                        "sub_api_desc": "设备上线时，或WiFi快连配置成功后，检测到没有deviceId和deviceToken，则执行首次上线注册请求。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "子设备注册",
                        "sub_api_desc": "设备识别到子设备为首次加网，则执行子设备注册请求。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备/子设备上线",
                        "sub_api_desc": "设备或子设备每次上线，设备检测到为非首次上线，则执行普通上线请求。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "子设备离线",
                        "sub_api_desc": "设备检测到子设备离线，实时上报给网关，若上报失败，设备应保存该状态，待链路状态正常后补发该消息。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备心跳",
                        "sub_api_desc": "设备通过心跳消息与网关保持活动状态，心跳周期在设备注册时获取。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备/子设备控制",
                        "sub_api_desc": "设备控制命令下发,设备通过异步方式返回控制结果。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备/子设备参数查询",
                        "sub_api_desc": "触发设备上报当前所有数据。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备/子设备解绑",
                        "sub_api_desc": "解除设备在网关上的绑定关系,或子设备在设备上的绑定关系。",
                        "sub_api_type": "家庭连接"
                    },
                    {
                        "sub_api_name": "设备/子设备文件操作",
                        "sub_api_desc": "对设备上的文件进行操作。",
                        "sub_api_type": "家庭连接"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",                
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",        
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",            
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",            
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动Andlink开放平台",
                "detail_url": "http://open.home.komect.com/dev/productIntroductionAction.action?eaId=13 ",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/haier_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/haier_logo.jpg",
                        "time": "",
                        "desc":"中国移动携手家电厂商代表海尔集团，着力打造让用户可感知的智能家电服务，海尔的36款产品顺利进入中国移动数字家庭产品库，实现平台互联互通，用户、渠道、技术等资源的共享。",
                        "case_details_title": "中国移动携手海尔共建数字家庭生态",
                        "case_details_des": "2017年11月24日海尔U-home智能家居与中国移动签署了中国移动数字家庭生态联盟战略，青岛海尔智能家电科技有限公司总经理李莉出席签约仪式并在协议上签字。<br/><br/>此次联盟战略的签署，本着优势互补、加强合作的原则，将会推动智能家居产业发展，助推构建中国移动数字家庭生态圈，通过在技术应用、新产品研发、联合营销、市场拓展等方面强强合作，为用户提供方便、快捷、安全的智能生活体验。海尔U-home作为智能家居领军品牌，其提供的整套智能家居解决方案、安家平台等，将会对中国移动数字家庭生态联盟战略的发展起到良好的推动作用。",
                        "case_details_img": "./images/apiImg_new/case/haier_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/wulian_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/wulian_logo.jpg",
                        "time": "",
                        "desc":"中国移动联合南京物联，先后引入南京物联门窗磁、红外传感、智能插座等硬件产品，打造智能安防套件及语音告警解决方案，并在河南公司率先试点。",
                        "case_details_title": "中国移动联合南京物联打造智能安防样板",
                        "case_details_des": "中国移动河南公司基于一级家开平台，开发一套家庭智能设备告警平台，面向家庭用户推出安防设备监测服务，家中发现漏水情况设备上报平台，平台下发处理策略：先是app推送、再是短信提醒服务，最后人工语音告警，确保家中漏水情况告知业主。<br/><br>某地产公司为提高新开楼盘吸引力，在推广项目中推出全屋智能安防解决方案，通过样板间改造， 嵌入水浸、烟雾、燃气、红外灯安防监测设备，通过和家亲APP自动扫描绑定设备，监测信息通过APP、短信、语音多种 方式通知用户，形成住宅科技化体验，以此为营销亮点向用户推广整体精装住宅。",
                        "case_details_img": "./images/apiImg_new/case/wulian_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "5",
        "event_code":"HOME_api_zf",
        "marketing_code":"API1",
        "name": "支付能力",
        "imgUrl": "images/apiImg/pay.png",
        "description": "包括和包支付、资金归集等能力",
        "ability_menu": "images/apiMenu/menuIcon_05.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_hbd",
                "so_more_event_code":"API_moredetail_hbzf",
                "online_event_code":"",
                "float_event_code":"Float_API_hbd",
                "event_code_new":"HOME_api_zf_hbd",
                "sub_name": "和包贷",
                "close_a_deal": "",
                "description": "提供订单申请、页面通知、后台通知、查询、退款通知等服务，具有通知方式及时有效等特点；提供对用户进行信用评级的服务；提供款资质审核通知、业务受理／撤销通知、主动扣款、主动扣款结果查询、确认文件、分期扣款结果文件等服务。",
                "ability_icon":"data/images/api/api5-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "号码借（现金贷）",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "号码借属于和包智能消费信贷推荐平台，当用户面对繁多信贷产品，通过手机号码，输入贷款金额与还款方式，智能平台根据用户的需求，自动匹配最佳贷款产品供其选择，无须再纠结额度、还款方式、利息、利率、产品类型,省心省力，轻松借贷。<br/><br/>号码借后台逻辑包括结合和信用分、和包分、信用评级（已应用于和包贷业务）、黑灰名单库（逐步积累数据）、实名验正、设备验正、欺诈风险评分、信用报告等；可逐步面向金融机构提供助贷服务，通过数据分析提升精准营销、产品优化、审批通过率等。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "信用购机",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "信用购机是中移电子商务有限公司联合有资质的金融机构，基于和信用体系与和包支付能力，运用大数据分析及风控技术，结合各省公司话费政策，降低用户购机门槛，真正实现0元0息购机，让用户享受更加便捷优惠的到通信服务的消费信贷产品。<br/><br/>挖掘自有平台交易数据，利用集团公司个人通信大数据，并引入行业内三方外部数据以及合作方的风控建模能力，联合建模并搭建自主的线上信贷用户评分体系，实现大数据实时授信、反欺诈及风险控制，保障审批速度与通过率。<br/><br/>适用于各省移动线上和线下各类通信业务消费场景，助力省公司终端的销量，结合话费政策，增加用户粘性。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "永不停机",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "永不停机业务是和包为中国移动全网客户提供的一项增值服务，客户申请开通后，当手机话费余额不足时，该客户的和包账户将自动为绑定的手机号码做快速充值，保证其正常通话，最大程度避免手机因欠费而停机。和包为客户提供授信额度服务，客户可凭和包上的信用消费额度进行话费充值服务，实现小额高频的话费支付消费场景下的无卡信用支付。开通此业务功能后，当客户进行话费充值时可使用授信额度。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "产品丰富，精准推荐",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "根据用户的需求并结合运营商大数据为用户精准画像，并根据各合作方的产品特点，为用户精准推荐合适的贷款产品。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "大数据风控",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "大数据实时授信、反欺诈、风险可控，保障审批速度与通过率。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "一点输出能力",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "为各省公司及全国和包用户提供完整的用户现金贷款服务能力，可以通过和包客户端、H5定制页面以及纯接口模式输出。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "需求调研",
                        "guideline_description": "收集调研客户写需求<br/>确认合作模式<br>输出项目合作方案"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "商务协议签署",
                        "guideline_description": "双方确认合作协议条款<br>启动商务协议签订流程"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "系统开发对接",
                        "guideline_description": "双方确认技术接口<br>双方系统接口及报表开发<br/>业务全方位联调测试"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线运营",
                        "guideline_description": "双方配合进行业务推广培训<br>和包提供日常运营支撑服务"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "信用支付订单申请",
                        "sub_api_desc": "使用和包信用支付的合作机构通过此接口进行信用支付下单。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "支付结果页面通知",
                        "sub_api_desc": "通知使用和包信用支付的合作机构支付结果。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "支付结果后台通知",
                        "sub_api_desc": "通知使用和包信用支付的合作机构支付结果。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "支付结果查询",
                        "sub_api_desc": "使用和包信用支付的合作机构通过此接口查询支付结果。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "退款通知",
                        "sub_api_desc": "使用和包信用支付的合作机构通过此接口进行退款操作。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "支付成功订单明细文件",
                        "sub_api_desc": "使用和包信用支付的合作机构通过此文件与和包进行支付成功订单对账。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "退款成功订单明细文件",
                        "sub_api_desc": "使用和包信用支付的合作机构通过此文件与和包进行退款成功订单对账。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "信用评级",
                        "sub_api_desc": "使用和包信用评级能力的合作机构通过此接口对用户进行信用评级。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "资质审核通知",
                        "sub_api_desc": "与和包合作的金融服务公司通过此接口通知和包用户贷款资质审核结果。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "业务受理／撤销通知",
                        "sub_api_desc": "接入和包购机直降业务的省BOSS平台通过此接口通知用户业务办理状态。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "资金方主动扣款",
                        "sub_api_desc": "与和包合作的金融服务公司通过此接口主动发起用户待还款扣款。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "资金方主动扣款结果查询",
                        "sub_api_desc": "与和包合作的金融服务公司通过此接口主动发起用户待还款扣款结果查询。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "业务办理确认文件",
                        "sub_api_desc": "与和包合作的金融服务公司通过此文件与和包进行业务办理确认对账。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "业务办理撤销文件",
                        "sub_api_desc": "与和包合作的金融服务公司通过此文件与和包进行业务撤销确认对账。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "分期扣款结果文件",
                        "sub_api_desc": "与和包合作的金融服务公司通过此文件与和包进行扣款结果对账。",
                        "sub_api_type": "支付类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动和包支付",
                "detail_url": "https://www.cmpay.com/open/",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/goujizhijiang_logo.jpg",
                        "time": "",
                        "desc":"湖南省购机直降是和包结合湖南省公司营销政策推出的用户购买手机的直降产品，自2017年8月上线以来，反响强烈，已为湖南省公司带来终端销量超过30万台，丰富了用户的购机方式，降低了用户购机门槛，提高消费能力，并缩短换机周期。",
                        "case_details_title": "湖南省购机直降",
                        "case_details_des": "湖南省购机直降是和包结合湖南省公司营销政策推出的用户购买手机的直降产品，自2017年8月上线以来，反响强烈，已为湖南省公司带来终端销量超过30万台，丰富了用户的购机方式，降低了用户购机门槛，提高消费能力，并缩短换机周期。",
                        "case_details_img": "./images/apiImg_new/case/goujizhijiang_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_pay.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/xinwangyinhang_logo.jpg",
                        "time": "",
                        "desc":"新网银行好人贷是和包与四川新网银行合作推出的一款现金贷产品，主要承载于号码借业务中，自2018年一季度上线以来，累计放款金额已超过3亿元。",
                        "case_details_title": "新网银行好人贷",
                        "case_details_des": "新网银行好人贷是和包与四川新网银行合作推出的一款现金贷产品，主要承载于号码借业务中，自2018年一季度上线以来，累计放款金额已超过3亿元。",
                        "case_details_img": "./images/apiImg_new/case/xinwangyinhang_img.png"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_hbzfnl",
                "so_more_event_code":"API_moredetail_hbzf",
                "online_event_code":"API_orderonline_hbzf",
                "float_event_code":"Float_API_hbzfnl",
                "event_code_new":"HOME_api_zf_hbzfnl",
                "sub_name": "和包支付能力",
                "close_a_deal": "https://www.cmpay.com/merchant/user/merIndex.xhtml",
                "description": "支持商户通过在移动端应用APP中集成和包支付能力开放SDK调起和包支付模块来实现支付功能。和包支付提供安全、快捷、易用的支付服务，为有支付需求的用户解决资金收付、清结算及安全风控等问题。",
                "ability_icon":"data/images/api/api5-2.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "扫码付场景",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "用户在线下消费时，商家可以扫描用户的付款码进行指定金额的扣款。和包平台提供支付能力完成对用户的扣款和对商户的到账。若商家提供收款码，用户只需打开扫一扫，扫描商户二维码完成支付即可完成当前交易。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "充话费场景",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "用户自己或者亲人的话费不足（或者和包客户端提供丰富的优惠活动），用户只需输入被缴手机号，选择支付方式进行支付即可充值成功，实时到账，再也不用担心话费啦。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "商城购物场景",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "用户下载安装和包客户端，选择购物频道，进入需要的购物商城（如：京东商城、唯品会等）进行网上购物，使用和包支付进行扣款完成购物交易，吃、穿、玩、乐各大购物渠道集于一体，足不出户，给用户提供了更多购物选择。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "支持多种资金来源",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "和包支付支持电子券、红包、余额、银行卡等多种资金扣款，且支持电子券、红包、余额资金混合支付。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "支持小额免密支付",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "用户可自行设置免密金额，支付时无需进行支付密码校验/指纹验证即可完成小额支付。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "快速付款实时到账",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "支付流程简洁不繁琐，用户使用起来方便快捷，快扶付款且实时到账。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "免登陆",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "用户选择商城购物，进入商城购物不需要单独进行登录。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "需求调研",
                        "guideline_description": "调研客户需求<br/>确认合作模式<br/>输出合作方案"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "协议签署",
                        "guideline_description": "双方确认商务合作协议条款<br/>商务协议签署"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "系统对接",
                        "guideline_description": "双方确认技术接口<br/>接口开发、联调、测试"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线",
                        "guideline_description": "双方业务推广<br/>和包提供日常运营支撑服务"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "调起支付接口",
                        "sub_api_desc": "开发者将支付相关参数填完后可直接调用接口拉起和包客户端的支付页面。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "支付结果通知",
                        "sub_api_desc": "支付完成后，和包会把相关支付结果发送给商户，商户需要接收处理。",
                        "sub_api_type": "支付类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动和包支付",
                "detail_url": "https://www.cmpay.com/open/",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "./images/video/hejiaoshou_video.mp4",
                        "cases_icon": "",
                        "time": "00:33",
                        "desc":"",
                        "case_details_title": "",
                        "case_details_des": "",
                        "case_details_img": ""
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/lianquangongyi_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/lianquangongyi_logo.jpg",
                        "time": "",
                        "desc":"上海联劝公益基金会是中移电子商务有限公司和包公益项目的合作对象，已签署合作协议，目前联劝官网已上线和包支付。",
                        "case_details_title": "联劝公益使用和包支付捐款",
                        "case_details_des": "上海联劝公益基金会是中移电子商务有限公司和包公益项目的合作对象，已签署合作协议，目前联劝官网已上线和包支付。以联劝公益提供的U积木计划公益项目为例：",
                        "case_details_img": "./images/apiImg_new/case/lianquangongyi_img.png"
                    },
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_zjgj",
                "so_more_event_code":"API_moredetail_hbzf",
                "online_event_code":"",
                "float_event_code":"Float_API_zjgj",
                "event_code_new":"HOME_api_zf_zjgj",
                "sub_name": "资金归集",
                "close_a_deal": "",
                "description": "和包资金归集是指通过和包平台完成代理商手机号与代理商银行卡账户绑定，代理商通过手机操作向指定账户缴款的一项应用。",
                "ability_icon":"data/images/api/api5-3.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "代理商自缴",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "当代理商账户余额不足时，代理商可通过发送缴款短信或在和包客户端发起缴款请求，和包支付平台收到指令后，向金融机构发起代理商绑定银行卡的实时扣款请求，扣款成功后，和包支付平台通知省BOSS系统为代理商的账户增加对应的额度。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "BOSS系统催缴",
                        "scene_icon": "images/apiImg_new/scene/yinsi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yinsi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "当代理商的账户余额低于省BOSS系统设置的预警阀值时，省BOSS系统向和包平台发起应缴款指令，和包支付平台收到指令后，向代理商发起催缴短信，代理商回复短信确认缴款，和包支付平台收到指令后，向金融机构发起代理商绑定银行卡的实时扣款请求，扣款成功后，和包支付平台通知省BOSS系统为代理商的账户增加对应的额度。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "系统批扣",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "省BOSS系统针对代理商每日产生的营业款在日终生成应缴款文件，和包支付平台次日获取省BOSS系统发送的代理商应缴款数据，根据文件中的应缴记录发往各金融机构进行扣款，扣款完成后，和包支付平台将扣款结果文件同步给省BOSS系统。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "安全合规到账准确",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "业务运行中未发生任何资金结算风险，在风险控制、税务处理等方面遵循移动集团统一要求。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "集约管理业财统一",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "支持T+1结算，易数据实时同步，有利于减少业财之间的数据差异。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "系统稳定接入简单",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "一点接入多家银行，提供标准化系统接口和对账文件，便于财务稽核系统实现自动稽核。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "成本最优服务到位",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "交易服务费率不高于0.15%，和包二线客服提供专席服务，可派驻本地服务团队。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "需求调研",
                        "guideline_description": "收集调研客户写需求<br/>确认合作模式<br/>输出项目合作方案"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "商务协议签署",
                        "guideline_description": "双方确认合作协议条款<br/>启动商务协议签订流程"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "系统开发对接",
                        "guideline_description": "双方确认技术接口<br/>双方系统接口及报表开发<br/>业务全方位联调测试"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线运营",
                        "guideline_description": "双方配合进行业务推广培训<br/>和包提供日常运营支撑服务"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "用户银行卡签约接口",
                        "sub_api_desc": "商户业务系统可通过签约接口将用户信息发往和包进行签约",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户银行卡解约接口",
                        "sub_api_desc": "如用户需要解除资金归集划扣业务，可向和包发起解约申请",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户信息实时同步接口",
                        "sub_api_desc": "如果和包侧用户信息有更新操作，和包将更新后的信息通知给商户业务系统",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户信息文件同步接口",
                        "sub_api_desc": "每日和包将上一日用户更新的信息，以文件形式通知给商户业务系统",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户单笔实时扣款接口",
                        "sub_api_desc": "用户签约成功后，商户业务系统可向和包发起绑定银行卡的扣款申请",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户批量扣款文件接口",
                        "sub_api_desc": "用户签约成功后，商户业务系统可以文件形式批量提交扣款请求，和包收到银行扣款结果后，以文件形式将扣款结果返回给商户业务系统",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "订单退款接口",
                        "sub_api_desc": "如商户为用户缴费上账失败，可向和包发起退款申请，和包将资金退回至用户绑定的银行卡。",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "用户扣款结果通知接口",
                        "sub_api_desc": "用户扣款成功后，和包系统会将扣款结果实时通知到商户业务系统",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "订单查询接口",
                        "sub_api_desc": "商户业务系统可通过该接口查询订单扣款结果和扣款时间等信息",
                        "sub_api_type": "支付类"
                    },
                    {
                        "sub_api_name": "对账文件接口",
                        "sub_api_desc": "每日和包将上一日用户交易以文件形式推送至服务器，商户可从服务器获取文件进行对账处理",
                        "sub_api_type": "支付类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0", 
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                       
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动和包支付",
                "sub_api_type": "支付类",
                "detail_url": "https://www.cmpay.com/open/",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/zhongguoyidong_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhongguoyidong_logo.jpg",
                        "time": "",
                        "desc":"和包资金归集助力湖南公司降本增效。",
                        "case_details_title": "和包资金归集助力湖南公司降本增效",
                        "case_details_des": "和包资金归集业务在湖南省规模应用后，为总结应用效果，了解优化需求，电子商务基地组织了面向各地市的问卷调查。各地市分公司普遍反映系统好用、易用、安全、可靠，为分公司创造了价值，接受程度很高。",
                        "case_details_img": "./images/apiImg_new/case/zhongguoyidong_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/bubugao_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/bubugao_logo.jpg",
                        "time": "",
                        "desc":"推动步步高商超营业厅营业款实现电子化归集。",
                        "case_details_title": "推动步步高商超营业厅营业款实现电子化归集",
                        "case_details_des": "2017年9月份中移电子商务基地与步步高集团商超达成合作，步步高连锁商超营业厅接入和包资金归集，和包为步步高提供了安全高效的营业款归集产品服务，专业的产品能力及周到的客户服务，实现营业资金安全、准确、高效地归集。",
                        "case_details_img": "./images/apiImg_new/case/bubugao_img.jpg"
                    }
                ]
            }
        ]
    },
    {
        "id": "6",
        "event_code":"HOME_api_sznr",
        "marketing_code":"API1",
        "name": "数字内容能力",
        "imgUrl": "images/apiImg/shuzi2.png",
        "description": "包括视频点播、广告发布等能力",
        "ability_menu": "images/apiMenu/menuIcon_06.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_spydbzb",
                "so_more_event_code":"API_moredetail_mgspy",
                "online_event_code":"API_orderonline_mgspy",
                "float_event_code":"Float_API_spydbzb",
                "event_code_new":"HOME_api_sznr_spydbzb",
                "sub_name": "视频云点播/直播",
                "close_a_deal": "http://www.migucloud.com/sign/in",
                "description": "视频点播：提供视频上传、转码、存储、管理、分发、播放的端到端一站式视频点播服务。视频直播：提供视频直播内容的在线注入、实时转码、多屏分发等视频直播能力。",
                "ability_icon":"data/images/api/api6-3.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "短视频",
                        "scene_icon": "images/apiImg_new/scene/shipin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shipin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/duanshipin_banner.jpg",
                        "scene_description": "面向社交内容分享、社交即时聊天、实时资讯、体育赛事镜头分享、电商品牌O2O展示等场景，利用短视频的社交+信息获取+娱乐消遣+碎片化阅读的特性，打造各类垂直行业APP及短视频网站。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "在线教育",
                        "scene_icon": "images/apiImg_new/scene/xuexi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xuexi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zaixianjiaoyu_banner.jpg",
                        "scene_description": "针对传统教育受场地条件与环境因素的限制，利用公有云Paas平台、运营商网络及当下热门的点直播技术，将传统课程与先进技术相结合，为教育机构打造一套专属、低成本的在线教育直播平台。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "企业直播",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyezhibo_banner.jpg",
                        "scene_description": "面向公司年庆、高管商谈、金融峰会、产品发布会等O2O场景，基于公有网络利用先进的云平台技术为客户打造简单易用的非专业、企业级视频直播网络，让用户摆脱繁琐的现场布置与管理而专注于内容。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "智能物联视频",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhinengwulianshipin_banner.jpg",
                        "scene_description": "面向安防监控、应急指挥、智能巡检、智慧城市等物联领域的行业应用，基于物联视频融合平台，对各个物联视频终端做到可管可控，更能有效地解决效率低下、协同困难、信息延迟、反应迟缓等问题。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "全网融合分发",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "全覆盖：融合CDN无盲区<br/>强安全：源站安全可控<br/>多增值：丰富增值服务"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "视频转码",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "弹性控制队列<br/>API接口层面灵活接入<br/>多节点分布式转码集群"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "实时音视频互动",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "网络兼容性强<br/>音视频体验丰富<br/>接入便捷、可运营"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "AR/VR/AI",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "人脸检测、跟踪、识别、比对<br/>OCR文字识别、SLAM、物体追踪、AR SDK"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "注册认证",
                        "guideline_description": "自助注册<br/>实名认证<br/>多渠道消息"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "服务开通",
                        "guideline_description": "标准化产品购买<br/>快速入门<br/>个性化服务选择<br/>按量计费"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "接入应用",
                        "guideline_description": "超低门槛<br/>使用文档丰富<br/>全视频流程体验<br/>多方式接入"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "上线使用",
                        "guideline_description": "1v1客户接入<br/>24小时技术支持<br/>持续迭代"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "视频点播：上传管理vodupload",
                        "sub_api_desc": "实现FTP上传、合片上传",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：转码管理vodtranscode",
                        "sub_api_desc": "实现创建转码任务、转码取消、转码状态查询、转码进度查询、转码时长查询（vid）、转码时长查询（uid）。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：转码模版管理vodtransfm",
                        "sub_api_desc": "实现：转码模板更新、转码模板查询、自定义转码模板查询、自定义转码模板删除、自定义logo添加、自定义logo删除、自定义logo更新、自定义logo查询。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：视频管理vodvideo",
                        "sub_api_desc": "实现：视频查询、视频高级查询、视频编辑、视频删除、点播视频上下线、批量修改视频分类。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：分类管理vodcategory",
                        "sub_api_desc": "实现：创建分类、移动分类、修改分类名称、删除分类、分类树查询。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：内容分发vodcdn",
                        "sub_api_desc": "实现：获取CDN播放地址-无防盗链、获取CDN播放地址-防盗链、获取CDN下载地址、获取CDN批量下载地址。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：数据统计vodstats",
                        "sub_api_desc": "实现：视频云点播终端统计上报、用户行为统计上报、视频播放次数统计上报、基本统计信息查询-按日期、基本统计信息查询-按时间轴、播放统计信息查询-按视频、播放统计信息查询-按时间轴、终端统计信息查询-按终端、终端统计信息查询-按时间轴、用户行为统计上报、数据统计导出、视频云点播视频数查询、视频云存储容量查询、视频云点播转码时长查询。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频点播：视频云点播回调接口vodcallback",
                        "sub_api_desc": "实现：点播拉流下载回调通知、点播拉流转码回调通知、转码完成回调通知。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频直播：直播管理",
                        "sub_api_desc": "实现：创建直播、查询直播详情、修改直播、删除直播、关闭直播频道、恢复直播频道、获取推流地址、获取播放地址、拉流模式开始直播、拉流模式停止直播。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频直播：直播录制管理",
                        "sub_api_desc": "实现：直播录制列表、获取点播vid列表、直播录制删除、导入云点播。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频直播：notify通知",
                        "sub_api_desc": "实现：注册接口、注销接口、publish通知接口、录像完成通知接口、录像处理完成通知接口。",
                        "sub_api_type": "视频"
                    },
                    {
                        "sub_api_name": "视频直播：录像合片",
                        "sub_api_desc": "实现：录像合片接口、录像合片回调接口。",
                        "sub_api_type": "视频"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",          
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",              
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动咪咕视频云平台",
                "detail_url": "http://www.migucloud.com/products/demand_cover.html",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/huashu_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/huashu_logo.png",
                        "time": "",
                        "desc":"华数使用咪咕视频云的云分发云存储能力，咪咕视频给其提供了完善的点播服务，涵盖了防盗链、回源及数据托管。咪咕视频云的全网分发能力做到全国无死角全覆盖，妥善解决了项目覆盖范围广的问题。",
                        "case_details_title": "华数",
                        "case_details_des": "华数使用咪咕视频云的云分发云存储能力，咪咕视频给其提供了完善的点播服务，涵盖了防盗链、回源及数据托管。咪咕视频云的全网分发能力做到全国无死角全覆盖，妥善解决了项目覆盖范围广的问题。",
                        "case_details_img": "./images/apiImg_new/case/huashu_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/dianjiao_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/dianjiao_logo.png",
                        "time": "",
                        "desc":"中央电化教育馆教育资源主要涉及视频、音频及文档。需要给全国1000万师生提供播放及观看服务。咪咕视频云基于多年的视频领域的积累给中央电化教育馆提供了完善的全媒体解决方案。",
                        "case_details_title": "中央电化教育",
                        "case_details_des": "中央电化教育馆教育资源主要涉及视频、音频及文档。需要给全国1000万师生提供播放及观看服务。咪咕视频云基于多年的视频领域的积累给中央电化教育馆提供了完善的全媒体解决方案。",
                        "case_details_img": "./images/apiImg_new/case/dianjiao_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_hlwggpt",
                "so_more_event_code":"API_moredetail_hlwnl",
                "online_event_code":"API_orderonline_hlwnl",
                "float_event_code":"Float_API_hlwggpt",
                "event_code_new":"HOME_api_sznr_hlwggpt",
                "sub_name": "互联网广告平台",
                "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=",
                "description": "为媒介渠道提供统一的接入服务，包括SSP平台和DSP平台，支持广告请求展示、数据上报、广告主信息同步、订单同步、审核确认等服务。",
                "ability_icon":"data/images/api/api6-4.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "竞价广告",
                        "scene_icon": "images/apiImg_new/scene/tuiguang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tuiguang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jingjiaguanggao_banner.jpg",
                        "scene_description": "广告主自主投放、自主管理，通过调整价格来进行排名，按照广告效果付费的新型网络广告形式。实现针对不同的人群实现精准投放的效果，使媒介主广告位的流量利用率得到大幅提升。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "合约广告",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/heyueguanggao_banner.jpg",
                        "scene_description": "帮助广告主按照约定的曝光量进行投放和售卖的固定位广告形式。服务于品牌广告主，广告主与媒介主约定排期投放，适合追求曝光的品牌客户，不担心流量被占用。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "竞价会",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jingjiahui_banner.jpg",
                        "scene_description": "一种邀请式的竞价投放方式，只有通过媒体邀请的广告主才能通竞价的方式投放广告。广告主通过单价高低竞拍广告位排期，价高者可以获得优质广告位排期内的投放权限。邀请竞价一般仅适用于媒体优质的资源的剩余流量变现。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "电子互推",
                        "scene_icon": "images/apiImg_new/scene/xiaoxi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xiaoxi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/dianzihutui_banner.jpg",
                        "scene_description": "产品线媒介主和广告主之间相互投放，媒介主通过提供广告位排期给其他产品线广告主竞拍，媒介主本身也可以竞拍其他广告位用户投放自有产品。通过电子互推，可以提升中移互内部产品线流量置换率。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "精准投放",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "提供了众多广告定向条件，您可以从中选择适合达成您商业目标的条件锁定人群。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "量化透明",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "广告位全面支持监测，以真实的曝光量、点击量帮助您直观了解投放效果，让每一笔投放都清晰透明。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "数据厚度",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "目前已经超过300万日活跃用户，在走向全球方面，取得了一定成绩。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "广告样式",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "支持信息流、图片、视频、文字链类型等多样化的广告模式，适应用户最好体验的广告。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "准备企业注册资料",
                        "guideline_description": "在中国大陆注册并有效存续的独立企业法人或事业单位，需要提交企业相关资料。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "注册开发者社区",
                        "guideline_description": "合作伙伴进入开发者社区注册企业账号，点击“管理中心”填写合作资料，提交合作申请。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "进行电子签约",
                        "guideline_description": "通过合作资料审批后，登录“开发者社区—管理中心—合作接入管理—签约申请”可在线签署中国移动应用商场电子合作协议。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "签订电子业务单",
                        "guideline_description": "注册完成电子签约后，登录开发者社区，进入“管理中心合作接入管理”可进行广告能力-广告主/媒介主电子业务单签约。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "SSP广告展示接口",
                        "sub_api_desc": "本接口用于媒介展示广告实时向广告平台发起的展示请求。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "SSP广告实时上报接口",
                        "sub_api_desc": "实时上报用户行为数据，事件的触发时间已上报一刻服务器时间为准，里面所上报的广告位集合事件均有同一事件触发时间、事件类型、设备信息、用户信息、媒体站点信息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "SSP广告延时上报接口",
                        "sub_api_desc": "本接口用于非实时上报用户行为数据使用，例如一日内上报当日所有广告位用户行为数据。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP广告主信息同步接口",
                        "sub_api_desc": "DSP平台主动调用广告平台的接口，将广告主必要信息或配置同步给广告平台。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP获取广告位分类列表接口",
                        "sub_api_desc": "由对接方主动调用广告平台的接口，从广告平台获取广告位分类列表。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP获取广告主可用广告位列表接口",
                        "sub_api_desc": "DSP平台主动调用广告平台的接口，从广告平台获取广告主可用广告位列表。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP获取私有市场排期列表接口",
                        "sub_api_desc": "由DSP平台主动调用广告平台的接口，从广告平台获取私有市场广告位排期列表。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP私有市场订单同步接口",
                        "sub_api_desc": "DSP平台主动调用广告平台的接口，同步（创建）私有市场订单需求到广告平台。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP私有市场订单审核状态通知接口",
                        "sub_api_desc": "由广告平台主动调用DSP平台，通知订单审核状态变更消息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP私有市场订单确认付款接口",
                        "sub_api_desc": "在DSP平台收到订单审核通过的通知后，主动调用广告平台接口，确认支付该订单款项。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP公有市场订单同步接口",
                        "sub_api_desc": "由DSP平台主动调用广告平台的接口，同步（创建）公有市场订单需求到广告平台。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP公有市场订单审核状态通知接口",
                        "sub_api_desc": "由广告平台主动调用DSP平台，通知订单审核状态变更消息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP公有市场订单确认付款接口",
                        "sub_api_desc": "在DSP平台收到订单审核通过的通知后，主动调用广告平台接口，确认支付该订单款项。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP获取用户标签列表接口",
                        "sub_api_desc": "由对接方主动调用广告平台接口，查询可用的标签数据。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "DSP获取地域列表接口",
                        "sub_api_desc": "由对接方主动调用广告平台接口，查询可用的地域数据。",
                        "sub_api_type": "数字内容能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",            
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",            
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",         
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",               
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动互联网能力平台",
                "detail_url": "http://dev.10086.cn/iap_client",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/wangzhe_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/wangzhe_logo.png",
                        "time": "",
                        "desc":"中移互广告平台为腾讯王者荣耀游戏进行推广，2018年5月份推广合作金额达600万，帮助王者荣耀实现3000万+流水推广。",
                        "case_details_title": "王者荣耀",
                        "case_details_des": "<<王者荣耀>>是由腾讯游戏开发并运行的一款运营在Android、IOS平台上的MOBA类的手游，中移互广告平台通过CPS合作方式接入腾讯王者荣耀游戏推广，主要通过MM客户端应用商城推荐下载推广，2018年5月份推广合作金额达600万，帮助王者荣耀实现3000万+流水推广。",
                        "case_details_img": "./images/apiImg_new/case/wangzhe_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/zyaiqiyi_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zyaiqiyi_logo.png",
                        "time": "",
                        "desc":"中移互广告平台通过CPT合作模式推广爱奇艺应用app，主要通过MM应用商城推荐下载，推广期间实现总下载3000万+，用户转化率达60%，其中爱奇艺付费转化达到10%。",
                        "case_details_title": "爱奇艺",
                        "case_details_des": "爱奇艺（iQIYI.COM）是全球领先的提供海量、优质、高清的网络视频服务的大型视频网站，网络视频播放首选平台。中移互广告平台通过CPT合作模式推广爱奇艺应用app，主要通过MM应用商城推荐下载，推广期间实现总下载3000万+，用户转化率达60%，其中爱奇艺付费转化达到10%。",
                        "case_details_img": "./images/apiImg_new/case/zyaiqiyi_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_hlwxxts",
                "so_more_event_code":"API_moredetail_hlwnl",
                "online_event_code":"API_orderonline_hlwnl",
                "float_event_code":"Float_API_hlwxxts",
                "event_code_new":"HOME_api_sznr_hlwxxts",
                "sub_name": "互联网消息推送",
                "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=",
                "description": "通过在云端与客户端之间建立一条稳定可靠的长连接，为开发者提供向客户端应用实时推送消息的服务。",
                "ability_icon":"data/images/api/api6-5.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "消息推送",
                        "scene_icon": "images/apiImg_new/scene/tuiguang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tuiguang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/tuisong_banner.png",
                        "scene_description": "1、活动推送消息：推送营销活动，实现业务变现；<br/>2、新闻资讯推送：用户关怀信息，唤醒沉默用户；<br/>3、产品推荐消息：新商品提醒，提高用户apru值；<br/>4、系统功能消息：个性化信息，与用户形成强相关性。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "及时推送消息",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "快速响应多种网络环境，海量消息第一时间推送至手机客户端。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "高到达率",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "双进程守护，支持大并发量，延迟小。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "短信指令通道",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "结合“唤醒短信”有效唤醒应用，大大唤醒沉默用户。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "用户注册",
                        "guideline_description": "注册成为中国移动开放平台开发者。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "开发测试",
                        "guideline_description": "获取App ID、App Key<br/>配置并完成自测试。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "消息推送",
                        "guideline_description": "进入有推门户后台，自助推送，查看统计报表。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "发送单条同步消息接口",
                        "sub_api_desc": "应用服务端用于向有推平台发送单条同步消息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "发送单条异步消息接口",
                        "sub_api_desc": "应用服务端用于向有推平台发送单条异步消息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "发送批量异步消息接口",
                        "sub_api_desc": "应用服务端用于向有推平台发送批量异步消息。",
                        "sub_api_type": "数字内容能力"
                    },
                    {
                        "sub_api_name": "启动推送服务接口",
                        "sub_api_desc": "应用调用此接口，启动有推服务。",
                        "sub_api_type": "数字内容能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动互联网能力平台",
                "detail_url": "http://dev.10086.cn/aoi",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/yidongyingyeting_logo.png",
                        "time": "",
                        "desc":"广东移动掌上营业厅官网APP是一款用户掌上的移动业务办理平台，专为广东用户打造。2015年正式接入[有推]消息推送平台，有推平台已承载“广东掌厅手机APP”全部业务消息推送任务。",
                        "case_details_title": "广东移动掌上营业厅",
                        "case_details_des": "合作背景：广东移动掌上营业厅官网APP是一款用户掌上的移动业务办理平台，专为广东用户打造。2015年正式接入[有推]消息推送平台，有推平台已承载“广东掌厅手机APP”全部业务消息推送任务。<br/><br/>业务需求：注册用户1+亿、消息推送量700+万/天、消息接收报表。<br/><br/>推送效果：截止2月份，注册用户累计超1亿，月均活跃用户约1600万，日均活跃数保持在300万至360万之间。“广东掌厅”消息下发总数累计已突破10亿条，消息推送日峰值达2000+万条，送达率在50%-65%之间。",
                        "case_details_img": "./images/apiImg_new/case/yidongyingyeting_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_music.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/miyouquan_logo.png",
                        "time": "",
                        "desc":"密友圈app是一款来自中国移动的和飞信校园版，用户可免费和密友打电话、发视频，让校园生活无缝沟通。为改善用户感知，密友圈2018年1月正式接入有推，实现“消息推送”功能。",
                        "case_details_title": "密友圈",
                        "case_details_des": "合作背景：密友圈app是一款来自中国移动的和飞信校园版，用户可免费和密友打电话、发视频，让校园生活无缝沟通。为改善用户感知，密友圈2018年1月正式接入有推，实现“消息推送”功能。<br/><br/>推送效果：截止2018年2月，密友圈月活跃用户为60+万，日均用户数达8-10万，整体活跃度在不断上升。截止2018年2月，密友圈累计下发总数为350万条，且2月份比1月份多300万的推送量，推送需求不断递增；消息推送日峰值达60+万条，推送成功率均值约65%。",
                        "case_details_img": "./images/apiImg_new/case/miyouquan_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "7",
        "event_code":"HOME_api_yxfw",
        "marketing_code":"API1",
        "name": "营销服务能力",
        "imgUrl": "images/apiImg/yingxiao.png",
        "description": "包括业务订购、话费充值等能力",
        "ability_menu": "images/apiMenu/menuIcon_07.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_jbywdg",
                "so_more_event_code":"API_moredetail_Itnlkf",
                "online_event_code":"",
                "float_event_code":"Float_API_jbywdg",
                "event_code_new":"HOME_api_yxfw_jbywdg",
                "sub_name": "基本业务订购",
                "close_a_deal": "",
                "description": "为合作渠道提供校验、订购、查询能力，支持用户通过多渠道便捷的订购、查询中国移动各项基本业务，参与各项营销活动。",
                "ability_icon":"data/images/api/api7-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "业务订购",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "中国移动为合作渠道提供校验、订购能力，支持用户通过多渠道便捷的订购。业务订购种类：4G飞享套餐，4G流量套餐，流量直充包，国际漫游包，定向流量包等业务的订购。业务订购输出方式为接口与H5，近期业务合作主要以H5方式为主。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "客服投诉",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备客服投诉一体化管理能力，用户及渠道侧的投诉可通过系统的双向流转，及时有效解决用户问题。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "数据统计",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备数据报表支撑，支持分渠道的业务统计及异常波动预警。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "一点结算",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备一点结算能力，合作方正常接入业务后，根据协议约定的酬金规则按期出具结算报表以及明细报表。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "便捷",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "足不出户，轻松办理业务。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "全面",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "全面知悉最新业务活动。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "电子化",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "线上校验办理资格。"
                    }
                    
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "资质审核",
                        "guideline_description": "合作方需是合法的经营者，满足相应的业务资质以及稳定的用户规模。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "意向确认",
                        "guideline_description": "移动侧根据合作意向报名安排专员回访，双方就合作方案等细节问题达成一致。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "联调开发",
                        "guideline_description": "移动侧完成前期页面开发或者双方通过系统对接的联调工作。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线",
                        "guideline_description": "根据双方协议约定，待系统联调完成后，合作方按要求上线相应的业务。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "业务办理资格校验接口",
                        "sub_api_desc": "支持校验用户是否有该业务的订购资格。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "综合订购接口",
                        "sub_api_desc": "支持将所办理业务的订单信息同步给省公司。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "订购结果反馈",
                        "sub_api_desc": "支持将订购结果返回给渠道侧。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "统一查询接口",
                        "sub_api_desc": "为用户提供全量已订购业务查询功能。",
                        "sub_api_type": "信息查询类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动IT能力开放平台",
                "detail_url": "https://it.open.10086.cn/#/production/nav/order",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/jingdongapp_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jingdongapp_logo.png",
                        "time": "",
                        "desc":"2014年10月快速成功对接，启动了移动4G合约、套餐及流量包的一点商品上架，一点订单下达，实现了为31省用户实时办理通信业务。",
                        "case_details_title": "京东商城",
                        "case_details_des": "合作内容<br/>在PC及移动客户端正式启动了移动4G飞享合约、套餐、流量包、定向流量包及号卡等产品的销售。<br/><br/>合作成效<br/>作为首家入驻中国移动IT能力开放平台的合作伙伴，京东商城于2014年10月与中国移动IT能力开放平台快速成功对接，用户通过中国移动京东自有营业厅订购中国移动各类通信产品。通过一点商品上架，一点订单下达，实现了为31省移动手机用户实时办理通信业务。在日常销售推广，特别是5.17电信节、6.18京东桃花节、双十一、双十二等促销活动期间，极大推动了相关产业链终端产品及通信产品的销售。",
                        "case_details_img": "./images/apiImg_new/case/jingdongapp_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/tianmao_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/tianmao_logo.png",
                        "time": "",
                        "desc":"于2016年1月顺利接入中国移动能力开放平台，提供了移动4G套餐，流量包，话费充值、宽带等产品的订购，助力天猫布局通信产品线。",
                        "case_details_title": "天猫",
                        "case_details_des": "合作内容<br/>移动4G套餐，流量包，话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的在线订购。<br/><br/>合作成效<br/>作为目前最大的综合电商，天猫阿里也在积极布局通信产品线，并于2016年1月顺利接入中国移动IT能力开放平台，除话费充值外，还提供了移动4G套餐、流量包、话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的订购，通过一点商品上架，一点订单下达实现了为31省移动手机用户实时办理通信业务。在日常营销推广，特别是5.17电信节、双十一、双十二等促销活动期间积极合作，推动通信产品销售，助力合作伙伴通信产品布局。",
                        "case_details_img": "./images/apiImg_new/case/tianmao_img.png"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_kdbl",
                "so_more_event_code":"API_moredetail_Itnlkf",
                "online_event_code":"",
                "float_event_code":"Float_API_kdbl",
                "event_code_new":"HOME_api_yxfw_kdbl",
                "sub_name": "宽带办理",
                "close_a_deal": "",
                "description": "为合作渠道提供宽带校验、订购、查询能力，支持用户通过多种渠道便利查询小区宽带覆盖情况，进行宽带新装预约，宽带提速、续订办理，查询宽带产品办理情况等。",
                "ability_icon":"data/images/api/api7-4.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "业务订购",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "中国移动为合作渠道提供宽带校验、订购、查询能力，支持用户通过多种渠道便利查询小区宽带覆盖情况，进行宽带新装预约，宽带提速、续订办理，查询宽带产品办理情况等。<br/><br/>目前支持宽带新装预约，提速，融合套餐等操作。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "客服投诉",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备客服投诉一体化管理能力，用户及渠道侧的投诉可通过系统的双向流转，及时有效解决用户问题。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "数据统计",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备数据报表支撑，支持分渠道的业务统计及异常波动预警。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "一点结算",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备一点结算能力，合作方正常接入业务后，根据协议约定的酬金规则按期出具结算报表以及明细报表。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "便捷",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "足不出户轻松办宽带。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "多选择",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "宽带套餐线上多渠道对比。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "资质审核",
                        "guideline_description": "合作方需是合法的经营者，满足相应的业务资质以及稳定的用户规模。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "意向确认",
                        "guideline_description": "移动侧根据合作意向报名安排专员回访，双方就合作方案等细节问题达成一致。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "联调开发",
                        "guideline_description": "移动侧完成前期页面开发或者双方通过系统对接的联调工作。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线",
                        "guideline_description": "根据双方协议约定，待系统联调完成后，合作方按要求上线相应的业务。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "宽带小区地址查询",
                        "sub_api_desc": "支持对所办宽带的地址信息查询。",
                        "sub_api_type": "信息查询类"
                    },
                    {
                        "sub_api_name": "宽带办理资格校验",
                        "sub_api_desc": "校验号码状态是否允许办理对应宽带业务。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "宽带订购",
                        "sub_api_desc": "支持宽带的新装预约、提速、续订操作。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "宽带订购结果反馈",
                        "sub_api_desc": "支持宽带的新装预约、提速、续订操作结果反馈。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "已办理宽带信息查询",
                        "sub_api_desc": "支持对已办理的宽带业务进行查询。",
                        "sub_api_type": "信息查询类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动IT能力开放平台",
                "detail_url": "https://it.open.10086.cn/#/production/detail/order06",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/tianmao_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/tianmao_logo.png",
                        "time": "",
                        "desc":"于2016年1月顺利接入中国移动能力开放平台，提供了移动4G套餐，流量包，话费充值、宽带等产品的订购，助力天猫布局通信产品线。",
                        "case_details_title": "天猫",
                        "case_details_des": "合作内容<br/>移动4G套餐，流量包，话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的在线订购。<br/><br/>合作成效<br/>作为目前最大的综合电商，天猫阿里也在积极布局通信产品线，并于2016年1月顺利接入中国移动IT能力开放平台，除话费充值外，还提供了移动4G套餐、流量包、话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的订购，通过一点商品上架，一点订单下达实现了为31省移动手机用户实时办理通信业务。在日常营销推广，特别是5.17电信节、双十一、双十二等促销活动期间积极合作，推动通信产品销售，助力合作伙伴通信产品布局。",
                        "case_details_img": "./images/apiImg_new/case/tianmao_img.png"
                    }
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_xhrw",
                "so_more_event_code":"API_moredetail_Itnlkf",
                "online_event_code":"",
                "float_event_code":"Float_API_xhrw",
                "event_code_new":"HOME_api_yxfw_xhrw",
                "sub_name": "选号入网",
                "close_a_deal": "",
                "description": "为合作渠道提供入网资格校验、选号入网能力，支持用户通过多种渠道完成新号入网实名认证等校验，在线完成选号入网，实现号卡物流配送及号卡激活端到端流程。",
                "ability_icon":"data/images/api/api7-5.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "业务订购",
                        "scene_icon": "images/apiImg_new/scene/jiaoyi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/jiaoyi_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "中国移动为合作渠道提供入网资格校验、选号入网能力，支持用户通过多种渠道完成新号入网实名认证等校验，在线完成选号入网，实现号卡物流配送及号卡激活端到端流程。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "客服投诉",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备客服投诉一体化管理能力，用户及渠道侧的投诉可通过系统的双向流转，及时有效解决用户问题。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "数据统计",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备数据报表支撑，支持分渠道的业务统计及异常波动预警。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "一点结算",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "平台具备一点结算能力，合作方正常接入业务后，根据协议约定的酬金规则按期出具结算报表以及明细报表。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "便捷",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "足不出户，一站式订购。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "多选择",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "线上多套餐选择比对。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "及时",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "及时送达。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "资质审核",
                        "guideline_description": "合作方需是合法的经营者，满足相应的业务资质以及稳定的用户规模。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "意向确认",
                        "guideline_description": "移动侧根据合作意向报名安排专员回访，双方就合作方案等细节问题达成一致。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "联调开发",
                        "guideline_description": "移动侧完成前期页面开发或者双方通过系统对接的联调工作。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "业务上线",
                        "guideline_description": "根据双方协议约定，待系统联调完成后，合作方按要求上线相应的业务。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "号码资源同步",
                        "sub_api_desc": "支持把分配给渠道的号码资源同步给渠道。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "入网资格校验",
                        "sub_api_desc": "支持对所售用户身份证实名认证、一证五号及黑名单等信息的校验。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "号码预占",
                        "sub_api_desc": "支持外部渠道线上选号并进行号码预占。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "号卡订购信息同步",
                        "sub_api_desc": "支持外部渠道线上选号并同步订购结果给省公司。",
                        "sub_api_type": "业务订购类"
                    },
                    {
                        "sub_api_name": "号卡订购结果反馈",
                        "sub_api_desc": "支持实时获取订购结果以及配送结果通知。",
                        "sub_api_type": "业务订购类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动IT能力开放平台",
                "detail_url": "https://it.open.10086.cn/#/production/detail/order09",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/jingdongapp_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jingdongapp_logo.png",
                        "time": "",
                        "desc":"2014年10月快速成功对接，启动了移动4G合约、套餐及流量包的一点商品上架，一点订单下达，实现了为31省用户实时办理通信业务。",
                        "case_details_title": "京东商城",
                        "case_details_des": "合作内容<br/>在PC及移动客户端正式启动了移动4G飞享合约、套餐、流量包、定向流量包及号卡等产品的销售。<br/><br/>合作成效<br/>作为首家入驻中国移动IT能力开放平台的合作伙伴，京东商城于2014年10月与中国移动IT能力开放平台快速成功对接，用户通过中国移动京东自有营业厅订购中国移动各类通信产品。通过一点商品上架，一点订单下达，实现了为31省移动手机用户实时办理通信业务。在日常销售推广，特别是5.17电信节、6.18京东桃花节、双十一、双十二等促销活动期间，极大推动了相关产业链终端产品及通信产品的销售。",
                        "case_details_img": "./images/apiImg_new/case/jingdongapp_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/tianmao_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/tianmao_logo.png",
                        "time": "",
                        "desc":"于2016年1月顺利接入中国移动能力开放平台，提供了移动4G套餐，流量包，话费充值、宽带等产品的订购，助力天猫布局通信产品线。",
                        "case_details_title": "天猫",
                        "case_details_des": "合作内容<br/>移动4G套餐，流量包，话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的在线订购。<br/><br/>合作成效<br/>作为目前最大的综合电商，天猫阿里也在积极布局通信产品线，并于2016年1月顺利接入中国移动IT能力开放平台，除话费充值外，还提供了移动4G套餐、流量包、话费充值、宽带、智能设备、合约机、定向流量、号卡等产品的订购，通过一点商品上架，一点订单下达实现了为31省移动手机用户实时办理通信业务。在日常营销推广，特别是5.17电信节、双十一、双十二等促销活动期间积极合作，推动通信产品销售，助力合作伙伴通信产品布局。",
                        "case_details_img": "./images/apiImg_new/case/tianmao_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "8",
        "event_code":"HOME_api_yfw",
        "marketing_code":"API1",
        "name": "云服务能力",
        "imgUrl": "images/apiImg/yunserve.png",
        "description": "包括云主机、云存储、语音识别处理等能力",
        "ability_menu": "images/apiMenu/menuIcon_08.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_gyyfw",
                "so_more_event_code":"API_moredetail_ydy",
                "online_event_code":"API_orderonline_ydy",
                "float_event_code":"Float_API_gyyfw",
                "event_code_new":"HOME_api_yfw_gyyfw",
                "sub_name": "公有云服务",
                "close_a_deal": "https://ecloud.10086.cn/op-user-sso/login?service=https%3A%2F%2Fecloud.10086.cn%2Flogin%2Fcas",
                "description": "用于创建、释放以及管理用户在移动云的云资源，实现了200+的操作功能。该API已经覆盖绝大部分移动云产品，包括云主机、云存储、云网络、云安全、云监控以及视频服务等。",
                "ability_icon":"data/images/api/api8-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "混合云管理",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "用户可以通过自己统一的混合云管理平台，使用接口同不同的云资源对接。在这个混合云管理平台上用户可以对所有不同平台的云资源进行统一的管理、运维等工作，无需再登录单一云资源的控制台，做到集中化、程序化管理云资源，提高工作效率。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "自动化运维",
                        "scene_icon": "images/apiImg_new/scene/yunnengli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yunnengli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "API支持所有的控制台功能，用户可以自由组合以适合业务的运维需求，通过云主机、云硬盘、带宽等API接口自动化实现紧急扩容等操作。也可以通过监控API将云监控数据整合入用户自己的监控系统，并设置灵活的报警规则。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "构建上层服务",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "用户可以通过对云主机、云硬盘、云网络等API接口的自由组合，构建类似于一键建站和一键备份的高级功能，并对外提供这些服务。同时合作伙伴也可以通过API接口搭建云资源转售平台，代理销售移动云云资源。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "覆盖全面",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "云API几乎覆盖了所有可以以API方式对外提供服务的云产品，并持续迭代。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "方便灵活",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "用户可不访问门户，直接在程序中集成调用云API，更为快速灵活的构建自己的业务系统。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "安全可靠",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "所有接口都必须通过安全凭证对用户身份进行管理，保证了请求的安全性和合法性。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "自动运维",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "通过API服务，用户可以轻松构建更为全面的业务监控运维系统，直接在自有监控系统监测云资源的各项指标。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "获得账号",
                        "guideline_description": "注册移动云账号，且账户具备足够金额的余额。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "生成密钥",
                        "guideline_description": "登陆账号，并在控制台生成API能力所需要的Accesskey。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "使用能力",
                        "guideline_description": "阅读帮助中心的开发文档，按照文档指导进行开发。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "云主机",
                        "sub_api_desc": "该接口用于创建、释放以及管理在移动云的云主机资源，同时可以监控云主机实例的运行状态。",
                        "sub_api_type": "云服务能力"
                    },
                    {
                        "sub_api_name": "云存储",
                        "sub_api_desc": "该接口用于创建、释放以及管理在移动云的云存储资源，同时实现了云硬盘的备份和监控等功能。",
                        "sub_api_type": "云服务能力"
                    },
                    {
                        "sub_api_name": "云网络",
                        "sub_api_desc": "该接口用于创建、释放以及管理在移动云的云网络资源，其中涉及的云网络产品包括了公网IP、公网带宽、负载均衡、VPN、弹性负载均衡以及云防火墙等。",
                        "sub_api_type": "云服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "移动云",
                "detail_url": "https://ecloud.10086.cn/product",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhongyangdianhua_logo.jpg",
                        "time": "",
                        "desc":"借助公有云服务能力快速搭建多媒体资源共享平台。除基本视频点播业务，还具备智能审核功能，大大降低用户运营成本。用户只需了解最基本的上传发布等操作即可上传视频发布。此案例方便快捷地解决了优质教育资源不平衡的问题。",
                        "case_details_title": "中央电化教育馆",
                        "case_details_des": "借助公有云服务能力快速搭建多媒体资源共享平台。除基本视频点播业务，还具备智能审核功能，大大降低用户运营成本。用户只需了解最基本的上传发布等操作即可上传视频发布。此案例方便快捷地解决了优质教育资源不平衡的问题。",
                        "case_details_img": "./images/apiImg_new/case/zhongyangdianhua_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/beijingfaxingjituan_logo.jpg",
                        "time": "",
                        "desc":"北京发行集团借助移动云的公有云服务能力对外提供电商服务，建设完成集图书及多种商品销售、线上线下销售模式，众多商家共同经营的大型电子商务平台。",
                        "case_details_title": "北京发行集团",
                        "case_details_des": "移动云协助北京发行集团使用移动云的公有云服务能力对外提供电商服务，建设完成集图书及多种商品销售、线上线下销售模式，众多商家共同经营的大型电子商务平台。",
                        "case_details_img": "./images/apiImg_new/case/beijingfaxingjituan_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_yyspcl",
                "so_more_event_code":"API_moredetail_hlwnl",
                "online_event_code":"API_orderonline_hlwnl",
                "float_event_code":"Float_API_yyspcl",
                "event_code_new":"HOME_api_yfw_yysbcl",
                "sub_name": "语音识别处理",
                "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=ApControlpanel",
                "description": "语音听写，将语音转化为文字并识别。语音识别，将文字转化声音。语音合成，支持合成方言、中英文、不同音色发音人。声纹识别，根据语音波形识别说话人身份。语音评测，对发音水平进行评测。",
                "ability_icon":"data/images/api/api8-2.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "智能内容审核服务",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "移动互联网时代，每天都有大量的资讯内容不断地产生和投放。一旦内容运营平台出现了大量的涉黄、涉暴、政治敏感、广告等不良内容，不但会导致用户的满意度降低，而且还将面临政策法规管制的风险。随着内容信息的爆炸式的增长，内容运营平台需要不断地投入更多人力对内容进行审核。因此采用智能化技术手段用机器替代人工审核，降低人力成本，提高审核效率是目前内容运营平台共同的行业痛点。<br/><br/>对于听书内容的审核采用纯人工抽查测听的方式，存在人力成本高、审核效率低等问题。因此运用智能语音识别和音频技术，将全量听书音频转写成文本，再将转写的文本与敏感词库的对比，将敏感词内容高亮显示，可以有效提高人工测听评审的效率和覆盖全量听书，从而进一步节省人力投入，在单位时间内处理更多业务量。<br/><br/>智能审核，文字和波形两种方式全量审核，审核范围提升了5倍。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "智能质检服务",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "现有的质检体系为质检人员定期对坐席的通话录音进行抽样复听、统计问题、形成报告并进行后续控制。针对现有质检体系的基础上探索应用语音识别技术，变“听”为“看”，有效提升质检人员工作效率、扩大质检覆盖范围、降低质检工作成本。<br/><br/>目前质检工作主要为抽检，比例一般为5%，导致服务质量存在隐患，智能质检服务采用人工智能语音技术、深度学习算法等技术，将质检比例提升至100%，有效保障了服务质量。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "灵犀云能力调用",
                        "scene_icon": "images/apiImg_new/scene/yunnengli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yunnengli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "灵犀云夯实基础语音能力，内化智能语音交互能力，打造了“云、管、端”一体化的垂直行业智能语音解决方案，融合数字内容、信源服务，深度优化垂直场景下的语音交互界面及内容识别准确率，为行业提供一站式解决方案。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "语音能力领先",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "灵犀云语音能力对标科大讯飞语音能力最新版本，语音识别准确率处于领先地位。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "批量语音处理能力",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "通过转写引擎，语音数据转写完后，进行意图识别建模分析，按照质检、审核等要求开展分析处理。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "双工交互语义理解",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "采用讯飞AIUI3.0和雅典娜语义理解，提供物联网、智能硬件等垂直行业解决方案。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "语音能力选择",
                        "guideline_description": "按照产品使用需求勾选如下语音能力:<br/>在线语音合成、离线语音合成、声纹识别、活体检测、人脸识别、融合识别、语音听写。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "语音能力授权数量选择",
                        "guideline_description": "按照产品每天预计使用次数和使用用户数据，估算每天/每月的语音能力使用次数。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "商务模式选择及合作金额估计",
                        "guideline_description": "先选取企业适合的商务模式，然后按照选取的语音能力、授权数量、商务模式，自动对合作金额进行合计。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "需求确认及支付",
                        "guideline_description": "确认所需能力、授权数量、商务模式、合作金额，并对合作金额进行支付。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "语音听写：上传联系人",
                        "sub_api_desc": "实现联系人上传，提高联系人名称识别率及语义的效果。",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "语音听写：上传用户词表",
                        "sub_api_desc": "上传用户词表，提高词表内词汇的识别率及语义的效果。",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "语音识别、语音合成",
                        "sub_api_desc": "高质量合成通用文本转语音",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "声纹识别：声纹注册",
                        "sub_api_desc": "实现用户声纹注册",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "声纹识别：声纹验证",
                        "sub_api_desc": "实现用户声纹验证与识别",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "声纹识别：模型操作",
                        "sub_api_desc": "声纹注册成功后，在语音云端上会生成一个对应的模型来存储声纹信息，声纹模型的操作即对说模型进行查询和删除。",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "语音评测：创建对象和设置参数",
                        "sub_api_desc": "创建评测对象，设置评测参数。",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "语音评测：上传评测试题和录音",
                        "sub_api_desc": "创建评测监听接口，实现评测录音。",
                        "sub_api_type": "智能语音处理"
                    },
                    {
                        "sub_api_name": "语音评测：解析评测结果",
                        "sub_api_desc": "实现评测结果的输出。",
                        "sub_api_type": "智能语音处理"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",       
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                 
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动咪咕灵犀云平台",
                "detail_url": "http://dev.10086.cn/wiki/?page-yuyin1",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/lingxiyunyidong_logo.png",
                        "time": "",
                        "desc":"打造服务于辽宁人的一站式生活服务类平台，近生活、和商城、随身听、爱视频五大板块轻松搞定流量话费查办、周边吃喝玩乐购、六大生活需求，还可尊享积分兑换的特权等更多福利。",
                        "case_details_title": "基于灵犀云打造辽宁移动和生活",
                        "case_details_des": "和生活爱辽宁APP是中国移动移动全力打造服务于辽宁人的一站式生活服务类平台，近生活、和商城、随身听、爱视频五大板块轻松搞定流量话费查询办理，免费VIP大片、周边吃喝玩乐购、六大生活需求，还可尊享积分兑换的特权等更多专项福利。灵犀云提供语音识别、语音合成、语义理解等能力，提供方便易用的能力调用接口，用户可以随时随地获取高质量的智慧语音服务。<br/><br/>•	使用语音识别、语义理解能力<br/>•	用户直接用语音来搜索APP里的内容<br/>•	实现基于语音的关键词搜索、智能搜索，提升用户使用体验<br/>•	关键词搜索：“说什么，搜什么”，说的内容为搜索关键词，范围是APP内已有内容<br/>•	智能搜索：除了关键词搜索，还实现“按理解所说内容进行搜索”，范围是APP内内容（需要定制语义）",
                        "case_details_img": "./images/apiImg_new/case/lingxiyunyidong_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/miguhuyu_logo.png",
                        "time": "",
                        "desc":"咪咕互娱使用语音导航能力，客户只要说出需求即可快速定位到业务节点，从而实现服务菜单的扁平化，客户满意度大幅提升。使用客服质检能力，实现全部音频文字化，实现全面质检提升客服效率。还可对语音进行分析挖掘，实现精细化运营分析，针对性营销，提升客服营销效果。",
                        "case_details_title": "基于灵犀云打造咪咕互娱智能客服案例",
                        "case_details_des": "咪咕互娱，中国移动旗下娱乐站点，公司经营范围包括游戏、动漫及周边产品的开发和运营。咪咕互娱使用语音导航能力，客户只要说出需求即可快速定位到业务节点，从而实现服务菜单的扁平化，客户满意度大幅提升。<br/><br/>人工分流明显：分流率达13.47%，日均分流约为5.6万，全月分流月172.5万。",
                        "case_details_img": "./images/apiImg_new/case/miguhuyu_img.png"
                    }
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_ykj",
                "so_more_event_code":"API_moredetail_ykj",
                "online_event_code":"API_orderonline_ykj",
                "float_event_code":"Float_API_ykj",
                "event_code_new":"HOME_api_yfw_ykj",
                "sub_name": "云空间",
                "close_a_deal": "",
                "description": "云空间是基于云存储系统的企业级应用，为企业提供海量文件存储及管理的功能，并可以通过API接口方式嵌入企业其它业务系统，满足企业部门的数据存储、内容分享和成员管理的需求。云空间同时支持web，windows平台，也支持Android，IOS等移动客户端。",
                "ability_icon":"data/images/api/api8_yunkongjian.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "与其它业务系统集成",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jicheng_banner.png",
                        "scene_description": "对于大中型企业，除了专门的文件管理平台，还有诸如OA、企业邮箱等常用的各类办公系统以及用户管理等业务系统，要让企业文件在各类系统中顺畅流转和无缝对接，就要求企业文件管理平台能够支持同企业现有IT资源的整合。云空间开放API接口，让具有开发能力的第三方应用或用户可以介入云空间开放平台，利用API与内部的其他系统结合，满足企业所有集成需求。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "海量文档管理",
                        "scene_icon": "images/apiImg_new/scene/xuexi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xuexi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/wendangguanli_banner.png",
                        "scene_description": "大中型企业经过多年发展，内部寄存了大量过程文件，却因为没有统一部署和管理，造成存储资源浪费、协作困难、版本混乱、更新不及时等问题，大大降低了工作效率。<br/><br/>云空间可以有效完成企业内部文件的自动收集、统一规范，大幅度提高存储的利用率，降低管理员工作压力；文档数据统一视图呈现、访问和管理，文档集中管控，分级授权，支持跨部门文档共享，不同部门的用户可以基于用一个文件夹/文件进行共享和协作；数据可以由总部集中管控，也可以分级授权给分支机构管理员。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "数据安全分享",
                        "scene_icon": "images/apiImg_new/scene/yunnengli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yunnengli_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/shujuanquan_banner.png",
                        "scene_description": "很多企业有文件分享、共享需求，但常用的分享方式，如移动硬盘、邮件附件等不能保障敏感信息的安全。云空间采用传输加密技术，有效保障数据传输过程的安全性，可以在有效管控安全与审计的情况下，完成文件的交流、分享、存储；云空间还对登录设备类型进行管控，并通过设置IP白名单/黑名单方式，限制敏感内容的访问区域。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "存储多副本，文件不丢失",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "采用对象存储系统，多副本策略，数据可靠性高达99.999999999%（11个9），服务可用性99.9%。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "多平台支持",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "支持Web、Windows、Android、iOS等主流终端，实现同一账号多终端实时同步，不受办公区域束缚，畅享高效办公。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "传输安全可靠",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "通过可信云认证，支持https传输协议，支持IP白名单/黑名单设置，安全可靠；用户操作数据有记录，一切尽在掌控。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "试用申请",
                        "guideline_description": "请拨打400-181-0086进行试用申请。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "注册登录",
                        "guideline_description": "申请试用完成后即可登录使用。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "订购预约",
                        "guideline_description": "试用结束，如需继续使用，可拨打400电话联系我们。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "用户登录/登出",
                        "sub_api_desc": "客户使用POST方式提交发送登录/登出请求。",
                        "sub_api_type": "云服务"
                    },
                    {
                        "sub_api_name": "文件上传/下载",
                        "sub_api_desc": "用户使用POST方式上传文件至云空间，或从云空间下载文件。",
                        "sub_api_type": "云服务"
                    },
                    {
                        "sub_api_name": "文件管理",
                        "sub_api_desc": "支持通过POST方式方式对云空间文件进行管理操作，如复制、移动、删除。",
                        "sub_api_type": "云服务"
                    },
                    {
                        "sub_api_name": "共享管理",
                        "sub_api_desc": "支持通过POST方式对文件进行共享。",
                        "sub_api_type": "云服务"
                    },
                    {
                        "sub_api_name": "分享管理",
                        "sub_api_desc": "支持通过POST方式对文件生成外链，并将外链分享给其他人。",
                        "sub_api_type": "云服务"
                    },
                    {
                        "sub_api_name": "企业盘/群组盘管理",
                        "sub_api_desc": "通过发送POST请求，对企业盘/群组盘进行管理，包括文库管理、成员管理等操作。",
                        "sub_api_type": "云服务"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",                
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",        
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",            
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",            
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "云空间",
                "detail_url": "http://pan.cmsoft.com.cn:8081",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhongyiruanjian_logo.png",
                        "time": "",
                        "desc":"中移软件的OA系统集成了云空间，为员工提供云盘存储服务，节省了大量存储硬件投资。",
                        "case_details_title": "中移软件",
                        "case_details_des": "中移软件的OA系统有大量附件需要进行存储，如果自建需要对硬件进行大量投资；通过在OA系统中嵌入云空间，员工在使用OA系统时，可以方便对文件进行上传、下载、更改名称等操作，节省了存储硬件投资成本，提升了用户体验。",
                        "case_details_img": "./images/apiImg_new/case/zhongyiruanjian_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon2.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/paojiangyiyuan_logo.png",
                        "time": "",
                        "desc":"绍兴袍江医院使用云空间服务进行文件存储、跨部门协同办公，有效的减少沟通成本，提升了工作效率。",
                        "case_details_title": "绍兴袍江医院",
                        "case_details_des": "绍兴袍江医院医生在云空间中上传汇总病人情况，系统自动通知相关人员，第一时间响应；实现文件资料自动上传备份，上传备份过程多重加密，同时支持海量存储，方便使用；通过在线编辑、历史多版本、实时消息通知等功能，进行不同科室和个人间的文件分发和共享。",
                        "case_details_img": "./images/apiImg_new/case/paojiangyiyuan_img.png"
                    }
                ]
            }
        ]
    },
    {
        "id": "9",
        "event_code":"HOME_api_hy",
        "marketing_code":"API1",
        "name": "行业能力",
        "imgUrl": "images/apiImg/hangye.png",
        "description": "包括企业视频会议、对讲、监控等能力",
        "ability_menu": "images/apiMenu/menuIcon_09.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_spjk",
                "so_more_event_code":"API_moredetail_hyyysn",
                "online_event_code":"API_orderonline_hyyysn",
                "float_event_code":"Float_API_spjk",
                "event_code_new":"HOME_api_hy_spjk",
                "sub_name": "视频监控",
                "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                "description": "视频监控是通过API的方式，提供监控视频实时查看能力，同时终端用户可以查看不同时间点的历史录像。支持实时视频、录像查看、位置定位、视频存储等功能。",
                "ability_icon":"data/images/api/api9-1.png",
                "ability_menu": "images/apiMenu/menuIcon_01.png",
                "guideline_img": "images/apiImg_new/guideline/guideline_five1.png",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "在线园所",
                        "scene_icon": "images/apiImg_new/scene/shipin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shipin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zaixianyuansuo_banner.png",
                        "scene_description": "可以在幼儿园各个场所安装摄像头，父母随时查看宝宝在幼儿园中的生活。突破传统的办公方式，提升品牌价值。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "连锁商铺",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/liansuoshangpu_banner.png",
                        "scene_description": "针对小型连锁商铺，可运用视频监控能力，总店管理者实时把握分店内状况，进行流量分析，实现人员与货物的统一管理与运营。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "保险定损",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/baoxiandingsun_banner.png",
                        "scene_description": "执行人员随身携带终端设备，执行过程呼叫后台查看实时视频，并指导前端操作，支持对整个过程的留存备案。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "高效的终端管理",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "通过一个APP即可管理不同厂商的摄像头，操作简便快捷。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "灵活的接入方式",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "摄像头可通过4G、WiFi、网线多种方式接入网络。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "安全的后端存储",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "采用网银级别视频安全云加密技术，保障隐私安全。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "成为合作伙伴",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "开通能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "配置能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "调用能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "5",
                        "guideline_name": "产品优化与运营",
                        "guideline_description": ""
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "实时视频",
                        "sub_api_desc": "基于千里眼平台，提供监控视频实时查看能力。",
                        "sub_api_type": "行业能力"
                    },
                    {
                        "sub_api_name": "录像查看",
                        "sub_api_desc": "提供监控视频录像的查看能力，可以选择查看不同时间点的历史录像。",
                        "sub_api_type": "行业能力"
                    },
                    {
                        "sub_api_name": "位置",
                        "sub_api_desc": "提供基于摄像头位置的终端定位能力，并可以将位置信息显示在客户端的地图上。",
                        "sub_api_type": "行业能力"
                    },
                    {
                        "sub_api_name": "云台控制",
                        "sub_api_desc": "对于有云台控制功能的摄像头，提供摄像头云台转动控制能力。",
                        "sub_api_type": "行业能力"
                    },
                    {
                        "sub_api_name": "智能告警",
                        "sub_api_desc": "基于千里眼平台和摄像头功能，提供智能分析和告警能力。",
                        "sub_api_type": "行业能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",   
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                     
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动行业应用使能平台",
                "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=31",
                "cases":[      
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_spdj",
                "so_more_event_code":"API_moredetail_hyyysn",
                "online_event_code":"API_orderonline_hyyysn",
                "float_event_code":"Float_API_spdj",
                "event_code_new":"HOME_api_hy_spdj",
                "sub_name": "视频对讲",
                "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                "description": "支持向终端用户开放广域对讲、多媒体对讲、可视化调度功能。支持基础对讲、多媒体对讲以及可视化调度功能。可应用在跨部门沟通、物流运输等多种场景中。",
                "ability_icon":"data/images/api/api9-2.png",
                "ability_menu": "images/apiMenu/menuIcon_01.png",
                "guideline_img": "images/apiImg_new/guideline/guideline_five1.png",
                "scene": [
                    {
                    "scene_id": "1",
                    "scene_name": "跨部门沟通",
                    "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                    "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                    "scene_banner": "images/apiImg_new/scene/kuabumen_banner.png",
                    "scene_description": "可应用在政府事业单位间，实行多级调动管理，跨地域联动工作。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "物流运输",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/wuliuyunshu_banner.png",
                        "scene_description": "应用在物流运输场景中，整合对讲、定位、调度资源，提升管理效率。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "小区物业",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/xiaoquwuye_banner.png",
                        "scene_description": "应用于小区安保巡逻，使用多媒体对讲、可视化调度，方便沟通协作。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "优秀的对讲品质",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "高速率广覆盖的4G网络，即时稳定的专业对讲体验以及安全可靠的专用APN。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "高效的调度管理",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "提供可视化的调度平台，支持灵活的位置调度管理以及高效的群组管理。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "丰富的多媒体对讲",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "支持实时视频应用、视频图文上报以及多媒体消息等多形式对讲。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "成为合作伙伴",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "开通能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "配置能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "调用能力",
                        "guideline_description": ""
                    },
                    {
                        "guideline_id": "5",
                        "guideline_name": " 产品优化与运营",
                        "guideline_description": ""
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "语音对讲",
                        "sub_api_desc": "基于4G PoC平台，提供实时音频对讲能力。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "位置",
                        "sub_api_desc": "提供基于对讲终端位置的定位能力，并可以将位置信息显示在调度界面的地图上。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "调度管理",
                        "sub_api_desc": "提供调度台的用户管理、状态信息、频道管理、地图、对讲调度等能力。",
                        "sub_api_type": "通信服务能力"
                    },
                    {
                        "sub_api_name": "视频查看",
                        "sub_api_desc": "基于4G PoC平台，提供实时视频回传能力。",
                        "sub_api_type": "通信服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",           
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",             
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",          
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",              
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动行业应用使能平台",
                "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=34",
                "cases":[                    
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_zhwl",
                "so_more_event_code":"API_moredetail_zzwl",
                "online_event_code":"API_orderonline_zzwl",
                "float_event_code":"Float_API_zhwl",
                "event_code_new":"HOME_api_hy_zhwl",
                "sub_name": "智慧物流",
                "close_a_deal": "",
                "description": "智慧物流致力于深化智能硬件和终端产品的专业运作体系，提供和智仓、和智配、和智供、和智云四种行业定制化的解决方案，持续升级用户交互平台、深入大数据分析应用，打造“科技型、平台型、产品型”物流供应链一体化服务。",
                "ability_icon":"data/images/api/api9_zhihuiwuliu.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "和智仓",
                        "scene_icon": "images/apiImg_new/scene/zhineng_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhineng_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "中移物流在全国重要物流节点城市布局12个中心仓，省会城市布局33个省级集散中心，实现两级多储覆盖全国，可支撑全国单仓或多仓存储、出入库、包装增值等业务诉求。<br/><br/>定制全国单仓或多仓解决方案，实现串码级、智能化、精细化的仓储管理，通过微信公众号、网页、APP客户端实现仓库作业实时跟踪和红外线无死角监控，提供终端产品专业“三开一检”和库内加工服务。<br/><br/>配备智能库内设备，通过人证一体机联网公安部核实提货人身份，使用盘库机器人、拣货机器人提升仓库人效，提升业务精度。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "和智配",
                        "scene_icon": "images/apiImg_new/scene/wuliu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/wuliu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "整合全国干线和区域内的快递、零担、落地配、航空等运输资源，提供B2B、B2C智能配送服务，统一时效标准、作业标准、回传标准，实现全流程实时可视可管可追溯。<br/><br/><div class='clearfix'><span class='fl'>七大产品：<br/>·&nbsp;&nbsp;全国干线+城市配送；<br/>·&nbsp;&nbsp;全国/城市急速达；<br/>·&nbsp;&nbsp;全国干线配送；<br/>·&nbsp;&nbsp;省内城配当日达；<br/>·&nbsp;&nbsp;省内城配次日达；<br/>·&nbsp;&nbsp;省内城配隔日达；<br/>·&nbsp;&nbsp;跨省、跨区配送。</span><span class='fr' style='margin-right: 160px;'>六项增值：<br/>·&nbsp;&nbsp;全年无休；<br/>·&nbsp;&nbsp;保险、保价服务；<br/>·&nbsp;&nbsp;代收货款；</br>·&nbsp;&nbsp;定制化正逆向配送服务；<br/>·&nbsp;&nbsp;收货人区域分布智能分析（细化到四级县区）；<br/>·&nbsp;&nbsp;短信通知，全程可视，支持微信公众号实时查询和电子签收。</span></div>"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "和智供",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "根据产品不同生命周期与销售预测，在不同时期实现单仓与多仓解决方案的实时切换，平衡时效与库存诉求。<br/><br/>支撑订单自动接入和邮件下单，省会城市一日两配起步，240个区县当日达，1977个区县次日达，975个区县隔日达。提供实物流、信息流、资金流三流合一的供应链一体化服务，定制供应链SOP流程、仓配布局，实现订单全生命周期线上管理，实现串码级溯源管控，推动降本促效。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "和智云",
                        "scene_icon": "images/apiImg_new/scene/yunnengli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/yunnengli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "基于中移物流的物流云技术基础（WMS、TMS、OMS、BMS、SCM等），提供行业营运规模最大、经验最丰富的国内顶尖行业物流团队管理，全方位多维度的数据洞察分析，实时需求跟踪无忧产品咨询三大服务，为客户提供仓配布局、流程SOP设计、营运建议的物流整体解决方案，以及精准营销、销量预测、库存优化等智能解决方案，量身定制库存解决方案。<br/><br/>依托公司自有的大数据和算法能力，助力客户实现轻松备货，精准营销，降本增效。让客户成为省心的管理者，专注核心业务。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "整合广",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "全面、规范的物流资源整合能力。科学整合仓配网络、业务流程、信息系统，实现整体物流时效、网络覆盖及服务标准最优。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "响应快",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "上下游协同，快速的供应链响应能力。强化供应链联动管理，推动部门打通、系统打通、功能打通、操作打通，压缩内部供应链流转时间。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "管理精",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "精细、智能的物流管控能力。建立30余项物流管理标准，全方位监控物流供应链各环节，通过大数据运营分析打造智能物流服务。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "品类全",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "物流服务多品类、全覆盖能力。布局手机、智能硬件、3C类产品、家电、卡类、物料等全业务品类，提供定制化的物流服务。"
                    },
                    {
                        "advantage_id": "5",
                        "advantage_name": "系统强",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "领先的信息化服务能力。建设自主知识产权的物流管理信息系统，优化核心算法，实现物流、信息流、资金流、商流的 “四流合一”。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "完成需求确认",
                        "guideline_description": "输入运作产品类别、预计业务规模，确认业务覆盖范围、服务标准、系统对接标准。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "定制解决方案",
                        "guideline_description": "规划全国仓库布局，搭建配送服务网络，部署运力组合方式，定制仓储、配送SOP，设计系统对接方案。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "进行业务割接",
                        "guideline_description": "完成仓配软硬件部署和系统接口开发，执行供应链正逆向全流程穿越测试，录入主数据信息。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "启动项目运作",
                        "guideline_description": "项目支撑团队培训完毕、安排准备就绪，正式开始项目运作。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "订单接口",
                        "sub_api_desc": "外部系统传输出入库订单信息到LIS系统。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "出库信息接口",
                        "sub_api_desc": "LIS系统发送仓库出库信息给外部系统。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "签收信息接口",
                        "sub_api_desc": "LIS系统发送订单签收信息给外部系统。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "运单路由接口",
                        "sub_api_desc": "外部系统查询LIS系统运单路由信息。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "库存数量接口",
                        "sub_api_desc": "外部系统查询LIS库存数量信息。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "库存串码接口",
                        "sub_api_desc": "外部系统查询LIS库存串码信息。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "出入库过账接口",
                        "sub_api_desc": "LIS系统发送出入库过账信息给外部系统。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "仓库库存地点主数据接口",
                        "sub_api_desc": "外部系统查询LIS系统仓库库存地点主数据信息。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "物料主数据接口",
                        "sub_api_desc": "外部系统推送物料主数据信息，产生LIS物料主数据。",
                        "sub_api_type": "通信协议类"
                    },
                    {
                        "sub_api_name": "订单撤单接口",
                        "sub_api_desc": "外部系统调用该接口撤销LIS出入库订单。",
                        "sub_api_type": "通信协议类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "LIS系统，外部系统",
                "detail_url": "http://www.hedongli.com/web-mall/help/links/ZYlogistics/zhongyi.jsp?mchtId=35",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_music.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/miguhezuo_logo.png",
                        "time": "",
                        "desc":"为咪咕所有子公司提供物流供应链一体化解决方案，服务产品包含电子书、智能硬件、衍生品、设备物资等，服务内容包含仓配业务支撑、系统服务、数据分析服务，累计配送产品超30万件，实现“一点接入、覆盖全国”，助力咪咕公司线上、线下业务快速开展。",
                        "case_details_title": "咪咕",
                        "case_details_des": "合作背景<br/>咪咕文化有限公司是中国移动面向移动互联网领域设立的，设有动漫、音乐、数媒、视讯、互娱五个子公司。专于数字内容领域产品运营的咪咕公司，对其线上活动衍生的实体产品、综合设备线下仓储物流管理能力有限，经洽谈与中移物流达成合作共识，为咪咕各子公司实体产品提供物流供应链服务。<br/><br/>合作内容<br/>&nbsp;&nbsp;&nbsp;&nbsp;1.仓配一体化服务：集中管理咪咕各子公司实体产品，提供仓储、配送一体化服务。根据运营需求，灵活布局仓储体系，提供单仓、多仓覆盖全国的仓储服务；根据订单类型、平台管理要求，整合全国运代资源，提供零担、快递、空运等配送服务。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2.物流系统服务：中移物流LIS系统直接与咪咕公司进销存管理系统（NGOC系统）无缝对接，订单全流程自动化、信息化处理，订单信息、产品信息全程可视、可追溯。<br/>&nbsp;&nbsp;&nbsp;&nbsp;3.定制化增值服务：定制化报表、专项商务客服、大数据分析服务。<br/><br/>合作成效<br/>&nbsp;&nbsp;&nbsp;&nbsp;1.合作以来，累计配送订单超过20万单，物流配送准时率高于97%。在2018年春节停运前，1周内紧急完成6万余单订单发货，有效支撑线上营销活动。<br/>&nbsp;&nbsp;&nbsp;&nbsp;2.统一仓配管理结束了咪咕公司线下产品分散管理历史，实现实物集中管理、系统统一管理，提供“一点接入，覆盖全国”的物流支撑服务。<br/>&nbsp;&nbsp;&nbsp;&nbsp;3.物流系统服务结束了咪咕公司线下产品手工制单历史，实现采购、销售、物流供应链全流程自动化、信息化管理。",
                        "case_details_img": "./images/apiImg_new/case/miguhezuo_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/haixinshouji_logo.png",
                        "time": "",
                        "desc":"2017年，中移物流与海信手机建立战略合作，中移物流凭借多年的终端物流运作经验，利用自主研发的LIS系统，整合产业链上下游优质资源，为海信手机提供 “采购入库、扫码出库、配送签收、串码推送”的全流程一体化解决方案。",
                        "case_details_title": "海信手机",
                        "case_details_des": "合作背景<br>2017年山东移动提出省内终端一体化运营的要求，要求所有山东省内的终端产品进行统一平台订购、统一仓储物流、统一串码推送。基于此背景，山东移动牵头，中移物流与海信手机进行了洽谈，三方达成合作共识，由中移物流为海信手机提供山东省内物流供应链服务。<br/><br/>合作内容<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.仓配一体化服务：集中管理海信手机终端，提供仓储、配送一体化服务。仓储方面， 通过自主研发的LIS系统，开展流程化运作，实现物流运作各环节串码数据采集、校验、传输、查询的准确、高效。在配送方面，整合全网配送资源，架构起稳定、全覆盖、多选择的优配网络，并可实现物流配送节点的实时查询，有效地满足了客户的查询、监控、跟踪等需求。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.订单及串码服务：中移物流LIS系统直接与和动力及山东移动终端管理平台实现无缝对接，订单全流程自动化、信息化处理，串码实现自动推送，订单信息、产品信息、串码信息全程可视、可追溯。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.定制化增值服务：定制化报表、专项商务客服、大数据分析服务。<br/><br/>合作成效<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.合作以来，物流配送准时率高于98.6%。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.统一仓配管理结束了海信公司多系统操作、人工调拨串码的局面，实现订单集中管理、仓储物流统一管理，串码统一调拨的支撑服务，实现采购、销售、物流供应链全流程自动化、信息化管理。",
                        "case_details_img": ""
                    }
                ]
            }
        ]
    },
    {
        "id": "10",
        "event_code":"HOME_api_dsj",
        "marketing_code":"API1",
        "name": "大数据能力",
        "imgUrl": "images/apiImg/dashuju.png",
        "description": "包括位置、信用等能力",
        "ability_menu": "images/apiMenu/menuIcon_10.png",
        "sub_ability": [
            {
                "sub_id": "1",
                "event_code":"API_xyfwnl",
                "so_more_event_code":"API_moredetail_xyfw",
                "online_event_code":"",
                "float_event_code":"Float_API_xyfwnl",
                "event_code_new":"HOME_api_dsj_xyfwnl",
                "sub_name": "信用服务能力",
                "close_a_deal": "",
                "description": "该接口基于HTTP/REST/H5服务向合作伙伴输出中国移动的信用服务能力，包括用户授权、信用分查询、信用子模型查询等。",
                "ability_icon":"data/images/api/api10-1.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "风险控制及授信",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/xinyongfuwu_banner.png",
                        "scene_description": "开发者可以通过API接口将中国移动的信用服务能力接入自己的业务/服务流程，实现对用户的身份确认、业务风险控制及授信等场景。"
                    }
                ],
                "advantage": [
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请受理",
                        "guideline_description": "有意向且符合准去基本条件的单位，按照合作管理办法规定的申请资料的要求，将合作申请资料提交至中国移动信用公共邮箱。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "信息核准",
                        "guideline_description": "由中国移动按照合作方申请材料要求进行核准"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "复核引入",
                        "guideline_description": "由中国移动组织对核准结果进行二次审核并形成引入结果。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "合同签署&技术对接",
                        "guideline_description": "由中国移动公布合作方引入结果并签署合作协议。合同签署后进行技术对接，包括测试数据的提供、系统对接、页面开发、业务测试、上线部署等工作。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "用户授权",
                        "sub_api_desc": "该接口用于确认用户对第三方查询该用户的中国移动信用信息的授权。",
                        "sub_api_type": "大数据服务能力"
                    },
                    {
                        "sub_api_name": "信用分查询",
                        "sub_api_desc": "该接口用于查询某用户的中国移动信用评分及分项分。",
                        "sub_api_type": "大数据服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",      
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                  
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动信用服务平台",
                "detail_url": "http://xinyong.cmri.cn/client/api",
                "cases":[
                ]
            },
            {
                "sub_id": "2",
                "event_code":"API_znzddwnl",
                "so_more_event_code":"API_moredetail_wzfw",
                "online_event_code":"",
                "float_event_code":"Float_API_znzddwnl",
                "event_code_new":"HOME_api_dsj_znzddwnl",
                "sub_name": "智能终端定位能力",
                "close_a_deal": "",
                "description": "为Android用户端应用提供一套简单易用的LBS定位服务接口，通过使用中国移动融合定位SDK，开发者可以轻松为应用程序实现智能、准确、高效的定位功能。",
                "ability_icon":"data/images/api/api10-2.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "外勤管理",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "无论是政府机关还是企事业单位，人员和车辆的管理调度都是企业运作的基础，尤其是邮政、保险、城管等流动性强、区域性明显的行业，传统考勤管理的高成本、低效率已无法满足业务快速发展的需求，通过先进的科学技术和管理手段，实现管理优化，提升工作质量，是企业管理发展的大势所趋。人力成本随着业务需求不断增加，企业管理者希望增强对现有人员的监管力度，从而实现精确管理。通过利用内嵌定位终端SDK以及无线通信技术于一体的软、硬件综合系统，可以为企业提供人员室内外管理综合解决方案。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "融合通信",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前，定位功能已成为智能终端各类应用程序的标配功能。应用程序可基于获取到的终端位置信息进一步开发周边信息查询、地图导航等功能。例如，融合通信客户端可利用嵌入SDK的方式，在APP中通过获取到的位置信息，为用户提供位置发送与查询功能，即好友之间可相互发送当前所在位置，并通过地图显示出来，功能与微信中发送位置功能基本一致。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "销售管理",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前外勤销售管理等APP已经普遍服务于快速消费品行业、家电行业、保险行业、医药行业、房地产行业等客户的销售和市场部门，手机端具有直观方便的特点，通过基于地图SDK开发内置地图APP应用，中小企业高管及管理者可以通过手机随时对旗下的车辆、人员、货物进行位置监控。被管理员工可以使用手机终端完成现场数据采集、工单接收/反馈等工作并与后台系统进行实时的数据交互，帮助企业管理者更好的安排外勤人员的工作，增强团队效率，有效解决外勤人员的工作地点不固定、数据反馈不及时、人员监管等难题。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "速度快",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "定位SDK端到端响应时延1秒，满足各类客户端软件需求。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "精度高",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "基站定位200米，Wifi定位50米。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "轻便易用",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "SDK体积小，不增加客户端APP负担，Java标准接口，简单易用。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请",
                        "guideline_description": "开发者申请调用智能终端定位能力。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "配制",
                        "guideline_description": "位置服务中心为开发者分配能力调用的key。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "能力调用",
                        "guideline_description": "开发者根据开发手册及分配的key实现对此能力调用。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "“获取SDK的终端定位结果”接口",
                        "sub_api_desc": "获得终端所在位置的经纬度信息。",
                        "sub_api_type": "定位"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动位置服务平台",
                "detail_url": "http://ditu.10086.cn/index.htm",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_music.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/migushipin_logo.png",
                        "time": "",
                        "desc":"目前，定位功能已成为智能终端各类应用程序的标配功能。应用程序可基于获取到的终端位置信息进一步开发周边信息查询、地图导航等功能。咪咕视频客户端利用嵌入SDK的方式，客户端启动时获取用户位置信息，作为视频版权方是否允许用户观看的判断依据。",
                        "case_details_title": "咪咕视频APP",
                        "case_details_des": "咪咕视频是咪咕视讯科技有限公司面向互联网用户推出的高品质综合类视频客户端业务，提供高质量影视、综艺、直播等优质内容，同时以会员体系作为轴心，实现手机、PC、电视、平板的全场景多终端跨屏权益互通。<br/><br/>咪咕视频客户端利用嵌入SDK的方式，客户端启动时获取用户位置信息，作为视频版权方是否允许用户观看的判断依据，并基于用户当前位置，推送相关信息。",
                        "case_details_img": "./images/apiImg_new/case/migushipin_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_pay.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/hebaozhifu_logo.png",
                        "time": "",
                        "desc":"通过使用智能终端定位SDK，辅助和包支付在无法通过号码归属地来判断用户位置信息时，通过定位SDK来判断用户的位置，并根据位置信息为用户提供生活缴费服务。",
                        "case_details_title": "和包支付APP",
                        "case_details_des": "中国移动和包（原名“手机支付”、“手机钱包”）是中国移动面向个人和企业客户提供的一项领先的综合性移动支付业务，让客户享受到方便快捷、丰富多彩、安全时尚的线上、线下支付体验。用户开通和包业务，即享方便快捷的线上支付（互联网购物、充话费、生活缴费等）；持NFC手机和NFC-SIM卡的用户，更可享和包刷卡功能，把银行卡、公交卡、会员卡装进手机里。从而实现特约商家（便利店、商场、公交、地铁等）线下消费（业务功能费全免）。<br/><br/>通过使用智能终端定位SDK，辅助和包支付在无法通过号码归属地来判断用户位置信息时，通过定位SDK来判断用户的位置，并根据位置信息为用户提供生活缴费服务。",
                        "case_details_img": "./images/apiImg_new/case/hebaozhifu_img.png"
                    }
                ]
            },
            {
                "sub_id": "3",
                "event_code":"API_dtssdhSDK",
                "so_more_event_code":"API_moredetail_wzfw",
                "online_event_code":"",
                "float_event_code":"Float_API_dtssdhSDK",
                "event_code_new":"HOME_api_dsj_dtssdhSDK",
                "sub_name": "地图搜索导航SDK",
                "close_a_deal": "",
                "description": "地图、搜索、导航SDK能力族服务于集成LBS地理位置服务的应用，为 Android、IOS 应用开发者提供互动的、功能丰富的手机服务开发辅助，满足用户对地图搜索、导航、路线规划等需求。",
                "ability_icon":"data/images/api/api10-3.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "外勤、销售管理",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前外勤销售管理等APP已经普遍服务于快速消费品行业、家电行业、保险行业、医药行业、房地产行业等客户的销售和市场部门，手机端具有直观方便的特点，通过基于地图SDK开发内置地图APP应用，中小企业高管及管理者可以通过手机随时对旗下的车辆、人员、货物进行位置监控。被管理员工可以使用手机终端完成现场数据采集、工单接收、反馈等工作并与后台系统进行实时的数据交互，帮助企业管理者更好的安排外勤人员的工作，增强团队效率，有效解决外勤人员的工作地点不固定、数据反馈不及时、人员监管等难题。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "宽带资源展现",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "宽带资源展现APP是面向移动公司集客经理、社区经理、存量保有经理、乡镇经理等行销人员，提供业务营销、业务管理的APP支撑工具，主要实现支付宝缴费、实名开户、宽带办理、营销活动、高清电视等业务的办理和业务查询功能。结合位置信息和地图展示，可以直观的查询驻地网信息，便捷的确定客户的地址是否在覆盖范围内及光交箱设备的详细位置信息，特别能够满足乡镇和农村等网络薄覆盖地区的需求。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "融合通信",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前，地图展示已成为智能终端各类应用程序的标配功能。应用程序可与位置功能结合进一步提供周边信息查询、地图导航等功能。例如，融合通信客户端可利用嵌入SDK的方式，在APP中通过获取到的位置信息，为用户提供地图展示查询，好友之间可相互发送当前所在位置，并通过地图显示出来，功能与微信中发送位置、地图展示功能基本一致。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "地图显示速度快",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "地图采用矢量方法绘制，使得地图处理速度更快、流量占用更少。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "多种搜索方式",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "提供针对搜索类SDK API，包括POI搜索、公交搜索、地理逆地理编码搜索、路径计算等搜索服务。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "导航功能丰富",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "导航SDK功能包括规划路线、模拟导航、获取导航播报信息、路况信息、路口放大图等信息。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请",
                        "guideline_description": "开发者申请调用地图搜索导航SDK。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "配制",
                        "guideline_description": "位置服务中心为开发者分配能力调用的key。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "能力调用",
                        "guideline_description": "开发者根据开发手册及分配的key实现对此能力调用。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "地图SDK开发包（安卓、IOS）",
                        "sub_api_desc": "地图采用矢量方法绘制，支持 3D 离线地图，支持手机、平板电脑",
                        "sub_api_type": "地图"
                    },
                    {
                        "sub_api_name": "搜索SDK开发包（安卓、IOS）",
                        "sub_api_desc": "可提供针对搜索类SDK API，包括POI搜索、公交搜索、地理逆地理编码搜索、路径计算（驾车、公交、步行）等搜索服务。",
                        "sub_api_type": "地图"
                    },
                    {
                        "sub_api_name": "导航SDK开发包（安卓、IOS）",
                        "sub_api_desc": "功能包括规划路线、模拟导航、获取导航播报信息、路况信息、路口放大图等信息。该SDK提供的导航路径规划支持驾车、步行导航，同时可添加最多16个途经点，包含6种不同的导航策略，更有实时路况播报等功能。",
                        "sub_api_type": "地图"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",           
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",             
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",          
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",              
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动位置服务平台",
                "detail_url": "http://ditu.10086.cn/index.htm",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/hejingzhongduan_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/hejingzhongduan_logo.png",
                        "time": "",
                        "desc":"和镜终端是中国移动物联网公司开发的基于车联网领域内的一款车载后视镜，其内部搭载安卓操作系统，同时以物联卡作为通信媒介进行数据传输。通过将和地图客户端嵌入至该设备中，为和镜提供定位、导航、地图展现及搜索等功能，满足用户行车时对地图导航功能的需求。",
                        "case_details_title": "和镜终端",
                        "case_details_des": "“和云镜”是中国移动物联网公司围绕智慧出行打造的4G智能后视镜系列终端品牌，在安装上更为轻量化，搭载了YunOs智能系统，具备先进的ADAS智能安全提醒，支持胎压监测以及从安全角度出发，采用白玻防眩材质，不影响行车后视，提供语音声控交互、微信助手等多种功能，让车主远离手机专注驾驶，为行车过程中提供出众的使用体验及高效的安全记录功能。协同中移物联网公司在和云镜CM02终端内定制化开发和地图专用版本，通过将和地图客户端嵌入至该设备中，为和镜提供定位、导航、地图展现及搜索等功能，满足用户行车时对地图导航功能的需求。",
                        "case_details_img": ""
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_goout.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/heshenghuo_logo.jpg",
                        "time": "",
                        "desc":"各省和生活是各省公司整合线上线下运营，为客户提供相关服务的重要门户。目前，地图功能已成为各热门APP的标配功能，通过内嵌SDK的方式，可以实现地图浏览、地图POI点及周边搜索、公交换乘或自驾路线导航等功能。",
                        "case_details_title": "和生活APP",
                        "case_details_des": "开发者可根据APP功能需要，使用地图、搜索、导航的相关SDK，定制开发符合用户服务需要的手机应用，例如各省公司“和生活”，在手机APP（安卓、IOS）中用地图的方式展示信息，并根据用户需要提供搜索、导航、公交换乘等功能。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）到达商户的公交及自驾路线查询：根据用户输入的起点和终点，为用户规划公交换乘及自驾路线并在地图上为用户展现路线规划。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）本地旅游景点推荐：通过分析用户位置，通过地图直观展示用户所在城市周边旅游景点位置和分布，方便用户规划日程，并可以通过导航指引。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）周边停车场查询：通过内置在APP中的定位插件获取用户当前位置，并通过周边搜索功能显示用户周边停车场分布，通过停车数据的引入还可以显示实时的停车位数量。",
                        "case_details_img": "./images/apiImg_new/case/heshenghuo_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "4",
                "event_code":"API_tydtJSAPI",
                "so_more_event_code":"API_moredetail_wzfw",
                "online_event_code":"",
                "float_event_code":"Float_API_tydtJSAPI",
                "event_code_new":"HOME_api_dsj_tydtJSAPI",
                "sub_name": "统一地图JSAPI能力",
                "close_a_deal": "",
                "description": "支持目前市场上所有的主流地图应用，无论是在PC上的浏览器中，还是在手机上的浏览器中展现地图，都能充分满足各类地图应用的使用需求。",
                "ability_icon":"data/images/api/api10-4.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "有线宽带覆盖及开户",
                        "scene_icon": "images/apiImg_new/scene/tongxin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/tongxin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/youxiankuandai_banner.png",
                        "scene_description": "为了方便直观查询有线宽带的小区覆盖情况，降低用户开户选址错误率,可通过地图的形式展示营业区/网格/生活小区内宽带覆盖情况，根据不同区域的发展情况可以标注不同的颜色，同时也可以在地图上展示该区域宽带的具体信息，如：小区入住用户数、端口配置量、覆盖用户数、开户用户数、覆盖率等。营业员也可以根据用户描述选择对应楼，选择用户所在的单元、楼层和房号进行开户。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "区域收入精准统计",
                        "scene_icon": "images/apiImg_new/scene/dingwei_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/dingwei_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/quyushouru_banner.png",
                        "scene_description": "区县/乡镇/营业区统计收入时常出现由于区域关联基站数据不准确、繁琐，更新不及时造成的统计偏差情况。通过自动、准确的建立行政区/营业区与行政区/营业区内基站的对应关系，可以解决基站归属问题，并进行科学管理，从而实现收入的准确统计，并把统计结果作为对该区域负责人的绩效考核。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "特定区域网格商户拓展",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/shanghutuozhan_banner.png",
                        "scene_description": "利用位置服务中心丰富的POI数据库，通过对特定区域（营业区/自定义区域）内的商户信息进行筛选，使区域经理可以获取区域内商家信息，更好的维系客户与拓展客户，实现精细化管理，达到提质增效的目的。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "功能丰富",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "支持目前市场上所有的主流地图应用，充分满足各类地图应用的使用需求。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "交互性强",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "提供多种地图交互方式，在不同场景下可以以适当的方式与地图进行交互。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "节省开发成本和周期",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "通过使用地图JSAPI接口相比于底层的地图WEBAPI接口将节省一半的开发成本，缩短了开发周期。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请",
                        "guideline_description": "开发者申请调用统一地图JSAPI能力。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "配制",
                        "guideline_description": "位置服务中心为开发者分配能力调用的key。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "能力调用",
                        "guideline_description": "开发者根据开发手册及分配的key实现对此能力调用。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "统一地图JSAPI接口",
                        "sub_api_desc": "统一地图JSAPI接口用于开发基于浏览器网页地图应用，通过JavaScript语言调用地图能力实现地图应用。",
                        "sub_api_type": "地图"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",         
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",               
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",        
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动位置服务平台",
                "detail_url": "http://ditu.10086.cn/index.htm",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_map.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/shequjiaozheng_logo.jpg",
                        "time": "",
                        "desc":"社区矫正平台调用统一地图JSAPI能力族提供的栅格地图、地图覆盖物、鼠标绘图工具等接口等接口，在本地平台上进行地图展现，并将获取到的监管人员位置信息在地图上进行描画，从而直观地查看人员所在的具体位置，并可在本地平台的地图上设置社区范围。",
                        "case_details_title": "社区矫正系统",
                        "case_details_des": "社区矫正是针对取保候审或在社区服刑的犯人进行考勤监管的工作。目前基本依赖人工管理和书面汇报，存在社区矫正工作者工作量大、效率低、对矫正对象无标准化和量化考核等问题，而且，在社区矫正工作执行过程中还存在强制力不够，矫正对象的活动范围无法监管等问题。<br/><br/>社区矫正管理定位平台为司法行政单位提供位置监管、短信下发及信息互动等管理功能。对社区服刑人员采取远程报到、短信通知等人性化的管理手段，本系统利用LBS远程定位、短信息技术等，实现对司法社区服刑人员的实时监控、信息交互；并实现社区矫正工作者对被矫正人员的活动区域设定。结合社区矫正工作的特点，通过软件实现办公自动化，通过协同办公实现网上工作衔接。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）位置查看：社区矫正平台调用统一地图JSAPI能力族提供的栅格地图、地图覆盖物等接口，在本地平台上进行地图展现，并将获取到的监管人员位置信息在地图上进行描画，从而直观地查看人员所在的具体位置。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）区域告警：社区矫正平台调用统一地图JSAPI能力族提供的鼠标绘图工具等接口，在本地平台的地图上设置社区范围，当矫正人员位置超出该范围发出告警。",
                        "case_details_img": "./images/apiImg_new/case/shequjiaozheng_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_internet.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/weizhitong_logo.png",
                        "time": "",
                        "desc":"山东移动位置定位平台，是一个融合了GPS和LBS应用功能的综合定位业务系统，本地平台可调用统一地图JSAPI能力族提供的栅格地图、搜索等接口，在本地平台的网站上查询指定的信息点，并可基于相应的返回结果进一步查询信息点周边的人员或车辆，并将相关信息在地图界面上进行展现。",
                        "case_details_title": "位置通",
                        "case_details_des": "山东移动位置定位平台，是一个融合了GPS和LBS应用功能的综合定位业务系统，满足集团客户对GPS和LBS行业应用的功能需要。GPS行业应用范围包括长途客运、公交、出租、物流、环卫、治安巡逻、危险品运输、汽车租赁、石油、特种车辆及海洋渔业等领域，以同时并能结合移动公司资源优势对集团客户进行个性化开发，满足其个性化需求。本地平台的开发者可根据功能需要，使用地图、搜索等统一地图JSAPI，定制开发符合需求的本地化应用。<br/><br/>搜索：本地平台可调用统一地图JSAPI能力族提供的栅格地图、搜索等接口，在本地平台的网站上查询指定的信息点，并可基于相应的返回结果进一步查询信息点周边的人员或车辆，并将相关信息在地图界面上进行展现。",
                        "case_details_img": "./images/apiImg_new/case/weizhitong_img.png"
                    }
                ]
            },
            {
                "sub_id": "5",
                "event_code":"API_URIdtnl",
                "so_more_event_code":"API_moredetail_wzfw",
                "online_event_code":"",
                "float_event_code":"Float_API_URIdtnl",
                "event_code_new":"HOME_api_dsj_URIdtnl",
                "sub_name": "URI地图能力",
                "close_a_deal": "",
                "description": "用于开发网站地图页面，包括：PC端：适用于WWW网站地图页面；移动端：适用于WAP、H5网站地图页面，使用方无需开发代码，直接调用接口即可实现网站地图页面功能。",
                "ability_icon":"data/images/api/api10-5.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "网站地图调用展示",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前，地图功能已成为各门户网站的标配功能，开发者可根据URI地图能力接口文档，根据具体需求不同，通过不同的URI链接轻松实现地图浏览、公交换乘、自驾路线、周边信息查询、地图导航等功能，无需代码开发，简单易用。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "位置短链接分享",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "为了方便用户通过微信、微博、短彩信等渠道分享位置信息，平台应该具备将位置信息生成一条链接并发送的功能，因为主流的信息共享渠道（微信、朋友圈）有字节和格式限制，直接使用长链接方式不利于在互联网传播，因此URI地图能力提供一种储存长链接并分配对应ID的方式生成一条短链接点击短链接可地图上浏览到对应的POI点。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "微信公众号内嵌地图",
                        "scene_icon": "images/apiImg_new/scene/dingwei_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/dingwei_shade_icon.png",
                        "scene_banner": "",
                        "scene_description": "目前，微信等通讯工具在人们的日常生活中应用越来越广泛，为了在微信中便于用户分享个人位置，可通过内嵌WAP或H5页面方式调用URI地图能力，然后基于手机获取到的终端位置信息，在地图中进行标点展示并可进一步提供周边信息查询、地图导航等功能。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "业务无需开发代码",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon2.png",
                        "advantage_description": "调用URI地图能力，使用方不需要另行开发代码。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "调用便捷",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "直接根据接口文档中的URI链接，即可实现地图功能。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "实时展现",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "在网页中输入URI链接可实时展现地图功能。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "申请",
                        "guideline_description": "开发者申请调用URI地图能力。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "配制",
                        "guideline_description": "位置服务中心为开发者分配能力调用的key。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "能力调用",
                        "guideline_description": "开发者根据开发手册及分配的key实现对此能力调用。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "URI地图接口",
                        "sub_api_desc": "URI地图接口用于有分享地图页面需求的应用，如微信中分享地图页面。",
                        "sub_api_type": "地图"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中国移动位置服务平台",
                "detail_url": "http://ditu.10086.cn/index.htm",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/hedituwap_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/hedituwap_logo.jpg",
                        "time": "",
                        "desc":"和地图门户网站WAP网址http://dhwap.mlocso.com。通过端口直接调用，实现地图浏览、公交换乘、自驾路线、周边信息查询、地图导航、位置信息短链接分享等功能。WAP页面可基于手机获取到的终端位置信息进一步提供周边信息查询、地图导航等功能。",
                        "case_details_title": "和地图门户网站WAP",
                        "case_details_des": "和地图门户网站WAP网址http://dhwap.mlocso.com。目前，地图功能已成为各门户网站的标配功能。通过端口直接调用，实现地图浏览、公交换乘、自驾路线、周边信息查询、地图导航、位置信息短链接分享等功能。WAP页面可基于手机获取到的终端位置信息进一步提供周边信息查询、地图导航等功能。<br/><br/>该能力可内嵌在各门户网站中提供位置服务，例如各省公司“网上营业厅”“和生活”在WAP页面中用地图的方式展示如下信息，结合用户位置信息并根据用户需要提供导航公交换乘等功能。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）附近的营业厅:根据用户当前位置，并在地图上为用户展现附近的营业厅，方便用户查找营业厅办理业务。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）WLAN热点：将用户当前位置，与地图结合，展现用户身边的WLAN热点位置，可方便用户就近选择上网地点。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）终端售后网点：根据用户当前位置，结合地图显示出用户身边的终端售后网点，提高用户终端售后服务的体验。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）无线宽带办理（在线选择所属小区）：用户的所在小区位置，定向向用户推介宽带促销业务等。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）根据一个短链接访问对应的URI，用户通过微信、微博、短彩信等渠道获得短链接，点击短链接可地图上浏览到对应的POI点。",
                        "case_details_img": ""
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_map.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/hedituwap_logo.jpg",
                        "time": "",
                        "desc":"和地图客户端通过集成URI地图能力，用户通过该客户端分享自己当前位置信息，通过使用URI地图能力中的短链接分享功能，提供一种储存长链接并分配对应ID的方式生成一条短链接，点击短链接可地图上浏览到对应的POI点。",
                        "case_details_title": "和地图位置短链接分享",
                        "case_details_des": "为了方便用户通过微信、微博、短彩信等渠道分享位置信息，平台应该具备将位置信息生成一条链接并发送的功能，因为主流的信息共享渠道（微信、朋友圈）有字节和格式限制，直接使用长链接方式不利于在互联网传播，因此提供一种储存长链接并分配对应ID的方式生成一条短链接点击短链接可地图上浏览到对应的POI点。",
                        "case_details_img": "./images/apiImg_new/case/hedituduanlianjie_img.png"
                    }
                ]
            },
            {
                "sub_id": "6",
                "event_code":"API_zysq",
                "so_more_event_code":"API_moredetail_zysq",
                "online_event_code":"API_orderonline_zysq",
                "float_event_code":"Float_API_zysq",
                "event_code_new":"HOME_api_dsj_zysq",
                "sub_name": "中移商情",
                "close_a_deal": "",
                "description": "基于大数据平台能力，实时采集互联网招投标信息，实现准确定制化商情，多维度商情信息分析和项目筛选，全面的企业档案，使用户能够及时发现商机、全量获知商机、实时跟踪项目进展、深度了解竞争企业档案信息。",
                "ability_icon":"data/images/api/api10_shangqing.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "商机助手",
                        "scene_icon": "images/apiImg_new/scene/shuzijiating_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shuzijiating_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/shangjizhushou_banner.png",
                        "scene_description": "中移商情通过精准自然语言处理算法，提供定制化商情侦探，实时跟踪关注招投标项目最新动态、全面深入查询企业评委档案，及时推送最新商情。解决企业招投标过程中人为跟踪项目，无法第一时间得到最新的招投标项目信息的痛点。帮助企业能够及时发现商机、全量获知商机、洞察财富先机，从而在商场立于不败之地。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "分析决策",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/fenxijuece_banner.png",
                        "scene_description": "中移商情以定制化的企业招投标信息等多方面商业情报服务为入口，从行业、区域、预算金额、中标金额、招标数、中标数、热门评委等多个维度进行筛选和分析。实时呈现、跟踪、推送、开标截止时间预警，对企业关注的信息，以及区域行业招投标信息形成全量多维度商情信息统计分析、资质分析以及商情报告，帮助企业进行竞标决策。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "投标资信",
                        "scene_icon": "images/apiImg_new/scene/baoxian_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/baoxian_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/toubiaozixin_banner.png",
                        "scene_description": "中移商情采集多行业、各区域最权威和最全面的政府、招标机构、企业招投标信息，区域覆盖全国、省、市、县，信息类型覆盖项目预告、公告、更正、结果，招投标信源达到35000+，每日处理招投标信息10W+。为客户提供全面定制化招投标信息的综合性平台，让用户尽可能广泛且精准的获得自己想要的项目招投标信息，从而节省大量的人力项目筛选。"
                    },
                    {
                        "scene_id": "4",
                        "scene_name": "竞品监测",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jingpinjiance_banner.png",
                        "scene_description": "中移商情根据企业个性化需求，呈现定制化企业信息档案，包括详细的企业工商信息、企业关系图谱、企业招标档案、企业评委档案等项目。帮助企业全方位多角度了解招标信息，同时深度了解竞争对手档案信息，从而做到知己知彼百战不殆，在商场立于不败之地。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "信息全面",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "采集多行业、区域最权威和全面的政府、招标机构、企业招投标信息。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "精准推送",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "侦探个性化定制，招投标信息多条件筛选和聚合，结果呈现精准，招标信息实时推送。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "维度众多",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "用户订阅的侦探信息从行业、区域等多个维度进行筛选和分析，个性化中移商情报告订阅。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "档案齐全",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon7.png",
                        "advantage_description": "全面深入的企业评委档案，详细的企业工商信息、企业关系图谱、企业招标历史等。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "试用申请",
                        "guideline_description": "欢迎您加入中移商情，如需申请试用，请填写相关信息。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "注册登录",
                        "guideline_description": "申请使用资料填写完毕即可登录使用。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "订购预约",
                        "guideline_description": "试用期结束，如需继续使用，可在线联系我们预约服务。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "联系我们",
                        "guideline_description": "如有任何需要了解的问题，可随时通过电话、微信、QQ联系我们。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "商机监测",
                        "sub_api_desc": "通过设置关注业务或单位关键词，实时监测互联网上相关业务的招投标信息。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "商机分析",
                        "sub_api_desc": "户订阅的侦探信息从行业、区域、预算金额、中标金额、招标数、中标数、资质、热门招标企业、热门中标企业、热门代理商、热门评委等多个维度进行筛选和分析；行业分类可达280多类，行业细分助力精准信息推送。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "商机推送",
                        "sub_api_desc": "实时自动跟踪关注项目最新动态，关注项目开标截止时间7天内预警，让商机不再错过。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "企业档案",
                        "sub_api_desc": "全面深入的企业评委档案，详细企业工商信息、企业关系图谱、企业招标历史、评委参与招标项目、招标法律法规。",
                        "sub_api_type": "产品类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中移情报分析系统",
                "detail_url": "https://shangqing.bigcloudsys.cn",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/shanqijituan_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/shanqijituan_logo.png",
                        "time": "",
                        "desc":"陕汽集团使用中移商情设置侦探，发现商机项目；应用中移商情分析了解陕汽集团以及竞争对手参与的历史招投标项目、区域以及行业招标项目，并进行预算金额、中标金额、招标数、中标数、资质等多方面的分析，形成定制化商情报告。",
                        "case_details_title": "陕汽集团",
                        "case_details_des": "陕汽集团使用商情通分析系统设置侦探，发现商机项目。陕汽集团应用商情通分析系统了解陕汽集团以及竞争对手参与的历史招投标项目、区域以及行业招标项目，提供全面定制化招投标信息，并进行预算金额、中标金额、招标数、中标数、资质等多方面的分析，广泛且精准的帮助陕汽集团获得想要的项目招投标信息，形成定制化商情报告，为陕汽集团节省大量的人力操作。",
                        "case_details_img": "./images/apiImg_new/case/shanqijituan_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/zhongguozhongtie_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/zhongguozhongtie_logo.png",
                        "time": "",
                        "desc":"中国中铁使用商情通分析系统，监测中国中铁相关的招投标信息以及竞争对手中标状况，并通过企业档案中的企业工商信息，监测其他铁路部门最新动态，从而第一时间快速掌握市场变化。",
                        "case_details_title": "中国中铁",
                        "case_details_des": "中国中铁使用商情通分析系统监测中国中铁相关的招投标信息以及竞争对手中标状况，并且通过企业档案中的企业工商信息，监测其它铁路部门最新动态，从而第一时间快速掌握市场变化。商情通分析系统实时为中国中铁呈现、跟踪、推送、开标截止时间预警，对中国中铁关注的信息，以及区域行业招投标信息形成全量多维度商情信息统计分析、资质分析以及商情报告，帮助中国中铁进行竞标决策。",
                        "case_details_img": "./images/apiImg_new/case/zhongguozhongtie_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/chengdutielu_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/chengdutielu_logo.jpg",
                        "time": "",
                        "desc":"成都铁路局使用商情分析设置侦探，发现商机项目；应用商情分析了解成都铁路局以及竞争对手参与的历史招投标项目、区域以及行业招标项目，并进行预算金额、中标金额、招标数、中标数、资质等多方面的分析，形成定制化商情报告。",
                        "case_details_title": "成都铁路局",
                        "case_details_des": "成都铁路局使用商情分析设置侦探，发现商机项目；应用商情分析了解成都铁路局以及竞争对手参与的历史招投标项目、区域以及行业招标项目，并进行预算金额、中标金额、招标数、中标数、资质等多方面的分析，形成定制化商情报告。成都铁路通过企业档案中的企业工商信息，监测成都各企业最新动态，从而第一时间快速掌握市场变化。",
                        "case_details_img": "./images/apiImg_new/case/chengdutielu_img.png"
                    }
                ]
            },
            {
                "sub_id": "7",
                "event_code":"API_dyssyq",
                "so_more_event_code":"API_moredetail_dyssyq",
                "online_event_code":"API_orderonline_dyssyq",
                "float_event_code":"Float_API_dyssyq",
                "event_code_new":"HOME_api_dsj_dyssyq",
                "sub_name": "大云搜索引擎",
                "close_a_deal": "",
                "description": "大云搜索引擎，简称BC-SE，是一项结构化数据的通用垂直搜索服务。它的出现实现了更快速提供搜索服务，有效降低了搜索服务的门槛。产品内自实现数据的采集和清洗、倒排索引建立、输入词预处理（中文分词和智能纠错）、关键词检索、以及搜索结果排序优化等功能，同时具备分布式索引以及索引实时更新的能力。",
                "ability_icon":"data/images/api/api10_yinqing.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "OA搜索",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/OAsousuo_banner.png",
                        "scene_description": "在信息化办公的大背景下、企业机关等组织内信息繁杂，站内搜索作为解决此类问题的主要方案具有高优先级。利用搜索引擎下的OA搜索功能，实现对企业机关等组织内部文件、公文、通讯录等材料的检索。即查即用，方便快捷。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "应用市场搜索",
                        "scene_icon": "images/apiImg_new/scene/shichangsousuo_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shichangsousuo_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yingyongshichang_banner.png",
                        "scene_description": "在垂直搜索领域，保证搜索结果的准（符合用户期望），搜索响应时间的快，搜索排序结果的科学。大云搜索引擎可以帮助应用程序市场等具体的垂直搜索场景，实现在应用程序市场内对某个、某类应用的搜索。同时可以根据用户搜索历史及用户画像分析，有针对的向用户推荐其潜在感兴趣的资源。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "音乐视频搜索",
                        "scene_icon": "images/apiImg_new/scene/shipin_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/shipin_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/yinyueshipin_banner.png",
                        "scene_description": "与应用市场搜索类似，垂直搜索的另外一项重要应用场景即为在音乐、视频等多媒体资源网站内的资源搜索。实现在音乐、视频网站上对多媒体资源的检索，同时可以根据用户搜索历史及用户画像分析，有针对的向用户推荐其潜在感兴趣的资源。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "响应时间短",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "在搜索逻辑复杂、业务量大的项目内，实现测试接口平均响应时间低于80ms。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "并发能力强",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "在搜索逻辑复杂、业务量大的项目内，支持每秒完成20000次搜索请求。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "搜索结果准确",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "检索词预处理、排序结果优化、关键词检索等手段让返回的搜索结果更贴近用户期望。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "关于大云搜索引擎",
                        "guideline_description": "欢迎您关注大云搜索引擎，查看了解更多。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "能力说明",
                        "guideline_description": "大云搜索引擎整合数据清洗、索引建立、请求预处理、关键词检索、结果排序优化等功能，足以应对任何挑战。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "使用场景",
                        "guideline_description": "站内搜索、垂直搜索、移动搜索等等，大云搜索引擎无所不能。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "客户案例",
                        "guideline_description": "大云搜索引擎正在服务包括咪咕、中国移动集团等多个客户，大云搜索引擎想您所想，我们期待为您服务。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "索引数据本地上传",
                        "sub_api_desc": "通过本地上传的方式，将应用需要的数据源文件上传到服务器上，保证每张表都必须有文件成功。",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "获取智能联想规则列表",
                        "sub_api_desc": "将用户配置的智能联想规则查询结果返回到前端展示。",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "获取屏蔽配置规则列表",
                        "sub_api_desc": "将用户配置的屏蔽配置规则查询结果返回到前端展示。",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "获取搜索推广规则列表",
                        "sub_api_desc": "将用户配置的搜索推广规则查询结果返回到前端展示。",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "分词体验接口",
                        "sub_api_desc": "根据用户选择分词字段将用户输入的内容进行分词",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "纠错接口",
                        "sub_api_desc": "将用户输入的内容根据已有词典进行纠错处理",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "获取同义词接口",
                        "sub_api_desc": "将用户配置的同义词返回到前端展示。",
                        "sub_api_type": ""
                    },
                    {
                        "sub_api_name": "获取扩展词接口",
                        "sub_api_desc": "将用户配置的扩展词返回到前端展示。",
                        "sub_api_type": ""
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "行业服务能力",
                "detail_url": "http://223.105.0.161:18080/bcse/#!/portal",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/miguyinyue_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/miguyinyue_logo.jpg",
                        "time": "",
                        "desc":"大云搜索引擎与咪咕音乐深度合作，为其提供多媒体搜索推荐服务。采用数据采集清洗、倒排索引建立、输入词预处理、关键词检索、搜索结果排序优化、分布式索引以及索引实时更新等算法方案，提升用户享受音乐时的用户体验。",
                        "case_details_title": "咪咕音乐",
                        "case_details_des": "大云搜索引擎与咪咕音乐深度合作，为其提供多媒体资源搜索以及推荐服务。采用数据采集清洗、倒排索引建立、输入词预处理（中文分词和智能纠错）、关键词检索、搜索结果排序优化、分布式索引以及索引实时更新等算法方案，提升用户享受音乐时的用户体验。",
                        "case_details_img": "./images/apiImg_new/case/miguyinyue_img.jpg"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/communicate_service_icon1.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jituansousuo_logo.jpg",
                        "time": "",
                        "desc":"大云搜索引擎支撑的集团搜索统一门户，提供智能提示、智能纠错、拼音、简拼搜索、模糊音搜索、签发人搜索、公文文号、合同编号搜索、通讯录搜索、搜索类型自动识别、相关性搜索等功能，满足办公检索需求。",
                        "case_details_title": "集团OA搜索",
                        "case_details_des": "大云搜索引擎支撑的集团搜索统一门户，提供智能提示、智能纠错、拼音、简拼搜索、模糊音搜索、签发人搜索、公文文号、合同编号搜索、通讯录搜索、搜索类型自动识别、相关性搜索等功能，满足办公检索需求。OA搜索在集团统一门户中的成功应用，吸引了其他客户的注意，OA搜索正在服务越来越多的客户。",
                        "case_details_img": "./images/apiImg_new/case/jituansousuo_img.jpg"
                    }
                ]
            },
            {
                "sub_id": "8",
                "event_code":"API_zyyq",
                "so_more_event_code":"API_moredetail_zzyq",
                "online_event_code":"API_orderonline_zzyq",
                "float_event_code":"Float_API_zyyq",
                "event_code_new":"HOME_api_dsj_zyyq",
                "sub_name": "中移舆情",
                "close_a_deal": "",
                "description": "基于大数据平台能力，实时采集互联网舆情信息，帮助各级政府及大型企业对网络舆情信息及时监控预警，了解行业动态、竞争对手信息等，实现对重要关心信息第一时间获知、第一时间上报、第一时间处理。",
                "ability_icon":"data/images/api/api10_yuqingu.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "企业口碑检测",
                        "scene_icon": "images/apiImg_new/scene/qiye_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/qiye_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/qiyekoubeijiance_banner.png",
                        "scene_description": "中移舆情以企业名称、领导人、业务产品名称等信息对与企业相关的信息进行采集，借助文本分析进行情感判断，根据企业需求，通过邮件、短信、APP、微信等方式第一时间上报企业对敏感信息进行处理。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "竞品分析",
                        "scene_icon": "images/apiImg_new/scene/hulianwang_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/hulianwang_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jingpinfenxi_banner.png",
                        "scene_description": "利用中移舆情系统实时采集监控竞争对手或企业所在行业有代表性的网站， 通过添加企业的关键字，在第一时间采集到最新的竞品信息。利用技术手段，对竞品的非结构化信息进行整理、分类、加工与分析。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "政府舆论应对",
                        "scene_icon": "images/apiImg_new/scene/zhengfu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/zhengfu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhengfuyulun_banner.png",
                        "scene_description": "中移舆情以政府关注的社会民生、网络舆论等话题作为重点监测对象，重点发现、追踪、处理、引导负面或敏感信息，实时监测并追踪热点敏感话题，灵通的预警机制。让政府能第一时间掌握网民关注的重大敏感热点话题。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "智能爬虫技术",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "大数据级别的爬虫服务器部署架构，Html网页内容萃取技术：自动提取网站规则。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "实时监控",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "7*24小时全面实施监控互联网信息。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "分析技术",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "舆情情感判断，舆情信息溯源，热点事件分析，文本精确分类，垃圾信息标识过滤。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "检测源全面",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon4.png",
                        "advantage_description": "信源来自门户网站、论坛、贴吧、APP、微博、微信公众号、视频、报纸、境外等，每日处理500万+数据。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "试用申请",
                        "guideline_description": "欢迎您加入中移舆情，如需申请试用，请填写相关信息。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "注册登录",
                        "guideline_description": "申请使用资料填写完毕即可登录使用。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "订购预约",
                        "guideline_description": "试用期结束，如需继续使用，可在线联系我们预约服务。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "联系我们",
                        "guideline_description": "如有任何需要了解的问题，可随时通过电话、微信、QQ联系我们。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "舆情监测",
                        "sub_api_desc": "通过设置关注舆情关键词，实时监测互联网上匹配的新闻舆情。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "舆情分析",
                        "sub_api_desc": "对监测舆情进行统计分析，包括情感分布、类型分布、网站来源、行业属性、发展趋势、地域分布、热词分析等。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "舆情预警",
                        "sub_api_desc": "通过设置预警规则，对重大舆情事件通过邮件、短信、微信等多种方式预警，达到即时发现舆情的目的。",
                        "sub_api_type": "产品类"
                    },
                    {
                        "sub_api_name": "舆情报告",
                        "sub_api_desc": "舆情事件日报、周报、月报自动生成并推送。",
                        "sub_api_type": "产品类"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",    
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                    
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",     
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",                   
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中移情报分析系统",
                "detail_url": "https://yuqing.bigcloudsys.cn",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/anquanjianduju_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/anquanjianduju_logo.png",
                        "time": "",
                        "desc":"国家安全生产监督管理局·国家煤矿安全监督局出于工作职责需要，实时监控针对安全生产和煤矿安全的信息，分析具体舆情信息的热度及实时热点动态。准确分析用户重点关注什么内容，及时采取一些措施。",
                        "case_details_title": "国家安全生产监督管理局·国家煤矿安全监督局",
                        "case_details_des": "国家安全生产监督管理局·国家煤矿安全监督局出于工作职责需要，利用舆情通系统实时监控针对安全生产和煤矿安全的信息，分析具体安全生产和煤矿安全舆情信息的热度及实时热点动态。舆情通系统通过邮件、短信、APP、微信等方式第一时间上报国家安全生产监督管理局·国家煤矿安全监督局对紧急敏感信息进行及时处理。",
                        "case_details_img": "./images/apiImg_new/case/anquanjianduju_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/jiansheyinhang_icon.png",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/jiansheyinhang_logo.png",
                        "time": "",
                        "desc":"中国建设银行通过舆情通系统迅速了解到涉及到自身关于金融信誉，风险投资影响及民众负面传言等方面的舆情，及时发现传播源头，追踪传播内容，监控传播主体，第一时间采取措施，控制舆论导向。",
                        "case_details_title": "中国建设银行",
                        "case_details_des": "中国建设银行通过舆情通系统迅速了解到涉及到自身关于金融信誉，风险投资影响及民众负面传言等方面的舆情。舆情通系统帮助中国建设银行及时发现舆情信息的传播源头，追踪发现舆情信息传播内容，监控舆情信息传播的主体，第一时间采取措施，帮助控制舆论导向。<br/><br/>热搜词判断",
                        "case_details_img": "./images/apiImg_new/case/jiansheyinhang_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/wuxigaj_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/wuxigaj_logo.jpg",
                        "time": "",
                        "desc":"无锡市公安局出于工作职责需要，实时监控针对滨湖区所有安全事件涉稳信息，同时结合无锡信令数据，分析具体舆情信息的热度及年龄分布、性别分布、实时热点动态。准确分析该地区用户重点关注什么内容，及时采取一些措施。",
                        "case_details_title": "无锡市公安局",
                        "case_details_des": "无锡市公安局出于工作职责需要，实时监控针对滨湖区所有安全事件涉稳信息，同时结合无锡信令数据，分析具体舆情信息的热度及年龄分布、性别分布、实时热点动态。准确分析该地区用户重点关注什么内容，及时采取一些措施。无锡滨湖公安借助这个定制化中移舆情系统，成功地监测该地区的舆情。",
                        "case_details_img": "./images/apiImg_new/case/wuxigaj_img.png"
                    }
                ]
            },
            {
                "sub_id": "9",
                "event_code":"API_znwd",
                "so_more_event_code":"API_moredetail_znwdzl",
                "online_event_code":"API_orderonline_znwdzl",
                "float_event_code":"Float_API_znwd",
                "event_code_new":"HOME_api_dsj_znwd",
                "sub_name": "智能问答（知了）",
                "close_a_deal": "",
                "description": "智能问答（知了）是基于先进的自然语言分析技术、智能交互技术、深度聊天引擎系统及自主学习知识库等技术，打造的智能问答系统。主要为客户提供问答知识管理平台，通过API接口的方式提供智能问答能力，方便web客户端、安卓客户端、微信公众号等多种渠道接入。",
                "ability_icon":"data/images/api/api10_wenda.png",
                "guideline_img": "",
                "scene": [
                    {
                        "scene_id": "1",
                        "scene_name": "客服管理",
                        "scene_icon": "images/apiImg_new/scene/guanli_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/guanli_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/kefuguanli_banner.png",
                        "scene_description": "为互联网产品、门户网站提供人工客服管理、智能客服管理、会话等功能，满足企业对智能客服的需求。"
                    },
                    {
                        "scene_id": "2",
                        "scene_name": "企业服务部门知识管理",
                        "scene_icon": "images/apiImg_new/scene/xuexi_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/xuexi_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/zhishiguanli_banner.png",
                        "scene_description": "企业业内部信息服务咨询，方便企业沉淀知识，便于内部员工获取相关企业咨询，减少沟通成本。"
                    },
                    {
                        "scene_id": "3",
                        "scene_name": "服务机器人",
                        "scene_icon": "images/apiImg_new/scene/fuwu_icon.png",
                        "scene_shade_icon": "images/apiImg_new/scene/fuwu_shade_icon.png",
                        "scene_banner": "images/apiImg_new/scene/jiqiren_banner.png",
                        "scene_description": "可对接微信、app客户端、实体机器人，形成微信服务机器人、APP服务机器人、实体服务机器人等，用于实现基于智能问答的自动化服务。"
                    }
                ],
                "advantage": [
                    {
                        "advantage_id": "1",
                        "advantage_name": "多领域知识库支撑",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon5.png",
                        "advantage_description": "百度百科知识库、聊天库、企业知识库、产品知识库、日志知识库。"
                    },
                    {
                        "advantage_id": "2",
                        "advantage_name": "多行业面向",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon0.png",
                        "advantage_description": "基础性应用产品，可面向多行业提供智能问答产品。"
                    },
                    {
                        "advantage_id": "3",
                        "advantage_name": "多渠道对接",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon1.png",
                        "advantage_description": "支持网页端、手机网页、微信端、APP端、第三方集成和对接。"
                    },
                    {
                        "advantage_id": "4",
                        "advantage_name": "多元信息接收输出",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon6.png",
                        "advantage_description": "持文字、语音、图片输入和输出，智能分析和回答。"
                    },
                    {
                        "advantage_id": "5",
                        "advantage_name": "专业知识运营团队",
                        "advantage_icon": "./images/apiImg_new/advantage/adv_icon3.png",
                        "advantage_description": "支持知识的前期导入梳理和长期运营，以维持知识的精准化。"
                    }
                ],
                "guideline": [
                    {
                        "guideline_id": "1",
                        "guideline_name": "试用申请",
                        "guideline_description": "欢迎您加入智能问答-知了，如需申请试用，请填写相关信息。"
                    },
                    {
                        "guideline_id": "2",
                        "guideline_name": "注册登录",
                        "guideline_description": "申请使用资料填写完毕，审核通过后，可登陆使用。"
                    },
                    {
                        "guideline_id": "3",
                        "guideline_name": "订购预约",
                        "guideline_description": "试用期结束，如需继续使用，可在线联系我们预约服务。"
                    },
                    {
                        "guideline_id": "4",
                        "guideline_name": "联系我们",
                        "guideline_description": "如有任何需要了解的问题，可随时通过电话、微信、QQ联系我们。"
                    }
                ],
                "api_list": [
                    {
                        "sub_api_name": "智能问答接口",
                        "sub_api_desc": "根据请求的问题，进行自动意图理解，返回问答结果。",
                        "sub_api_type": "行业服务能力"
                    },
                    {
                        "sub_api_name": "满意度反馈接口",
                        "sub_api_desc": "提供对智能问答满意度的反馈功能。",
                        "sub_api_type": "行业服务能力"
                    }
                ],
                "ability_recommen": [
                    {
                        "recommen_id": "1",
                        "api_id": "1",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "物联网能力",
                        "recommen_description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力。"
                    },
                    {
                        "recommen_id": "2",
                        "api_id": "3",
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",
                        "recommen_name": "数字家庭能力",
                        "recommen_description": "包括基于家庭网关的And-Link智能设备快速连接、管理等能力。"
                    },
                    {
                        "recommen_id": "3",
                        "api_id": "0",                
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",        
                        "recommen_name": "数字内容能力",
                        "recommen_description": "包括视频点播、广告发布等能力。"
                    },
                    {
                        "recommen_id": "4",
                        "api_id": "12",            
                        "recommen_icon": "./images/apiImg_new/recommen_icon.png",            
                        "recommen_name": "云服务能力",
                        "recommen_description": "包括云主机、云存储、语音识别处理等能力。"
                    }
                ],
                "sub_api_owner": "中移（苏州）软件技术有限公司",
                "detail_url": "http://mgr.cicada.bigcloudsys.cn:8081/bc_zhiliao_mgr/#",
                "cases":[
                    {
                        "image_url" :"./images/apiImg_new/case/yidongtongxin_icon.jpeg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/yidongtongxin_logo.png",
                        "time": "",
                        "desc":"中国移动通信集团上海分公司智慧营业厅试点，智能问答-知了产品基于上海公司提供的营业厅业务知识，形成了专业的营业厅知识库，结合丰富的交互功能及智能问答能力，通过微信公众号、APP为客户提供便捷的业务咨询服务。",
                        "case_details_title": "中国移动通信集团上海分公司",
                        "case_details_des": "中国移动通信集团上海分公司智慧营业厅试点，智能问答-知了产品基于上海公司提供的营业厅业务知识，形成了专业的营业厅知识库，结合丰富的交互功能及智能问答能力，通过微信公众号、APP为客户提供便捷的业务咨询服务。",
                        "case_details_img": "./images/apiImg_new/case/yidongtongxin_img.png"
                    },
                    {
                        "image_url" :"./images/apiImg_new/case/fuwuzhushou_icon.jpg",
                        "video_url": "",
                        "cases_icon": "./images/apiImg_new/case/fuwuzhushou_logo.png",
                        "time": "",
                        "desc":"智能问答系统接入“中移知了”公众号为苏研员工提供咨询服务，将相关职能部门从重复的咨询工作中解放出来，利于企业知识沉淀，方便员工知识共享，提高企业创造力。",
                        "case_details_title": "苏研企业服务助手",
                        "case_details_des": "智能问答系统接入“中移知了”公众号为苏研员工提供咨询服务，将相关职能部门从重复的咨询工作中解放出来，利于企业知识沉淀，方便员工知识共享，提高企业创造力。",
                        "case_details_img": "./images/apiImg_new/case/fuwuzhushou_img.png"
                    }
                ]
            }
        ]
    }
]
}
