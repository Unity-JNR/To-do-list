<template>
     <div>
    <nav>
      <button class="btn" v-if="isUserPage">
   <router-link to="/"><i class="fa fa-arrow-circle-left"></i></router-link> 
  </button>
      <router-link v-if="$cookies.get('jwt')" to="/user"><i class="fa fa-portrait"></i></router-link>
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
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      isUserPage: false
    };
  },
  created() {
    // Check the current route when the component is created
    this.checkCurrentRoute();
    // Listen for route changes and update the visibility of the button
    this.$router.afterEach(() => {
      this.checkCurrentRoute();
    });
  },
  methods: {
    async logout() {
  await this.$store.dispatch('logout');
  toast.success("Successfully logged out", { theme: "dark", timeout: 5000 });

  // Wait for 3 seconds before routing
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Change route
  this.$router.push("/").then(() => {
    // Wait until the next tick after route change
    this.$nextTick(() => {
      location.reload();
    });
  });
}
,
    checkCurrentRoute() {
      // Check if the current route is the home page
      this.isUserPage = this.$route.path === '/user';
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