<template>
    <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
    >
        <title>Placeholder</title>
        <rect
            width="100%"
            height="100%"
            fill="#868e96"></rect>
        <text
            x="50%"
            y="50%"
            fill="#dee2e6"
            dy=".3em"
            dominant-baseline="middle"
            text-anchor="middle"
        >{{modelValue}}</text>
    </svg>
    <!-- <input type="text" v-model="modelValue" > -->
</template>
<script>
    import {ref} from 'vue';
    export default {
        name:'card-img-top',
        emits: ['update:modelValue'],
        props:{
            modelValue: String
        },
        setup(){
            const test=ref('');
            return {test}
        },
        watch: {
            modelValue(v){
                // console.log(v)
                this.$emit('update:modelValue', v);
            }
        }
    }
</script>