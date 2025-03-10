<script setup lang="ts">
const route = useRoute();
const { data: product } = await useFetch(`/api/products/${route.params.id}`);
</script>

<template>
  <div class="product" v-if="product">
    <Item v-bind="product" :hover="true"/>
  </div>
</template>

<style lang="scss">
.product {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>