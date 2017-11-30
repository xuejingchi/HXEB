<template>
  <div class="person">
    <el-aside width="200px">
      <el-col :span="12">
        <el-menu
          default-active="address"
          class="el-menu-vertical-demo"
          @select="selectMenu"
        >
          <el-menu-item index="address">
            <i class="el-icon-location"></i>
            <span>地址信息</span>
          </el-menu-item>
          <el-menu-item index="detail">
            <i class="el-icon-menu"></i>
            <span slot="title">用户详情</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <el-main>
      <v-address v-show="route==='address'"></v-address>
      <detail v-show="route==='detail'"></detail>
    </el-main>
  </div>
</template>
<script type="text/ecmascript-6">
//  import Axios from 'axios'
//  import moment from 'moment'
import address from './address/address.vue'
import detail from './detail/detail.vue'
  //  const ERR_OK = 0;
export default {
  props: {
  },
  data () {
    return {
      route: 'address'
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    selectMenu(key, keyPath) {
      console.log(key, keyPath)
//      this.$router.push(`/person/${key}`)
      this.route = key
    }
  },
  components: {
    'v-address': address,
    detail
  }
}
</script>
<style>
  .el-menu {
    border-right: 0;
    background-color: transparent;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    background-color: transparent;
  }
</style>
