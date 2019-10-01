<template>
    <p>Box</p>
</template>

<script>
      import ApiService from '../apis/api-services'
      export default {
        name: "Box",
        comments:{
        },
        data(){
          return{
            data: null,
            state: null,
            code: null,
          }
        },
        methods: {

        },
        beforeMount() {
          console.log(this.$route.params.code)
          console.log(this.state)
          console.log(this.code)
          console.log("i am box")
        },
        beforeRouteEnter(to, from, next) {
          if(Object.keys(to.query).length !== 0) { //if the url has query (?query)
            next(vm => {
              vm.state = to.query.state
              vm.code = to.query.code
            })
          }
        }

      }
</script>

<style scoped>

</style>
