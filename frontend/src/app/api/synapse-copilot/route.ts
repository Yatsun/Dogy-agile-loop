export async function inferenceCopilot(input: string) {
  const URL = "https://dogy-synapse-copilot.azurewebsites.net/chat/completions";

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
  return response.json();
}
