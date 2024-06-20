<script setup lang="ts">
import { SelectInterface } from '../../../../shared/types/';
defineProps({
    options: {
        type: Array<SelectInterface>,
        default: []
    }
})
const selectValue = defineModel()
</script>

<template>
    <div>
        <select v-model="selectValue">
            <option v-for="option in options" :key="option.id">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>
