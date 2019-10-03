<template>
  <div>
  <Header></Header>
  <h3>GoogleDrive</h3>
  <p>get respective user googledrive data.</p>
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
    export default {
      name: "GoogleDrive",
      comments: {},
      data() {
        return {
          data: null,
        }
      },
      methods: {
        google_drive_data: function () {
          ApiService.drive_data('googledrive')
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
        this.google_drive_data();
      }
    }
</script>

<style scoped>

</style>
