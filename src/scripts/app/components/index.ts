import Vue from "vue";

import app from "./app.vue";
import test from "./test.vue";
import cardBodyMain from './card-body-main.vue';
import cardImgTop from './card-img-top.vue';
import cardList from './card-list.vue';
import users from './users.vue';

let o = {
	app,
	test,
	cardBodyMain,
	cardImgTop,
	cardList,
	users,
};

let routes = [];

let componentLibrary = {
	components: o,
	routes: routes,
	register: function() {
		for (var k in o) {
			let c = Vue.component(o[k].name, o[k]);
			if (o[k].route) {
				let or = o[k].route;
				or.component = c;
				routes.push(or);
			}
		}
	},
};

componentLibrary.register();

export default componentLibrary;
