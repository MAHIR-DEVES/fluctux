interface ApiResponseType {
    status: number;
    message: string;
    data: unknown;
    success: boolean;
}

class ApiResponse implements ApiResponseType {

    status: number;
    message: string;
    data: unknown;
    success: boolean;

    constructor(
        status: number,
        message: string,
        data: unknown,
        success: boolean = true
    ){
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = success;
    }
}

export default ApiResponse;