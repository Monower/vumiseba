export interface ISingleUserApiResponse {
  status_code: number
  status: boolean
  message: string
  error:string
  data: IUser[]
}

export interface IUser {
  id: number
  name: string
  phone: string
  email: string
  nid: string
  dob: string
  profile_image: string
  general_info: string
  district_id: any
  gender: string
  status: number
  address: string
  type: string
  is_nid_verified: number
  is_email_verified: number
  is_phone_verified: number
  years_of_experience: string
  current_profession: string
  nid_front: string
  nid_back: string
  code: string
  rates: number
  approval: number
  approved_by: number
  schedule: string
  active_status: number
  terms_conditions: number
  otp_code: number
  created_at: string
  updated_at: string
  academics: Academic[]
  experiances: Experiance[]
  services: Service[]
  totalRating: number
  consultationCount: number
}

export interface Academic {
  id: number
  education_level: string
  institute_name: string
  passing_year: string
  certification_copy: string
  created_at: string
  updated_at: string
}

export interface Experiance {
  id: number
  institute_name: string
  address: any
  designation: string
  department: string
  start_date: string
  end_date: string
  current_working: any
  created_at: string
  updated_at: string
}

export interface Service {
  id: number
  title: string
  description: string
  status: number
  remark: string
  updated_at: string
}
