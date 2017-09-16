<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div>
      <todo-list v-bind:todos="todos"></todo-list>
      <create-todo v-on:create-todo="createTodo" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import sweetalert from 'sweetalert';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

export default {
  name: 'main',
  data() {
    return {
      msg: 'TODO',
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  components: {
    TodoList,
    CreateTodo,
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>