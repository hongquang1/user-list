<template>
  <el-container>
    <el-header id="header-userlist">Main</el-header>
    <el-container>
      <el-aside width="200px">
        <el-col style="width: 100%">
          <el-menu
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-input placeholder="Please input" v-model="input"></el-input>
            </div>
          </el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-select
                v-model="selectedArray[0].selected"
                multiple
                placeholder="Select"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="dialogFormVisible = true"
                >Add users to role</el-button
              >
              <el-dialog title="Add Member" v-model="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item
                    label="Name"
                    :label-width="formLabelWidth"
                  >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Mail" :label-width="formLabelWidth">
                    <el-input v-model="form.email" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Role" :label-width="formLabelWidth">
                    <el-select
                      v-model="form.region"
                      placeholder="Please select your role"
                    >
                      <el-option label="Admin" value="0"></el-option>
                      <el-option label="Member" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >Cancel</el-button
                    >
                    <el-button type="primary" @click="dialogFormVisible = false"
                      >Confirm</el-button
                    >
                  </span>
                </template>
              </el-dialog>
              <el-button>Default</el-button>
            </div></el-col
          >
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="email" label="Email" width="280">
            </el-table-column>
            <el-table-column label="Role">
              <el-select
                v-model="selectedArray[0].selected"
                multiple
                placeholder="Selected"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-table-column>
            <el-table-column
              prop="lastSession"
              label="last session"
              width="180"
            >
            </el-table-column>
            <el-table-column width="180">
              <el-button type="danger" plain>remove</el-button>
            </el-table-column>
          </el-table>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        email: "",
      },
      formLabelWidth: "120px",
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
      input: "",
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

<style scoped>
.el-header {
  background: #53a07c;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-aside {
  background: #ffffff;
  height: 91vh;
}
.el-menu {
  background-color: #ffffff;
  min-height: 91vh;
}
</style>