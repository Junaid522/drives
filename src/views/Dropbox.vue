<template>
  <div>
    <Header></Header>
    <h3>Dropbox</h3>
    <p>get respective user dropbox data.</p>
    <table>
      <tr>
        <th>No.</th>
        <th>ID</th>
        <th>File</th>
        <th>Type</th>
      </tr>
      <tr v-for="(d, index) in data">
        <td>{{ index }}</td>
        <td>{{ d.file_id }}</td>
        <td>{{ d.file_name }}</td>
        <td>{{ d.file_type }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ApiService from '../apis/api-services'
  import Header from "../components/Header";
    export default {
        name: "Dropbox",
      components: {Header},
      data(){
        return{
          data: null,
        }
      },
      methods: {
        dropbox_data: function () {
          ApiService.drive_data('dropbox')
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
        this.dropbox_data();
      },
    }
</script>

<style scoped>

</style>
