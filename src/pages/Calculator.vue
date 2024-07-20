<script setup lang="ts">
import { ref } from "vue";

let num = ref("");

const handleClick = (value: string) => {
  num.value += value;
};

const calculate = () => {
  num.value = eval(num.value);
};

const handleClear = () => {
  num.value = "";
};
</script>

<template>
  <VContainer>
    <VCard width="500" height="500">
      <VRow class="ml-2 mt-2">
        <h1>Calculator</h1>
      </VRow>
      <VRow>
        <VTextField type="text" v-model="num" class="px-10"></VTextField>
      </VRow>
      <VRow class="ml-2">
        <VCol cols="3"
          ><VBtn @click="handleClear('7')" class="text-h5 font-weight-bold">
            C
          </VBtn></VCol
        >
        <VCol cols="3"><VBtn class="text-h5 font-weight-bold"> () </VBtn></VCol>
        <VCol cols="3"
          ><VBtn @click="handleClick('%')" class="text-h5 font-weight-bold">
            %
          </VBtn></VCol
        >
        <VCol cols="3"
          ><VBtn @click="handleClick('/')" class="text-h5 font-weight-bold">
            /
          </VBtn></VCol
        >
      </VRow>
      <VRow class="ml-2">
        <VCol
          ><VBtn @click="handleClick('7')" class="text-h5 font-weight-bold"
            >7</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('8')" class="text-h5 font-weight-bold"
            >8</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('9')" class="text-h5 font-weight-bold"
            >9</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('*')" class="text-h5 font-weight-bold"
            >x</VBtn
          ></VCol
        >
      </VRow>
      <VRow class="ml-2">
        <VCol
          ><VBtn @click="handleClick('4')" class="text-h5 font-weight-bold"
            >4</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('5')" class="text-h5 font-weight-bold"
            >5</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('6')" class="text-h5 font-weight-bold"
            >6</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('-')" class="text-h5 font-weight-bold"
            >-</VBtn
          ></VCol
        >
      </VRow>
      <VRow class="ml-2">
        <VCol
          ><VBtn @click="handleClick('1')" class="text-h5 font-weight-bold"
            >1</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('2')" class="text-h5 font-weight-bold"
            >2</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('3')" class="text-h5 font-weight-bold"
            >3</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('+')" class="text-h5 font-weight-bold"
            >+</VBtn
          ></VCol
        ></VRow
      >
      <VRow class="ml-2">
        <VCol cols="6"
          ><VBtn
            @click="handleClick('0')"
            class="text-h5 w-100 font-weight-bold"
            >0</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="handleClick('.')" class="text-h5 font-weight-bold"
            >.</VBtn
          ></VCol
        >
        <VCol
          ><VBtn @click="calculate()" class="text-h5 font-weight-bold"
            >=</VBtn
          ></VCol
        ></VRow
      >
    </VCard>
  </VContainer>
</template>

<style scoped></style>
