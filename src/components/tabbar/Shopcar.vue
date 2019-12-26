<template>
    <div>
        Shopcar
    </div>
</template>

<script>
export default {
    name : "Shopcar",
    data () {
            return {
      msg: 'Welcome to Your Vue.js App'
    }
    },
    beforeCreate () {
        console.log("Shopcar beforeCreate");
    },
    created() {
        console.log("Shopcar created");
    },
    beforeMount() {
        console.log("Shopcar beforeMount");
    },
    mounted() {
        console.log("Shopcar mounted");
    },
    beforeUpdate() {
        console.log("Shopcar beforeUpdate");
    },
    updated() {
        console.log("Shopcar updated");
    },
    beforeDestroy() {
        console.log("Shopcar beforeDestroy");
    },
    destroyed() {
        console.log("Shopcar destroyed");
    },
}
</script>