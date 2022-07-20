<template>
  <div>
    <img :src="data[prop]" width="80" height="80" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    prop: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
