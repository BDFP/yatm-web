<template>
    <div class="taskslist">
        <ul>
            <li v-for="task in taskList">
                <label>
                    <input id="new-task" 
                        class="checkbox" type="checkbox" name="status"
                        :value="task.id"
                        @change="doCheck"
                        :checked="task.completed"
                        v-model="task.completed"
                        />
                    {{task.name}}
                </label>
            </li>
        </ul>
     </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'task-list',
        props: ['taskList'],
        data() {
            return {
                checkedTasks: [],
            };
        },
        methods: {
            ...mapActions(['markDone']),
            doCheck(e) {
                this.$log.log('Checkedd tasks ', e.target.value);
                this.markDone({
                    projectId: this.$route.params.id,
                    id: parseInt(e.target.value, 10),
                });
            },
        },
    };
</script>

<style>       
    .taskslist{
        padding: 10px;
        justify-content: center;
    }

    #new-task {
        text-align: center;
    }
</style>
