<template>
<div id="app">
    <HeaderView />
    <HomeView />
    <FooterView />
</div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import HomeView from './components/views/HomeView.vue';

export default {
    name: 'App',
    components: {
        HeaderView,
        FooterView,
        HomeView,

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    
}
</style>
