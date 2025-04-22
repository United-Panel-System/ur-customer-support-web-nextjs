export interface ApiResponse<T = any> {
  succeeded: boolean;
  message: string | null;
  errors: string[] | null;
  data: T;
}

export interface PagedResponse<T = any> {
  succeeded: boolean;
  message: string | null;
  errors: string[] | null;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  data: T;
}
