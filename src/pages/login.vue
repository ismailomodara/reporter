<template>
  <div>
    <page-header title="Login" subtitle="Manage administrator control panel" />
    <el-form :model="form" label-position="top" ref="login">
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.email"
            class="rp-custom-input"
            label="Email"
            prop="email"
            :rules="emailField()">
            <el-input type="email" v-model="form.email" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.password"
            class="rp-custom-input"
            label="Password"
            prop="password"
            :rules="inputField()">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="mt-1 is-flex is-justify-center">
        <el-button :loading="loggingIn" type="primary" @click="login"
        >Login</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import PageHeader from '../components/Base/PageHeader'
export default {
  name: 'Login',
  components: { PageHeader },
  data () {
    return {
      loggingIn: false,
      form: {
        email: 'admin@admin.com',
        password: 'Sushi'
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'dashboard.index' })
    }
  }
}
</script>

<style scoped lang="scss">
  .el-form {
    width: 40%;
    margin: auto;
    padding: 60px 0;
  }

  @media (max-width: 1024px) {
    .el-form {
      width: 60%;
    }
  }

  @media (max-width: 600px) {
    .el-form {
      width: 90%;
    }
  }
</style>
