<template>
    <div class="mb-4">
      <div class="todo-item active">
        <div class="todo-header d-f-row">
            <div class="todo-icon">
                <i class="fas fa-tasks"></i><label class="ml-2 mt-4" for="">任務</label>
            </div>
            <div class="todo-title">
                <input type="text" placeholder="任務標題" class="form-control" v-model="taskContent.message">
            </div>
        </div>
        <div class="todo-body">
            <div class="todo-content">
              <div class="todo-row">
                <div class="todo-icon">
                  <i class="far fa-calendar-alt"></i><label class="ml-2 mt-4" for="">截止日</label>
                </div>
                <div>
                  <div class="form-inline">
                    <input type="date" class="form-control border-0" placeholder="2018-06-01" v-model="taskContent.startDate">
                    <input type="date" class="form-control border-0 ml-2" placeholder="2018-06-01" v-model="taskContent.endDate">
                  </div>
                </div>
              </div>
              <div class="todo-row">
                <div class="todo-icon">
                  <i class="far fa-comment-dots"></i><label class="ml-2 mt-4" for="">留言</label>
                </div>
                <div><textarea name="" class="form-control border-0" id="" rows="10"></textarea></div>
              </div>
            </div>
            <div class="todo-btn-wrapper d-flex">
                <button class="btn text-danger btn-lg w-50" @click="cancelOperation"><i class="fas fa-times"></i>取消</button>
                <button class="btn btn-primary btn-lg w-50" @click="updateTask"><i class="fas fa-plus"></i>更新</button>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['todo'],
  name: 'EditTodoItem',
  data () {
    return {
      taskContent: {},
      isCreate: false
    }
  },
  created () {
    console.log(this.todo)
    if (!this.todo) {
      this.isCreate = true
    } else {
      this.taskContent = { ...this.todo }
    }
  },
  methods: {
    cancelOperation () {
      this.$emit('closeEditTodo')
    },
    updateTask () {
      const vm = this
      const task = {...vm.taskContent}

      if (!vm.taskContent.message) {
        alert('任務名稱不得為空值')
        return
      }

      if (this.isCreate) {
        const api = 'https://f2ejsonserver.herokuapp.com/todos'
        task.stared = false
        task.completed = 'progress'
        task.timestamp = Math.floor(Date.now() / 1000)
        task.comments = []
        vm.$http.post(api, task).then((response) => {
          console.log('create', response)
          vm.closeTodo()
        })
      } else {
        const api = `https://f2ejsonserver.herokuapp.com/todos/${task.id}`
        vm.$http.put(api, task).then((response) => {
          console.log('update', response)
          vm.closeTodo()
        })
      }
    },
    closeTodo () {
      this.$emit('closeEditTodo')
      this.$emit('updateData')
    }
  },
  watch: {
    task () {
      this.taskContent = { ...this.todo }
    }
  }
}
</script>
