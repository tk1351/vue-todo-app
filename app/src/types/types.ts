export interface ITask {
    id: number
    title: string
    done: boolean
}

export type Tab = 'All' | 'Active' | 'Completed'

export interface ITabElement {
    name: Tab
    selected: boolean
}