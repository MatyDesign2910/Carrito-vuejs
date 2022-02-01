<template>
  <div class="container is-fluid pt-5">
    <div class="searcher">
      <input
        v-model="searchQuery"
        class="input is-small mr-4"
        type="text"
        placeholder="Buscar producto"
      />
    </div>
    <template v-for="productItem in productItems" :key="productItem.id">
      <div class="tile is-ancestor" v-if="productItems.length">
        <div
          :class="'categoria-' + productItem.category.id"
          class="tile is-parent"
          v-for="productItem in filteredResources"
          :key="productItem.id"
        >
          <ProductListItem :productItem="productItem" />
        </div>
      </div>
    </template>
    <nav class="pagination is-small" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Anterior</a>
      <a class="pagination-next">Siguiente</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Product_List_Item from "./Product_List_Item";
export default {
  el: "#app",
  name: "ProductList",
  components: {
    ProductListItem: Product_List_Item,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    addClase: function() {
      $('.categoria-1').hide();
    }
  },
  computed: {
    filteredResources() {
      if (this.searchQuery) {
        return this.productItems.filter((productItem) => {
          return productItem.title.startsWith(this.searchQuery);
        });
      } else {
        return this.productItems;
      }
    },
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
};
</script>

<style scoped>
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
</style>