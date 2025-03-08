<script setup lang="ts">
import { usePopupsStore } from '~/store/popups';

const { popup } = usePopupsStore();
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
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-bottom: 40px;
    }
    &__content {
        max-width: 1440px;
        margin: 0 auto;
        flex: 1;
        display: flex;
    }
    &__popups {
        position: absolute
    }
}
</style>