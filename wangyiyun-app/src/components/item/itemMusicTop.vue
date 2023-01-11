<template>
  <div>
    <h2>ItemMusic</h2>
  </div>
</template>

<script>
export default {
  setup (props) {
    console.log(props)
    return {}
  },
  props: {
    playList: {
      type: Object,
      default: () => { }
    }
  }

}

</script>

<style>
</style>