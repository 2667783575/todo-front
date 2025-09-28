<template>
    <div>
        <ul class="overscroll-contain overflow-y-auto list bg-base-100 w-100  shadow-md h-8">
            <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Current Tasks</li>

        </ul>
        <ul class="overscroll-contain overflow-y-auto list bg-base-100 w-100 shadow-md h-250">
            <li v-for="(data, index) in datas" :key="index" class="list-row">
                <Card :title="data.title" :owner="data.owner" :status="data.status">{{ data.content }}
                </Card>
            </li>
        </ul>
    </div>2
</template>


<script setup>
import { defineComponent } from 'vue';
import Card from './Card.vue';

defineProps(['datas'])
</script>