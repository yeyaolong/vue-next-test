<template>
  <div class="app">
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
export default {
  setup() {},
  components: {
    MenuList
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
  display: flex;
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
  padding-left: 12px;
}

.router-view-container {
  width: 80%;
}

.nav, .router-view-container {
  display: flex;
  flex-direction: row;
}
</style>
