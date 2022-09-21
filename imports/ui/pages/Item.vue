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
          <item-form @close="close" :updateDoc="updateDoc" />
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
    <item-table :items="items" @delete="handleDelete" @edit="handleEdit" />
  </div>
</template>

<script>
import ItemForm from "../components/ItemForm.vue";
import ItemTable from "../components/ItemTable.vue";
import moment from "moment";
export default {
  components: { ItemForm, ItemTable },
  data() {
    return {
      dialog: false,
      items: [
        {
          _id: "01",
          username: "Drink",
          date: new Date(),
          categoryId: "01",
          categoryName: "Soft-Drink",
          description: "Caca 250ml",
          status: "active",
        },
      ],
      updateDoc: null,
    };
  },
  methods: {
    close(doc) {
      if (doc._id) {
        let index = this.items.findIndex((obj) => {
          return obj._id == doc._id;
        });
        this.items[index].username = doc.username;
        this.items[index].date = doc.date;
        this.items[index].categoryId = doc.categoryId;
        this.items[index].categoryName = doc.categoryName;
        this.items[index].description = doc.description;
        this.items[index].status = doc.status;

        this.dialog = false;
        this.updateDoc = null;
      } else {
        this.items.push(doc);
        this.dialog = false;
      }
    },
    handleAdd() {
      this.dialog = true;
    },
    handleDelete(id) {
      console.log("id", id);
      let index = this.items.findIndex((doc) => {
        return doc._id == id;
      });
      this.items.splice(index, 1);
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