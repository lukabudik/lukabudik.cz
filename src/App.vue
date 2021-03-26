<template>
  <router-view />
</template>
<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background-color: rgba(37, 78, 216, 1);

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 5px;
}
</style>