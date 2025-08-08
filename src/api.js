const API = process.env.REACT_APP_API_BASE || '';

export async function createLead(data) {
  const response = await fetch(`${API}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit lead');
  }

  return response.json();
}

export { API };
