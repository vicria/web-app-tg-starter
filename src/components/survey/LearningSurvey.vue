<template>
    <section>
        <base-card>
            <h2> демонстрация </h2>
                <div>
                    <tg-button>Submit</tg-button>
                    <main-tg-button text="Test" color="#121000" textColor="#121213"/>
                </div>
        </base-card>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                enteredName: '',
                chosenRating: null,
                invalidInput: false,
            };
        },
        methods: {
            async submitSurvey() {
                if (this.enteredName === '' || !this.chosenRating) {
                    this.invalidInput = true;
                    return;
                }
                this.invalidInput = false;

                const data = {
                    name: this.enteredName,
                    experience: this.chosenRating
                };
                await axios.post('/api/vue/create', data);
                this.enteredName = '';
                this.chosenRating = null;
            },
        },
    };
</script>

<style scoped>
    .form-control {
        margin: 0.5rem 0;
    }

    input[type='text'] {
        display: block;
        width: 20rem;
        margin-top: 0.5rem;
    }
</style>