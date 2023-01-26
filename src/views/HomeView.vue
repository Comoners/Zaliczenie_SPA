<template>
  <h1>Aby sprawdzić dzisiejszą pogodę wpisz poniżej nazwę miasta:</h1>
  <div id="app">
    <main>
      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search..."
          v-model="query"
          @keypress="Weather"
        />
      </div>

      <div class="weather-wrap" v-if = "typeof weather.main != 'undefined' ">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
        <h1>Aby zakończyć działanie aplikacji wcisnij przycisk ponizej:</h1>
        <router-link button="" to="/Zaliczenie" custom v-slot="{navigate}"><button id="button" @click="navigate" role="link">Zakończ</button></router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      api_key: '8ff7c9cbc06b0085c23e8e2a84fc23f5',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    Weather(e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzezsień", "Październik", "Listopad", "Grudzień"];
      let dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

      let day = dni[d.getDay()];
      let date = d.getDate();
      let month = miesiace[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}


main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #000000;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
}


.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
}
</style>







