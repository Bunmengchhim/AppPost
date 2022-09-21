<template>
  <div>
    <h1 class="static-class">This is static class</h1>
    <h1 :style="objectStyle">This is binding class</h1>
    <button @click="changeActive()">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectStyle: {
        fontSize: "2rem",
        "text-align": "center",
      },
    };
  },
  methods: {
    changeActive() {
      this.objectStyle["text-align"] =
        this.objectStyle["text-align"] == "center" ? "left" : "center";
    },
  },
};
</script>


<style>
