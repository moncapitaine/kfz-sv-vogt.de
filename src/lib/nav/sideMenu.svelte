<script>
  export let open = false;
</script>

<style>
  #container {
      position: absolute;
      height: 100vh;
      overflow: hidden;
  }
  
  #menu {
      text-align: left;
  }

</style>

<div id="container" class="z-40 bg-slate-100 text-slate-700 w-48 right-0 top-0" class:hidden={!open} style="transition: opacity 1s ease-in-out">
  <div id="menu" class="gap-4 p-4 pt-12 flex flex-col">
      <slot></slot>
  </div>
</div>