<template>
    <div>
        <ul class="overscroll-contain overflow-y-auto list bg-base-100 w-full  shadow-md h-8 ">
            <li class="pb-2 text-xs opacity-60 tracking-wide">Current Tasks</li>

        </ul>
        <ul
            class="overscroll-contain overflow-y-auto list bg-base-100 w-full shadow-md h-200 relative overflow-x-visible">
            <li v-for="(data, _) in datas" :key="data.id">
                <Card :id="data.id" :title="data.title" :owner="data.owner" :status="data.status"
                    :created-at="data.createdAt" @click="handleClick(data)">
                    {{ data.content }}
                </Card>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { defineComponent, defineProps, ref } from 'vue';
import Card from './Card.vue';
import { useTaskStore } from "@/stores/tasks"
defineProps(['datas'])

const taskStore = useTaskStore()

const handleClick = (task) => {
    if (taskStore.selectedTask?.id === task.id) {
        taskStore.selectedTask = null
    } else {
        taskStore.selectedTask = task
    }
}


</script>