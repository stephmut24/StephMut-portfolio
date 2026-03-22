/**
 * Base API client for backend requests.
 * Ready for JSON, file uploads (FormData), and standard REST calls.
 */

import { env } from "@/config/env";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * Build full URL for API request
 * @param {string} path - API path (e.g. "/projects", "/upload")
 * @returns {string}
 */
function buildUrl(path) {
  const base = (env.apiUrl ?? "").replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Generic fetch wrapper with error handling
 * @param {string} path - API path
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<Response>}
 */
async function request(path, options = {}) {
  const baseUrl = env.apiUrl?.trim();
  if (!baseUrl) {
    throw new Error(
      "Backend API not configured. Add VITE_API_URL to your .env file (see .env.example)"
    );
  }

  const url = buildUrl(path);
  const config = {
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const message = response.statusText || `Error ${response.status}`;
    let body;
    try {
      body = await response.json().catch(() => null);
    } catch {
      body = null;
    }
    const err = new Error(body?.message ?? message);
    err.status = response.status;
    err.body = body;
    throw err;
  }

  return response;
}

/**
 * GET request
 */
export async function get(path, options = {}) {
  const res = await request(path, { ...options, method: "GET" });
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

/**
 * POST request (JSON body)
 */
export async function post(path, data, options = {}) {
  const res = await request(path, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
  });
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

/**
 * PUT request (JSON body)
 */
export async function put(path, data, options = {}) {
  const res = await request(path, {
    ...options,
    method: "PUT",
    body: JSON.stringify(data),
  });
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

/**
 * PATCH request (JSON body)
 */
export async function patch(path, data, options = {}) {
  const res = await request(path, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(data),
  });
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

/**
 * DELETE request
 */
export async function del(path, options = {}) {
  const res = await request(path, { ...options, method: "DELETE" });
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

/**
 * Upload file(s) via FormData. Use when backend expects multipart/form-data.
 * @param {string} path - API path (e.g. "/upload", "/projects/1/media")
 * @param {FormData} formData - FormData with file(s) and optional fields
 * @param {RequestInit} options - Additional fetch options
 * @returns {Promise<Response>}
 */
export async function upload(path, formData, options = {}) {
  const baseUrl = env.apiUrl?.trim();
  if (!baseUrl) {
    throw new Error(
      "Backend API not configured. Add VITE_API_URL to your .env file (see .env.example)"
    );
  }
  const url = buildUrl(path);

  const config = {
    ...options,
    method: options.method ?? "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      ...options.headers,
      // Do NOT set Content-Type; browser sets it with boundary for FormData
    },
  };
  if (config.headers["Content-Type"]) {
    delete config.headers["Content-Type"];
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const message = response.statusText || `Error ${response.status}`;
    let body;
    try {
      body = await response.json().catch(() => null);
    } catch {
      body = null;
    }
    const err = new Error(body?.message ?? message);
    err.status = response.status;
    err.body = body;
    throw err;
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }
  return response.text();
}
