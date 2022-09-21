<template>
  <div>
    <input v-model="name" v-on:keydown.enter="alertName()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    alertName() {
      alert(`Name : ${this.name}`);
    },
  },
};
</script>

<style>
</style>