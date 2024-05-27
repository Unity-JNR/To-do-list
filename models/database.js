import { pool } from "../config/config.js";

const getusers = async() => {
    const [users] = await pool.query("SELECT * FROM users");
    return users  
}
const addusers = async(username,email,password,role) => {
    const [result] = await pool.query(`
    insert into users (username,email,password,role) values (?,?,?,?);
    `,[username,email,password,role] 
    ) 
    return result 
}

const getuser = async(id) => {
    const [user] = await pool.query("SELECT * FROM users WHERE user_id = ?", [id]);
    return user
}

const updateuser = async(username,email,password,role,user_id) => {
    const [user]  = await pool.query(`
        UPDATE users SET username =?, email =?, password =?, role =?  WHERE user_id =?
    `, [username,email,password,role,user_id])
    return user 
}

const deleteuser = async(id)=> {
    const [user]  = await pool.query(`
        DELETE FROM users WHERE  user_id=?
    `, [id])
    return user
}

const checkuser = async(email)=> {
    const [[{password}]]= await pool.query(`
    SELECT password From users WHERE email = ?`,[email])
    console.log(password);
        return password
    }

    const getusername = async(email)=> {
        const [result] = await pool.query(`
        SELECT * FROM users WHERE email = ?
        `,[email])
        return result
    }
    //end of user table

// tasks

// Function to add a task
const addTasks = async (task_name, d_o_s, d_o_c, user_id) => {
    try {
        const [task] = await pool.query(`
            INSERT INTO tasks (task_name, d_o_s, d_o_c, user_id) VALUES (?, ?, ?, ?)
        `, [task_name, d_o_s, d_o_c, user_id]);
        return task;
    } catch (error) {
        // Handle error
        console.error("Error adding task:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};

// Function to get all tasks
const getTasks = async () => {
    try {
        const [tasks] = await pool.query("SELECT * FROM tasks");
        return tasks;
    } catch (error) {
        // Handle error
        console.error("Error getting tasks:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};

// Function to get a single task by ID
const getTask = async (idtasks) => {
    try {
        const [task] = await pool.query("SELECT * FROM tasks WHERE user_id = ?", [idtasks]);
        return task;
    } catch (error) {
        // Handle error
        console.error("Error getting task by ID:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};

const getEditTask = async (idtasks) => {
    try {
        const [task] = await pool.query("SELECT * FROM tasks WHERE idtasks = ?", [idtasks]);
        return task;
    } catch (error) {
        // Handle error
        console.error("Error getting task by ID:", error);
        throw error; // Rethrow the error for the caller to handle
    }
}

// Function to update a task
const updateTask = async (task_name, d_o_s, d_o_c, idtasks) => {
    try {
        const [task] = await pool.query(`
            UPDATE tasks SET task_name = ?, d_o_s = ?, d_o_c = ?  WHERE idtasks = ?
        `, [task_name, d_o_s, d_o_c, idtasks]);
        return task;
    } catch (error) {
        // Handle error
        console.error("Error updating task:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};

// Function to delete a task
const deleteTask = async (id) => {
    try {
        const [task] = await pool.query("DELETE FROM tasks WHERE idtasks = ?", [id]);
        return task;
    } catch (error) {
        // Handle error
        console.error("Error deleting task:", error);
        throw error; // Rethrow the error for the caller to handle
    }
};





    export{addusers,getuser,updateuser,deleteuser,checkuser,getusers,addTasks, getTask, updateTask, deleteTask, getTasks,getEditTask,getusername}