<template>
  <div>
    <Header></Header>
    <h3>Box</h3>
    <p>get respective user box data.</p>
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
          fetch_box_data: function () {
            ApiService.drive_data('box')
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
          this.fetch_box_data();
        },

      }
</script>

<style scoped>

</style>
