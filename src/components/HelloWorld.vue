<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ако искаш да ти направя пишката по-голяма просто си свали гащите, <br/>застани пред екрана,
      напиши желаната стойност в сантиметри долу във формата, кажи:
    </p>
    <h3>Слава на ангела Кинмуолам!</h3>
    <br/>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="number" required="required" min="22">
        <h4>След това просто кликни на бутона по-долу и очаквай неочакваното</h4>
        <input type="submit" value="Увеличи">
      </form>
    </div>
    <Modal v-if="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'
@Component({
  components: { Modal }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private showModal = false
  onSubmit () {
    this.showModal = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
