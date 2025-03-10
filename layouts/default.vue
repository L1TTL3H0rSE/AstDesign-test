<script setup lang="ts">
import { useItemsStore } from '~/store/items';
import { usePopupsStore } from '~/store/popups';

const { popup } = storeToRefs(usePopupsStore());
const { init } = useItemsStore();

onMounted(() => init());
</script>

<template>
    <div class="layout">
        <div class="layout__body">
            <Header />
            <div class="layout__content">
                <slot />
            </div>
            <div class="layout__popups" v-if="popup">
                <Popup />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
#__nuxt {
    background: var(--background-color);
}

body {
    margin: 0;
}

.layout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__body {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-bottom: 40px;
        position: relative;
    }
    &__content {
        max-width: 1440px;
        margin: 0 auto;
        flex: 1;
        display: flex;
    }
    &__popups {
        position: fixed;
        bottom: 40px;
        right: 40px;
        z-index: 100;
    }
}
</style>