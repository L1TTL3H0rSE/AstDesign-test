<script setup lang="ts">
    const adjectives = ['red', 'blue', 'happy', 'soft', 'new', 'vintage', 'modern', 'sleek', 'eco', 'smart'];
    const nouns = ['shirt', 'chair', 'car', 'phone', 'laptop', 'watch', 'glasses', 'bike', 'desk', 'lamp'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const slug = `${randomAdjective}-${randomNoun}`
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '');
</script>

<template>
    <div class="landing">
        <NuxtLink :to="`/catalog/${slug}`" class="h-1">Перейти в раздел каталога</NuxtLink to="/catalog">
    </div>
</template>

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