<template>
  <div>
    <img style="width: 300px; height: 200px;" :src="image" @error="handleError" />

    <div>    {{ hero.displayName }}</div>


   <div>    {{ hero.stat.attackType }}</div>

  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import img from '../assets/dotaLogo.png'
export default {
  props: ["hero"],
  setup(props) {

    // const image = ref('')

    // onMounted(()=>{
    //   image.value =   "http://cdn.dota2.com/apps/dota2/images/heroes/" +
    //     props.hero.shortName +
    //     "_lg.png"
    // }
    // )

    const image = computed(()=>{
      return "http://cdn.dota2.com/apps/dota2/images/heroes/" +
        props.hero.shortName +
        "_lg.png"
    })


    const handleError = (event) => {
      event.target.src =img
     
    };
    console.log(img);

    return { image, handleError };
  },
};
</script>

<style>
</style>