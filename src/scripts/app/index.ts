import { createApp } from 'vue';
import App from './components/app.vue';
// import Vue from "vue";
// import VueRouter from "vue-router";
// import Components from "./components";
// import routes from "./router/";

// Vue.use(BootstrapVue);

// const router = new VueRouter({
//   routes,
// });

// var app = new Vue({
// 	components: Components.components,
// 	router,
// 	el: "#app"
// });

createApp(App)
	// .use(store)
	// .use(router)
	.mount('#app');