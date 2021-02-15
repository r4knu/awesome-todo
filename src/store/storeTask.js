import Vue from 'vue'
import {uid} from 'quasar'
const state = {
   tasks:{
        'ID1':{
            name:'Go to Shop',
            completed:false,
            dueDate:'2020/02/11',
            dueTime:'18:30'
        },
        'ID2':{
            name:'Eat Banana',
            completed:false,
            dueDate:'2020/02/11',
            dueTime:'18:30'
        },
        'ID3':{
            name:'Bathroom',
            completed:false,
            dueDate:'2020/02/11',
            dueTime:'18:30'
        },
        'ID4':{
            name:'Sleep ',
            completed:false,
            dueDate:'2020/02/11',
            dueTime:'18:30'
        },
        'ID5':{
            name:'Classroom ',
            completed:false,
            dueDate:'2020/02/11',
            dueTime:'18:30'
        }
   },
   search:''
}

const mutations = {
    updateStatus(state,payload){
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state,id){
      Vue.delete(state.tasks,id)
    },
    addTask(state,payload){
        Vue.set(state.tasks,payload.id, payload.task)
    },
    setSearch(state,value){
        state.search = value
    }
}
const actions = {
    updateStatus({commit},payload){
       commit('updateStatus',payload)
    },
    deleteTask({commit},id){
        commit('deleteTask',id)
    },
   
    addTask({commit},task){
        let taskID = uid();
        let payload = {
            id: taskID,
            task
        }
        commit('addTask',payload)
    },
    setSearch({commit},value){
        commit('setSearch',value)
    }
}

const getters = {
    
    tasksFilttered:(state) => {
       
        let tasksFilttered = {}
        
        if(state.search){
            Object.keys(state.tasks).forEach(function(key) {
                let task = state.tasks[key],
                taskNameLowerCase = task.name.toLowerCase(), 
                searchLowerCase = state.search.toLowerCase()
                if(taskNameLowerCase.includes(searchLowerCase)){
                    tasksFilttered[key] = task
                }
            })
            return tasksFilttered
        } 
        
        console.log(state.tasks)
        return state.tasks
    },
    tasks:(state,getters) => {
        let tasksFilttered = getters.tasksFilttered
        let tasks = {}
        Object.keys(tasksFilttered).forEach(function(key){
            let task = tasksFilttered[key]
            if(!task.completed){
                tasks[key] = task
            }
        })
        return tasks
    },
    taskCompleted:(state,getters) =>{
        let tasksFilttered = getters.tasksFilttered
        let tasks = {}
        Object.keys(tasksFilttered).forEach(function(key){
            let task = tasksFilttered[key]
            if(task.completed){
                tasks[key] = task  
            }
        })
        return tasks
    }

    

}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}