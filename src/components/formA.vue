<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input color="purple-12" v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="grey-3" label-color="orange" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </q-input>

      <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </div>
    <div>
      {{ useCounterStore().count }}
    </div>
    <q-btn color="primary" label="獲取API" @click="getAPIData_token" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter";
const text = ref("");

import { getdata } from "@/utils/request";

const getAPIData_token = async () => {
  
  const { data } = await getdata("https://cors-anywhere.herokuapp.com/https://openapi.taifex.com.tw/v1/SSFAdjustedInfo", "get");
  console.log(data);
  // setToken(data.tokenStr);
}



</script>