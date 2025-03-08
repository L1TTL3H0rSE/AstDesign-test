<script setup lang="ts">

type ItemProps = {
    id: string;
    title?: string;
    brand?: string;
    image?: string;
    price?: number;
    discount?: number;
}

const props = withDefaults(defineProps<ItemProps>(), {
    id: String(Math.random()),
    title: "Цветные наклейки на клавиши пианино, один два три четыре пять",
    brand: "TERRIS",
    discount: 1288,
    price: 1610,
    image: "https://s3-alpha-sig.figma.com/img/51cd/c3d2/1edbd228223c006e9601511006945b10?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OJg88~y6-zag1088-EqOQMi3fRSZwv1ckUham~AEbmaqS1-s5aiwVPNNfudAi6e8stWH51AZXyMzuEp2NTPXeNEXEwOHnjnWElodIo8AP8Bo13k8tMIqy5fY~-NRzFalyXUbxko9EzlQB0WktzuuXf-qBsrn~ybehnwtB78usm6UdlzCQ2qShiZNCE3S-qo4FwWX2Gvepu~pNOo5sYRw0rn8VeIbyxVEOhCb9vNTlCTv7akHa7HXC5tt9v7YvNlpCJb0h8NLgr75iVMVEP6K~17ClFJnykr1NUCTyrASmp5zjM~8UaCMbFwBH0Zc9uiSk9nlbGFmo1XBS~WW2rFZUg__",
})


const percentage = computed(() => Math.ceil((1 - props.discount / props.price) * 100))
</script>

<template>
    <div class="item">
        <div class="item__image" :style="{ '--image': `url(${props.image})`}">
            <span class="p-discount">
                {{ `-${percentage}%` }}
            </span>
        </div>
        <div class="item__content">
            <div class="item__price">
                <p class="p-price">
                    {{ props.discount }}
                </p>
                <p class="p-sale">
                    {{ props.price }}
                </p>
            </div>
            <div class="item__brand">
                <!-- По идее тут должна быть картинка, а не текст -->
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
    </div>
</template>

<style lang="scss">
.item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 200px;
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
}
</style>