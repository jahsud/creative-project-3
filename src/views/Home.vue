<template>
  <div class="Home">
    <div class="banner">
      <h1>Looking for some entertaiment on a Sunday?</h1>
    </div>
    <div class="menu">
      <p>We have a great <router-link to="/music">Music</router-link> playlist and selected
      <router-link to="/movies">Movies</router-link> for you today.</p> <br>
      <h2>Let's play some!</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>

<style>
.banner {
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  color: aliceblue;
  padding: 50px;
  font-style: italic;
  font-size: 26px;
}

.menu {
  padding: 40px;
  font-size: 20px;
  font-weight: 600;
}

.menu a {
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

.menu h2 {
  font-style: italic;
}

</style>