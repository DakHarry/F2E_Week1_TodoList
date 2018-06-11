webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("mtWM"),n=s.n(o),i=s("Rf8U"),r=s.n(i),d=(s("pc4J"),s("Dd8w")),c=s.n(d),l={props:["todo"],name:"todo",methods:{updateStarState:function(){var t=this,e="https://f2ejsonserver.herokuapp.com/todos/"+t.todo.id,s=c()({},t.todo);s.stared=!t.todo.stared,t.$http.put(e,s).then(function(e){console.log(e),t.updateData()})},updateData:function(){this.$emit("updateData")},updateStatus:function(t,e){var s=this,a="https://f2ejsonserver.herokuapp.com/todos/"+s.todo.id,o=c()({},s.todo);o[t]=e,s.$http.put(a,o).then(function(){s.$emit("updateData")})},editTask:function(){this.$emit("editTask",this.todo.id)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-4"},[s("div",{staticClass:"todo-item",class:{stared:t.todo.stared}},[t._m(0),t._v(" "),s("div",{staticClass:"todo-header"},[s("div",{staticClass:"todo-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],attrs:{type:"checkbox",id:"task-"+t.todo.id,"true-value":"completed","false-value":"progress"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t._q(t.todo.completed,"completed")},on:{change:[function(e){var s=t.todo.completed,a=e.target,o=a.checked?"completed":"progress";if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&t.$set(t.todo,"completed",s.concat([null])):n>-1&&t.$set(t.todo,"completed",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.todo,"completed",o)},function(e){t.updateStatus("completed",t.todo.completed)}]}}),t._v(" "),s("label",{attrs:{for:"task-"+t.todo.id}})]),t._v(" "),s("div",{staticClass:"todo-title",attrs:{for:"task-"+t.todo.id}},[s("span",{class:{completed:"completed"===t.todo.completed}},[t._v(t._s(t.todo.message))])]),t._v(" "),s("div",{staticClass:"todo-control"},[s("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateStarState(e)}}},[t.todo.stared?s("i",{staticClass:"fas fa-star mr-3"}):s("i",{staticClass:"far fa-star mr-3"})]),t._v(" "),s("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.editTask(e)}}},[s("i",{staticClass:"fas fa-pencil-alt"})])])]),t._v(" "),s("div",{staticClass:"todo-footer mt-2 text-secondary"},[s("i",{staticClass:"far fa-calendar-alt"}),t._v(" "+t._s(t.todo.startDate)+" to "+t._s(t.todo.endDate)+"\n      "),s("i",{staticClass:"far fa-file ml-3"}),t._v(" "),s("i",{staticClass:"fas fa-comment-dots ml-3"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"handle text-muted"},[e("i",{staticClass:"fas fa-ellipsis-v"})])}]},p=s("VU/8")(l,u,!1,null,null,null).exports,m={props:["todo"],name:"EditTodoItem",data:function(){return{taskContent:{},isCreate:!1}},created:function(){console.log(this.todo),this.todo?this.taskContent=c()({},this.todo):this.isCreate=!0},methods:{cancelOperation:function(){this.$emit("closeEditTodo")},updateTask:function(){var t=this,e=c()({},t.taskContent);if(t.taskContent.message)if(this.isCreate){e.stared=!1,e.completed="progress",e.timestamp=Math.floor(Date.now()/1e3),e.comments=[],t.$http.post("https://f2ejsonserver.herokuapp.com/todos",e).then(function(e){console.log("create",e),t.closeTodo()})}else{var s="https://f2ejsonserver.herokuapp.com/todos/"+e.id;t.$http.put(s,e).then(function(e){console.log("update",e),t.closeTodo()})}else alert("任務名稱不得為空值")},closeTodo:function(){this.$emit("closeEditTodo"),this.$emit("updateData")}},watch:{task:function(){this.taskContent=c()({},this.todo)}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-4"},[s("div",{staticClass:"todo-item active"},[s("div",{staticClass:"todo-header d-f-row"},[t._m(0),t._v(" "),s("div",{staticClass:"todo-title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskContent.message,expression:"taskContent.message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"任務標題"},domProps:{value:t.taskContent.message},on:{input:function(e){e.target.composing||t.$set(t.taskContent,"message",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"todo-body"},[s("div",{staticClass:"todo-content"},[s("div",{staticClass:"todo-row"},[t._m(1),t._v(" "),s("div",[s("div",{staticClass:"form-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskContent.startDate,expression:"taskContent.startDate"}],staticClass:"form-control border-0",attrs:{type:"date",placeholder:"2018-06-01"},domProps:{value:t.taskContent.startDate},on:{input:function(e){e.target.composing||t.$set(t.taskContent,"startDate",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskContent.endDate,expression:"taskContent.endDate"}],staticClass:"form-control border-0 ml-2",attrs:{type:"date",placeholder:"2018-06-01"},domProps:{value:t.taskContent.endDate},on:{input:function(e){e.target.composing||t.$set(t.taskContent,"endDate",e.target.value)}}})])])]),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"todo-btn-wrapper d-flex"},[s("button",{staticClass:"btn text-danger btn-lg w-50",on:{click:t.cancelOperation}},[s("i",{staticClass:"fas fa-times"}),t._v("取消")]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-lg w-50",on:{click:t.updateTask}},[s("i",{staticClass:"fas fa-plus"}),t._v("更新")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todo-icon"},[e("i",{staticClass:"fas fa-tasks"}),e("label",{staticClass:"ml-2 mt-4",attrs:{for:""}},[this._v("任務")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todo-icon"},[e("i",{staticClass:"far fa-calendar-alt"}),e("label",{staticClass:"ml-2 mt-4",attrs:{for:""}},[this._v("截止日")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todo-row"},[e("div",{staticClass:"todo-icon"},[e("i",{staticClass:"far fa-comment-dots"}),e("label",{staticClass:"ml-2 mt-4",attrs:{for:""}},[this._v("留言")])]),this._v(" "),e("div",[e("textarea",{staticClass:"form-control border-0",attrs:{name:"",id:"",rows:"10"}})])])}]},v=s("VU/8")(m,f,!1,null,null,null).exports,h=s("DAYN"),k={name:"App",data:function(){return{currentPage:"all",isNewTask:!1,currentEditTask:{},todos:[{message:"data",startDate:"2018-06-10",endDate:"2018-06-11",timeStamp:1528295550,stared:!1,comments:[],id:1,compeleted:"progress"}]}},created:function(){this.getAllTasks()},methods:{changePage:function(t){this.currentPage=t,console.log(this.currentPage)},closeEdit:function(){this.isNewTask=!1,this.clearEditTaskInput()},getAllTasks:function(){var t=this,e=[];this.todos=[],this.$http.get("https://f2ejsonserver.herokuapp.com/todos").then(function(s){return e=s.data,t.$http.get("https://f2ejsonserver.herokuapp.com/sort")}).then(function(s){var a=s.data.sort;a?(a.forEach(function(s,a){var o=e.find(function(t){return t.id===s});t.todos.push(o)}),e.forEach(function(e){a.some(function(t){return e.id===t})||t.todos.push(e)})):t.todos=e})},dragTask:function(){console.log(this.todos);var t=this.todos.map(function(t){return t.id});console.log(t),this.uploadSortData(t)},uploadSortData:function(t){this.$http.post("https://f2ejsonserver.herokuapp.com/sort",{sort:t}).then(function(t){})},editTaskCard:function(t){this.isNewTask=!1,this.currentEditTask=this.todos.find(function(e){return e.id===t})},addTask:function(){this.isNewTask=!0,this.clearEditTaskInput()},clearEditTaskInput:function(){this.currentEditTask={}}},components:{TodoItem:p,EditTodoItem:v,draggable:s.n(h).a}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"bg-primary"},[s("div",{staticClass:"container d-flex justify-content-between head-nav"},[s("a",{class:{active:"all"===t.currentPage},attrs:{href:"#"},on:{click:function(e){t.currentPage="all"}}},[t._v("任務欄")]),t._v(" "),s("a",{class:{active:"progress"===t.currentPage},attrs:{href:"#"},on:{click:function(e){t.currentPage="progress"}}},[t._v("進行中")]),t._v(" "),s("a",{class:{active:"completed"===t.currentPage},attrs:{href:"#"},on:{click:function(e){t.currentPage="completed"}}},[t._v("已完成")])])]),t._v(" "),s("div",{staticClass:"container my-4"},[!1===t.isNewTask?s("div",{staticClass:"position-relative"},[s("i",{staticClass:"fas fa-plus fa-lg text-black-50 position-absolute",staticStyle:{left:"1rem",top:"1.15rem"}}),t._v(" "),t.isNewTask?t._e():s("input",{staticClass:"form-control form-control-lg pl-5",attrs:{type:"text",placeholder:"加任務"},on:{click:function(e){t.isNewTask=!0},focus:t.addTask}})]):t._e(),t._v(" "),s("div",{staticClass:"mt-4"},[t.isNewTask&&!t.currentEditTask.id?s("edit-todo-item",{on:{closeEditTodo:t.closeEdit,updateData:t.getAllTasks}}):t._e(),t._v(" "),s("draggable",{attrs:{options:{handle:".handle"}},on:{end:t.dragTask},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},t._l(t.todos,function(e){return"all"===t.currentPage||t.currentPage==e.completed?s("div",{key:e.id},[t.currentEditTask.id!==e.id?s("todo-item",{attrs:{todo:e},on:{updateData:t.getAllTasks,editTask:t.editTaskCard}}):t._e(),t._v(" "),t.currentEditTask.id===e.id?s("edit-todo-item",{attrs:{todo:t.currentEditTask},on:{closeEditTodo:t.closeEdit,updateData:t.getAllTasks}}):t._e()],1):t._e()}))],1)])])},staticRenderFns:[]},_=s("VU/8")(k,C,!1,null,null,null).exports;a.a.use(r.a,n.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:_},template:"<App/>"})},pc4J:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e7b7d8e094b9706f99b8.js.map