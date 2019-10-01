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
          }
        },
        methods:{
          onedrive_data: function () {
            ApiService.connect_onedrive()
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
          this.onedrive_data();
        }

    }
</script>

<style scoped>

</style>
