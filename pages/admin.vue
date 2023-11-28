<template>
    <div>
        Admin Page
    </div>
</template>

<script>
export default {
    layout: 'default',
    middleware: 'admin',

    head() {
        return {
            title: 'Admin'
        }
    },
}

</script>