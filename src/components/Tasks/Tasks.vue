<template>
    
    <q-item style="margin:10px;"
      @click="updateStatus({id,updates:{completed:!task.completed}})"
       clickable
      :class="!task.completed ? 'bg-red-2':'bg-green-3'"
      >

        <q-item-section side top>        
          <q-checkbox class="no-pointer-events" :value="task.completed"></q-checkbox>
        </q-item-section>

         <q-item-section>        
           <q-item-label :class="{'text-line':task.completed}">{{task.name}}</q-item-label>
        </q-item-section>
        
        <q-item-section v-if="task.dueDate" side>
            <q-icon name="event" size="18px" />  
        </q-item-section>

         <q-item-section side>   
           <q-item-label caption >{{task.dueDate}}</q-item-label>
           <small><q-item-label caption >{{task.dueTime}}</q-item-label></small>
        </q-item-section>
        <q-item-section side v-if="task.completed == false">   
          <q-btn
          @click.stop="showUpdateForm()"
            flat
            round
            dense
            color="blue"
            icon="edit"
          >
          </q-btn>
        </q-item-section>
        <q-item-section side  v-if="task.completed == false">   
          <q-btn
          @click.stop="promptDel(id)"
            flat
            round
            dense
            color="red"
            icon="delete"
          >
          </q-btn>
        </q-item-section>
        <q-dialog v-model="updateForm">
            <edit-task :id="id" :name="task.name" :dueDate="task.dueDate" :dueTime="task.dueTime" @close="showUpdateForm"></edit-task>
        </q-dialog>
            
      </q-item>

</template>

<script>
import {mapActions} from 'vuex'
import EditTask from './EditTask.vue'
export default {
  props:['task','id'],
  data(){
      return{
          updateForm:false
      }
  },
  methods:{
    ...mapActions('tasks',['updateStatus','deleteTask',]),
    
      promptDel(id){
        
        this.$q.dialog({
            title:'Confirm',
            message:'Are you sure want to delete this task?',
            ok:{
                push:true
            },

            persistent:true
        }).onOk(()=>{
           this.deleteTask(id)
        })
        
    },
    showUpdateForm() {
        
            return this.updateForm = !this.updateForm
    }

  },
  components:{
      EditTask
  }

}
</script>
<style scoped>

  .text-line{
    text-decoration: line-through;
  }
</style>