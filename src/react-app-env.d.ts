/// <reference types="react-scripts" />

export interface ServerResponse {
  success: boolean,
  page: number,
  total_pages: number,
  count: number,
  links: Links,
  users: User[],
}

export interface Links {
  next_url: string | null,
  prev_url: string | null,
}

export interface Positions {
  id: number;
  name: string;
}

export interface User {
  id: string,
  name: string,
  email: string,
  phone: string,
  position: string,
  position_id: string,
  registration_timestamp: number,
  photo: string,
}

export interface PostUser {
  name: string,
  email: string,
  phone: string,
  position_id: number,
}
