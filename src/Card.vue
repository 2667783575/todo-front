<template>
    <div>
        <div class="card border border-primary bg-base-100 w-full content-center
    hover:translate-y-0.25 hover:shadow hover:duration-150           
    active:translate-y-0.5 active:shadow-none active:bg-base-200
    transition-all duration-150 ease-in-out">
            <div class="card-body  text-neutral-content">
                <h2 class="card-title text-primary">{{ title }}</h2>
                <p class="text text-secondary">
                    <slot></slot>
                </p>
                <div class="self-end w-15 mt-auto justify-end">
                    <StatusText :status="status" :owner="owner" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import StatusText from './StatusText.vue';

defineProps(['title', 'status', 'owner', 'createdAt', 'id'])


</script>