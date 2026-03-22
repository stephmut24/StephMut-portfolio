/**
 * Centralized environment configuration.
 * All env vars used by the app should be defined here.
 */

export const env = {
  /** Base URL for API requests. Add backend URL when ready. */
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  /** Whether we're in development */
  isDev: import.meta.env.DEV,
  /** Whether we're in production */
  isProd: import.meta.env.PROD,
  /** EmailJS (contact form) */
  emailJs: {
    serviceId: import.meta.env.VITE_SERVICE_ID ?? "",
    templateId: import.meta.env.VITE_TEMPLATE_ID ?? "",
    publicKey: import.meta.env.VITE_PUBLIC_KEY ?? "",
  },
};

/** Check if backend API is configured */
export const isApiConfigured = () => Boolean(env.apiUrl?.trim());
