import http from '@/utils/http-common'

export default {
  login(username, password) {
    return http.post('/login/', {'email': username, 'password': password})
      .then(response => {
        return response.data
      })
  },
  registration(first_name,last_name,email, password) {
    return http.post('/registration/', JSON.stringify({'first_name':first_name,'last_name':last_name,'email': email, 'password': password}))
      .then(response => {
        return response.data
      })
  },
  user_list() {
    return http.get('/user-list/')
      .then(response => {
        return response.data
      })
  },
  useravailibility(email) {
    return http.post('/user-availibility/', JSON.stringify({'email': email}))
      .then(response => {
        return response.data
      })
  },
  connect_google_drive(){
    return http.get('/googledrive/')
      .then(response => {
        return response.data
      })
  },
  connect_onedrive(){
    return http.get('/onedrive_home/')
      .then(response => {
        return response.data
      })
  },
  connect_dropbox(){
    return http.get('/dropbox_home/')
      .then(response => {
        return response.data
      })
  },
  connect_box(){
  return http.get('/box_home/')
    .then(response => {
      return response.data
    })
  },
  drive_data_box(){
    return http.get('/box_return_url/')
      .then(response => {
        return response.data
      })
  },
}
