<template>
  <div class="rp">
    <div class="rp-header">
      <div class="rp-page--header">
        <el-container>
          <h1>{{ formatText(activeMenu) }}</h1>
          <div>
            <div class="rp-user-profile web">
              <el-dropdown trigger="click" @command="command">
                <div class="is-flex is-align-center">
                  <p>
                    {{ userName }}
                  </p>
                  <avatar :size="36" :name="userName" />
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="rp-icon--user" command="settings"
                  >Profile</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-switch-button" command="logout"
                  >Logout</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="rp-user-profile mobile">
              <el-dropdown trigger="click" @command="command">
                <div class="is-flex is-align-center">
                  <avatar :size="40" :name="userName" />
                  <i class="ch-icon--chevron-down ml-1"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="ch-icon--user" command="settings"
                  >Profile</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-switch-button" command="logout"
                  >Logout</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-container>
      </div>
      <div class="rp-header--nav">
        <el-container>
          <el-menu
            :default-active="activeMenu"
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#000000"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item
              v-for="(route, index) in routes"
              :key="index"
              :index="route.name"
              :route="{ name: `${route.name}.index` }"
            >
              <i :class="`rp-icon--${route.icon}`"></i>
              <span>{{ route.label }}</span>
            </el-menu-item>
          </el-menu>
        </el-container>
      </div>
    </div>
    <div class="rp-dashboard--body">
      <el-container>
        <transition name="fade" mode="out-in">
          <slot />
        </transition>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      activeMenu: '',
      routes: [
        {
          icon: 'grid',
          label: 'Dashboard',
          name: 'dashboard'
        },
        {
          icon: 'clipboard',
          label: 'Reports',
          name: 'reports'
        },
        {
          icon: 'settings',
          label: 'Settings',
          name: 'settings'
        }
      ]
    }
  },
  computed: {
    userName () {
      return 'Administrator'
    }
  },
  mounted () {
    if (this.$route.path !== null) {
      this.activeMenu = this.$route.path.split('/')[1]
    }
  },
  watch: {
    $route () {
      if (this.$route.path !== null) {
        this.activeMenu = this.$route.path.split('/')[1]
      }
    }
  },
  methods: {
    command (command) {
      if (command === 'settings') {
        this.$router.push({ name: 'settings.index' })
      } else {
        this.$router.push({ name: 'report' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.rp {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  .rp-header {
    position: fixed;
    height: calc(15vh + 80px);
    width: 100%;
    z-index: 999;

    .rp-page--header {
      height: 15vh;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .el-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .rp-user-profile {
        p {
          margin-right: 10px;
          font-weight: 500;
        }
      }
    }
    .rp-header--nav {
      background: #000000;
      width: 100%;

      .el-menu {
        height: 70px;
        display: flex;
        justify-content: center;
        border: none;

        .el-menu-item {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 4px solid transparent;
          opacity: 0.7;
          padding: 0 30px;

          i {
            color: #fff;
          }
          i + span {
            margin-left: 7px;
          }

          &.is-active {
            opacity: 1;
            border-bottom: 4px solid #36AFA4 !important
          }
        }
      }
    }
  }

  .rp-dashboard--body {
    margin-top: calc(15vh + 80px);
    padding: 60px 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
