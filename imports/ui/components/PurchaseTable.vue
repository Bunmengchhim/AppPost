<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-left">Cost</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Date</th>
          <th class="text-left">Status</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.cost }}</td>
          <td class="text-left">{{ item.price }}</td>
          <td class="text-left">{{ item.qty }}</td>
          <td class="text-left">{{ item.date | toDate }}</td>

          <td class="text-left">{{ item.status }}</td>

          <td class="text-left">
            <q-btn
              icon="delete"
              dense
              color="red"
              @click="handleDelete(item._id)"
            />
            <q-btn icon="edit" dense color="info" @click="handleEdit(item)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  filters: {
    toDate(date) {
      return moment(date).format("DD-MM--YYYY");
    },
  },
  methods: {
    handleDelete(id) {
      console.log("delete", id);
      this.$emit("delete", id);
    },
    handleEdit(doc) {
      this.$emit("edit", doc);
    },
  },
};
</script>

<style>
</style>