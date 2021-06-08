<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input placeholder="Please input" v-model="input"></el-input></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <el-select v-model="selectedArray[0].selected" multiple placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-button type="primary">Add users to role</el-button>
          <el-button>Default</el-button>
        </div></el-col
      >
    </el-row>
    <!--  -->

    <!-- table -->

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="email" label="Email" width="280">
      </el-table-column>
      <el-table-column label="Role"> 
          
      <el-select v-model="selectedArray[0].selected" multiple placeholder="Selected">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
   
      </el-table-column>
      <el-table-column prop="lastSession" label="last session" width="180">
      </el-table-column>
      <el-table-column width="180">
        <el-button type="danger" plain>remove</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableData: [
        {
          name: "Tom",
          email: "Tom@gmail.com",
          role: "Admin",
          lastSession: "2021-20-08",
        },
        {
          name: "Jery",
          email: "Jery@gmail.com",
          role: "Admin",
          lastSession: "2021-20-08",
        },
        {
          name: "Adam",
          email: "Adam@gmail.com",
          role: "Admin",
          lastSession: "2021-20-08",
        },
        {
          name: "Jue",
          email: "Jue@gmail.com",
          role: "Admin",
          lastSession: "2021-20-08",
        },
      ],
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      selectedArray: [
        {
          selected: [],
        },
        {
          selected: [],
        },
        {
          selected: [],
        },
        {
          selected: [],
        },
      ],
      input:''
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style>
#app {
  margin-top: 5px;
}
</style>
