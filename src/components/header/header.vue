<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="info.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" @click="changeLanguage" v-bind:title="message">{{info.name}}</span>
        </div>
        <div class="description">
          {{info.description}}/{{info.deliveryTime}}分钟送达
          <input type="text" v-model="vModel" />
          <span @click="modelClick($event)">{{vModel}}</span>
        </div>
        <div v-if="info.supports" class="support">
          <span class="icon" :class="classMap[info.supports[0].type]"></span>
          <span class="text">{{info.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="info.supports" class="supports-count" @click="showDetail">
        <span class="count">{{info.supports.length}}个</span>
        <i class="icon iconfont icon-zuoyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{info.bulletin}}</span>
      <i class="icon iconfont icon-zuoyoujiantou"></i>
    </div>
    <div class="background">
      <img :src="info.avatar" alt="" class="" width="100%" height="100%">
    </div>
    <transition name="fade">
    <div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
      <div class="detail-wrapper clearFix">
        <div class="detail-main">
          <h1 class="name">{{info.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="info.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="info.supports" class="supports">
            <li class="support-item" v-for="(item, index) in info.supports">
              <span class="icon" :class="classMap[info.supports[index].type]"></span>
              <span class="text">{{info.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{info.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="iconfont icon-cha"></i>
      </div>
    </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import star from '../star/star.vue';
  export default {
    props: {
      info: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false,
        message: 'test',
        vModel: '333'
      };
    },
    methods: {
      changeLanguage() {
//        console.log(this._i18n.locale);
        let locale = this._i18n.locale;
        if (locale === 'en') {
          this._i18n.locale = 'zh';
        } else {
          this._i18n.locale = 'en';
        }
      },
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      },
      modelClick(e) {
//        window.alert(e.target.outerText);
        window.alert(this.vModel);
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl";
</style>
