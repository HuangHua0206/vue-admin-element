<template>
  <div class="hello">
    <p>姓：{{demo1}}</p>
    <p>名：{{demo2}}</p>
    <div class="input-text">
        <el-input v-model="firstname" placeholder="请输入姓氏"></el-input>
        <el-button type="primary" @click="changeFirstname">修改姓氏</el-button> 
    </div>
    <div class="input-text">
        日期：<el-input v-model="date" placeholder="请输入日期"></el-input>
        姓名：<el-input v-model="name" placeholder="请输姓名"></el-input>
        地址：<el-input v-model="address" placeholder="请输地址"></el-input>
        <el-button type="primary" @click="addItem">添加</el-button>
    </div>
    接口：---------------------------
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
    vuex：---------------------------
    <el-table
      :data="list"
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
import { mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            tableData: [],
            date: '',
            name: '',
            address: '',
            firstname: ''
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
        },
        changeFirstname() {
            this.EXCHANGE_LANG_FIRST_NAME(this.firstname)
            this.firstname = ''
        },
        addItem() {
            this.ADD_ITEM({
                date: this.date,
                name: this.name,
                address: this.address
            })
            this.date = ''
            this.name = ''
            this.address = ''
        },
        ...mapMutations(['EXCHANGE_LANG_FIRST_NAME', 'ADD_ITEM'])
    },
    computed: {
        ...mapGetters(['demo1', 'demo2', 'list'])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  .input-text{
    width: 300px;
  }
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
