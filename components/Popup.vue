<template>
    <div class="popup">
        <p class="p-m">
            Товар добавлен в
        </p>
        <span class="p-m underscore">корзину</span>
    </div>
</template>

<style lang="scss" scoped>
.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-popup-color);
    width: 233px;
    height: 65px;
    border-radius: 16px;
    
    p, span {
        color: var(--text-light-color);
    }
}
</style>
