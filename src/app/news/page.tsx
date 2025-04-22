import { getNews } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import NewsList from "@/components/NewsSection/NewsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Page | Free Next.js Template for Startup and SaaS",
  description: "This is News Page for Startup Nextjs Template",
};

const NewsPage = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { page?: string; year?: string; search?: string };
}>) => {
  const searchParams = await params;

  const currentPage = Number(searchParams.page) || 1;
  const searchQuery = searchParams.search || "";
  const yearParam = searchParams.year || "";
  const filterYear = yearParam ? Number(yearParam) : undefined;

  const news = await getNews(
    {
      pageSize: 10,
      pageNumber: currentPage,
      isActive: true,
      title: searchQuery,
      year: filterYear,
    },
    {
      cache: "no-store",
    },
  );

  return (
    <>
      <BreadcrumbWithBgImg
        pageName="News"
        description="Keep up with our latest projects, innovations, and milestones."
        image="/images/banner/contactUs.png"
      />
      <NewsList
        newsData={news.data}
        currentPage={currentPage}
        totalCount={news.totalCount}
        searchQuery={searchQuery}
        filterYear={yearParam}
      />
    </>
  );
};

export default NewsPage;
