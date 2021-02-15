<template>
    <q-card-section>
        <q-input 
            style="font-size:16px;"
            :value="dueTime"
            label="Due Time"
             @input="$emit('update:dueTime',$event)"
            outlined> 
            <template v-slot:append>
                <q-icon name="access_time" class="cursot-pointer">
                <q-popup-proxy>
                    <q-time 
                    :value="dueTime"  
                    @input="$emit('update:dueTime',$event)"
                    >
                    </q-time>
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </q-card-section>
</template>
<script>
export default {
    props:['dueTime']
}
</script>