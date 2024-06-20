<script setup lang="ts">
defineProps({
    placeholder: {
        type: String,
        default: "Agregue su historia mas contexto"
    },
    type: {
        type: String,
        default: "text"
    }
})
const value = defineModel()
</script>

<template>
    <div>
        <input :type="type" :placeholder="placeholder" v-model="value">
    </div>
</template>