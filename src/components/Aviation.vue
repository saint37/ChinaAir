<template>
  <div class="mylayout">
    <Row>
        <Col span="8">
            <div class="title">PROFESSIONAL INSTRUCTIONS</div>
            <div class="divider"></div>
            <div class="title2">专业说明</div>
            <div class="divider"></div>
            <div class="title3">航空飞行</div>
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
  name: 'Aviation',
  data () {
    return {
        img: require("../assets/Professional/Aviation.png"),
        para1:'本专业运用国内外先进的飞行理论与技术标准， 培养适应2 1 世纪民用航空事业需求的政治思想素质过硬、知识结构合理、理论基础扎实、飞行技术精湛、飞行作风优良、具备民用航空飞行技术应用及管理能力、拥有国际竞争实力的高级技术应用型人才。',
        para2:'民航概论、航空法、飞行领航学、飞行气象学、飞行原理、飞行员陆空通话、仪表飞行与航图、飞行性能计划与载重平衡、航空地理等课程。',
        para3:'国内外各大航空运输企业飞行岗位。'
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