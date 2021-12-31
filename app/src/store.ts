import { defineStore } from "pinia";
import { Tab } from './types/types'

export const useStore = defineStore('main', {
    state: () => {
        return {
            tab: 'All' as Tab
        }
    },
    getters: {
        getTab(state) {
            return state.tab
        }
    }
})