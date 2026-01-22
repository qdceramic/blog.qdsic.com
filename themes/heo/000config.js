const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'Welcome to my blog', url: 'https://blog.qdsic.com' },
    { title: 'Welcome to my Company Website', url: 'https://qdsic.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'RBSIC/SISIC',
  HEO_HERO_TITLE_2: 'SSIC',
  HEO_HERO_TITLE_3: 'QDSIC.COM',
  HEO_HERO_TITLE_4: 'We manufacture and supply',
  HEO_HERO_TITLE_5: 'Silicon Carbide Products',
  HEO_HERO_TITLE_LINK: 'https://qdsic.com',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: 'Browsing',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: 'RBSIC', url: '/tag/RBSIC' },
  HEO_HERO_CATEGORY_2: { title: 'SSIC', url: '/tag/SSIC' },
  HEO_HERO_CATEGORY_3: { title: 'Kiln Furniture', url: '/tag/Kiln%20furniture' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  HERO_RECOMMEND_COVER: 'https://i.111666.best/image/URRrHnqDaUGi3uP44mK1Bc.jpg', // 英雄区右侧图片
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    'Hello! We are',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://blog.qdsic.com',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://qdsic.com',
  HEO_INFO_CARD_TEXT3: 'Learn more...',

  // 用户技能图标   已经禁用
  HEO_GROUP_ICONS: [
    {
      title_1: 'SSIC Rear ring',
      img_1: 'https://i.111666.best/image/KPAJd3yTc5fn3s7Qi1yvE2.png',
      color_1: '#989bf8',
      title_2: 'Tube',
      img_2: 'https://i.111666.best/image/9OAIYMTkMJxZWMGSzB4qmv.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Beam',
      img_1: 'https://i.111666.best/image/EwWf49ZhqyclVvJtH35c47.jpeg',
      color_1: '#57b6e6',
      title_2: 'ssic sleeve',
      img_2: 'https://i.111666.best/image/6jN41TGvMIgcHK55fF7qyU.jpg',
      color_2: '#4082c3'
    },
    {
      title_1: 'RBSIC burner',
      img_1: 'https://i.111666.best/image/QQ3p37ZBeWBCsXZZQtwF5m.jpg',
      color_1: '#ffffff',
      title_2: 'silicon carbide ring',
      img_2: 'https://i.111666.best/image/wUcJOExqnJO3pxPy88xhB9.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'nickel bonded tungsten carbide ring',
      img_1: 'https://i.111666.best/image/75bZ7XvKWhZ2tCEs8aJZHM.png',
      color_1: '#eb6840',
      title_2: 'SSIC spool',
      img_2: 'https://i.111666.best/image/QOv94wuuaxjVEACJcnVTXY.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'SSiC Wear Resistant & Grinding Parts',
      img_1: 'https://i.111666.best/image/6v48k0AXvWzQiShMmxKQ5c.png',
      color_1: '#f29e39',
      title_2: 'RBSIC SISIC APEX',
      img_2: 'https://i.111666.best/image/eszTmMAnyygbNzglqj6s5T.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'SSIC rings',
      img_1: 'https://i.111666.best/image/5oC3U93L0Yhfoz6jqmQiYR.png',
      color_1: '#f7cb4f',
      title_2: 'RSIC beams',
      img_2: 'https://i.111666.best/image/0MRYD3Ax7sx8C06wa6hmlB.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'SISIC Cone',
      img_1: 'https://i.111666.best/image/nD5w1wsoUBHpKEcGsccZ9j.png',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: 'Contact Card',
  HEO_SOCIAL_CARD_TITLE_2: 'Contact person: Jack Song',
  HEO_SOCIAL_CARD_TITLE_3: 'Email: info@qdsic.com',
  HEO_SOCIAL_CARD_URL: 'mailto:info@qdsic.com',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: 'Articles:',
  HEO_SITE_TIME_TITLE: 'Days of Website:',
  HEO_SITE_VISIT_TITLE: 'Page View:',
  HEO_SITE_VISITOR_TITLE: 'Visitors:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
