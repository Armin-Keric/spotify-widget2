import { createApp } from 'vue'
import App from './App.vue'
import {getAlbum} from "@/utils/utils.ts";
import {getSongName} from "@/utils/utils.ts";
import {ref} from "vue";


const app = createApp(App);

//app.use();
//app.component('Card', );


createApp(App).mount('#app')


