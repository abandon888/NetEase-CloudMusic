<template>
  <div class="home">
    <topNav></topNav>
    <swpierTop></swpierTop>
    <iconList></iconList>
  </div>
</template>

<script>
import topNav from '@/components/home/topNav.vue'
import swpierTop from '@/components/home/swpierTop.vue'
import iconList from '@/components/home/iconList.vue'
export default {
  name: 'HomeMy',
  components: {
    topNav, swpierTop, iconList
  }
}
</script>