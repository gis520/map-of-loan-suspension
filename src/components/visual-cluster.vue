<template>
  <div style="height: 100%">
    <div class="map-container">
      <div class="header">
        <span class="title">停贷项目区划聚合统计</span>
        <div class="totals">
          当前停贷项目总数：
          <span>{{ totals || 0 }}</span> 个
        </div>
        <div>
          <a href="https://gitee.com/xiaomiquan/map-of-loan-suspension"
            >Gitee源码</a
          >
          |
          <a href="https://github.com/gis520/map-of-loan-suspension"
            >GitHub源码</a
          >
        </div>
      </div>
      <el-amap
        ref="map"
        v-loading="loading"
        element-loading-text="数据查询中，请等待.."
        class="ngxmap"
        vid="amap"
      ></el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap';
import MapApiLoadService from '../shared/map-api-loader';
import { PROVINCES } from '../shared/config';
import { warningToast, errorToast } from '../shared/message';
import './style.scss';
const amapManager = new AMapManager();
const mapApiLoader = new MapApiLoadService();
export default {
  name: 'visual-cluster',
  props: {
    msg: String
  },
  data() {
    return {
      amapManager,
      endDate: null,
      startDate: null,
      showBox: false,
      loading: false,
      totals: 0
    };
  },
  computed: {
    map() {
      // return this.amapManager._map;
      return this.$refs.map.$amap;
    }
  },
  mounted() {
    this.queryData();
  },
  methods: {
    handleSwitch() {
      this.showBox = !this.showBox;
    },
    initCluster(lnglat) {
      mapApiLoader.load(['geo/DistrictCluster']).then((DistrictCluster) => {
        window.DistrictCluster = DistrictCluster;
        console.log(this.map);
        this.distCluster = window.distCluster = new DistrictCluster({
          map: this.map, //所属的地图实例
          zIndex: 11,
          getPosition: (item) => {
            if (!item) {
              return null;
            }
            let parts = [];
            if (typeof item.split !== 'function' && Array.isArray(item)) {
              parts = [...item];
              return [parseFloat(parts[0]), parseFloat(parts[1])];
            }
            parts = item.split(',');
            //返回经纬度
            return [parseFloat(parts[0]), parseFloat(parts[1])];
          }
        });
        this.distCluster.setData(lnglat);
        this.clusterRecordResult(); //  根据省code获取数据
      });
    },

    queryData() {
      this.loading = true;
      fetch('./assets/data/cities-for-visualization.json')
        .then((resp) => resp.json())
        .then(
          (data) => {
            warningToast('地图数据渲染中……', 2000);
            let tempArr = [];
            for (let item of data) {
              // cluster 高德api要的格式
              const point = `${item.pos.lng},${item.pos.lat}`;
              // 通过 count 来创建虚拟的停贷项目坐标地址（因为没有具体的某个项目工地的经纬度，只有这个区域的而已）
              const arr = Array.from(item.count).fill(point);
              tempArr = tempArr.concat(arr);
            }
            this.loading = false;
            this.totals = tempArr.length;
            console.log(tempArr);
            this.initCluster(tempArr);
          },
          () => {
            errorToast('停贷项目坐标数据获取失败');
            this.loading = false;
          }
        );
    },
    // 第一个参数为政区code，440000 为广东省的，第二个为回调参数，res为获取到的数据结果  ---- 异步处理
    // this.distCluster.getClusterRecord(440000,(err,res)=>console.log(err,res))
    queryDataClusterRecord() {
      const allPromise = (PROVINCES || []).map((item) => {
        return new Promise((resolve) => {
          this.distCluster.getClusterRecord(item['code'], (err, res) => {
            resolve({
              adcode: res.adcode,
              name: res.name,
              number: res.dataItems.length
            });
          });
        });
      });
      return Promise.all(allPromise || []);
    },

    async clusterRecordResult() {
      this.provincesData = (await this.queryDataClusterRecord()) || [];
      const arr = this.provincesData.sort((a, b) =>
        a.number > b.number ? 1 : -1
      );
      console.log(arr);
      // this._subject$.next(arr);
    }
  }
};
</script>

 
