<template>
  <div class="wrap" bubble="true">
    <div class="tabs">
      <slot></slot>
    </div>
    <text class="panels" @click="click">Shadow Root 子项内容</text>
  </div>
</template>

<script>
export default {
  name: 'FancyTabs',
  props: {
    from: String
  },
  methods: {
    click() {
      this.$emit('myevent', {
        from: this.from
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  flex-direction: column;
}
.tabs { 
  align-self: center;
}
:host {
  font-weight: 100; /* 无作用*/
}
.panels {
  color: green;
  font-size: 12px;
}
</style>
