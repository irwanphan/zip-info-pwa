<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          ZipInfo
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- if run get-zip method -->
      <ZipSearch v-on:get-zip="getZipInfo" />
      <!-- show it here, bind info to info in the data -->
      <ZipInfo v-bind:info="info" />
      <!-- bind to info, on emitted clear info event call clearInfo method -->
      <ClearInfo v-bind:info="info" v-on:clear-info="clearInfo" />
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import ZipSearch from '../components/ZipSearch'
import ZipInfo from '../components/ZipInfo'

import ClearInfo from '../components/ClearInfo'

export default {
  name: 'home',
  components: {
    ZipSearch,
    ZipInfo,
    ClearInfo
  },
  data() {
    return {
      // the retrieved json will be passed to var info
      info: null
    }
  },
  methods: {
    // getZipInfo(zip) {
    //   // see if it passed from ZipSearch
    //   console.log(zip)
    // }
    async getZipInfo(zip) {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
      // if it is not valid
      if (res.status == 404) {
        this.showAlert()
      }
      // get the json of the zipsearch
      // const info = await res.json()
      this.info = await res.json()
      // see if it works
      // console.log(info)
    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "Not Valid",
          message: "enter a valid US zipcode",
          buttons: ["OK"]
        })
        .then(a => a.present())
    },
    clearInfo() {
      this.info = null
    }
  }
}
</script>
