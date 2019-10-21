<template>
    <header class="home-header">
        <div class="logo">
            <img src="../imgs/logo.png" alt="">
            <span> 喜 地</span>
        </div>
        <div class="search">
            <i class="el-icon-search"></i>
            逛世界
        </div>
    </header>
</template>



<style>
.home-header {
  box-sizing: border-box;
  padding: 0 1.25rem;
  height: 4.166667rem;
  background-color: #fff;
  position: fixed;
  z-index: 995;
  top: 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.logo {
  display: inline-block;
  line-height: 4.166667rem;
  height: 100%;
  font-size: 2.333333rem;
  color: #333;
}
.logo img {
  vertical-align: middle;
}
.search {
  width: 7.5rem;
  position: absolute;
  right: 0.83333rem;
  top: 0.83333rem;
  height: 2.33333rem;
  border-radius: 0.33333rem;
  background-color: #f3f3f3;
  line-height: 2.5rem;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 0.83333rem;
  color: #c5c5c5;
  font-size: 1.16667rem;
  text-align: left;
}
.section{
    margin-top: 4.166667rem;
}
</style>
