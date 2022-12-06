import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface IUser {
    name: string;
    email: string;
    status: string; //'ACT' | 'INA' | 'BLQ';
    password?: string;
    oldPasswords?: string[];
    created: Date;
    updated: Date;
    avatar?: string;
    failedAttempts? : number;
    lastLogin?: Date;
    roles: string[];
    lastBMI:string;
    lastWeight:string;
    lastAge:string;
    lastHeight:string;
    lastChecked:Date;
    _id?: unknown;
  }
  export interface ISetUserBMI {
    edad:string,
    estatura:string,
    peso:string,
    IMC:string
  }
  


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/users`,
    prepareHeaders: (headers, {getState}) => {
      headers.set("apikey", process.env.REACT_APP_API_KEY as string);
      const token = (getState() as RootState).sec.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    setBMI:builder.mutation({
        query: (body:ISetUserBMI)=>{
            return {
              url: "setBMI",
              method: "POST",
              body,
              
            }
          },  
          invalidatesTags: ["Users"]


    }
    ),
    getBmi:builder.query({
        query:()=>'getBmi',
        providesTags: ['Users'],
    })
   
  })
});

export const {useGetBmiQuery,useSetBMIMutation } = userApi;
