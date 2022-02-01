<template>
  <div id="cart">
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Añade productos al carrito
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
    <button :disabled="!cartItems.length" class="button is-info">
      Ir a pagar (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
    </button>

 <button class="button is-danger is-outlined" @click="removeAllCartItems">
    <span>Eliminar todo</span>
    <span class="icon is-small">
      <i class="fa fa-times"></i>
    </span>
  </button>
       </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Cart_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  }
};
</script>