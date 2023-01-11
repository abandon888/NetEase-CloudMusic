<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="Title">推荐歌单></div>
      <div class="More">更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="contentSwipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in musicList" :key="item.id">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <div class="musicCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kaixin"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </div>
            <img :src="item.picUrl" />
            <div class="musicName">{{ item.name }}</div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getPersonalized } from '@/request/api/home.js'
export default {
  data () {
    return {
      musicList: []
    }
  },
  methods: {
    async getMusicList () {
      const res = await getPersonalized()
      console.log(res)
      this.musicList = res.data.result
      console.log(this.musicList)
    },
    changeCount (count) {
      if (count > 100000000) {
        return (count / 100000000).toFixed(1) + '亿'
      } else if (count > 100000) {
        return (count / 10000).toFixed(1) + '万'
      } else {
        return count
      }
    }
  },
  mounted () {
    this.getMusicList()
  }
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 100%;
  .musicTop {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Title {
      font-size: 0.4rem;
      margin-left: 0.2rem;
      font-weight: 700;
    }
    .More {
      border: 1px solid rgb(12, 10, 10);
      border-radius: 0.3rem;
      padding: 0.1rem 0.2rem;
      font-size: 0.3rem;
      margin-right: 0.2rem;
    }
  }
  .musicContent {
    width: 100%;

    .contentSwipe {
      width: 100%;
      height: 100%;
      .van-swipe-item {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.15rem;
        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.2rem;
        }
        .musicName {
          font-size: 0.3rem;
          font-weight: 700;
          margin-left: 0.2rem;
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .musicCount {
          position: absolute;
          font-size: 0.3rem;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          right: 0.3rem;
          .icon {
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
    }
  }
}
</style>