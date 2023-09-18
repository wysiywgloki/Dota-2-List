<template>
  <ion-page>
    <ion-header >
        <ion-toolbar>
          <div style="display: flex; flex-direction: row">
            <ion-title> App Name </ion-title>
            <ion-searchbar v-model="searchText"></ion-searchbar>
          </div>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
     

      <ion-grid v-if="computedData">
        <ion-row>
          <ion-col size="4" v-for="hero in computedData" :key="hero.hero_id">



            <HeroCard @click="()=>router.push({name:'heroPage', params:{hero: JSON.stringify(hero) }})" :hero="hero"/>
          
          
          </ion-col>
        </ion-row>
      </ion-grid>


    </ion-content>
  </ion-page>
</template>

<script  >
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonSearchbar
} from "@ionic/vue";

import fetchAll from "../data/getData";
import { onMounted, ref, computed } from "vue";
import HeroCard from "../components/HeroCard.vue";
import { useRouter } from 'vue-router';
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    HeroCard,
    IonRow,
    IonGrid,
    IonCol,
    IonSearchbar
  },
  setup() {
    const data = ref([]);
    const  searchText=ref('')
    onMounted(async () => {
      data.value = await fetchAll("https://docs.stratz.com/api/v1/Hero" );
      console.log(data.value)

    });

  
    const computedData = computed(() => {
      if (data.value.data) {
    const dataArray = Object.values(data.value.data);
    return dataArray.filter((item) => {
     
      if(item.displayName){
        const displayName = item.displayName.toLowerCase(); // Convert to lowercase
      const searchTextLower = searchText.value.toLowerCase(); // Convert to lowercase

      return displayName.includes(searchTextLower);
      }
  
    });
  }


      return data.value
    })

  
    return {
       data,
       computedData,
       searchText,
       router:useRouter()
      
      };
  },
};
</script>
