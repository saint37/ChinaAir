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
                <Col span="9" style="width:35%">
                    <div class="prof1">
                        <div class="bluecover"></div>
                        <img :src="img1">
                        <div class="t">航空服务（空乘、地勤）<span>专业</span></div>
                        <router-link :to="{path:url1}"><Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button></router-link>
                    </div>
                    <div class="prof1">
                        <div class="bluecover"></div>
                        <img :src="img2">
                        <div class="t">空中安全（空警、安全员）<span>专业</span></div>
                        <router-link :to="{path:url2}"><Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button></router-link>
                    </div>
                </Col>
                <Col span="6" style="width:30%">
                    <div class="prof2">
                        <div class="bluecover"></div>
                        <img :src="img3">
                        <div class="t">机务维修<span>专业</span></div>
                        <Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button>
                    </div>
                </Col>
                <Col span="9" style="width:35%">
                    <div class="prof1">
                        <div class="bluecover"></div>
                        <img :src="img4">
                        <div class="t">高 铁<span>专业</span></div>
                        <Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button>
                    </div>
                    <div class="prof1">
                        <div class="bluecover"></div>
                        <img :src="img5">
                        <div class="t">奢侈品</div>
                        <Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button>
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
        url1:"Prof-Service",
        url2:"Prof-Security"
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
.content .moreBtn{
    width: 100px;
    padding: 3px 15px;
    border: none;
    background: #666;
    color: #fff;
    margin:0 0 10px 10px;
}
.content .t{
    color: #666;
    font-weight: bold;
    font-size: 14px;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;    
}
.content .t span{
    font-weight: normal;
}
.content .prof1{
    height: 215px;
}
.content .prof2{
    height: 430px;
}
.content .prof1 img{
    height: 135px;
}
.content .prof2 img{
    height: 350px;
}
.content .prof1,.content .prof2{
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.content .prof1 img,.content .prof2 img{
    width: 100%;
}
.content .prof1 .t,.content .prof2 .t{
    padding: 10px 10px 5px 10px;
}
.content .prof1 .bluecover,.content .prof2 .bluecover{
    position: absolute;
    background: rgba(50, 130, 230, 0.5);    
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.content .prof1 .bluecover{
    height: 135px;
}
.content .prof2 .bluecover{
    height: 350px;
}
.content .prof1:hover,.content .prof2:hover{
    box-shadow: 1px 1px 10px 3px #868686;   
    -webkit-box-shadow: 1px 1px 10px 3px #868686;   
}
.content .prof1:hover .bluecover,.content .prof2:hover .bluecover{
    background: rgba(50, 130, 230, 0); 
}
.content .prof1:hover .moreBtn,.content .prof2:hover .moreBtn{
    background: #284c9a;
    color: #fff;    
}
.content .prof1:hover .t,.content .prof2:hover .t{
    color: #284c9a;
}
</style>