<template>
  <div class="app">
    <app-header></app-header>
    <div id="nav" class="nav">
      <menu-list></menu-list>
    </div>    
    <div class="router-view-container">
      <router-view/>
    </div>    
  </div>
</template>

<script>
import MenuList from '@/components/menuList.vue';
import APPHeader from '@/components/header.vue';
export default {
  setup() {},
  components: {
    MenuList,
    'app-header': APPHeader
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  display: block;
  flex-direction: row;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 20%;
  overflow: hidden;
  text-align: left;
}

.router-view-container {
  display: flex;
  // align-items: center;
  // justify-content: center;
  overflow: auto;
  position: absolute;
  left: 255px;
  top: 75px;
  bottom: 0;
  padding-left: 10px;
  width: calc(100% - 255px);
  background: #f5f5f5;
  border-top: 1px solid #ededed;
}

.nav, .router-view-container {
  display: flex;
  flex-direction: row;
}
</style>
