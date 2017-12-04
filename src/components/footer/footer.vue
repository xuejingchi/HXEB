<template>
  <div class="footer" @click="changeLanguage">
    备案类信息
  </div>
</template>
<script type="text/ecmascript-6">
//  import Axios from 'axios';
//  import moment from 'moment';
  //  const ERR_OK = 0;
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
    },
    computed: {
    },
    methods: {
      changeLanguage() {
        const locale = this._i18n.locale
        if (locale === 'en') {
          this._i18n.locale = 'zh'
        } else {
          this._i18n.locale = 'en'
          console.log(111, this)
        }
      }
    },
    components: {
    }
  }
</script>
