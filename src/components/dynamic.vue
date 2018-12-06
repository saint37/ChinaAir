<template>
  <div class="mylayout">
    <Row>
        <Col span="4">
            <div class="title">DYNAMIC</div>
            <div class="divider"></div>
            <div class="title2">中航动态</div>
        </Col>
        <Col span="17" offset="3" class="content">
        	<Row>
        		<div v-for="news in newsArray">
	        		<Col span="8">
	        			<div class="news">
	        				<div class="newsimg"><div class="bluecover"></div><img :src="news.imgurl"></div>
	        				<div class="newsc">
	        					<p class="t" v-html=news.title></p>
	        					<p class="time">{{news.time}}</p>
	        				</div>
	        			</div>
	        		</Col>        			
        		</div>
        	</Row>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
    	newsArray:[{
		    imgurl: require("../assets/Dynamic/1.png"),
		    title: '中航空港（ 北京） 技术培训中心<br/>网站成功上线',
		    time: '2016 - 06 - 06'
		},{
		    imgurl: require("../assets/Dynamic/2.png"),
		    title: '中航空港（ 北京） 技术培训中心<br/>网站制作完成',
		    time: '2016 - 06 - 06'
		},{
		    imgurl: require("../assets/Dynamic/3.png"),
		    title: '中航空港（ 北京） 技术培训中心<br/>网站项目交接完成',
		    time: '2016 - 06 - 06'
		}],
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
.content{
	padding-top: 10px;
}
.news{
	width: 100%;
	overflow: hidden;
	border-radius: 10px;
	transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.news:hover{
	box-shadow: 5px 5px 10px 3px #dcdee2;
	-webkit-box-shadow: 5px 5px 10px 3px #dcdee2;	
}
.newsimg{
	height: 260px;
}
.newsimg img{
	width: 100%;
}
.newsc{
	text-align: center;
	padding: 20px;
}
.newsc .t{
    color: #284c9a;
    font-weight: bold;
}
.newsc .time{
	padding-top: 5px;
}
.bluecover{
    position: absolute;
    background: rgba(50, 130, 230, 0.5);    
    width: 100%;
    height: 260px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.news:hover .bluecover{
	background: rgba(50, 130, 230, 0); 
}
</style>