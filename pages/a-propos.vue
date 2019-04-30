<template>
  <div class="container">
    <Division illustration="" :isInverted="false">
        <h1>À Propos</h1>
        <p>Commençant la danse dès son plus jeune âge dans les écoles et conservatoires, Émilie poursuit sa formation à l’Académie de danse Princesse Grace à monaco sous la direction de Marika Besobrasova.</p>
        <p>Par la suite et parallèlement à son parcours de danseuse, elle s’intéresse aux arts du cirque avec différents apprentissages en Tissu, corde puis en sangles au CNAC — Centre national des arts du cirque avec Jonathan Fortin.</p>
        <nuxt-link to="/">Consulter les numéros</nuxt-link>
    </Division>
  </div>
</template>

<script>
import Division from '~/components/Division.vue'

export default {
  components: {
    Division
  }
}
</script>

<style>

</style>