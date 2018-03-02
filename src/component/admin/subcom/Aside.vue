<template>
    <div class="aside">
    <h1>后台管理系统</h1>
    <div>     
        <el-menu class="el-menu-vertical-demo" background-color="#001731" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu v-for = 'item in menu' :key = 'item.title' :index='item.title'>
                <!-- 侧栏一级菜单title -->
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{item.title}}</span>
                </template>
                <!-- 侧栏二级菜单 -->
                    <el-menu-item v-for = 'childs in item.children' :key = 'childs.title' :index="childs.title" >
                        <router-link :to = 'childs.path'>{{childs.title}}</router-link>
                    </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu : [
                { title: '商品管理', children: [
                    {title: '内容管理', path: '/admin/goods/list'},
                    {title: '类别管理', path: '/admin/goods/detail/:id'},
                    {title: '评论管理', path: '/admin/goods/comment'}
                ]},
                { title: '订单管理', children: [
                    {title: '内容管理1', path: '/admin/order/aaaa'},
                    {title: '类别管理2', path: '/admin/order/bbbb'},
                    {title: '评论管理4', path: '/admin/order/cccc'}
                ]},

            ]
        }
    }
};
</script>

<style scoped>
.aside {
  height: 100%;
}

h1 {
    margin: 0;
    height: 60px;
    width: 100%;
    background-color:#011226;
    line-height: 60px;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: #fff;
}

.el-menu {
    border-right: solid 1px #011226;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>