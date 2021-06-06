<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Header> </Header>
  <Accueil> </Accueil>
  <FormInfoReservation> </FormInfoReservation>
  <Footer></Footer>
</template>

<script>
import Accueil from './components/Accueil.vue'
import Footer from './components/Footer.vue'
import FormInfoReservation from './components/FormInfoReservation.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer, Header, Accueil, FormInfoReservation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
