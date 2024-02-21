import axios from 'axios';
import { API_URL, Review_Limit } from '@/config/index';

const api = axios.create({
   baseURL: API_URL
});

export const fetchUsers = async (queryString) => {

   try {
      var res_data = await api.get(`/api/frontend/common/consultation?${queryString}`);
      return res_data;
   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }
};

export const getAllConsultants = async (queryString) => {

   try {
      var res_data = await api.get(`${queryString}`);
      return res_data;
   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }
};



export const fetchFaqs = async () => {

   try {
      var res_data = await api.get(`/api/frontend/common/frequentlyAskedQuestion/all`);
      return res_data;
   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }

};

export const fetchServices = async () => {

   try {
      var res_data = await api.get(`/api/frontend/common/serviceList`);
      return res_data;
   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }

};



export const fetchSingleUser = async (query) => {

   try {
      var res_data = await api.get(`api/frontend/common/consultant/${query.slug}/details`);

      return res_data;
   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }
};





export const fetchReview = async (query, offset) => {
   try {

      var res_data = await api.get(`api/frontend/common/reviewList/${query}`);
      return res_data;

   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }

};



export const userQuestionSubmit = async (data) => {
   try {

      var res_data = await api.post(`/api/frontend/common/store/general/question`, data);
      return res_data;

   }
   catch (e) {
      return {
         data: {
            error: '404'
         }
      };
   }

};


export const fetchPortalHomeStat =async () => {
   try {
      let responseData = await api.get(`api/frontend/common/homePage/counting`);
      return responseData;
   } catch (error) {
      return {
         data: {
            error: '404'
         }
      }
   }
};

export const fetchPortalRating =async () => {
   try {
      let responseData = await api.get(`api/frontend/common/rating`);
      return responseData?.data;
   } catch (error) {
      return {
         data: {
            error: '404'
         }
      }
   }
}


