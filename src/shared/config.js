// AMAP START
export const AMAP_API_KEY = '146f101e824accd6956eeec4937c1a05';
export const AMAPUI_API_URL = '//webapi.amap.com/ui/1.0/main.js?v=1.0.11';
export const ICON_SIZE = { width: 32, height: 36 };
export const LABEL_OFFSET = { x: 26, y: 20 };
export const INFO_WIN_OFFSET = { x: 1, y: -36 };
export const MARKER_OFFSET = { x: -15, y: -35 };

console.log(process.env);
export const BASE_URL = process.env.VUE_APP_BASE_URL;

export const MAP_ZOOMS = [5, 18];
export const MAP_LEVEL = 6; // 初始化级别

export const YEAR_MONTH = { start: '2019/01', end: '2019/10' };

export const PROVINCES = [
  { province: '广东省', code: 440000 },
  { province: '河南省', code: 410000 },
  { province: '内蒙古自治区', code: 150000 },
  { province: '黑龙江省', code: 230000 },
  { province: '新疆维吾尔自治区', code: 650000 },
  { province: '湖北省', code: 420000 },
  { province: '辽宁省', code: 210000 },
  { province: '山东省', code: 370000 },
  { province: '陕西省', code: 610000 },
  { province: '上海市', code: 310000 },
  { province: '贵州省', code: 520000 },
  { province: '重庆市', code: 500000 },
  { province: '西藏自治区', code: 540000 },
  { province: '安徽省', code: 340000 },
  { province: '福建省', code: 350000 },
  { province: '湖南省', code: 430000 },
  { province: '海南省', code: 460000 },
  { province: '江苏省', code: 320000 },
  { province: '青海省', code: 630000 },
  { province: '广西壮族自治区', code: 450000 },
  { province: '宁夏回族自治区', code: 640000 },
  { province: '江西省', code: 360000 },
  { province: '浙江省', code: 330000 },
  { province: '河北省', code: 130000 },
  { province: '香港特别行政区', code: 810000 },
  { province: '山西省', code: 140000 },
  { province: '台湾省', code: 710000 },
  { province: '澳门特别行政区', code: 820000 },
  { province: '甘肃省', code: 620000 },
  { province: '四川省', code: 510000 },
  { province: '云南省', code: 530000 },
  { province: '北京市', code: 110000 },
  { province: '天津市', code: 120000 },
  { province: '吉林省', code: 220000 }
];
// AMAP END
