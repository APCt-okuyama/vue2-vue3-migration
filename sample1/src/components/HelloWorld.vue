<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      クラスコンポーネントの利用のサンプル これってほんとにVue3？
    </p>
  </div>
</template>

<script lang="ts">
//import { Prop } from 'vue-property-decorator';
// import { Options, Vue } from 'vue-class-component';
import { Prop, Options, Vue } from "vue-property-decorator";
// @Options({
//   props: {
//     msg: String
//   }
// })
@Options({})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  //private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
