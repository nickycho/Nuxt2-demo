<template>
  <div class="container">
    <div>
      <button v-if="!$auth.loggedIn" @click="login">Login</button>
      <div v-else>
        <p>Welcome, {{ $auth.user.name }}</p>
        <button @click="logout">Logout</button>
      </div>
      <h1 class="title">
        {{ msg }}
      </h1>
      <input ref="textInput" type="text" />
      <button @click="changeMsg">changeMsg</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  
  data() {
    return {
      msg: 'Hello world!'
    }
  },
  computed: {
    ...mapGetters(['getOtherData'])
  },
  mounted() {
    this.msg = this.getOtherData + ' world!'
    console.log('mounted2')
  },
  methods: {
    changeMsg() {
      // this.msg = 'Hello world!'
      this.msg = this.$refs.textInput.value
      debugger
      this.$axios.get('/api/task/tasks').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    async logout() {
      try {
        await this.$auth.logout();
        // Handle after successful logout
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
    login() {
      this.$router.push('/login');

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    Quicksand,
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
