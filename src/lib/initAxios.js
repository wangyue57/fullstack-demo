import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios
axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('demo-token')
