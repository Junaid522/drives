<template>
    <p>Dropbox</p>
</template>

<script>
  import ApiService from '../apis/api-services'
    export default {
        name: "Dropbox",
      data(){
        return{
          data: null,
          state: null,
          params: null,
        }
      },
      methods: {
        my_func: function () {
          this.params = this.$route.hash;
          this.params = this.params.replace('#', '?');
          console.log(this.params);
          console.log("i am dropbox");
          this.call_dropbox_data()
        },
        call_dropbox_data: function () {
          ApiService.drive_data_dropbox(this.params)
            .then(response => {
              this.data = response;
              console.log(this.data);
            })
            .catch(
              error => {
                console.log(error)
              }
            )
        },

      },
      beforeMount() {
        this.my_func();
      },
    }
</script>

<style scoped>

</style>
