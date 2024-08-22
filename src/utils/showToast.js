import { toast } from "react-hot-toast";

export const showSuccess = (m) => {
  toast.success(m);
};

export const showError = (m) => {
  toast.error(m);
};
