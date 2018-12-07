<template>
  <div class="mylayout">
    <Row>
        <Col span="8">
            <div class="title">PROFESSIONAL INSTRUCTIONS</div>
            <div class="divider"></div>
            <div class="title2">专业说明</div>
            <div class="divider"></div>
            <div class="title3">空中安全（空警、安全员）</div>
            <div class="title4">专业</div>
        </Col>
        <Col span="16">
            <div class="content">
                <Row>
                    <Col span="12" class="c">
                        <div class="t">培养目标</div>
                        <p align="justify">{{para1}}</p>
                        <div class="t">主要课程</div>
                        <p align="justify">{{para2}}</p>
                        <div class="t">就业方向</div>
                        <p align="justify">{{para3}}</p>
                    </Col>
                    <Col span="12"><img :src="img"></Col>
                </Row>
            </div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Security',
  data () {
    return {
        img: require("../assets/Professional/Security.png"),
        para1:'为培养适应全球日趋严峻的航空安全局势， 维护飞行中的民用航空器内的安全秩序， 防范和制止劫机、炸机或其他对民用航空器实施的非法行为， 并掌握民航安全技术管理的专业知识和技能， 执行航班保卫任务的专门型人才。',
        para2:'民航概论、民航服务礼仪、民航法律法规、民航服务英语、民航客舱安全管理、机型理论知识、空防安全知识、犯罪心理学、擒拿格斗（选修：韩语、日语、地方方言等） 。',
        para3:'国内外各大航空运输企业空警、安全员岗位。'
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
.title2,.title3,.title4{
    padding-top: 10px;
    padding-bottom: 10px;
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
.title3{
    color: #284c9a;
    padding-bottom: 0px;
}
.title4{
    padding-top: 0px;
    color: #284c9a;
    font-weight: normal;   
}
.content{
    background: #284c9a;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 300px;
    margin-top: 70px;
    overflow: hidden;
}
.content img{
    height: 100%;
}
.content .c{
    padding: 20px 50px;
}
.content .c .t{
    color: #fff;
    font-weight: bold;
    padding-top: 10px;
}
.content .c p{
    color: #fff;
}
</style>