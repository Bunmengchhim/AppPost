<template>
  <div class="q-ma-md">
    <q-card>
      <q-card-section class="text-center text-h5">
        Customer Form
      </q-card-section>

      <q-card-section>
        <div class="fit row justify-evenly">
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.username" label="Name" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input type="date" outlined v-model="form.date" label="Date" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.description" label="Description" />
          </div>

          <div class="col-xs-12 col-sm-4 q-ma-sm text-center">
            <q-btn
              color="primary"
              :label="updateDoc ? `Update` : `Submit`"
              @click="handleSubmit"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    updateDoc: {
      default: null,
      type: Object,
    },
  },
  mounted() {
    if (this.updateDoc) {
      this.form = this.updateDoc;
    }
  },
  data() {
    return {
      form: {
        username: null,
        date: null,
        description: null,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.form.date = moment(this.form.date, "YYYY-MM-DD").toDate();
      this.$emit("close", this.form);
    },
  },
};
</script>

<style>
</style>