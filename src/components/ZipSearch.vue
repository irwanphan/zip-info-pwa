<template>
  <ion-grid>
    <!-- call method onSubmit -->
    <form @submit="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>
            Zipcode
          </ion-label>
          <!-- bind input to data {zip} -->
          <ion-input :value="zip" @input="zip = $event.target.value" placeholder="enter US zipcode" name="zip"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button type="submit" color="primary" expand="block">
          Find
        </ion-button>
      </ion-col>
    </form>    
  </ion-grid>    
</template>

<script>
export default {
  name: "ZipSearch",
  data() {
    return {
      zip: ""
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      console.log(this.zip)
    }
  },
}
</script>
