<template>

  <q-page class="q-pa-md">
    <div class="q-mb-md">
        <q-input
        v-model="todoSearch"
        outlined
        label="Search todo">
        </q-input>
    </div>
    <div v-if="!Object.keys(tasks).length && !search">
    <q-banner class="bg-secondary text-white q-mb-md">
        <template v-slot:avatar>
         <q-btn  flat color="white"  icon="check" />No task to do today!.
        </template>
          
        <template v-slot:action>
        <q-btn flat color="white" @click="showAddForm()" label="ADD TASK" icon="add" />
        </template>
    </q-banner>
    </div>
    
  
    <div v-if="Object.keys(tasks).length">
        <div class="taskNotCompleted">
            <h6>TODO</h6>
        </div> 
        <q-list v-if="Object.keys(tasks).length" separator class="center" bordered padding> 
            <tasks 
            :key="key"
            v-for="(task,key) in tasks"
            :task="task"
            :id="key"
            >
            </tasks> 
        </q-list>
    </div>

    <hr class="q-mt-md q-mb-md" v-if="Object.keys(tasks).length && Object.keys(taskCompleted).length">
     <div v-if="Object.keys(taskCompleted).length" >
        <div class="taskCompleted">
            <h6>COMPLETED</h6>
        </div> 
   
        <q-list separator class="center" bordered padding> 
            <tasks 
            :key="key"
            v-for="(task,key) in taskCompleted"
            :task="task"
            :id="key"
            >
            </tasks> 
        </q-list>
    </div>
    
    <q-page-sticky position="bottom-right" :offset="[75,10]">
        <div side class="absolute-bottom text-right q-mr-lg q-mt-sm x-mb-xl ">
            <q-btn 
                @click="showAddForm()"
                round
                icon="add"
                color="primary"
                size="16px"
            >
        </q-btn>
        </div>
    </q-page-sticky>
    <q-dialog v-model="show">
     <add-task @close="showAddForm"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>


import { mapGetters, mapState, mapActions} from 'vuex'
import Tasks from '../components/Tasks/Tasks'
import AddTask from 'src/components/Tasks/AddTask.vue'
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        ...mapActions('tasks',['setSearch']),
        showAddForm() {
            return this.show = !this.show
        }
    }
,
    components:{
        Tasks,
        AddTask
   
    },
    
    computed:{
        ...mapGetters('tasks',['tasks','taskCompleted']),
        ...mapState('tasks',['search']),
         todoSearch:{
            get(){
                return this.search
            },
            set(value){
               this.setSearch(value)
            }
        }
        
    }, 
 
   

}
</script>

<style scoped>
  .text-line{
    text-decoration: line-through;
  }
  *{
      font-family:Century Gothic;
  }
  .taskCompleted{
    margin-top:10px;
    background-color:#a5d6a7;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .taskCompleted h6{
        text-align: center;
        color:black;
        font-size:2em;
        margin:0;
        padding:0;
  }
  .taskNotCompleted{
    margin-top:10px;
    background-color:#ffcdd2 !important;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
      border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .taskNotCompleted h6{
    color:black;
    font-size:2em;
    margin:0;
    padding:0;
  }
</style>