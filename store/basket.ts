export const useBasketStore = defineStore("basket", () => {
    const basket = ref(0);

    function addBasket() {
        basket.value++;
    }

    return { basket, addBasket }
})