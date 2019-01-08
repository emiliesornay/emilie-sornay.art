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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/corde">Découvrir les numéros de corde</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="false">
        <h3>Sangles</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/sangles">Découvrir les numéros de sangles</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Tissu</h3>
        <p>
          Les numéros de tissu aérien vont vous faire prendre de la hauteur ! Les numéros peuvent s'adapter à votre évènement. Soirée privées ou à thème, anniversaire, mariage. Un moyen original d'accompagner une ambiance mémorable.
        </p>
        <nuxt-link to="/numero/tissu">Découvrir les numéros de tissu</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="false">
        <h3>Cerceau</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/cerceau">Découvrir les numéros de cerceau</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Danse &amp; portés acrobatiques</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/danse-et-portes-acrobatiques">Découvrir les numéros de danse &amp;  portés acrobatiques</nuxt-link>
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
