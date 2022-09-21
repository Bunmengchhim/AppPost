<template>
  <div>
    <button v-on:click="handclick()">Click</button>
    <button v-on:click="handclick1()">Click1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Jennie Kim",
    };
  },
  methods: {
    handclick() {
      alert(`Hello My Name is :  ${this.name} `);
    },
    handclick1() {
      this.handclick();
    },
  },
};
</script>

<style>
</style>