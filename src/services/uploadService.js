/**
 * Upload service - ready for backend integration.
 * Call this when you add an upload feature (e.g. project images, CV, media).
 */

import { upload } from "@/api";
import { API } from "@/api";
import { isApiConfigured } from "@/config/env";

/**
 * Upload one or more files to the backend.
 * @param {File|File[]} files - File(s) to upload
 * @param {Record<string, string>} [extraFields] - Optional form fields (e.g. { projectId: "1" })
 * @returns {Promise<any>} - Server response
 */
export async function uploadFiles(files, extraFields = {}) {
  if (!isApiConfigured()) {
    throw new Error("Backend not configured. Set VITE_API_URL in .env");
  }

  const formData = new FormData();
  const fileList = Array.isArray(files) ? files : [files];

  fileList.forEach((file) => {
    if (file instanceof File) {
      formData.append("files", file);
    }
  });

  Object.entries(extraFields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return upload(API.UPLOAD, formData);
}

/**
 * Upload media (images, documents) for a specific context.
 * @param {File} file - File to upload
 * @param {string} [context] - e.g. "project", "avatar", "cv"
 */
export async function uploadMedia(file, context = "general") {
  if (!isApiConfigured()) {
    throw new Error("Backend not configured. Set VITE_API_URL in .env");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("context", context);

  return upload(API.UPLOAD_MEDIA, formData);
}
