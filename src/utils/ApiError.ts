export interface ApiErrorType {
    status: number;
    success: boolean;
    message: string;
    stack?: string; // Optional
    errors: unknown[];  // Replace `any` with the specific type if known
}

class ApiError extends Error implements ApiErrorType {
    status: number;
    success: boolean;
    errors: unknown[];
    message: string;
    stack?: string | undefined;

    constructor (
        status: number,
        message: string = "Something went wrong",
        success: boolean = false,
        stack: string =  "",
        errors: unknown[] = []

    ) {
        super(message);
        this.status = status;
        this.success = success;
        this.message = message;
        this.errors = errors;
        
        if(stack) {
            this.stack = stack;
        }else {
            Error.captureStackTrace(this, this.constructor)
        }
    }

}

export default ApiError;