<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title> POS SYSTEM </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/User">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section> User </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Customer">
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>
            <q-item-section> Customer </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Category">
            <q-item-section avatar>
              <q-icon name="backup_table" />
            </q-item-section>
            <q-item-section> Category </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Item">
            <q-item-section avatar>
              <q-icon name="dns" />
            </q-item-section>
            <q-item-section> Item </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Supplier">
            <q-item-section avatar>
              <q-icon name="maps_home_work" />
            </q-item-section>
            <q-item-section> Supplier </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Purchase">
            <q-item-section avatar>
              <q-icon name="inventory" />
            </q-item-section>
            <q-item-section> Purchase </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Sale">
            <q-item-section avatar>
              <q-icon name="chrome_reader_mode" />
            </q-item-section>
            <q-item-section> Sale </q-item-section>
          </q-item>
          <q-list bordered>
            <q-expansion-item icon="report" label="Report">
              <q-item clickable v-ripple to="import">
                <q-item-section avatar>
                  <q-icon name="arrow_circle_down" />
                  <q-item-label>Import</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="Export">
                <q-item-section avatar>
                  <q-icon name="arrow_circle_up" />
                  <q-item-label>Export</q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="text-center text-h4 q-ma-md">{{ $route.name }}</div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
    };
  },
};
</script>
