<template>
    <div class="backPageTop showFixedModule" style="opacity: 1;" @click="backtop()">
        <div class="icon-box iconTop">
            <i class="icon el-icon-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        backtop(){
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style>
.showFixedModule {
    bottom: 6.66667rem;
}
.backPageTop {
    background-color: transparent;
    width: 5rem;
    height: 5rem;
    right: 0;
    bottom: 6rem;
    z-index: 900;
    opacity: 0;
}
.backPageTop .iconTop {
    right: 1.25rem;
    bottom: 0;
}
.backPageTop, .iconCart {
    transition: .6s;
    position: fixed;
}

</style>

