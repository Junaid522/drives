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
          my_func: function () {
            this.code = this.$route.query.code;
            console.log(this.code);
            console.log("i am box");
            this.call_box_data()
          },
          call_box_data: function () {
            ApiService.drive_data_box(this.code)
              .then(response => {
                this.data = response;
                console.log(this.data);
              })
              .catch(
                error => {
                  console.log(error)
                }
              )
          }

        },
        beforeMount() {
          this.my_func();
        },

      }
</script>

<style scoped>

</style>
