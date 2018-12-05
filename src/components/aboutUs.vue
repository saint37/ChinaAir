<template>
  <div class="mylayout">
    <Row>
        <Col span="4">
            <div class="title">ABOUT US</div>
            <div class="divider"></div>
            <div class="title2">关于我们</div>
        </Col>
        <Col span="8" class="content">
            <p align="justify">{{para1}}</p>
            <p align="justify">{{para2}}</p>
            <p align="justify">{{para3}}</p>
        </Col>
        <Col span="12" class="content">
            <div class="introimg"><div class="bluecover"></div><img :src="img3"></div>
            <div class="introimg"><div class="bluecover"></div><img :src="img1"></div>
        </Col>
    </Row>
  </div>
</template>

<script>

export default {
  name: 'aboutUs',
  data () {
    return {
      img1: require("../assets/aboutUs/1.png"),
      img3: require("../assets/aboutUs/3.png"),
      para1: '中航空港成立于2010年，是目前中国境内专业提供航空职业教育、航空人才储备与输出、航空飞行培训最具影响力、执行力的综合教育机构之一。',
      para2: '中航空港(北京)技术培训中心是中国通用航空理事会(CGAA)会员单位，国际航空运输协会(IATA)及中国民航运输协会(CATA)合作单位，中国通用航空产业联盟发起单位，中国县委书记网就业培训指定战略合作伙伴单位，在国内与多家高校合作联合办学，培养本、专科学历层次民航应用型人才，开创了全国普通高校、校企合作培养应用型民航人才的先河。通过中航空港与合作院校的共同努力，先后向国内外航空公司以及民航各大枢纽机场输送大批高素质空中乘务人员、地勤人员，各合作院校毕业生就业率始终保持在90%以上。',
      para3: '中航空港一直致力于全面促进中国航空教育产业平稳有序发展，在前端教育端口拥有自主知识产权核心教育新思想，在后端航空教育投资、教育管理与教育咨询 等方面拥有业内核心竞争力，合作院校辐射北京、山西、湖南、湖北、广东等省份，为中国民航产业持续贡献专业高素质人才近3000人。多年努力终结硕果， 中航空港凭借自身优势与国内外多家航空公司、机场、同业航空服务机构共襄伟业，一举创立了非常健康稳固的人才培养与供给输送渠道和价值纽带，形成一套完善的“需求及时反馈——课程及时更新——取证及时权威——就业及时保障” 的航空人才培养体系。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mylayout{
    padding: 20px 0px 10px 70px;
}
.content{
    padding-top: 70px;
}
.content p{
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 16px;
}
.content p:first-child{
    font-weight: bold;
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
.introimg{
    float: right;
    width: 260px;
}
.introimg img{
    width: 100%;
}
.bluecover{
    position: absolute;
    background: rgba(50, 130, 230, 0);
    width: 260px;
    height: 264px;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.bluecover:hover{
    background: rgba(50, 130, 230, 0.5);    
}
</style>
