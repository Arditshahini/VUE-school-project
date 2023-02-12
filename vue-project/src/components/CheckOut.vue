<template>
  <div class="checkout-page">
    <!-- Checkout content -->
    <p>Product: {{ offer.name }}</p>
    <p>Price: {{ offer.price }}</p>
    <p>Total: {{ this.$route.params.quantity * offer.price }} SEK</p>
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
