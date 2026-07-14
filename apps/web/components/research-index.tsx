"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import type { ResearchContent, ResearchFilterId } from "@/content/research";
import type { Locale } from "@/i18n/locales";
import { getLocalizedRoutePath } from "@/lib/routes";

type ResearchIndexProps = {
  content: ResearchContent;
  locale: Locale;
};

function renderSeparatedLabel(parts: [string, string]) {
  return (
    <>
      <span>{parts[0]}</span>
      <span className="text-separator" aria-hidden="true">
        ·
      </span>
      <span>{parts[1]}</span>
    </>
  );
}

function entrySearchText(entry: ResearchContent["entries"][number]) {
  return [
    entry.title,
    entry.description,
    entry.type,
    entry.status,
    entry.contextLabel,
    entry.period,
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase();
}

export function ResearchIndex({ content, locale }: ResearchIndexProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ResearchFilterId | "all">("all");
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const filteredEntries = useMemo(
    () =>
      content.entries.filter((entry) => {
        const matchesQuery =
          normalizedQuery.length === 0 || entrySearchText(entry).includes(normalizedQuery);
        const matchesFilter = activeFilter === "all" || entry.filterIds.includes(activeFilter);

        return matchesQuery && matchesFilter;
      }),
    [activeFilter, content.entries, normalizedQuery],
  );

  const filteredIds = useMemo(
    () => new Set(filteredEntries.map((entry) => entry.id)),
    [filteredEntries],
  );

  return (
    <>
      <div className="research-strip" aria-label={content.strip}>
        <Container className="research-strip__inner">
          <span className="research-strip__dot" aria-hidden="true" />
          <p>{renderSeparatedLabel(content.stripParts)}</p>
        </Container>
      </div>
      <Container>
        <div className="route-page__heading knowledge-page__heading research-index__hero">
          <Eyebrow>{renderSeparatedLabel(content.hero.eyebrowParts)}</Eyebrow>
          <h1 id="route-page-title">{content.hero.title}</h1>
          <p>{content.hero.intro}</p>
        </div>

        <div className="research-index__controls" aria-labelledby="research-filter-title">
          <div className="research-index__search">
            <label htmlFor="research-search">{content.controls.searchLabel}</label>
            <input
              id="research-search"
              name="research-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={content.controls.searchPlaceholder}
              type="search"
              value={query}
            />
          </div>
          <div className="research-index__filters" aria-labelledby="research-filter-title">
            <h2 id="research-filter-title" className="sr-only">
              {content.controls.searchLabel}
            </h2>
            <button
              aria-pressed={activeFilter === "all"}
              className="research-index__filter"
              data-active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
              type="button"
            >
              {content.controls.allLabel}
            </button>
            {content.filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter.id}
                className="research-index__filter"
                data-active={activeFilter === filter.id}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="research-index__results" aria-live="polite" role="status">
            {filteredEntries.length} {filteredEntries.length === 1 ? content.controls.resultsSingular : content.controls.resultsPlural}
          </div>
        </div>

        <div className="research-index__groups">
          {content.groups.map((group) => {
            const groupEntries = content.entries.filter(
              (entry) => entry.groupId === group.id && filteredIds.has(entry.id),
            );
            const groupHeadingId = "research-group-" + group.id;

            return (
              <section className="research-group" key={group.id} aria-labelledby={groupHeadingId}>
                <h2 id={groupHeadingId}>{group.label}</h2>
                {groupEntries.length > 0 ? (
                  <div className="research-row-list">
                    {groupEntries.map((entry) => (
                      <article className="research-row" key={entry.id}>
                        <div
                          className="research-row__meta"
                          aria-label={[entry.period, entry.type, entry.status]
                            .filter(Boolean)
                            .join(" · ")}
                        >
                          {entry.period ? <span className="research-row__type-badge">{entry.period}</span> : null}
                          <span className="research-row__type-badge">{entry.type}</span>
                          <span className="research-row__status">{entry.status}</span>
                        </div>
                        <div className="research-row__body">
                          <div>
                            {entry.contextLabel ? (
                              <p className="research-row__context">{entry.contextLabel}</p>
                            ) : null}
                            <h3>{entry.title}</h3>
                            <p>{entry.description}</p>
                          </div>
                          <div className="research-row__action">
                            {entry.articleHref && entry.articleLabel ? (
                              <Link href={entry.articleHref}>{entry.articleLabel}</Link>
                            ) : (
                              <span aria-disabled="true">{entry.unavailableLabel}</span>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>

        {filteredEntries.length === 0 ? (
          <div className="research-index__empty">
            <h2>{content.controls.emptyTitle}</h2>
            <p>{content.controls.emptyBody}</p>
            <button
              className="research-index__filter"
              data-active="true"
              onClick={() => {
                setActiveFilter("all");
                setQuery("");
              }}
              type="button"
            >
              {content.controls.clearLabel}
            </button>
          </div>
        ) : null}

        <div className="knowledge-page__actions">
          <LinkButton href={getLocalizedRoutePath(locale, content.ctas.primaryRoute)}>
            {content.ctas.primary}
          </LinkButton>
          <LinkButton href={getLocalizedRoutePath(locale, content.ctas.secondaryRoute)} variant="secondary">
            {content.ctas.secondary}
          </LinkButton>
        </div>
      </Container>
    </>
  );
}
