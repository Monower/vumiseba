export interface IFaqApi {
  status_code: number
  status: boolean
  message: string
  error: string
  data: IFaq[]
}

export interface IFaq {
  id: number
  category_name: string
  question: string
  answer: string
  answer_image: any
  status: number
}