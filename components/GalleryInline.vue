<template>
    <section class="galleryinline">
        <div v-for="(item, index) in items" :key="index">
            <img :src="`/${item}`" :alt="`photo ${index}`" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: { type:Array, default:[], required:true}
    }
}
</script>

<style lang="stylus" scoped>
.galleryinline{
    > div{
        margin:1rem auto;
        text-align:center;

        img{

            display:inline-block;
            max-width:800px;
            width:80%;
        }
    }
}
</style>