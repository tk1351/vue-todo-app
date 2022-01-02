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
            return state.tasks.filter((task) => task.done === true)
        },
        completedTasks(state) {
            return state. tasks.filter((task) => task.done === false)
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
                done: true
            })
            this.nextId++
        },
        toggleTaskStatus(id: number) {
            const todo = this.findTodo(id)
            todo.done = !todo.done
        }
    }
})