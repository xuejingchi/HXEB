<template>
  <div class="good">
    <div @click="cancelLoading">goods{{ $t("el.cascader.loading") }}{{ $t("message") }}</div>
    <el-upload class="upload-demo"
               :before-upload="handleUpload"
               action="http://192.168.5.220:8081/file_upload">
      <el-button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</el-button>
    </el-upload>
    <div v-loading="loading" v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
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
        loadingStatus: false,
        loading: true,
        currentPage1: 5
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      handleUpload (file) {
        this.file = file
        console.log(3333, this.file)
        return false
      },
      upload(e) {
//        console.log(33333, e.target.files)
//        console.log(44444, this.$refs.file.files)
//        console.log(this.file)
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
      cancelLoading() {
        this.loading = false
      }
    },
    components: {
    }
  }
</script>
<style lang="less" scoped>

</style>
