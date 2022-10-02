<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        app
    >
        <v-list-item
        color="primary"
        title="Dashboard"
        style="font-size: 2rem;
        margin-left: 10px;"
        nav
        >
        <template v-slot:append>
            <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
            ></v-btn>
        </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/" active-class="active" class="links">
            <v-list-item 
              prepend-icon="mdi-home" 
              title="Dashboard" 
              value="Dashboard" 
              class="lists"></v-list-item>
        </router-link>
        <router-link to="/employees" active-class="active" class="links">
        <v-list-item 
            prepend-icon="mdi-account-group-outline" 
            title="Employees" 
            value="Enployees" 
            class="lists"></v-list-item>
          </router-link>
        </v-list>
    </v-navigation-drawer>
  </template>
  <script>
    export default {
        name: "Side_Navbar",
      data () {
        return {
          drawer: true,
          items: [
            { title: 'Dashboard', icon: 'mdi-home' },
            { title: 'Employees', icon: 'mdi-account-group-outline'},
            { title: "Projects", icon: 'mdi-link-variant-minus'},
            { title: "Setting", icon: "mdi-hammer-wrench"}
          ],
          rail: false,
        }
      }
    }
  </script>
  <style scoped>
    .lists{
        margin: 1rem 0;
        font-size: 1.1rem;
        list-style: none;
    }
    .links{
      text-decoration: none;
      color: inherit;
    }
    a.router-link-active{
      font-weight: bold;
      background-color: rgba(255, 255, 255, 0.09);
      border-left: 4px solid #ff5602;
      color: #cfcfcf;
    }
  </style>