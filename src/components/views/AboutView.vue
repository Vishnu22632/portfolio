<template>
  <div class="about-view">
    <h1>About Me</h1>
    <p>
      I am a dedicated and detail-oriented Java developer with a passion for crafting efficient, scalable, and maintainable software solutions. With hands-on experience in Java and its ecosystem, I specialize in building robust back-end systems, RESTful APIs, and enterprise applications using frameworks like Spring Boot and Hibernate. My curiosity and commitment to learning have driven me to continuously improve my skills in new technologies, including front-end development with Vue.js and integrating third-party services.
    </p>
    <p>
      I thrive in solving complex problems and am always eager to take on new challenges. Beyond coding, I enjoy collaborating with teams to create seamless and user-centric solutions. Whether it's optimizing performance, improving system architecture, or learning a new tool, I am always motivated to bring value to every project I contribute to.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
.about-view {
  background-color: #f7f9fc;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 30px;
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

.about-view p {
  text-align: justify;
}

@media (max-width: 768px) {
  .about-view {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
