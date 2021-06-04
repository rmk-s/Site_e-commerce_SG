<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Header> </Header>
  <HelloWorld msg="Bienvenue sur Express Taxi ! "/>
  <FormInfoReservation> </FormInfoReservation>
  <Footer></Footer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import FormInfoReservation from './components/FormInfoReservation.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Footer, FormInfoReservation, Header
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
