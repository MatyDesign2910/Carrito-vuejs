<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="productItem.image_tag" class="img-carrito" alt="Placeholder image">
            </figure>
        </div>
      <div class="card-content">
        <div class="content">
          <h4>{{ productItem.title }}</h4>
          <p class="mt-4">
            <!--{{ productItem.description }}-->
          </p>
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-6">{{ productItem.owner }}</p>
            <p class="subtitle is-7">{{ productItem.email }}</p>
          </div>
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>$ {{ productItem.price }}</strong>
            </a>
          </div>
          <a
            class="button is-rounded is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong><i class="fa fa-2x fa-shopping-cart"></i></strong>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>