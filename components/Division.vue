<template>
    <section class="division" :class="{ 'division--inverted': isInverted }">
        <div class="illustration" :style="`background-image:url('/${illustration}');`"></div>
        <div class="content"><slot></slot></div>
    </section>
</template>

<script>
export default {
    props: {
        illustration: { default:'', required:false},
        isInverted: { default:false, required:false}
    },
    components: {
    }
}
</script>

<style lang="stylus" scoped>

.division{

    @media media_queries.tablet-up {
        height: calc(100vh - 3.75rem );
        width:100%;
    }

    @media media_queries.tablet-up {
        grid-template-columns: 50% 50%;
        display:grid;
    }

    &--inverted{
         @media media_queries.tablet-up {
            .illustration{
                grid-column: 2 / end;
                grid-row: 1;
            }
            .content{
                grid-column: 1/2;
                grid-row: 1;
            }
        }
    }

    .illustration{
        background-size:cover;
        background-repeat:no-repeat;
        background-position:50% 50%;
        background-color: #fd746c;  /* fallback for old browsers */
        background-gradient: -webkit-linear-gradient(to right, #ff9068, #fd746c);  /* Chrome 10-25, Safari 5.1-6 */
        background-gradient: linear-gradient(to right, #ff9068, #fd746c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        width:100vw;
        height:100vh;

        @media media_queries.tablet-up {
            width:auto;
            height:auto;
        }
    }

    .content{
        padding:1rem 1rem;
        @media media_queries.tablet-up {
            padding:4rem 5rem;
        }

        @media media_queries.tablet-up {
            justify-self: center;
            align-self: center;
        }

    }
}

h1{
    font-weight:600;
    font-size:1.2rem;
}
h2{
    font-size:1.1rem;
}


a{
    display:inline-block;
    padding:0.2rem 0.6rem;
    border:1px #FD6F60 solid;
    color:#FD6F60;
    border-radius:5px;
    text-decoration:none;

    &:hover{
        background:#FBFCFD;
    }

    &[href^="tel:"],
    &[href^="mailto:"],
    &[href^="https://www.facebook.com"],
    &[href^="https://www.instagram.com"]{
        // padding:0;
        // border:none;
        // font-weight:600;
    }
}
</style>