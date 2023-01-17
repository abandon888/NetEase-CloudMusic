<template>
  <div class="itemMusicTop">
    <img :src="playList.coverImgUrl" alt="" class="bgimg">
    <div class="itemLeft">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-shangyishou"></use>
    </svg>
    <span>歌单</span>
  </div>
  <div class="itemRight">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-bofangliebiao"></use>
    </svg>
  </div>
  </div>
  <div class="itemMusicContent">
    <div class="itemMusicContentTop">
      <div class="contentTop">
      <!-- 这里是图片 -->
      <div class="itemMusicContentTopLeft">
        <img :src="playList.coverImgUrl" alt="">
      </div>
      <!-- 这里是右半部分的文字 -->
      <div class="itemMusicContentTopRight">
        <!-- 歌单名字 -->
        <div class="itemMusicContentTopRightTop">
          <span>{{playList.name}}</span>
        </div>
        <!-- 歌单作者及描述 -->
        <div class="itemMusicContentTopRightBottom">
          <span>by {{playList.creator.nickname}}></span>
          <div>{{playList.description}}</div>
        </div>
      </div>
    </div>
      <!-- 功能列表 -->
      <div class="iconList">
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-quanxuan"></use>
          </svg>
          <span>每日推荐</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diantai"></use>
          </svg>
          <span>私人FM</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changpian"></use>
          </svg>
          <span>歌单</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihang"></use>
          </svg>
          <span>排行榜</span>
        </div>
      </div>
    </div>
    <div class="itemMusicContentBottom">
      <div class="itemMusicContentBottomTop">
        <span>歌曲列表</span>
        <span>共{{playList.trackCount}}首</span>
      </div>
      <div class="itemMusicContentBottomBottom">
        <div class="itemMusicContentBottomBottomTop">
          <span>序号</span>
          <span>歌曲标题</span>
          <span>时长</span>
        </div>
        <div class="itemMusicContentBottomBottomBottom">
          <div class="itemMusicContentBottomBottomBottomItem" v-for="(item,index) in playList.tracks" :key="item.id">
            <span>{{index+1}}</span>
            <span>{{item.name}}</span>
            <span>{{item.dt}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  setup (props) {
    console.log(props)
    return {}
  },
  updated () {
    console.log(this.playList)
  },
  props: {
    playList: {
      type: Object,
      default: () => { }
    }
  }

}

</script>

<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bgimg {
    width: 100%;
    height: 9rem;
    position: fixed;
    z-index: -1;
    filter: blur(0.5rem);
  }
  .itemLeft {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    svg {
      width: 0.5rem;
      height: 0.5rem;
    }
    span {
      font-size: 0.4rem;
      margin-left: 0.2rem;
    }
  }
  .itemRight {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    svg {
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.5rem;
    }
  }
}
.itemMusicContent {
  width: 100%;
  height: 100%;
  .itemMusicContentTop {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    .itemMusicContentTopLeft {
      width: 5rem;
      height: 5rem;
      img {
        width: 3rem;
          height: 3rem;
          border-radius: 0.2rem;
      }
    }
    .iconList {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .iconItem {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .icon {
      width: 1rem;
      height: 1rem;
    }
    span {
      font-size: 0.3rem;
    }
    .itemMusicContentTopRight {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .itemMusicContentTopRightTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.4rem;
          color: whitesmoke;
          font-weight: 600;
        }
        svg {
          width: 0.5rem;
          height: 0.5rem;
        }
      }
      .itemMusicContentTopRightBottom {
        position: relative;
        margin:0 auto;
        div{
          font-size: 0.2rem;
          color: rgb(35, 30, 30);
          font-weight: 500;
          height: 0.6rem;
          overflow: hidden;
        }
        span {
          font-size: 0.3rem;
          color: rgb(35, 30, 30);
          font-weight: 500;
        }
      }
    }
  }
  .itemMusicContentBottom {
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
    .itemMusicContentBottomTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.4rem;
      };
    }
    .itemMusicContentBottomBottom {
      width: 100%;
      height: 100%;
      .itemMusicContentBottomBottomTop {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.3rem;
        }
      }
      .itemMusicContentBottomBottomBottom {
        width: 100%;
        height: 100%;
        .itemMusicContentBottomBottomBottomItem {
          width: 100%;
          height: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
</style>