<template>
  <div>
    <page-header title="Report A Case" subtitle="A description paragraph explaining brief details goes here." />
    <el-container>
      <el-form :model="form" ref="reportForm">
        <el-row type="flex" :gutter="20" class="flex-wrap">
          <el-col :md="9" :lg="9">
            <el-form-item
              label="State of arrest"
              prop="state_of_arrest"
              :rules="inputField()">
              <el-select
                v-model="form.state_of_arrest"
                placeholder=""
                filterable
                @change="getStateLGAs"
              >
                <el-option
                  v-for="(state, index) in states"
                  :key="index"
                  :label="state.name"
                  :value="state.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="15" :lg="15">
            <el-form-item
              label="LGA of arrest"
              prop="lga_of_arrest"
              :rules="inputField()">
              <el-select
                v-model="form.lga_of_arrest"
                placeholder=""
                filterable
                @change="getStateLGAs"
              >
                <el-option
                  v-for="(lga, index) in lgas"
                  :key="index"
                  :label="lga.name"
                  :value="lga.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20" class="flex-wrap">
          <el-col :md="16" :lg="16">
            <el-form-item
              label="Place of arrest"
              prop="place_of_arrest"
              :rules="inputField()">
              <el-input
                v-model="form.place_of_arrest"
              />
            </el-form-item>
          </el-col>
          <el-col :md="8" :lg="8">
            <el-form-item
              label="Date of arrest"
              prop="date_of_arrest"
              :rules="inputField()">
              <el-date-picker
                v-model="form.date_of_arrest"
                type="date"
                prefix-icon="ch-icon-s"
                value-format="yyyy-MM-dd"
                format="dd-MMM,yyyy"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20" class="flex-wrap">
          <el-col :md="7" :lg="7">
            <el-form-item
              label="No. of arrested"
              prop="number_of_arrested"
              :rules="inputField()">
              <el-input
                v-model="form.number_of_arrested"
                v-only-number
              />
            </el-form-item>
          </el-col>
          <el-col :md="17" :lg="17">
            <el-form-item
              label="Names of arrested (Ade Ola, John Ayomi)"
              prop="names_of_arrested"
              :rules="inputField()">
              <el-input
                v-model="form.names_of_arrested" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20" class="flex-wrap">
          <el-col :span="24">
            <el-form-item
              label="Photo Evidence (if any)" prop="photo_evidence" :rules="inputField()">
              <div class="mt-3">
                <photo-evidence-add :photo-urls="form.photo_evidence" />
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="is-flex is-justify-center">
          <el-button type="primary" :loading="submitting" @click="validate">Submit</el-button>
        </div>
      </el-form>
    </el-container>
  </div>
</template>

<script>
import locations from '../services/locations'
import PhotoEvidenceAdd from '../components/Report/PhotoEvidenceAdd'
import PageHeader from '../components/Base/PageHeader'
export default {
  name: 'ReportForm',
  components: { PageHeader, PhotoEvidenceAdd },
  data () {
    return {
      form: {
        state_of_arrest: '',
        lga_of_arrest: '',
        place_of_arrest: '',
        date_of_arrest: '',
        number_of_arrested: '',
        names_of_arrested: '',
        phone_number: '',
        comment: '',
        photo_evidence: []
      },
      states: [],
      lgas: [],
      loadingLGAs: false,
      submitting: false
    }
  },
  computed: {},
  created () {
    // this.getStates()
  },
  methods: {
    getStates () {
      locations.states().then(response => {
        this.states = response.data
      })
    },
    getStateLGAs () {
      this.form.lga_of_arrest = ''
      this.loadingLGAs = true
      if (this.form.state_of_arrest.includes('Federal')) {
        this.lgas = ['Abuja']
        this.loadingLGAs = false
      } else {
        locations.lgas(this.form.state_of_arrest).then(response => {
          this.lgas = response.data
          this.loadingLGAs = false
        })
      }
    },
    validate () {
      this.$refs.reportForm.validate(async valid => {
        if (!valid) {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .el-form {
    width: 70%;
    margin: auto;
    padding: 80px 30px;
  }
</style>
