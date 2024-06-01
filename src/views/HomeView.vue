<template>
  
  <div class="home">
    <h1 class="heading">
      <i class="fas fa-tasks"></i>
      To Do List
    </h1>
  </div>

  

  <div class="containers">
    <input type="text" name="text" placeholder="Enter your tasks" class="input" v-model="task_name">
    <label for="d_o_s" class="date-label">date of start:</label><input type="date" v-model="d_o_s"> 
    <label for="d_o_s" class="date-label">date of completion:</label> <input type="date" v-model="d_o_c">
    <input type="submit" value="add task" class="btn"  @click="addTask()">
    
  </div>

  <div v-if=" isLoggedIn && $store.state.Task.length > 0">
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-lg-3 m-5" v-for="task in $store.state.Task" :key="task.user_id">
          <div class="box">
            <div class="task">
              <p>{{ task.task_name }}</p>
              <p>{{ task.d_o_s }}</p>
              <p>{{ task.d_o_c }}</p>
              <button type="button" class="btns" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+task.idtasks">
                                             edit
                                             </button>
     
                                             <!-- Modal -->
                                             <div class="modal fade" :id="'exampleModal'+task.idtasks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                             <div class="modal-dialog">
                                                 <div class="modal-content">
                                                 <div class="modal-header">
                                                     <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                                                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                 </div>
                                                 <div class="modal-body">
                                                  <input type="text" name="text" placeholder="Enter your tasks" class="input" v-model="task_name">
                                                   <label for="d_o_s" class="date-label">dos:</label><input type="date" v-model="d_o_s"> 
                                                    <label for="d_o_s" class="date-label">doc:</label> <input type="date" v-model="d_o_c">
                                                 </div>
                                                 <div class="modal-footer">
                                                     <button type="button" class="btn btn-secondary btns" data-bs-dismiss="modal">Close</button>
                                                     <button type="button" class="btn btn-primary btns" @click="updateTask(task.idtasks)">Save changes</button>
                                                 </div>
                                                 </div>
                                             </div>
                                             </div>
              <button class="btns" @click="deleteTask(task.idtasks)">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <!-- <p>No tasks available.</p> -->
  </div>



</template>

<script>
export default {
  data(){
    return {

      d_o_s : "",
      d_o_c : "",
      task_name : ""

    }

  },
  computed: {
    tasks() {
       this.$store.state.Task;
    },
    isLoggedIn() {
      // Replace this with the actual check for user login status
      return !!this.$cookies.get('user_id');
    }
  },
  methods: {
    fetchTasks() {
      if (this.isLoggedIn) {
        this.$store.dispatch('getTask', this.$cookies.get('user_id'));
      }
    },
  async  addTask() {
      const userID = this.$cookies.get('user_id');
      const task = {
        task_name: this.task_name,
        d_o_s: this.d_o_s,
        d_o_c: this.d_o_c,
        user_id: userID
      };
    await  this.$store.dispatch('addTask', task);
    },
    deleteTask(id){
      this.$store.dispatch('deleteTask', id);
    },
    updateTask(idtasks){
      let edit = {
        id: idtasks,
        task_name: this.task_name,
        d_o_s: this.d_o_s,
        d_o_c: this.d_o_c,
    };
    this.$store.dispatch('updateTask', edit)
    }
  
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left) */
  padding: 20px;
  background-color: #f4e1d2; /* Cream */
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  max-width: 400px;
  margin: 20px; /* Add margin to position the box from the top left */
  position: absolute; /* Position the box absolutely */
  top: 0; /* Align to top */
  left: 0; /* Align to left */
}

.heading {
  font-weight: 700;
  line-height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
}

.containers {
  
  padding: 20px;
  border-radius: 8px;
  margin: 80px auto; /* Adjust margin to provide space between container and home */
  width: 100%;
  max-width: 400px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}
.input[type = "text"] {
  display: block;
  color: rgb(34, 34, 34);
  background: linear-gradient(142.99deg, rgba(217, 217, 217, 0.63) 15.53%, rgba(243, 243, 243, 0.63) 88.19%);
  box-shadow: 0px 12px 24px -1px rgba(0, 0, 0,0.18);
  border-color: rgba(7, 4, 14, 0);
  border-radius: 50px;
  block-size: 20px;
  margin: 7px auto;
  padding: 18px 15px;
  outline: none;
  text-align: center;
  width: 200px;
  transition: 0.5s;
}

.input[type = "text"]:hover {
  width: 240px;
}

.input[type = "text"]:focus {
  width: 280px;
}

.box {
  display: flex;
  flex-direction: column;
   padding: 20px;
  background-color: #ffad8b  ; /* Cream */
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
 width: 300px;

}
.task p {
  margin: 0;
  padding: 5px 0;
}
input[type="submit"] {
  display: block;
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
  width: 150px;
}

.btns {
  display: inline-block; 
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
  /* width: 150px; */
}
.btns:hover {
  background: linear-gradient(142.99deg, #feb47b 15.53%, #ff7e5f 88.19%);
}

.btns:focus {
  outline: none;
  box-shadow: 0px 0px 10px rgba(255, 126, 95, 0.7);
}

input[type="submit"].btn:hover {
  background: linear-gradient(142.99deg, #feb47b 15.53%, #ff7e5f 88.19%);
}

input[type="submit"].btn:focus {
  outline: none;
  box-shadow: 0px 0px 10px rgba(255, 126, 95, 0.7);
}

.date-label {
  display: block; /* Changed to block */
  margin-bottom: 5px; /* Adjust spacing between labels */
  font-size: 16px;
  color: #333; /* Adjust color if needed */
}

input[type="date"] {
            padding: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            margin-bottom: 10px;
            transition: border-color 0.3s, box-shadow 0.3s;
            border-radius: 50px
        }

        input[type="date"]:focus {
            border-color: #007BFF;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            outline: none;
        }
.modal-content {
  background-color: #f4e1d2; /* Cream */ 
}


</style>
