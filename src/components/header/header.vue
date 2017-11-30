<template>
  <div class="header">
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <router-link v-bind:to="'/homepage'">首页</router-link>
        <router-link to='/goods'>商品</router-link>
        <router-link to='/seller'>商家</router-link>
        <router-link to='/person'>个人中心</router-link>
      </el-menu>
    </el-header>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
    },
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
    },
    created() {
    },
    mounted() {
      this.$router.currentRoute.fullPath === '/' ? this.$router.push('/homepage') : console.log(this.$router)
    },
    components: {
    }
  }
</script>
<style>

</style>
