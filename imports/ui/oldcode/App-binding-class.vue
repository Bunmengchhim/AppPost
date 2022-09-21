<template>
  <div>
    <h1 class="static-class">This is static class</h1>
    <h1 :class="{ 'binding-class': active }">This is binding class</h1>
    <button @click="changeActive()">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    changeActive() {
      this.active = !this.active;
    },
  },
};
</script>


<style>
