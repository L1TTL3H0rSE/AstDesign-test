<script setup lang="ts">
import { routerKey } from 'vue-router';
import { useBasketStore } from '~/store/basket';
import { useItemsStore } from '~/store/items';
import { usePopupsStore } from '~/store/popups';

type ItemProps = {
    id: string;
    title?: string;
    brand?: string;
    image?: string;
    price?: number;
    oldPrice?: number;
    hover?: boolean;
}

const props = withDefaults(defineProps<ItemProps>(), {
    id: String(Math.random()),
    title: "Цветные наклейки на клавиши пианино, один два три четыре пять",
    brand: "TERRIS",
    image: "https://s3-alpha-sig.figma.com/img/51cd/c3d2/1edbd228223c006e9601511006945b10?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OJg88~y6-zag1088-EqOQMi3fRSZwv1ckUham~AEbmaqS1-s5aiwVPNNfudAi6e8stWH51AZXyMzuEp2NTPXeNEXEwOHnjnWElodIo8AP8Bo13k8tMIqy5fY~-NRzFalyXUbxko9EzlQB0WktzuuXf-qBsrn~ybehnwtB78usm6UdlzCQ2qShiZNCE3S-qo4FwWX2Gvepu~pNOo5sYRw0rn8VeIbyxVEOhCb9vNTlCTv7akHa7HXC5tt9v7YvNlpCJb0h8NLgr75iVMVEP6K~17ClFJnykr1NUCTyrASmp5zjM~8UaCMbFwBH0Zc9uiSk9nlbGFmo1XBS~WW2rFZUg__",
});


const percentage = computed(() => props.oldPrice && props.price ? Math.ceil((1 - props.price / props.oldPrice) * 100) : undefined);

const router = useRouter();
const { addBasket } = useBasketStore();
const { addPopup } = usePopupsStore();

function add() {
    addBasket();
    addPopup();
}
</script>

<template>
    <div class="item" :class="{ 'hover': props.hover }">
        <div class="item__image" :style="{ '--image': `url(${props.image})`}" @click="router.push(`/products/${props.id}`)">
            <span class="p-discount" v-if="percentage">
                {{ `-${percentage}%` }}
            </span>
        </div>
        <div class="item__content">
            <div class="item__price">
                <template v-if="oldPrice">
                    <p class="p-price">
                        {{ `${props.price} ₽` }}
                    </p>
                    <p class="p-sale">
                        {{ `${props.oldPrice} ₽` }}
                    </p>
                </template>
                <template v-else>
                    <p class="p-price">
                        {{ `${props.price} ₽` }}
                    </p>
                </template>
            </div>
            <div class="item__brand">
                <p class="p-brand">
                    {{ props.brand }}
                </p>
            </div>
            <div class="item__title">
                <p class="p-m">
                    {{ props.title }}
                </p>
            </div>
        </div>
        <div class="item__button" @click="add">
            <p class="p-m">
                В корзину
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    &__image {
        width: 200px;
        height: 200px;
        background: var(--image);
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 12px;
        > span {
            position: absolute;
            left: 6px;
            bottom: 6px;
            background: white;
            border-radius: 4px;
            height: 20px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-sale-color);
        }
    }
    &__brand {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
    }
    &__price {
        display: flex;
        gap: 5px;
        align-items: baseline;
        > .p-sale {
            text-decoration: line-through;
            color: var(--text-secondary-color);
        }
    }
    &__title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
    }
    &__button {
        display: none;
        width: 120px;
        height: 40px;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: var(--background-dark-color);
        cursor: pointer;
        > p {
            color: var(--text-light-color);
        }
    }
    &:hover,
    &.hover {
        position: relative;
        z-index: 2;
        box-shadow: 0px 10px 40px 0px #0000001A;
        width: 250px;
        padding: 24px;
        box-sizing: border-box;
        transform: translate(-24px, -24px);
        background: var(--background-color);
        border-radius: 16px;
        .item__button {
            display: flex;
        }
    }
}
</style>