<template>
  <div>
    <div class="row justify-center">
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-input outlined label="Usernname" v-model="form.username" />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-input outlined label="Email" v-model="form.email" />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-input outlined label="Phone" v-model="form.phone" />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-select
          v-model="form.role"
          :options="options"
          label="Role"
          option-value="value"
          option-label="label"
          map-options
          emit-value
        />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-input
          outlined
          label="Password"
          type="password"
          v-model="form.password"
        />
      </div>
      <div class="col-lg-3 col-md-5 col-sm-10 col-xs-11 q-ma-sm">
        <q-input
          outlined
          label="Confirm"
          type="password"
          v-model="confirmPassword"
        />
      </div>
      <div class="col-12 q-ma-sm text-center">
        <q-btn
          :label="updateDoc ? `Update` : `Submit`"
          color="primary"
          @click="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateDoc: {
      default: null,
      type: Object,
    },
  },
  mounted() {
    if (this.updateDoc) {
      this.form = Object.assign({}, this.updateDoc);
    }
  },
  data() {
    return {
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Sale",
          value: "sale",
        },
      ],
      form: {
        username: null,
        email: null,
        phone: null,
        password: null,
        confirmPassword: null,
        role: null,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("close", this.form);
    },
  },
};
</script>

<style></style>
