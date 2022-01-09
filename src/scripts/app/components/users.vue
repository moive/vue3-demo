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
    import { onMounted, ref } from 'vue'
    export default {
        name:'users',
        setup(){
            let users = ref([]);

            const load = async ()=>{
                const data = await fetch('https://jsonplaceholder.typicode.com/users');
                users.value = await data.json();
                // console.log(users)
            };

            onMounted(()=>{
                load();
            });

            return { users }
        }
    }
</script>