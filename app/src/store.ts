import { defineStore } from "pinia";
import { ITask } from './types/types'

export const useTaskStore = defineStore('todo', {
    state: () => {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Do coding Vue.js',
                    status: 'active'
                },
                {
                    id: 2,
                    title: 'Do coding React',
                    status: 'completed'
                },
                {
                    id: 3,
                    title: 'Do coding Angular',
                    status: 'completed'
                },
            ] as ITask[]
        }
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        activeTasks(state) {
            return state.tasks.filter((task) => task.status === 'active')
        },
        completedTasks(state) {
            return state. tasks.filter((task) => task.status === 'completed')
        }
    }
})