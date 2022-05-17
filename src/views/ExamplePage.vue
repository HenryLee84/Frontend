<script setup>
import { ref, unref, watchEffect } from 'vue';
import openDataService from '../services/openDataService';

const records = ref(null);
const done = ref(false);
const selectedCity = ref('新北市');
const authorization = 'CWB-490218AE-B77C-4780-85A7-556494DAF9CD';
const cityOptions = ['新北市', '臺北市', '高雄市'];
const words = {
  'Wx': '氣象',
  'PoP': '降雨機率',
  'MinT': '最低氣溫',
  'MaxT': '最高氣溫',
  'CI': '舒適度'
};

function getData() {
  done.value = false;
  // resolve the url value synchronously so it's tracked as a
  // dependency by watchEffect()
  const city = unref(selectedCity);

  openDataService.getWeb({
    authorization,
    locationName: city
  }).then((response) => {
    records.value = response.records;
    done.value = true;
  });
}

watchEffect(getData);

</script>

<template>
  <select v-model="selectedCity">
    <option disabled>
      Please Choose
    </option>
    <option
      v-for="(option, index) in cityOptions"
      :key="index"
    >
      {{ option }}
    </option>
  </select>
  <template v-if="done">
    <p>{{ records.datasetDescription }}</p>
    <template
      v-for="{locationName, weatherElement} in records.location"
      :key="locationName"
    >
      <p>{{ locationName }}</p>
      <template
        v-for="{elementName, time} in weatherElement"
        :key="elementName"
      >
        <p class="mt-2">
          {{ elementName }} ({{ words[elementName] }})
        </p>
        <template
          v-for="(period, index) in time"
          :key="index"
        >
          <p>{{ period.startTime }} ~ {{ period.endTime }}</p>
          <p>{{ period.parameter.parameterName }} {{ period.parameter.parameterUnit }}</p>
        </template>
      </template>
    </template>
  </template>
</template>