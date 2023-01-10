<template>
  <div class="swiperTop">
    <van-swipe :autoplay="5000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  setup () {
    const images = [
      'https://unpkg.com/@vant/assets/apple-1.jpeg',
      'https://unpkg.com/@vant/assets/apple-2.jpeg',
    ]
    return { images }
  },
};
</script>

<style lang="less" >
.swiperTop {
  .van-swipe {
    width: 100%;
    padding: 10px;
    .van-swipe-item {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 3rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>