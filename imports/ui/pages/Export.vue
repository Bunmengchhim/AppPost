<template>
  <div class="q-ma-md">
    <form-search-date @searchByDate="searchByDate" />
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Date</th>
          <th class="text-left">Customer</th>
          <th class="text-left">Item</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in items">
          <tr :key="index">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-left">{{ item.date | toDate }}</td>
            <td class="text-left">{{ item.customerName }}</td>
            <td class="text-left">{{ item.items[0].name }}</td>
            <td class="text-left">{{ item.items[0].price }}</td>
            <td class="text-left">{{ item.items[0].qty }}</td>
          </tr>
          <template v-for="(it, idx) in item.items">
            <tr :key="idx + `it` + index" v-if="idx != 0">
              <td colspan="3"></td>
              <td class="text-left">{{ it.name }}</td>
              <td class="text-left">{{ it.price }}</td>
              <td class="text-left">{{ it.qty }}</td>
            </tr>
          </template>
        </template>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import moment from "moment";
import FormSearchDate from "../components/FormSearchDate.vue";
export default {
  components: { FormSearchDate },
  data() {
    return {
      items: [],
    };
  },
  filters: {
    toDate(date) {
      return moment(date).format("DD-MM--YYYY");
    },
  },

  methods: {
    searchByDate(data) {
      console.log("Data", data);
      this.items = [
        {
          _id: "01",
          date: new Date(),
          customerName: "Steven",
          items: [
            {
              _id: "01",
              name: "Coca",
              price: 2500,
              qty: 2,
            },
            {
              _id: "02",
              name: "Sting",
              price: 3000,
              qty: 3,
            },
          ],
        },
      ];
    },
  },
};
</script>

<style>
</style>