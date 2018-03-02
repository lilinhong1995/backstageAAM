<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <section>
            <el-button plain size="mini">新增</el-button>
            <el-button plain size="mini">全选</el-button>
            <el-button plain size="mini">删除</el-button>
            <div class="inputwidth">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" size="mini"></el-input>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped class= 'less'>
section {
    margin: 20px 0;
}
.inputwidth {
    float: right;
    width: 200px;
}
</style>