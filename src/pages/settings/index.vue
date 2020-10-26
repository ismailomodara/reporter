<template>
  <div v-loading.fullscreen="loading">
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <h5>Profile</h5>
          </template>
          <template slot="content">
            <el-row type="flex" :gutter="80" class="flex-wrap">
              <el-col :md="8" :lg="8">
                <div class="is-flex is-justify-center is-align-center h-100">
                  <avatar :size="120" />
                </div>
              </el-col>
              <el-col :md="16" :lg="16">
                <el-form :model="form">
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :md="12" :lg="12">
                      <el-form-item
                        label="First name"
                        prop="first_name"
                        :rules="inputField()">
                        <el-input
                          v-model="form.first_name"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12" :lg="12">
                      <el-form-item
                        label="Last name"
                        prop="last_name"
                        :rules="inputField()">
                        <el-input
                          v-model="form.last_name"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :md="16" :lg="16">
                      <el-form-item
                        label="Email"
                        prop="email"
                        :rules="emailField()">
                        <el-input
                          v-model="form.email"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="8" :lg="8">
                      <el-form-item
                        label="Phone number"
                        prop="phone_number"
                        :rules="inputField()">
                        <el-input
                          v-model="form.phone_number"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :span="24">
                      <el-form-item
                        label="Address" prop="address" :rules="inputField()">
                        <el-input v-model="form.address" type="textarea" rows="5" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div class="is-flex is-justify-center">
                    <el-button type="primary">Save changes</el-button>
                  </div>
                </el-form>
              </el-col>
            </el-row>
          </template>
        </card>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <h5>Security</h5>
          </template>
          <template slot="content">
            <el-row type="flex" :gutter="80" class="flex-wrap">
              <el-col :md="10" :lg="10">
                <div class="is-flex is-justify-center is-align-center h-100">
                  <img :src="getImage('security.svg')" alt="" :style="{ height: '200px'}" />
                </div>
              </el-col>
              <el-col :md="12" :lg="12">
                <el-form :model="security">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Current password"
                        prop="current_pwd"
                        :rules="inputField()">
                        <el-input
                          v-model="security.current_pwd"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="New password"
                        prop="new_pwd"
                        :rules="inputField()">
                        <el-input
                          v-model="security.new_pwd"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Confirm new password"
                        prop="confirm_new_pwd"
                        :rules="inputField()">
                        <el-input
                          v-model="security.confirm_new_pwd"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div class="is-flex is-justify-center">
                    <el-button type="primary">Save changes</el-button>
                  </div>
                </el-form>
              </el-col>
            </el-row>
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndex',
  data () {
    return {
      loading: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: ''
      },
      security: {
        current_pwd: '',
        new_pwd: '',
        confirm_new_pwd: ''
      }
    }
  },
  computed: {}
}
</script>

<style></style>
