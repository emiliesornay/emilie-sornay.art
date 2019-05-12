<template>
    <div>
        <Division illustration="photos/numeros/sangles/emilie-sornay-sangles-5.jpg" :isInverted="false">
            <h1>Sangle</h1>
            <p>Pour les plus contemporains, laissez vous entraîner par la puissance d’un numéro de sangles. Entre l’air et la terre, force et agilité, saurez vous suivre les pas de cette intense et élégante chorégraphie.</p>
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
        'photos/numeros/sangles/emilie-sornay-sangles-1.jpg',
        'photos/numeros/sangles/emilie-sornay-sangles-2.jpg',
        'photos/numeros/sangles/emilie-sornay-sangles-3.jpg',
        'photos/numeros/sangles/emilie-sornay-sangles-4.jpg',
        'photos/numeros/sangles/emilie-sornay-sangles-6.jpg'
      ]
    }
  }
}
</script>