<template>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IUser from '@/types/user';

export default defineComponent({
    name:'user',
    props:{
        users:{
            require: true,
            type: Array as PropType<IUser[]>,
        }
    },
    setup() {
        //
    },
})
</script>
