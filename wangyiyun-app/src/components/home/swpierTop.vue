<template>
  <div class="swiperTop">
    <van-swipe :autoplay="5000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import { getBanner } from '@/request/api/home.js'
import { onMounted, reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      images: [
        'https://unpkg.com/@vant/assets/apple-1.jpeg',
        'https://unpkg.com/@vant/assets/apple-2.jpeg',
      ]
    })
    onMounted(async () => {
      const res = await getBanner()
      console.log(res)
      state.images = res.data.banners
      console.log(state.images)
    })
    return { state }
  },
};
</script>

<style lang="less" >
.swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>