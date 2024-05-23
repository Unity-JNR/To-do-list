<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style >
:root {
    --main-dark: #080808;  /* Dark background */
    --main-darker: #111111;  /* Darker background */
    --main-darkest: #000000;  /* Darkest background */
    --neutral-gray: #808080;  /* Neutral gray */
    --background-light: #f5f5f5;  /* Light background */
    --highlight-orange: #ff8c00;  /* Orange highlight */
    --highlight-green: #00cc66;  /* Green highlight */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: var(--main-darkest) !important; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
