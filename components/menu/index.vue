<template>
    <div class="menu">
        <ul>
            <li><nuxt-link to="/">numéros</nuxt-link></li>
            <li><nuxt-link to="/contact">contact</nuxt-link></li>
            <li><nuxt-link to="/a-propos">à propos</nuxt-link></li>
            <li><nuxt-link to="/infos-pratiques">infos pratiques</nuxt-link></li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
.menu{
    margin-bottom:3rem;
    ul, li{
        margin:0;
        padding:0;
        text-align:center;

        @media media_queries.tablet-up {
            display:inline-block;
            text-align:left;
        }
    }

    a{
        text-decoration:none;
        font-variant:small-caps;
        color:#000;
        display:inline-block;
        margin:0 1rem;
        border-bottom:1px none solid;
        transition: all 0.2s ease-in-out;

        &.nuxt-link-exact-active{
            border-bottom:1px #000 solid;
        }

        &:hover {
            color:#FD6861;
        }
    }
}
</style>