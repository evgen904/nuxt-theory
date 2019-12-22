<template>
  <h1>
    {{ user.name }}
  </h1>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  asyncData({params, error}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(error(new Error('User not found')))
        // resolve({
        //   user: {
        //     name: `Test user ${params.id}`
        //   }
        // })
      }, 1500)
    })
  }
}
</script>