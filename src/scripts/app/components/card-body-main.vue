<template>
    <div>
        <h3>{{fullname}}</h3>
        <p>{{message}}</p>
        <input type="text" class="form-control" v-model="textTop">
        <h4 class="mt-3">Skills</h4>
    </div>
</template>
<script>
    export default {
        name:"card-body-main",
        data:()=>({
            message:'welcome...!',
            name: 'Moises',
			lastname: 'Velasquez',
            textTop:'Vue 2',
        }),
        mounted(){
            this.$emit("valDescription", this.textTop);
        },
        watch:{
            textTop(val){
                this.$emit("valDescription", val);
            }
        },
        computed:{
			fullname(){
				return  `${this.name} ${this.lastname}`;
			}
		},
    }
</script>