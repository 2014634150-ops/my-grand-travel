(() => {
  // Research notes reviewed 2026-10-14. Fares and entry rules are snapshots, not guarantees for 2027.
  window.TRAVEL_GUIDES = [
    {
      stopId:"urumqi", country:"中国 · 新疆", title:"新疆出发：伊犁—都拉塔—阿拉木图", days:[
        "抵达乌鲁木齐，补给、办本地交通与电话卡，确认护照和哈萨克斯坦入境条件。",
        "国际大巴扎与老城步行；清真寺和市场内注意着装、拍摄礼貌。",
        "选天山一处近郊步道，核天气、海拔和返程车，不买临时高价团。",
        "留作休息、洗衣和购买跨境路餐；把重要证件和电子票离线备份。",
        "转到伊宁，按客运站当天公告确认发车口、纸票领取和都拉塔口岸安排。"
      ],
      arrival:"在伊犁州汽车客运中心核实赴阿拉木图国际大巴；SILKLOOP 记载约 10 小时、历史参考 ¥200。车票、口岸和班期临近再向车站确认。",
      onward:"由乌鲁木齐/伊宁坐火车或大巴回程；预留跨境延误，不把航班和国际大巴排在同一天。",
      cheap:"市内步行/公交；市场简餐和超市补给；天山只选一项付费交通，避开包车独占成本。",
      caution:"大巴和口岸情况可能临时变化；全程随身看管行李，勿把护照交给非官方代办。",
      links:[{label:"SILKLOOP 大环线与新疆出境衔接",url:"https://thesilkloop.com/grand-loop/"}]
    },
    {
      stopId:"almaty", country:"哈萨克斯坦", title:"阿拉木图：城市步行＋一处雪山日游", days:[
        "抵达后办电话卡、换少量坚戈；步行熟悉市中心与地铁。",
        "绿巴扎—潘菲洛夫公园—升天大教堂，市场选熟食柜台简餐。",
        "地铁/公交到麦迪奥与琴布拉克；看门票和缆车费，体力允许再上山。",
        "选恰伦峡谷拼团，或留在城里；比较多人分摊后的往返价和含不含门票。",
        "科克托别或中央博物馆二选一，晚上整理去塔什干的车票与跨境现金。"
      ],
      arrival:"新疆伊犁→阿拉木图国际大巴是低成本主线，SILKLOOP 报约 10 小时、约 ¥200（2026-07 参考）。铁路跨境客运仍须当日查证，不按旧攻略假设运行。",
      onward:"预算优先夜行 Talgo 火车；大巴也可但较久。SILKLOOP 报 16–18 小时，火车在 bilet.railways.kz 查票；选大巴须确认座位不是连铺位。",
      cheap:"用 Yandex Go 只在公交到不了时拼车；住宿靠市中心/地铁；峡谷一日团多人拼座，市内景点步行串联。",
      caution:"山地天气变化快；恰伦峡谷与湖区距离远，别把多个远郊塞进同一天。保存住宿地址的俄文/哈萨克文。",
      links:[{label:"SILKLOOP 哈萨克斯坦景点与交通",url:"https://thesilkloop.com/destinations/kazakhstan/"},{label:"SILKLOOP 跨境路线参考",url:"https://thesilkloop.com/grand-loop/"}]
    },
    {
      stopId:"tashkent", country:"乌兹别克斯坦", title:"塔什干—撒马尔罕—布哈拉（7 天紧凑线）", days:[
        "抵达塔什干、老城与哈兹拉提伊玛目建筑群；入住后索取住宿登记凭证。",
        "恰苏巴扎、帖木儿广场和地铁站巡游；避开中午曝晒。",
        "早班 Afrosiyob 或较便宜的 Sharq 到撒马尔罕；下午雷吉斯坦广场。",
        "沙赫静达、比比哈努姆与古尔-埃米尔，晚间老城步行。",
        "火车到布哈拉，傍晚走拉比豪兹与老城巷道。",
        "卡良建筑群、雅克城堡和萨曼王陵；步行为主，留意景点联票规则。",
        "回塔什干衔接飞巴库；若坚持加希瓦，必须删减城市或增加天数，不压缩夜间转场安全。"
      ],
      arrival:"阿拉木图→塔什干优先比较 Talgo 直达夜车与跨境大巴；SILKLOOP 参考 16–18 小时。火车/巴士需带好护照并预留口岸时间。",
      onward:"从塔什干飞巴库；SILKLOOP 列有乌航与阿塞拜疆航空直飞参考。为符合 ¥30,000 上限，提早比含行李总价，避免经里海等无固定班次方案。",
      cheap:"城际先抢铁路官网 eticket.railway.uz；高铁售罄就看 Sharq/普速。住老城可减少打车；把撒马尔罕到布哈拉段合并好，避免回头路。",
      caution:"乌兹别克严格管制无人机；住宿登记单保留到离境。车票余量变化快，境内留一份离境安排/下一程凭证。热季白天户外时间缩短。",
      links:[{label:"SILKLOOP 乌兹别克斯坦城市及铁路攻略",url:"https://thesilkloop.com/destinations/uzbekistan/"}]
    },
    {
      stopId:"baku", country:"阿塞拜疆", title:"巴库：老城、里海海岸与戈布斯坦", days:[
        "塔什干飞巴库后轻松安顿；机场公共交通进城前先查 BakıKart 和末班车。",
        "老城、少女塔外观、海滨大道步行；付费景点按兴趣择一。",
        "戈布斯坦岩画与泥火山拼车一日游，出发前问清越野车、门票与回程。",
        "火焰塔观景/本地市场补给，整理赴第比利斯的铁路或口岸备选。"
      ],
      arrival:"塔什干→巴库优先直飞；SILKLOOP 记载约 2.5–3 小时。阿塞拜疆陆路入境限制曾延长，勿把陆路从格鲁吉亚入境当默认，出发前查官方边境公告。",
      onward:"若巴库—第比利斯夜火车实际开行，查 ADY 官网 ticket.ady.az 并留意边境规则；若停运则按官方开放口岸、巴士换乘做备选，不能只凭旧时刻表。",
      cheap:"市区步行、地铁/公交优先；机场巴士与市区通票价格查机场/运营方；戈布斯坦拼车比单独包车省。",
      caution:"阿塞拜疆与亚美尼亚长期紧张：按实际行程如实回答边检问题，不拍摄军警/口岸设施；保留出境车票。",
      links:[{label:"SILKLOOP 阿塞拜疆国家攻略",url:"https://thesilkloop.com/destinations/azerbaijan/"},{label:"SILKLOOP 巴库—第比利斯衔接",url:"https://thesilkloop.com/grand-loop/"}]
    },
    {
      stopId:"tbilisi", country:"格鲁吉亚", title:"第比利斯：老城＋卡兹别克山地往返", days:[
        "夜车/陆路到第比利斯，老城安顿、补水和现金；避免抵达日排付费活动。",
        "老城、硫磺浴街区、纳里卡拉外观与和平桥，步行加公交卡。",
        "旱桥跳蚤市场、圣三一大教堂与市场；核对浴场是否含毛巾/额外费用。",
        "Didube 小巴前往 Stepantsminda，山路车程留缓冲；条件允许住一晚。",
        "格尔盖蒂教堂徒步或多人拼 4x4；根据天气决定，山地别单独偏离标记路线。",
        "回第比利斯休整，查入境亚美尼亚保险要求和下一段小巴/夜车。"
      ],
      arrival:"巴库→第比利斯：SILKLOOP 报夜车约 9.5 小时，但该线路近年复开，票务/日期需在 ADY 官网临近核实；口岸方案也要确认开放。",
      onward:"第比利斯→埃里温可选小巴/拼车/季节性夜车；参考约 5–7 小时。亚美尼亚与阿塞拜疆没有可用直通边境，必须经格鲁吉亚。",
      cheap:"住老城外围地铁可达处；用公交卡和步行；Kazbegi 选择小巴往返或同伴拼车，雨雪天气不硬走高山徒步。",
      caution:"SILKLOOP 提醒 2026 年入境需全程医疗保险，保额门槛与承认语言出行前按格鲁吉亚官方复核。带英文保单。山路天气和抗议/示威信息当日检查。",
      links:[{label:"SILKLOOP 格鲁吉亚城市与交通攻略",url:"https://thesilkloop.com/destinations/georgia/"},{label:"Georgia 官方旅行保险提示（SILKLOOP 引用）",url:"https://ge.usembassy.gov/georgia-mandates-health-and-accident-insurance-for-tourists-effective-january-1-2026/"}]
    },
    {
      stopId:"yerevan", country:"亚美尼亚", title:"埃里温：城市漫步＋加尼、格加尔德与亚拉腊山", days:[
        "抵达埃里温；共和国广场、阶梯艺术中心，熟悉公交/地铁和当地现金。",
        "种族灭绝纪念馆与博物馆，尊重纪念场所；下午逛市集。",
        "加尼神庙、岩石交响曲、格加尔德修道院拼车/公交一日线。",
        "Khor Virap 或塞凡湖二选一；晚间搭机/长途车离境前留地面缓冲。"
      ],
      arrival:"第比利斯→埃里温优先查有牌照的跨境小巴；常见耗时 5–7 小时。车站到车站、边检等待另留时间。",
      onward:"亚美尼亚—土耳其陆地边境关闭。可查询埃里温—伊斯坦布尔直飞；价格不合预算时先返回第比利斯，再比较飞伊斯坦布尔，切勿直接去关闭口岸。",
      cheap:"城市核心步行；郊区三处串同一天分摊车费；公共巴士路线用官方/本地地图复核，拼车先谈清往返等待费。",
      caution:"阿塞拜疆边境及边境附近有冲突风险，别靠近东部边境/军事设施；有阿塞拜疆旅行史，边检提问时如实说明。",
      links:[{label:"SILKLOOP 亚美尼亚国家攻略",url:"https://thesilkloop.com/destinations/armenia/"},{label:"英国 FCDO 亚美尼亚区域风险与关闭边境",url:"https://www.gov.uk/foreign-travel-advice/armenia/regional-risks"}]
    },
    {
      stopId:"istanbul-1", country:"土耳其 · 第一段", title:"伊斯坦布尔第一站：老城与博斯普鲁斯两岸", days:[
        "从埃里温或第比利斯飞到伊斯坦布尔；入住公共交通方便的亚洲区/老城外围。",
        "苏丹艾哈迈德广场、蓝色清真寺周边与老城街区；清真寺注意开放时段和服饰。",
        "大巴扎外圈、埃及香料市场、加拉塔桥；市场商品先比价。",
        "乘公共轮渡跨博斯普鲁斯，卡德柯伊街区半日；公共轮渡替代观光船。",
        "多尔玛巴赫切/塔克西姆周边二选一，景点门票提前核对。",
        "亚洲侧海岸日落或免费街区步行，安排洗衣和预算复盘。",
        "前往巴士站/机场转场；提前确认伊斯坦布尔大巴总站位置及行李费用。"
      ],
      arrival:"埃里温到伊斯坦布尔可查直飞；土耳其与亚美尼亚陆地边境关闭。若直飞太贵，比较回第比利斯后出发的班次与总交通成本。",
      onward:"伊斯坦布尔→贝尔格莱德比较夜巴和低价机票含行李价；夜巴大约跨夜，但边检和时刻变更须留出一天缓冲。",
      cheap:"买适合区域的 Istanbulkart；步行串老城；坐市民轮渡看海峡；用 lokanta/街头餐，旅游区菜单先看价。",
      caution:"市区人流大、扒窃与出租车议价；只用正规计价/叫车渠道。土耳其境内物价波动快，换汇和景点费以当月为准。",
      links:[{label:"SILKLOOP 土耳其目的地攻略",url:"https://thesilkloop.com/destinations/turkey/"},{label:"土耳其—伊斯坦布尔交通实用指南",url:"https://thesilkloop.com/grand-loop/"}]
    },
    {
      stopId:"belgrade", country:"塞尔维亚", title:"贝尔格莱德：两河老城＋诺维萨德一日往返", days:[
        "抵达后在老城休整，确认巴士下站、现金与住宿登记。",
        "卡莱梅格丹城堡、多瑙河/萨瓦河汇流处、米哈伊洛大街步行。",
        "圣萨瓦教堂、泽蒙区和加尔多什塔；多段可用免费市内公交衔接。",
        "若精力允许坐火车日往返诺维萨德，否则留作去萨拉热窝的延误缓冲。"
      ],
      arrival:"伊斯坦布尔→贝尔格莱德查 FlixBus/当地运营商或机票。参考检索曾见直达夜巴约 12–15 小时；实际票价和到站地点以订单为准。",
      onward:"贝尔格莱德→萨拉热窝优先直达巴士；SERBIAGUIDEBOOK 2026 报约 7–8 小时、€25–40。确认终点可能在 East Sarajevo，再算入城车费。",
      cheap:"SILKLOOP 报市区公交自 2025 年免费；出行当天复核新政。老城步行免费；诺维萨德往返铁路比单独包车省。",
      caution:"跨境巴士常要求纸质票/护照；车站和实际到达点核对后再订同日住宿。周末市中心活动可能封路。",
      links:[{label:"SILKLOOP 塞尔维亚城市攻略",url:"https://thesilkloop.com/destinations/serbia/"},{label:"Belgrade—Sarajevo 巴士时间与票价参考",url:"https://serbiaguidebook.com/transport/belgrade-to-sarajevo/"}]
    },
    {
      stopId:"sarajevo", country:"波黑", title:"萨拉热窝：老城、历史步行与莫斯塔尔备选", days:[
        "贝尔格莱德巴士到萨拉热窝；入住后在 Baščaršija 老城简餐。",
        "老城清真寺街区、拉丁桥和河岸步行，安排历史背景导览或博物馆。",
        "希望看自然可去黄堡/山地；要去莫斯塔尔则坐火车/大巴往返并核返程末班。",
        "补看希望隧道博物馆或市场；保留跨境航班/车程缓冲。"
      ],
      arrival:"贝尔格莱德→萨拉热窝直达巴士约 7–8 小时；预订后核对是不是抵达 East Sarajevo，而非老城总站。",
      onward:"萨拉热窝→开罗没有稳定直飞。比价经伊斯坦布尔/维也纳等一票到底联程，优先行李直挂；拆票需至少过夜缓冲，勿为低票价赌误机。",
      cheap:"用面包店、市场和传统小馆；老城核心走路即可。莫斯塔尔只有在往返车票+住宿预算允许时安排，不用包车。",
      caution:"山地/历史遗址区域不要离开开放道路进入未标记地带；拍摄宗教场所前先确认许可。长途巴士可能现金购票。",
      links:[{label:"SILKLOOP 波黑城市与交通攻略",url:"https://thesilkloop.com/destinations/bosnia/"},{label:"Belgrade—Sarajevo 巴士参考",url:"https://serbiaguidebook.com/transport/belgrade-to-sarajevo/"}]
    },
    {
      stopId:"cairo", country:"埃及", title:"开罗为基地：吉萨、老城与卢克索取舍", days:[
        "从巴尔干飞入开罗；只搭正规叫车到入住点，避开机场主动揽客。",
        "吉萨金字塔尽早入园；入口、官方票种与接驳车按当日官方售票核对。",
        "大埃及博物馆/埃及博物馆择一，傍晚尼罗河边散步。",
        "科普特老城区或汗·哈利利市场，谈服务/骑乘价格前先约定总价。",
        "若最想看古迹，坐夜车/廉航去卢克索看卡纳克；不然留在开罗休息省交通费。",
        "卢克索返开罗或直接衔接伊斯坦布尔，给国际航班留至少一晚余量。"
      ],
      arrival:"从萨拉热窝经有保障的中转航班进开罗；没有可靠直飞，比较经伊斯坦布尔联程并看行李/机场转换费用。",
      onward:"开罗→伊斯坦布尔有直飞选择；若前往卢克索，先比较普通火车/国内航班和外籍旅客卧铺价，不要只看旅行社标价。",
      cheap:"入住解放广场/地铁步行范围，Uber/正规网约车；博物馆与付费墓室做取舍；用本地 SIM 和小额现金，账单先问价。",
      caution:"官网 eVisa/落地签当日要求需复核；埃及物价与汇率波动大。景区主动帮忙、骆驼骑行和机场拉客先谈总价或直接拒绝。",
      links:[{label:"SILKLOOP 埃及国家攻略（含开罗/卢克索）",url:"https://thesilkloop.com/destinations/egypt/"},{label:"埃及官方电子签证入口",url:"https://visa2egypt.gov.eg/"}]
    },
    {
      stopId:"istanbul-2", country:"土耳其 · 第二段", title:"伊斯坦布尔第二次入境：用 4 天做转场与补漏", days:[
        "从开罗飞回伊斯坦布尔；确认入境资格、护照有效期和后续机票。",
        "如第一程漏看老城补半天；否则去 Kadıköy/Moda 平价街区。",
        "公共轮渡沿海峡往返，选普通市民船；整理阿曼行前物品。",
        "机场出发前检查廉航随身行李尺寸、转机场交通和深夜地铁停运时间。"
      ],
      arrival:"开罗→伊斯坦布尔直飞；票价/托运行李按所选航空公司当前规则计算。",
      onward:"伊斯坦布尔→马斯喀特对比直飞与经海湾转机；含行李和夜间机场交通一起比总价。",
      cheap:"第二次入境只住公共交通方便区，避免重复购买昂贵景点；市场简餐和轮渡替代观光船。",
      caution:"土耳其入境天数需合并计算两次停留；把机票、酒店和旅行保险中的姓名与证件号核对一致。",
      links:[{label:"SILKLOOP 土耳其签证与旅行攻略",url:"https://thesilkloop.com/destinations/turkey/"}]
    },
    {
      stopId:"muscat", country:"阿曼", title:"马斯喀特：用公交串联老城与海岸", days:[
        "抵达后乘 Mwasalat 公交或正规出租车进城；优先住 Ruwi/Muscat 中心交通走廊。",
        "Mutrah Corniche、鱼市与 Mutrah Souq 步行；清晨/傍晚避热。",
        "苏丹卡布斯大清真寺按访客开放时间着装参观；交通预算够再加海岸线。"
      ],
      arrival:"伊斯坦布尔飞马斯喀特；廉航比价时计入托运行李与夜间住宿，跨境陆路不作为首选。",
      onward:"马斯喀特→沙迦可查 Mwasalat 官方 SH02 跨境班车是否在出行日运行；确认终点、班次和边境手续后，再从沙迦乘当地交通去迪拜。若停运，比较航班与地面换乘总价。",
      cheap:"用 Mwasalat 城市公交。机场 A1/Ruwi 路线和班次实时查官网；景点分散，3 天内别租车或包一整天私家车。",
      caution:"马斯喀特城市很分散，公交覆盖有限，步行在高温下不安全；斋月和宗教场所需遵守当地礼仪，饮水防暑。",
      links:[{label:"Mwasalat 官方时刻与票务",url:"https://mwasalat.om/en-us/"},{label:"Mwasalat 官方班车 FAQ",url:"https://nfc.mwasalat.om/FAQs"}]
    },
    {
      stopId:"dubai", country:"阿联酋", title:"迪拜：地铁主轴＋老城免费步行", days:[
        "入住地铁站步行范围，买 Nol 银卡并按交通区充值。",
        "Al Fahidi 老城、迪拜河与 abra 传统木船；老城步行和公共空间低成本。",
        "搭地铁到公共海滩看日落，整理前往仰光航班和现金/签证材料。"
      ],
      arrival:"若 Mwasalat 官方 Muscat–Sharjah SH02 班车在出行日运行，先核对终点、班次和边境口岸；抵达沙迦后另安排当地交通去迪拜。否则比较航班与跨境地面总耗时。",
      onward:"迪拜→仰光目前优先查机票联程；跨境陆路绕行不适合短停，确保中转签证和行李直挂。",
      cheap:"Dubai Metro、公交和公共海滩；Visit Dubai/RTA 说明 Nol 可用于多数公共交通。避免出租车长距离、景区套餐和无报价沙漠团。",
      caution:"夏季高温和日晒强；公共场合尊重当地着装/行为规范。航班便宜不代表总价便宜，核行李、机场位置和换乘。",
      links:[{label:"Visit Dubai 官方公共交通指南",url:"https://www.visitdubai.com/en/plan-your-trip/getting-around-dubai"},{label:"Dubai RTA Nol 票价",url:"https://rta.ae/wps/portal/rta/ae/public-transport/Nol-Fares?lang=en"}]
    },
    {
      stopId:"yangon", country:"缅甸", title:"仰光：安全审查通过后才执行的条件行程", days:[
        "出发前 30–60 天重新核对中国外交部、使领馆安全提醒、航空运行和保险书面承保；任何一项不满足就跳过缅甸。",
        "仅在风险评估允许时，白天走仰光市中心/苏雷塔周边，并告知可信联系人当日路线。",
        "大金塔选开放时段参观，着装得体；不拍军警、检查站、政府设施或示威。",
        "预留航班变化与紧急离境机动；若局势恶化不要去边境地区，按使领馆指引行动。"
      ],
      arrival:"如获准行程才由迪拜飞仰光；只使用已确认执飞且能联系到承运方的联程票。陆路边境不作为旅游替代方案。",
      onward:"仰光—清迈曾有直飞航班，班次可能变化，出行日前向航空公司确认；不要将该段设成不可退款的紧密联程。",
      cheap:"本卡不鼓励为省钱承担高风险；在安全批准后以步行、当地市场和短程正规网约车为主，并准备现金与离线地图。",
      caution:"风险显著：美国国务院 2026-05-08 对缅甸发布 Level 4 Do Not Travel；英国 FCDO 2026-09 对多地建议避免旅行，并提醒冲突快速变化、保险可能失效。中国护照持有人必须优先查中国领事服务网的最新提醒；确认保险书面承保后才决定。",
      links:[{label:"中国领事服务网：缅甸目的地与安全提醒",url:"https://cs.mfa.gov.cn/zggmcg/ljmdd/yz_645708/md_647198/"},{label:"美国国务院：缅甸旅行警示",url:"https://travel.state.gov/en/international-travel/travel-advisories/destination.mmr.html"},{label:"英国 FCDO：缅甸旅行建议",url:"https://www.gov.uk/foreign-travel-advice/myanmar"}]
    },
    {
      stopId:"chiang-mai", country:"泰国 · 清迈", title:"清迈：古城步行、市场与一个近郊日", days:[
        "到古城入住；寺庙外观、城墙与夜市步行熟悉周边。",
        "帕辛寺、契迪龙寺和古城小巷；寺庙按规则遮肩膝。",
        "瓦洛洛市场与 Ping 河，尝本地简餐和 Khao Soi。",
        "选择 Doi Suthep 或近郊步道一项，拼双条车/正规团，晚归前确认回城。",
        "留作休息、洗衣、查老挝跨境车票；空气/火点严重时减少户外活动。"
      ],
      arrival:"仰光→清迈仅在当日确认的商业航班运行时使用；若缅甸路线取消，直接改迪拜/海湾转机去清迈或曼谷再坐火车/巴士。",
      onward:"预算路线：清迈长途车去廊开/乌隆他尼，再转 Nong Khai—万象跨境巴士/铁路。该段很长，安排过夜与口岸缓冲；票价及班次查 SRT/当地运营商。",
      cheap:"住古城内步行区；寺院和城墙步行；红色双条车先问清拼车路线/车费，集市吃饭，不每天报团。",
      caution:"2–4 月北泰常有烟霾季，出发日期要看 AQI/PM2.5 与火点；烟霾严重就缩短山地户外。摩托车事故风险高，没当地驾照和保险勿租。",
      links:[{label:"2026 清迈平价背包客行程参考",url:"https://thailandaddict.com/en/chiang-mai-budget-plan"},{label:"清迈古城与省钱交通参考",url:"https://outthailand.com/guide/old-city-chiang-mai/"}]
    },
    {
      stopId:"vientiane", country:"老挝", title:"万象：湄公河、塔銮与去河内的长途转场", days:[
        "抵达万象、市场换小额基普；查看去越南巴士站与离境要求。",
        "西萨格寺、湄公河滨河步道和夜市，步行串联。",
        "塔銮、凯旋门和 COPE 访客中心；按营业时间安排，历史展陈保持尊重。",
        "前往越南：经由票务可靠的日间/夜间巴士；24 小时线路很累，购买前核对陆路口岸、签证资格和终点。"
      ],
      arrival:"清迈→廊开/Nong Khai 长途车，再通过泰老友谊桥坐跨境巴士/火车进万象；路线长，最好拆成两段，避免夜间独自赶换乘。",
      onward:"万象→河内有长途卧铺巴士，旅客记录和路线商家常报约 24 小时、约 US$40 起；廉价但疲劳且过境排队。航班贵时可选巴士，需确认越南签证适用陆路口岸。",
      cheap:"万象市中心景点步行；城区距离长时用正规短途 tuk-tuk 拼乘。订车票直接与车站/运营商核价，慎防只写“VIP”但无行李/过境说明。",
      caution:"边境排队、货币找零和铁路实名核验需留时间；不在野外捡取弹药/金属物。跨境签证是否支持该口岸须先核查。",
      links:[{label:"Vientiane—Hanoi 当前巴士路线参考",url:"https://laosbybus.com/en/travel/vientiane/hanoi/"},{label:"Nong Khai—Vientiane 最低成本过桥交通参考",url:"https://www.fateatlas.com/en/p/nong-khai-to-vientiane"}]
    },
    {
      stopId:"hanoi", country:"越南", title:"河内：老城区＋宁平（或下龙湾二选一）", days:[
        "万象长途车抵达河内后只办入住/休息；老城找当地 SIM 和饮水。",
        "还剑湖、老城区和同春市场；过马路稳步匀速，不突然折返。",
        "文庙、火车街周边和法式街区；铁路沿线只在官方开放位置停留。",
        "宁平一日游：火车/正规大巴到目的地，三谷船或长安择一，避开同时报多个团。",
        "若更想看海，可用下龙湾替换宁平；先看含接送/船票/餐的总价。",
        "休息、整理行李并乘机前往宿务；行李、机场巴士和菲律宾入境材料提前确认。"
      ],
      arrival:"万象→河内：预算方案是跨境卧铺巴士；票源显示线路约 24 小时，环境和边检耗时不确定。若身体状态不适，比较航班或分段住一晚。",
      onward:"河内→宿务：查有行李的联程机票，可能经马尼拉/胡志明市等中转；不要购买需要自行换机场、短时间重新托运行李的拆票组合。",
      cheap:"住老城区边缘，步行+本地公交；用街边餐、早餐店；宁平/下龙湾只选一个，比较车船是否包含在团费。",
      caution:"路口摩托车流量大；护照和手机防盗。越南电子签证口岸、停留时长和收费随政策变动，以官方 e-visa 网站为准。",
      links:[{label:"越南国家旅游局：河内与低成本公交",url:"https://vietnam.travel/places-to-go/northern-vietnam/ha-noi"},{label:"万象—河内长途巴士参考",url:"https://laosbybus.com/en/travel/vientiane/hanoi/"}]
    },
    {
      stopId:"philippines", country:"菲律宾 · 宿务—墨宝—薄荷岛", title:"12 天海岛潜水线：墨宝为主、薄荷岛作海岛延伸", days:[
        "飞抵宿务，落地休整；查次日南巴士末班与船班，不赶夜路。",
        "宿务南巴士站搭 Ceres 到 Moalboal（走 Barili 方向），入住 Panagsama/镇上。",
        "墨宝岸边沙丁鱼群浮潜（低成本替代船潜）；看海况和流流，正规向导。",
        "潜水日 1：墨宝岸潜/双潜，先核认证、装备、海洋公园费和保险承保。",
        "水面休息与海边散步；不连续追潜水天数。",
        "潜水日 2：根据经验安排 Pescador/礁壁，出海前确认潜店安全设备。",
        "陆上机动日或 Kawasan 周边（选一项付费活动）；山洪/海况差时取消。",
        "回宿务市，乘快船到 Tagbilaran；大件行李/港口费预留，勿买无退改紧密船班。",
        "潜水日 3：在正规潜店安排 Balicasag；计入船费、许可和装备费，先确认海况。",
        "潜水日 4（最后一次潜水）：尽量安排上午；之后不再潜水，并开始完整水面休息期。",
        "水面休息日：不潜水；最后一次潜水满至少 24 小时后再乘 Tagbilaran—宿务快船，并留延误缓冲。",
        "从宿务/Mactan 飞上海；前一晚已回 Cebu 并留出岛间缓冲，确认船班、机票和行李。"
      ],
      arrival:"河内→宿务核对含行李机票及中转签证。抵达后从 Cebu South Bus Terminal 搭巴士至墨宝；地方旅游/交通页给出约 2.5–3.5 小时参考。",
      onward:"最后一次潜水后至少留 24 小时完整水面间隔，再由 Tagbilaran 乘快船回宿务，隔夜后从 Cebu/Mactan 飞上海；若潜后间隔、海况或船班不满足，就延长行程并从前段减天数，不压缩安全缓冲。",
      cheap:"把基地放在墨宝 Panagsama 周边，沙丁鱼群可岸边浮潜；分开询问单潜、装备、船费和海洋公园费。少上网红团，跳过高价追鲸鲨项目。",
      caution:"选择有资质潜店与符合资历的潜点；保险书面确认涵盖水肺潜水/计划深度/救援和高压氧。DAN 对多日/多潜建议飞行前至少 18 小时水面间隔；本计划留 24 小时或更长，遵从潜水电脑和医生建议。台风季船班变化，勿把国际航班接在当天。",
      links:[{label:"宿务省官方旅游局：Moalboal 交通与潜点",url:"https://tourism.cebu.gov.ph/explore/moalboal/"},{label:"Moalboal 地方政府：公交线路到达说明",url:"https://moalboalcebu.gov.ph/how-to-get-there/"},{label:"Moalboal 低预算潜水费用参考（2026-07）",url:"https://cebudestinations.com/guide/diving-in-cebu-on-a-budget"},{label:"DAN：潜水后飞行间隔建议",url:"https://dan.org/health-medicine/health-resource/dive-medical-reference-books/decompression-sickness/contributing-factors/"},{label:"菲律宾 eTravel 官方问答",url:"https://etravel.gov.ph/frequently-asked-questions"},{label:"菲律宾移民局：中国游客免签政策文件",url:"https://immigration.gov.ph/wp-content/uploads/2026/01/OPERATIONS-ORDER-No.-2026-%E2%80%93-001.pdf"}]
    },
    {
      stopId:"shanghai", country:"中国 · 上海", title:"回到上海：到达、缓冲与收尾", days:[
        "抵达上海；在机场按地铁/机场联络线与夜间末班车选择住宿区。",
        "洗衣、休整、检查保险理赔时限和跨境交通票据，整理旅行资料备份。",
        "预留自由日，办理后续事项；如果返程票价格高，把它提前计入总预算。"
      ],
      arrival:"菲律宾回上海比较直飞 Cebu–Shanghai 与经马尼拉/其他枢纽联程；把托运行李、航站楼、签转条件与过夜住宿一并计价。",
      onward:"行程终点。保存银行卡挂失、保险救援、领保和家人联系方式。",
      cheap:"地铁/机场联络线为主；优先住轨道交通沿线，避开深夜高价网约车。",
      caution:"回程机票和出发去新疆的国内交通也属于总预算时必须纳入；别把 ¥29,800 误当作不含机票的唯一总成本。",
      links:[{label:"上海地铁官方乘客服务",url:"https://service.shmetro.com/"}]
    }
  ];
})();
