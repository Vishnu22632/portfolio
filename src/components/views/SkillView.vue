<template>
<div class="skill-view">
    <h2>My Skills</h2>
    <div class="skills-container">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
            <i :class="skill.icon" class="skill-icon"></i>
            <div class="skill-details">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-description">{{ skill.description }}</span>
            </div>
        </div>
    </div>
</div>
</template>

  
  
<script>
export default {
    name: 'SkillView',
    data() {
        return {
            skills: [{
                    name: 'HTML',
                    icon: 'pi pi-file',
                    description: 'Markup language for structuring web content.'
                },
                {
                    name: 'CSS',
                    icon: 'pi pi-css3',
                    description: 'Stylesheet language used for styling web pages.'
                },
                {
                    name: 'JavaScript',
                    icon: 'pi pi-code',
                    description: 'Programming language for web development.'
                },
                {
                    name: 'Bootstrap 5',
                    icon: 'pi pi-bootstrap',
                    description: 'CSS framework for responsive design.'
                },
                {
                    name: 'Less',
                    icon: 'pi pi-css3',
                    description: 'CSS preprocessor for modular and reusable styles.'
                },
                {
                    name: 'Java',
                    icon: 'pi pi-desktop',
                    description: 'Object-oriented programming language for back-end.'
                },
                {
                    name: 'Spring Boot',
                    icon: 'pi pi-cloud',
                    description: 'Framework for creating stand-alone Java applications.'
                },
                {
                    name: 'REST API',
                    icon: 'pi pi-send',
                    description: 'Design pattern for networked web services.'
                },
                {
                    name: 'JPA',
                    icon: 'pi pi-database',
                    description: 'Java Persistence API for relational data management.'
                },
                {
                    name: 'JSF',
                    icon: 'pi pi-java',
                    description: 'Java Server Faces, framework for building Java web applications.'
                },
                {
                    name: 'Vue.js',
                    icon: 'pi pi-vuejs',
                    description: 'JavaScript framework for building user interfaces.'
                },
                {
                    name: 'Git',
                    icon: 'pi pi-git',
                    description: 'Version control system for tracking changes in code.'
                },
                {
                    name: 'PrimeVue',
                    icon: 'pi pi-prime',
                    description: 'UI component library for Vue.js.'
                }
            ]
        };
    }
}
</script>
  
  
<style scoped>
h2{
    font-size: 3rem;
}

.skill-view {
    text-align: center;
    padding: 20px;
}

.skills-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.skill {
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    margin: 15px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.skill:hover {
  background-color: #e0e0e0; /* Slightly darker background on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly larger shadow on hover */
}

.skill-icon {
    font-size: 50px;
    margin-right: 20px;
}

.skill-details {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.skill-name {
    font-weight: bold;
    font-size: 2.25rem;
}

.skill-description {
    font-size: 20px;
    color: #666;
    margin-top: 5px;
}
</style>
