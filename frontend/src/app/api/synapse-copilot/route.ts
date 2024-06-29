export async function inferenceCopilot(
    input: string
){
const response = await fetch('https://dogy-synapse-copilot.azurewebsites.net/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'synapse-copilot',
      message: input ,
    }),
  });
  return response.json();
}
