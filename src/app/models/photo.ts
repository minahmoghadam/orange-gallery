import { User } from "./user"

export interface Photo {
    categories: object,
    color: string,
    created_at: string,
    current_user_collections: object,
    description: string,
    height: number,
    id: string,
    liked_by_user: boolean,
    likes: number,
    links: PhotoLinks,
    slug: string,
    sponsored: boolean,
    sponsored_by: string,
    updated_at: string,
    urls: PhotoUrls,
    user: User,
    width: number
}

export interface PhotoUrls {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
}

export interface PhotoLinks {
    download: string,
    download_location: string,
    html: string,
    self: string,
}

export interface PreviewPhoto {
    id: number,
    urls: PhotoUrls
}
export interface SearchResult {
	results: Photo[],
	total: number,
	total_pages: number
}