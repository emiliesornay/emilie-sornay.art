<template>
  <div class="logo">
    <nuxt-link to="/">
      <img src="@/static/logo.svg" alt="" />
    </nuxt-link>
  </div>
</template>

<style lang="stylus" scoped>
.logo{
  margin:0 0 0 2rem;
  width: 8rem;
  height: 7rem;
  background:#fff;
  text-align:center;

  a{
    display:grid;
    width:100%;
    height:100%;
    align-content:center;
    justify-content:center;
  }

  img{
    display:inline-block;
    width:70%;
    justify-self:center;
  }
}
</style>
