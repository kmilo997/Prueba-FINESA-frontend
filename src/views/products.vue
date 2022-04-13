<template>
    <div>
        <v-container>
        <v-dialog v-model="modal" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Producto
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-layout row wrap mb-3 pt-3>
                            <v-flex xs12>
                                <v-text-field v-model="product.sku" :rules="required"  label="SKU"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="product.name" :rules="required"  label="Nombre.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="product.value" type="number" :rules="required"  label="Valor.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="product.quantity_available" type="number" :rules="required"  label="Cantidad disponible.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="product.url_image"  label="URL Imagen.."></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-autocomplete :rules="required" v-model="product.id_state" item-text="name" item-value="id" :items="states" label="Estado.."></v-autocomplete>
                            </v-flex>
                        </v-layout>
                    </v-form> 
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  color="red"  class="white--text" @click="closeModal()" >
                        Cerrar
                    </v-btn>
                    <v-btn color="success"  @click="product.id == null ? saveProduct() : modifyProduct()" >
                        {{product.id == null ? 'Guardar' : 'Actualizar'}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Productos</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap :justify-space-between="true">
            <v-flex xs12 md9>
                <v-text-field @keyup.enter="getProducts()" v-model="searcher" label="Buscar..."></v-text-field>
            </v-flex>
            <v-flex xs12 md1 class="mt-3">
                 <v-btn color="primary"  block @click="getProducts()">
                        <v-icon>
                            search
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 md1 class="mt-3 ">
                 <v-btn color="success" block @click="addProduct()">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 class="card-flex mt-3" v-if="loading == true">
                <v-progress-linear color="success" indeterminate rounded height="6"></v-progress-linear>
            </v-flex>
            <v-flex xs12 v-else>
                <v-data-table :headers="headers" :items="products" class="elevation-1">
                    <template v-slot:item.action="{ item }">
                        <v-layout row warp>
                            <v-flex>
                                <v-btn fab x-small color="orange" class="white--text" @click="updateProduct(item)">
                                    <v-icon>
                                        mdi-pencil
                                    </v-icon>
                                </v-btn>
                                <v-btn fab x-small color="red"  class="white--text" @click="removeProduct(item)">
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
            products:[],
            states:[],
            product:{
                id:null,
                name:null,
                value:null,
                url_image:null,
                id_state:null,
                quantity_available:0
            },
            headers: [
                { text: '', value: 'action' },
                { text: 'SKU', value: 'sku' },
                { text: 'Nombre', value: 'name' },
                { text: 'Valor', value: 'value' },
                { text: 'Cantidad Disp.', value: 'quantity_available' },
                { text: 'Imagen', value: 'url_image' },
                { text: 'Estado', value: 'name_state' },
            ],
            required: [
                v => !!v || 'Este campo es requerido' 
            ],   
            loading:false,
            searcher:"",
            // url_api:"http://localhost:8000/api/products"
            url_api: "https://app-prueba-finesa-backend.herokuapp.com/api/products"
        }       
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        addProduct(){
            this.modal = true
            this.resetProduct()
        },
        closeModal(){
            this.modal = false
            this.resetProduct()
        },
        resetProduct(){
            this.product.id = null
            this.product.name =null
            this.product.id_state = null
            this.product.value = null
            this.product.quantity_available = 0
        },
        async getProducts(){
            this.loading = true;
            await this.axios.get(this.url_api,{
            params: {
                search:this.searcher
            }
            }).then((res)=>{
                this.products = res.data.products
                this.states = res.data.states
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err,"error");
            })
        },
        async saveProduct(){
            this.loading = true;
            if(!this.$refs.form.validate())
            {
                this.loading = false;
                return false;
            }
            await this.axios.post(this.url_api, this.product).then((res)=>{
                this.getProducts();
                this.closeModal();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");        
            })   
        },
        updateProduct(item){
            this.product.id = item.id
            this.product.sku = item.sku
            this.product.name = item.name
            this.product.value = item.value
            this.product.url_image = item.url_image
            this.product.id_state = item.id_state
            this.product.quantity_available = item.quantity_available
            this.modal = true;
        },
        async modifyProduct(){
            this.loading = true;
            if(!this.$refs.form.validate())
            {
                this.loading = false;
                return false;
            }
            await this.axios.put(this.url_api+'/'+this.product.id, this.product).then((res)=>{
                this.closeModal();
                this.getProducts();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");   
            })
        },
        async removeProduct(item){
            this.loading = true;
            await this.axios.delete(this.url_api+'/'+ item.id).then((res)=>{
                this.getProducts();
                this.$swal("Correcto",res.data,"success"); 
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");              
            })
        },
    }
}
</script>