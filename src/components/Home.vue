<template>
<div class="home">
<h1>home</h1>
  <button @click="gotoMenu" class="btn btn-success">Let's order!</button>
</div>
  
</template>



<script>

export default {
  name: 'Home',
  methods:{
    gotoMenu(){
       //跳转到上一次浏览的页面
      //this.$router.go(-1); 
      
      //跳转到指定的地址
      //this.$router.replace('/menu);

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'});

      //最常用  通过push进行跳转
      //this.$router.push('/menu);
      //this.$router.push({name:'menuLink'});
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
