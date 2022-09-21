<template>
  <div class="q-ma-md">
    <q-card>
      <q-card-section class="text-center text-h5"> Items Form </q-card-section>

      <q-card-section>
        <div class="fit row justify-evenly">
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.username" label="Name" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-select
              outlined
              v-model="form.categoryId"
              label="Category"
              :options="categoryOpts"
              map-options
              emit-value
              option-value="_id"
              option-label="username"
            />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input type="date" outlined v-model="form.date" label="Date" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <q-input outlined v-model="form.description" label="Description" />
          </div>
          <div class="col-xs-12 col-sm-4 q-ma-sm">
            <fieldset>
              <label>Status</label>
              <q-radio v-model="form.status" val="active" label="Active" />
              <q-radio v-model="form.status" val="inactive" label="Inactive" />
            </fieldset>
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
    this.getCategory();
    if (this.updateDoc) {
      this.form = this.updateDoc;
    }
  },
  data() {
    return {
      form: {
        username: null,
        date: moment(new Date()).format("YYYY-MM-DD"),
        categoryId: null,
        description: null,
        status: "active",
      },
      categoryOpts: [],
    };
  },
  methods: {
    handleSubmit() {
      this.form.date = moment(this.form.date, "YYYY-MM-DD").toDate();
      let index = this.categoryOpts.findIndex((doc) => {
        return this.form.categoryId == doc._id;
      });
      this.form.categoryName = this.categoryOpts[index].username;
      this.$emit("close", this.form);
    },
    getCategory() {
      this.categoryOpts = [
        {
          _id: "01",
          username: "Soft-Drink",
          date: new Date(),
          description: "Caco 250ml",
        },
        {
          _id: "02",
          username: "Food",
          date: new Date(),
          description: "Caco 250ml",
        },
      ];
    },
  },
};
</script>

<style>
</style>