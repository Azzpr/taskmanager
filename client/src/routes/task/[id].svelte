<script>
  import { page } from "$app/stores";
  let slug = $page.params.id;

  import { onMount } from "svelte";
  import { supabase } from "../../lib/supaBaseclient";
  let task = [];

  onMount(async () => {
    let { data, error } = await supabase.from("tasks").select(`*`);
    task = data[slug - 1];
  });
</script>

<h1>{task.title}</h1>
