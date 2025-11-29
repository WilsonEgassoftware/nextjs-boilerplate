import { createClient } from "@/app/utils/supabase/server";

export async function GET(): Promise<Response> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Product").select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
