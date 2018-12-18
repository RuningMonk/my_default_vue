<template>
	<div id="app">
		<div class="container">
			<button type="button" id="test-btn" class="btn btn-default">123123</button>
			<img v-lazy="this.testimg" id="test-img">
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default {
		methods:{
			...mapActions([
				'getBannerList'
			])
		},
		computed:{
			...mapState([
				'testinfo',
				'testimg'
			])
		},
		mounted() {
			let that = this;
			$("#test-btn").click(function() {
				that.$store.dispatch('getBannerList');
				alert('1')
			});
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	#test-img{
		width: 100px;
		height: 100px;
		display: block;
	}
</style>
