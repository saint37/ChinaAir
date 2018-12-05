<template>
    <div>
        <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
            <div class="slideshow">
              <transition-group tag="ul" name="image">
                <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                    <div :class="img.color == 'blue' ? 'wordwrap' : 'wordwrap2'">
                        <div class="title">{{img.data}}</div>
                        <div class="divider"></div>
                        <div class="title2">{{img.data2}}</div>                        
                        <router-link :to="{path:img.url}"><Button type="primary" class="moreBtn">了解更多···<Icon type="md-arrow-round-forward" /></Button></router-link>
                    </div>
                    <img :src='img.img'>
                </li>
              </transition-group>
            </div>
        </div>
        <div class="bar">
            <span v-for="(item, index) in imgArray" :class="{'active':index===mark}"
              @click="change(index)" :key="index"></span>
        </div>    
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      timer: null, //定时器
      mark: 0,
      imgArray: [
        {img:require("../assets/index/1.png"),color:"blue",data:"ABOUT US",data2:"关于我们",url:"aboutUs"},
        {img:require("../assets/index/2.png"),color:"white",data:"PROFESSIONAL INSTRUCTIONS",data2:"专业说明",url:"Professional"},
        {img:require("../assets/index/3.png"),color:"white",data:"DYNAMIC",data2:"中航动态",url:"Dynamic"},
        {img:require("../assets/index/4.png"),color:"blue",data:"VIDEO",data2:"视频资料",url:"Video"},
        {img:require("../assets/index/5.png"),color:"blue",data:"CONTACT US",data2:"联系我们",url:"Contact"},
        {img:require("../assets/index/6.png"),color:"white",data:"PARTNER",data2:"合作伙伴",url:"Partner"}
      ]
    }
  },
  methods: {
    autoPlay:function () {
      this.mark++;
      if (this.mark === 6) {
        this.mark = 0
      }
    },
    play:function () {
      this.timer = setInterval(this.autoPlay, 2000)
    },
    change:function (i) {
      this.mark = i
    },
    stop:function () {
      clearInterval(this.timer)
    },
    move:function () {
      this.timer = setInterval(this.autoPlay, 2000)
    }
  },
  created () {
    this.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 90%;
    height: 350px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 350px;
  }
  .slideshow li {
    position: absolute;
  }
  .slideshow img {
    width: 100%;
    height: 350px;
  }
  .bar {
    position: relative;
    width: 100%;
    top: 20px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
    margin-bottom: 50px;
  }
  .bar span {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #284c9a;
    display: inline-block;
    margin-right: 10px;
    transition: all 1.5s ease;
  }
  .active {
    width: 80px !important;
    background: #284c9a !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
    .wordwrap,.wordwrap2{
        position: absolute;
        width: 500px;
        padding: 50px 100px;
    }
    .wordwrap .moreBtn{
        width: 100px;
        margin-top: 40px;
        padding: 3px 15px;
        border: none;
        background: #284c9a;
        color: #fff;
    }
    .wordwrap .moreBtn:hover{
        background: #fff;
        color: #284c9a;
    }
    .wordwrap .title{
        font-size: 40px;
        font-style: italic;
        letter-spacing: 5px;
        font-weight: bold;
        color: #284c9a;
    }
    .wordwrap .title2{
        padding-top: 10px;
        font-size: 18px;
        color: #666;
        font-weight: bold;
    }
    .wordwrap .divider{
        width: 30px;
        height: 4px;
        background: #284c9a;
        border-radius:5px;
    }
    .wordwrap2 .moreBtn{
        width: 100px;
        margin-top: 40px;
        padding: 3px 15px;
        border: none;
        background: #fff;
        color: #284c9a;
    }
    .wordwrap2 .moreBtn:hover{
        background: #284c9a;
        color: #fff;
    }
    .wordwrap2 .title{
        font-size: 40px;
        font-style: italic;
        letter-spacing: 5px;
        font-weight: bold;
        color: #fff;
    }
    .wordwrap2 .title2{
        padding-top: 10px;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .wordwrap2 .divider{
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius:5px;
    }
</style>
