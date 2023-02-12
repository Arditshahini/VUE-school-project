<script>
export default {
  props: {
    offer: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    handlePurchase(offer) {
      //   alert(productId);
      this.$router.push({
        name: "checkout",
        params: { offerId: offer.id, quantity: this.quantity },
      });
    },
  },
};
</script>
<template>
  <div class="col">
    <div class="card" style="width: 18rem; margin: 3rem">
      <img
        :src="'/src/assets/img/' + offer.image"
        class="card-img-top"
        alt="cars"
        style="height: 20rem"
      />
      <div class="card-body">
        <h5 class="card-title">Märke: {{ offer.name }}</h5>
        <p class="card-text">Model: {{ offer.model }}</p>
        <p class="card-text2">Pris: {{ offer.price }}</p>
        <button class="btn btn-secondary" @click="decrementQuantity">-</button>
        <button
          class="btn btn-secondary"
          style="margin-left: 4px"
          @click="incrementQuantity"
        >
          +
        </button>
        Antal: {{ quantity }}
        <button class="btn btn-secondary" @click="handlePurchase(offer)">
          Köp
        </button>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scope></style>
