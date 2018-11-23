<template>
	<div class="drive-left-menus-container">
		<div class="left-menus">
			<el-menu
				class="el-menu-vertical-demo"
				text-color="#626b84"
				:router="true"
				:default-active="this.$route.name"
				active-text-color="#2e68f8">
				<el-menu-item index="hello">
					<i class="el-icon-time"></i>
					<span slot="title">latest</span>
				</el-menu-item>
				<el-menu-item index="demo" >
					<i class="el-icon-star-off"></i>
					<span slot="title">star</span>
				</el-menu-item>
				<el-menu-item index="files">
					<i class="el-icon-document"></i>
					<span slot="title">files</span>
				</el-menu-item>
				<el-menu-item index="share">
					<i class="el-icon-share"></i>
					<span slot="title">share</span>
				</el-menu-item>
				<el-menu-item index="share">
					<i class="el-icon-share"></i>
					<span slot="title">team</span>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="right-content">
			<router-view/>
		</div>
	
	</div>
</template>
<script>
	export default {
		name: 'Menu'
	}
</script>
<style lang="scss">
	.drive-left-menus-container{
		// overflow-x: hidden;
		height: 100%;
		display: flex;
		.left-menus{
			padding-top: 24px;
			min-width: 210px;
			border-right: solid 1px #e6e6e6;
			.el-menu-item{
				i{
					margin-right: 0px;
				}
				line-height: 42px;
				height: 42px;
				text-align: left;
				font-size:14px;
			}
			.el-menu-vertical-demo{
				border-right:0px;
			}
		}
		.right-content{
			flex:1;
		}
	}
</style>