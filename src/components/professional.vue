<template>
  <div class="mylayout">
    <Row>
        <Col span="8">
            <div class="title">PROFESSIONAL INSTRUCTIONS</div>
            <div class="divider"></div>
            <div class="title2">专业说明</div>
        </Col>
        <Col span="16">
            <Row class="content">
                <Col span="9">
                    <div class="prof1">
                        <img :src="img1">
                        <div class="t">航空服务（空乘、地勤）<span>专业</span></div>
                        <router-link :to="{path:url1}"><Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button></router-link>
                    </div>
                    <div class="prof1">
                        <img :src="img2">
                    </div>
                </Col>
                <Col span="6">
                    <div class="prof2">
                        <img :src="img3">
                    </div>
                </Col>
                <Col span="9">
                    <div class="prof1">
                        <img :src="img4">
                    </div>
                    <div class="prof1">
                        <img :src="img5">
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Professional',
  data () {
    return {
        img1: require("../assets/Professional/img1.png"),
        img2: require("../assets/Professional/img2.png"),
        img3: require("../assets/Professional/img3.png"),
        img4: require("../assets/Professional/img4.png"),
        img5: require("../assets/Professional/img5.png"),
        url1:"Prof-Service"
    }
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
.content .t{
    color: #666;
    font-weight: bold;
    font-size: 14px;
}
.content .t span{
    font-weight: normal;
}
.content .prof1,.content .prof2{
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
}
.content .prof1 img,.content .prof2 img{
    width: 100%;
}
.moreBtn{
    width: 100px;
    padding: 3px 15px;
    border: none;
    background: #666;
    color: #fff;
}
.moreBtn:hover{
    background: #284c9a;
    color: #fff;
}
</style>