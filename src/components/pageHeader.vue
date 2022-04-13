<template>
    <div>
        <v-app-bar color="blue accent-4" dense dark >
            <v-btn v-for="(link,i) in menu"  :key="i" :to="'/'+link" class="mr-3" small>
                {{link}}
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return{
            menu:[
                "customers",
                "products",
                "orders",
                "reports"
            ]
        }       
    },
}
</script>