<template>
    <section>
        <base-card>
            <h2>Submitted Experiences</h2>
            <div>
                <base-button @click="loadData">Load Submitted Experiences</base-button>
            </div>
            <ul v-if="results.length>0">
                <survey-result
                        v-for="result in results"
                        :key="result.id"
                        :name="result.name"
                        :rating="result.rating"
                ></survey-result>
            </ul>
            <p v-else>Add some data first</p>
        </base-card>
    </section>
</template>

<script>
    import SurveyResult from './SurveyResult.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                results: [],
            }
        },
        components: {
            SurveyResult,
        },
        async created() {
            await this.loadData();
        },
        methods: {
            loadData() {
                this.results = [];
                axios.get('/api/vue').then((response) => {
                    if (response.status === 200) {
                        for (let item of response.data) {
                            this.results.push({
                                id: item.id,
                                name: item.name,
                                rating: item.experience,
                            });
                        }
                    }
                })

            }
        }
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>