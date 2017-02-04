<template>
    <router-link 
        :to="'/project/' + data.id">
        <div class="cardtext content is-large card">
        <h1 id="cardname">{{ data.name }}</h1>
            <progress class="progress is-primary" 
            v-bind:value="data.completed" 
            v-bind:max="data.total">
                <p>{{ completePercent }} %</p>
            </progress>
            <p>{{ completePercent }} % completed</p>
        </div>

    </router-link>        
</template>

<script>
    export default {
        name: 'card',
        props: ['data'],
        data: function getCardData() {
            return {
                completedTask: 98,
                name: 'Card Name',
                totalTask: 100,
            };
        },
        computed: {
            completePercent: function completePercent() {
                return (this.data.completed / this.data.total) * 100;
            },
        },
    };
</script>

<style>
    div.cardtext{
        padding: 25px;
    }
    div.cardtext{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    #cardname{
        text-align: center;
        padding-bottom: 25px;
    }
</style>
