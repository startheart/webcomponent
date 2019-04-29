<template>
  <fancy-tabs id="fancy-tabs" @click.native="click" @myevent="customEvt" from="app.vue">
    <div>slot内容</div>
  </fancy-tabs>
</template>

<script>
// @ is an alias to /src
import FancyTabs from '@/components/fancy-tabs.vue'

export default {
  methods: {
    click(e) {
      console.log('【<fancy-tabs/> origin click event handler】', e)
    },
    customEvt(e) {
      console.log('【<fancy-tabs/> custom event handler】', e)
    }
  },
  components: {
    FancyTabs
  }
}
</script>

<style>
div {
  /*会影响自定义组件*/
  display: flex; 
  font-size: 24px;
}
.tabs {
  /*会影响自定义组件*/
  color: red;
  font-size: 18px;
}
#fancy-tabs {
  /*会影响自定义组件的子项*/
  display: flex; 
  flex-direction: column;
  width: 400px;
  /*会被自定义组件继承*/
  color: red; 
  font-size: 20px;
  border: 1px solid black;
}
</style>

