"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import {
  reports,
  latestThinking,
  newsletters,
} from "../../data/insights";

const InsightTag = ({ children }) => (
  <span className="inline-block bg-[#F5F3EF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1C1C1C]">
    {children}
  </span>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
  >
    {children}
    <RxChevronRight />
  </a>
);

export function Blog10() {
  const featuredReports = reports.filter((report) => report.featured);
  const previousReports = reports.filter((report) => !report.featured);

  return (
    <section
      id="insights"
      className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">

        {/* IDEAS ON CHANGE */}
        <div className="mb-20 md:mb-28">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="mb-3 font-semibold uppercase tracking-wide">
              Insights
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
              Ideas on change
            </h2>

            <p className="max-w-2xl md:text-md">
              Perspectives on the shifts reshaping financial services,
              customers, technology and growth.
            </p>
          </div>

          {/* CURRENT REPORTS */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {featuredReports.map((report) => (
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
                  <img
                    src={report.image}
                    alt={report.title}
                    className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <InsightTag>{report.newsletter}</InsightTag>

                    <span className="text-xs font-semibold uppercase tracking-wide text-[#F5F3EF]">
                      {report.period}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                    {report.title}
                  </h3>

                  <p className="mb-7">
                    {report.description}
                  </p>

                  <div className="mt-auto">
                    <ExternalLink href={report.url}>
                      Read report
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PREVIOUS REPORTS */}
          {previousReports.length > 0 && (
            <div className="mt-12 border-t border-[#6B6B6B] pt-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide">
                Previous reports
              </p>

              <div className="flex flex-col gap-4">
                {previousReports.map((report) => (
                  <ExternalLink key={report.id} href={report.url}>
                    {report.newsletter} · {report.period}
                  </ExternalLink>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* LATEST THINKING */}
        <div>
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 font-semibold uppercase tracking-wide">
                Latest thinking
              </p>

              <h2 className="mb-5 text-4xl font-bold leading-[1.05] md:text-6xl">
                What I&apos;m exploring now
              </h2>

              <p className="max-w-2xl md:text-md">
                Recent perspectives from BizPay Pulse and Marketing & Tech
                Insights.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestThinking.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 block overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[3/2] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <InsightTag>{item.newsletter}</InsightTag>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mb-6">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <ExternalLink href={item.url}>
                    Read article
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>

          {/* NEWSLETTER LINKS */}
          <div className="mt-12 flex flex-col gap-4 border-t border-[#6B6B6B] pt-8 sm:flex-row sm:gap-8">
            <ExternalLink href={newsletters.bizPayPulse}>
              Explore BizPay Pulse
            </ExternalLink>

            <ExternalLink href={newsletters.marketingTech}>
              Explore Marketing & Tech Insights
            </ExternalLink>
          </div>
        </div>

      </div>
    </section>
  );
}