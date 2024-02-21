export interface IServiceRoot {
  status_code: number
  status: boolean
  message: string,
  error:string,
  data: IServiceData
}

export interface IServiceData {
  totalConsultant: number
  offset: string
  limit: string
  list: IUser[]
}

export interface IUser {
  id: number
  name: string
  active_status: number
  phone: string
  email: string
  address: string
  code: string
  type: string
  district_id?: number
  profile_image: string
  gender: string
  rates: number
  totalRating: number
  years_of_experience: string
  schedule: string
  experiance_latest: ExperianceLatest[]
  academic_latest: AcademicLatest[]
  service_latest: ServiceLatest[]
  service_list: ServiceList[]
  consultationCount: number
  current_profession: any
}

export interface ExperianceLatest {
  institute_name: string
}

export interface AcademicLatest {
  education_level: string
}

export interface ServiceLatest {
  title: string
  id: number
}

export interface ServiceList {
  id: number
  title: string
  description: string
  status: number
  service_image: string
  remark: string
  updated_at: string
}
