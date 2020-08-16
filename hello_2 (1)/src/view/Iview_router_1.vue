<template>
  <div>
    <iviewtabbar></iviewtabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// -------------说明：这个文件/view/Iview_router_1.vue 演示动态路由跳转--------------
import iviewtabbar from '../components/IviewTabbar';
export default {
    methods:{
    },
    components:{
        iviewtabbar,
    },
}
</script>

<style>
</style>