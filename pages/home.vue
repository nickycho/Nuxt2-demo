<template>
    <div>test</div>
</template>

<script>
export default {
    layout: 'default',
    middleware: 'auth',

    head() {
        return {
            title: 'Home'
        }
    },
}
</script>