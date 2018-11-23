<template>
  <div class="hello">
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
 
  </div>
</template>

<script>
import { getList } from 'services/test'
export default {
    data() {
        return {
            tableData: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            const o = {
                paraone: 'hhjk'
            }
            const reslutData = await getList(o)
            this.tableData = reslutData.data
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  // width:100%;
  h2{
    font-size:90px;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
