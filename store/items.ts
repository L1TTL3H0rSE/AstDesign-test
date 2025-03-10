export const useItemsStore = defineStore("items", () => {
    const items = ref<Product[]>([]);

    function init() {
        const localItems = Array.from({ length: 12 }, () =>
            generateFakeProduct(String(Math.random()))
        )
        items.value = localItems;
    }

    return {
        items,
        init,
    }
})