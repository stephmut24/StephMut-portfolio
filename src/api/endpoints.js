/**
 * API endpoints constants.
 * Centralize all backend routes here for consistency.
 */

export const API = {
  /** Base paths - extend as backend grows */
  UPLOAD: "/upload",
  UPLOAD_MEDIA: "/media/upload",
  PROJECTS: "/projects",
  PROJECT_BY_ID: (id) => `/projects/${id}`,
};
