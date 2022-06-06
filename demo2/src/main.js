import { createApp } from 'vue'
import App from './App.vue'
import AllStudents from './components/AllStudents'
import AddStudent from './components/AddStudent'
import StudentDetails from './components/StudentDetails'
import EditStudent from './components/EditStudent'
import{createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path:"/students",
        component:AllStudents
    },
    {
        path:"/students/:id",
        component:StudentDetails
    },
    {
        path:"/edit/:id",
        component:EditStudent
    },
    {
        path:"/addstudent",
        component:AddStudent
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')