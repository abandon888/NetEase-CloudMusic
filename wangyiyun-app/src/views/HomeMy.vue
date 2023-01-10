<template>
  <div class="home">
    <topNav></topNav>
    <swpierTop></swpierTop>
  </div>
</template>

<script>
import topNav from '@/components/home/topNav.vue'
import swpierTop from '@/components/home/swpierTop.vue'
export default {
  name: 'HomeMy',
  components: {
    topNav, swpierTop
  }
}
</script>