<template>
    <b-navbar toggleable="md" type="light" variant="light">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand target="_self" href="https://crypto-studio.net/">
            <b-icon-house></b-icon-house>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/create-token/" :active="page === 'Generator'">Crypto Studio</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="bg-gray-700">
                <!--    <b-nav-item to="/" :active="page === 'Home'">Home</b-nav-item>  -->
                <b-nav-item to="/docs/" :active="page === 'Docs'">Docs</b-nav-item>
            <!--    <b-nav-item target="_blank" href="https://crypto-studio.net/">Blog</b-nav-item>  
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      page: {
        type: String,
        default: null,
      },
    },
  };
</script>
