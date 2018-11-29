<template>
	<div class="drive-container">
		<div class="main-container">
			<div class="main-left">
				<div class="menus">
					<el-menu
						class="el-menu-vertical-demo"
						text-color="#626b84"
						:router="true"
						:default-active="this.$route.name"
						active-text-color="#2e68f8">
						<el-menu-item index="hello">
							<i class="el-icon-time"></i>
							<!-- 最近latest -->
							<span slot="title">{{$t('menus.latest')}}</span>
						</el-menu-item>
						<el-menu-item index="demo" >
							<i class="el-icon-star-off"></i>
							<!-- 星标star -->
							<span slot="title">{{$t('menus.star')}}</span>
						</el-menu-item>
						<el-menu-item index="files">
							<i class="el-icon-document"></i>
							<!-- 我的文档files -->
							<span slot="title">{{$t('menus.files')}}</span>
						</el-menu-item>
						<el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 与我分享share -->
							<span slot="title">{{$t('menus.share')}}</span>
						</el-menu-item>
						<el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item>
						<el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item><el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item><el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item><el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item><el-menu-item index="share">
							<i class="el-icon-share"></i>
							<!-- 团队team -->
							<span slot="title">{{$t('menus.team')}}</span>
						</el-menu-item>
					</el-menu>
				</div>
			</div>
			<div class="main-content">
				 <i class="icon iconfont icon-arrowleft"></i> <i class="icon iconfont icon-arrowleft"></i> <i class="icon iconfont icon-arrowleft"></i>
				<router-view/>
			</div>
			<div class="main-right">
				 <i class="icon iconfont icon-arrowleft"></i>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Menu',
		created() {
		}
	}
</script>
<style lang="scss"  >
 
@import '~styles/index.scss';
.drive-container{
	@include position(absolute, left, 0, top, 0);
	width:100%;
	min-width: 960px;
	height:100%;
	.main-container{
		position: relative;
		height: 100%;
		@extend %displayFlex;
		.main-left, .main-content, .main-right{
			overflow-x: hidden;
			overflow-y: auto;
			position: relative;
		}
		.main-left{
			.menus{
				@include wh(210px, 100%);
				border-right: solid 1px #e6e6e6;
				.el-menu-vertical-demo{
					padding-top: 24px;
					border-right: 0;
					.el-menu-item{
						i{
							margin-right: 0px;
						}
						height: 42px;
						@include font(14px, 42px, rgb(98, 107, 132), left);
					}
				}
			}
		}
		.main-content{
			@extend %Flex1;
			@include wh(210px, 100%);
		}
		.main-right{
			@include wh(150px, 100%);
		}
	}
}
</style>