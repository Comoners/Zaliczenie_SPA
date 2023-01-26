<template>
 <h1>{{ Zaliczenie }}</h1>
 <h1>{{ Person1 }}</h1>
 <h1>{{ Person2 }}</h1>
 <h1>{{ Person3 }}</h1>
</template>

<script>
export default {
data() {
  return{
    Person1: 'Ewelina Dośpiał 57658',
    Person2: 'Kacper Baranowski 58988',
    Person3: 'Kacper Gabis 56108',
    Zaliczenie: 'Aplikacja pogody na zaliczenie projektu z SPA wykonana w grupie przez:',
  }
}
}

</script>

<style>
*, *::after, *::before {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    outline: 0;
    box-sizing: border-box;;
}

h1{
  color: rgb(187, 187, 187);
}

</style>
