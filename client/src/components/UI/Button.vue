<script setup lang="ts">
const emits = defineEmits(['clickEvent'])
defineProps({
    title: {
        type: String,
        default: "Guardar"
    }
})
const clickEvent = () => {
    emits('clickEvent')
}
</script>

<template>
    <div>
        <button @click="clickEvent" class="btn">{{ title }}</button>
    </div>
</template>
