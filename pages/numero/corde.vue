<template>
    <div>
        <Division illustration="photos/numeros/corde/emilie-sornay-corde-1.jpg" :isInverted="false">
            <h1>Corde</h1>
            <p>Pour les éperdus de tradition, laissez vous surprendre par l’ascension étonnante d’une corde lisse. Découvrez la féminité cachée dans chaque tourbillon de ce numéro.</p>
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
        'photos/numeros/corde/emilie-sornay-corde-2.jpg',
        'photos/numeros/corde/emilie-sornay-corde-3.jpg',
        'photos/numeros/corde/emilie-sornay-corde-4.jpg',
        'photos/numeros/corde/emilie-sornay-corde-5.jpg'
      ]
    }
  }
}
</script>