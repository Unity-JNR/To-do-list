import express from 'express';
import controller from '../controller/task.js'

const router = express.Router()

router.route('/')
     .post(controller.addTask)
     .get(controller.GetTasks)   
     


    router.route('/:id')
          .get(controller.getoneTask) 
          .patch(controller.update)
          .delete(controller.delete)

    export default router   