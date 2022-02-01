<template>
  <div>
    <Navbar/>
    <Sidebar/>
    <div class="container container-app">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/core/Navbar'
import Sidebar from './components/core/Sidebar'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
<style>
@import './assets/css/style.css';
html,
body {
  height: 100%;
  background: #f2f6fa;
}
</style>