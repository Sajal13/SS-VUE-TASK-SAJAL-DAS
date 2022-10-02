import { createRouter, createWebHistory } from 'vue-router'
import Dashboard_component from "@/views/Dashboard_component";
import Employee_list from "@/views/Employee_list"


const routes = [
  {
    path: '/',
    component: Dashboard_component,
  },
  {
    path:"/employees",
    component: Employee_list
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
