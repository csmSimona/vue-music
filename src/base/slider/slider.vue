<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <a :href="item.linkUrl">
          <img  class="needsclick swpier-img" :src="item.picUrl" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透 >>>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper
  // 图片长宽自适应
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 40%
  .swpier-img
    width: 100%
</style>
