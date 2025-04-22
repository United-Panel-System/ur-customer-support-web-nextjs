import { SortByOption } from "@/lib/enum/sortByOption";
import { ApiResponse, PagedResponse } from "@/types/apiResponse";
import { News } from "@/types/news";
import { Products } from "@/types/products";
import { Projects } from "@/types/projects";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000/api/v1";

/** Generic fetcher */
async function fetcher<TResponse>(
  url: string,
  options?: RequestInit,
): Promise<TResponse> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/** Build query string from object */
function toQueryString(params: Record<string, any>): string {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
}

/** Get Product Category */
export async function getProductCategory(options?: RequestInit) {
  const url = `${API_BASE_URL}/productCategory`;
  return fetcher(url, options);
}

/** Get Product List */
export async function getProducts(
  params: {
    pageNumber?: number;
    pageSize?: number;
    name?: string;
    productCategoryId?: number;
    manufacturer?: string;
    isActive?: boolean;
    sortBy?: SortByOption;
  },
  options?: RequestInit,
) {
  const query = toQueryString(params);
  const url = `${API_BASE_URL}/product${query ? `?${query}` : ""}`;
  return fetcher<PagedResponse<Products[]>>(url, options);
}

/** Get Product by ID */
export async function getProductById(id: string, options?: RequestInit) {
  const url = `${API_BASE_URL}/product/${id}`;
  return fetcher<ApiResponse<Products>>(url, options);
}

/** Get Project List */
export async function getProjects(
  params: {
    pageNumber?: number;
    pageSize?: number;
    name?: string;
    isActive?: boolean;
    isAdmin?: boolean;
  },
  options?: RequestInit,
) {
  const query = toQueryString(params);
  const url = `${API_BASE_URL}/project${query ? `?${query}` : ""}`;
  return fetcher<PagedResponse<Projects[]>>(url, { method: "GET", ...options });
}

/** Get News List */
export async function getNews(
  params: {
    pageNumber?: number;
    pageSize?: number;
    title?: string;
    year?: number;
    isActive?: boolean;
  },
  options?: RequestInit,
) {
  const query = toQueryString(params);
  const url = `${API_BASE_URL}/news${query ? `?${query}` : ""}`;
  return fetcher<PagedResponse<News[]>>(url, options);
}

/** Get News by ID */
export async function getNewsById(id: number, options?: RequestInit) {
  const url = `${API_BASE_URL}/news/${id}`;
  return fetcher<ApiResponse<News>>(url, options);
}

/** Add Enquiry */
export async function addEnquiry(
  body: {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    type: number;
    message: string;
  },
  options?: RequestInit,
) {
  const url = `${API_BASE_URL}/enquiry`;
  return fetcher(url, {
    method: "POST",
    body: JSON.stringify(body),
    ...options,
  });
}
