<template>
  <div>
    <h1>Add User</h1>
    <div v-for="(user, index) in users" :key="index">
      Name <input v-model="user.name" /> telephone
      <input v-model="user.telephone" /> email
      <input v-model="user.email" />
      <button @click="deleteUser(index)">Delete</button>
    </div>
    <button @click="addUser">Add</button>

    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  data: {
    users: [
      {
        name: null,
        telephone: null,
        email: null,
      },
    ],
  },
  methods: {
    addUser: function () {
      this.users.push({ name: "", telephone: "", email: "" });
    },
  },
};
</script>

<style>
</style>