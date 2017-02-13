import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        projects: [],
        tasks: {},
    },
    getters: {
        getCount: state => state.count,
        getProjects: state => state.projects,
        getTasks: state => state.tasks,
    },
    mutations: {

        /* eslint no-param-reassign: ["error", { "props": false }]*/

        increment(state) {
            state.count += 1;
        },
        addProject(state, projectName) {
            state.projects.push({
                name: projectName,
                completed: 0,
                total: 0,
                id: state.projects.length,
            });
        },
        addTask(state, task) {
            if (state.tasks[task.projectId] === undefined) {
                state.tasks = { ...state.tasks, [task.projectId]: [] };
            }

            state.tasks[task.projectId].push({
                name: task.name,
                completed: false,
                id: task.id,
            });
        },
        markDone(state, task) {
            const projTasks = state.tasks[task.projectId];
            const doneTaskId = projTasks
                .filter(pTask => pTask.id === task.id)
                .map(doneTask => doneTask.id);

            if (doneTaskId.length > 0) {
                state.tasks[task.projectId][doneTaskId[0]].completed = true;
            }
        },
    },
    actions: {
        addTask: ({ commit }, task) => commit('addTask', task),
        markDone: ({ commit }, task) => commit('markDone', task),
    },
    plugins: [createPersistedState()],
});

export default store;
