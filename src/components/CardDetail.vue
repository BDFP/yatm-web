<template>
    <div class="carddetails columns">
            <card class="title column is-quarter" :data="cardDetail"> </card>
            <div class="column is-three-quarter">
                <div>
                    <task-list :taskList="tasks"" > </task-list>
                </div>
                <div class="inputform">
                <form>
                    <input type="text" name="taskdescription" 
                        placeholder="Your To-Do"/>
                    <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
    import card from './Card';
    import TaskList from './TaskList';

    export default {
        name: 'card-detail',
        data: function getCardDetailData() {
            return {
                cardDetail: {
                    id: 9,
                    name: 'My Project',
                    completed: 80,
                    total: 100,
                },
                tasks: [
                    {
                        name: 'task1',
                    },
                    {
                        name: 'task2',
                    },
                    {
                        name: 'task3',
                    },
                    {
                        name: 'task4',
                    },
                ],
            };
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
