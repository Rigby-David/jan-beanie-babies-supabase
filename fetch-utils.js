const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanieBabies(theme) {
    let query = client.from('beanie_babies').select('*').limit(100);

    if (theme) {
        query = query.eq('theme', theme);
    }

    const response = await query;

    return response;
}

export async function getBeanieThemes() {
    let query = client.from('beanie_baby_themes').select('*');

    const response = await query;

    return response;
}
