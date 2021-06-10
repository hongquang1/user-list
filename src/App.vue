<template>
  <div class="app">
    <UserList />
  </div>
</template>

<script>
import UserList from './views/UseList.vue'

export default {
  name: "App",
  components: {
    UserList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #ffffff;
}
</style>
