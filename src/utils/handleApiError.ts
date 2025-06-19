import { isAxiosError } from 'axios';

const GENERIC_ERROR = 'No response from server.';
const UNKNOWN_ERROR = 'An unexpected error occurred.';

export const handleApiError = (error: Error): string => {
  if (isAxiosError(error)) {
    if (error.response) {
      return error.response.data?.message || `Error ${error.response.status}`;
    } else if (error.request) {
      return GENERIC_ERROR;
    } else {
      return error.message;
    }
  }
  return UNKNOWN_ERROR;
};