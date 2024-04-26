<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-btn flat round dense :icon="sceneLightMode" @click="changeSceneMode" />
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left" v-model="tab">
        <!-- 此處為引用內建 Vue-router-->
        <!-- <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" /> -->
        <q-tab label="a" name="forma" alert="red" alert-icon="alarm_on" />
        <q-tab label="b" name="markupTable" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>





    

    <q-page-container>
      <!-- <router-view /> -->
      <!-- <keep-alive>
        <component :is="tabs[tab]"></component>
      </keep-alive> -->
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

import AppFormA from "./formA.vue";
import markupTable from "./markupTable.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

// 動態組件寫法
const tab = ref();
const tabs = {
  forma: AppFormA,
  markupTable: markupTable
};

// router寫法
import { useRouter } from "vue-router";
const router = useRouter();
watch(tab, (newValue, oldValue) => {
  console.log(`count 变为 ${newValue}`);
  if(newValue=='forma'){
    newValue="AppFormA"
  }
  router.push("/" + newValue)
});
//
import { useQuasar } from "quasar";
const $q = useQuasar();

const sceneLightMode = ref("light_mode");

const changeSceneMode = () => {
  sceneLightMode.value =
    sceneLightMode.value == "light_mode" ? "dark_mode" : "light_mode";
  console.log(sceneLightMode.value)
  // 查询暗色模式是否被开启
  console.log($q.dark.isActive); // true, false
  // 查询配置信息
  console.log($q.dark.mode); // "auto", true, false
  // 设置暗色模式状态
  $q.dark.set(sceneLightMode.value == "light_mode" ? true : false); // or false or "auto"
  // 切换暗色模式开关
  $q.dark.toggle();
};
</script>

<style scoped></style>
