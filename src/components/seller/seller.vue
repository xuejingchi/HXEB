<template>
  <div class="seller">
    seller
    <!--<magnify></magnify>-->
    <div class="app1"
         style="height: 1200px;background-color: #ccc;width: 400px;margin: 0 auto;"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="10">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  //  import Axios from 'axios';
  //  import moment from 'moment';
  import infiniteScroll from 'vue-infinite-scroll'
  //  const ERR_OK = 0;
  //  import magnify from '../../components/magnify/magnify.vue'
  export default {
    directives: {infiniteScroll},
    props: {
    },
    data () {
      return {}
    },
    created() {
    },
    mounted() {
//      this.addEventListener('scroll', this.scroll, false)
    },
    computed: {
    },
    beforeDestroy() {
//      this.dom.removeEventListener('scroll', this.scroll, false)
    },
    methods: {
      loadMore: function () {
        var self = this
        self.busy = true
        console.log(`loading...${new Date()}`)
        setTimeout(function () {
          var app = document.querySelector('.app1')
          var height = app.clientHeight
          app.style.height = `${height + 300}px`
          console.log(`end...${new Date()}`)
          self.busy = false
        }, 1000)
      }
    },
    components: {
//      magnify
    }
  }
</script>
<style>
  @import "seller.less";
</style>
