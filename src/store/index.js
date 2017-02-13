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
        toggleDone(state, task) {
            const projTasks = state.tasks[task.projectId];
            projTasks
                .filter(pTask => pTask.id === task.id)
                .map(doneTask => doneTask.id);
        },
    },
    actions: {
        addTask: ({ commit }, task) => commit('addTask', task),
        toggleDone: ({ commit }, task) => commit('toggleDone', task),
    },
    plugins: [createPersistedState()],
});

export default store;
