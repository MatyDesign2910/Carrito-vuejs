<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <img
        class="float-left m-4"
        width="180"
        src="data:image/png;base64,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"
        alt=""
      />
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!--<router-link to="/inventory" class="button is-primary">
              <strong> Productos</strong>
            </router-link>-->
            <div id="modal-js-example" class="modal">
                <div class="modal-background"></div>

                <div class="modal-content">
                    <div class="box">
                    <h2 class="title">Carrito de compras</h2>
                    <CarList />
                    </div>
                </div>

                <button class="modal-close is-large" aria-label="close"></button>
            </div>
            <button class="js-modal-trigger button is-warning" data-target="modal-js-example">
                <i class="fa fa-2x fa-shopping-cart mr-1"></i>
                <span> {{ cartQuantity }}</span>
            </button>
            <!--<router-link to="/cart" class="button is-warning">
              <div class="cart--header has-text-centered">
                <i class="fa fa-2x fa-shopping-cart"></i>
                <span> {{ cartQuantity }}</span>
              </div>
            </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import CarList from '../cart/Cart_List.vue';
import Search from './Search.vue';
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: {
    CarList,
    Search,
  },
  computed: {
    ...mapGetters(["cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    querySearch(query) {
      if (query.trim() === "") {
        this.copyTodo = [...this.todo];
      } else {
        const temp = this.todo.filter(todo =>{
          return todo.title.includes(query);
        });
        this.copyTodo = [...temp];
      }
    },
  }
};
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
</script>

<style scoped>
    div#modal-js-example .modal-content {
        width: 800px !important;
        max-width: 90% !important;
        top: 0px !important;
        right: 0px !important;
        position: fixed;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
    }
    div#modal-js-example .modal-background {
        background: transparent !important;
    }
    .delete::before, .modal-close::before, .delete::after, .modal-close::after {
        background-color: #363636 !important;
    }
    li.cart-item .box {
      box-shadow: none !important;
  }
</style>