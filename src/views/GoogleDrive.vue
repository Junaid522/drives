<template>
    <p>Google Drive</p>
</template>

<script>
  import ApiService from '../apis/api-services'
    export default {
        name: "GoogleDrive",
      comments:{
      },
      data(){
        return{
          data: null,
        }
      },
      methods:{
        google_drive_data: function () {
          ApiService.connect_google_drive()
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
        this.google_drive_data();
      }
    }
</script>

<style scoped>

</style>
