<template>
<div class="projects">
    <h1>My Projects</h1>
    <div class="project-cards">
        <!-- Card for CyberMall -->
        <div class="project-card">
            <!-- <img src="../../assets/images/photo.jpg" width="200" alt=""> -->
            <h3>CyberMall</h3>
            <p>An e-commerce platform providing a seamless shopping experience with a range of products and services.</p>
            <a href="https://github.com/Vishnu22632/CyberMall" class="view-project">View Project</a>
        </div>

        <!-- Card for EMS -->
        <div class="project-card">
            <h3>EMS (Employee Management System)</h3>
            <p>A system designed to manage employee data, track performance</p>
            <a href="#" class="view-project">View Project</a>
        </div>

        <!-- Card for Activity Tracker -->
        <div class="project-card">
            <h3>Activity Tracker</h3>
            <p>A Task Management System helps users organize, prioritize, and track tasks efficiently, ensuring timely completion of work. 
                </p> <a href="https://github.com/Vishnu22632/Task-Management-System" class="view-project">View Project</a>
        </div>
    </div>
</div>
</template>

  
  
<script>
export default {
    name: 'ProjectView',
}
</script>
  
  
<style scoped>
.projects {
    /* max-width: 1000px; */
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 2.3rem;
    color: #007bff;
    margin-bottom: 20px;
}

.project-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    justify-content: center;
}

.project-card {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: left;
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.project-card p {
    font-size: 1.5rem;
    color: #555;
}

.view-project {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.view-project:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .project-card {
        max-width: 100%;
    }
}
</style>
