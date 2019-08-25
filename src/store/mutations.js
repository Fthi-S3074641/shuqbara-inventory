import * as types from './mutation-types'

export const mutations = {
  [types.NEW_ITEM] (state, payload) {
    state.allItems.push(payload)
  },

  [types.REMOVE_ITEM] (state, payload) {
    state.allItems.splice(payload,1)
  }

}