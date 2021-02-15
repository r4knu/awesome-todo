<template>
    <q-card>
        <modal-header>Edit Task</modal-header>
        <q-form @submit="submitTask">
            <div :id="id">
                <task-name :name.sync="updateTask.name"></task-name>
            </div>
                
            <div>
                <task-due-date :dueDate.sync="updateTask.dueDate"></task-due-date>
            </div>
            <div>
                <task-due-time :dueTime.sync="updateTask.dueTime"></task-due-time>
            </div>

            <div>
                <q-card-section>
                    <q-btn 
                    class="full-width"
                    color="positive"
                    label="UPDATE"
                    icon="edit"
                    type="submit">
                    </q-btn>
                </q-card-section> 
            </div>
         
        </q-form>
    </q-card>
</template>
<script>
import {mapActions} from 'vuex'
import ModalHeader from './Shared/ModalHeader.vue'
import TaskName from './Shared/TaskName.vue'
import TaskDueDate from './Shared/TaskDueDate.vue'
import TaskDueTime from './Shared/TaskDueTime.vue'
export default {
    props:['id','name','dueDate','dueTime'],
    data(){
        return{
            updateTask:{
                id:'',
                name:'',
                dueDate:'',
                dueTime:'',
            }
        }
    },
    components:{
        ModalHeader,
        TaskName,
        TaskDueDate,
        TaskDueTime
    },
    methods:{
        ...mapActions('tasks',['updateStatus']),
        submitTask(){
            this.updateStatus({id:this.updateTask.id,updates:this.updateTask})
            this.$emit('close')
        }
    },
    mounted(){
       this.updateTask.id=this.id
       this.updateTask.name=this.name
       this.updateTask.dueDate=this.dueDate
       this.updateTask.dueTime=this.dueTime
    }
}
</script>

<style scoped>
</style>