<template>
  <header>
    <nav class="navbar">
      <ul class="nav-list">
        <li>
          <router-link to="/">
            <i class="pi pi-home"></i> Home
                          </router-link>
                         </li>

        <li>
          <router-link to="/about">
            <i class="pi pi-user"></i> About
          </router-link>
        </li>
        <li>
          <router-link to="/experience">
            <i class="pi pi-briefcase"></i> Experience
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <i class="pi pi-folder"></i> Projects
          </router-link>
        </li>
        <li>
          <router-link to="/skills">
            <i class="pi pi-cog"></i> Skills
          </router-link>
        </li>
        <li>
          <router-link to="/education">
            <i class="pi pi-book"></i> Education
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <i class="pi pi-envelope"></i> Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped>
.navbar {
  background-color: #0a0a0a;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
}

.nav-list {
  list-style-type: none;
  display: flex;
}

.nav-list li {
  margin: 0 15px;
}

.nav-list a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

.nav-list a:hover {
  color: #00d1b2;
}

.pi {
  margin-right: 8px;
  font-size: 1.2rem; /* Adjust size as necessary */
}
</style>
