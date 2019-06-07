<template>
<!-- use v-if, so nothing would show if no info is submitted -->
  <ion-card v-if="info">
    <ion-card-header>
      <ion-card-subtitle>
        {{ info['post code'] }}
      </ion-card-subtitle>
      <ion-card-title>
        {{ info['places'][0]['place name'] }}
      </ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<script>
export default {
  name: "ZipInfo",
  props: ["info"]
}
</script>
