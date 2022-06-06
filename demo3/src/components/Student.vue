<template>
    <div class="w-50 m-auto mt-3">
        <table class="table">
            <thead class="table-primary">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student,index in studentsList" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.age}}</td>
                    <td>{{student.address}}</td>
                    <td><button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:"StudentComponent",
        props:['studentsList'],
        emits:['delete'],
        setup(props,context){
            function deleteStudent(index){
                context.emit('delete', index)
            }
            return{
                deleteStudent
            }
        }
    }
</script>

<style scoped>

</style>