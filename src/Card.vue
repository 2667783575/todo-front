<template>
    <div class="card bg-base-100 w-96 shadow-sm content-center">
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
</template>
<script>
import StatusText from './StatusText.vue';

export default {
    props: ['title', 'status', 'owner'],
    components: { StatusText },
}
</script>