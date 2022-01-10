<template>
    <h4>Users</h4>
    <ol class="list-group list-group-numbered" v-if="!!users">
        <users-list :users="users" />
    </ol>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue';
import IUser from '@/types/user';

export default defineComponent({
    name:'users',
    setup(){
        let users = ref<IUser[]>([]);

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
})
</script>