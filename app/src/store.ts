import { defineStore } from "pinia";
import { ITask } from './types/types'

export const useTaskStore = defineStore('todo', {
    state: () => {
        return {
            tasks: [] as ITask[],
            nextId: 1
        }
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        activeTasks(state) {
            return state.tasks.filter((task) => task.done === false)
        },
        completedTasks(state) {
            return state. tasks.filter((task) => task.done === true)
        },
        findTodo(state) {
            return (id: number): ITask => {
                const todo = state.tasks.find((task) => task.id === id)
                if (!todo) throw new Error('todo not found')
                return todo
            }
        }
    },
    actions: {
        addTask(title: string) {
            this.tasks.push({
                id: this.nextId,
                title,
                done: false
            })
            this.nextId++
        },
        toggleTaskStatus(id: number) {
            const todo = this.findTodo(id)
            todo.done = !todo.done
        },
        removeTask(id: number) {
            this.tasks = this.tasks.filter((task) => {
                return task.id !== id
            })
        },
        removeCompletedTasks() {
            this.tasks = this.tasks.filter((task) => {
                return task.done === false
            })
        }
    }
})