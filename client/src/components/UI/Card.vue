<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: "Add Bug"
    }
})
</script>

<template>

    <div class="card">
        <div class="card-header">
            {{ title }}
        </div>
        <hr />
        <div class="card-body mt-4">
            <slot name="body">

            </slot>
        </div>
        <div class="card-footer">
            <slot name="footer">

            </slot>
        </div>
    </div>

</template>
