<script>
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supaBaseclient";
  let tasks = [];
  onMount(async () => {
    let { data, error } = await supabase.from("tasks").select("*");
    tasks = data;
  });
</script>

<section class="border-r-2 h-screen w-full flex flex-col items-center relative">
  <h1 class="">Tasks</h1>
  {#if tasks}
    <h1>You have tasks</h1>
    {#each tasks as task}
      <a href="/task/{task.id}">
        <h1>hey {task.title}</h1>
      </a>
    {/each}
  {:else}
    <h1>There are no tasks</h1>
  {/if}
</section>
