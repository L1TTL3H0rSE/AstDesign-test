<script setup lang="ts">

</script>

<template>
    <div class="footer__wrapper">
        <div class="footer">
            <h1 class="h-1">
                Brand Name
            </h1>
            <div class="footer__link">
                <p class="p-m">Разработчик</p>
                <NuxtLink class="p-m" to="aboba">Тельпуховский Николай</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 92px;
    flex: 1;
    max-width: 1440px;
    padding: 0 40px;
    box-sizing: border-box;
    h1, p, a {
        color: var(--text-light-color);
    }
    a {
       text-decoration: underline; 
       &:visited {
            color: var(--text-light-color);
        }
    }

    &__wrapper {
        background: var(--background-dark-color);
        display: flex;
        justify-content: center;
        width: 100%;
    }
}
</style>