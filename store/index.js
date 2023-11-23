// store/index.js

// Initial state
export const state = () => ({
    // Define your initial state variables here
    userData: null,
    someOtherData: 'nicky',
  })
  
  // Mutations
  export const mutations = {
    // Define mutations to update the state here
    setUserData(state, data) {
      state.userData = data
    },
    setSomeOtherData(state, value) {
      state.someOtherData = value
    },
  }
  
  // Actions
  export const actions = {
    
  }
  
  // Getters
  export const getters = {
    // Define getters to access and compute state here
    isAdmin: (state) => {
        return state.userData && state.userData.role === 'admin'
    },
    getOtherData: (state) => {
        return state.someOtherData
    },
  }
  
  // Export the store
  export default {
    state,
    mutations,
    actions,
    getters,
  }
  