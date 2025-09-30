import { defineStore } from 'pinia';
import axios from 'axios'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
    selectedTask: null,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:5005/taskitems')
        this.tasks = response.data;
      } catch {
        this.error = "get failed"
        console.error(this.error)
      } finally {
        this.loading = false
      }
    },
    async postTask(task){
        this.loading = true
        this.error = null
        try{
            const response = await axios.post('http://localhost:5005/taskitems/',task)
            this.tasks.unshift(response.data)
        }catch{
            this.error = "post failed"
            console.error(this.error)
        }finally{
            this.loading = false
        }
    },
    async updateTask(task){
        this.loading = true
        this.error = null
        try{
            const response = await axios.put('http://localhost:5005/taskitems/'+task.id,task)
            const index =  this.tasks.findIndex(t=>t.id===task.id)
            if(index != -1){
                this.tasks[index] = response.data
                this.selectedTask = response.data
            }
        }
        catch{
            this.error = "put failed"
            console.error(this.error)
        }
        finally{
            this.loading = false;
        }
    }
    ,
    async deleteTask(id){
            this.loading = true
        this.error = null
        try{
            await axios.delete('http://localhost:5005/taskitems/'+id)
            const index = this.tasks.findIndex(t => t.id === id);
            if (index !== -1) {
                this.tasks.splice(index, 1)
            }
        }
        catch{
            this.error = "put failed"
            console.error(this.error)
        }
        finally{
            this.loading = false;
        }
    }
  }
})
