<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container d-flex justify-content-between head-nav">
        <a href="#" :class="{active: currentPage === 'all'}" @click="changePage('all')">任務欄</a>
        <a href="#" :class="{active: currentPage === 'progress'}" @click="changePage('progress')">進行中</a>
        <a href="#" :class="{active: currentPage === 'completed'}" @click="changePage('completed')">已完成</a>
      </div>
    </div>
    <div class="container my-4">
      <div class="position-relative">
        <i class="fas fa-plus fa-lg text-black-50 position-absolute" style="left: 1rem; top: 1.15rem"></i>
        <input type="text" class="form-control form-control-lg pl-5" placeholder="加任務">
      </div>
      <div class="mt-4">
        <edit-todo-item></edit-todo-item>
        <todo-item></todo-item>
      </div>
    </div>
  </div>
</template>
<script>
import TodoItem from './components/TodoItem'
import EditTodoItem from './components/EditTodoItem'
export default {
  name: 'App',
  data() {
    return {
      currentPage: 'all',
      todos: [
        {
          message: 'data',
          startDate: '2018-06-10',
          endDate: '2018-06-11',
          timeStamp: 1528295550,
          stared: false,
          comments: [],
          id: 1,
          compeleted: 'progress'
        }
      ]
    }
  },
  methods:{
    changePage(page){
      this.currentPage = page;
    }
  },
  components: {
    TodoItem,
    EditTodoItem
  }
}
</script>
