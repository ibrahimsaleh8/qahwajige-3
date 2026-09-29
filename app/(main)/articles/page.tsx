import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export type ArticlesDataType = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

export type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: ArticlesDataType[];
    count: number;
  };
};
export const metadata: Metadata = {
  title: "مدونة الضيافة | مقالات وأخبار القهوة العربية والمناسبات",
  description:
    "استكشف مجموعة من المقالات المتخصصة في الضيافة، القهوة العربية، تنظيم المناسبات، وأحدث الاتجاهات والنصائح التي تساعدك على تقديم تجربة ضيافة راقية.",
  alternates: {
    canonical: `${currentURL}/articles`,
  },
  openGraph: {
    title: "مدونة الضيافة | مقالات وأخبار القهوة العربية والمناسبات",
    description:
      "استكشف مجموعة من المقالات المتخصصة في الضيافة، القهوة العربية، تنظيم المناسبات، وأحدث الاتجاهات والنصائح التي تساعدك على تقديم تجربة ضيافة راقية.",
    url: `${currentURL}/articles`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة الضيافة | مقالات وأخبار القهوة العربية والمناسبات",
    description:
      "استكشف مجموعة من المقالات المتخصصة في الضيافة، القهوة العربية، تنظيم المناسبات، وأحدث الاتجاهات والنصائح التي تساعدك على تقديم تجربة ضيافة راقية.",
  },
};
export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles/category/خدمات-الضيافة`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;

  return (
    <section id="articles" className="py-10 min-h-[60vh] pt-25">
      <div className="px-4 md:px-6 lg:px-8 container mx-auto text-white">
        {/* Header */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--main-color-dark)" }}>
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            العودة للرئيسية
          </Link>
          <div className="text-center">
            <h1
              className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-6"
              style={{ color: "var(--main-color)" }}>
              خدمات الضيافة
            </h1>
            <p className="text-base leading-relaxed max-w-xl mx-auto">
              مقالات ونصائح حول آداب الضيافة العربية وفنون تقديم القهوة.{" "}
            </p>
          </div>
        </div>

        {articles.length === 0 ? (
          <div
            className="text-center py-16 rounded-2xl"
            style={{
              backgroundColor: "var(--card-background)",
              border: "1px solid var(--border-warm)",
            }}>
            <p
              className="text-base"
              style={{ color: "var(--main-color-dark)" }}>
              لا توجد مقالات متاحة حالياً.
            </p>
          </div>
        ) : (
          <div className="grid sm:gap-6 gap-2 grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                href={`/${article.title.split(" ").join("-")}`}
                key={article.id}
                className="group flex flex-col sm:rounded-2xl rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 4px 20px rgba(44,24,16,0.06)",
                }}>
                {article.coverImage && (
                  <div className="relative w-full md:aspect-4/3 aspect-3/2 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 sm:p-6 p-2 pb-3 sm:pb-2">
                  <h2
                    className="font-black text-sm sm:text-lg mb-3 line-clamp-2"
                    style={{ color: "var(--main-color)" }}>
                    {article.title}
                  </h2>

                  {article.content && (
                    <p
                      className="sm:text-sm text-xs leading-relaxed line-clamp-3 flex-1 mb-4"
                      style={{ color: "var(--main-color-dark)" }}>
                      {article.content.replace(/<[^>]+>/g, "")}
                    </p>
                  )}
                  <p className="text-xs text-white/90 mb-3">
                    {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="flex items-center text-xs gap-1 font-bold mt-auto bg-main-color text-black justify-center text-center py-2.5 rounded-md">
                    اقرأ المقال
                    <ArrowLeft className="w-3 h-3" strokeWidth={2} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
