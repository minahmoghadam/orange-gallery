import { User } from "./user";
import { Photo, PhotoLinks, PreviewPhoto } from "./photo";

export interface Collection{
    cover_photo: Photo,
    curated: boolean,
    description: string,
    featured: boolean,
    id: number,
    links: PhotoLinks,
    preview_photos: PreviewPhoto[],
    private: boolean,
    published_at: string,
    share_key: string,
    tags: Tag[],
    title: string,
    total_photos: number,
    updated_at: string,
    user: User
}
export interface Tag{
    title: string
}