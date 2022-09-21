
<template>
  <div>
    <label>Username :</label>
    <input v-model="username" /><br />
    <label>Telaphone :</label>
    <input v-model="telephone" /><br />
    <label>Email :</label>
    <input v-model="email" />
    <button @click="submit()">Sumite</button>

    <table>
      <tr>
        <th>Name</th>
        <th>telephone</th>
        <th>email</th>
        <th>Action</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.username }}</td>
        <td>{{ user.telephone }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="btnDelete(index)">X</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      telephone: "",
      email: "",
      users: [
        {
          username: "Jennie",
          telephone: "010398443",
          email: "bunmengchhim@gmail.com",
        },
      ],
    };
  },
  methods: {
    submit() {
      this.users.push({
        username: this.username,
        telephone: this.telephone,
        email: this.email,
      });
    },
    btnDelete(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<style>
.input {
  padding: 10px;
}
</style>