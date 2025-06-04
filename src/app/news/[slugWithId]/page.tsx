import { getNews, getNewsById } from "@/api/api";
import BreadcrumbWithBgImg from "@/components/Common/BreadcrumbWithBgImg";
import NewsDetails from "@/components/NewsSection/NewsDetails";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slugWithId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slugWithId } = await params;
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "Invalid News ID",
    };
  }

  const news = await getNewsById(Number(id));

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${news.data.title} | United Panel-System (M) Sdn. Bhd.`,
    description: news.data.description,
    openGraph: {
      images: [news.data.imageUrls[0], ...previousImages],
    },
  };
}

const NewsDetailsPage = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slugWithId?: string };
}>) => {
  const { slugWithId } = await params;

  // Extract the numeric ID at the end
  const id = slugWithId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return <div>Invalid News ID</div>;
  }

  const news = await getNewsById(Number(id));
  const allNews = await getNews(
    {
      pageSize: 4,
      pageNumber: 1,
      isActive: true,
    },
    { cache: "no-store" },
  );

  // Filter out the current detail news
  const moreNews = allNews.data
    .filter((news) => news.id !== Number(id))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbWithBgImg
        pageName={news.data.title}
        description=""
        image="/images/banner/contactUs.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: `${news.data.title}` },
        ]}
      />
      <NewsDetails news={news.data} moreNews={moreNews} />
    </>
  );
};

export default NewsDetailsPage;
