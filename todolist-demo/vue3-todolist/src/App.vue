<script setup>
    import {reactive, computed} from 'vue'

    const state = reactive({
        newTodo: '',
        todos: [
            {id: '1', title: '吃饭', completed: true},
            {id: '2', title: '睡觉', completed: false}
        ]
    })

    const addTodo = () => {
        console.log(state.newTodo);

        //去空格
        let value = state.newTodo && state.newTodo.trim()

        if (!value) return;

        state.todos.push({
            id: state.todos.length + 1,
            title: value,
            completed: false
        })

        //清空
        state.newTodo = ''
    };

    const removeTodo = index => {
        console.log(index);
        state.todos.splice(index, 1)
    };

    // 是否全部完成
    const allCompleted = computed(() => state.todos.every(item => item.completed));

    // 完成的个数
    const completedCount = computed(() => state.todos.filter(item => item.completed).length)
</script>

<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus="" @keyup.enter="addTodo"
                   v-model="state.newTodo">
        </header>
        <section class="main" style="display: block;">
            <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCompleted">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li v-for="(item,index) in state.todos" :id="item.id"
                    :class="{completed: item.completed, editing:item.completed }">
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label>{{item.title}}</label>
                        <button class="destroy" @click="removeTodo(index)"></button>
                    </div>
                    <input class="edit" v-model="item.title">
                </li>
            </ul>
        </section>
        <footer class="footer" style="display: block;">
            <span class="todo-count"><strong>1</strong> item left</span>
            <ul class="filters">
                <li>
                    <a class="selected" href="#/all">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button class="clear-completed" v-if="completedCount">Clear completed</button>
        </footer>
    </section>
    <footer class="info">
        <p>Double-click to edit a todo</p>
    </footer>
</template>

<style scoped>
</style>
