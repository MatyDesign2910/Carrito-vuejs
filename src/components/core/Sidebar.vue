<template>
  <aside class="menu">
    <p class="menu-label">Categorías</p>
    <ul class="menu-list">
      <li><a class="a-1" v-for="name, i in stuff" v-on:click="current = i; addClase();" :class="{current:i == current}">{{name}}</a></li>
    </ul>
  </aside>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  el: "#app",
  name: "Navbar",
  data() {
    return {
      searchQuery: "",
    	current:0,
      stuff:['Categoría 1','Categoría 2']
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

<style>
.categoria-2.d-none,
.categoria-1.d-none {
  display: none !important;
}
</style>