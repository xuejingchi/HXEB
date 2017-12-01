<template>
  <div class="app">
    <el-container>
      <v-header></v-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script type='text/ecmascript-6'>
  import header from 'components/header/header.vue'
  import footer from 'components/footer/footer.vue'
//  const ERR_OK = 0;
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    },
    mounted() {
      this.$router.currentRoute.fullPath === '/' ? this.$router.push('/homepage') : console.log(this.$router)
    },
    components: {
      'v-footer': footer,
      'v-header': header
    }
  }
</script>
<style>
  .app, .el-container {
    height: 100%;
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .router-link-exact-active {
    border-bottom: 1px solid blue;
  }
</style>
