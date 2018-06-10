<template>
    <div class="mb-4">
        <div class="todo-header">
            <div class="todo-title">
                <input type="text" placeholder="任務標題" class="form-control">
            </div>
        </div>
        <div class="todo-body">
            <div class="todo-content">
              <div class="todo-row">
                <div class="todo-icon">
                  <i class="far fa-calendar-alt"></i><label for="">截止日</label>
                </div>
                <div>
                  <div class="form-inline">
                    <input type="date" class="form-control" placeholder="DK Harry">
                    <input type="date" class="form-control" placeholder="DK Harry">
                  </div>
                </div>
              </div>
              <div class="todo-row">
                <div class="todo-icon">
                  <i class="far fa-comment-dots"></i><label for="">留言</label>
                </div>
                <div><textarea name="" class="form-control" id="" rows="10"></textarea></div>
              </div>
            </div>
            <div class="todo-btn-wrapper d-flex">
                <button class="btn text-danger btn-lg w-50"><i class="fas fa-times"></i>取消</button>
                <button class="btn btn-primary btn-lg w-50"><i class="fas fa-plus"></i>更新</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['todo'],
    name: 'EditTodoItem',
    data() {
        return {
        }
    }
}
</script>