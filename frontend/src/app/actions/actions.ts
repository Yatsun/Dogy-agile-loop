"use server";

export async function inferenceCopilot(input: string) {
  const URL = "https://dogy-synapse-copilot.azurewebsites.net/chat/completions";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "synapse-copilot",
        message: input,
      }),
    });
    if (response.ok) {
      console.log("Response for Copilot Success!");
      const result = await response.json();
      return result;
    }
  } catch (error: any) {
    console.error("Error:", error);
    return { error: error.message };
  }
}
