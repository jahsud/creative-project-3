<template>
  <div id="app">
    <header>
      <h1>SABBATH LIBRARY</h1>
      <h3>🎨 Creative Project #3 </h3>
    </header>
    <div id="nav">
      <div class="home"><router-link to="/">Home</router-link></div>
      <div class="nav-right">
        <div class="nav-item"><router-link to="/music">Music</router-link></div>
        <div class="nav-item"><router-link to="/movies">Movies</router-link></div>
      </div>
    </div>
    <div class="main">
      <router-view/>
    </div>  
    <footer>
      <p>Andres Herrera | Copyright © 2020 All rights reserved.</p>
        <p><a href="https://github.com/jahsud/creative-project-3.git" target="_blank" class="button">GitHub Repo</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
    padding: 80px;
    text-align: center;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("./assets/jason-leung-u4Vz2MqX1fo-unsplash.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

#nav {
  overflow: hidden;
  background-color: #1d1e25;
  padding: 20px 10px;
}

#nav a {
  float: left;
  color: #c2c2c2;
  text-align: center;
  padding: 12px 25px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
  margin: 0px 5px;
}

.home {
  font-size: 28px;
  font-weight: bold;
}

.nav-right {
  display: flex;
  float: right;
}

#nav a:hover {
  background-color: #ddd;
  color: black;
}

#nav a.router-link-exact-active {
  background-color: #CC2E5D;
  color: white;
}

.main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 50px;
}

footer {
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #1f262e;
    color: white;
    text-align: center;
    font-size: 16px;
}

footer a {
  background-color: #CC2E5D;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 10px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 15px;
  cursor: pointer;
}

footer a:hover {
  opacity: 0.9;
}

</style>
