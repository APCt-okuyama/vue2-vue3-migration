<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// import { Options as Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue { }
// import { defineComponent } from "@vue/composition-api";
import { defineComponent } from 'vue';
import { Options as Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
  props: {},
  setup(_props, ctx) {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
