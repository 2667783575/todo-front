<!-- TaskDetail.vue -->
<template>
    <div v-if="selectedTask" class="h-full w-full">
        <div class="card bg-base-100 shadow-xl w-full">
            <div class="card-body w-full">
                <!-- 编辑模式 -->
                <div v-if="isEditing" class="space-y-4">
                    <div>
                        <label class="label"><span class="label-text">标题</span></label>
                        <input v-model="editableTask.title" type="text" class="input input-bordered w-full" />
                    </div>
                    <div>
                        <label class="label"><span class="label-text">内容</span></label>
                        <textarea v-model="editableTask.content" class="textarea textarea-bordered w-full"></textarea>
                    </div>
                    <div>
                        <label class="label"><span class="label-text">负责人</span></label>
                        <input v-model="editableTask.owner" type="text" class="input input-bordered w-full"
                            placeholder="王经理" />
                    </div>
                    <div class="flex justify-between items-center">
                        <!-- 左侧：删除按钮 -->
                        <div>
                            <button class="btn btn-sm btn-error" @click="deleteTask(editableTask)">删除</button>
                        </div>

                        <!-- 右侧：取消 + 保存 -->
                        <div class="flex space-x-2">
                            <button class="btn btn-sm" @click="cancelEdit">取消</button>
                            <button class="btn btn-primary btn-sm" @click="saveEdit">保存</button>
                        </div>
                    </div>
                </div>

                <!-- 查看模式 -->
                <div v-else>
                    <h2 class="card-title">{{ selectedTask.title }}</h2>
                    <p class="text-sm text-base-content/70 mt-2">{{ selectedTask.content }}</p>
                    <div class="space-y-2 mt-4">
                        <div class="flex justify-between">
                            <span class="text-sm font-medium">负责人:</span>
                            <span class="badge badge-primary">{{ selectedTask.owner || '未指定' }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm font-medium">创建日期:</span>
                            <span>{{ formatDate(selectedTask.createdAt) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm font-medium">状态:</span>
                            <span class="badge" :class="getStatusBadgeClass(selectedTask.status)">
                                {{ selectedTask.status }}
                            </span>
                        </div>
                    </div>

                    <div class="card-actions justify-end mt-6">
                        <button class="btn btn-outline btn-sm" @click="startEdit">编辑</button>
                        <button class="btn btn-primary btn-sm">完成</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTaskStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'


const taskStore = useTaskStore()
const { selectedTask } = storeToRefs(taskStore)
const isEditing = ref(false)
const editableTask = ref({})

// 当 selectedTask 变化时，重置 editableTask
watch(() => selectedTask, (newTask) => {
    if (newTask) {
        editableTask.value = { ...newTask }
    }
}, { immediate: true })

const startEdit = () => {
    isEditing.value = true
    editableTask.value = { ...selectedTask.value }
}

const cancelEdit = () => {
    isEditing.value = false
    editableTask.value = { ...selectedTask.value }
}

const saveEdit = async () => {
    await taskStore.updateTask(editableTask.value)
    isEditing.value = false
}

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('zh-CN')
}

const getStatusBadgeClass = (status) => {
    return status === 'IP' ? 'badge-success' : 'badge-warning'
}

const deleteTask = async (task) => {
    taskStore.deleteTask(task.id)
    isEditing.value = false;
    taskStore.selectedTask = null
}
</script>