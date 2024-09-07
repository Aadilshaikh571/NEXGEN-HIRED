import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = supabaseClient(token);

  let query = supabase.from("jobs").select(`
      *,
      company:companies(name, logo_url)   // Fetch related company data (name, logo_url)
      saved:saved_jobs(_id)                // Fetch related saved_jobs data (id)
    `);

  // Apply filters if they exist
  if (location) {
    query = query.eq("location", location);
  }
  if (company_id) {
    query = query.eq("company_id", company_id);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`); // Partial match for job title
  }

  try {
    const response = await query;
    console.log("Supabase response:", response); // Log the entire response
    if (response.error) {
      console.error("Error occurred while fetching jobs:", response.error);
      return null;
    }
    return response.data;
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}

// , company:companies(name,logo),saved:saved_jobs(id)

export async function savedJob(token, { alreadySaved }, savedData) {
  const supabase = supabaseClient(token);

  if (alreadySaved) {
    // Remove the job if it's already saved
    const { data, error } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", savedData.job_id)
      .eq("user_id", savedData.user_id);

    if (error) {
      console.error("Error removing saved job:", error.message);
      return null;
    }

    return data;
  } else {
    // Add the job if it's not saved yet
    const { data, error } = await supabase.from("saved_jobs").insert([
      {
        user_id: savedData.user_id,
        job_id: savedData.job_id,
      },
    ]);

    if (error) {
      console.error("Error saving job:", error.message);
      return null;
    }

    return data;
  }
}

export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url),applications:applications(*)")
    .eq("id",job_id)
    .single();

  if (error) {
    console.error("Error fetching compnay", error);
    return null;
  }
  return data;
}

export async function updateHiringStatus(token, {job_id}, isOpen) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .update({ isOpen })
    .eq("id",job_id)
    .select();
    

  if (error) {
    console.error("Error Updating Hiring Status:", error);
    return null;
  }

  return data;
}

// - post job
export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .insert([jobData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error Creating Job");
  }

  return data;
}
// get my created jobs
export async function getMyJobs(token, { recruiter_id }) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("jobs")
    .select("*, company: companies(name,logo_url)")
    .eq("recruiter_id", recruiter_id);

  if (error) {
    console.error("Error fetching Jobs:", error);
    return null;
  }

  return data;
}

// Delete job
export async function deleteJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error: deleteError } = await supabase
    .from("jobs")
    .delete()
    .eq("id", job_id)
    .select();

  if (deleteError) {
    console.error("Error deleting job:", deleteError);
    return data;
  }

  return data;
}