<script setup lang="ts">
import { useBasketStore } from '~/store/basket';
import { IconsBasket } from '#components';

const { basket } = storeToRefs(useBasketStore());

const basketText = computed(() => {
    const mod10 = basket.value % 10;
    const mod100 = basket.value % 100;

    if (mod10 == 1 && mod100 != 11) {
        return "товар";
    }
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
        return "товара"
    }
    return "товаров"
});
</script>

<template>
    <div class="header__wrapper">
        <div class="header">
            <NuxtLink to="/" class="h-1">
                Brand Name
            </NuxtLink to="/">
            <div class="header__basket">
                <IconsBasket />
                <p class="p-m">{{ `${basket} ${basketText}` }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 92px;
    flex: 1;
    padding: 0 40px;
    box-sizing: border-box;
    max-width: 1440px;

    > a {
        text-decoration: none;
        &.router-link-active,
        &:visited {
            color: var(--text-dark-color);
        }
    }

    &__basket {
        display: flex;
        gap: 10px;
        align-items: center;
        > svg {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            color: black;
        }
    }

    &__wrapper {
        box-shadow: 0px 10px 40px 0px #0000001A;
        display: flex;
        justify-content: center;
    }
}
</style>