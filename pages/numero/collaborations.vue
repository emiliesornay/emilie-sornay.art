<template>
    <div>
        <Division illustration="" :isInverted="false">
            <h1>Collaborations</h1>

            <h2>Céline Dellagrisa </h2>
            <p>La chanteuse niçoise Céline Dellagrisa allie sa performance vocale à celle du tissu d'Émilie Sornay pour délivrer une expérience visuelle et auditive exceptionnelle.</p>
            <a href="https://www.notedecel.com/">Visiter de site de Note de Cel'</a>
            <br /><br />

            <h2>Spectacle équin</h2>
            <p>Depuis 2018, Émilie Sornay &amp; Maeva Munier proposent une création originale et poétique d'un spectacle aérien et équestre.</p>
            <a href="https://tissuequestre.wixsite.com/spectacle">Visiter le site du duo Émilie et Maeva</a>
            <br /><br />

            <h2>Duo Rhéalia</h2>
            <p>Depuis 2013, Émilie Sornay évolue aussi au sein du Duo Rhéalia comme danseuse et acrobate avec des numéros originaux.</p>
            <a href="https://www.duo-rhéalia.com">Visiter Duo Rhéalia</a>
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