<template>
    <div>
        <h4>Users</h4>
        <ol class="list-group list-group-numbered" v-if="!!users">
            <li
                class="list-group-item d-flex justify-content-between align-items-start"
                v-for="user in users"
                :key="user.id"
            >
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{user.name}}</div>
                    <a :href="'mailto:'+user.email">{{user.email}}</a>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
    export default {
        name:'users',
        data:()=>({
            users:[]
        }),
        mounted() {
            this.load();
        },
        methods:{
            async load(){
                const data = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await data.json();
                // console.log(this.users)
            }
        }
    }
</script>