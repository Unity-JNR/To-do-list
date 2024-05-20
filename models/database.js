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
    //end of user table

    // tasks

    const addTasks = async (task_name,d_o_s,d_o_c,user_id) => {
        const [task]  = await pool.query(`
            INSERT INTO tasks (task_name,d_o_s,d_o_c,user_id) VALUES (?,?,?,?,?)
        `, [task_name,d_o_s,d_o_c,user_id])
        return task
    }
    
       const getTasks= async() => {
        const [tasks] = await pool.query("SELECT * FROM tasks");
        return tasks
       }
    
       const getTask = async(idtasks) => {
        const [task] = await pool.query("SELECT * FROM tasks WHERE idtasks =?", [idtasks]);
        return task
       }
    
       const updateTask = async(task_name,d_o_s,d_o_c,user_id,idtasks) => {
        const [task]  = await pool.query(`
            UPDATE tasks SET task_name =?, d_o_s =?, d_o_c =?, user_id =? WHERE idtasks =?
        `, [task_name,d_o_s,d_o_c,user_id,idtasks])
        return task
       }
    
       const deleteTask = async(id) => {
        const [task]  = await pool.query(`
            DELETE FROM tasks WHERE idtasks =?
        `, [id])
        return task
       }





    export{addusers,getuser,updateuser,deleteuser,checkuser,getusers,addTasks, getTask, updateTask, deleteTask, getTasks}