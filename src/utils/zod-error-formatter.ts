import { ZodFormattedError } from "zod";

// Flatten and format the error messages
export const getFormattedZodErrors = <T>(error: ZodFormattedError<T>) => {
  const errors = Object.values(error)
    .map((err) =>
      Array.isArray(err) ? err.join(", ") : err?._errors.join(", ")
    )
    .join(", ");
  
  return errors;
};
