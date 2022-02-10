<template>
  <div id="app">
    <div id="logo-nav">
      <div class="row">
        <div id="the-logo">
          <a href="#" style="text-decoration: none;"><h1>VIRGIN APE<br>SOCIETY</h1></a>
        </div>
      </div>
      <div id="the-nav">
        <div class="column">
          <a href="#gallery">Gallery</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#">FAQ</a>
          <a href="#">Social links</a>
        </div>
      </div>
    </div>
    <div id="bg-circle-1"/>
    <div id="bg-circle-2"/>
    <div id="bg-circle-3"/>
    <div class="column">
      <div class="section" style="padding-top: 9.5rem">
        <div id="hero-banner">
          <div class="row" style="justify-content: flex-end;">
            <div class="column" style="margin-left: 2rem;">
              <img src="./assets/3.jpg" style="border-radius: 16px; width: 9rem; height: 9rem;"/>
            </div>
            <div class="column" style="margin-left: 2rem;">
              <img src="./assets/2.jpg" style="border-radius: 16px; width: 9rem; height: 9rem; margin-bottom: 2rem;"/>
              <img src="./assets/4.jpg" style="border-radius: 16px; width: 9rem; height: 9rem;"/>
            </div>
            <div class="column" style="margin-left: 2rem;">
              <!--div style="background-color: #c4c4c4; border-radius: 16px; width: 20rem; height: 20rem;"/-->
              <img src="./assets/1.jpg" style="border-radius: 16px; width: 20rem; height: 20rem;"/>
            </div>
          </div>
        </div>
        <div id="the-hero-text">
          Join the coolest society<br>on the internet
        </div>
        <div id="the-hero-subtext">
          Stay tuned for our fair launch
        </div>
      </div>

      <div id="gallery" class="section">
        <div class="column" style="justify-content: flex-end;">
          <gallery :nfts="nfts"/>
        </div>
      </div>

      <div id="roadmap" class="section">
        <roadmap/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Gallery from '@/components/Gallery.vue';
import Roadmap from '@/components/Roadmap.vue';

export default Vue.extend({
  name: 'App',
  data() {
    const nfts = (() => {
      const n = [];
      for (let i = 1; i <= 19; i += 1) {
        n.push(i);
      }
      return n;
    })();
    return {
      nfts,
    };
  },
  components: {
    Gallery,
    Roadmap,
  },
});

</script>

<style lang="scss">
html {
  background: #01224d;
  color: #ffffff;
  font-size: 1vw;
}

#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 6rem;
  margin-right: 6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  padding-top: 11.5rem;
  margin-left: 14rem;
}

// #vignette {
//   position: fixed;
//   top: 0;
//   height: 14rem;
//   width: 100%;
//   background-image: linear-gradient(180deg, white, transparent);
//   z-index: 999;
// }

// #vignette-bottom {
//   position: fixed;
//   bottom: 0;
//   height: 4rem;
//   width: 100%;
//   background-image: linear-gradient(0deg, white, transparent);
//   z-index: 999;
// }

#bg-circle-1 {
  position: fixed;
  left: 38rem;
  top: -17rem;
  height: 40rem;
  width: 40rem;
  background-image: radial-gradient(#1c71a6, transparent);
  filter: blur(125px);
  border-radius: 50%;
  z-index: -1000;
}

#bg-circle-2 {
  position: fixed;
  left: -32rem;
  top: 18rem;
  height: 78rem;
  width: 78rem;
  background-image: radial-gradient(#8f4aa9, transparent);
  filter: blur(260px);
  border-radius: 50%;
  z-index: -1000;
}

#bg-circle-3 {
  position: fixed;
  right: -84rem;
  bottom: -120rem;
  height: 144rem;
  width: 144rem;
  background-image: radial-gradient(#6c47db, transparent);
  filter: blur(180px);
  border-radius: 50%;
  z-index: -1000;
}

#logo-nav {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

#the-logo {
  text-align: left;
  font-family: Montserrat, sans-serif;
  h1 {
    font-weight: 400;
    color: #ffffff;
  }
}

#the-nav {
  text-align: left;
  width: fit-content;
  margin-top: 2rem;

  a {
    font-size: 1.25rem;
    color:#ffffff;
    margin-bottom: 1.5rem;
    text-decoration: none;
    padding-right: 2rem;
  }
}

#the-hero-text {
  font-family: Montserrat, sans-serif;
  font-size: 2.75rem;
  text-align: right;
  margin-top: 3rem;
}

#the-hero-subtext {
  font-size: 1.75rem;
  text-align: right;
  margin-top: 1rem;
}
</style>
