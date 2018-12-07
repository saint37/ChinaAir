<template>
  <div class="mylayout">
    <Row>
        <Col span="8">
            <div class="title">PROFESSIONAL INSTRUCTIONS</div>
            <div class="divider"></div>
            <div class="title2">专业说明</div>
            <div class="divider"></div>
            <div class="title3">空中乘务</div>
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
  name: 'Aircrew',
  data () {
    return {
        img: require("../assets/Professional/Aircrew.png"),
        para1:'培养适应新时代背景下民用飞机客舱服务工作， 并具有较高综合素质的民航空中乘务员。具有较强的外语水准， 全面的民航运输知识， 广泛的人文科学知识， 并接受过乘务专业基本训练的实用型、技能型专门人才； 空乘专业是具有很高的政治素质和专业素质的机场服务人员， 通过学校的学习和技能的培养， 学生能够成为民航行业发展的高素质人才。',
        para2:'民航概论、民航服务礼仪、民航法律法规、民航服务心理学、民航乘务英语、民航客舱安全管理、民航客舱服务与管理、民航乘务员基础教程（ 选修： 机型理论知识、空防安全知识、英语口语、韩语、日语等） 。',
        para3:'国内外各大航空运输企业空中乘务岗位。'
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
    font-size: 11px;
}
</style>