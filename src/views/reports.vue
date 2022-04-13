<template>
    <div>
        <v-container>
            
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Reportes</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap >
            <v-flex xs4 mr-4>
                <v-menu v-model="modalPicker1" :close-on-content-click="false"  transition="scale-transition"  offset-y   min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="dateStart"
                        label="Fecha Inicial"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="dateStart" @input="modalPicker1 = false"
                    ></v-date-picker>
                </v-menu>
            </v-flex>
            <v-flex xs4>
                <v-menu v-model="modalPicker2" :close-on-content-click="false"  transition="scale-transition"  offset-y   min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="dateEnd"
                        label="Fecha Final"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="dateEnd" @input="modalPicker2 = false"
                    ></v-date-picker>
                </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs1>
                <v-btn color="primary" block @click="getItemsOrders()">
                    <v-icon>
                        search
                    </v-icon>
                </v-btn>
            </v-flex>
            
            <v-flex xs12 class="card-flex mt-3" v-if="loading == true">
                <v-progress-linear color="success" indeterminate rounded height="6"></v-progress-linear>
            </v-flex>
            <v-flex xs12 v-else>
                <v-data-table :headers="headers" :items="items_order" class="elevation-1">
                </v-data-table>
            </v-flex>
        </v-layout>   
    </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return{
            modalPicker1:false,
            modalPicker2:false,
            dateStart:null,
            dateEnd:null,
            items_order:[],
            headers: [
                { text: '#Order', value: 'id' },
                { text: 'Nombre', value: 'name_product' },
                { text: 'Valor', value: 'value_product' },
                { text: 'Cantidad', value: 'quantity' },
                { text: 'Fecha/hora', value: 'date_create' },
                { text: 'Total', value: 'total' },
            ],
            loading:false,
            //url_api:"http://localhost:8000/api/reports",
            url_api: "https://app-prueba-finesa-backend.herokuapp.com/api/reports"
        }       
    },
    mounted(){
        this.getItemsOrders()
    },
    methods:{
        async getItemsOrders(){
            this.loading = true;
            await this.axios.get(this.url_api,{
            params: {
                dateStart:this.dateStart,
                dateEnd:this.dateEnd
            }
            }).then((res)=>{
                this.items_order = res.data.items_order
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err,"error");
            })
        }
    }
}
</script>