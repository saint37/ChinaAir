<template>
  <div class="mylayout">
    <Row>
        <Col span="4">
            <div class="title">CONTACT US</div>
            <div class="divider"></div>
            <div class="title2">联系我们</div>
        </Col>
        <Col span="6">
            <div class="address">
                <p class="t">中航空港（北京）技术培训中心</p>
                <div class="tsm">T E L</div>
                <p>010-84456090</p>
                <div class="tsm">F A X</div>
                <p>010-84456090-800</p>
                <div class="tsm">A D D</div>
                <p>北京市顺义区天柱东路润通大厦A座211</p>
            </div>
        </Col>
        <Col span="14">
            <div id="amap-main"></div>
        </Col>
    </Row>
  </div>
</template>
<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: 'Contact',
  data () {
    return {
    	
    }
  },
  methods: {
        loadmap:function(){
          lazyAMapApiLoaderInstance.load().then(() => {
            let map = new AMap.Map('amap-main', {
                mapStyle: 'amap://styles/whitesmoke', 
                center: new AMap.LngLat(116.569199, 40.068371),
                zoom: 14
            });
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
              map.addControl(new AMap.ToolBar())
              map.addControl(new AMap.Scale())
            })
            var marker = new AMap.Marker({
                position: new AMap.LngLat(116.569199, 40.068371),
                icon: '', 
                map: map,  
                // animation:'AMAP_ANIMATION_BOUNCE',
                title:'北京市顺义区天柱东路润通大厦A座211',
                label:{
                    content:'中航空港（北京）技术培训中心: 润通大厦A座211',
                    offset:new AMap.Pixel(-25, -25),
                },
            });
          });
        }
    },
  mounted() {
        this.loadmap();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mylayout{
    padding: 20px 0px 10px 70px;
}
.title{
    font-size: 40px;
    font-style: italic;
    letter-spacing: 5px;
    font-weight: bold;
    color: #284c9a;
}
.title2{
    padding-top: 10px;
    font-size: 18px;
    color: #666;
    font-weight: bold;
}
.divider{
    width: 30px;
    height: 4px;
    background: #284c9a;
    border-radius:5px;
}
.address{
    margin-top: 100px;
}
.address .t{
    color: #284c9a;
    font-weight: bold;
    padding-bottom: 20px;
}
.address .tsm{
    color: #284c9a;
    font-weight: bold;
}
#amap-main{
    height:400px;
}
</style>