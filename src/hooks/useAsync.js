import { useState, useCallback } from "react";

/**
 * Hook for async operations with loading/error state.
 * Use with API calls, file uploads, etc.
 *
 * @example
 * const { run, isLoading, error, data } = useAsync();
 * const handleSubmit = () => run(uploadService.uploadFiles(files));
 */
export function useAsync() {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  const run = useCallback(async (promise) => {
    if (!(promise instanceof Promise)) {
      promise = Promise.resolve(promise);
    }
    setState({ isLoading: true, error: null, data: null });
    try {
      const data = await promise;
      setState({ isLoading: false, error: null, data });
      return data;
    } catch (error) {
      setState({
        isLoading: false,
        error: error?.message ?? "An error occurred",
        data: null,
      });
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ isLoading: false, error: null, data: null });
  }, []);

  return {
    ...state,
    run,
    reset,
  };
}
