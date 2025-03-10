<script setup lang="ts">
import { useItemsStore } from '~/store/items';

const { items } = storeToRefs(useItemsStore());
</script>

<template>
    <div class="catalog">
        <h1 class="h-1">
            Тестовая задача
        </h1>
        <div class="catalog__items">
            <template v-for="i in items">
                <div class="catalog__wrapper">
                    <Item :id="String(Math.random())" v-bind="i"/>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
.catalog {
    display: flex;
    padding: 32px 40px;
    flex-direction: column;
    gap: 24px;
    &__items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
    }
    &__wrapper {
        width: 200px;
        height: 284px;
        overflow: visible;
    }
}
</style>