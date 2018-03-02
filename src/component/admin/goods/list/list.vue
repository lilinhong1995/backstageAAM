<template>
    <div class="view">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 表单 -->
        <section>
            <!-- 按钮 -->
            <el-button plain size='mini' icon="el-icon-plus">新增</el-button>
            <el-button plain size='mini' icon="el-icon-check">全选</el-button>
            <el-button plain size='mini' icon="el-icon-close">删除</el-button>
            <!-- 输入框 -->
            <div class="list-input">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" size='mini'></el-input>
            </div>
        </section>
        <!-- 表格 -->
        <!-- :data属性使用来接收数据 -->
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <!-- lable是用设置表头的 -->
            <!-- template是用来接收自自定义表格的数据 -->
            <el-table-column label="标题">
                <!-- 展示数据的方法1：{{}} -->
                <template slot-scope="scope">
                    <router-link to='#'>{{ scope.row.title }}</router-link>
                </template>
            </el-table-column>
            <!-- 展示数据的方法2：prop属性是用来展示要展现的数据名 -->
            <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>
            <el-table-column prop="stock_quantity" label="库存" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="market_price" label="市场价" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="sell_price" label="销售价" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="属性" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="操作" width="120" show-overflow-tooltip></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input21: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    getGoodsDate() {
        this.$http.get(this.$api.gsList + '?pageIndex=1&pageSize=10').then((res) => {
            console.log(res);
            if(res.status == 200) {
                this.tableData3 = res.data.message;
            console.log(this.tableData3);                
            }
        }) 
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  // 页面一打开就自动获取数据
  created() {
    this.getGoodsDate();
  }
};
</script>

<style scoped lang='less'>
.view {
  section {
    margin: 20px 0;
    .list-input {
      float: right;
      width: 200px;
    }
  }
  a {
      text-decoration: none;
      color: #666;
  }
}
</style>