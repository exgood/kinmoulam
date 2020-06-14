<template>
  <div class="home">
    <img alt="ангелът Кинмоулам" src="../assets/logo.png">
    <HelloWorld msg="Аз съм ангелът Кинмуолам и увеличавам пишки"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
