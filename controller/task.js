import {getTasks,addTasks,getTask,updateTask,deleteTask,getEditTask} from "../models/database.js";
// import {auth} from "../middleware/authentication.js";
import bcrpt from 'bcrypt';


export default {
GetTasks : async (req,res) => {
    res.send(await getTasks())
},
getoneTask : async (req,res) => {
    res.send(await getTask(+req.params.id))
},

addTask : async (req,res) => {
    const { task_name,d_o_s,d_o_c,user_id} = req.body;
    const { user} = req.query
    res.send(await addTasks(task_name,d_o_s,d_o_c,user))
},
update: async (req, res) => {
    let { task_name, d_o_s, d_o_c } = req.body;

    try {
        const [user] = await getEditTask(+req.params.id);

        task_name = task_name ? task_name : user.task_name;
        d_o_s = d_o_s ? d_o_s : user.d_o_s;
        d_o_c = d_o_c ? d_o_c : user.d_o_c;

        await updateTask(task_name, d_o_s, d_o_c,+req.params.id);

        res.send(await getTasks());
    } catch (error) {
        res.status(500).send("Error updating task");
    }
},

delete : async (req,res)=> {
    await deleteTask(+req.params.id)
    res.send(await getTasks());
}


}