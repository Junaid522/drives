<template>
  <body>
  <Header></Header>
  <h3>All Drives</h3>
  <p>Connected Drives</p>
  <table>
    <tr>
      <th>No.</th>
      <th>Drive</th>
      <th>Status</th>
      <th>Connect/Disconnect</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Google Drive</td>
      <td>Not Defined</td>
      <td><router-link to="/google_drive">Connect to Google</router-link></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Dropbox</td>
      <td>Not Defined</td>
      <td><a v-bind:href="dropbox_uri" target="_blank">Connect to Dropbox</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Onedrive</td>
      <td>Not Defined</td>
      <td><a v-bind:href="onedrive_uri" target="_blank">Connect to Onedrive</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Box</td>
      <td>Not Defined</td>
      <td><a v-bind:href="box_uri" target="_blank">Connect to Box</a></td>
    </tr>
  </table>
  <router-view></router-view>
  </body>
</template>

<script>
  import ApiService from '../apis/api-services'
  import Header from '../components/Header'
  export default {
    name: "BaseView",
    components:{
      Header,
    },
    data(){
      return{
        onedrive_uri: null,
        dropbox_uri: null,
        box_uri: null,
      }
    },
    methods:{
      onedrive_data: function () {
        ApiService.connect_onedrive()
          .then(response => {
            this.onedrive_uri = response;
            console.log(this.onedrive_uri);
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      dropbox_data: function () {
        ApiService.connect_dropbox()
          .then(response => {
            this.dropbox_uri = response;
            console.log(this.dropbox_uri);
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      box_data: function () {
        ApiService.connect_box()
          .then(response => {
            this.box_uri = response;
            console.log(this.box_uri);
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
      this.dropbox_data();
      this.box_data();
    }
  }
</script>

<style scoped>
</style>
