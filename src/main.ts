import { createApp } from 'vue'
import App from './App.vue'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import DateInput from './components/DateInput.vue'
import FileInput from './components/FileInput.vue'
import Checkbox from './components/Checkbox.vue';
import Select from './components/Select.vue';
import router from './router'

import './style.css'
import './bootstrap.css'
let app = createApp(App)
app.component('Button', Button)
app.component('Input',Input)
app.component('DateInput',DateInput)
app.component('FileInput',FileInput)
app.component('Checkbox', Checkbox)
app.component('Select', Select)
app.use(createVuestic())
app.use(router)
app.mount('#app')
