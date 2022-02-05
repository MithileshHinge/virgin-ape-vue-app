<template>
  <div>
    <div v-for="i in Math.ceil(nfts.length / 4)" class="row" style="justify-content: flex-end;" :key="i">
      <div v-for="j in 4" :key="i*j">
        <img v-if="(i-1)*4+j-1 < nfts.length" :src="require(`../assets/${nfts[(i-1)*4+j-1]}.jpg`)" class="cell"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    nfts: Array,
  },
});
</script>

<style scoped>
.cell {
  /* background-color: #c4c4c4; */
  border-radius: 16px;
  width: 12rem;
  height: 12rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
</style>
