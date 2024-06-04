<template>
  <button class="btn" v-if="isHomePage">
   <router-link to="/"><i class="fa fa-arrow-circle-left"></i></router-link> 
  </button>
    <div class="container d-flex justify-content-center">
        <div class="card" v-for="item in $store.state.singleuser" :key="item">

  <img class="profile-pic" src="https://cdn-images.imagevenue.com/c5/ce/d6/ME18EEQQ_o.png" alt="default"> 

  
  <div class="bottom">
    <div class="content">
      <span class="name">My Name : {{ item.username }}</span>
      <span class="about-me"
        >{{ item.email }}
      </span>
          </div>
    <div class="bottom-bottom">
      <button class="button" @click="deleteuser(item.user_id)">Delete</button>
      <button type="button" class="button" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+item.user_id">
                                            edit
                                            </button>
    
                                            <!-- Modal -->
                                            
                                          </div>
                                        </div>
                                        
                                        <div class="modal fade" :id="'exampleModal'+item.user_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <input id="input" type="text" placeholder="name" v-model="username">
                                                <input id="input" type="text" placeholder="mail" v-model="email">
                                                <input id="input" type="text" placeholder="userRole" v-model="role">
                                                <input id="input" type="text" placeholder="userPass" v-model="password">
                                                
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="updateuser(item.user_id)" >Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
    </div>
  </div>

</template>
<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      isHomePage: false,
      username: "",
            password:"",
            email:"",
            role: 'user'
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
    computed : {
      getuser(id){
        const userID = this.$cookies.get('user_id');
        this.$store.dispatch("getuser",userID)
      }
    },
    methods : {
     async deleteuser(id) {
        this.$store.dispatch("deleteuser",id)
        toast.success("Successfully deleted task", { theme: "dark", timeout: 1000 })
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.$router.push('/')
        location.reload()

      },
      checkCurrentRoute() {
      // Check if the current route is the home page
      this.isHomePage = this.$route.path === '/';
    },
    async updateuser(user_id){
      let edit = {
        id: user_id,
        username: this.username,
        email: this.email,
        password:  this.password,
        role: this.role,
  
    };
    this.$store.dispatch('updateuser', edit)
    toast.success("Successfully updated task", { theme: "dark", timeout: 1000 })
    await new Promise(resolve => setTimeout(resolve, 1000));
    location.reload()
    }
  
    },
    mounted(){
      this.getuser
    }
}
</script>
<style scoped>

.container{
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    height: 75vh;
    /* width: 100vw; */
}
   .card {
  width: 280px;
  height: 280px;
  background: white;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: #604b4a30 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;
}

.card .mail {
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  background: transparent;
  border: none;
}

.card .mail svg {
  stroke: #fbb9b6;
  stroke-width: 3px;
}

.card .mail svg:hover {
  stroke: #f55d56;
}

.card .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solid #fbb9b6;
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.card .profile-pic img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transition: all 0.5s ease-in-out 0s;
}

.card .profile-pic svg {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transform-origin: 45% 20%;
  transition: all 0.5s ease-in-out 0s;
}

.card .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: #fbb9b6;
  top: 80%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card .bottom .content {
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 160px;
}

.card .bottom .content .name {
  display: block;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

.card .bottom .content .about-me {
  display: block;
  font-size: 0.9rem;
  color: white;
  margin-top: 1rem;
}

.card .bottom .bottom-bottom {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .bottom .bottom-bottom .social-links-container {
  display: flex;
  gap: 1rem;
}

.card .bottom .bottom-bottom .social-links-container svg {
  height: 20px;
  fill: white;
  filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}

.card .bottom .bottom-bottom .social-links-container svg:hover {
  fill: #f55d56;
  transform: scale(1.2);
}

.card .bottom .bottom-bottom .button {
  background: white;
  color: #fbb9b6;
  border: none;
  border-radius: 20px;
  font-size: 0.6rem;
  padding: 0.4rem 0.6rem;
  box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
}

.card .bottom .bottom-bottom .button:hover {
  background: #fbb9b6;
  color: white;
}

.card:hover {
  border-top-left-radius: 55px;
}

.card:hover .bottom {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .profile-pic {
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  z-index: 3;
  border: 7px solid #fbb9b6;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profile-pic:hover {
  transform: scale(1.3);
  border-radius: 0px;
}

.card:hover .profile-pic img {
  transform: scale(2.5);
  -o-object-position: 0px 25px;
  object-position: 0px 25px;
  transition: all 0.5s ease-in-out 0.5s;
}

.card:hover .profile-pic svg {
  transform: scale(2.5);
  transition: all 0.5s ease-in-out 0.5s;
}


 
</style>