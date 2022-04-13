<template>
    <v-app id="inspire"  class="app" > 
        <div>
            <pageHeader/>
            <div class="mt-3">
                <router-view></router-view>
            </div>
        </div>
    </v-app>
</template>

<script>
import pageHeader from './components/pageHeader.vue'

export default {
    components: { 
        pageHeader
    },
}
</script>