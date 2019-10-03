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
      <td><router-link v-if="google_drive_status === true" :to="{ path: 'google_drive' }">G-Drive Files</router-link>
        <a v-else="google_drive_status === false" v-on:click="google_drive_data" target="_blank">Connect to Google</a>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Dropbox</td>
      <td>Not Defined</td>
      <td><router-link v-if="dropbox_status === true" :to="{ path: 'dropbox' }">Dropbox Files</router-link>
        <a v-else="dropbox_status === false" v-bind:href="dropbox_uri" target="_blank">Connect to Dropbox</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Box</td>
      <td>Not Defined</td>
      <td><router-link v-if="box_status === true" :to="{ path: 'box' }">Box Files</router-link>
        <a v-else="box_status === false" v-bind:href="box_uri" target="_blank">Connect to Box</a></td>
<!--        <td><a v-bind:href="box_uri" target="_blank">Connect to Box</a></td>-->
    </tr>
    <tr>
      <td>4</td>
      <td>Onedrive</td>
      <td>Not Defined</td>
      <td><router-link v-if="onedrive_status === true" :to="{ path: 'onedrive' }">Onedrive Files</router-link>
        <a v-else="onedrive_status === false" v-bind:href="onedrive_uri" target="_blank">Connect to Onedrive</a></td>
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
        dropbox_params: null,
        dropbox_data: null,
        data: null,
        user_id: null,
        onedrive_status: false,
        google_drive_status: false,
        dropbox_status: false,
        box_status: false,
        onedrive_uri: null,
        dropbox_uri: null,
        box_uri: null,
        google_drive_uri: null,
        box_code: null,
        box_data: null,
        box_drive_data: null,
      }
    },
    methods:{
      google_drive_data: function () {
        if (this.google_drive_status === false){
        ApiService.connect_google_drive()
          .then(response => {
            this.google_drive_uri = response;
            console.log(this.google_drive_uri);
          })
          .catch(
            error => {
              console.log(error)
            }
          )}
        else{
          ApiService.get_google_drive_status(this.user_id)
        .then(response => {
            this.google_drive_uri = response;
            console.log(this.google_drive_uri);
          })
            .catch(
              error => {
                console.log(error)
              }
            )
        }
      },
      user_data: function () {
        ApiService.logged_in_user()
          .then(response => {
            this.data = response;
            console.log(this.data);
            this.user_id = this.data.id;
            if (this.data.google_credential_file){
              this.google_drive_status = true;
            }
            if (this.data.box_access_code){
              this.box_status = true;
            }
            if (this.data.dropbox_access_token){
              this.dropbox_status = true;
            }
            if (this.data.onedrive_access_code){
              this.onedrive_status = true;
            }
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
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
      dropbox_auth_uri: function () {
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
      my_func: function () {
        this.dropbox_params = this.$route.hash;
        this.dropbox_params = this.dropbox_params.replace('#', '?');
        this.call_dropbox_data()
      },
      call_dropbox_data: function () {
        ApiService.drive_data_dropbox(this.dropbox_params)
          .then(response => {
            this.dropbox_data = response;
            console.log(this.dropbox_data);
            this.dropbox_data_save();
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      box_func: function () {
        this.box_code = this.$route.query.code;
        if(this.$route.query.code) {
          this.call_box_data();
        }
      },
      call_box_data: function () {
        ApiService.drive_data_box(this.box_code)
          .then(response => {
            this.box_data = response;
            console.log(this.box_data);
            this.user_data();
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      dropbox_data_save: function () {
        ApiService.save_dropbox_data()
          .then(response => {
            this.dropbox_data = response;
            console.log(this.dropbox_data);
          })
          .catch(
            error => {
              console.log(error)
            }
          )
      },
      box_auth_uri: function () {
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
      this.dropbox_auth_uri();
      this.box_auth_uri();
      this.user_data();
      this.my_func();
      this.box_func();
    }
  }
</script>

<style scoped>
</style>
