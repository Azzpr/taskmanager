<script>
  import Navbar from "../components/navbar/index.svelte";
  import Aside from "../components/aside/index.svelte";
  import "../app.css";
</script>

<Navbar />
<div class="flex w-full">
  <div class="w-1/6"><Aside /></div>
  <div class="w-5/6"><slot /></div>
</div>
