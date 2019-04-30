<template>
  <div class="container">
    <Division illustration="" :isInverted="false">
        <h1>Émilie Sornay</h1>
        <h2>Danseuse &amp; Acrobate</h2>
        <p>↓</p>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Corde</h3>
        <p>
          Tout en gardant le coté aérien la corde vous fera découvrir un aspect contemporain.
        </p>
        <nuxt-link to="/numero/corde">Découvrir les numéros de corde</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="false">
        <h3>Sangles</h3>
        <p>
          Un agrés aérien physique 
        </p>
        <nuxt-link to="/numero/sangles">Découvrir les numéros de sangles</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Tissu</h3>
        <p>
          Ajoutez une touche originale, atypique et poétique à vos évènements avec le tissus aérien.
        </p>
        <nuxt-link to="/numero/tissu">Découvrir les numéros de tissu</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="false">
        <h3>Collaborations</h3>
        <p>
          La collaboration permet d'explorer et de repousser les limites physiques et artistiques.
        </p>
        <nuxt-link to="/numero/collaborations">Découvrir les numéros en collaborations</nuxt-link>
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

<style lang="stylus" scoped>


</style>
