<template>
  <div>
    <h1>ItemMusic</h1>
    <itemMusicTop :playList="state.playList"></itemMusicTop>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getMusicItemList } from '@/request/api/item.js'
import itemMusicTop from '@/components/item/itemMusicTop.vue'
export default {
  setup () {
    const state = reactive({
      playList: {}
    })
    const route = useRoute()
    onMounted(async () => {
      console.log(route.query.id)
      const res = await getMusicItemList(route.query.id)
      console.log(res)
      state.playList = res.data.playlist
    })
    return { state }
  },
  components: {
    itemMusicTop
  }
};
</script>