<template>
  <div>
    <h1>TEST</h1>
    <q-btn label="Insert Customer" @click="handleInsert" />
  </div>
</template>

<script>
export default {
  methods: {
    handleInsert() {
      let doc = {
        name: "Meng",
        age: 20,
      };
      Meteor.call('customer.insert', doc, (err, result) => {
        if (result) {
          console.log("result", result);
        } else {
          console.log("Err", err);
        }
      });
    },
  },
};
</script>

<style>
</style>