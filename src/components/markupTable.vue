<template>
  <div class="q-pa-md">
    <q-markup-table bordered>
      <!-- flat  -->
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img style="width: 70px" :ratio="1" class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png" />

              <div class="text-h4 q-ml-md text-white">Treats</div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
        </tr>
      </tbody>
    </q-markup-table>
    <div class="aa"></div>
    <div>
      {{ useCounterStore().count }}
    </div>
    <q-btn color="primary" label="增加pinia" @click="addCount" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const addCount = ()=>{
  // useCounterStore().count++;
  useCounterStore().increment();
}
</script>


<style scoped>
.aa {
  height: 50px;
}
</style>