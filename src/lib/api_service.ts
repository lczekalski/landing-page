import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { headers } from "next/headers"

class ApiService {
  private axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
  })

  public async get<T>(url: string): Promise<T> {
    const config = {
      headers: {
        "x-api-key": process.env.X_API_KEY,
        "Content-Type": "application/json",
      },
    }
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, config)
    return response.data
  }

  public async post<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config)
    return response.data
  }

  public async put<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config)
    return response.data
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config)
    return response.data
  }
}

export default new ApiService()
