import * as types from './mutation-types'

export const addItem = ({commit}, newitem) => {
        commit(types.NEW_ITEM, newitem)
}

export const removeItem = ({commit}, index) => {
  commit(types.REMOVE_ITEM, index)
}

