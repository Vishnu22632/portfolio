<template>
    <div class="education">
      <h1>My Education</h1>
      <div class="education-cards">
        <!-- Card for University 1 -->
        <div class="education-card">
          <h3>Tribhuvan University</h3>
          <p>Faculty: B.Sc CSIT</p>
          <p>Years: 2018 - 2023</p>
        </div>
  
        <!-- Card for University 2 -->
        <div class="education-card">
          <h3>Model Multiple College</h3>
          <p>Faculty: Intermediate of Science (I.Sc)</p>
          <p>Years: 2015 - 2017</p>
        </div>
  
        <!-- Card for University 3 -->
        <div class="education-card">
          <h3>Daffodils Public School</h3>
          <p>Faculty: SLC</p>
          <p>Years: 2015</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationView',
  }
  </script>
  
  <style scoped>
  .education {
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2.6rem;
    margin-bottom: 30px;
    color: #007bff;
  }
  
  .education-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .education-card {
    background-color: #f7f9fc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 30%;
    flex: 1 1 30%;
    margin: 10px;
    text-align: left;
  }
  
  .education-card h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  
  .education-card p {
    font-size: 1.5rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .education-cards {
      flex-direction: column;
    }
  
    .education-card {
      max-width: 100%;
    }
  }
  </style>
  