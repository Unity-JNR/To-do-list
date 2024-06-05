<template>
    <div>
        <footer>
            &copy; Unity Demas {{ date() }}
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        date() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style>
    /* Add your styles here if needed */
    footer{
        padding-top: 99px;
        color: #000;
    }
</style>