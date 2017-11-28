<template>
  <div class="app">
    <!-- 头部 -->
    <!--<v-header :info='info'></v-header>-->
    <!--&lt;!&ndash; 主体切换 &ndash;&gt;-->
    <!--<div class='tab border-1px'>-->
      <!--<div class='tab-item'>-->
        <!--<router-link v-bind:to='/goods'>-->
          <!--商品-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class='tab-item'>-->
        <!--<router-link to='/ratings'>-->
          <!--评论-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class='tab-item'>-->
        <!--<router-link to='/seller'>-->
          <!--商家-->
        <!--</router-link>-->
      <!--</div>-->
    <!--</div>-->
    <!-- 头部 -->
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <router-link v-bind:to="'/homepage'">首页</router-link>
          <router-link to='/goods'>商品</router-link>
          <router-link to='/seller'>商家</router-link>
          <router-link to='/person'>个人中心</router-link>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <!--<keep-alive>-->
      <!--<router-view :info='info'></router-view>-->
    <!--</keep-alive>-->
  </div>
</template>
<script type='text/ecmascript-6'>
  import header from 'components/header/header.vue'
//  const ERR_OK = 0;
  export default {
    data() {
      return {
        activeIndex: '1',
      }
    },
    created() {
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      'v-header': header
    }
  }
</script>
<style>
  .app, .el-container {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
