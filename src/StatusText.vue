<template>
    <div class="flex flex-col">
        <div class="inline-flex items-center gap-1.5">
            <div class="relative w-2 h-2 flex-shrink-0">
                <div v-if="status !== 'PND'" class="absolute inset-0 status status-md animate-ping"></div>
                <div class="absolute inset-0 status status-md" :class="{
                    'status-success': status === 'CMP',
                    'status-primary': status === 'IP',
                    'status-secondary': status === 'UR',
                    'status-error': status === 'FLD',
                }"></div>
            </div>
            <span class="text-xs font-medium text-gray-700 cursor-help" :title="statusText">
                {{ status }}
            </span>

        </div>

        <span class="text-xs text-orange-500 mt-0.5"> {{ owner }}
        </span>
    </div>
</template>


<script>
export default {
    props: ['status', 'owner'],
    computed: {
        statusText() {
            const map = {
                PND: 'Pending',
                IP: 'In Progress',
                UR: 'UnderReview',
                CMP: 'Completed',
                FLD: 'Failed',
            };
            return map[this.status] || this.status;
        }
    },
}

</script>
