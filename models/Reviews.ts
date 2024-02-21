export interface Root {
  status_code: number
  status: boolean
  message: string
  error: string
  data: Data
}

export interface Data {
  offset: string
  limit: string
  totalCitizenRating: number
  list: List[]
}

export interface List {
  citizen_name: string
  id: number
  profile_image?: string
  case_id: number
  citizen_id: number
  rating: number
  status: number
  citizen_review_comment: any
  created_at: string
}
