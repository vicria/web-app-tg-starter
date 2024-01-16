<template>
    <learning-survey></learning-survey>
</template>

<script>
    import LearningSurvey from './components/survey/LearningSurvey.vue';

    export default {
        components: {
            LearningSurvey,
        },
        data() {
            return {
                savedSurveyResults: [],
            };
        },
        methods: {},
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
    }

    body {
        background-color: #121213;
        color: #ffffff;
    }
</style>