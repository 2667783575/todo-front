<script setup>
import Card from './Card.vue';
import CardList from './CardList.vue';
import { ref, computed } from 'vue';

let datas = ref([
  {
    title: 'task1',
    content: 'Wahahaha',
    status: 'FLD',
    owner: 'Liu',
  }, {
    title: 'task2',
    content: 'Wahahaha',
    status: 'PND',
    owner: 'Wang',
  },
])

</script>

<template>
  <div flex min-h-screen bg-gray-100 overflow-hidden>


    <header class="bg-white shadow-md z-50">
      <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-xl text-blue-700 h-15">Todo your work!</a>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <aside>
        <CardList :datas="datas">
        </CardList>
      </aside>
      <div>
        www
      </div>
    </div>
  </div>
</template>

<style scoped></style>
