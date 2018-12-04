<template>
  <div class="myheader">
    <Menu mode="horizontal" active-name="index" @on-select="routeTo">
        <div class="layout-logo"><img :src="logo"></div>
        <div class="layout-nav">
            <MenuItem name="index">
                <!-- <router-link to="/index">首页</router-link> -->
                首页
            </MenuItem>
            <MenuItem name="aboutUs">
                <!-- <router-link to="/aboutUs">关于我们</router-link> -->
                关于我们
            </MenuItem>
<!--             <MenuItem name="3">
                专业说明
            </MenuItem> -->
            <Submenu name="3">
                <template slot="title">
                    专业说明
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                中航动态
            </MenuItem>
            <MenuItem name="5">
                视频资料
            </MenuItem>
            <MenuItem name="6">
                联系我们
            </MenuItem>
            <MenuItem name="7">
                合作伙伴
            </MenuItem>
        </div>
        <div class="layout-search"><Input search placeholder="搜索内容" style="border: none"/></div>
    </Menu>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
        logo: require("../assets/logo.png"),
        msg: 'header'
    }
  },
  methods: {
    routeTo(name) {
        this.$router.push(name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myheader{
    padding: 20px 50px;
}
.ivu-menu-horizontal.ivu-menu-light:after{
    background: none;
}
.layout-logo{
    width: 150px;
    height: 60px;
    background: #fff;
    float: left;
}
.layout-logo img{
    height: 100%;
}
.layout-search{
    float: right;
}
</style>
