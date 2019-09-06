<template>
  <div class="container">
    <span v-once class="title">{{ title }}</span>
    <ul id="todolist">
      <li v-for="todo in todos" class="todo">{{ todo.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "TODOS",
      todos: [{ message: "test1" }, { message: "test2" }, { message: "test3" }]
    };
  }
};
</script>

<style lang="scss" scoped>
#todolist {
  margin-top: 20px;
}

.todo {
  margin-top: 10px;
}
</style>