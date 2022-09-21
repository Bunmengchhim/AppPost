
<template>
  <div>
    <label>Username :</label>
    <input v-model="username" /><br />
    <label>Telaphone :</label>
    <input v-model="telephone" /><br />
    <label>Email :</label>
    <input v-model="email" />
    <button @click="submit()">Sumite</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      telephone: "",
      email: "",
    };
  },
  methods: {
    submit() {
      alert(`
        Username : ${this.username}
        Telephone : ${this.telephone}
        Email: ${this.email}
        `);
    },
  },
};
</script>
<style>
</style>