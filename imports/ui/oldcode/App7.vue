
<template>
  <div>
    <label>Username :</label>
    <input v-model="username" /><br />
    <label>Price :</label>
    <input v-model="price" /><br />
    <label>Quanlity :</label>
    <input v-model="quanlity" /><br />
    <button @click="submit()">Sumite</button>
    <p>Amount : {{ calculate }} $</p>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quanlity</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.username }}</td>
          <td>{{ user.price }}</td>
          <td>{{ user.quanlity }}</td>
          <td>{{ user.price * user.quanlity }} $</td>
          <td>
            <button @click="btnDelete(index)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      price: "",
      quanlity: "",
      users: [
        {
          username: "Jennie",
          price: "10$",
          quanlity: "5",
        },
      ],
    };
  },
  methods: {
    submit() {
      this.users.push({
        username: this.username,
        price: this.price,
        quanlity: this.quanlity,
      });
    },
    btnDelete(index) {
      this.users.splice(index, 1);
    },
  },
  computed: {
    calculate() {
      return this.price * this.quanlity;
    },
  },
};
</script>
<style>
</style>