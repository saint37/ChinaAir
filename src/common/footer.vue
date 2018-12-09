<template>
  <div class="myfooter">
    <Row type="flex" justify="center" class="code-row-bg">
        <Col span="3"><div class="layout-qr"><img :src="qrcode"></div></Col>
        <Col span="9">
          <div class="footer-item lined">
            <ul>
              <li>关于我们</li>
              <li>|&emsp;&ensp;专业说明</li>
              <li>|&emsp;&ensp;中航动态</li>
              <li>|&emsp;&ensp;视频资料</li>
              <li>|&emsp;&ensp;联系我们</li>
            </ul>
          </div>
          <div class="footer-item">
            <ul>
              <li>版权所有</li>
              <li>中航空港(北京)技术培训中心</li>
              <li>All rights reserved</li>
              <li>京ICP备16040995</li>
            </ul>
          </div>
          <div class="footer-item">
            <ul>
              <li>电话:&emsp;010-84456090</li>
            </ul>
          </div>
          <div class="footer-item">
            <ul>
              <li>地址:&emsp;北京市顺义区天柱东路润通大厦A座211</li>
            </ul>
          </div>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      qrcode: require("../assets/qr.png"),
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myfooter{
    padding: 20px 50px;
    position: fixed;
    bottom: 0;
    width: 100%
}
.layout-qr{
    width: 120px;
    height: 80px;
    border-right: 1px solid #284c9a;
}
.layout-qr img{
    height: 100%;
}
.footer-item{
    display: table;
    padding-bottom: 5px;
    color: #284c9a;
    font-size: 11px;
}
.footer-item ul{
    list-style: none;
}
.footer-item ul li{
    float: left;
    padding-right: 15px;
}
</style>
