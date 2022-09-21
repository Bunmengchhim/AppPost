<template>
  <div>
    <input type="radio" v-model="gender" value="Male" /> ប្រុស
    <input type="radio" v-model="gender" value="Female" /> ស្រី
    <h1 v-for="(user, index) in users" v-bind:key="index">
      <div v-if="user.gender === gender">
        {{ index + 1 }}: {{ user.name }} | {{ user.gender }} | {{ user.age }}
      </div>
      <div v-else-if="!gender">
        {{ index + 1 }}: {{ user.name }} | {{ user.gender }} | {{ user.age }}
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: null,
      users: [
        {
          name: "Jonh Wick",
          gender: "Male",
          age: 36,
        },
        {
          name: "Steven Strange",
          gender: "Male",
          age: 34,
        },
        {
          name: "Iron Man",
          gender: "Male",
          age: 40,
        },
        {
          name: "Jennie",
          gender: "Female",
          age: 26,
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  font-size: 2rem;
}
</style>