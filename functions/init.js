// functions/init.js
// 访问 /init 触发数据初始化（部署后只需访问一次）

// ---------- 100条测试数据 ----------
const SEED_DATA = [
  // 系列 A：不玩手机的1000件小事
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
  // 系列 B：改变人生的1000个传记
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
  // 系列 C：从0到1的1000个创业经
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
  // 系列 D：看完格局打开的1000部电影
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
  // 系列 E：值得反复读的1000本书
  { series_id: 'E', title: '活着', desc: '生命的坚韧', mood: '深思', cost: '3小时' },
  { series_id: 'E', title: '小王子', desc: '纯真与爱', mood: '治愈', cost: '1小时' },
  { series_id: 'E', title: '百年孤独', desc: '魔幻现实', mood: '文艺', cost: '5小时' },
  { series_id: 'E', title: '人类简史', desc: '认知革命', mood: '搞钱', cost: '4小时' },
  { series_id: 'E', title: '学会提问', desc: '批判思维', mood: '搞钱', cost: '2小时' },
  { series_id: 'E', title: '解忧杂货店', desc: '温情推理', mood: '治愈', cost: '2小时' },
  { series_id: 'E', title: '追风筝的人', desc: '救赎与友谊', mood: '深思', cost: '3小时' },
  { series_id: 'E', title: '乌合之众', desc: '大众心理', mood: '搞钱', cost: '2小时' },
  { series_id: 'E', title: '平凡的世界', desc: '奋斗人生', mood: '励志', cost: '6小时' },
  { series_id: 'E', title: '瓦尔登湖', desc: '极简生活', mood: '治愈', cost: '3小时' },
  // 系列 F：吃遍全国的1000道家常菜
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
  // 系列 G：1000个极简生活妙招
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
  // 系列 H：1000个周末去哪儿
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
  // 系列 I：1000个治愈内耗的瞬间
  { series_id: 'I', title: '听雨声白噪音', desc: '静心', mood: '治愈', cost: '5分钟' },
  { series_id: 'I', title: '看云朵变化', desc: '放空', mood: '治愈', cost: '10分钟' },
  { series_id: 'I', title: '深呼吸冥想', desc: '减压', mood: '治愈', cost: '5分钟' },
  { series_id: 'I', title: '写感恩日记', desc: '积极心态', mood: '治愈', cost: '10分钟' },
  { series_id: 'I', title: '泡一杯热茶', desc: '温暖自己', mood: '治愈', cost: '5分钟' },
  { series_id: 'I', title: '抱抱大树', desc: '接地气', mood: '治愈', cost: '3分钟' },
  { series_id: 'I', title: '画一幅涂鸦', desc: '释放情绪', mood: '治愈', cost: '15分钟' },
  { series_id: 'I', title: '听一首老歌', desc: '回忆美好', mood: '治愈', cost: '3分钟' },
  { series_id: 'I', title: '仰望星空', desc: '渺小与伟大', mood: '治愈', cost: '10分钟' },
  { series_id: 'I', title: '和宠物玩耍', desc: '无条件爱', mood: '治愈', cost: '10分钟' },
  // 系列 J：1000个搞钱/省钱冷知识
  { series_id: 'J', title: '信用卡积分换里程', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '超市晚间折扣时段', desc: '省钱', mood: '搞钱', cost: '1分钟' },
  { series_id: 'J', title: '二手平台出闲置', desc: '变现', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '团购优惠券叠加', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '基金定投策略', desc: '理财', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '话费套餐优化', desc: '省钱', mood: '搞钱', cost: '5分钟' },
  { series_id: 'J', title: '顺风车乘客', desc: '副业', mood: '搞钱', cost: '5分钟' },
  { series_id: 'J', title: '问卷调查赚积分', desc: '小钱', mood: '搞钱', cost: '10分钟' },
  { series_id: 'J', title: '用购物返利APP', desc: '省钱', mood: '搞钱', cost: '2分钟' },
  { series_id: 'J', title: '早起抢优惠券', desc: '省钱', mood: '搞钱', cost: '5分钟' }
];

export async function onRequest(context) {
  const { env } = context;

  try {
    // 1. 建表（如果不存在）
    await env.DB.exec(`
      CREATE TABLE IF NOT EXISTS content_library (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        series_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        mood_tag TEXT,
        cost_time TEXT,
        pushed INTEGER DEFAULT 0,
        push_date TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

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

    // 3. 插入 100 条数据
    const stmt = env.DB.prepare(
      'INSERT INTO content_library (series_id, title, description, mood_tag, cost_time) VALUES (?, ?, ?, ?, ?)'
    );
    const batch = SEED_DATA.map(item =>
      stmt.bind(item.series_id, item.title, item.desc, item.mood, item.cost)
    );
    await env.DB.batch(batch);

    return new Response(JSON.stringify({
      message: '✅ 数据初始化成功！已插入 100 条内容',
      count: SEED_DATA.length
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