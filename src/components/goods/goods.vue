<template>
  <div class="good">
    goods{{ $t("el.cascader.loading") }}{{ $t("message") }}
    <el-upload class="upload-demo"
               :before-upload="handleUpload"
               action="http://192.168.5.220:8081/file_upload">
      <el-button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</el-button>
    </el-upload>
    <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Axios from 'axios'
//  import moment from 'moment'
  export default {
    props: {
    },
    data () {
      return {
        file: null,
        loadingStatus: false
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
      handleUpload (file) {
        this.file = file
        console.log(3333, this.file)
        return false
      },
      upload(e) {
        console.log(33333, e.target.files)
//        console.log(44444, this.$refs.file.files)
        console.log(this.file)
//        this.loadingStatus = true
//        setTimeout(() => {
//          this.file = null
//          this.loadingStatus = false
//          this.$Message.success('Success')
//        }, 1500)
        let param = new window.FormData()
        param.append('file', this.file, this.file.name)
        param.append('chunk', '0')
        const config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
        Axios.post('http://192.168.5.220:8081/file_upload', param, config)
          .then(function (rsp) {
            console.log(1112, rsp)
          })
          .catch(function (err) {
            console.log(2223, err)
          })
      },
    },
    components: {
    }
  }
</script>
<style lang="less" scoped>

</style>
