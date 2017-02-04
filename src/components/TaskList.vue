<template>
    <div class="taskslist">
        <ul>
            <li v-for="task in taskList">
                <label>
                    <input id="new-task" class="checkbox" type="checkbox" name="status"/>
                    {{task.name}}
                </label>
            </li>
        </ul>
     </div>
</template>

<script>
    export default {
        name: 'task-list',
        props: ['taskList'],
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
