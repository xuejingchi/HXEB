<template>
  <div class="good">
    goods{{ $t("el.cascader.loading") }}{{ $t("message") }}
  </div>
</template>
<script type="text/ecmascript-6">
  import Axios from 'axios'
//  import moment from 'moment';
  export default {
    props: {
    },
    data () {
      return {
      }
    },
    created() {
    },
    mounted() {
      Axios.post('/user/username')
        .then(function (rsp) {
          console.log(1112, rsp)
        })
        .catch(function (err) {
          console.log(2223, err)
        })
    },
    computed: {
    },
    methods: {
    },
    components: {
    }
  }
</script>
<style lang="less" scoped>

</style>
