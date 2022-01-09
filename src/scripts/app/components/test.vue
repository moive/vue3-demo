<template>
	<div class="row mt-5">
		<div class="col-md-4">
			<div class="card">
				<card-img-top v-model="textTop"/>
				<div class="card-body">
					<card-body-main
					    @valDescription="eventReceive"
						ref="cardBody"
					/>
				</div>
				<card-list/>
				<div class="card-body">
					<a
					    href="#"
						@click.prevent="helloUser()"
					    class="card-link"
					>Show alert</a>
					<a href="#" class="card-link">Another link</a>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<users/>
		</div>
	</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
	export default {
		name: 'test',
		props: {
			msg: String,
		},
		setup(){
			const textTop = ref('');

			const eventReceive = (val: string)=>{
				textTop.value = val;
			};

			const cardBody = ref(null);

			const helloUser = ()=>{
				alert(cardBody.value.fullname);
			}

			onMounted(()=>{
				console.log(cardBody.value.fullname)
			});

			return { textTop, eventReceive, helloUser, cardBody }
		}
	}
</script>
