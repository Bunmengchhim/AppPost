<template>
  <div>
    <login-form @Submit="handleSubmit" />
    <table-form :users="users" />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import TableForm from "./components/TableForm.vue";
export default {
  components: {
    LoginForm,
    TableForm,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    handleSubmit(doc) {
      this.users.push(doc);
      console.log("user", this.users);
    },
  },
};
</script>

<style>
</style>