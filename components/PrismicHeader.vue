<template>
  <header class="navbar">
    <p v-if="$store.state.menu === 'please create a menu document'"></p>
    <nuxt-link to="/" class="logo">{{
      $prismic.asText($store.state.menu.title)
    }}</nuxt-link>
    <nav>
      <ul class="navLinks">
        <li
          v-for="menuLink in $store.state.menu.menuLinks"
          :key="menuLink.id"
          class="navItem"
        >
          <NuxtLink :to="menuLink.link.url">{{
            $prismic.asText(menuLink.label)
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PrismicHeader',
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 2em;

  background-color: #fff021;
  background-color: var(--geel);
  width: 100vw;
  /* width: 100%; */
  /* width: calc(100% - 2em); */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 19;
}

.logo {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  color: var(--black);
}

.navLinks {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  width: 60vw;
}

.navLinks > li {
  padding: 0;
  /* padding: 0 1em; */
}

.navItem a {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
  margin: 0.5em 1em;
  padding: 0.5em 0;
}

li {
  display: block;
  float: left;
  padding: 0.8rem;
  position: relative;
  text-decoration: none;
  transition-duration: 200ms;
}

li a {
  color: var(--white);
}

li:hover {
  background: var(--black);
  color: var(--white);
  cursor: pointer;
}

li:active{
  font-weight: bold;
}

@media screen and (max-width: 820px) {
  a {
    font-size: 1em;
  }
}

@media screen and (max-width: 1100px) {
  .navbar > * {
    font-size: 0.8em;
  }
}

@media only screen and (max-device-width: 820px) {
  .navbar {
    flex-wrap: wrap;
    margin-bottom: 20em;
  }

  .navItem {
    margin-top: 1em;
  }

  .navLinks {
    flex-direction: column;
    width: 100vw;
  }

  .navLinks > li {
    padding: 0em;
  }
}
</style>

</style>