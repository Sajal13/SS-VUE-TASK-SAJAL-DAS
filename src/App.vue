<template>
  <v-app id="inspire">
    <Top_Bar/>
    <Side_NavBar />
    <v-main style="background: #f5f5f540">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Side_NavBar from "@/components/NavBar/Side_NavBar.vue";
import Top_Bar from './components/NavBar/Top_Bar.vue';


export default {
  name: 'App',
  components:{
    Side_NavBar,
    Top_Bar
  }
}
</script>
