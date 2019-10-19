import * as types from './mutation-types'

export const mutations = {
  [types.NEW_ITEM] (state, payload) {
    state.allItems.push(payload)
  },

  [types.UPDATE_ITEM] (state, payload) {
    Object.assign(state.allItems[payload.index], { 
      icode: payload.icode,
      ibrand: payload.ibrand,
      itype: payload.itype,
      istate: payload.istate,
      iwhen: payload.iwhen
    });
  },

  [types.MORE_ITEM] (state, payload) {
    Object.assign(state.allItems[payload.index], { 
      iquantity: payload.iquantity,
      iactivity: payload.iactivity
    });
  },

  [types.LESS_ITEM] (state, payload) {
    Object.assign(state.allItems[payload.index], { 
      iquantity: payload.iquantity,
      iactivity: payload.iactivity
    });
  },

  [types.REMOVE_ITEM] (state, payload) {
    state.allItems.splice(payload,1)
  },

  [types.FROM_FILE] (state, payload) {
    state.allItems.push(...payload)
  },

  [types.SET_USER] (state, payload) {
    state.fullName = payload.fullName
    state.phoneNumber = payload.phoneNumber
  }

}