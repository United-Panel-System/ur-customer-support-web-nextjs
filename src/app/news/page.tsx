import { getNews } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import NewsList from "@/components/NewsSection/NewsList";
import { BASE_URL } from "@/lib/seo/config";
import { getPaginatedNewsSchema } from "@/lib/seo/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay informed with the latest company news, project highlights, press releases, and industry updates from United Panel System (M) Sdn. Bhd.",
};

const NewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const searchQuery = params.search || "";
  const yearParam = params.year || "";
  const filterYear = yearParam ? Number(yearParam) : undefined;

  const news = await getNews(
    {
      pageSize: 9,
      pageNumber: currentPage,
      isActive: true,
      title: searchQuery,
      year: filterYear,
    },
    // {
    //   cache: "no-store",
    // },
  );

  const schema = getPaginatedNewsSchema(news.data, currentPage);
  const canonicalUrl = `${BASE_URL}/news${currentPage > 1 ? `?page=${currentPage}` : ""}`;
  const prevUrl =
    currentPage > 1 ? `${BASE_URL}/news?page=${currentPage - 1}` : null;
  const nextUrl =
    currentPage < news.totalCount
      ? `${BASE_URL}/news?page=${currentPage + 1}`
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />
      <link rel="canonical" href={canonicalUrl} />
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
      <BreadcrumbWithBgImg
        pageName="News"
        description="Keep up with our latest projects, innovations, and milestones."
        image="/images/banner/contactUs.png"
      />
      <NewsList
        newsData={news.data}
        currentPage={currentPage}
        pageSize={news.pageSize}
        totalCount={news.totalCount}
        searchQuery={searchQuery}
        filterYear={yearParam}
      />
    </>
  );
};

export default NewsPage;
