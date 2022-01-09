<template>
    <div>
        <h3>{{fullname}}</h3>
        <p>{{message}}</p>
        <input type="text" class="form-control" v-model="textTop">
        <h4 class="mt-3">Skills</h4>
    </div>
</template>
<script>
import { computed, onMounted, ref, watch } from 'vue';
    export default {
        name:"card-body-main",
        setup(props, {emit}){
            const message = ref('welcome...!');
            const name = ref('Moises');
			const lastname = ref('Velasquez');
            const textTop = ref('Vue 3');

            const fullname = computed(()=> `${name.value} ${lastname.value}`);

            const emitValDescription = onMounted(()=>{
                emit("valDescription", textTop.value)
            });

            watch((textTop),(val)=>{
                emit('valDescription', val)
            });

            return { message, fullname, textTop, emitValDescription}
        },
        
    }
</script>