<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container d-flex justify-content-between head-nav">
        <a href="#" :class="{active: currentPage === 'all'}" @click="currentPage = 'all'">任務欄</a>
        <a href="#" :class="{active: currentPage === 'progress'}" @click="currentPage = 'progress'">進行中</a>
        <a href="#" :class="{active: currentPage === 'completed'}" @click="currentPage = 'completed'">已完成</a>
      </div>
    </div>
    <div class="container my-4">
      <div class="position-relative" v-if="isNewTask === false">
        <i class="fas fa-plus fa-lg text-black-50 position-absolute" style="left: 1rem; top: 1.15rem"></i>
        <input type="text" class="form-control form-control-lg pl-5" placeholder="加任務" @click="isNewTask = true" v-if="!isNewTask" @focus="addTask">
      </div>
      <div class="mt-4">
        <edit-todo-item @closeEditTodo="closeEdit"
              @updateData="getAllTasks"
              v-if="isNewTask && !currentEditTask.id"></edit-todo-item>
        <draggable @end="dragTask" v-model="todos" :options="{handle: '.handle'}">
          <div v-for="task in todos" :key="task.id" v-if="currentPage === 'all' || currentPage == task.completed">
            <todo-item @updateData="getAllTasks" @editTask="editTaskCard"
              :todo="task"
              v-if="currentEditTask.id !== task.id"></todo-item>
            <edit-todo-item @closeEditTodo="closeEdit"
              @updateData="getAllTasks"
              :todo="currentEditTask"
              v-if="currentEditTask.id === task.id"></edit-todo-item>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import TodoItem from './components/TodoItem'
import EditTodoItem from './components/EditTodoItem'
import draggable from 'vuedraggable'

export default {
  name: 'App',
  data () {
    return {
      currentPage: 'all',
      isNewTask: false,
      currentEditTask: {},
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
  created () {
    this.getAllTasks()
  },
  methods: {
    changePage (page) {
      this.currentPage = page
      console.log(this.currentPage)
    },
    closeEdit () {
      this.isNewTask = false
      this.clearEditTaskInput()
      // this.getAllTasks()
    },
    getAllTasks () {
      const api = 'https://f2ejsonserver.herokuapp.com/todos'
      let tasks = []
      this.todos = []
      this.$http.get(api).then((response) => {
        tasks = response.data
        return this.$http.get('https://f2ejsonserver.herokuapp.com/sort')
      }).then((response) => {
        const taskSort = response.data.sort
        if (taskSort) {
          taskSort.forEach((sortId, sortIndex) => {
            const task = tasks.find((task) => task.id === sortId)
            this.todos.push(task)
          })
          tasks.forEach((task) => {
            const hasSort = taskSort.some((sortId) => task.id === sortId)
            if (!hasSort) {
              this.todos.push(task)
            }
          })
        } else {
          this.todos = tasks
        }
      })
    },
    dragTask () {
      console.log(this.todos)
      const vm = this
      const sort = vm.todos.map((item) => {
        return item.id
      })
      console.log(sort)
      vm.uploadSortData(sort)
    },
    uploadSortData (sort) {
      const vm = this
      const api = 'https://f2ejsonserver.herokuapp.com/sort'
      vm.$http.post(api, {sort: sort}).then((response) => {

      })
    },
    editTaskCard (taskId) {
      const vm = this
      this.isNewTask = false
      vm.currentEditTask = vm.todos.find((task) => task.id === taskId)
    },
    addTask () {
      this.isNewTask = true
      this.clearEditTaskInput()
    },
    clearEditTaskInput () {
      this.currentEditTask = {}
    }
  },
  components: {
    TodoItem,
    EditTodoItem,
    draggable
  }
}
</script>
