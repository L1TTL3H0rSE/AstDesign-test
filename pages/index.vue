<template>
    <div class="landing">
        <NuxtLink to="/catalog" class="h-1">Перейти в раздел каталога</NuxtLink to="/catalog">
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.landing {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    > a {
        color: var(--text-sale-color);
        text-decoration: underline;
        font-weight: 500;
        &:visited {
            color: var(--text-sale-color);
        }
    }
}
</style>