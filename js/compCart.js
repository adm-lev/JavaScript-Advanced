'use strict';

Vue.component('cart', {
    props: ['cart-items', 'img', 'visibility'],
    template:`  <div class="cart-block" v-show="showCart">
                    <p v-if="!cartItems.length">Cart is empty</p>
                    <div class="cart-item" v-for="item of cartItems" :key="item.id_product">
                        <div class="product-bio">
                            <img :src="imgCart" alt="Some img">
                            <div class="product-desc">
                            <div class="product-title">{{ item.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ item.quantity }}</div>
                            <div class="product-single-price">$ {{ item.price }} each</div>
                        </div>
                </div>
                        <div class="right-block">
                        <div class="product-price">{{item.quantity*item.price}}</div>
                        <button class="del-btn" @click="remove(item)">&times;</button>
                        </div>
                    </div>
                </div>`
})