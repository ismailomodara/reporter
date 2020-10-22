<template>
  <div class="ch">
    <navigation :nav-open.sync="navOpen" />
    <transition name="overlay-fade" mode="out-in">
      <div v-if="navOpen" class="overlay " @click="navOpen = false"></div>
    </transition>
    <div class="ch-dashboard--body">
      <div class="ch-user-profile web">
        <el-dropdown trigger="click" @command="command">
          <div class="is-flex is-align-center">
            <p>
              {{ userName }}
            </p>
            <avatar :size="40" :src="avatar" :name="userName" />
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
      <div class="ch-user-profile mobile">
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
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
      <div class="ch-mobile--menu__toggler" @click="navOpen = true">
        <i class="ch-icon--menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
import * as actions from '../store/action-types'
import Navigation from '../components/Base/Navigation'

export default {
  name: 'AppLayout',
  components: {
    Navigation
  },
  data () {
    return {
      navOpen: false
    }
  },
  computed: {
    userName () {
      const { user } = this.$store.getters
      return (`${user.first_name} ${user.last_name}`) || 'Admin'
    },
    avatar () {
      return this.$store.getters.user.avatar
    }
  },
  created () {},
  methods: {
    command (command) {
      if (command === 'settings') {
        this.$router.push({ name: 'settings.index' })
      } else {
        this.logOut()
      }
    },
    logOut () {
      this.$store.dispatch(actions.LOGOUT).then(() => {
        this.$message.success('You are logged out.')
      })
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="scss">
$--sidenav: 240px;

.ch {
  height: 100%;
  width: 100%;
  background: #eeefe8;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;
  overflow-y: scroll;

  &.mobile-nav {
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
  }

  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .overlay-fade-enter,
  .overlay-fade-leave-active {
    opacity: 0;
  }

  .ch-dashboard--body {
    width: calc(100% - #{$--sidenav});
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 30px;
    position: relative;
    max-width: 1200px;
    margin: auto;
    -ms-overflow-style: none;

    .ch-user-profile {
      position: absolute;
      top: 20px;
      right: 30px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      z-index: 9;

      &.mobile {
        display: none !important;
      }

      i::before {
        color: #21312a;
        cursor: pointer;
      }

      p {
        font-size: 0.875rem;
        font-weight: 500;
        margin: 0 10px;

        a {
          color: #21312a;
        }
      }
    }

    .ch-mobile--menu__toggler {
      display: none;
      background: #000000;
      position: fixed;
      bottom: 30px;
      right: 30px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      border-radius: 100px;
      height: 60px;
      width: 60px;
      justify-content: center;
      align-items: center;
      z-index: 1;

      i {
        color: #fff;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
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

@media (max-width: 1024px) {
  .ch {
    .ch-dashboard--body {
      width: 100%;
      padding-left: 100px;
      padding-right: 20px;
    }
  }
}

@media (max-width: 600px) {
  .ch {
    height: 100%;
    width: auto;
    padding: 0;

    .ch-user-profile.web {
      display: none !important;
    }

    .ch-mobile--menu__toggler {
      display: flex !important
    }

    .ch-dashboard--body .ch-user-profile.mobile {
      display: inline !important;
      top: 10px !important;
    }

    .ch-dashboard--body {
      padding: 30px 15px;
      left: 0;
    }
  }
}
</style>
