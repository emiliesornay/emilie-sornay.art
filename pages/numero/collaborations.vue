<template>
    <div>
        <Division illustration="photos/numeros/collaborations/maeva/emilie-sornay-collaborations-maeva-3.jpg" :isInverted="false">
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
        <galery-inline :items="gallery"></galery-inline>
    </div>
</template>

<script>
import Division from '~/components/Division.vue'
import GaleryInline from '~/components/GalleryInline.vue'

export default {
  components: {
    Division,
    GaleryInline
  },
  data:() => {
    return{
      gallery: [
        'photos/numeros/collaborations/duo-rhealia/emilie-sornay-collaborations-duo-rhealia-1.jpg',
        'photos/numeros/collaborations/duo-rhealia/emilie-sornay-collaborations-duo-rhealia-2.jpg',
        'photos/numeros/collaborations/duo-rhealia/emilie-sornay-collaborations-duo-rhealia-3.jpg',
        'photos/numeros/collaborations/maeva/emilie-sornay-collaborations-maeva-1.jpg',
        'photos/numeros/collaborations/maeva/emilie-sornay-collaborations-maeva-2.jpg'
      ]
    }
  }
}
</script>