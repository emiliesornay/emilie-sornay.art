<template>
  <div class="container">
    <Division illustration="" :isInverted="false">
        <h1>Contact</h1>
        <p>e-Mail<br /><a href="mailto:emilie@emilie-sornay.art">emilie@emilie-sornay.art</a></p>
        <p>Téléphone<br /><a href="tel:+33620755180-">+33 6 20 75 51 80</a></p>
        <p>Facebook<br /><a href="https://www.facebook.com/Emilie-Sornay-1894337297286843/">facebook.com/Emilie-Sornay</a></p>
        <p>Instagram<br /><a href="https://www.instagram.com/emiliesornay/">instagram.com/emiliesornay</a></p>
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
