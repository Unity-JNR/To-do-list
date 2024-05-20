import {getTasks,addTasks,getTask,updateTask,deleteTask,a} from "../models/database.js";
// import {auth} from "../middleware/authentication.js";
import bcrpt from 'bcrypt';


export default {
GetTasks : async (req,res) => {
    res.send(await getTasks())
},
getoneTask : async (req,res) => {
    res.send(await getTask(req.params.id))
},

addTask : async (req,res) => {
    const { task_name,d_o_s,d_o_c,user_id} = req.body;
    res.send(await addTasks(task_name,d_o_s,d_o_c,user_id))
},
}