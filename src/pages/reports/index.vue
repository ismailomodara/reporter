<template>
  <div v-loading.fullscreen="loading">
    <el-row type="flex" class="flex-wrap mb-2" :gutter="40">
      <el-col v-for="(data, i) in summary" :key="i" :xs="24" :sm="12" :md="8" :lg="8">
        <summary-card :label="data.label" :value="data.value" />
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <div class="is-flex is-align-center is-justify-end">
              <el-input
                v-model="search"
                type="text"
                placeholder="Search"
                suffix-icon="rp-icon--search"
                class="search"
                :disabled="!pageData.data.length" />
            </div>
          </template>
          <template slot="content">
            <el-table :data="pageData.data" empty-text="No Report(s) added">
              <el-table-column prop="index" width="60">
                <template slot="header">
                <span class="rp-table--header">
                  S/N
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.$index + 1 }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="name" width="200">
                <template slot="header">
                <span class="rp-table--header">
                  Name
                </span>
                </template>
                <template slot-scope="scope">
                  <router-link :to="{ name: 'reports.report', params: {id: scope.row.id }}">
                    <p>{{ scope.row.first_name }} {{ scope.row.last_name }}</p>
                  </router-link>
                </template>
              </el-table-column>
              <el-table-column prop="date_of_arrest">
                <template slot="header">
                <span class="rp-table--header">
                  Date of Arrest
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.date_of_arrest }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="place_of_arrest">
                <template slot="header">
                <span class="rp-table--header">
                  Place of Arrest
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.place_of_arrest }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="status">
                <template slot="header">
                <span class="rp-table--header">
                  Status
                </span>
                </template>
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.release_status === 'resolved'" type="success">Resolved</el-tag>
                  <el-tag v-else type="warning">Unresolved</el-tag>
                </template>
              </el-table-column>
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-dropdown class="more" @command="command">
                    <span>
                      <i class="rp-icon--more-horizontal"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        icon="rp-icon--edit"
                        :command="{ action: 'edit', id: scope.row.id, report: scope.row }">
                        Edit</el-dropdown-item>
                      <el-dropdown-item
                        icon="rp-icon--activity"
                        :command="{ action: 'status', id: scope.row.id, report: scope.row}">
                        Change status
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              v-if="pageData.data.length"
              :from="pageData.from"
              :to="pageData.to"
              :total="pageData.total"
              :current-page.sync="page"
            />
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ReportsIndex',
  data () {
    return {
      loading: false,
      search: '',
      page: 1,
      pageData: {
        from: 1,
        to: 5,
        total: 5,
        data: [
          {
            id: 1,
            first_name: 'Sulaimon',
            last_name: 'Saliu',
            email: 'sulaimon@gmail.com',
            date_of_arrest: '12 Oct, 2020',
            place_of_arrest: 'Alausa',
            release_status: 'resolved'
          },
          {
            id: 2,
            first_name: 'Adio',
            last_name: 'Jamiu',
            email: 'jamiu@gmail.com',
            date_of_arrest: '8th Oct, 2020',
            place_of_arrest: 'Ikeja',
            release_status: 'unresolved'
          },
          {
            id: 3,
            first_name: 'Zara',
            last_name: 'Larsson',
            email: 'zara@gmail.com',
            date_of_arrest: '8th Oct, 2020',
            place_of_arrest: 'Surulere',
            release_status: 'unresolved'
          },
          {
            id: 4,
            first_name: 'Patrick',
            last_name: 'Star',
            email: 'patrick.start@yahoo.com',
            date_of_arrest: '6th Oct, 2020',
            place_of_arrest: 'Yaba',
            release_status: 'resolved'
          },
          {
            id: 5,
            first_name: 'Spongebob',
            last_name: 'Squarepants',
            email: 'spongebob@gmail.com',
            date_of_arrest: '6th Oct, 2020',
            place_of_arrest: 'Mushin',
            release_status: 'resolved'
          }
        ]
      },
      report: {}
    }
  },
  computed: {
    summary () {
      return [
        {
          label: 'Number of reports',
          value: 0
        },
        {
          label: 'Resolved reports',
          value: 0
        },
        {
          label: 'Unresolved report',
          value: 0
        }
      ]
    }
  },
  methods: {
    command (command) {
      this.report = { ...command.report }
      if (command.action === 'status') {
        //
      } else {
        //
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .rp-stack {
    p:last-child {
      font-size: 0.875rem;
      opacity: 0.8;
      margin-top: 5px;
    }
  }
</style>
