<template>
  <div class="q-ma-md">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-bar>
          <q-space />
          <q-btn dense icon="close" color="red" round v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <customer-form @close="close" :updateDoc="updateDoc" />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-btn
      icon="add"
      dense
      color="primary"
      class="q-mb-md"
      @click="handleAdd"
    />
    <customer-table
      :items="customers"
      @delete="handleDelete"
      @edit="handleEdit"
    />
  </div>
</template>

<script>
import CustomerForm from "../components/CustomerForm.vue";
import CustomerTable from "../components/CustomerTable.vue";
import moment from "moment";
export default {
  components: { CustomerForm, CustomerTable },
  data() {
    return {
      dialog: false,
      customers: [
        {
          _id: "01",
          username: "Steven",
          gender: "male",
          dob: new Date(),
          phone: "0103999443",
          address: "battambang",
          status: "active",
        },
      ],
      updateDoc: null,
    };
  },
  methods: {
    close(doc) {
      if (doc._id) {
        let index = this.customers.findIndex((obj) => {
          return obj._id == doc._id;
        });
        this.customers[index].username = doc.username;
        this.customers[index].gender = doc.gender;
        this.customers[index].dob = doc.dob;
        this.customers[index].address = doc.address;
        this.customers[index].status = doc.status;
        this.dialog = false;
        this.updateDoc = null;
      } else {
        this.customers.push(doc);
        this.dialog = false;
      }
    },
    handleAdd() {
      this.dialog = true;
    },
    handleDelete(id) {
      console.log("id", id);
      let index = this.customers.findIndex((doc) => {
        return doc._id == id;
      });
      this.customers.splice(index, 1);
    },
    handleEdit(doc) {
      this.dialog = true;
      this.updateDoc = Object.assign({}, doc);
      this.updateDoc.dob = moment(doc.dob).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
</style>