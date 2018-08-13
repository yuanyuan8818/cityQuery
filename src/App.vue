<template>
<div id="app">
  <!-- <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/helloworld">helloworld</router-link></li>
  </ul> -->
  <div class="container">
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
  <div class="container">
       <!-- 路由找到根目录后需要展示 -->
  </div>
  
</div>
  
</template>

<script>
import Header from './components/Header'

export default {
  components:{
    appHeader: Header
  }
}
</script>

<style>

</style>
