<script setup>
import CardList from './CardList.vue';
import { onMounted } from 'vue';
import TaskDetail from './TaskDetail.vue';
import { useTaskStore } from '@/stores/tasks'
import AddTaskModal from './AddTaskModal.vue';

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.fetchTasks()
});

</script>

<template>
  <div flex min-h-screen bg-base-100 overflow-hidden>


    <header class="fixed top-0 left-0 right-0 z-50 shadow-md">
      <div class="navbar bg-gray-700 h-16"> <!-- 明确高度 -->
        <a class="btn btn-ghost text-xl text-accent">Todo your work!</a>
      </div>
    </header>

    <div class="flex pt-14 w-full h-[calc(100vh-4rem)]">
      <aside class="min-w-[150px] max-w-[350px] w-1/3 w-max-150 overflow-y-auto border-r border-base-300">
        <AddTaskModal></AddTaskModal>
        <CardList :datas="taskStore.tasks">
        </CardList>
      </aside>
      <main class="w-2/3 overflow-y-auto p-4">
        <TaskDetail :selected-task="taskStore?.selectedTask"></TaskDetail>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
