<template>
  <div class="sticky-top">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/login">About</router-link> | -->
      <router-link to="/user" v-if="$cookies.get('jwt')">user</router-link> 
      <button @click="logout()" v-if="$cookies.get('jwt')" class="buttons">
      logout
    </button>
    <button class="buttons"  v-if="!$cookies.get('jwt')" >
      <router-link to="/login">Login</router-link>
    </button>
    </nav>
  </div>
  <router-view/>
</template>

<script>

export default {
  methods: {
   logout(){
      this.$store.dispatch('logout') 
    }
  }
}

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f4e1d2!important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}



.buttons {
  color: #fff;
  background: linear-gradient(142.99deg, #ff7e5f 15.53%, #feb47b 88.19%);
  box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 10px auto;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  transition: all 0.3s ease;
  width: 100px;
  position: absolute;
  right: 30px;
  top: 30px;
}

.buttons:hover {
  background: linear-gradient(142.99deg, #feb47b 15.53%, #ff7e5f 88.19%);
}

.buttons:focus {
  outline: none;
  box-shadow: 0px 0px 10px rgba(255, 126, 95, 0.7);
}
</style>
