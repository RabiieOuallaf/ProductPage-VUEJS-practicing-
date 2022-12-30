app.component("product-display", {

    props: {
        cart: {
            type: Number,
            required : true
            
        }
    },

    template: 
        `<div class="product-display">
        <div class="product-container">

            <div class="product-image">

                <img v-bind:src="Image" alt="sock image"> <!-- This a shor hand for v-bind wich is simply the : -->
            
            </div>

            <div class="product-info">
                <h1>{{ Title }}</h1>
                <p v-if="Inventory > 10">In stock</p>
                <p v-else-if="Inventory <= 10 && Inventory > 0">Almost sould out !</p>
                <p v-else>Out of stock</p>
                <p v-show="OnSale">On sale</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                    <li
                        class="color-circle" 
                        :style="{ backgroundColor:variant.color }" 
                        v-for="(variant, index) in variants"
                        :key="variant.id" 
                        @mouseover="updateVariant(index)"
                        :disabled="!inStock"
                        
                    
                    >{{}}</li>
                </ul>
                <button class="button" v-on:click="addToCart" :class="{disabledButton : !InStock}">Add to cart</button>
                <button class="button" v-on:click="removeFromToCart" :class="{disabledButton : !InStock}">remove from cart</button>
            </div>

        </div>
    </div>

    
    `,
   
    data() {
        return {
            Product: 'Colorfull socks',
            Brand: 'YouSocks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [

                { id: 123, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50, onSale: true },
                { id:456, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0, onSale: false}
                
            ],
            Inventory: 20,
    
        }
    },
    methods: {
        addToCart() {

            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)

        },
        removeFromToCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        
    },
    computed: {

        Title() {
            return this.Brand + ' ' + this.Product;
        },
        Image() {

            return this.variants[this.selectedVariant].image;
        },
        InStock() {

            return this.variants[this.selectedVariant].quantity;

        },
        
    }
});

