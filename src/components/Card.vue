<template>
    <router-link 
        :to="'/project/' + data.id">
        <div class="cardtext content is-large card">
        <h1 id="cardname">{{ data.name }}</h1>
            <progress class="progress is-primary" 
            v-bind:value="completedTaskCount" 
            v-bind:max="taskData.length">
                <p>{{ completePercent }} %</p>
            </progress>
            <p>{{ completePercent }} % completed</p>
        </div>

    </router-link>        
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'card',
    props: ['data'],
    computed: {
        ...mapGetters({
            getAllTasks: 'getTasks',
        }),
        taskData() {
            let currentTask = this.getAllTasks[this.data.id];
            this.$log.log('Curren task is ', currentTask);

            if (currentTask === undefined) {
                currentTask = [];
            }

            return currentTask;
        },
        completedTaskCount() {
            return this.taskData
                .filter(tData => tData.completed === true)
                .length;
        },
        completePercent: function completePercent() {
            this.$log.log('Curren task is ', this.taskData);
            const totalTasks = this.taskData.length;

            return this.completedTaskCount === 0
                ? 0
                : (this.completedTaskCount / totalTasks) * 100;
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
