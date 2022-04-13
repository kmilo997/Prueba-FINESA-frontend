<template>
    <div>
        <v-container>
        <v-dialog v-model="modal" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Cliente
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-layout row wrap mb-3 pt-3>
                            <v-flex xs12>
                                <v-text-field v-model="customer.cc" :rules="required"  label="CC.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="customer.email" :rules="emailRules"  label="E-mail.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="customer.name" :rules="required"  label="Nombre.."></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-form> 
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  color="red"  class="white--text" @click="closeModal()" >
                        Cerrar
                    </v-btn>
                    <v-btn color="success"  @click="customer.id == null ? saveCustomer() : modifyCustomer()" >
                        {{customer.id == null ? 'Guardar' : 'Actualizar'}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Clientes</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap :justify-space-between="true">
            <v-flex xs12 md9>
                <v-text-field @keyup.enter="getCustomers()" v-model="searcher" label="Buscar..."></v-text-field>
            </v-flex>
            <v-flex xs12 md1 class="mt-3">
                 <v-btn color="primary"  block @click="getCustomers()">
                        <v-icon>
                            search
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 md1 class="mt-3 ">
                 <v-btn color="success" block @click="addCustomer()">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 class="card-flex mt-3" v-if="loading == true">
                <v-progress-linear color="success" indeterminate rounded height="6"></v-progress-linear>
            </v-flex>
            <v-flex xs12 v-else>
                <v-data-table :headers="headers" :items="customers" class="elevation-1">
                    <template v-slot:item.action="{ item }">
                        <v-layout row warp>
                            <v-flex>
                                <v-btn fab x-small color="orange" class="white--text" @click="updateCustomer(item)">
                                    <v-icon>
                                        mdi-pencil
                                    </v-icon>
                                </v-btn>
                                <v-btn fab x-small color="red"  class="white--text" @click="removeCustomer(item)">
                                    <v-icon>
                                        remove
                                    </v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </template>
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
            modal:false,
            customers:[],
            customer:{
                id:null,
                cc:null,
                name:null,
                email:null
            },
            headers: [
                { text: '', value: 'action' },
                { text: 'CC', value: 'cc' },
                { text: 'Nombre', value: 'name' },
                { text: 'E-mail', value: 'email' }                
            ],
            required: [
                v => !!v || 'Este campo es requerido' 
            ],   
            emailRules: [ 
                v => !!v || 'Este campo es requerido',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese un correo valido'
            ],
            loading:false,
            searcher:"",
            //url_api:"http://localhost:8000/api/customers"
            url_api: "https://app-prueba-finesa-backend.herokuapp.com/api/customers"
        }       
    },
    mounted(){
        this.getCustomers()
    },
    methods:{
        addCustomer(){
            this.modal = true
            this.resetCustomer()
        },
        closeModal(){
            this.modal = false
            this.resetCustomer()
        },
        resetCustomer(){
            this.customer.id = null
            this.customer.cc =null
            this.customer.name = null
            this.customer.email = null
        },
        async getCustomers(){
            this.loading = true;
            await this.axios.get(this.url_api,{
            params: {
                search:this.searcher
            }
            }).then((res)=>{
                this.customers = res.data.customers
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err.response.data,"error");
            })
        },
        async saveCustomer(){
            this.loading = true;
            if(!this.$refs.form.validate())
            {
                this.loading = false;
                return false;
            }
            await this.axios.post(this.url_api, this.customer).then((res)=>{
                this.getCustomers();
                this.closeModal();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err.response.data,"error");       
            })   
        },
        updateCustomer(item){
            this.customer.id = item.id
            this.customer.cc = item.cc
            this.customer.email = item.email
            this.customer.name = item.name            
            this.modal = true;
        },
        async modifyCustomer(){
            this.loading = true;
            if(!this.$refs.form.validate())
            {
                this.loading = false;
                return false;
            }
            await this.axios.put(this.url_api+'/'+this.customer.id, this.customer).then((res)=>{
                this.closeModal();
                this.getCustomers();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err.response.data,"error");
            })
        },
        async removeCustomer(item){
            this.loading = true;
            await this.axios.delete(this.url_api+'/'+ item.id).then((res)=>{
                this.getCustomers();
                this.$swal("Correcto",res.data,"success"); 
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err.response.data,"error");           
            })
        },
    }
}
</script>