<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Vue" id="vue" v-model="skills">
                    <label class="form-check-label" for="vue">
                        Vue
                    </label>
                </div>
            </li>
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Reactjs" id="reactjs" v-model="skills">
                    <label class="form-check-label" for="reactjs">
                        Reactjs
                    </label>
                </div>
            </li>
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Angular" id="angular" v-model="skills">
                    <label class="form-check-label" for="angular">
                        Angular
                    </label>
                </div>
            </li>
        </ul>
        <p class="mx-3">Frameworks selection: {{ skills }}</p>
    </div>
</template>
<script>
    import { ref } from 'vue'
    export default {
        name:'card-list',
        setup(){
            const skills = ref([]);
            return { skills }
        }
    }
</script>