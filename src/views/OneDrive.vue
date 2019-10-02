<template>
    <p>One Drive</p>
</template>

<script>
      import ApiService from '../apis/api-services'
      export default {
        name: "OneDrive",
        comments:{
        },
        data(){
          return{
            data: null,
            params: null,
          }
        },
        methods:{
          onedrive_data: function () {
            this.params = this.$route.query.access_token;
            this.params = '?access_token=' + this.params;
            this.onedrive_token();
          },
          onedrive_token: function () {
            ApiService.save_token_onedrive(this.params)
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
          this.onedrive_data();
        }

    }
</script>

<style scoped>

</style>
