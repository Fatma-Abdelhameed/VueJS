<template>
    <div class="w-50 m-auto mt-3">
        <table class="table w-100">
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
                <tr v-for="admin,index in adminsList" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{admin.name}}</td>
                    <td>{{admin.age}}</td>
                    <td>{{admin.address}}</td>
                    <td><button class="btn btn-danger btn-sm" @click="deleteAdmin(index)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:"AdminComponent",
        props:['adminsList'],
        emits:['delete'],
        setup(props,context){
            function deleteAdmin(index){
                context.emit('delete', index)
            }
            return{
                deleteAdmin
            }
        }
    }
</script>

<style scoped>

</style>