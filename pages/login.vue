<template>
    <div class="container">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="Username"
          label="Username"
          placeholder="Username"
          :rules="[{ required: true, message: 'Username is required' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          label="Password"
          placeholder="Password"
          :rules="[{ required: true, message: 'Password is required' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            Submit
          </van-button>
        </div>
      </van-form>
    </div>
  </template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
        debugger
      console.log('submit')
      this.$auth.loginWith('local', {
        data: {
          login: this.username,
          password: this.password
        }
      })
    },
    changeMsg() {
      // this.msg = 'Hello world!'
      this.msg = this.$refs.textInput.value
      debugger
      this.$axios.get('/api/task/tasks').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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

</style>
