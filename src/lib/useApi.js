const API_BASE =
  process.env.NODE_ENV === 'development'
    ? ''
    : process.env.REACT_APP_API_BASE || '';

export default async function useApi(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  let data;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const error = new Error(data?.message || 'API Error');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}
