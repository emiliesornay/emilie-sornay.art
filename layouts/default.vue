<template>
  <div>
    <nav rel="main" class="mainnav">
      <Logo />
      <Menu />
    </nav>
    <nuxt/>
    <footer class="footer">
      Émilie Sornay — © depuis 2017. <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Menu from '~/components/menu'

export default {
  components: {
    Logo,
    Menu
  }
}
</script>

<style lang="stylus" scoped>
.mainnav{
    width:100%;
    grid-template-columns: 50% 50%;
    display:grid;
    position:absolute;
    top:0;
}

.footer{
  padding:1rem 1rem;
  background:#231F20;
  color:#FBFCFD;
  font-size:0.75rem;

  a{
    color:#FBFCFD;
  }
}
</style>
