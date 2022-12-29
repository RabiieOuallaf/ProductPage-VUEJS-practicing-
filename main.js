const app = Vue.createApp({
    data() {
        return {
            Product: 'Socks',
            Image: './assets/images/socks_blue.jpg',
            InStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [

                { id: 123, color: "green", image: "./assets/images/socks_green.jpg" },
                { id:456, color: "blue", image: "./assets/images/socks_blue.jpg"  }
                
            ],
            cart: 0
    
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        changeImage(variantImage) {
            this.Image = variantImage
        }
    }
})