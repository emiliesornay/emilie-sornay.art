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
        <h3>Sangle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/sangle">Découvrir les numéros de sangle</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Tissus</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/tissus">Découvrir les numéros de tissus</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="false">
        <h3>Cerceau</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/cerceau">Découvrir les numéros de cerceau</nuxt-link>
    </Division>
    <Division illustration="" :isInverted="true">
        <h3>Danse</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis at, corporis voluptates accusantium eveniet voluptatibus voluptas cum dolorem qui autem commodi molestias ut, libero, sequi reiciendis nobis eos iusto?
        </p>
        <nuxt-link to="/numero/danse">Découvrir les numéros de danse</nuxt-link>
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
