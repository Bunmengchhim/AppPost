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
          <category-form @close="close" :updateDoc="updateDoc" />
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
    <category-table
      :items="categories"
      @delete="handleDelete"
      @edit="handleEdit"
    />
  </div>
</template>

<script>
import CategoryForm from "../components/CategoryForm.vue";
import CategoryTable from "../components/CategoryTable.vue";
import moment from "moment";
export default {
  components: { CategoryForm, CategoryTable },
  data() {
    return {
      dialog: false,
      categories: [
        {
          _id: "01",
          username: "Drink",
          date: new Date(),
          description: "Soft-Drink",
        },
      ],
      updateDoc: null,
    };
  },
  methods: {
    close(doc) {
      if (doc._id) {
        let index = this.categories.findIndex((obj) => {
          return obj._id == doc._id;
        });
        this.categories[index].username = doc.username;
        this.categories[index].date = doc.date;
        this.categories[index].description = doc.description;

        this.dialog = false;
        this.updateDoc = null;
      } else {
        this.categories.push(doc);
        this.dialog = false;
      }
    },
    handleAdd() {
      this.dialog = true;
    },
    handleDelete(id) {
      console.log("id", id);
      let index = this.categories.findIndex((doc) => {
        return doc._id == id;
      });
      this.categories.splice(index, 1);
    },
    handleEdit(doc) {
      this.dialog = true;
      this.updateDoc = Object.assign({}, doc);
      this.updateDoc.date = moment(doc.date).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
</style>