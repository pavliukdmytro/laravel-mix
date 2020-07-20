<template>
    <div class="somesome">
        Success! <br>
        <div v-if="obData.some">{{obData.some}}</div>
        <!--test: {{ test }} <br>-->
        <!--
        some1: {{ some1 }} <br>
        some2: {{ some2 }} <br>
        <span>test1 = {{ test }}</span>
        <br>
        test2 = {{ some }}<br>
        some1 = {{ some1 }} <br>
        -->
    </div>
</template>
<script>
    export default {
        name: "demo",
        selector: '.demo',
        props: ['result'],
        data: function() {
            let ob = {};
            if (this.result) {
                ob.obData = this.result;
            } else if (App && App.debug) {
                ob.obData = this.getDemoData();
            } else {
                ob.obData = {};
            }
            return ob;
        },
        watch: {},
        mounted: function () {},
        created: function() {},
        methods: {
            getDemoData: function () {
                return {};
            },
        },
    }
</script>
<style lang="scss" scoped>
    .somesome {
        background-color: #82d796;
        span {
            color: red;
        }
    }
</style>
