<template>
    <div class="main-container">
      <div class="main-row">
        <img src="../../assets/images/photo.jpg"  />
  
        <h1>Hi, I'm Vishnu Thakur.</h1>
        <p>
          Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.
        </p>
  
        <div class="btns">
          <button class="btn-primary">Read Me</button>
          <button class="btn-secondary">Contact Me</button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden; /* Disable scrolling */
  }
  
  .main-container {
    display: flex;
    justify-content: center;
    height: 80vh;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .main-row {
    text-align: center;
    padding: 40px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
    color: #2c3e50;
  }
  
  p {
    font-size: 2.125rem;
    line-height: 1.7;
  }
  
  /* Button Styles */
  .btns {
    margin-top: 20px;
  }
  
  button {
    padding: 12px 24px;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  /* Primary Button */
  .btn-primary {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: white;
    margin-right: 5px;
  }
  
  .btn-primary:hover {
    background: linear-gradient(135deg, #0072ff, #00c6ff);
    transform: scale(1.05);
  }
  
  /* Secondary Button */
  .btn-secondary {
    background-color: white;
    color: #0072ff;
    border: 2px solid #0072ff;
  }
  
  .btn-secondary:hover {
    background-color: #0072ff;
    color: white;
    transform: scale(1.05);
  }

  .main-row img{
    width: 200px;
    border-radius: 25px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  
    p {
      font-size: 1rem;
    }
  
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  </style>
  