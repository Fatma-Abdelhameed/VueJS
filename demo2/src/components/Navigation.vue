<template>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/students" class="nav-link active">All Students</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/addstudent" class="nav-link">Add Student</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
        name: "MainNavbar"
    }
</script>

<style scoped>

</style>