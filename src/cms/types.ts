
export interface ImageData {
    basename: string;
    url: string;
    width: number;
    height: number;
}

export interface Information {
    id: string
    title: string
    description: string
}

export interface FeaturedProject {
    id: string
    title: string
    order: number
    thumbnail: ImageData
    alias: string
}

export interface Project_Preview {
    order: number
    location: string
    prjType: string
    id: string
    alias: string
    title: string
    year: string
    thumbnail: ImageData
    description: string
}

export interface Project {
    alias: string
    area: string
    description: string
    galery: ImageData[]
    id: string
    levels: string
    location: string
    order: number
    prjType: string
    title: string
    year: string
    youtubeId: string
}

export interface HomeData {
    quote: string
    quoteAuthor: string
    image: ImageData
    featuredProject: FeaturedProject[];
    information: Information[]
    service: Information[]
}