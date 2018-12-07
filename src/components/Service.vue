<template>
  <div class="mylayout">
    <Row>
        <Col span="8">
            <div class="title">PROFESSIONAL INSTRUCTIONS</div>
            <div class="divider"></div>
            <div class="title2">专业说明</div>
            <div class="divider"></div>
            <div class="title3">航空服务（地勤）</div>
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
  name: 'Service',
  data () {
    return {
        img: require("../assets/Professional/Service.png"),
        para1:'培养具有空港地面服务与基本管理知识， 民航运输和机场运行管理的综合执行能力， 并具有实际操作技能， 整体素质过硬的实用型人才，以适应新时代新思维体系下国内外民航业蓬勃发展的岗位需求。',
        para2:'民航概论、民航服务礼仪、民航法律法规、民航服务心理学、民航旅客运输、机场运营与管理、民航服务英语、民航客舱服务与管理（ 选修：韩语、日语等） 。',
        para3:'国内外各大机场与航空公司值机、安检、V I P 客服、中转、行李督察、中转客运等岗位。'
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