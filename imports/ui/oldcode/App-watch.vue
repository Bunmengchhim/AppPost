<template>
  <div>
    <label for="">First Name</label>
    <input type="text" v-model="firstName" />
    <label for="">Last Name</label>
    <input type="text" v-model="lastName" />
    <label for="">FullName: {{ fullName }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },
  watch: {
    firstName(val) {
      this.fullName = `${val} ${this.lastName}`;
    },
    lastName(val) {
      this.fullName = `${this.firstName} ${val}`;
    },
  },
};
</script>

<style>
</style>