<template>
  <div>
    <navbar> </navbar>
    <div class="App"> </div>
    <div class="container">
      <router-view></router-view>              
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar';

export default {
    name: 'app',
    components: { navbar },
};
</script>

<style>
  #app {
    font-family: 'Inconsolata', monospace, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    font-family: 'Inconsolata', monospace;
  }

  @import '../node_modules/bulma/css/bulma.css';
</style>
