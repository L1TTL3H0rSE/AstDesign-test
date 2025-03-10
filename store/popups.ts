export const usePopupsStore = defineStore("popups", () => {
    const popup = ref(false);

    function addPopup() {
        popup.value = true;
        popupRemoval();
    }

    function popupRemoval() {
        setTimeout(() => {
            popup.value = false;
        }, 1_000)
    }

    return {
        popup,
        addPopup,
    }
})