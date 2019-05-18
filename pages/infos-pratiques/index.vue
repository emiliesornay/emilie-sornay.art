<template>
    <section class="main">
        <div>
            <h1>Informations pratiques</h1>
            <h2>Matériel</h2>
            <h3>Corde</h3>
            <p><a href="/documents/fiches_techniques/emilie-sornay-fiche-technique-corde.pdf" download target="_blank">Télécharger la fiche technique</a></p>
            <h3>Tissus &amp; structure</h3>
            <p><a href="/documents/fiches_techniques/emilie-sornay-fiche-technique-tissu-aerien.pdf" download target="_blank">Télécharger la fiche technique</a></p>
            <h3>Sangles</h3>
            <p><a href="/documents/fiches_techniques/emilie-sornay-fiche-technique-sangles.pdf" download target="_blank">Télécharger la fiche technique</a></p>
            <h3>Structure</h3>
            <p><a href="/documents/Certificat-CE-TRIPODE.pdf" download target="_blank">Télécharger le certificat CE</a></p>
            <galery-inline :items="gallery"></galery-inline>
        </div>
    </section>
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
        'photos/info-pratiques/portique/emilie-sornay-infopratiques-portique-1.jpg',
        'photos/info-pratiques/portique/emilie-sornay-infopratiques-portique-2.jpg',
        'photos/info-pratiques/portique/emilie-sornay-infopratiques-portique-3.jpg',
        'photos/info-pratiques/portique/emilie-sornay-infopratiques-portique-4.jpg',
        'photos/info-pratiques/portique/emilie-sornay-infopratiques-portique-5.jpg'
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
section.main{
    padding:1rem 1rem 1rem 1rem;
    justify-content:center;
    max-width:1000px;
    margin:0 auto;

     @media media_queries.tablet-up {
         padding-top:8rem;
        min-height:calc( 100vh - 13rem);
     }

    a{
        color:#fd6861;
    }
}

</style>