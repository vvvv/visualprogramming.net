<script setup lang="ts">
defineProps<{ 
	index: number
	disabled: boolean
	values: string[]
	update: (index: number) => void;
}>()
</script>

<template>
	<div class="dropdown" :class="disabled ? 'disabled' : ''">
		<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
			{{ values [index]}}
		</button>
		<div class="dropdown-menu">
			<a v-for="(value, index) in values" class="dropdown-item" @click="update(index)">{{ value }}</a>
		</div>
	</div>
</template>
