<template>
<div id="app">
    <HeaderView />
    <router-view></router-view>
    <FooterView />
</div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';


export default {
    name: 'App',
    components: {
        HeaderView,
        FooterView,
        

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
