<template>
  <div class="home">
  
    <section class="todo-outer">
        <div class="todo-inner">
          <h1><i class="fa fa-list-alt"></i> Todo List</h1>
          <input type="text" class="form-control mb-2" placeholder="Enter your task" id="addtaskinput" />
          <input type="hidden" id="saveindex">
          <button type="button" class="btn" id="addtaskbtn">Add Task</button>
          <button type="button" class="btn" id="savetaskbtn">Save Task</button>
          <button type="button" id="deleteallbtn" class="btn">Delete All</button>
          <button type="button" id="sort" class="btn">Sort</button>
          <div class="to-do-output">
            <table class="table" id="addedtasklist"></table>
          </div>
        </div>
      </section>
  </div>
  
</template>

<script>
// @ is an alias to /src


export default {

}
</script>

<style scoped>

/* body{ background: var(--main-darkest);
    color: white;} */

section.todo-outer {
    width: 100%;
    float: left;
    padding: 30px 0;
}
section.todo-outer h1 {
    font-size: 40px;
    margin-bottom: 20px;
}
.todo-inner {
    width: 50%;
    margin-left: 25%;
    padding: 40px;
    box-shadow: 0px 0px 10px hsl(0, 0%, 76%);
    background: var(--main-dark)
}

.todo-outer {
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
  }
  
  
  .todo-inner h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    box-sizing: border-box;
  }
  
  .btn {
    margin-right: 10px;
    flex-basis: calc(20% - 10px); /* Adjust the width as needed, considering margin */
    /* margin-right: 10px; */
  }
  
  .to-do-output {
    margin-top: 20px;
  }
  
  
  
#addtaskbtn{
    background-image: linear-gradient(to right, var(--highlight-orange), var(--highlight-green));
    -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;  
 /* display: inline-block;    */
}
#deleteallbtn{
    background-image: linear-gradient(to right, var(--highlight-orange), var(--highlight-green));
    -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;  
 /* display: inline-block;     */
}
table tr td button {
    background-image: linear-gradient(to right, var(--highlight-orange), var(--highlight-green));
    -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}
.completed{text-decoration: line-through;}


    input, button{
        appearance: none;
        border: none;
        outline: none;
        background: none;
    flex-basis: calc(20% - 10px); /* Adjust the width as needed, considering margin */

         
    }

    #savetaskbtn{
        display: none;
        background-image: linear-gradient(to right, var(--highlight-orange), var(--highlight-green));
    -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;  
 /* display: inline-block;   */
 
    }
  #sort{
    background-image: linear-gradient(to right, var(--highlight-orange), var(--highlight-green));
    -webkit-background-clip: text;
 -webkit-text-fill-color: transparent; 
 /* display: inline-block;   */

  }
</style>






