import { createStore } from 'vuex'
import { adminState } from './Admin'
import { employeeState } from './Employees'


export default createStore({
  
  modules: {
    admin: adminState,
    employee: employeeState
  }
})
