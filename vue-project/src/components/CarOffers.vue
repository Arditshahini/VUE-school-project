<script>
export default {
  props: {
    offer: {
      required: true,
      type: Object,
    },
  },
};
</script>
<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img src="{{offer.image}}" class="card-img-top" alt="cars" />
      <div class="card-body">
        <h5 class="card-title">Märke: {{ offer.name }}</h5>
        <p class="card-text">Model: {{ offer.model }}</p>
        <p class="card-text2">Pris: {{ offer.price }}</p>
        <a href="#" class="btn btn-secondary">Köp</a>
      </div>
    </div>
  </div>
</template>
<style scope>
.col {
  margin-top: 8rem;
}
</style>
