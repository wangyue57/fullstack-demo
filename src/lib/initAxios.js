import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('demo-token')
