<template>
    <div class="carddetails columns">
            <card class="title column is-quarter" :data="projectDetail"> </card>
            <div class="column is-three-quarter">
                <div>
                    <task-list :taskList="currentTasks"> </task-list>
                </div>
                <div class="inputform">
                    <input type="text" name="taskdescription"
                        v-model="taskName"
                        @keyup.enter="doneAddTask"
                        placeholder="Your To-Do"/>
                </div>
            </div>
        </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    import card from './Card';
    import TaskList from './TaskList';

    export default {
        name: 'card-detail',
        data() {
            return {
                taskName: '',
            };
        },
        computed: {
            ...mapGetters({
                getAllTasks: 'getTasks',
                getProjects: 'getProjects',
            }),
            currentTasks() {
                this.$log.log('Id ', this.$route.params.id);
                return this.getAllTasks[this.$route.params.id];
            },
            projectDetail() {
                return this.getProjects[this.$route.params.id];
            },
        },
        methods: {
            ...mapActions(['addTask']),
            doneAddTask() {
                this.addTask({
                    projectId: this.$route.params.id,
                    name: this.taskName.trim(),
                    id: this.currentTasks === undefined ? 0 :
                        this.currentTasks.length,
                });

                this.taskName = '';
            },
        },
        components: { card, TaskList },
    };
</script>

<style>
    div.title{
        padding-bottom: 20px; 
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
    }
    div.taskslist{
        font-size: 25px;
    }

    input[type=text]{
        padding: 12px 20px;
        margin-right: 5px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    .carddetails {
        margin-top: 50px;
    }
</style>
