export interface ApiResponse<T>{
    success:boolean,
    message:string,
    statusCode:number
    data : T | null;
}

export const successResponse = <T>(data: T, message:string): ApiResponse<T> => ({
  success: true,
  message,
  data,
  statusCode: 200
});