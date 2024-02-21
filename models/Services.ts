export interface IServices {
    status_code: number,
    status: boolean,
    message: string,
    error: string,
    data: ISList[]
  }
  
  export interface ISList {
    id: number
    title: string
    description: string
    status: number
    service_image?: string
    remark: string
    updated_at: string
  }