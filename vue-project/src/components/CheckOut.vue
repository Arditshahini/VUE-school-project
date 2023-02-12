<!--<template>
  <div class="checkout-page">

    <p>Product: {{ offer.name }}</p>
    <p>Price: {{ offer.price }}</p>
    <p>Total: {{ this.$route.params.quantity * offer.price }} SEK</p>
  </div> -->
<template>
  <div class="col">
    <div class="card" style="width: 18rem; margin: auto">
      <img
        :src="'/src/assets/img/' + offer.image"
        class="card-img-top"
        alt="cars"
        style="height: 20rem"
      />
      <div class="card-body">
        <h5 class="card-title">Märke: {{ offer.name }}</h5>
        <p class="card-text">Pris: {{ offer.price }}</p>
        <p class="card-text2">
          Total: {{ this.$route.params.quantity * offer.price }} SEK
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import cars from "../../public/cars.json";

export default {
  computed: {
    offer() {
      const car = cars.find((c) => c.id === this.$route.params.offerId);
      //   alert(JSON.stringify(this.$route.params));
      return car;
    },
  },
};
</script>
