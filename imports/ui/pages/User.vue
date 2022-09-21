<template>
  <div class="q-pa-md">
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
          <user-form @close="close" :updateDoc="updateDoc" />
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
    <user-table :users="users" @delete="handleDelete" @edit="handleEdit" />
  </div>
</template>
<script>
import UserForm from "../components/UserForm.vue";
import UserTable from "../components/UserTable.vue";
export default {
  components: {
    UserTable,

    UserForm,
  },
  data() {
    return {
      users: [],
      dialog: false,
      updateDoc: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    close(doc) {
      if (doc._id) {
        let index = this.users.findIndex((obj) => {
          return obj._id == doc._id;
        });
        this.users[index].username = doc.username;
        this.users[index].email = doc.email;
        this.users[index].phone = doc.phone;
        this.users[index].role = doc.role;
        this.dialog = false;
        this.updateDoc = null;
      } else {
        this.users.push(Object.assign({}, doc));
        this.dialog = false;
      }
    },
    handleAdd() {
      this.dialog = true;
    },
    handleDelete(id) {
      let index = this.users.findIndex((doc) => {
        return doc._id == id;
      });
      this.users.splice(index, 1);
    },
    handleEdit(user) {
      console.log("Edit Page", user);
      this.updateDoc = Object.assign({}, user);
      this.dialog = true;
    },
    getData() {
      this.users = [
        {
          _id: "01",
          username: "Meng",
          email: "meng@.mcim",
          phone: "010000",
          role: "admin",
        },
      ];
    },
  },
};
</script>
