export const useItemsStore = defineStore("items", () => {
    const items = ref<Product[]>([]);

    function init() {
        const localItems = Array.from({ length: 12 }, () =>
            generateFakeProduct()
        )
        items.value = localItems;
    }

    return {
        items,
        init,
    }
})