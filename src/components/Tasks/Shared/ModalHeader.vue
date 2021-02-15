<template>
    <q-card-section class="row">
        <div class="text-h6"><slot></slot>
        </div>
        <q-btn style="margin-left:auto" flat round dense icon="close" v-close-popup ></q-btn>
    </q-card-section>
</template>
<script>
export default {
    
}
</script>