const app = Vue.createApp({
    data() {
        return {
            Product: 'Colorfull socks',
            Brand: 'YouSocks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [

                { id: 123, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
                { id:456, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0}
                
            ],
            Inventory: 20,
            cart: 0
    
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
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

        }
    }
})