<template>
  
  <div class="home">
    <h1 class="heading">
      <i class="fas fa-tasks"></i>
      To Do List
    </h1>
  </div>

  <div class="container">
    <input type="text" name="text" placeholder="Enter your tasks" class="input">
    
  </div>
</template>

<script>
export default {

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

.container {
  
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
</style>
