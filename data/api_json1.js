var api_json={
    "ability": [
        {
            "id": "1",
            "name": "通信服务能力",
            "imgUrl": "images/apiImg/tongxin.png",
            "description": "包括音视频、消息等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "模板短信",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "通过API的方式，提供发送模板短信的能力，客户在发送前先提交模板供移动公司进行审核，审核通过后，客户可通过系统接口下发符合模板内容的短信。",
                    "ability_icon":"data/images/api/api1-1.png",

                    "scene": "物流通知：支持当物流状态发生变化时，系统自动下发发货通知、收货提醒等。<br/>验证码发送：支持客户提交验证码模板，审核通过后直接调用模板短信接口触发验证码发送。",
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
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "detail_url": "http://112.35.23.8:1080/open_devportal/productIntroductionAction.action?eaId=1",
                   "cases":[
                         {
                            "image_url" :"data/images/api/35LOGO.png",
                            "desc":""

                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "来/去电身份提示",
                    "close_a_deal": "http://112.13.167.90/portal_test/userLogin.action",
                    "description": "拨打企业电话时，自动展示企业预先设定的名片内容，以达到企业宣传、商情传递等目的，同时提升电话接通率。",
                    "ability_icon":"data/images/api/api1-2.png",

                    "scene": "企业宣传：支持用户可以将来/去电身份提示设置为企业信息，每次通话时，对呼叫方进行一次点对点的企业宣传。<br/>身份告知：支持用户将来/去电身份提示设置为企业信息或个人信息，每次通话时，将身份告知呼叫方，提升电话接通率。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal_test/productIntroductionAction.action?eaId=23",
                 "cases":[
                         {
                         "image_url" :"data/images/api/",
                         "desc":""

                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "视频短信",
                    "close_a_deal": "http://112.13.167.90/portal_test/userLogin.action",
                    "description": "通过短信同时传送视频、文字、图像、声音，适用于信息发布、企业宣传等场景，内容更丰富 ，展现更直观 。 ",
                    "ability_icon":"data/images/api/api1-3.png",

                    "scene": "政府公益宣传：支持政府、公安等对管辖范围内民众发送公益宣传类视频短信，如“512防灾减灾日”下发防灾减灾宣传片。<br/>企业内部宣传：支持企业宣传片、一分钟党课、工作技能指导等内容，通过视频短信下发给企业员工，进行企业学习宣传。",
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
                            "sub_api_desc": "南向视频短信能力网元通过该接口向浙江移动能力开放平台通知模板同步结果。",
                            "sub_api_type": "消息类"
                        },
                        {
                            "sub_api_name": "查询视频短信模板状态",
                            "sub_api_desc": "开发者通过该接口向通信开放平台查询视频短信模板状态。",
                            "sub_api_type": "消息类"
                        },
                        {
                            "sub_api_name": "发送视频短信接口",
                            "sub_api_desc": "开发者通过该接口向浙江移动能力开放平台请求发送视频短信。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=24",
                     "cases":[
                         {
                             "image_url" :"data/images/api/Migushipin.png",
                             "desc":""

                        }
                     ]
                },
                {
                    "sub_id": "4",
                    "sub_name": "语音通知/验证码",
                    "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                    "description": "将文字信息通过语音播报的形式传达给用户，适用于会议通知、用户注册、异地登录、身份验证等场景，通知方式及时有效。",
                    "ability_icon":"data/images/api/api1-4.png",

                    "scene": "会议通知：支持将文字以语音播报的形式传达给用户，通知方式及时有效等。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=4",
                    "cases":[
                         {
                            "image_url" :"data/images/api/",
                             "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "5",
                    "sub_name": "点击拨号",
                    "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                    "description": "通过平台呼叫通话双方，实现企业统一付费，通话双方号码隐藏。支持大容量、高并发，稳定可靠。",
                    "ability_icon":"data/images/api/api1-5.png",

                    "scene": "隐私通话：支持通话双方通过平台免费建立连接，号码隐藏，保护用户的隐私。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=5",
                 "cases":[
                         {
                              "image_url" :"data/images/api/",
                              "desc":""

                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "6",
                    "sub_name": "中间号",
                    "close_a_deal": "",
                    "description": "此方案依托全网移动号码资源，面向商户和用户双方提供中间安全号码，充分发挥虚拟副号灵活绑定的优势，实现临时号码跟随订单状态的捆绑使用功能，从而实现在交易双方之间建立安全屏障。",
                    "ability_icon":"data/images/api/api1-6.png",
                    "scene": "1、网约车场景：乘客下单成功，平台为司机和乘客分配一个共用的中间号；订单完成，回收号码，双方再拨打提示无法接通；<br/>2、招聘场景：求职者在网站投放简历，平台为求职者和招聘企业捆绑同一个中间号，在一定期限内可互相联系；期满解绑，再拨打提示无法接通。",
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
                    "sub_api_owner": "中国移动互联网能力平台",
                    "detail_url": "",
                  "cases":[
                         {
                          "image_url" :"data/images/api/",
                          "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "7",
                    "sub_name": "语音会议",
                    "close_a_deal": "http://112.13.167.90/portal/userLogin.action",
                    "description": "支持多方高清语音会议，具备强大的会场控制功能，完美支撑远程高效沟通，提升在线办公体验和效率。",
                    "ability_icon":"data/images/api/api1-7.png",
                    "scene": "电话会议：支持多方语音会议，同时具备强大的会场控制功能，与办公软件无缝对接。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=6",
                 "cases":[
                         {
                            "image_url" :"data/images/api/",
                            "desc":""

                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "8",
                    "sub_name": "视频会议",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "通过API/SDK开放点对点视频、视频会议能力，供用户封装调用，满足用户对实时高清、全方位功能覆盖的需求。支持高效并发，提供多种解决方案。",
                    "ability_icon":"data/images/api/api1-8.png",

                    "scene": "一对一教学场景：支持网络教学，尤其是一对一教学模式老师和学生沟通。<br/>视频直播：支持随时随地满足视频直播需求，保证视频清晰不卡顿。",
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
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=47",
                   "cases":[
                         {
                              "image_url" :"data/images/api/suiyue.png",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "9",
                    "sub_name": "QoS加速",
                    "close_a_deal": "",
                    "description": "对指定终端用户访问特定IP时进行保障加速，提升用户游戏、观看直播等在线活动的体验。（目前仅在浙江开放）",
                    "ability_icon":"data/images/api/api1-9.png",
                    "scene": "游戏加速：支持开发者替游戏服务器IP申请带宽提速，降低游戏时延、丢包率，极大提升了玩家游戏体验。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=15",
                    "cases":[
                         {
                              "image_url" :"data/images/api/",
                              "desc":""

                        }
                     ]
                }
            ]
        },
        {
            "id": "2",
            "name": "账号认证能力",
            "imgUrl": "images/apiImg/zhanghao.png",
            "description": "包括认证登录、号码校验等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "统一认证",
                    "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=",
                    "description": "是中国移动面向移动互联网应用提供的登录及认证服务。基于运营商独有的数据网络认证能力+数据能力，为企业提供全面的用户账号使用和数据管理一站式解决方案，将手机号码从单一的通信行业账号打造成为服务于“通信、互联网、物联网、银行”等多行业的账号体系。",
                    "ability_icon":"data/images/api/api2-1.png",
                    "scene": "一键登录：APP注册登录时，提供本机号码一键登录服务，免密、免注册。非数据网络环境用短验补充，实现100%认证成功率。",
                    "api_list": [
                        {
                            "sub_api_name": "手机号码一键登录",
                            "sub_api_desc": "开放网关号码认证能力，提供本机号码免密一键注册+登录服务。",
                            "sub_api_type": "统一认证能力"
                        },
                        {
                            "sub_api_name": "本机号码校验",
                            "sub_api_desc": "利用应用层无法截取的网络层号码认证能力验证号码的真实性，是对短验的优化",
                            "sub_api_type": "统一认证能力"
                        },
                        {
                            "sub_api_name": "二次号",
                            "sub_api_desc": "通过认证提供的手机号码状态等数据，帮助合作伙伴确认存量账号情况，避免因持卡人身份变更而导致的账号资产问题。",
                            "sub_api_type": "统一认证能力"
                        },
                        {
                            "sub_api_name": "防刷单",
                            "sub_api_desc": "统一认证提供数据服务能力，基于手机号码关联大网数据，通过比对在网时间、通话时长、月消费arpu值等数据进行比对，判断用户是否有刷单行为。从而阻止用户和卡商恶意注册刷单行为。",
                            "sub_api_type": "统一认证能力"
                        }
                    ],
                    "sub_api_owner": "中国移动互联网能力平台",
                    "detail_url": "http://dev.10086.cn/cmpassport/",
                    "cases":[
                         {
                           "image_url" :"data/images/api/pinganyoulian.png",
                           "desc":""

                        },
                        {
                            "image_url": "data/images/api/mijia.png",
                            "desc": ""
                        }  ,
                        {
                            "image_url": "data/images/api/jiazhimao.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/WiFiyaoshi.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "拨打验证",
                    "close_a_deal": "",
                    "description": "新型手机号验证方式，用户拨打平台分配号码，即可完成验证，验证安全级别更高，更难窃取，有效防止刷单、信息泄露，提升验证便利性。",
                    "ability_icon":"data/images/api/api2-2.png",
                    "scene": "注册认证：支持用户通过手机号码进行账户注册时，使用自己手机号码拨打平台分配号码，即可完成注册流程。<br/>支付验证：支持用户在支付时，拨打验证身份真实性，确保资金安全。",
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
                    "sub_api_owner": "中国移动通信开放平台",
                    "detail_url": "http://112.13.167.90/portal/productIntroductionAction.action?eaId=22",
                    "cases":[
                         {
                            "image_url" :"data/images/api/",
                            "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                }
            ]
        },
        {
            "id": "3",
            "name": "物联网能力",
            "imgUrl": "images/apiImg/internet.png",
            "description": "包括基于OneNET平台的物联网应用开发、物联卡管理等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "物联卡管理",
                    "close_a_deal": "http://183.230.101.201:8199/app/pages/apiApplication/apiApplication.html",
                    "description": "查询用户号码信息、状态信息、多APN信息、用户的余额信息、用户当月的GPRS用量、用户的套餐资费、集团信息、短信用量、流量池使用情况、避免业务中断。同时支持客户能够发送上行短信、下行短信、终端通信等。",
                    "ability_icon":"data/images/api/api3-5.png",
                    "scene": "通信数据管理：支持获取客户通信数据，便于分析客户使用行为，同时具备故障预警、故障定位等功能。<br/>物联卡管理：支持获取物联卡状态各类信息，便于改善客户运营流程，降低运营成本。",
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
                    "sub_api_owner": "中国移动物联卡能力开放平台",
                    "detail_url": "http://183.230.101.201:8199/app/pages/productIntro/productIntro.html",
                   "cases":[
                         {
                          "image_url" :"data/images/api/mobike.png",
                          "desc":""

                        },
                        {
                            "image_url": "data/images/api/qimingxinxi.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/BYD.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/sanchuangufen.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/guojiadianwang.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/sannuo.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "物联网应用开发",
                    "close_a_deal": "",
                    "description": "OneNET提供近300种API包括：设备管理、数据管理、规则引擎、消息命令下发等，帮助开发者轻松实现设备接入与设备连接，快速完成产品开发部署；应用孵化器帮助开发者十分钟完成轻应用开发。",
                    "ability_icon":"data/images/api/api3-6.png",
                    "scene": "广泛适用于工业、交通、能源等各种物联网应用场景，OneNET帮助应用开发者快速实现终端设备连接云平台，多API支持应用开发。",
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
                    "sub_api_owner": "中国移动OneNET平台",
                    "detail_url": "https://open.iot.10086.cn/login?redirect_uri=%2F",
                    "cases":[
                         {
                            "image_url" :"data/images/api/neusoft.png",
                            "desc":""
                        },
                        {
                            "image_url": "data/images/api/qinlvzhiqian.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/grandtech.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/xingyuanyibiao.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "NB-IoT接入能力",
                    "close_a_deal": "",
                    "description": "实现了对NB-IOT设备信息概要展示、设备管理、资源列表的自动订阅、展示，以及对具体设备单个属性值的读取、写入以及执行操作；并可以实现通过曲线图的形式展示属性值的变化曲线。",
                    "ability_icon":"data/images/api/api3-7.png",
                    "scene": "主要适用于网络广覆盖、支撑海量连接、对设备成本敏感以及功耗要求低的NB-IoT应用场景。可以广泛应用于智能停车、智能抄表、智能井盖、智能路灯等。",
                    "api_list": [
                        {
                            "sub_api_name": "创建设备",
                            "sub_api_desc": "通过POST方法，生成新设备及key或获取原有设备及key。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "批量创建NB协议设备",
                            "sub_api_desc": "通过POST方法在OneNET平台批量创建基于LWM2M协议的设备。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "读设备资源",
                            "sub_api_desc": "通过GET方法读取设备资源。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "写设备资源",
                            "sub_api_desc": "通过POST方法写入设备资源。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "下发命令",
                            "sub_api_desc": "通过POST方法，发送命令。命令是指应用发送命令数据给OneNET设备云、再由OneNET设备云转发给终端设备、终端设备收到命令后可以向设备云反馈响应的一种工作机制。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "获取资源列表",
                            "sub_api_desc": "通通过GET方法获取设备资源列表。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "订阅查看某个设备",
                            "sub_api_desc": "通过POST方法订阅查看某个设备信息。",
                            "sub_api_type": "物联网"
                        },
                        {
                            "sub_api_name": "查看数据点",
                            "sub_api_desc": "通过GET方法，可查询多个数据流某一段时间内的的多个数据点的数据。",
                            "sub_api_type": "物联网"
                        }
                    ],
                    "sub_api_owner": "中国移动OneNET平台",
                    "sub_api_type": "物联网",
                    "detail_url": "https://open.iot.10086.cn/doc/art246.html#68",
                    "cases":[
                         {
                              "image_url" :"data/images/api/mobike.png",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                }
            ]
        },
        {
            "id": "4",
            "name": "数字家庭能力",
            "imgUrl": "images/apiImg/shuzi.png",
            "description": "包括基于家庭网关的And-Link智能设备快速链接、管理等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "AndLink",
                    "close_a_deal": "http://open.home.komect.com/dev/userLogin.action",
                    "description": "基于中国移动智能网关的And-link快连方案免除了常用的智能设备连接wifi过程中的ssid、密码输入及切换网络等操作过程，只需一键触发即可实现智能设备快速、安全地接入家 庭WiFi网络。",
                    "ability_icon":"data/images/api/api4-1.png",
                    "scene": "一键上网：一键连接家庭或公共网络，无需其它操作，简单快捷。<br/>设备接入：将智能设备接入家庭控制网关，打造智慧家居。",
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
                    "sub_api_owner": "中国移动Andlink开放平台",
                    "detail_url": "http://open.home.komect.com/dev/productIntroductionAction.action?eaId=13 ",
                   "cases":[
                         {
                              "image_url" :"data/images/api/",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api/ZTE.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                    ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "终端管理",
                    "close_a_deal": "http://open.home.komect.com/dev/userLogin.action",
                    "description": "为传统水净空净等行业客户提供一套完整的垂直领域解决方案，包括客户端APP、管理平台、云平台数据服务等，帮助传统厂商快速转型智能化。",
                    "ability_icon":"data/images/api/api4-2.png",
                    "scene": "智能设备控制：使用手机APP或微信H5页面控制家中的智能设备。<br/>固件升级：通过绑定智能家居的用户APP完成对该设备的行固件升级。<br/>定位监视：儿童/老人定位器接入云平台后，家人可使用客户端查看位置信息。<br/>故障告警：为指定设备故障或状态设置告警通知，系统自动下发告警提示信息。",
                    "api_list": [
                        {
                            "sub_api_name": "获取AccessToken",
                            "sub_api_desc": "根据开发者Key (devKey)或者设备组Key (groupKey)获取AccessToken，AccessToken将作为调用其它接口的必要依据",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取产品列表",
                            "sub_api_desc": "根据产品ID获取产品信息。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "添加设备",
                            "sub_api_desc": "该接口提供了第三方业务平台向开发者平台添加设备的能力。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取产品数据点定义",
                            "sub_api_desc": "根据产品ID获取产品包含所有数据点定义信息，包含数据点名称、数据点ID 、数据点CODE、数据点类型等。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备数据",
                            "sub_api_desc": "根据设备ID获取设备产生的数据点数据信息。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备在线状态",
                            "sub_api_desc": "根据设备ID、产品ID等获取设备在线状态信息。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "控制命令下发",
                            "sub_api_desc": "往指定设备下发控制命令。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "订阅数据点推送",
                            "sub_api_desc": "根据厂商/产品/设备/数据点，往指定的订阅URL推送数据点信息。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备列表",
                            "sub_api_desc": "根据产品ID获取设备列表。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备统计信息",
                            "sub_api_desc": "根据产品id获取产品下设备的统计信息，包括设备总数、当前在线设备数、本月新增设备数、本月激活数、激活总数以及设备累计上线次数。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "告警规则推送",
                            "sub_api_desc": "往指定设备推送告警规则。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备指定数据点最新值",
                            "sub_api_desc": "根据设备ID获取设备数据点最新值。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取产品控制动作点定义",
                            "sub_api_desc": "根据产品ID获取产品包含所有控制动作点定义信息，包含动作点名称、动作点ID、动作点CODE、动作点类型等。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "根据查询条件获取设备信息",
                            "sub_api_desc": "根据查询条件获取设备信息。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取设备分组最后有设备添加的时间",
                            "sub_api_desc": "获取设备分组最后有设备添加的时间。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "控制命令撤销",
                            "sub_api_desc": "撤销设备下发指令。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取指令消息列表",
                            "sub_api_desc": "获取指定设备离线消息列表。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "获取指令消息历史状态集",
                            "sub_api_desc": "获取指定设备离线消息最新状态列表。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "新增设备上下线和激活通知订阅地址",
                            "sub_api_desc": "新增设备上下线、激活通知订阅地址。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "更新设备上下线和激活通知订阅地址",
                            "sub_api_desc": "更新设备上下线、激活通知订阅地址。",
                            "sub_api_type": "家庭连接"
                        },
                        {
                            "sub_api_name": "删除设备上下线和激活通知订阅地址",
                            "sub_api_desc": "删除设备上下线、激活通知地址订阅。",
                            "sub_api_type": "家庭连接"
                        }
                    ],
                    "sub_api_owner": "中国移动Andlink开放平台",
                    "detail_url": "http://open.home.komect.com/dev/productIntroductionAction.action?eaId=17",
                 "cases":[
                         {
                           "image_url" :"data/images/api/",
                           "desc":""

                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                }
            ]
        },
        {
            "id": "5",
            "name": "支付能力",
            "imgUrl": "images/apiImg/pay.png",
            "description": "包括和包支付、资金归集等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "和包贷",
                    "close_a_deal": "",
                    "description": "提供订单申请、页面通知、后台通知、查询、退款通知等服务，具有通知方式及时有效等特点；提供对用户进行信用评级的服务；提供款资质审核通知、业务受理／撤销通知、主动扣款、主动扣款结果查询、确认文件、分期扣款结果文件等服务。",
                    "ability_icon":"data/images/api/api5-1.png",
                    "scene": "信用评级：适用于各省移动线上和线下各类通信业务消费场景，如4G终端的贷款分期销售、各省合作商户的信用分期消费等。",
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
                    "sub_api_owner": "中国移动和包支付",
                    "detail_url": "",
                 "cases":[
                         {
                          "image_url" :"data/images/api/",
                          "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "和包支付能力",
                    "close_a_deal": "",
                    "description": "支持商户通过在移动端应用APP中集成和包支付能力开放SDK调起和包支付模块来实现支付功能。和包支付提供安全、快捷、易用的支付服务，为有支付需求的用户解决资金收付、清结算及安全风控等问题。",
                    "ability_icon":"data/images/api/api5-2.png",
                    "scene": "线上支付：和包支付支持线上支付功能。和包支付支持使用移动公司各类营销资源，解决用户引流及营销痛点问题。<br/>线下支付：和包支付支持线下支付功能。和包支付支持使用移动公司各类营销资源，解决用户引流及营销痛点问题。",
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
                    "sub_api_owner": "中国移动和包支付",
                    "detail_url": "",
                   "cases":[
                         {
                              "image_url" :"data/images/api/jiexin.png",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/zhongruan.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "资金归集",
                    "close_a_deal": "https://www.cmpay.com/user/login.xhtml",
                    "description": "和包资金归集是中国移动电子商务基地运营的一项移动支付应用。是指通过和包平台完成代理商手机号与代理商银行卡账户绑定，代理商通过手机操作向指定账户缴款的一项应用。",
                    "ability_icon":"data/images/api/api5-3.png",
                    "scene": "代理商的手机号与银行卡绑定：商户采集代理商银行卡信息后，发起代扣签约申请。代理商缴款：代理商通过实时扣款接口发起扣款的结果，批量扣款成功后，系统将返回扣款结果文件。",
                    "api_list": [
                        {
                            "sub_api_name": "代理商信息签约与维护",
                            "sub_api_desc": "代理商信息新增、修改和银行卡签约功能。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "代理商信息解约",
                            "sub_api_desc": "代理商银行卡解约功能。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集实时扣款接口",
                            "sub_api_desc": "资金归集实时扣款接口。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集扣款结果查询",
                            "sub_api_desc": "资金归集扣款结果查询。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集批量扣款",
                            "sub_api_desc": "文件形式批量扣款功能。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集批扣回盘文件",
                            "sub_api_desc": "批量扣款结果返回。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集对账文件",
                            "sub_api_desc": "资金归集订单交易对账文件。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "资金归集付款结果文件",
                            "sub_api_desc": "资金归集订单结算结果返回。",
                            "sub_api_type": "支付类"
                        }
                    ],
                    "sub_api_owner": "中国移动和包支付",
                    "sub_api_type": "支付类",
                    "detail_url": "https://www.cmpay.com/",
                    "cases":[
                         {
                             "image_url" :"data/images/api/",
                             "desc":""
                        }
                     ]
                }
            ]
        },
        {
            "id": "6",
            "name": "数字内容能力",
            "imgUrl": "images/apiImg/shuzi2.png",
            "description": "包括视频点播、广告发布等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "视频云点播/直播",
                    "close_a_deal": "http://www.migucloud.com/sign/in",
                    "description": "视频点播：提供视频上传、转码、存储、管理、分发、播放的端到端一站式视频点播服务。视频直播：提供视频直播内容的在线注入、实时转码、多屏分发等视频直播能力。",
                    "ability_icon":"data/images/api/api6-3.png",
                    "scene": "点播：资讯网站、游戏平台、音乐社区、UGC 视频网站、视频门户、媒体门户、橱窗展示、产品详情、视频晒单评论、教育培训、企业培训、校园培训等视频点播需求。<br/>直播：在线直播、VR直播。",
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
                    "sub_api_owner": "中国移动咪咕视频云平台",
                    "detail_url": "http://www.migucloud.com/home/document.html",
                    "cases":[
                         {
                          "image_url" :"data/images/api/CNLive.png",
                           "desc":""
                        },
                        {
                          "image_url" :"data/images/api/ncet.png",
                           "desc":""

                        },
                        {
                          "image_url" :"data/images/api/lizhiTV.png",
                           "desc":"咪咕-视频直播-荔枝TV_"

                        },
                        {
                          "image_url" :"data/images/api/taizhouyinhang.png",
                           "desc":""

                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "互联网广告平台",
                    "close_a_deal": "http://dev.10086.cn/iap_client",
                    "description": "为媒介渠道提供统一的接入服务，包括SSP平台和DSP平台，支持广告请求展示、数据上报、广告主信息同步、订单同步、审核确认等服务。",
                    "ability_icon":"data/images/api/api6-4.png",
                    "scene": "SSP平台的统一接入：广告请求展示、数据上报等服务。<br/>DSP平台的统一接入：包括广告主信息同步、订单同步、审核确认等服务",
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
                    "sub_api_owner": "中国移动互联网能力平台",
                    "detail_url": "http://dev.10086.cn/iap_client",
                 "cases":[
                         {
                             "image_url" :"data/images/api/",
                             "desc":""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "互联网消息推送",
                    "close_a_deal": "http://dev.10086.cn/aoi/",
                    "description": "通过在云端与客户端之间建立一条稳定可靠的长连接，为开发者提供向客户端应用实时推送消息的服务。",
                    "ability_icon":"data/images/api/api6-5.png",
                    "scene": "新闻消息推送：新闻类应用在重大新闻事件发生时，可使用有推推送将最新新闻及时推送给用户。<br/>APP消息推送：app有版本更新、营销优惠活动时，可使用有推推送及时推送给用户。",
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
                    "sub_api_owner": "中国移动互联网能力平台",
                    "detail_url": "http://dev.10086.cn/aoi",
                    "cases":[
                         {
                             "image_url" :"",
                              "desc":""
                        }
                     ]
                }
            ]
        },
        {
            "id": "7",
            "name": "营销服务能力",
            "imgUrl": "images/apiImg/yingxiao.png",
            "description": "包括业务订购、话费充值等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "基本业务订购",
                    "close_a_deal": "https://it.open.10086.cn/#/login",
                    "description": "为合作渠道提供校验、订购、查询能力，支持用户通过多渠道便捷的订购、查询中国移动各项基本业务，参与各项营销活动。",
                    "ability_icon":"data/images/api/api7-1.png",
                    "scene": "业务订购：4G飞享合约，4G基础套餐，流量加油包，流量直充包，国际漫游包，定向流量包等业务的订购。",
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
                    "sub_api_owner": "中国移动业务支撑服务平台",
                    "detail_url": "https://it.open.10086.cn/#/production/nav/order",
                    "cases":[
                         {
                            "image_url" :"data/images/api/jingdong.png",
                            "desc":""
                        },
                        {
                            "image_url": "data/images/api/tianmao.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/youku.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/tengxunwang.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/1haodian.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/suningyugou.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "统一充值",
                    "close_a_deal": "https://it.open.10086.cn/#/login",
                    "description": "为合作渠道提供充值、查询能力，支持用户通过各种合作渠道便捷充值。",
                    "ability_icon":"data/images/api/api7-2.png",
                    "scene": "统一充值：通过H5统一销售界面为用户进行话费充值。",
                    "api_list": [
                        {
                            "sub_api_name": "充值请求接口",
                            "sub_api_desc": "在用户支付后将充值信息发给省公司。",
                            "sub_api_type": "业务订购类"
                        },
                        {
                            "sub_api_name": "充值结果通知",
                            "sub_api_desc": "支持将充值结果通知渠道侧。",
                            "sub_api_type": "业务订购类"
                        },
                        {
                            "sub_api_name": "充值结果查询",
                            "sub_api_desc": "并支持渠道侧发起的充值结果查询请求。",
                            "sub_api_type": "信息查询类"
                        }
                    ],
                    "sub_api_owner": "中国移动业务支撑服务平台",
                    "detail_url": "https://it.open.10086.cn/#/production/detail/order08",
                    "cases":[
                         {
                              "image_url" :"data/images/api/zhongguoyidong.png",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api/migu.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "话费及积分支付",
                    "close_a_deal": "https://it.open.10086.cn/#/login",
                    "description": "为合作渠道提供话费支付、积分支付、第三方支付、在线计费能力，支持用户通过合作渠道方便的利用手机账户完成支付。",
                    "ability_icon":"data/images/api/api7-3.png",
                    "scene": "在线支付：支持第三方，话费及积分支付方式。<br/>在线计费：基于手机账户的计费支付功能，支持APP、网页等多种计费需求，支持单次、包月等灵活的计费策略",
                    "api_list": [
                        {
                            "sub_api_name": "支付请求接口",
                            "sub_api_desc": "支持渠道侧把第三方支付请求传递给平台。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "支付结果通知",
                            "sub_api_desc": "支持将第三方支付结果通知渠道侧。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "充值结果通知",
                            "sub_api_desc": "支持将充值结果通知渠道侧。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "支付结果查询",
                            "sub_api_desc": "并支持渠道侧发起的第三方支付结果查询请求。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "充小额支付接口",
                            "sub_api_desc": "将手机话费用于支付小金额费用。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "积分支付接口",
                            "sub_api_desc": "将中国移动积分用于支付。",
                            "sub_api_type": "支付类"
                        },
                        {
                            "sub_api_name": "在线计费接口",
                            "sub_api_desc": "支持在授权认证的前提下，为用户提供基于手机账户的计费服务。",
                            "sub_api_type": "支付类"
                        }
                    ],
                    "sub_api_owner": "中国移动业务支撑服务平台",
                    "sub_api_type": "支付类",
                    "detail_url": "https://it.open.10086.cn/#/production/nav/pay",
                    "cases":[
                         {
                           "image_url" :"data/images/api/zhongguoyidong.png",
                           "desc":""
                        },
                        {
                            "image_url": "data/images/api/migu.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "4",
                    "sub_name": "宽带办理",
                    "close_a_deal": "https://it.open.10086.cn/#/login",
                    "description": "为合作渠道提供宽带校验、订购、查询能力，支持用户通过多种渠道都能便利的办理各类宽带产品。",
                    "ability_icon":"data/images/api/api7-4.png",
                    "scene": "宽带办理：支持宽带新装预约，提速，续订等操作",
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
                    "sub_api_owner": "中国移动业务支撑服务平台",
                    "detail_url": "https://it.open.10086.cn/#/production/detail/order06",
                    "cases":[
                         {
                           "image_url" :"data/images/api/tianmao.png",
                           "desc":""
                        }
                     ]
                },
                {
                    "sub_id": "5",
                    "sub_name": "选号入网",
                    "close_a_deal": "https://it.open.10086.cn/#/login",
                    "description": "为合作渠道提供入网资格校验、选号入网能力，支持用户通过多种渠道都能完成在线售卡业务。",
                    "ability_icon":"data/images/api/api7-5.png",
                    "scene": "在线售卡：天猫、京东等各类渠道的任我用套卡，任我看套卡，青春卡销售。",
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
                    "sub_api_owner": "中国移动业务支撑服务平台",
                    "detail_url": "https://it.open.10086.cn/#/production/detail/order09",
                    "cases":[
                         {
                           "image_url" :"data/images/api/zhongguoyidong.png",
                            "desc":""
                        },
                        {
                            "image_url": "data/images/api/tianmao.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/jingdong.png",
                            "desc": ""
                        }
                     ]
                }
            ]
        },
        {
            "id": "8",
            "name": "云服务能力",
            "imgUrl": "images/apiImg/yunserve.png",
            "description": "包括云主机、云存储、语音识别处理等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "公有云服务",
                    "close_a_deal": "https://ecloud.10086.cn/op-user-sso/login?service=https%3A%2F%2Fecloud.10086.cn%2Flogin%2Fcas",
                    "description": "用于创建、释放以及管理用户在移动云的云资源，实现了200+的操作功能。该API已经覆盖绝大部分移动云产品，包括云主机、云存储、云网络、云安全、云监控以及视频服务等。",
                    "ability_icon":"data/images/api/api8-1.png",
                    "scene": "多资源混合管理：开发者可以通过API接口将移动云资源嵌入自己的云管理平台，实现多资源混合管理。<br/>构建上层服务：可以使用基础资源API来构建各种上层服务，提升自有应用系统的可用性与扩展能力。",
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
                    "sub_api_owner": "移动云",
                    "detail_url": "https://ecloud.10086.cn/product",
                 "cases":[
                         {
                            "image_url" :"",
                            "desc":""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "语音识别处理",
                    "close_a_deal": "http://dev.10086.cn/cmdn/servicerob/web/index.php?r=member/login&from=ApControlpanel",
                    "description": "语音听写，将语音转化为文字并识别。语音识别，将文字转化声音。语音合成，支持合成方言、中英文、不同音色发音人。声纹识别，根据语音波形识别说话人身份。语音评测，对发音水平进行评测。",
                    "ability_icon":"data/images/api/api8-2.png",
                    "scene": "人机交互：语音识别答复，智能客服，解决用户问题。<br/>在线教育：指导用户发音学习。<br/>有声阅读：将文字转化为声音，解放双眼进行阅读。<br/>声纹密码：通过声音解锁。",
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
                    "sub_api_owner": "中国移动咪咕灵犀云平台",
                    "detail_url": "http://dev.10086.cn/wiki/?p4_02_02",
                      "cases":[
                         {
                              "image_url" :"data/images/api/kangjia.png",
                              "desc":""
                        },
                        {
                            "image_url": "data/images/api/miguyuedu.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/zhangyue.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/",
                            "desc": ""
                        }
                     ]
                }
            ]
        },
        {
            "id": "9",
            "name": "行业能力",
            "imgUrl": "images/apiImg/hangye.png",
            "description": "包括企业视频会议、对讲、监控等能力",
            "sub_ability": [
                {
                    "sub_id": "1",
                    "sub_name": "视频监控",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "视频监控是通过API的方式，提供监控视频实时查看能力，同时终端用户可以查看不同时间点的历史录像。支持实时视频、录像查看、位置定位、视频存储等功能。",
                    "ability_icon":"data/images/api/api9-1.png",
                    "scene": "在线园所：可以在幼儿园各个场所安装摄像头，父母随时查看宝宝在幼儿园中的生活。突破传统的办公方式，提升品牌价值。<br/>保险定损：执行人员随身携带终端设备，执行过程呼叫后台查看实时视频，并指导前端操作，支持对整个过程的留存备案。",
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
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=31",
                 "cases":[
                         {
                             "image_url" :"data/images/api/",
                             "desc":""
                        },
                        {
                            "image_url": "data/images/api/dahuakeji.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "视频对讲",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "支持向终端用户开放广域对讲、多媒体对讲、可视化调度功能。支持基础对讲、多媒体对讲以及可视化调度功能。可应用在跨部门沟通、物流运输等多种场景中。",
                    "ability_icon":"data/images/api/api9-2.png",
                    "scene": "跨部门沟通：可应用在政府事业单位间，实行多级调动管理，跨地域联动工作。<br/>物流运输：应用在物流运输场景中，整合对讲、定位、调度资源，提升管理效率。",
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
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=34",
                 "cases":[
                         {
                           "image_url" :"data/images/api/",
                           "desc":""

                        },
                        {
                            "image_url": "data/images/api/shuguokeji.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "密码服务",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "通过API开放对TF密码卡的离线密钥注入能力，通过Internet对TF密码卡实现在线管理。",
                    "ability_icon":"data/images/api/api9-3.png",
                    "scene": "高级会议：重要的会话或涉及到敏感话题时，可借助密码服务发起安全通话。",
                    "api_list": [
                        {
                            "sub_api_name": "数字证书签发",
                            "sub_api_desc": "为用户签发数字证书，提供证书链，并提供传输数字证书、证书链和证书请求的加密传输通道。",
                            "sub_api_type": "行业能力"
                        },
                        {
                            "sub_api_name": "密钥分发",
                            "sub_api_desc": "为用户分发对称式或非对称式的密钥，并提供传输密钥的加密传输通道。",
                            "sub_api_type": "行业能力"
                        }
                    ],
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=35",
                    "cases":[
                         {
                              "image_url" :"data/images/api/",
                              "desc":""
                        }
                     ]
                },
                {
                    "sub_id": "4",
                    "sub_name": "鉴权与路由分发",
                    "close_a_deal": "http://uc.ipower.10086.cn/open_devportal/userLogin.action",
                    "description": "可满足不同产品体系要求，为各类行业，尤其是政务、军队、金融等对安全、质量要求严格的行业客户，提供统一接口下的定制化鉴权汇聚与路由分发等服务。",
                    "ability_icon":"data/images/api/api9-4.png",
                    "scene": "集团客户鉴权：党政军、金融等对安全要求严格的行业客户，该能力可满足不同产品体系要求，提供定制化鉴权汇聚服务。",
                    "api_list": [
                        {
                            "sub_api_name": "汇聚鉴权API",
                            "sub_api_desc": "定制化调用不同鉴权机制，针对大型行业客户不同产品体系要求，提供定制化鉴权汇聚服务。",
                            "sub_api_type": "行业能力"
                        },
                        {
                            "sub_api_name": "路由分发API",
                            "sub_api_desc": "依据业务需求与流量，为大型行业客户提供统一汇聚接口定制化路由分发机制。",
                            "sub_api_type": "行业能力"
                        }
                    ],
                    "sub_api_owner": "中国移动行业应用使能平台",
                    "sub_api_type": "行业能力",
                    "detail_url": "http://uc.ipower.10086.cn/iaep/open_devportal/productIntroductionAction.action?eaId=36",
                    "cases":[
                         {
                             "image_url" :"data/images/api/",
                             "desc":""
                        }
                     ]
                }
            ]
        },
        {
            "id": "10",
            "name": "大数据能力",
            "imgUrl": "images/apiImg/dashuju.png",
            "description": "包括位置、信用等能力",
            "sub_ability": [
           {
                    "sub_id": "1",
                    "sub_name": "信用服务能力",
                    "close_a_deal": "",
                    "description": "该接口基于HTTP/REST/H5服务向合作伙伴输出中国移动的信用服务能力，包括用户授权、信用分查询、信用子模型查询等。",
                    "ability_icon":"data/images/api/api10-1.png",
                    "scene": "开发者可以通过API接口将中国移动的信用服务能力接入自己的业务/服务流程，实现对用户的身份确认、业务风险控制及授信等场景。",
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
                    "sub_api_owner": "中国移动信用服务平台",
                    "detail_url": "http://xinyong.cmri.cn",
                     "cases":[

                        {
                            "image_url": "data/images/api/hefeixin.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "2",
                    "sub_name": "智能终端定位能力",
                    "close_a_deal": "",
                    "description": "为Android用户端应用提供一套简单易用的LBS定位服务接口，通过使用中国移动融合定位SDK，开发者可以轻松为应用程序实现智能、准确、高效的定位功能。",
                    "ability_icon":"data/images/api/api10-2.png",
                    "scene": "定位功能：安卓手机APP中，开发者需要使用定位能力时，可调用本定位SDK，完成定位功能。应用案例：和飞信、咪咕音乐、和生活等",
                    "api_list": [
                        {
                            "sub_api_name": "“获取SDK的终端定位结果”接口",
                            "sub_api_desc": "获得终端所在位置的经纬度信息。",
                            "sub_api_type": "定位"
                        }
                    ],
                    "sub_api_owner": "中国移动位置服务平台",
                    "detail_url": "http://ditu.10086.cn/spIndex.do?downLoad",
                 "cases":[
                         {
                            "image_url" :"data/images/api/hetianqi.png",
                             "desc":""

                        },
                        {
                            "image_url": "data/images/api/misic.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/migu_MV.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/hefeixin.png",
                            "desc": ""
                        }
                    ]
                },
                {
                    "sub_id": "3",
                    "sub_name": "地图搜索导航SDK",
                    "close_a_deal": "",
                    "description": "地图、搜索、导航SDK能力族服务于集成LBS地理位置服务的应用，为 Android、IOS 应用开发者提供互动的、功能丰富的手机服务开发辅助，满足用户对地图搜索、导航、路线规划等需求。",
                    "ability_icon":"data/images/api/api10-3.png",
                    "scene": "地图搜索导航：安卓、IOS手机APP中，开发者需要在应用内显示地图、查询公交、POI搜索以及导航功能时，可调用地图搜索导航SDK能力，实现相应功能。应用案例：和飞信",
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
                    "sub_api_owner": "中国移动位置服务平台",
                    "detail_url": "http://ditu.10086.cn/spIndex.do?downLoad",
                    "cases":[
                        {
                            "image_url": "data/images/api/hefeixin.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/yanghejiuchang.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "4",
                    "sub_name": "统一地图JSAPI能力",
                    "close_a_deal": "",
                    "description": "支持目前市场上所有的主流地图应用，无论是在PC上的浏览器中，还是在手机上的浏览器中展现地图，都能充分满足各类地图应用的使用需求。",
                    "ability_icon":"data/images/api/api10-4.png",
                    "scene": "统一地图接口：在PC端或者移动端上，开发者需要在应用或者浏览器内显示地图、查询公交、POI搜索等功能时可调用此能力。<br/>应用案例：有线宽带覆盖及开户校园精准营销；外勤管理系统。社区矫正系统；电动车定位管理系统；高速路网智能监控系统；119消防火警救援系统；政企客户园区地图；在线公司客服系统",
                    "api_list": [
                        {
                            "sub_api_name": "统一地图JSAPI接口",
                            "sub_api_desc": "统一地图JSAPI接口用于开发基于浏览器网页地图应用，通过JavaScript语言调用地图能力实现地图应用。",
                            "sub_api_type": "地图"
                        }
                    ],
                    "sub_api_owner": "中国移动位置服务平台",
                    "detail_url": "http://ditu.10086.cn/spIndex.do?downLoad",
                    "cases":[
                         {
                           "image_url" :"data/images/api/linyeting.png",
                           "desc":""
                        },
                        {
                            "image_url": "data/images/api/naaisijituan.png",
                            "desc": ""
                        },
                        {
                            "image_url": "data/images/api/shenyangjichuang.png",
                            "desc": ""
                        }
                     ]
                },
                {
                    "sub_id": "5",
                    "sub_name": "URI地图能力",
                    "close_a_deal": "",
                    "description": "用于开发网站地图页面，包括：PC端：适用于WWW网站地图页面；移动端：适用于WAP、H5网站地图页面，使用方无需开发代码，直接调用接口即可实现网站地图页面功能。",
                    "ability_icon":"data/images/api/api10-5.png",
                    "scene": "无需代码开发：在PC端或者移动端上，开发者需要在应用或者浏览器内显示地图功能时，不需要进行代码的开发，可直接通过接口调用此能力。微信公众号；各门户网站",
                    "api_list": [
                        {
                            "sub_api_name": "URI地图接口",
                            "sub_api_desc": "URI地图接口用于有分享地图页面需求的应用，如微信中分享地图页面。",
                            "sub_api_type": "地图"
                        }
                    ],
                    "sub_api_owner": "中国移动位置服务平台",
                    "detail_url": "http://ditu.10086.cn/spIndex.do?downLoad",
                 "cases":[
                         {
                            "image_url" :"data/images/api/fenghezhiye.png",
                            "desc":""
                        },
                        {
                            "image_url": "data/images/api/shuangzengshipin.png",
                            "desc": ""
                        }
                     ]
                }
            ]
        }
    ]
}