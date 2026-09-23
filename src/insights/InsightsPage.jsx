"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  publications,
  reports,
  sortPublications,
} from "../data/publications";

const INITIAL_VISIBLE = 12;
const LOAD_MORE_STEP = 12;

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Reports", value: "Reports" },
  { label: "BizPay Pulse", value: "BizPay Pulse" },
  { label: "Marketing & Tech", value: "Marketing & Tech Insights" },
  { label: "Payments", value: "Payments" },
  { label: "Financial Services", value: "Financial Services" },
  { label: "AI", value: "AI" },
  { label: "Customer Experience", value: "Customer Experience" },
  { label: "Growth", value: "Growth" },
  { label: "Technology", value: "Technology" },
];

const newsletterLinks = {
  "BizPay Pulse": "https://www.linkedin.com/newsletters/7287591304077758464/",
  "Marketing & Tech Insights":
    "https://www.linkedin.com/newsletters/7435552123867578368/",
};

const formatPublicationDate = (date) => {
  if (!date) return null;

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Tag = ({ children, inverse = false }) => (
  <span
    className={
      inverse
        ? "inline-block bg-[#1C1C1C] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F5F3EF]"
        : "inline-block bg-[#F5F3EF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]"
    }
  >
    {children}
  </span>
);

const CoverImage = ({ item, className }) => {
  const [failed, setFailed] = useState(false);

  if (!item.image || failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-[#E8E4DD] p-6 text-center`}
        aria-label={`${item.title} cover not available`}
      >
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]/55">
            {item.newsletter || "Insight"}
          </p>
          <p className="text-lg font-bold leading-tight text-[#1C1C1C]/85">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.title}
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
};

const InsightCard = ({ item }) => (
  <article className="grid gap-6 border-t border-[#B8B4AC] py-8 md:grid-cols-[220px_1fr_auto] md:items-start md:gap-8">
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden"
    >
      <CoverImage
        item={item}
        className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
      />
    </a>

    <div className="max-w-4xl">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <Tag inverse>{item.newsletter}</Tag>
        <span className="text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]/60">
          {formatPublicationDate(item.publishedAt) ||
            (item.type === "report" ? "Report" : "Article")}
          {item.period ? ` · ${item.period}` : ""}
        </span>
      </div>

      <h3 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">
        {item.title}
      </h3>

      {item.description?.trim() && (
        <p className="max-w-3xl leading-relaxed text-[#1C1C1C]/75">
          {item.description}
        </p>
      )}

      {item.topics?.length > 0 && (
        <div
          className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#1C1C1C]/55 ${
            item.description?.trim() ? "mt-4" : "mt-2"
          }`}
        >
          {item.topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      )}
    </div>

    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#1C1C1C] transition-opacity hover:opacity-60 md:whitespace-nowrap"
    >
      {item.type === "report" ? "Read report →" : "Read article →"}
    </a>
  </article>
);

export default function InsightsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const latestArticles = useMemo(
    () =>
      sortPublications(
        publications.filter((item) => item.type === "article"),
      ).slice(0, 3),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sortPublications(publications).filter((item) => {
      const haystack = [
        item.title,
        item.description,
        item.newsletter,
        item.period,
        item.sourceTopic,
        ...(item.topics || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || haystack.includes(normalizedQuery);

      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Reports" && item.type === "report") ||
        item.newsletter === activeFilter ||
        item.topics?.includes(activeFilter);

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [query, activeFilter]);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#1C1C1C]">
      <header className="sticky top-0 z-50 flex min-h-14 items-center justify-between border-b border-[#1C1C1C]/10 bg-[#1C1C1C] px-[5%] text-[#F5F3EF] md:min-h-16">
        <a href="/" className="flex items-center">
          <img
            src="/images/brand/epb-monogram.png"
            alt="EPB"
            className="h-8 w-auto object-contain md:h-9"
          />
        </a>

        <a
          href="/"
          className="text-sm font-semibold transition-opacity hover:opacity-70"
        >
          Back to home
        </a>
      </header>

      <main>
        <section className="bg-[#1C1C1C] px-[5%] py-14 text-[#F5F3EF] md:py-16">
          <div className="container">
            <p className="mb-3 font-semibold uppercase tracking-wide">Insights</p>
            <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-[1.02] md:text-7xl lg:text-8xl">
              Ideas on change
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#F5F3EF]/80 md:text-xl">
              Perspectives on financial services, payments, AI, customer
              experience, technology and growth — with a focus on what changes
              business models, customer behavior and competitive advantage.
            </p>
          </div>
        </section>

        <section className="px-[5%] py-14 md:py-20">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold uppercase tracking-wide">
                Latest insights
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
                What I&apos;m exploring now
              </h2>
              <p className="max-w-2xl text-[#1C1C1C]/70 md:text-lg">
                The most recent perspectives from BizPay Pulse and Marketing &
                Tech Insights.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((item) => (
                <article key={item.id} className="flex h-full flex-col">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-5 block overflow-hidden"
                  >
                    <CoverImage
                      item={item}
                      className="aspect-[3/2] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </a>

                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Tag inverse>{item.newsletter}</Tag>
                    {item.publishedAt && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]/50">
                        {formatPublicationDate(item.publishedAt)}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-1 text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  {item.description?.trim() && (
                    <p className="mb-6 leading-relaxed text-[#1C1C1C]/70">
                      {item.description}
                    </p>
                  )}

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${item.description?.trim() ? "mt-auto" : "mt-4"} font-semibold transition-opacity hover:opacity-60`}
                  >
                    Read article →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold uppercase tracking-wide">Reports</p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
                Deeper reads
              </h2>
              <p className="max-w-2xl text-[#F5F3EF]/75 md:text-lg">
                Periodic reports synthesizing the signals reshaping payments,
                financial services, marketing, AI and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {reports.map((report) => (
                <article
                  key={report.id}
                  className="flex h-full flex-col border border-[#6B6B6B]"
                >
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                  >
                    <CoverImage
                      item={report}
                      className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </a>

                  <div className="flex flex-1 flex-col px-5 py-4 md:p-8">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <Tag>{report.newsletter}</Tag>
                      {(report.period || report.publishedAt) && (
                        <span className="text-xs font-semibold uppercase tracking-wide">
                          {report.period || "Report"}
                          {report.publishedAt
                            ? ` · ${formatPublicationDate(report.publishedAt)}`
                            : ""}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                      {report.title}
                    </h3>

                    {report.description?.trim() && (
                      <p className="mb-7 text-[#F5F3EF]/75">
                        {report.description}
                      </p>
                    )}

                    <a
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto font-semibold transition-opacity hover:opacity-70"
                    >
                      Read report →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-[#6B6B6B] pt-8 sm:flex-row sm:gap-8">
              <a
                href={newsletterLinks["BizPay Pulse"]}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-opacity hover:opacity-70"
              >
                Explore BizPay Pulse →
              </a>
              <a
                href={newsletterLinks["Marketing & Tech Insights"]}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-opacity hover:opacity-70"
              >
                Explore Marketing & Tech Insights →
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-16 md:py-24">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold uppercase tracking-wide">
                All insights
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
                Explore the library
              </h2>
              <p className="max-w-2xl text-[#1C1C1C]/70 md:text-lg">
                Search the full collection or filter by publication stream and
                topic.
              </p>
            </div>

            <div className="mb-8">
              <label htmlFor="insights-search" className="sr-only">
                Search insights
              </label>
              <input
                id="insights-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search insights..."
                className="w-full border border-[#1C1C1C]/25 bg-transparent px-5 py-4 text-lg outline-none transition-colors placeholder:text-[#1C1C1C]/40 focus:border-[#1C1C1C]"
              />
            </div>

            <div className="-mx-[5%] mb-5 overflow-x-auto pb-2 pl-[5%] pr-[calc(5%+1rem)] md:mx-0 md:overflow-visible md:px-0">
              <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
                {filterOptions.map((filter) => {
                  const active = activeFilter === filter.value;

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setActiveFilter(filter.value)}
                      className={
                        active
                          ? "whitespace-nowrap border border-[#1C1C1C] bg-[#1C1C1C] px-4 py-2 text-sm font-semibold text-[#F5F3EF]"
                          : "whitespace-nowrap border border-[#1C1C1C]/25 px-4 py-2 text-sm font-semibold transition-colors hover:border-[#1C1C1C]"
                      }
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between gap-4 text-sm text-[#1C1C1C]/55">
              <span>
                {filtered.length} {filtered.length === 1 ? "insight" : "insights"}
              </span>

              {(query || activeFilter !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveFilter("All");
                  }}
                  className="font-semibold text-[#1C1C1C] underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div>
              {filtered.length > 0 ? (
                <>
                  {visibleItems.map((item) => (
                    <InsightCard key={item.id} item={item} />
                  ))}

                  {hasMore && (
                    <div className="border-t border-[#B8B4AC] pt-8 text-center">
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleCount((count) => count + LOAD_MORE_STEP)
                        }
                        className="border border-[#1C1C1C] px-6 py-3 font-semibold transition-colors hover:bg-[#1C1C1C] hover:text-[#F5F3EF]"
                      >
                        Load 12 more
                      </button>
                      <p className="mt-3 text-sm text-[#1C1C1C]/50">
                        Showing {Math.min(visibleCount, filtered.length)} of{" "}
                        {filtered.length}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="border-t border-[#B8B4AC] py-12">
                  <p className="text-lg font-semibold">
                    No insights match your search.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveFilter("All");
                    }}
                    className="mt-4 font-semibold underline underline-offset-4"
                  >
                    Clear search and filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1C1C] px-[5%] py-10 text-[#F5F3EF]">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">Eduardo Pérez Blandón</p>
            <p className="text-sm text-[#F5F3EF]/65">
              Business Builder · Growth & Transformation Executive
            </p>
          </div>

          <a
            href="mailto:eduardo.j.perez@gmail.com"
            className="font-semibold transition-opacity hover:opacity-70"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </div>
  );
}
