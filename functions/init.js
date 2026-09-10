// functions/init.js
// 访问 /init 触发数据初始化（部署后只需访问一次）

// ======================= 所有数据（严格统一格式，按 A→J 顺序） =======================
const SEED_DATA = [
  // ============================================================
  // 区块 1: A (不玩手机的1000件小事)
  // ============================================================
  { series_id: 'A', title: '去天台听一次邻居家的吵架声', desc: '感受人间烟火', mood: '治愈', cost: '10分钟' },
  { series_id: 'A', title: '用树叶拼一幅画', desc: '自然创作', mood: '治愈', cost: '20分钟' },
  { series_id: 'A', title: '写一封手写信给老朋友', desc: '重温旧情', mood: '温情', cost: '30分钟' },
  { series_id: 'A', title: '观察蚂蚁搬家', desc: '微观世界', mood: '好奇', cost: '15分钟' },
  { series_id: 'A', title: '做一次家庭断舍离', desc: '极简生活', mood: '清爽', cost: '1小时' },
  { series_id: 'A', title: '去公园喂鸽子', desc: '城市野趣', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '学折一只千纸鹤', desc: '手工时光', mood: '专注', cost: '5分钟' },
  { series_id: 'A', title: '看一场日出', desc: '早起挑战', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '整理手机相册', desc: '回忆杀', mood: '怀旧', cost: '40分钟' },
  { series_id: 'A', title: '给自己做一顿早餐', desc: '认真生活', mood: '温暖', cost: '20分钟' },
  { series_id: 'A', title: '做瑜伽、普拉提、拉伸', desc: '放松身心，提升柔韧性', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '在家跳绳健身', desc: '高效燃脂，提高心肺功能', mood: '充满活力', cost: '15分钟' },
  { series_id: 'A', title: '跑步（晨跑、夜跑）', desc: '呼吸新鲜空气，保持清醒', mood: '充满活力', cost: '30分钟' },
  { series_id: 'A', title: '散步、快走、公园漫步', desc: '放慢脚步，感受身边风景', mood: '放松', cost: '1小时' },
  { series_id: 'A', title: '爬山、徒步', desc: '亲近自然，挑战身体极限', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '学习太极、八段锦、拍八虚', desc: '修身养性，强身健体', mood: '宁静', cost: '30分钟' },
  { series_id: 'A', title: '正念呼吸、练习瑜伽', desc: '专注当下，缓解焦虑', mood: '宁静', cost: '20分钟' },
  { series_id: 'A', title: '打篮球、羽毛球、乒乓球', desc: '挥洒汗水，享受竞技乐趣', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '跳绳、踢毽子', desc: '唤醒童年记忆，活动筋骨', mood: '开心', cost: '20分钟' },
  { series_id: 'A', title: '溜冰（户外、动感单车）', desc: '感受速度与激情', mood: '充满活力', cost: '1小时' },
  { series_id: 'A', title: '游泳（室内、户外）', desc: '全身运动，清凉解压', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '出游（室内、户外）', desc: '换个环境，换个心情', mood: '开心', cost: '半天' },
  { series_id: 'A', title: '冥想、放空、独处', desc: '给自己一个静下来的机会', mood: '宁静', cost: '15分钟' },
  { series_id: 'A', title: '跑步机跑步', desc: '不受天气影响，随心运动', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '俯卧撑、仰卧起坐', desc: '随时随地，增强核心力量', mood: '充实', cost: '15分钟' },
  { series_id: 'A', title: '自制腌菜、泡菜', desc: '体验动手的乐趣与成就感', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '咖啡拉花、茶艺、煮果茶', desc: '享受慢生活，培养耐心', mood: '治愈', cost: '40分钟' },
  { series_id: 'A', title: '发呆、睡个懒觉', desc: '放松大脑，给身体充电', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: 'DIY手机壳、冰箱贴', desc: '发挥创意，独一无二的专属物品', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '整理照片、制作相册', desc: '重温美好回忆，整理心情', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '清洁、保养或修理小家电', desc: '让生活更井井有条', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '熨烫衣服、补衣服', desc: '整理仪表，提升生活质感', mood: '平静', cost: '1小时' },
  { series_id: 'A', title: '涂色书、数字油画', desc: '沉浸色彩世界，释放压力', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '玩粘土、石塑粘土、轻粘土', desc: '捏出喜欢的小物件', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '改造奶茶杯子做手工', desc: '变废为宝，环保又有趣', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '画画（素描水彩油画）', desc: '用画笔表达内心世界', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '写诗、创作小说、写日记', desc: '记录思绪，与自己对话', mood: '宁静', cost: '1小时' },
  { series_id: 'A', title: '学乐器（吉他/尤克里里）', desc: '培养音乐细胞，陶冶情操', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '练字（硬笔、毛笔）', desc: '静心养气，一手好字', mood: '宁静', cost: '40分钟' },
  { series_id: 'A', title: '学编程、设计软件', desc: '掌握新技能，提升竞争力', mood: '专注', cost: '2小时' },
  { series_id: 'A', title: '读外语、新闻', desc: '拓展视野，紧跟时事', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '学Excel、PPT办公技能', desc: '提升工作效率，职场加分', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '学心理学、哲学', desc: '深度思考，认识自我', mood: '宁静', cost: '2小时' },
  { series_id: 'A', title: '学摄影技巧、剪辑软件', desc: '用镜头记录生活美好', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '看纪录片、TED演讲', desc: '获取知识，提升思维', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '学理财知识', desc: '合理规划，财富增值', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '和家人/爱人/朋友聊天、打电话', desc: '联络感情，感受温暖', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '逛花鸟市场', desc: '赏花逗鸟，体验生活情趣', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '去做按摩或护理', desc: '放松肌肉，关爱自己的身体', mood: '放松', cost: '1小时' },
  { series_id: 'A', title: '做志愿者', desc: '帮助他人，收获精神满足', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '参观博物馆、艺术展', desc: '接受文化熏陶，提升审美', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '逛街、跑步机、逛公园', desc: '边逛边玩，放松身心', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '逛公园、看花草树木', desc: '感受自然气息，治愈心灵', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '上团购平台的9.9元体验课', desc: '低成本尝试新事物', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '夜晚看星星、白天看云朵', desc: '抬头看天，感受宇宙浪漫', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '雨中打伞散步、踩水坑', desc: '找回童心，感受雨天的浪漫', mood: '开心', cost: '30分钟' },
  { series_id: 'A', title: '给自己拍漂亮的写真', desc: '记录当下最美的自己', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '去乡下看麦田、踩大地', desc: '接地气，感受田园风光', mood: '治愈', cost: '半天' },
  { series_id: 'A', title: '去海边看海、捡贝壳', desc: '听海浪声，放空自己', mood: '治愈', cost: '半天' },
  { series_id: 'A', title: '去公园野餐', desc: '享受阳光、美食与微风', mood: '开心', cost: '半天' },
  { series_id: 'A', title: '去听音乐会、看livehouse', desc: '沉浸在音乐中尽情摇摆', mood: '充满活力', cost: '夜晚' },
  { series_id: 'A', title: '逛夜市或夜场', desc: '感受城市的烟火气', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '逛农贸市场', desc: '感受生活气息，采购新鲜食材', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '参加社区夜校', desc: '结交新朋友，学习新知识', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '无目的地散步、坐公交车', desc: '漫无目的，享受城市漫游', mood: '放松', cost: '1小时' },
  { series_id: 'A', title: '学用手机拍摄电影感vlog', desc: '记录生活，提升审美', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '学做三分钟零失败快手家常菜', desc: '提升厨艺，照顾好自己的胃', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '通勤时听知识型播客', desc: '利用碎片化时间自我提升', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '看TED学高效沟通表达', desc: '提升表达能力，拓宽思维', mood: '专注', cost: '20分钟' },
  { series_id: 'A', title: '掌握常见食材的保鲜技巧', desc: '减少浪费，生活更从容', mood: '充实', cost: '20分钟' },
  { series_id: 'A', title: '掌握海姆立克急救法', desc: '关键时刻能救命', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '学化十分钟通勤快速妆', desc: '提升自信，开启美好一天', mood: '开心', cost: '10分钟' },
  { series_id: 'A', title: '每天背五个实用英语口语', desc: '日积月累，提升外语水平', mood: '专注', cost: '15分钟' },
  { series_id: 'A', title: '追纪录片学习世界地理', desc: '足不出户，看遍世界', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '掌握基础手语日常对话', desc: '多一种沟通方式，关爱他人', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '拆解漫画分镜构图技巧', desc: '提升审美与画面叙事能力', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '练习写出漂亮个人签名', desc: '提升个人形象与仪式感', mood: '开心', cost: '20分钟' },
  { series_id: 'A', title: '创建专注学习英文歌单', desc: '在音乐中学习，事半功倍', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '用Excel制作动态收表', desc: '掌握实用技能，高效管理', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '搞懂当地医保报销比例规则', desc: '了解政策，保障自身权益', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '定投指数基金练习理财', desc: '培养财商，规划未来', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '给朋友圈趣味Q版头像', desc: '展现个性，增加社交趣味', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '学用思维导图整理读书笔记', desc: '梳理逻辑，加深记忆', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '学习记账分析月度消费', desc: '理性消费，掌控财务状况', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '带旧包回收变卖钱买新书', desc: '断舍离，换回知识财富', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '练习拍摄并剪辑短视频', desc: '掌握新时代的内容创作技能', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '学习弹唱最爱歌的吉他版', desc: '用音乐表达情感，陶冶情操', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '学习制作简单动画表情包', desc: '创意表达，聊天更有趣', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '练习清晰有力的说话发音', desc: '提升气场，增强自信', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '设计一周营养早餐食谱', desc: '健康饮食，活力满满', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '速读一本书抓核心观点', desc: '高效获取知识，拓宽认知', mood: '专注', cost: '1小时' },
  { series_id: 'A', title: '用地图规划最优晨跑路线', desc: '安全高效，享受晨跑', mood: '充实', cost: '20分钟' },
  { series_id: 'A', title: '冥想五分钟清空大脑杂念', desc: '减压放松，找回专注', mood: '治愈', cost: '5分钟' },
  { series_id: 'A', title: '旧T恤改造环保购物袋', desc: '环保又有趣的DIY体验', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '爱回收旧包换钱学记账', desc: '循环利用，合理理财', mood: '充实', cost: '30分钟' },
  { series_id: 'A', title: '把多肉养出肥厚饱满状态', desc: '体验植物生长的治愈力', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '对着镜子练习即兴演讲', desc: '克服紧张，提升表达能力', mood: '专注', cost: '20分钟' },
  { series_id: 'A', title: '学简谱弹奏电子琴小曲', desc: '简单易学，感受音乐魅力', mood: '开心', cost: '40分钟' },
  { series_id: 'A', title: '学修图软件P出复古胶片', desc: '提升审美，让照片更高级', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '列每周可完成计划清单', desc: '时间管理，提升效率', mood: '专注', cost: '15分钟' },
  { series_id: 'A', title: '每天练凯格尔预防漏尿', desc: '关爱自身健康，受益终身', mood: '专注', cost: '10分钟' },
  { series_id: 'A', title: '看云层预判当日天气', desc: '亲近自然，增加生活常识', mood: '宁静', cost: '10分钟' },
  { series_id: 'A', title: '用康奈尔笔记法高效听课', desc: '提升学习效率，整合知识', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '读心理学书改善人际关系', desc: '读懂他人，也读懂自己', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '学用AI工具提升效率', desc: '拥抱新技术，释放生产力', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '挑战一天不看社交媒体', desc: '摆脱信息焦虑，回归现实', mood: '充实', cost: '1天' },
  { series_id: 'A', title: '自制一杯特调饮品', desc: '享受动手DIY的乐趣', mood: '治愈', cost: '20分钟' },
  { series_id: 'A', title: '整理电脑桌面文件', desc: '整理环境，理顺心情', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '跟着教程画一幅数字油画', desc: '沉浸绘画，体验心流', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '给自己做一次手部护理', desc: '细致呵护自己，提升幸福感', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '研究星座或MBTI性格分析', desc: '探索自我，了解他人', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '整理手机相册、删除废片', desc: '释出内存，回顾美好', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '尝试做家庭版烧烤', desc: '在家也能享受美食快乐', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '学习基础刺绣', desc: '静心专注，创造指尖艺术', mood: '宁静', cost: '2小时' },
  { series_id: 'A', title: '给绿植修剪枝叶、换盆', desc: '照顾植物，感受生命力量', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '练习书法或英文花体字', desc: '练字静心，提升气质', mood: '宁静', cost: '1小时' },
  { series_id: 'A', title: '给未来的自己写一封信', desc: '与内心对话，记录当下', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '尝试冥想10分钟', desc: '缓解焦虑，放松身心', mood: '宁静', cost: '10分钟' },
  { series_id: 'A', title: '整理云端存储空间', desc: '数字极简，减轻负担', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '学折纸或剪纸艺术', desc: '感受传统文化与手工乐趣', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '挑战一天喝够2升水', desc: '促进新陈代谢，健康生活', mood: '充实', cost: '1天' },
  { series_id: 'A', title: '做一个手工香薰蜡烛', desc: '点亮生活，愉悦心情', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '尝试写一首小诗', desc: '发挥文字创造力，表达情感', mood: '宁静', cost: '30分钟' },
  { series_id: 'A', title: '学习用毛线织杯垫', desc: '温暖手工，耐心养成', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '泡一壶花果茶，慢慢喝完', desc: '放慢节奏，感受生活', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '研究茶叶的种类和冲泡', desc: '品味茶文化，提升生活格调', mood: '宁静', cost: '1小时' },
  { series_id: 'A', title: '整理药箱，补充常备药', desc: '有备无患，守护家人健康', mood: '充实', cost: '30分钟' },
  { series_id: 'A', title: '用手机拍一组家居静物照片', desc: '发现生活之美，练习摄影', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '尝试用旧衣服改造一件新物', desc: '旧物改造，环保又创意', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '睡前写成功日记（记3件好事）', desc: '培养感恩心态，积极生活', mood: '治愈', cost: '10分钟' },
  { series_id: 'A', title: '录制一段ASMR声音', desc: '探索声音的奥秘，自我放松', mood: '放松', cost: '20分钟' },
  { series_id: 'A', title: '跟着视频学一支简单的舞蹈', desc: '活动身体，快乐起舞', mood: '充满活力', cost: '30分钟' },
  { series_id: 'A', title: '给房间来一次彻底断舍离', desc: '舍弃杂物，清爽身心', mood: '充实', cost: '3小时' },
  { series_id: 'A', title: '学做一道异国甜点', desc: '体验异国风味，享受烘焙', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '整理书架，按颜色分类', desc: '视觉疗愈，找书更方便', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '尝试做家庭版SPA', desc: '在家享受舒适的放松时光', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '学习几个手语动作', desc: '拓展沟通技能，感受无声之美', mood: '专注', cost: '30分钟' },
  { series_id: 'A', title: '自制水果冰棍', desc: '健康解暑，夏日必备', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '模仿一部电影的经典片段', desc: '趣味自娱，释放表演欲', mood: '开心', cost: '30分钟' },
  { series_id: 'A', title: '研究家居风水小知识', desc: '改善居住环境，提升运气', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '录一段自己的声音日记', desc: '记录心情，回顾成长', mood: '治愈', cost: '15分钟' },
  { series_id: 'A', title: '清洁保养皮具和鞋子', desc: '爱护物品，延长使用寿命', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '写下100件想感恩的事', desc: '培养感恩心态，提升幸福感', mood: '治愈', cost: '30分钟' },
  { series_id: 'A', title: '学习一个魔术技巧', desc: '增加社交互动的小乐趣', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '给家具换一个摆放位置', desc: '改变空间布局，带来新鲜感', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '逛夜市，吃遍小吃摊', desc: '感受城市烟火气，大饱口福', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '去美术馆或博物馆看新展', desc: '接受艺术熏陶，提升审美', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '打卡网红建筑拍照', desc: '探索城市新地标，记录生活', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '参加城市解谜闯关活动', desc: '烧脑又刺激，感受团队合作', mood: '充满活力', cost: '半天' },
  { series_id: 'A', title: '坐绿皮火车去附近小镇', desc: '慢节奏旅行，体验别样风情', mood: '治愈', cost: '1天' },
  { series_id: 'A', title: '去花市买一束鲜花', desc: '装点生活，提升幸福感', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '探访古建筑或历史遗址', desc: '触摸历史，感受文化底蕴', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '体验房车露营', desc: '亲近自然，享受户外生活', mood: '充满活力', cost: '1天' },
  { series_id: 'A', title: '去剧院看一场话剧', desc: '感受舞台魅力，沉浸艺术', mood: '充实', cost: '夜晚' },
  { series_id: 'A', title: '参加读书会或分享沙龙', desc: '思想碰撞，结交同好', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '去海边或湖边捡石头/贝壳', desc: '寻找自然宝藏，治愈心灵', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '坐公交车随机一站下车', desc: '城市盲盒，探索未知角落', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '去水族馆或动物园', desc: '与动物互动，回归童真', mood: '开心', cost: '半天' },
  { series_id: 'A', title: '体验陶艺或油画课', desc: '动手创作，培养艺术细胞', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '逛旧货市场或跳蚤市场', desc: '淘宝贝，体验市井生活', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '参加户外瑜伽或冥想活动', desc: '在自然中放松身心', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '去露天影院看电影', desc: '星空下的浪漫观影体验', mood: '治愈', cost: '夜晚' },
  { series_id: 'A', title: '探索一条从未走过的小巷', desc: '发现城市隐藏的惊喜', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '体验室内滑雪或滑冰', desc: '刺激好玩，挑战自我', mood: '充满活力', cost: '2小时' },
  { series_id: 'A', title: '去温泉或spa馆放松', desc: '舒缓疲劳，享受惬意时光', mood: '放松', cost: '半天' },
  { series_id: 'A', title: '参加文化节或市集', desc: '感受多元文化，融入当地', mood: '开心', cost: '半天' },
  { series_id: 'A', title: '去琴行体验不同乐器', desc: '发掘音乐兴趣，培养爱好', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '去公园划船', desc: '泛舟湖上，享受悠闲时光', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '参观本地的手工作坊', desc: '了解传统手艺，感受匠心', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '体验植物染色或皮具制作', desc: '亲手制作独一无二的作品', mood: '开心', cost: '2小时' },
  { series_id: 'A', title: '去现场看体育比赛', desc: '感受竞技热血，尽情呐喊', mood: '充满活力', cost: '半天' },
  { series_id: 'A', title: '逛特色超市（如进口超市）', desc: '发现新奇商品，满足好奇心', mood: '开心', cost: '1小时' },
  { series_id: 'A', title: '去最近的山上看日出日落', desc: '感受自然壮美，治愈心灵', mood: '治愈', cost: '半天' },
  { series_id: 'A', title: '参加烘焙或咖啡课程', desc: '学习新技能，享受美食', mood: '充实', cost: '2小时' },
  { series_id: 'A', title: '探索城市废墟（注意安全）', desc: '废墟美学，感受历史痕迹', mood: '专注', cost: '2小时' },
  { series_id: 'A', title: '体验射箭或攀岩体验课', desc: '挑战体能，释放压力', mood: '充满活力', cost: '2小时' },
  { series_id: 'A', title: '找一片草坪躺下看云', desc: '放空大脑，享受宁静', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '去迪士尼或游乐场玩', desc: '找回童心，尽情快乐', mood: '开心', cost: '1天' },
  { series_id: 'A', title: '参加志愿者活动', desc: '奉献爱心，收获感动', mood: '充实', cost: '半天' },
  { series_id: 'A', title: '坐轮渡或观光巴士看城市', desc: '换个视角看熟悉的地方', mood: '治愈', cost: '1小时' },
  { series_id: 'A', title: '去天文馆看星空投影', desc: '体验宇宙浩瀚，浪漫唯美', mood: '治愈', cost: '2小时' },
  { series_id: 'A', title: '体验卡丁车或碰碰车', desc: '速度与激情，释放压力', mood: '充满活力', cost: '1小时' },
  { series_id: 'A', title: '去郊外采摘当季水果', desc: '亲近自然，享受丰收喜悦', mood: '开心', cost: '半天' },
  { series_id: 'A', title: '逛独立设计品牌店', desc: '发现小众好物，提升品味', mood: '充实', cost: '1小时' },
  { series_id: 'A', title: '体验潜水或浮潜（室内也可）', desc: '探索水下世界，奇妙体验', mood: '充满活力', cost: '半天' },

  // ============================================================
  // 区块 2: B (改变人生的1000个传记)
  // ============================================================
  { series_id: 'B', title: '褚时健：从烟王到橙王', desc: '永不放弃', mood: '励志', cost: '15分钟' },
  { series_id: 'B', title: '玛丽·居里：两获诺奖', desc: '女性力量', mood: '励志', cost: '15分钟' },
  { series_id: 'B', title: '林肯：从失落到总统', desc: '坚韧不拔', mood: '励志', cost: '15分钟' },
  { series_id: 'B', title: '乔布斯：Stay Hungry', desc: '改变世界', mood: '搞钱', cost: '15分钟' },
  { series_id: 'B', title: '莫扎特：音乐神童', desc: '天才之路', mood: '文艺', cost: '15分钟' },
  { series_id: 'B', title: '甘地：非暴力抗争', desc: '和平力量', mood: '深思', cost: '15分钟' },
  { series_id: 'B', title: 'JK罗琳：从失业到富豪', desc: '坚持梦想', mood: '搞钱', cost: '15分钟' },
  { series_id: 'B', title: '埃隆·马斯克：疯狂梦想家', desc: '未来视角', mood: '搞钱', cost: '15分钟' },
  { series_id: 'B', title: '海伦·凯勒：假如给我三天光明', desc: '生命奇迹', mood: '励志', cost: '15分钟' },
  { series_id: 'B', title: '达芬奇：跨界天才', desc: '好奇心', mood: '文艺', cost: '15分钟' },

  // ============================================================
  // 区块 3: C (从0到1的1000个创业经)
  // ============================================================
  { series_id: 'C', title: '摆摊卖手冲咖啡', desc: '低成本创业', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '小红书宠物博主', desc: '内容变现', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '家庭烘焙私房', desc: '美食创业', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '二手书循环商店', desc: '环保创业', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '线上健身教练', desc: '知识付费', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '自制手工皂售卖', desc: '手工创业', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '社区团购团长', desc: '社群经济', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '摄影约拍', desc: '技能变现', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '课程分销', desc: '副业项目', mood: '搞钱', cost: '10分钟' },
  { series_id: 'C', title: '公众号流量主', desc: '文字变现', mood: '搞钱', cost: '10分钟' },

  // ============================================================
  // 区块 4: D (看完格局打开的1000部电影)
  // ============================================================
  { series_id: 'D', title: '肖申克的救赎', desc: '希望与自由', mood: '深思', cost: '2小时' },
  { series_id: 'D', title: '教父', desc: '家族与权力', mood: '搞钱', cost: '2.5小时' },
  { series_id: 'D', title: '阿甘正传', desc: '傻人有傻福', mood: '治愈', cost: '2小时' },
  { series_id: 'D', title: '霸王别姬', desc: '时代悲歌', mood: '深思', cost: '2.5小时' },
  { series_id: 'D', title: '盗梦空间', desc: '梦境与现实', mood: '搞钱', cost: '2小时' },
  { series_id: 'D', title: '星际穿越', desc: '爱与时间', mood: '深思', cost: '2.5小时' },
  { series_id: 'D', title: '美丽人生', desc: '父爱如山', mood: '治愈', cost: '2小时' },
  { series_id: 'D', title: '这个杀手不太冷', desc: '温暖救赎', mood: '治愈', cost: '1.5小时' },
  { series_id: 'D', title: '海上钢琴师', desc: '孤独与选择', mood: '文艺', cost: '2小时' },
  { series_id: 'D', title: '三傻大闹宝莱坞', desc: '教育反思', mood: '启发', cost: '2.5小时' },

  // ============================================================
  // 区块 5: E (值得反复读的1000本书 - 已统一格式)
  // ============================================================
  // ========== 文学 ==========
  { series_id: 'E', title: '百年孤独', desc: '魔幻现实主义巅峰之作，讲述了布恩迪亚家族七代人的传奇故事，马孔多小镇的兴衰史映射了整个拉美大陆的百年变迁。', mood: '文学', cost: '📖 阅读', author: '加西亚·马尔克斯', rating: '9.3', publish_year: '1967年', genre: '文学' },
  { series_id: 'E', title: '三体', desc: '中国科幻文学的里程碑之作，从文革时期的红岸基地出发，揭示了宇宙文明间的黑暗森林法则。', mood: '文学', cost: '📖 阅读', author: '刘慈欣', rating: '8.9', publish_year: '2008年', genre: '文学' },
  { series_id: 'E', title: '围城', desc: '一部充满智慧与幽默的讽刺杰作，深刻揭示了现代知识分子的精神困境。', mood: '文学', cost: '📖 阅读', author: '钱钟书', rating: '9.0', publish_year: '1947年', genre: '文学' },
  { series_id: 'E', title: '边城', desc: '中国现代文学中最纯净的田园牧歌，湘西茶峒小镇上少女翠翠的爱情故事。', mood: '文学', cost: '📖 阅读', author: '沈从文', rating: '8.7', publish_year: '1934年', genre: '文学' },
  { series_id: 'E', title: '白鹿原', desc: '渭河平原上白、鹿两家的恩怨纠葛，浓缩了中国近现代半个多世纪的历史变迁。', mood: '文学', cost: '📖 阅读', author: '陈忠实', rating: '9.2', publish_year: '1993年', genre: '文学' },
  { series_id: 'E', title: '尘埃落定', desc: '通过土司家族"傻子"少爷的视角，讲述了藏族土司制度的兴衰与消亡。', mood: '文学', cost: '📖 阅读', author: '阿来', rating: '8.9', publish_year: '1998年', genre: '文学' },
  { series_id: 'E', title: '黄金时代', desc: '以知青岁月为背景，展现了荒诞年代里对自由与真实的执着追求。', mood: '文学', cost: '📖 阅读', author: '王小波', rating: '8.9', publish_year: '1994年', genre: '文学' },
  { series_id: 'E', title: '白夜行', desc: '东野圭吾的巅峰之作，一段令人窒息的爱与罪。', mood: '文学', cost: '📖 阅读', author: '东野圭吾', rating: '9.2', publish_year: '1999年', genre: '文学' },
  { series_id: 'E', title: '嫌疑人X的献身', desc: '将爱情与推理完美融合，最纯粹的爱可以让人献出一切。', mood: '文学', cost: '📖 阅读', author: '东野圭吾', rating: '9.0', publish_year: '2005年', genre: '文学' },
  { series_id: 'E', title: '1984', desc: '反乌托邦文学的经典之作，对权力、真理与自由的思考至今仍有强烈的现实意义。', mood: '文学', cost: '📖 阅读', author: '乔治·奥威尔', rating: '9.4', publish_year: '1949年', genre: '文学' },
  { series_id: 'E', title: '动物农场', desc: '一部用动物寓言写成的政治讽刺经典。', mood: '文学', cost: '📖 阅读', author: '乔治·奥威尔', rating: '9.3', publish_year: '1945年', genre: '文学' },
  { series_id: 'E', title: '局外人', desc: '存在主义文学的奠基之作，揭示了社会对"不合规矩"之人的排斥与审判。', mood: '文学', cost: '📖 阅读', author: '加缪', rating: '9.1', publish_year: '1942年', genre: '文学' },
  { series_id: 'E', title: '鼠疫', desc: '一部关于疫情下人性与反抗的哲理小说。', mood: '文学', cost: '📖 阅读', author: '加缪', rating: '8.9', publish_year: '1947年', genre: '文学' },
  { series_id: 'E', title: '灿烂千阳', desc: '通过阿富汗两位女性的故事，展现了战争阴影下女性的苦难与坚韧。', mood: '文学', cost: '📖 阅读', author: '卡勒德·胡赛尼', rating: '8.8', publish_year: '2007年', genre: '文学' },
  { series_id: 'E', title: '挪威的森林', desc: '村上春树最畅销的纯爱小说，一段关于青春、爱情与死亡的忧伤记忆。', mood: '文学', cost: '📖 阅读', author: '村上春树', rating: '8.7', publish_year: '1987年', genre: '文学' },
  { series_id: 'E', title: '海边的卡夫卡', desc: '一部充满隐喻与奇幻色彩的成长小说。', mood: '文学', cost: '📖 阅读', author: '村上春树', rating: '8.5', publish_year: '2002年', genre: '文学' },
  { series_id: 'E', title: '魔戒', desc: '现代奇幻文学的奠基之作。', mood: '文学', cost: '📖 阅读', author: '托尔金', rating: '9.0', publish_year: '1954年', genre: '文学' },
  { series_id: 'E', title: '傲慢与偏见', desc: '英国文学史上最受欢迎的爱情小说之一。', mood: '文学', cost: '📖 阅读', author: '简·奥斯汀', rating: '9.0', publish_year: '1813年', genre: '文学' },
  { series_id: 'E', title: '简爱', desc: '一部追求女性独立与尊严的经典之作。', mood: '文学', cost: '📖 阅读', author: '夏洛蒂·勃朗特', rating: '8.7', publish_year: '1847年', genre: '文学' },
  { series_id: 'E', title: '呼啸山庄', desc: '一部充满暴力与激情的哥特式爱情悲剧。', mood: '文学', cost: '📖 阅读', author: '艾米莉·勃朗特', rating: '8.8', publish_year: '1847年', genre: '文学' },
  { series_id: 'E', title: '悲惨世界', desc: '法国文学史上最宏大的社会画卷之一。', mood: '文学', cost: '📖 阅读', author: '雨果', rating: '9.1', publish_year: '1862年', genre: '文学' },
  { series_id: 'E', title: '战争与和平', desc: '文学史上最伟大的小说之一。', mood: '文学', cost: '📖 阅读', author: '托尔斯泰', rating: '9.5', publish_year: '1869年', genre: '文学' },
  { series_id: 'E', title: '安娜·卡列尼娜', desc: '探讨爱情、婚姻与社会道德的巨著。', mood: '文学', cost: '📖 阅读', author: '托尔斯泰', rating: '9.3', publish_year: '1877年', genre: '文学' },
  { series_id: 'E', title: '罪与罚', desc: '深入探讨人性、罪恶与救赎的心理小说巅峰。', mood: '文学', cost: '📖 阅读', author: '陀思妥耶夫斯基', rating: '9.2', publish_year: '1866年', genre: '文学' },
  { series_id: 'E', title: '卡拉马佐夫兄弟', desc: '陀思妥耶夫斯基最后的巅峰之作。', mood: '文学', cost: '📖 阅读', author: '陀思妥耶夫斯基', rating: '9.4', publish_year: '1880年', genre: '文学' },
  { series_id: 'E', title: '大师与玛格丽特', desc: '将魔幻与现实完美融合的讽刺杰作。', mood: '文学', cost: '📖 阅读', author: '布尔加科夫', rating: '9.1', publish_year: '1967年', genre: '文学' },
  { series_id: 'E', title: '红与黑', desc: '法国现实主义文学的开山之作。', mood: '文学', cost: '📖 阅读', author: '司汤达', rating: '8.9', publish_year: '1830年', genre: '文学' },
  { series_id: 'E', title: '飘', desc: '美国文学史上最受欢迎的小说之一。', mood: '文学', cost: '📖 阅读', author: '玛格丽特·米切尔', rating: '9.3', publish_year: '1936年', genre: '文学' },
  { series_id: 'E', title: '老人与海', desc: '海明威最具代表性的作品，展现了人类不屈不挠的精神力量。', mood: '文学', cost: '📖 阅读', author: '海明威', rating: '8.5', publish_year: '1952年', genre: '文学' },
  { series_id: 'E', title: '基督山伯爵', desc: '一部关于复仇与正义的经典通俗小说。', mood: '文学', cost: '📖 阅读', author: '大仲马', rating: '9.0', publish_year: '1844年', genre: '文学' },
  { series_id: 'E', title: '骆驼祥子', desc: '北平车夫祥子三次买车三次失去的悲剧人生。', mood: '文学', cost: '📖 阅读', author: '老舍', rating: '8.8', publish_year: '1936年', genre: '文学' },
  { series_id: 'E', title: '四世同堂', desc: '一部描写抗战时期北平市民生活的长篇巨著。', mood: '文学', cost: '📖 阅读', author: '老舍', rating: '8.9', publish_year: '1949年', genre: '文学' },
  { series_id: 'E', title: '寒夜', desc: '巴金最后的长篇小说，也是一部深刻的社会悲剧。', mood: '文学', cost: '📖 阅读', author: '巴金', rating: '8.1', publish_year: '1947年', genre: '文学' },
  { series_id: 'E', title: '家', desc: '巴金代表作《激流三部曲》之首。', mood: '文学', cost: '📖 阅读', author: '巴金', rating: '8.4', publish_year: '1931年', genre: '文学' },
  { series_id: 'E', title: '呐喊', desc: '中国现代小说的奠基之作。', mood: '文学', cost: '📖 阅读', author: '鲁迅', rating: '9.2', publish_year: '1923年', genre: '文学' },
  { series_id: 'E', title: '彷徨', desc: '鲁迅第二部小说集。', mood: '文学', cost: '📖 阅读', author: '鲁迅', rating: '8.9', publish_year: '1926年', genre: '文学' },
  { series_id: 'E', title: '天龙八部', desc: '金庸武侠巅峰之作。', mood: '文学', cost: '📖 阅读', author: '金庸', rating: '9.2', publish_year: '1963年', genre: '文学' },
  { series_id: 'E', title: '射雕英雄传', desc: '金庸武侠经典，郭靖黄蓉的爱情与成长。', mood: '文学', cost: '📖 阅读', author: '金庸', rating: '9.0', publish_year: '1957年', genre: '文学' },
  { series_id: 'E', title: '活着', desc: '生命的坚韧。', mood: '文学', cost: '📖 阅读', author: '余华', rating: '9.4', publish_year: '1993年', genre: '文学' },
  { series_id: 'E', title: '小王子', desc: '纯真与爱。', mood: '文学', cost: '📖 阅读', author: '圣埃克苏佩里', rating: '9.1', publish_year: '1943年', genre: '文学' },
  { series_id: 'E', title: '解忧杂货店', desc: '温情推理。', mood: '文学', cost: '📖 阅读', author: '东野圭吾', rating: '8.5', publish_year: '2012年', genre: '文学' },
  { series_id: 'E', title: '追风筝的人', desc: '救赎与友谊。', mood: '文学', cost: '📖 阅读', author: '卡勒德·胡赛尼', rating: '8.9', publish_year: '2003年', genre: '文学' },
  { series_id: 'E', title: '平凡的世界', desc: '奋斗人生。', mood: '文学', cost: '📖 阅读', author: '路遥', rating: '9.0', publish_year: '1986年', genre: '文学' },
  { series_id: 'E', title: '瓦尔登湖', desc: '极简生活。', mood: '文学', cost: '📖 阅读', author: '梭罗', rating: '8.4', publish_year: '1854年', genre: '文学' },

  // ========== 科幻 ==========
  { series_id: 'E', title: '三体2：黑暗森林', desc: '提出了震撼人心的"黑暗森林"宇宙社会学理论。', mood: '科幻', cost: '📖 阅读', author: '刘慈欣', rating: '9.3', publish_year: '2008年', genre: '科幻' },
  { series_id: 'E', title: '三体3：死神永生', desc: '将科幻文学的格局推向了前所未有的高度。', mood: '科幻', cost: '📖 阅读', author: '刘慈欣', rating: '9.2', publish_year: '2010年', genre: '科幻' },
  { series_id: 'E', title: '球状闪电', desc: '刘慈欣的早期科幻杰作。', mood: '科幻', cost: '📖 阅读', author: '刘慈欣', rating: '8.5', publish_year: '2005年', genre: '科幻' },
  { series_id: 'E', title: '流浪地球', desc: '人类带着地球一起逃离太阳系，踏上星际流浪。', mood: '科幻', cost: '📖 阅读', author: '刘慈欣', rating: '8.6', publish_year: '2000年', genre: '科幻' },
  { series_id: 'E', title: '银河帝国：基地', desc: '心理史学家谢顿预见了银河帝国的衰亡。', mood: '科幻', cost: '📖 阅读', author: '艾萨克·阿西莫夫', rating: '9.1', publish_year: '1951年', genre: '科幻' },
  { series_id: 'E', title: '沙丘', desc: '科幻史上的里程碑之作，宏大的宇宙史诗。', mood: '科幻', cost: '📖 阅读', author: '弗兰克·赫伯特', rating: '8.7', publish_year: '1965年', genre: '科幻' },
  { series_id: 'E', title: '海伯利安', desc: '一部融合了诗歌、宗教与硬核科幻的巨著。', mood: '科幻', cost: '📖 阅读', author: '丹·西蒙斯', rating: '8.8', publish_year: '1989年', genre: '科幻' },
  { series_id: 'E', title: '安德的游戏', desc: '天才少年安德的成长故事。', mood: '科幻', cost: '📖 阅读', author: '奥森·斯科特·卡德', rating: '8.7', publish_year: '1985年', genre: '科幻' },
  { series_id: 'E', title: '沙丘救世主', desc: '《沙丘》续集，保罗·厄崔迪成为皇帝后面临的危机。', mood: '科幻', cost: '📖 阅读', author: '弗兰克·赫伯特', rating: '8.2', publish_year: '1969年', genre: '科幻' },
  { series_id: 'E', title: '沙丘之子', desc: '沙丘系列第三部。', mood: '科幻', cost: '📖 阅读', author: '弗兰克·赫伯特', rating: '8.3', publish_year: '1976年', genre: '科幻' },
  { series_id: 'E', title: '基地与帝国', desc: '基地系列第二部。', mood: '科幻', cost: '📖 阅读', author: '艾萨克·阿西莫夫', rating: '8.8', publish_year: '1952年', genre: '科幻' },
  { series_id: 'E', title: '第二基地', desc: '基地三部曲终结篇。', mood: '科幻', cost: '📖 阅读', author: '艾萨克·阿西莫夫', rating: '8.9', publish_year: '1953年', genre: '科幻' },
  { series_id: 'E', title: '银河系搭车客指南', desc: '一部充满英式幽默的科幻喜剧。', mood: '科幻', cost: '📖 阅读', author: '道格拉斯·亚当斯', rating: '8.6', publish_year: '1979年', genre: '科幻' },
  { series_id: 'E', title: '神经漫游者', desc: '赛博朋克流派的奠基之作。', mood: '科幻', cost: '📖 阅读', author: '威廉·吉布森', rating: '8.4', publish_year: '1984年', genre: '科幻' },
  { series_id: 'E', title: '仿生人会梦见电子羊吗？', desc: '《银翼杀手》的原著小说。', mood: '科幻', cost: '📖 阅读', author: '菲利普·迪克', rating: '8.3', publish_year: '1968年', genre: '科幻' },
  { series_id: 'E', title: '尤比克', desc: '在死亡与冷冻复苏的未来世界中，现实与幻觉交织。', mood: '科幻', cost: '📖 阅读', author: '菲利普·迪克', rating: '8.1', publish_year: '1969年', genre: '科幻' },
  { series_id: 'E', title: '高堡奇人', desc: '假设轴心国赢得二战。', mood: '科幻', cost: '📖 阅读', author: '菲利普·迪克', rating: '8.2', publish_year: '1962年', genre: '科幻' },
  { series_id: 'E', title: '时间机器', desc: '科幻文学的经典开山之作。', mood: '科幻', cost: '📖 阅读', author: 'H.G.威尔斯', rating: '8.2', publish_year: '1895年', genre: '科幻' },
  { series_id: 'E', title: '世界大战', desc: '火星人入侵地球的经典故事。', mood: '科幻', cost: '📖 阅读', author: 'H.G.威尔斯', rating: '8.1', publish_year: '1898年', genre: '科幻' },
  { series_id: 'E', title: '童年的终结', desc: '外星人降临地球帮助人类实现和平。', mood: '科幻', cost: '📖 阅读', author: '阿瑟·克拉克', rating: '8.3', publish_year: '1953年', genre: '科幻' },

  // ========== 历史 ==========
  { series_id: 'E', title: '史记', desc: '中国历史上最伟大的史学著作。', mood: '历史', cost: '📖 阅读', author: '司马迁', rating: '9.2', publish_year: '公元前1世纪', genre: '历史' },
  { series_id: 'E', title: '资治通鉴', desc: '中国历史上规模最大的编年体通史。', mood: '历史', cost: '📖 阅读', author: '司马光', rating: '9.0', publish_year: '1084年', genre: '历史' },
  { series_id: 'E', title: '人类简史', desc: '认知革命。', mood: '历史', cost: '📖 阅读', author: '尤瓦尔·赫拉利', rating: '9.1', publish_year: '2012年', genre: '历史' },
  { series_id: 'E', title: '未来简史', desc: '探讨了在21世纪，人类将如何追求"永生、幸福、神性"。', mood: '历史', cost: '📖 阅读', author: '尤瓦尔·赫拉利', rating: '8.4', publish_year: '2015年', genre: '历史' },
  { series_id: 'E', title: '枪炮、病菌与钢铁', desc: '一部解释人类社会发展不平等根源的宏大著作。', mood: '历史', cost: '📖 阅读', author: '贾雷德·戴蒙德', rating: '8.9', publish_year: '1997年', genre: '历史' },
  { series_id: 'E', title: '万历十五年', desc: '一部改变中国人历史观的名著。', mood: '历史', cost: '📖 阅读', author: '黄仁宇', rating: '8.5', publish_year: '1982年', genre: '历史' },
  { series_id: 'E', title: '中国大历史', desc: '以宏观的视野审视中国历史。', mood: '历史', cost: '📖 阅读', author: '黄仁宇', rating: '8.0', publish_year: '1991年', genre: '历史' },
  { series_id: 'E', title: '全球通史', desc: '一部打破欧洲中心论的世界史经典。', mood: '历史', cost: '📖 阅读', author: '斯塔夫里阿诺斯', rating: '8.7', publish_year: '1970年', genre: '历史' },
  { series_id: 'E', title: '中国近代史', desc: '一部简洁而深刻的近代史著作。', mood: '历史', cost: '📖 阅读', author: '蒋廷黻', rating: '8.6', publish_year: '1938年', genre: '历史' },
  { series_id: 'E', title: '剑桥中国史', desc: '西方学术界最具权威的中国通史之一。', mood: '历史', cost: '📖 阅读', author: '费正清等', rating: '8.8', publish_year: '1978年', genre: '历史' },
  { series_id: 'E', title: '丝绸之路', desc: '一部从全球视角重新解读世界史的著作。', mood: '历史', cost: '📖 阅读', author: '彼得·弗兰科潘', rating: '8.2', publish_year: '2015年', genre: '历史' },
  { series_id: 'E', title: '大国的兴衰', desc: '一部关于国际政治经济格局的经典之作。', mood: '历史', cost: '📖 阅读', author: '保罗·肯尼迪', rating: '8.1', publish_year: '1987年', genre: '历史' },
  { series_id: 'E', title: '罗马帝国衰亡史', desc: '西方史学史上的不朽巨著。', mood: '历史', cost: '📖 阅读', author: '爱德华·吉本', rating: '8.7', publish_year: '1776年', genre: '历史' },
  { series_id: 'E', title: '法国大革命讲稿', desc: '深入分析了法国大革命的起因、过程及其影响。', mood: '历史', cost: '📖 阅读', author: '阿克顿勋爵', rating: '8.0', publish_year: '1900年', genre: '历史' },
  { series_id: 'E', title: '历史研究', desc: '汤因比文明史观的代表作。', mood: '历史', cost: '📖 阅读', author: '汤因比', rating: '8.3', publish_year: '1934年', genre: '历史' },
  { series_id: 'E', title: '叫魂', desc: '以1768年叫魂妖术大恐慌为切入点。', mood: '历史', cost: '📖 阅读', author: '孔飞力', rating: '8.9', publish_year: '1990年', genre: '历史' },
  { series_id: 'E', title: '乌合之众', desc: '大众心理。', mood: '历史', cost: '📖 阅读', author: '古斯塔夫·勒庞', rating: '8.3', publish_year: '1895年', genre: '历史' },

  // ========== 经济 ==========
  { series_id: 'E', title: '穷查理宝典', desc: '投资大师查理·芒格智慧箴言的集大成之作。', mood: '经济', cost: '📖 阅读', author: '查理·芒格', rating: '8.9', publish_year: '2005年', genre: '经济' },
  { series_id: 'E', title: '聪明的投资者', desc: '价值投资的开山之作。', mood: '经济', cost: '📖 阅读', author: '本杰明·格雷厄姆', rating: '8.8', publish_year: '1949年', genre: '经济' },
  { series_id: 'E', title: '国富论', desc: '现代经济学的奠基之作。', mood: '经济', cost: '📖 阅读', author: '亚当·斯密', rating: '8.5', publish_year: '1776年', genre: '经济' },
  { series_id: 'E', title: '经济学原理', desc: '全球最受欢迎的经济学入门教材。', mood: '经济', cost: '📖 阅读', author: '曼昆', rating: '8.4', publish_year: '1998年', genre: '经济' },
  { series_id: 'E', title: '黑天鹅', desc: '一部关于不确定性、风险与随机性的经典著作。', mood: '经济', cost: '📖 阅读', author: '纳西姆·塔勒布', rating: '8.2', publish_year: '2007年', genre: '经济' },
  { series_id: 'E', title: '反脆弱', desc: '提出了"反脆弱"这一全新概念。', mood: '经济', cost: '📖 阅读', author: '纳西姆·塔勒布', rating: '8.1', publish_year: '2012年', genre: '经济' },
  { series_id: 'E', title: '原则', desc: '桥水基金创始人瑞·达利欧的人生与工作原则总结。', mood: '经济', cost: '📖 阅读', author: '瑞·达利欧', rating: '8.4', publish_year: '2017年', genre: '经济' },
  { series_id: 'E', title: '创新者的窘境', desc: '提出了"颠覆性创新"理论。', mood: '经济', cost: '📖 阅读', author: '克莱顿·克里斯坦森', rating: '8.6', publish_year: '1997年', genre: '经济' },
  { series_id: 'E', title: '从优秀到卓越', desc: '总结了从"优秀"到"卓越"的关键要素。', mood: '经济', cost: '📖 阅读', author: '吉姆·柯林斯', rating: '8.3', publish_year: '2001年', genre: '经济' },
  { series_id: 'E', title: '高效能人士的七个习惯', desc: '一部影响无数人的个人成长经典。', mood: '经济', cost: '📖 阅读', author: '史蒂芬·柯维', rating: '8.6', publish_year: '1989年', genre: '经济' },
  { series_id: 'E', title: '影响力', desc: '揭示了六大影响力原则。', mood: '经济', cost: '📖 阅读', author: '罗伯特·西奥迪尼', rating: '8.6', publish_year: '1984年', genre: '经济' },
  { series_id: 'E', title: '思考，快与慢', desc: '诺贝尔经济学奖得主卡尼曼的代表作。', mood: '经济', cost: '📖 阅读', author: '丹尼尔·卡尼曼', rating: '8.5', publish_year: '2011年', genre: '经济' },
  { series_id: 'E', title: '穷爸爸富爸爸', desc: '一部改变无数人理财观念的畅销书。', mood: '经济', cost: '📖 阅读', author: '罗伯特·清崎', rating: '8.2', publish_year: '1997年', genre: '经济' },
  { series_id: 'E', title: '小狗钱钱', desc: '一本写给儿童的理财启蒙书。', mood: '经济', cost: '📖 阅读', author: '博多·舍费尔', rating: '8.6', publish_year: '1999年', genre: '经济' },
  { series_id: 'E', title: '投资中最简单的事', desc: '中国知名基金经理邱国鹭的投资心得。', mood: '经济', cost: '📖 阅读', author: '邱国鹭', rating: '8.4', publish_year: '2014年', genre: '经济' },
  { series_id: 'E', title: '学会提问', desc: '批判思维。', mood: '经济', cost: '📖 阅读', author: '尼尔·布朗', rating: '8.6', publish_year: '2012年', genre: '经济' },

  // ========== 哲学 ==========
  { series_id: 'E', title: '西方哲学史', desc: '诺贝尔文学奖得主罗素的哲学史经典。', mood: '哲学', cost: '📖 阅读', author: '罗素', rating: '8.5', publish_year: '1945年', genre: '哲学' },
  { series_id: 'E', title: '中国哲学简史', desc: '中国哲学入门的最佳选择。', mood: '哲学', cost: '📖 阅读', author: '冯友兰', rating: '8.8', publish_year: '1948年', genre: '哲学' },
  { series_id: 'E', title: '论语', desc: '儒家思想的奠基之作。', mood: '哲学', cost: '📖 阅读', author: '孔子', rating: '9.1', publish_year: '公元前5世纪', genre: '哲学' },
  { series_id: 'E', title: '道德经', desc: '道家哲学的最高经典。', mood: '哲学', cost: '📖 阅读', author: '老子', rating: '9.2', publish_year: '公元前4世纪', genre: '哲学' },
  { series_id: 'E', title: '庄子', desc: '道家思想的瑰宝。', mood: '哲学', cost: '📖 阅读', author: '庄子', rating: '9.0', publish_year: '公元前4世纪', genre: '哲学' },
  { series_id: 'E', title: '理想国', desc: '西方政治哲学的奠基之作。', mood: '哲学', cost: '📖 阅读', author: '柏拉图', rating: '9.0', publish_year: '公元前4世纪', genre: '哲学' },
  { series_id: 'E', title: '第二性', desc: '西方女性主义理论的奠基之作。', mood: '哲学', cost: '📖 阅读', author: '西蒙·波伏娃', rating: '8.8', publish_year: '1949年', genre: '哲学' },
  { series_id: 'E', title: '规训与惩罚', desc: '揭示了现代社会如何通过规训机制控制个体。', mood: '哲学', cost: '📖 阅读', author: '米歇尔·福柯', rating: '8.6', publish_year: '1975年', genre: '哲学' },
  { series_id: 'E', title: '疯癫与文明', desc: '通过梳理西方社会对待疯癫的态度变迁。', mood: '哲学', cost: '📖 阅读', author: '米歇尔·福柯', rating: '8.4', publish_year: '1961年', genre: '哲学' },
  { series_id: 'E', title: '存在与时间', desc: '20世纪最重要的哲学著作之一。', mood: '哲学', cost: '📖 阅读', author: '海德格尔', rating: '8.3', publish_year: '1927年', genre: '哲学' },
  { series_id: 'E', title: '纯粹理性批判', desc: '西方哲学史上最重要的著作之一。', mood: '哲学', cost: '📖 阅读', author: '康德', rating: '8.4', publish_year: '1781年', genre: '哲学' },
  { series_id: 'E', title: '尼各马可伦理学', desc: '西方伦理学史上最重要的著作之一。', mood: '哲学', cost: '📖 阅读', author: '亚里士多德', rating: '8.6', publish_year: '公元前4世纪', genre: '哲学' },
  { series_id: 'E', title: '沉默的大多数', desc: '王小波最具影响力的杂文集。', mood: '哲学', cost: '📖 阅读', author: '王小波', rating: '8.9', publish_year: '1997年', genre: '哲学' },
  { series_id: 'E', title: '一只特立独行的猪', desc: '王小波杂文的经典之作。', mood: '哲学', cost: '📖 阅读', author: '王小波', rating: '8.6', publish_year: '1996年', genre: '哲学' },
  { series_id: 'E', title: '人生的智慧', desc: '叔本华最受欢迎的著作。', mood: '哲学', cost: '📖 阅读', author: '叔本华', rating: '8.3', publish_year: '1851年', genre: '哲学' },
  { series_id: 'E', title: '查拉图斯特拉如是说', desc: '尼采最具代表性的哲学著作。', mood: '哲学', cost: '📖 阅读', author: '尼采', rating: '8.3', publish_year: '1885年', genre: '哲学' },
  { series_id: 'E', title: '权力意志', desc: '尼采哲学思想的集大成之作。', mood: '哲学', cost: '📖 阅读', author: '尼采', rating: '8.0', publish_year: '1901年', genre: '哲学' },
  { series_id: 'E', title: '论自由', desc: '西方自由主义理论的经典文献。', mood: '哲学', cost: '📖 阅读', author: '约翰·密尔', rating: '8.5', publish_year: '1859年', genre: '哲学' },
  { series_id: 'E', title: '社会契约论', desc: '"人生而自由，却无往不在枷锁之中"。', mood: '哲学', cost: '📖 阅读', author: '卢梭', rating: '8.2', publish_year: '1762年', genre: '哲学' },
  { series_id: 'E', title: '给青年的十二封信', desc: '美学大师朱光潜为青年读者写作的十二封书信。', mood: '哲学', cost: '📖 阅读', author: '朱光潜', rating: '8.4', publish_year: '1929年', genre: '哲学' },

  // ========== 艺术 ==========
  { series_id: 'E', title: '艺术的故事', desc: '全球最畅销的艺术史入门读物。', mood: '艺术', cost: '📖 阅读', author: '贡布里希', rating: '9.2', publish_year: '1950年', genre: '艺术' },
  { series_id: 'E', title: '现代艺术150年', desc: '一部让现代艺术变得容易理解的精彩读本。', mood: '艺术', cost: '📖 阅读', author: '威尔·贡培兹', rating: '8.7', publish_year: '2012年', genre: '艺术' },
  { series_id: 'E', title: '美的历程', desc: '中国美学史上最具影响力的著作之一。', mood: '艺术', cost: '📖 阅读', author: '李泽厚', rating: '8.8', publish_year: '1981年', genre: '艺术' },
  { series_id: 'E', title: '美学散步', desc: '一部充满诗意的中国美学随笔。', mood: '艺术', cost: '📖 阅读', author: '宗白华', rating: '8.5', publish_year: '1981年', genre: '艺术' },
  { series_id: 'E', title: '认识电影', desc: '全球最经典的电影入门教材。', mood: '艺术', cost: '📖 阅读', author: '路易斯·贾内梯', rating: '8.4', publish_year: '1972年', genre: '艺术' },
  { series_id: 'E', title: '电影批评', desc: '中国最具影响力的电影学者之一戴锦华的文集。', mood: '艺术', cost: '📖 阅读', author: '戴锦华', rating: '8.0', publish_year: '2004年', genre: '艺术' },
  { series_id: 'E', title: '艺术哲学', desc: '一部从社会学角度分析艺术的经典著作。', mood: '艺术', cost: '📖 阅读', author: '丹纳', rating: '8.3', publish_year: '1869年', genre: '艺术' },
  { series_id: 'E', title: '罗丹艺术论', desc: '雕塑大师罗丹与作家葛赛尔的对话录。', mood: '艺术', cost: '📖 阅读', author: '罗丹', rating: '8.1', publish_year: '1900年', genre: '艺术' },
  { series_id: 'E', title: '中国建筑史', desc: '中国建筑史研究的奠基之作。', mood: '艺术', cost: '📖 阅读', author: '梁思成', rating: '8.7', publish_year: '1955年', genre: '艺术' },
  { series_id: 'E', title: '图像中国建筑史', desc: '用英文为中国古建筑"立传"的经典著作。', mood: '艺术', cost: '📖 阅读', author: '梁思成', rating: '8.4', publish_year: '1984年', genre: '艺术' },
  { series_id: 'E', title: '书法有法', desc: '一部关于中国书法鉴赏与学习的实用指南。', mood: '艺术', cost: '📖 阅读', author: '孙晓云', rating: '8.1', publish_year: '2002年', genre: '艺术' },
  { series_id: 'E', title: '写给大家的中国美术史', desc: '蒋勋讲述中国美术发展史。', mood: '艺术', cost: '📖 阅读', author: '蒋勋', rating: '8.5', publish_year: '1990年', genre: '艺术' },
  { series_id: 'E', title: '写给大家的西方美术史', desc: '系统介绍了西方美术的发展历程。', mood: '艺术', cost: '📖 阅读', author: '蒋勋', rating: '8.4', publish_year: '2004年', genre: '艺术' },
  { series_id: 'E', title: '听音乐', desc: '一部系统而通俗的音乐欣赏入门教材。', mood: '艺术', cost: '📖 阅读', author: '罗杰·凯密恩', rating: '8.3', publish_year: '2011年', genre: '艺术' },
  { series_id: 'E', title: '古典音乐欣赏入门', desc: '为古典音乐入门者编写的指南。', mood: '艺术', cost: '📖 阅读', author: '杨燕迪', rating: '8.1', publish_year: '2010年', genre: '艺术' },
  { series_id: 'E', title: '看电影的艺术', desc: '一本系统介绍电影视听语言的教材。', mood: '艺术', cost: '📖 阅读', author: '约瑟夫·M·博格斯', rating: '8.2', publish_year: '2000年', genre: '艺术' },
  { series_id: 'E', title: '设计中的设计', desc: '"设计不是一种技能，而是感知世界的方式"。', mood: '艺术', cost: '📖 阅读', author: '原研哉', rating: '8.6', publish_year: '2003年', genre: '艺术' },
  { series_id: 'E', title: '写给大家的设计书', desc: '一本经典的设计入门读物。', mood: '艺术', cost: '📖 阅读', author: '罗宾·威廉姆斯', rating: '8.2', publish_year: '1994年', genre: '艺术' },
  { series_id: 'E', title: '艺术与视知觉', desc: '一部从心理学角度分析视觉艺术的经典著作。', mood: '艺术', cost: '📖 阅读', author: '阿恩海姆', rating: '8.0', publish_year: '1954年', genre: '艺术' },

  // ========== 科普 ==========
  { series_id: 'E', title: '时间简史', desc: '一部向大众普及宇宙学的科普经典。', mood: '科普', cost: '📖 阅读', author: '史蒂芬·霍金', rating: '8.6', publish_year: '1988年', genre: '科普' },
  { series_id: 'E', title: '万物简史', desc: '一部用幽默笔触书写的科学史。', mood: '科普', cost: '📖 阅读', author: '比尔·布莱森', rating: '8.3', publish_year: '2003年', genre: '科普' },
  { series_id: 'E', title: '自私的基因', desc: '道金斯提出了"自私的基因"理论。', mood: '科普', cost: '📖 阅读', author: '理查德·道金斯', rating: '8.5', publish_year: '1976年', genre: '科普' },
  { series_id: 'E', title: '生命是什么', desc: '从物理学角度探讨生命的本质与遗传机制。', mood: '科普', cost: '📖 阅读', author: '薛定谔', rating: '8.4', publish_year: '1944年', genre: '科普' },
  { series_id: 'E', title: '双螺旋', desc: 'DNA双螺旋结构发现者之一沃森的回忆录。', mood: '科普', cost: '📖 阅读', author: '詹姆斯·沃森', rating: '8.1', publish_year: '1968年', genre: '科普' },
  { series_id: 'E', title: '数学之美', desc: '一部将数学与信息科学结合起来的科普佳作。', mood: '科普', cost: '📖 阅读', author: '吴军', rating: '8.6', publish_year: '2012年', genre: '科普' },
  { series_id: 'E', title: '浪潮之巅', desc: '一部关于IT产业历史的经典著作。', mood: '科普', cost: '📖 阅读', author: '吴军', rating: '8.5', publish_year: '2011年', genre: '科普' },
  { series_id: 'E', title: '全球科技通史', desc: '系统梳理了科技发展的全貌。', mood: '科普', cost: '📖 阅读', author: '吴军', rating: '8.3', publish_year: '2018年', genre: '科普' },
  { series_id: 'E', title: '智能时代', desc: '吴军对人工智能时代的系统思考。', mood: '科普', cost: '📖 阅读', author: '吴军', rating: '8.0', publish_year: '2016年', genre: '科普' },
  { series_id: 'E', title: '密码故事', desc: '一部关于密码学历史的科普著作。', mood: '科普', cost: '📖 阅读', author: '西蒙·辛格', rating: '8.2', publish_year: '1999年', genre: '科普' },
  { series_id: 'E', title: '上帝掷骰子吗', desc: '一部关于量子力学的通俗科普读物。', mood: '科普', cost: '📖 阅读', author: '曹天元', rating: '8.6', publish_year: '2006年', genre: '科普' },
  { series_id: 'E', title: '从一到无穷大', desc: '一部经典的科普名著。', mood: '科普', cost: '📖 阅读', author: '乔治·伽莫夫', rating: '8.4', publish_year: '1947年', genre: '科普' },
  { series_id: 'E', title: '宇宙简史', desc: '霍金为普通读者撰写的宇宙学入门书。', mood: '科普', cost: '📖 阅读', author: '史蒂芬·霍金', rating: '8.2', publish_year: '2005年', genre: '科普' },
  { series_id: 'E', title: '人类群星闪耀时', desc: '选取了人类历史上十四个决定性的瞬间。', mood: '科普', cost: '📖 阅读', author: '斯蒂芬·茨威格', rating: '8.7', publish_year: '1927年', genre: '科普' },
  { series_id: 'E', title: '寂静的春天', desc: '环境科学的奠基之作。', mood: '科普', cost: '📖 阅读', author: '蕾切尔·卡逊', rating: '8.6', publish_year: '1962年', genre: '科普' },
  { series_id: 'E', title: '物种起源', desc: '进化论的奠基之作。', mood: '科普', cost: '📖 阅读', author: '达尔文', rating: '8.7', publish_year: '1859年', genre: '科普' },
  { series_id: 'E', title: '人类宇宙', desc: 'BBC纪录片同名书籍。', mood: '科普', cost: '📖 阅读', author: '布赖恩·考克斯', rating: '8.0', publish_year: '2011年', genre: '科普' },

  // ============================================================
  // 区块 6: F (吃遍全国的1000道家常菜)
  // ============================================================
  { series_id: 'F', title: '番茄炒蛋', desc: '国民第一菜', mood: '温暖', cost: '15分钟' },
  { series_id: 'F', title: '红烧肉', desc: '妈妈的味道', mood: '温暖', cost: '1小时' },
  { series_id: 'F', title: '鱼香肉丝', desc: '酸甜辣', mood: '治愈', cost: '25分钟' },
  { series_id: 'F', title: '水煮鱼', desc: '麻辣鲜香', mood: '解压', cost: '30分钟' },
  { series_id: 'F', title: '宫保鸡丁', desc: '经典川菜', mood: '治愈', cost: '20分钟' },
  { series_id: 'F', title: '酸辣土豆丝', desc: '快手家常', mood: '温暖', cost: '10分钟' },
  { series_id: 'F', title: '糖醋排骨', desc: '酸甜可口', mood: '温暖', cost: '40分钟' },
  { series_id: 'F', title: '蒜蓉西兰花', desc: '健康素食', mood: '治愈', cost: '10分钟' },
  { series_id: 'F', title: '麻婆豆腐', desc: '下饭神器', mood: '解压', cost: '15分钟' },
  { series_id: 'F', title: '清蒸鲈鱼', desc: '原汁原味', mood: '温暖', cost: '20分钟' },

  // ============================================================
  // 区块 7: G (1000个极简生活妙招)
  // ============================================================
  { series_id: 'G', title: '用旧报纸擦玻璃', desc: '废物利用', mood: '清爽', cost: '5分钟' },
  { series_id: 'G', title: '一物多用：小苏打', desc: '清洁万能', mood: '搞钱', cost: '5分钟' },
  { series_id: 'G', title: '衣架变手机支架', desc: 'DIY', mood: '专注', cost: '2分钟' },
  { series_id: 'G', title: '冰箱除味用柠檬', desc: '天然除味', mood: '清爽', cost: '3分钟' },
  { series_id: 'G', title: '旧T恤做购物袋', desc: '环保', mood: '清爽', cost: '10分钟' },
  { series_id: 'G', title: '用咖啡渣做肥料', desc: '养花妙招', mood: '治愈', cost: '5分钟' },
  { series_id: 'G', title: '抽屉收纳用分隔板', desc: '整齐', mood: '清爽', cost: '15分钟' },
  { series_id: 'G', title: '白醋去除水垢', desc: '清洁', mood: '清爽', cost: '10分钟' },
  { series_id: 'G', title: '自制香薰蜡烛', desc: '仪式感', mood: '治愈', cost: '20分钟' },
  { series_id: 'G', title: '旧书变装饰品', desc: '文艺', mood: '文艺', cost: '10分钟' },

  // ============================================================
  // 区块 8: H (1000个周末去哪儿)
  // ============================================================
  { series_id: 'H', title: '本地植物园', desc: '亲近自然', mood: '治愈', cost: '半天' },
  { series_id: 'H', title: '城市美术馆', desc: '艺术熏陶', mood: '文艺', cost: '半天' },
  { series_id: 'H', title: '近郊露营地', desc: '星空夜色', mood: '治愈', cost: '1天' },
  { series_id: 'H', title: '古镇一日游', desc: '穿越时光', mood: '文艺', cost: '1天' },
  { series_id: 'H', title: '海洋馆', desc: '蓝色世界', mood: '治愈', cost: '半天' },
  { series_id: 'H', title: '博物馆', desc: '了解历史', mood: '搞钱', cost: '半天' },
  { series_id: 'H', title: '登山徒步', desc: '挑战自我', mood: '励志', cost: '1天' },
  { series_id: 'H', title: '湖边骑行', desc: '微风拂面', mood: '治愈', cost: '半天' },
  { series_id: 'H', title: '农场采摘', desc: '田园之乐', mood: '温暖', cost: '半天' },
  { series_id: 'H', title: '胡同Citywalk', desc: '城市探索', mood: '文艺', cost: '半天' },

  // ============================================================
  // 区块 9: I (1000个亲子美好时光 - 3-6岁亲子游戏)
  // ============================================================
  { series_id: 'I', title: '躲猫猫', desc: '培养客体永久性，建立安全感', mood: '开心', cost: '10分钟' },
  { series_id: 'I', title: '搭积木', desc: '锻炼手眼协调和空间想象力', mood: '专注', cost: '20分钟' },
  { series_id: 'I', title: '手指画', desc: '激发创造力，感受色彩', mood: '开心', cost: '15分钟' },
  { series_id: 'I', title: '角色扮演（过家家）', desc: '发展语言和社交能力', mood: '温暖', cost: '30分钟' },
  { series_id: 'I', title: '寻宝游戏', desc: '培养观察力和探索精神', mood: '充满活力', cost: '20分钟' },
  { series_id: 'I', title: '拼图游戏', desc: '提升专注力和逻辑思维', mood: '专注', cost: '15分钟' },
  { series_id: 'I', title: '传声筒', desc: '练习倾听和表达', mood: '开心', cost: '10分钟' },
  { series_id: 'I', title: '跳房子', desc: '锻炼大动作和平衡感', mood: '充满活力', cost: '15分钟' },
  { series_id: 'I', title: '老鹰捉小鸡', desc: '培养反应能力和团队合作', mood: '开心', cost: '20分钟' },
  { series_id: 'I', title: '模仿秀（Simon Says）', desc: '锻炼听指令和身体协调', mood: '开心', cost: '10分钟' },

  // ============================================================
  // 区块 10: J (1000个搞钱/省钱冷知识)
  // ============================================================
  { series_id: 'J', title: '信用卡积分换里程', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '超市晚间折扣时段', desc: '省钱', mood: '搞钱', cost: '1分钟' },
  { series_id: 'J', title: '二手平台出闲置', desc: '变现', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '团购优惠券叠加', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '基金定投策略', desc: '理财', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '话费套餐优化', desc: '省钱', mood: '搞钱', cost: '5分钟' },
  { series_id: 'J', title: '顺风车乘客', desc: '副业', mood: '搞钱', cost: '5分钟' },
  { series_id: 'J', title: '问卷调查赚积分', desc: '小钱', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '用购物返利APP', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '早起抢优惠券', desc: '省钱', mood: '搞钱', cost: '5分钟' },
];

// ======================= 数据初始化 =======================
export async function onRequest(context) {
  const { env } = context;

  try {
    // 1. 建表（单行 SQL，避免 D1 多行解析问题）
    await env.DB.prepare(
      'CREATE TABLE IF NOT EXISTS content_library (id INTEGER PRIMARY KEY AUTOINCREMENT, series_id TEXT NOT NULL, title TEXT NOT NULL, description TEXT, mood_tag TEXT, cost_time TEXT, author TEXT, rating TEXT, publish_year TEXT, genre TEXT, pushed INTEGER DEFAULT 0, push_date TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)'
    ).run();

    // 2. 检查是否已有数据
    const count = await env.DB.prepare('SELECT COUNT(*) as total FROM content_library').first();
    if (count && count.total > 0) {
      return new Response(JSON.stringify({
        message: `✅ 数据已存在，共 ${count.total} 条，无需重复初始化`,
        count: count.total
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. 统一处理所有数据（现在所有区块格式完全一致）
    const ALL_DATA = SEED_DATA.map(item => ({
      series_id: item.series_id,
      title: item.title,
      desc: item.desc,
      mood: item.mood,
      cost: item.cost,
      author: item.author || null,
      rating: item.rating || null,
      publish_year: item.publish_year || null,
      genre: item.genre || null
    }));

    // 4. 批量插入
    const stmt = env.DB.prepare(
      'INSERT INTO content_library (series_id, title, description, mood_tag, cost_time, author, rating, publish_year, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const batch = ALL_DATA.map(item =>
      stmt.bind(
        item.series_id,
        item.title,
        item.desc,
        item.mood,
        item.cost,
        item.author,
        item.rating,
        item.publish_year,
        item.genre
      )
    );
    await env.DB.batch(batch);

    return new Response(JSON.stringify({
      message: `✅ 数据初始化成功！共 ${ALL_DATA.length} 条`,
      totalCount: ALL_DATA.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: `❌ 初始化失败: ${error.message}`
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
