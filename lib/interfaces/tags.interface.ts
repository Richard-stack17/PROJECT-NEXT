// Generated by https://quicktype.io

export interface TagResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  description: string;
  image_url: null;
  created_at: string;
  updated_at: string;
}