<template>
  <div class="container">
    <div class="text-center mt-4">
      <button @click="currentTap = 'FormComponent'" class="btn btn-primary me-1">Form</button>
      <button @click="currentTap = 'StudentComponent'" class="btn btn-primary  me-1">Students</button>
      <button @click="currentTap = 'AdminComponent'" class="btn btn-primary me-1">Admins</button>
    </div>
    <!-- dynamic component lect2 -->
    <!-- <component :is="currentTap"/> -->
    <FormComponent v-if="currentTap == 'FormComponent'" @addNew="addNewUser"/>
    <StudentComponent v-if="currentTap == 'StudentComponent'" :studentsList="students" @delete="deleteStudent"/>
    <AdminComponent v-if="currentTap == 'AdminComponent'" :adminsList="admins" @delete="deleteAdmin"/> 
  </div>
</template>

<script>
import FormComponent from './components/Form.vue'
import StudentComponent from './components/Student.vue'
import AdminComponent from './components/Admins.vue'
import { ref } from 'vue'
export default {
    name: "App",
    components: { 
      FormComponent,
      StudentComponent,
      AdminComponent
     },
     setup(){
       const students = ref([
         {
              name:'Fatma',
              age: 23,
              address:"Kafr Eldawar"
            },
            {
              name:'Rehab',
              age: 26,
              address:"Kafr Eldawar"
            }
       ])
       const admins = ref([
          {
            name:'Heba',
            age: 23,
            address:"Cairo"
          },
          {
            name:'Salma',
            age: 26,
            address:"Alex"
          }
       ])
       const currentTap = ref('FormComponent')
       function addNewUser(user){
             if(user.role == 'admin'){
              admins.value.push(user)
            }else{
              students.value.push(user)
            }  
            console.log(user)
            console.log(students.value)
        }
        function deleteStudent(studentID){
          students.value.splice(studentID, 1)
        }
        function deleteAdmin(adminID){
          admins.value.splice(adminID, 1)
        }
       return{
         students,
         admins,
         currentTap,
         addNewUser,
         deleteStudent,
         deleteAdmin
       }
     }
}
</script>

<style>
  .bg{
    background-color: blueviolet;
  }
</style>
