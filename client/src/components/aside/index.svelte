<script>
  import { onMount } from "svelte";

  onMount(async () => {
    let { data: tasks, error } = await supabase.from("tasks").select("*");
    tasks = data;
    console.table(tasks);
  });
</script>

<section>
  <h1>Tasks</h1>
</section>
