<template>
    <v-app-bar
    color="primary"
    density="compact"
    style="box-shadow:none">
        <v-app-bar-title>
            <em>Staff Management</em>
        </v-app-bar-title>

        <v-spacer></v-spacer>
        <v-btn>
            <v-icon icon="mdi-magnify"></v-icon>
        </v-btn>
        <v-btn> <v-icon icon="mdi-account-circle" style="font-size:1.5rem"></v-icon></v-btn>
        <v-btn @click="toggleTheme"><v-icon icon="mdi-white-balance-sunny"></v-icon></v-btn>
    </v-app-bar>
</template>

<script>
    import { useTheme } from 'vuetify/lib/framework.mjs';
    export default({
        name: 'Top_Bar',
        setup(){
            const theme = useTheme()
            return {
                theme,
                toggleTheme: ()=> theme.global.name.value=
                theme.global.current.value.dark ? "light" : "dark"
            }
        }
    })
</script>