<template>
    <div>
        <Division illustration="photos/numeros/tissu/emilie-sornay-tissu-1.jpg" :isInverted="false">
            <h1>Tissu</h1>
            <p>Pour les puristes, laissez vos yeux prendre de la hauteur avec un spectacle de tissus aérien dans lequel se mêlent souplesse et force. Une touche poétique qui rendra votre événement atypique ! Les numéros peuvent être adaptés à l'ambiance de votre soirée.</p>
        </Division>

        <div class="video">
          <div class='embed-container'><iframe src='https://www.youtube.com/embed//8_WP2lGjQdw' frameborder='0' allowfullscreen></iframe></div>
        </div>

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
        'photos/numeros/tissu/emilie-sornay-tissu-2.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-3.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-4.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-5.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-6.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-7.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-8.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-9.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-10.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-11.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-12.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-13.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-14.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-15.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-16.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-17.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-18.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-19.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-20.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-21.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-22.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-23.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-24.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-25.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-26.jpg',
        'photos/numeros/tissu/emilie-sornay-tissu-27.jpg',
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.video{
  margin:2rem auto 3rem auto;
  width:90%;
}
.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>