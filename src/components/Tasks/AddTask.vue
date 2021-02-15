<template>
    <q-card>
        <modal-header>Add Task</modal-header>
        <q-form @submit="submitTask">

            <div>
                <task-name :name.sync="newTask.name"></task-name>
            </div>
                
            <div>
                <task-due-date :dueDate.sync="newTask.dueDate"></task-due-date>
            </div>
            <div v-if="newTask.dueDate">
                <task-due-time :dueTime.sync="newTask.dueTime"></task-due-time>
            </div>

            <div>
                <q-card-section>
                    <q-btn 
                    class="full-width"
                    color="primary"
                    label="SAVE"
                    icon="save"
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
    data(){
        return{
            newTask:{
                name:'',
                completed:false,
                dueDate:'',
                dueTime:''
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
        ...mapActions('tasks',['addTask']),

        submitTask(){
            this.addTask(this.newTask)
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
</style>