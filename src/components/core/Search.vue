<template>
    <div>
        <input class="input is-small mr-4" type="text" placeholder="Buscar producto" v-model="query" v-on:input="$emit('query-change', query)">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
    </div>
</template>

<script>

export default {
  name: "Search",
  data() {
      return {
          query: ''
      }
  }
}

</script>
