<template>
<div class="about">
<div>{{msg}}</div>

</div>
  
</template>



<script>
//局部注册组件
// import HelloWorld from './HelloWorld'
// import Header from './Header'

export default {
  name: 'About',
  data () {
    return {
      msg: 'About us'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
