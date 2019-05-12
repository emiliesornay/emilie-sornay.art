<template>
  <div class="container">
    <Division illustration="photos/index/emilie/emilie-sornay-portrait.jpg" :isInverted="false">
        <h1>Émilie Sornay</h1>
        <h2>Danseuse &amp; Acrobate</h2>
        <p>↓</p>
    </Division>
    <Division illustration="photos/index/corde/emilie-sornay-corde.jpg" :isInverted="true">
        <h3>Corde</h3>
        <p>
          Pour les éperdus de tradition, laissez vous surprendre par l’ascension étonnante d’une corde lisse. Découvrez la féminité cachée dans chaque tourbillon de ce numéro.
        </p>
        <nuxt-link to="/numero/corde">Découvrir les numéros de corde</nuxt-link>
    </Division>
    <Division illustration="photos/index/sangles/emilie-sornay-sangles.jpg" :isInverted="false">
        <h3>Sangles</h3>
        <p>
         Pour les plus contemporains, laissez vous entraîner par la puissance d’un numéro de sangles. Entre l’air et la terre, force et agilité, saurez vous suivre les pas de cette intense et élégante chorégraphie.
        </p>
        <nuxt-link to="/numero/sangles">Découvrir les numéros de sangles</nuxt-link>
    </Division>
    <Division illustration="photos/index/tissu/emilie-sornay-tissu.jpg" :isInverted="true">
        <h3>Tissu</h3>
        <p>Pour les puristes, laissez vos yeux prendre de la hauteur avec un spectacle de tissus aérien dans lequel se mêlent souplesse et force. Une touche poétique qui rendra votre événement atypique ! Les numéros peuvent être adaptés à l'ambiance de votre soirée.</p>
        <nuxt-link to="/numero/tissu">Découvrir les numéros de tissu</nuxt-link>
    </Division>
    <Division illustration="photos/index/collaborations/emilie-sornay-collaborations.jpg" :isInverted="false">
        <h3>Collaborations</h3>
        <p>
          La collaboration avec d'autres artistes permet de s'affranchir des limites d'une seule discipline, dans une recherche artistique. Elle propose également une complicité au sein d'un même agrès.
          En collaboration dans une même discipline, les numéros de tissu et de sangles sont proposés en duo.
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
