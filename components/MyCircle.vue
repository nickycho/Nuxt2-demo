<template>
    <div>
        <van-circle
            v-model="currentRate"
            :rate="rate"
            layer-color="#bbedf0"
            text="Custom Color"
        />
    </div>
</template>

<script>
export default {
    props: {
        myRate: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return { 
            rate: this.myRate,
            currentRate: 0,
        };
    },
};

</script>