<template>
    <button class="main-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                console.log('Клик по кнопке!');
            },
        },
    };
</script>

<style scoped>
    .main-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 8px;
        background-color: #3f3f46;
        color: #ffffff;
        border: none;
        outline: none;
        transition: background-color 0.3s;
    }

    .main-button:hover {
        background-color: #4f4f56;
    }
</style>
