export interface ITask {
    id: number
    title: string
    status: 'active' | 'completed'
}

export type Tab = 'All' | 'Active' | 'Completed'

export interface ITabElement {
    name: Tab
    selected: boolean
}