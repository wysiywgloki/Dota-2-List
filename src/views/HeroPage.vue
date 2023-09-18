<template>
  <IonPage>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>

          <!-- <ion-title v-if="anime">{{ anime.data.titles[0].title }}</ion-title> -->
        </ion-toolbar>
      </ion-header>

      <img
        style="width: 300px; height: 200px"
        :src="image"
        @error="handleError"
      />
      <div>Name: {{ hero.displayName }}</div>

      <div>Type: {{ hero.attackType }}</div>

      <div>Attack Type: {{ hero.stat.attackType }}</div>
      <div>Starting Armor: {{ hero.stat.startingArmor }}</div>
      <div>Starting Magic Armor: {{ hero.stat.startingMagicArmor }}</div>
      <div>Starting Damage Min: {{ hero.stat.startingDamageMin }}</div>
      <div>Starting Damage Max: {{ hero.stat.startingDamageMax }}</div>
      <div>Attack Rate: {{ hero.stat.attackRate }}</div>
      <div>Attack Animation Point: {{ hero.stat.attackAnimationPoint }}</div>
      <div>
        Attack Acquisition Range: {{ hero.stat.attackAcquisitionRange }}
      </div>
      <div>Attack Range: {{ hero.stat.attackRange }}</div>
      <div>Attribute Primary: {{ hero.stat.AttributePrimary }}</div>
      <div>Hero Primary Attribute: {{ hero.stat.heroPrimaryAttribute }}</div>
      <div>Strength Base: {{ hero.stat.strengthBase }}</div>
      <div>Strength Gain: {{ hero.stat.strengthGain }}</div>
      <div>Intelligence Base: {{ hero.stat.intelligenceBase }}</div>
      <div>Intelligence Gain: {{ hero.stat.intelligenceGain }}</div>
      <div>Agility Base: {{ hero.stat.agilityBase }}</div>
      <div>Agility Gain: {{ hero.stat.agilityGain }}</div>
      <div>HP Regen: {{ hero.stat.hpRegen }}</div>
      <div>MP Regen: {{ hero.stat.mpRegen }}</div>
      <div>Move Speed: {{ hero.stat.moveSpeed }}</div>
      <div>Move Turn Rate: {{ hero.stat.moveTurnRate }}</div>
      <div>HP Bar Offset: {{ hero.stat.hpBarOffset }}</div>
      <div>Vision Daytime Range: {{ hero.stat.visionDaytimeRange }}</div>
      <div>Vision Nighttime Range: {{ hero.stat.visionNighttimeRange }}</div>
      <div>Complexity: {{ hero.stat.complexity }}</div>
      <div>Primary Attribute Enum: {{ hero.stat.primaryAttributeEnum }}</div>
    </ion-content>
  </IonPage>
</template>
  
  <script>
import { useRoute } from "vue-router";
import img from "../assets/dotaLogo.png";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/vue";
import { ref } from "vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonContent,
  },
  setup() {
    const router = useRoute();

    const hero = JSON.parse(router.params.hero);



    const image = ref(
      "http://cdn.dota2.com/apps/dota2/images/heroes/" +
        hero.shortName +
        "_lg.png"
    );

    const handleError = (event) => {
      event.target.src = img;
    };

    return { router, hero, image, handleError };
  },
};
</script>
  
  <style scoped>
.image {
  margin: 5px;
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.flex {
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.anime-title {
  font-weight: bold;
}
</style>