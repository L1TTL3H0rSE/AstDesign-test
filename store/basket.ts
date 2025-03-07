export const useBasketStore = defineStore("basket", () => {
    const basket = ref(0);

    function basketAdd() {
        basket.value++;
    }

    return { basket, basketAdd }
})