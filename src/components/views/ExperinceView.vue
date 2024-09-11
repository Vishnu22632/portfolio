<template>
    <div class="experience-container">
      <h1>My Experience</h1>
      <div class="experience-cards">
        <div class="experience-card" v-for="experience in experiences" :key="experience.id">
          <h3>{{ experience.company }}</h3>
          <p><strong>Start Date:</strong> {{ experience.startDate }}</p>
          <p><strong>End Date:</strong> {{ experience.endDate }}</p>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExperienceView',
    data() {
      return {
        experiences: [
          {
            id: 1,
            company: 'Synergytech Software',
            startDate: 'July, 2024',
            endDate: 'Ongoing',
            description: 'Java Intern'
           
          },
          {
            id: 2,
            company: 'Uday Tech Pvt. Ltd.',
            startDate: 'April 2023',
            endDate: 'August 2023',
            description: 'Front End Intern.'
            
          },
          {
            id: 3,
            company: 'Broadway Infosys',
            startDate: 'Jan, 2024',
            endDate: 'April, 2024',
            description: 'Advanced Java Training'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .experience-container {
    padding: 20px;
  }
  .experience-container h1{
    font-size: 2.5rem;
    color: rgb(26, 63, 63);
  }
  
  .experience-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }

  .experience-cards h3{
    font-size: 1.8em;
  }

  .experience-cards p{
    font-size: 1.5rem;
  } 
  .experience-card {
    border: 1px solid #ccc;
    padding: 20px;
    width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  