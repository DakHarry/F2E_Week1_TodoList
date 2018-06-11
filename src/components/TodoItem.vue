<template>
          <div class="mb-4">
        <div class="todo-item" :class="{stared: todo.stared}">
          <div class="handle text-muted"><i class="fas fa-ellipsis-v"></i></div>
          <div class="todo-header">
            <div class="todo-check">
            <input type="checkbox" :id="`task-${todo.id}`"
                v-model="todo.completed"
                @change="updateStatus('completed', todo.completed)"
                :true-value="'completed'"
                :false-value="'progress'">
            <label :for="'task-'+todo.id"></label>
            </div>
            <div class="todo-title" :for="'task-'+todo.id">
              <span :class="{completed: todo.completed === 'completed'}">{{ todo.message }}</span>
            </div>
            <div class="todo-control">
            <a href="#" class="text-muted" @click.prevent="updateStarState">
              <i class="far fa-star mr-3" v-if="!todo.stared"></i>
              <i class="fas fa-star mr-3" v-else></i>
            </a>
            <a href="#" class="text-muted" @click.prevent="editTask"><i class="fas fa-pencil-alt"></i></a>
            </div>
          </div>
          <div class="todo-footer mt-2 text-secondary">
            <i class="far fa-calendar-alt"></i> {{ todo.startDate }} to {{ todo.endDate }}
            <i class="far fa-file ml-3"></i>
            <i class="fas fa-comment-dots ml-3"></i>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  props: ['todo'],
  name: 'todo',
  methods: {
    updateStarState () {
      const vm = this
      const api = `https://f2ejsonserver.herokuapp.com/todos/${vm.todo.id}`
      const todo = {
        ...vm.todo
      }
      todo.stared = !vm.todo.stared
      vm.$http.put(api, todo).then((response) => {
        console.log(response)
        vm.updateData()
      })
    },
    updateData () {
      this.$emit('updateData')
    },
    updateStatus (field, state) {
      const vm = this
      const api = `https://f2ejsonserver.herokuapp.com/todos/${vm.todo.id}`
      const todo = {
        ...vm.todo
      }
      todo[field] = state
      vm.$http.put(api, todo).then(() => {
        vm.$emit('updateData')
      })
    },
    editTask () {
      this.$emit('editTask', this.todo.id)
    }
  }
}
</script>
