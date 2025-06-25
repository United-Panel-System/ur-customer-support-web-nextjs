import slugify from "slugify";
import { News } from "@/types/news";
import {
    BASE_URL,
    COMPANY_NAME,
    COMPANY_LOGO,
    COMPANY_PHONE,
    COMPANY_LANGUAGES,
    COMPANY_SOCIAL,
    PRODUCT_BRAND
} from "./config";
import { Products } from "@/types/products";
import { Projects } from "@/types/projects";

export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
    logo: COMPANY_LOGO,
    sameAs: COMPANY_SOCIAL,
    potentialAction: [
        {
            "@type": "ViewAction",
            target: `${BASE_URL}/products`,
            name: "Products"
        },
        {
            "@type": "ViewAction",
            target: `${BASE_URL}/projects`,
            name: "Projects"
        },
        {
            "@type": "ViewAction",
            target: `${BASE_URL}/news`,
            name: "News"
        },
        {
            "@type": "CommunicateAction",
            target: `${BASE_URL}/contact`,
            name: "Contact Us"
        }
    ]
});

export const getContactSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    url: `${BASE_URL}/contact`,
    logo: COMPANY_LOGO,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY_PHONE,
        contactType: "Customer Service",
        areaServed: "MY",
        availableLanguage: COMPANY_LANGUAGES
    },
    potentialAction: [
        {
            "@type": "CommunicateAction",
            target: `${BASE_URL}/contact`,
            name: "Contact Us"
        },
        {
            "@type": "QuoteAction",
            target: `${BASE_URL}/contact#enquiry`,
            name: "Get a Quote"
        }
    ]
});

export const getPaginatedNewsSchema = (newsList: News[], currentPage: number) => {
    const url = `${BASE_URL}/news${currentPage > 1 ? `?page=${currentPage}` : ""}`;

    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `News${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
        url,
        hasPart: newsList.map(news => ({
            "@type": "NewsArticle",
            headline: news.title,
            url: `${BASE_URL}/news/${slugify(news.title, { lower: true })}-${news.id}`,
            datePublished: news.date
        }))
    };
};

export const getNewsSchema = (newsData: News) => {
    const url = `${BASE_URL}/news/${slugify(newsData.title, { lower: true })}-${newsData.id}`;

    return {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: newsData.title,
        image: newsData.imageUrls,
        datePublished: newsData.date,
        dateModified: newsData.date,
        author: {
            "@type": "Person",
            name: COMPANY_NAME
        },
        description: newsData.description,
        url,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        }
    };
};

export const getPaginatedProductSchema = (productList: Products[], currentPage: number) => {
    const url = `${BASE_URL}/products${currentPage > 1 ? `?page=${currentPage}` : ""}`;

    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Products${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
        url,
        hasPart: productList.map(product => ({
            "@type": "Product",
            name: product.name,
            url: `${BASE_URL}/products/${slugify(product.name, { lower: true })}-${product.id}`,
            image: product.imageUrls?.[0],
            brand: {
                "@type": "Brand",
                name: PRODUCT_BRAND
            }
        }))
    };
};

export const getProductSchema = (product: Products) => {
    const url = `${BASE_URL}/products/${slugify(product.name, { lower: true })}-${product.id}`;

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.imageUrls,
        description: product.description,
        url,
        brand: {
            "@type": "Brand",
            name: PRODUCT_BRAND
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "MYR",
            url
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        }
    };
};

export const getProjectListSchema = (projects: Projects[]) => {
    const url = `${BASE_URL}/projects`;
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Projects`,
        url,
        hasPart: projects.map(project => ({
            "@type": "CreativeWork",
            name: project.name,
            url: `${BASE_URL}/projects/${slugify(project.name, { lower: true })}-${project.id}`,
            image: project.imageUrls?.[0],
            creator: {
                "@type": "Organization",
                name: COMPANY_NAME
            },
            datePublished: project.date
        }))
    };
};


export const getProjectSchema = (project: Projects) => {
    const url = `${BASE_URL}/projects/${slugify(project.name, { lower: true })}-${project.id}`;

    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        image: project.imageUrls,
        url,
        description: project.description,
        creator: {
            "@type": "Organization",
            name: COMPANY_NAME
        },
        datePublished: project.date,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        }
    };
};