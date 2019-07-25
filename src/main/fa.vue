<template>
  <div>
    <h2>这是vue-router的fa组件</h2>
    <router-link to='/fa/login'>login</router-link>
    <router-link to='/fa/register'>register</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
  div{
    color:blue ;
    h2{
      color:coral;
    }
  }
</style>



