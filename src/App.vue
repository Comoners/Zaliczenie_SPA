<template>
  <nav>
    
    <router-link button="" to="/" custom v-slot="{navigate}"><button id="button" @click="navigate" role="link">Glowna</button></router-link> |
    <router-link to="/about" custom v-slot="{navigate}"><button @click="navigate" role="link">Opis</button></router-link>
  </nav>
  <router-view/>
</template>




<style>
*, *::after, *::before {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    outline: 0;
    box-sizing: border-box;;
}
body{
    background: linear-gradient(159deg, rgba(2,0,36,1) 0%, rgba(24,24,42,1) 33%, rgba(4,41,48,1) 100%);
    min-height: 100vh;;
    font-family: "Poppins";
}
button{
    margin: 20px;
    background: rgb(13, 63, 13);
    padding: 15px 50px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    border-radius: 5px;
    transition: all 100ms ease-in-out
}
button:hover{
    background: rgb(9, 114, 9);
    transform: scale(1.1);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
