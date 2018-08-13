<template>
<div class="menu">
<div>{{msg}}</div>

</div>
  
</template>



<script>
//局部注册组件
// import HelloWorld from './HelloWorld'
// import Header from './Header'

export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Welcome to Menu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
