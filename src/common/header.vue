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
            <Submenu name="Professional">
                <template slot="title">
                    专业说明
                </template>
                <MenuItem name="Professional">专业说明</MenuItem>
                <MenuGroup title="专业">
                    <MenuItem name="Prof-Aviation">航空飞行</MenuItem>
                    <MenuItem name="Prof-Aircrew">空中乘务</MenuItem>
                    <MenuItem name="Prof-Service">航空服务</MenuItem>
                    <MenuItem name="Prof-Security">空中安全</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="Dynamic">
                中航动态
            </MenuItem>
            <MenuItem name="Video">
                视频资料
            </MenuItem>
            <MenuItem name="Contact">
                联系我们
            </MenuItem>
            <MenuItem name="Partner">
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
    padding: 30px 70px 10px 70px;
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
