<template>
    <q-card-section>
        <q-input
            style="font-size:16px;"
            class="full-width"
            outlined
            :value="name"
            @input="$emit('update:name',$event)"
            label="Task name"
            :ref="name"
            autofocus 
        />
    </q-card-section>
</template>
<script>
export default {
    props:['name']
}
</script>