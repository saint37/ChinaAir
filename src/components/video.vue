<template>
  <div class="mylayout">
    <Row>
        <Col span="4">
            <div class="title">VIDEO</div>
            <div class="divider"></div>
            <div class="title2">视频资料</div>
        </Col>
        <Col span="17" offset="3">
        	<div class="video"><img :src="videourl"></div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data () {
    return {
    	videourl: require("../assets/Video/video.png"),
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
.video,.video img{
	width: 100%;
}
.video{
	padding: 50px;
}
</style>