export interface ITask {
    id: number
    title: string
    status: TodoStatus
}

export type TodoStatus = 'active' | 'completed'

export type Tab = 'All' | 'Active' | 'Completed'

export interface ITabElement {
    name: Tab
    selected: boolean
}