<template>
    <div class="menu">
        <ul>
            <li><nuxt-link to="/">Numéros</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/a-propos">À Propos</nuxt-link></li>
            <li><nuxt-link to="/infos-pratiques">Infos pratiques</nuxt-link></li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
.menu{
    ul, li{
        display:inline-block;
        margin:0;
        padding:0;
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