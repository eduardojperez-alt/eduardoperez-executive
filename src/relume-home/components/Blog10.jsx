"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import {
  latestThinking,
  reports,
  newsletters,
} from "../../data/publications";

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
  return (
    <section
      id="insights"
      className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-wide">
              Insights
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
              Latest insights
            </h2>

            <p className="max-w-2xl md:text-md">
              Recent perspectives on financial services, payments, AI,
              customer experience, technology and growth.
            </p>
          </div>

          <a
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
          >
            Explore all insights
            <RxChevronRight />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestThinking.map((item) => (
            <article key={item.id} className="flex h-full flex-col">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 block overflow-hidden md:mb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[3/2] w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </a>

              <div className="mb-3 flex flex-wrap items-center gap-3 md:mb-4">
                <InsightTag>{item.newsletter}</InsightTag>
              </div>

              <h3 className="mb-3 text-2xl font-bold leading-tight md:mb-4">
                {item.title}
              </h3>

              <p className="mb-6">{item.description}</p>

              <div className="mt-auto">
                <ExternalLink href={item.url}>Read article</ExternalLink>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[#6B6B6B] pt-10 md:mt-20 md:pt-12">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-wide">
                Reports
              </p>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Deeper reads on the shifts that matter
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {reports.slice(0, 2).map((report) => (
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
                    {report.period && (
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        {report.period}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                    {report.title}
                  </h3>

                  <p className="mb-7">{report.description}</p>

                  <div className="mt-auto">
                    <ExternalLink href={report.url}>Read report</ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#6B6B6B] pt-8 sm:flex-row sm:flex-wrap sm:gap-8">
          <a
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
          >
            Explore all insights
            <RxChevronRight />
          </a>

          <ExternalLink href={newsletters.bizPayPulse}>
            Explore BizPay Pulse
          </ExternalLink>

          <ExternalLink href={newsletters.marketingTech}>
            Explore Marketing & Tech Insights
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
