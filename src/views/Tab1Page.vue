<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>



      {{ data.data.hero }}



    </ion-content>
  </ion-page>
</template>

<script  >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import fetchAll from '../data/getData';
import { onMounted, ref } from 'vue';

export default{

  components:{IonPage, IonHeader, IonToolbar, IonTitle, IonContent},
  setup(){

    const data = ref([])

    // onMounted(async()=>{

    //   data.value = await fetchAll('https://api.dazelpro.com/mobile-legends/hero')

    // })

  



    return {data}
  }

}
</script>
