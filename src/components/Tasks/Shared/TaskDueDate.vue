<template>
    <q-card-section>
        <q-input 
            style="font-size:16px;"
            class="full-width"
            :value="dueDate"
             @input="$emit('update:dueDate',$event)"
            label="Due Date"
            outlined> 
            <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy>
                            <q-date 
                               :value="dueDate"
                                @input="$emit('update:dueDate',$event)"
                                minimal>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
            </template>
        </q-input>
    </q-card-section>
    
</template>
<script>
export default {
    props:['dueDate']
    
}
</script>