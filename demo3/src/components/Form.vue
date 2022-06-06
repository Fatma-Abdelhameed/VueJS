<template>
    <div>
        <form class="w-50 m-auto mt-3">
            <div class="mb-3">
                <label>Name</label>
                <input type="text" class="form-control" v-model="formValues.name"/> 
            </div>
            <div class="mb-3">
                <label>Age</label>
                <input type="text" class="form-control" v-model="formValues.age"/> 
            </div>
            <div class="mb-3">
                <label>Address</label>
                <input type="text" class="form-control" v-model="formValues.address"/> 
            </div>
            <div class="mb-3">
                <div class="form-check">
                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" v-model="formValues.role" v-bind:value="'admin'">
                <label class="form-check-label" for="flexRadioDefault1">
                    Admin
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault2" v-model="formValues.role" v-bind:value="'student'" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Student
                </label>
                </div>
            </div>
            <div class="mb-3 text-center">
                <button class="btn btn-primary" @click.prevent="addNewUser">Add User</button> 
            </div>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
    export default {
        name:'FormComponent',
        emits:['addNew'],
        setup(props,context){
            const formValues = reactive({
                name: "",
                age:0,
                address:"",
                role:""
            })
            function addNewUser(){
                context.emit('addNew', formValues)
            }
            return{
                formValues,
                addNewUser
            }
        }
    }
</script>

<style scoped>

</style>