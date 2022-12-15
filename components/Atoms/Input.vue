<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full rounded-lg border-2 border-indigo bg-transparent text-slate-900 dark:text-slate-100 text-opacity-80 dark:border-slate-100 p-2"
  />
</template>

<script lang='ts'>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
