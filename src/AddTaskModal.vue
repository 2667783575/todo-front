<!-- components/AddTaskModal.vue -->
<template>
    <div>
        <button class="pt-1 btn btn-primary w-full" @click="openModal">
            new
        </button>
        <div v-if="isOpen" class="modal modal-open">
            <div class="modal-box">
                <h3 class="font-bold text-lg">添加新任务</h3>

                <form @submit.prevent="handleSubmit" class="mt-4 space-y-4">
                    <div>
                        <label class="label">
                            <span class="label-text">任务标题</span>
                        </label>
                        <input v-model="form.title" type="text" placeholder="例如：完成项目报告"
                            class="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label class="label">
                            <span class="label-text">任务内容</span>
                        </label>
                        <textarea v-model="form.content" class="textarea textarea-bordered w-full" placeholder="详细说明..."
                            required></textarea>
                    </div>


                    <div>
                        <label class="label">
                            <span class="label-text">负责人</span>
                        </label>
                        <input v-model="form.owner" class="input input-bordered w-full" placeholder="王经理"></input>
                    </div>

                    <div class="modal-action">
                        <button type="button" class="btn" @click="closeModal">取消</button>
                        <button type="submit" class="btn btn-primary">添加任务</button>
                    </div>
                </form>
            </div>

            <!-- 点击遮罩关闭 -->
            <div class="modal-backdrop" @click="closeModal"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/tasks'
const isOpen = ref(false)
const form = ref({
    title: '',
    content: '',
    owner: '',
})


const openModal = () => {
    isOpen.value = true
    form.value = { title: '', content: '', owner: '', status: 'PND' }
}

const closeModal = () => {
    isOpen.value = false
}

const taskStore = useTaskStore()

const handleSubmit = async () => {
    const status = form.value.owner?.trim() ? 'IP' : 'PND'
    const taskData = {
        ...form.value,
        status: status,
    };
    await taskStore.postTask(
        taskData
    )
    closeModal()
}
</script>