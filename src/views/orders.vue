<template>
    <div>
        <v-container>
        <v-dialog v-model="modal" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Carrito
                </v-card-title>
                <v-card-text>
                    <v-form ref="formCart" lazy-validation>
                        <v-layout row wrap mb-3 pt-3>
                            <v-flex xs12>
                                <v-autocomplete :disabled="cart.id != null ? true:false" :rules="required" v-model="cart.id_customer" item-text="name" item-value="id" :items="customers" label="Cliente.."></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 mb-4 v-if="cart.id == null">
                                <v-card elevation="3">
                                        <v-card-text>
                                            <v-form ref="formProduct" lazy-validation>
                                                <v-layout>
                                                    <v-flex xs6 mr-4>
                                                        <v-autocomplete :rules="required" v-model="product.id" autocomplete="off" item-text="name" item-value="id" :items="products" label="Producto.."></v-autocomplete>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-autocomplete :rules="required" v-model="product.quantity"  :items="renderMaxQuantity" label="Cantidad"></v-autocomplete>
                                                    </v-flex>
                                                    <v-flex xs1 mt-2 ml-3>
                                                        <v-btn fab small color="primary" block @click="addProduct()"> 
                                                            <v-icon> mdi-plus</v-icon>
                                                        </v-btn>    
                                                    </v-flex>
                                                </v-layout>
                                            </v-form>
                                        </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-data-table :headers="headersCart" :items="cart.products" class="elevation-1">
                                    <template v-slot:item.action="{ item }">
                                        <v-layout row warp>
                                            <v-flex>
                                                <v-btn v-if="cart.id == null" fab x-small color="red"  class="white--text" @click="removeProduct(item)">
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
                    </v-form> 
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  color="red"  class="white--text" @click="closeModal()" >
                        Cerrar
                    </v-btn>
                    <v-btn color="success" v-if="cart.id == null"  @click="saveCart()" >
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Ordenes</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap :justify-space-between="true">
            <v-flex xs12 md9>
                <v-text-field @keyup.enter="getOrders()" v-model="searcher" label="Buscar..."></v-text-field>
            </v-flex>
            <v-flex xs12 md1 class="mt-3">
                 <v-btn color="primary" block @click="getOrders()">
                        <v-icon>
                            search
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 md1 class="mt-3 ">
                 <v-btn color="success" block @click="addCart()">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 class="card-flex mt-3" v-if="loading == true">
                <v-progress-linear color="success" indeterminate rounded height="6"></v-progress-linear>
            </v-flex>
            <v-flex xs12 v-else>
                <v-data-table :headers="headers" :items="orders" class="elevation-1">
                    <template v-slot:item.action="{ item }">
                        <v-layout row wrap>
                            <v-flex>
                                <v-btn fab x-small color="blue" class="white--text" @click="showOrder(item)">
                                    <v-icon>
                                        mdi-eye
                                    </v-icon>
                                </v-btn>
                                <v-btn fab x-small color="red"  class="white--text" @click="removeOrder(item)">
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
            orders:[],
            products:[],
            customers:[],
            cart:{
                id:null,
                id_customer:null,
                products:[],
                id_state:3
            },
            product:{
                id:null,
                name:null,
                quantity:null
            },
            headers: [
                { text: '', value: 'action' },
                { text: '#Order', value: 'id' },
                { text: 'Customer', value: 'name_customer' },
                { text: 'Estado', value: 'name_state' }
            ],
            headersCart: [
                { text: '', value: 'action' },
                { text: 'Producto', value: 'name' },
                { text: 'Cantidad', value: 'quantity' }
            ],
            required: [
                v => !!v || 'Este campo es requerido' 
            ],   
            loading:false,
            searcher:"",
            //url_api:"http://localhost:8000/api/cart"
            url_api: "https://app-prueba-finesa-backend.herokuapp.com/api/cart"
        }       
    },
    mounted(){
        this.getOrders()
    },
    computed:{
        renderMaxQuantity()
        {
            let idProduct = this.product.id
            if(idProduct)
            {
                let product = this.products.filter(x => x.id == idProduct)[0]
                let quantityMax = []
                for (let index = 1; index <= product.quantity_available; index++) {
                    quantityMax.push(index);
                }
                return quantityMax;
            }
            
            return [];
        }
    },
    methods:{
        addCart(){
            this.modal = true
            this.resetCart()
        },
        addProduct(){
            if(!this.$refs.formProduct.validate())
            {
                return false;
            }
            let product = this.products.filter(x => x.id == this.product.id)[0]
            let index = this.products.findIndex(x => x.id == this.product.id)
            this.products[index].quantity_available = this.products[index].quantity_available - this.product.quantity

            let newProduct = {}
            newProduct.quantity = this.product.quantity
            newProduct.id = product.id
            newProduct.name = product.name

            let productExists = this.cart.products.filter(x => x.id == newProduct.id).length > 0 ? true : false

            if(!productExists)
            {
                this.cart.products.push(newProduct)
            }
            else
            {
                let index = this.cart.products.findIndex(x => x.id == this.product.id)
                this.cart.products[index].quantity = this.cart.products[index].quantity + newProduct.quantity
            }

            this.product.id = null
            this.product.quantity = null
        },
        closeModal(){
            this.modal = false

            this.resetCart()
        },
        resetCart(){
            this.product.id = null
            this.product.name =null
            this.product.id_state = null
            this.product.value = null
        },
        async getOrders(){
            this.loading = true;
            await this.axios.get(this.url_api,{
            params: {
                search:this.searcher
            }
            }).then((res)=>{
                this.products = res.data.products
                this.orders = res.data.orders
                this.customers = res.data.customers
                this.loading = false;
            }).catch((err) =>{
                this.loading = false;
                this.$swal("Error",err,"error");
            })
        },
        async saveCart(){
            this.loading = true;
            if(!this.$refs.formCart.validate())
            {
                this.loading = false;
                return false;
            }
            if(this.cart.products.length <= 0)
            {
                this.$swal("Error","Ingrese minimo un producto","error"); 
                return false;
            }
            await this.axios.post(this.url_api, this.cart).then((res)=>{
                this.getOrders();
                this.closeModal();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");        
            })   
        },
        async showOrder(item){
            await this.axios.get(this.url_api+'/'+item.id).then((res)=>{
                this.cart.id = res.data.order[0].id
                this.cart.id_state = res.data.order[0].id_state
                this.cart.id_customer = res.data.order[0].id_customer
                this.cart.products = res.data.products
                this.modal = true
            }).catch((err) =>{
                this.$swal("Error",err.response.data,"error");
            })
        },
        async modifyCart(){
            this.loading = true;
            if(!this.$refs.formCart.validate())
            {
                this.loading = false;
                return false;
            }
            await this.axios.put(this.url_api+'/'+this.product.id, this.product).then((res)=>{
                this.closeModal();
                this.getOrders();
                this.$swal("Correcto",res.data,"success");
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");   
            })
        },
        async removeOrder(item){
            this.loading = true;
            await this.axios.delete(this.url_api+'/'+ item.id).then((res)=>{
                this.getOrders();
                this.$swal("Correcto",res.data,"success"); 
                this.loading = false;
            }).catch((err) =>{
                this.$swal("Error",err,"error");              
            })
        },
        removeProduct(item){
            let indexInProducts = this.products.findIndex(x => x.id == item.id)
            this.products[indexInProducts].quantity_available += item.quantity
            
            let indexInCart = this.cart.products.findIndex(x => x.id == item.id)
            this.cart.products.splice(indexInCart, 1); 
        },
    }
}
</script>