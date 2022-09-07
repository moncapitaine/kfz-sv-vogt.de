<script lang='ts'>
  import { page } from '$app/stores'
  export let href = '/'
  export let title = 'Title'
</script>

<a class="border-transparent border-2" class:active={$page.url.pathname === href} href={href}>{title}</a>

<style>
  .active {
    border-bottom: solid 2px red;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-duration: 2s;
  }
</style>