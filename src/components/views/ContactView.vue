<template>
    <div class="contact-view">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <i class="pi pi-phone"></i> 
          <span>Phone: +977 9812054023</span>
        </li>
        <li>
          <i class="pi pi-envelope"></i> 
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </li>
        <li>
          <i class="pi pi-github"></i> 
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <i class="pi pi-linkedin"></i> 
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <i class="pi pi-facebook"></i> 
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
  .contact-view {
    text-align: center;
    padding: 20px;
    margin-top: 25px;
  }
  .contact-view h2{
    font-size: 2.5rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    font-size: 2rem;
  }
  
  i {
    margin-right: 10px;
  }
  </style>
  