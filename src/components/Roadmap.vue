<template>
  <div class="column">
    <div class="roadmap-title" style="margin-bottom: 2rem">NFT fair launch</div>
    <div class="row" style="justify-content: center">
      <div class="roadmap-circle first-circle"/>
    </div>
    <div v-for="(item, index) in roadmap" :key="index">
      <div class="row" style="justify-content: center">
        <div class="line" :style="`background-color: ${colors[index%3]}`"/>
      </div>
      <div class="row" style="justify-content: center;">
        <div class="roadmap-content" :style="'text-align:right;' + ((index%2 == 0) ? 'opacity: 0%' : '')">
          <div class="roadmap-title">{{ item.title }}</div>
          <div class="roadmap-description">{{ item.description }}</div>
        </div>
        <div :class="`roadmap-circle roadmap-circle-${index%3}`"/>
        <div class="roadmap-content" :style="'text-align:left;' + ((index%2 != 0) ? 'opacity: 0%' : '')">
          <div class="roadmap-title">{{ item.title }}</div>
          <div class="roadmap-description">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 10rem">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      roadmap: [
        {
          title: '10%',
          description: '50% Royalties of the secondary market sales will be given to the DAO and DAO will decide what to do with it.',
        },
        {
          title: '25%',
          description: 'Exclusive Virgin Ape Society Merch for the holders',
        },
        {
          title: '50%',
          description: 'Airdrops of female virgin apes and chad apes for the eligible holders. Staking and breeding. You can stake your NFT to get exclusive upcoming airdrops and even breed your male virgin apes with upcoming female virgin apes to get a chad ape.',
        },
        {
          title: '75%',
          description: 'Design a launchpad so that we can launch other NFT projects on it and incentivise our holders with airdrops from the launches and exclusive Whitelists and revenue generated will be shared in DAO',
        },
        {
          title: '100%',
          description: 'Apeverse - Launch our own planet metaverse. Exclusive Virgin Ape Society Merch with Metaverse tech.',
        },
      ],
      colors: ['#8f4aa9', '#6c47db', '#009dff'],
    };
  },
});
</script>

<style scoped>
.roadmap-title {
  font-size: 2rem;
}
.roadmap-circle {
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 4rem;
  z-index: 0;
}

.roadmap-circle:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  padding: 0.5rem;
  border-radius: 50%;
  background: linear-gradient(152deg, #009dff 20%, #8f4aa9 80%);
  --webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  --webkit-mask-composite: xor;
  mask-composite: exclude;
}

.roadmap-circle-0:before {
  background: linear-gradient(152deg, #8f4aa9 20%, #6c47db 80%);
}
.roadmap-circle-1:before {
  background: linear-gradient(152deg, #6c47db 20%, #009dff 80%);
}
.roadmap-circle-2:before {
  background: linear-gradient(152deg, #009dff 20%, #8f4aa9 80%);
}

.first-circle {
  width: 6rem;
  height: 6rem;
}

.first-circle:before {
  content: "";
  background: linear-gradient(152deg, #009dff 20%, #8f4aa9 80%);
}

/* .first-circle {
  width: 6rem;
  height: 6rem;
}

.first-circle .outer-circle {
  width: 6rem;
  height: 6rem;
}

.first-circle .outer-circle .inner-circle {
  width: 5rem;
  height: 5rem;
} */

.line {
  width: 0.5rem;
  height: 12rem;
  background-color: #c4c4c4;
  margin-top: -2px;
  margin-bottom: -2px;
}

.roadmap-content {
  height: 4rem;
  width: 12rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
