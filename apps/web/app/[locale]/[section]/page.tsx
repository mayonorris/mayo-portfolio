import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { ResearchIndex } from "@/components/research-index";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { aboutContent } from "@/content/about";
import { contactContent } from "@/content/contact";
import { experienceContent } from "@/content/experience";
import { getExternalProjectLink } from "@/content/external-links";
import { routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import { researchContent } from "@/content/research";
import { writingContent } from "@/content/writing";
import { workContent } from "@/content/work";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import { getCaseStudyPath, getLocalizedPath, getLocalizedRoutePath } from "@/lib/routes";

type RoutePageProps = {
  params: Promise<{ locale: string; section: string }>;
};

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

function parseRoutePage(locale: Locale, section: string) {
  const page = routePages[locale].find((routePage) => routePage.path === section);

  if (!page) {
    notFound();
  }

  return page;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routePages[locale].map((page) => ({ locale, section: page.path })),
  );
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  const title = `${page.title} | ${publicProfile.shortName}`;

  return {
    title,
    description: page.description,
    openGraph: {
      title,
      description: page.description,
      siteName: "Mayo Kadanga Portfolio",
      type: "website",
      locale,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: "Mayo Kadanga portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [`/${locale}/opengraph-image`],
    },
    alternates: {
      canonical: getLocalizedRoutePath(locale, page.routeKey),
      languages: {
        en: getLocalizedRoutePath("en", page.routeKey),
        fr: getLocalizedRoutePath("fr", page.routeKey),
        "x-default": getLocalizedRoutePath(defaultLocale, page.routeKey),
      },
    },
  };
}

export default async function LocalizedRoutePage({ params }: RoutePageProps) {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  if (page.routeKey === "about") {
    const about = aboutContent[locale];

    return (
      <Section className="route-page about-page about-page--editorial" labelledBy="about-page-title">
        <Container className="about-page__hero">
          <div className="about-page__copy">
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            <h1 id="about-page-title">{about.hero.name}</h1>
            <p className="about-page__descriptor">{about.hero.descriptor}</p>
            <p className="about-page__statement">{about.hero.statement}</p>
            <p className="about-page__intro">{about.hero.intro}</p>
          </div>
          <figure className="about-page__portrait-card" aria-label={about.portrait.label}>
            <div className="about-page__photo-frame">
              {about.portrait.imageSrc ? (
                <Image
                  alt={about.portrait.alt}
                  className="about-page__photo"
                  fill
                  priority
                  sizes="(min-width: 920px) 320px, 72vw"
                  src={about.portrait.imageSrc}
                />
              ) : (
                <div className="about-page__photo-fallback" aria-hidden="true">
                  {about.portrait.fallback}
                </div>
              )}
            </div>
            <figcaption className="about-page__caption">
              <span>{about.portrait.caption}</span>
              <ul role="list">
                {about.portrait.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </Container>

        <Container className="about-page__narrative">
          <div className="about-page__narrative-heading">
            <Eyebrow>{about.narrative.eyebrow}</Eyebrow>
            <h2>{about.narrative.title}</h2>
            <p>{about.narrative.intro}</p>
          </div>
          <div className="about-page__story-grid">
            {about.narrative.sections.map((aboutSection) => (
              <article className="about-page__story-card" key={aboutSection.title}>
                <Eyebrow>{aboutSection.eyebrow}</Eyebrow>
                <h3>{aboutSection.title}</h3>
                <p>{aboutSection.body}</p>
              </article>
            ))}
          </div>
        </Container>

        <Container className="about-page__closing-grid">
          <article className="about-page__principles">
            <Eyebrow>{about.principles.eyebrow}</Eyebrow>
            <h2>{about.principles.title}</h2>
            <ul role="list">
              {about.principles.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="about-page__languages">
            <Eyebrow>{about.languages.eyebrow}</Eyebrow>
            <h2>{about.languages.title}</h2>
            <ul role="list">
              {about.languages.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Container>

        <Container className="about-page__cta-panel">
          <Eyebrow>{about.ctas.eyebrow}</Eyebrow>
          <h2>{about.ctas.title}</h2>
          <p>{about.ctas.body}</p>
          <div className="about-page__cta-row">
            <LinkButton href={getLocalizedPath(locale, "/experience")}>{about.ctas.experience}</LinkButton>
            <LinkButton href={getLocalizedPath(locale, "/work")} variant="secondary">
              {about.ctas.work}
            </LinkButton>
            <LinkButton href={getLocalizedPath(locale, "/contact")} variant="secondary">
              {about.ctas.contact}
            </LinkButton>
          </div>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "work") {
    const work = workContent[locale];
    const additionalLink = getExternalProjectLink(work.additionalBuild.linkId, locale);

    return (
      <Section className="route-page route-page--work" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading">
            <Eyebrow>{work.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{page.title}</h1>
            <p>{work.intro}</p>
          </div>
          {(["featured", "analytical"] as const).map((group) => (
            <section className="work-group" key={group} aria-labelledby={`work-group-${group}`}>
              <h2 className="work-group__title" id={`work-group-${group}`}>
                {work.groupLabels[group]}
              </h2>
              <div className="selected-work-grid selected-work-grid--route">
                {work.items.filter((item) => item.group === group).map((item) => {
                  const liveLink = item.liveLinkId
                    ? getExternalProjectLink(item.liveLinkId, locale)
                    : null;

                  return (
                    <article className="work-card" key={item.slug}>
                      <WorkVisual variant={item.visual} />
                      <div className="work-card__body">
                        <p className="work-card__category">{item.category}</p>
                        <h3>{item.title}</h3>
                        <p>{item.scope}</p>
                        <p className="work-card__role">
                          <span>{work.roleLabel}</span>
                          {item.role}
                        </p>
                        <div className="work-card__actions">
                          <LinkButton href={getCaseStudyPath(locale, item.slug)}>
                            {item.maturity === "overview" ? work.overviewCta : work.cardCta}
                          </LinkButton>
                          {liveLink ? (
                            <LinkButton
                              ariaLabel={liveLink.accessibleLabel}
                              href={liveLink.href}
                              isExternal
                              variant="secondary"
                            >
                              {liveLink.label}
                            </LinkButton>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
          <section className="earlier-work" aria-labelledby="earlier-work-title">
            <Eyebrow>{work.earlierProjects.eyebrow}</Eyebrow>
            <h2 id="earlier-work-title">{work.earlierProjects.eyebrow}</h2>
            <div className="earlier-work__grid">
              {work.earlierProjects.items.map((item) => (
                <article className="earlier-work__card" key={item.title}>
                  <p className="earlier-work__status">{item.status}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="earlier-work__skills">{item.skills}</p>
                </article>
              ))}
            </div>
          </section>
          <article className="additional-build" aria-labelledby="additional-build-title">
            <div>
              <Eyebrow>{work.additionalBuild.eyebrow}</Eyebrow>
              <h2 id="additional-build-title">{work.additionalBuild.title}</h2>
              <p className="additional-build__category">{work.additionalBuild.category}</p>
              <p>{work.additionalBuild.description}</p>
            </div>
            <LinkButton
              ariaLabel={additionalLink.accessibleLabel}
              href={additionalLink.href}
              isExternal
              variant="secondary"
            >
              {additionalLink.label}
            </LinkButton>
          </article>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "research") {
    const research = researchContent[locale];

    return (
      <Section className="route-page knowledge-page knowledge-page--research" labelledBy="route-page-title">
        <ResearchIndex content={research} locale={locale} />
      </Section>
    );
  }

  if (page.routeKey === "writing") {
    const writing = writingContent[locale];

    return (
      <Section className="route-page knowledge-page knowledge-page--writing" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading knowledge-page__heading">
            <Eyebrow>{writing.hero.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{writing.hero.title}</h1>
            <p>{writing.hero.intro}</p>
          </div>
          <div className="knowledge-grid knowledge-grid--writing">
            {writing.entries.map((entry) => (
              <article className="knowledge-card knowledge-card--writing" key={entry.id}>
                <p className="knowledge-card__type">{entry.type}</p>
                <h2>{entry.title}</h2>
                <p>{entry.description}</p>
                <p className="knowledge-card__status">{entry.status}</p>
              </article>
            ))}
          </div>
          <div className="knowledge-page__actions">
            <LinkButton href={getLocalizedRoutePath(locale, writing.ctas.primaryRoute)}>
              {writing.ctas.primary}
            </LinkButton>
            <LinkButton
              href={getLocalizedRoutePath(locale, writing.ctas.secondaryRoute)}
              variant="secondary"
            >
              {writing.ctas.secondary}
            </LinkButton>
          </div>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "contact") {
    const contact = contactContent[locale];
    const linkedInChannel = contact.channels.items.find(
      (channel) => channel.id === "linkedin",
    );

    return (
      <Section className="route-page contact-route" labelledBy="route-page-title">
        <Container className="contact-route__grid">
          <div className="contact-route__content">
            <Eyebrow>{contact.hero.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{contact.hero.title}</h1>
            <p className="contact-route__intro">{contact.hero.intro}</p>
            <div className="contact-route__channels" aria-labelledby="contact-channels-title">
              <Eyebrow>{contact.channels.eyebrow}</Eyebrow>
              <h2 id="contact-channels-title">{contact.channels.title}</h2>
              <p>{contact.channels.intro}</p>
              <ul className="contact-channel-list" role="list">
                {contact.channels.items.map((channel) => (
                  <li key={channel.id}>
                    <a
                      aria-label={channel.label + ": " + channel.description}
                      href={channel.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="contact-channel-list__label">
                        {channel.label}
                        <svg
                          aria-hidden="true"
                          className="contact-channel-list__icon"
                          focusable="false"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3h8v8M13 3 4 12" />
                        </svg>
                      </span>
                      <small>{channel.description}</small>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="contact-route__form-card" aria-labelledby="contact-form-title">
            <Eyebrow>{contact.form.eyebrow}</Eyebrow>
            <h2 id="contact-form-title">{contact.form.title}</h2>
            <p>{contact.form.intro}</p>
            {linkedInChannel ? (
              <ContactForm content={contact.form} linkedinHref={linkedInChannel.href} />
            ) : null}
          </aside>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "experience") {
    const experience = experienceContent[locale];

    return (
      <Section className="route-page route-page--experience" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading route-page__heading--narrative">
            <Eyebrow>{experience.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{experience.title}</h1>
            <p>{experience.intro}</p>
          </div>
          <div className="experience-framing" aria-labelledby="experience-framing-title">
            <h2 id="experience-framing-title">{experience.framing.title}</h2>
            <p>{experience.framing.body}</p>
            <ul className="experience-arc" role="list">
              {experience.framing.arc.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ol className="experience-timeline experience-timeline--editorial" aria-label={experience.title} role="list">
            {experience.entries.map((entry) => (
              <li className="experience-timeline__item" key={entry.id}>
                <div className="experience-timeline__meta">
                  <span>{entry.category[locale]}</span>
                  <time>{entry.period[locale]}</time>
                </div>
                <span className="experience-timeline__rail" aria-hidden="true">
                  <span className="experience-timeline__marker" />
                </span>
                <article className="experience-timeline__body">
                  <h2>{entry.role[locale]}</h2>
                  <p className="experience-timeline__organization">
                    {entry.organization}
                    {entry.location ? <span>{entry.location[locale]}</span> : null}
                  </p>
                  <p>{entry.description[locale]}</p>
                </article>
              </li>
            ))}
          </ol>
          <div className="experience-timeline__actions">
            <LinkButton href={getLocalizedPath(locale, "/work")}>{experience.ctas.work}</LinkButton>
            <LinkButton href={getLocalizedPath(locale, "/contact")} variant="secondary">
              {experience.ctas.contact}
            </LinkButton>
          </div>
        </Container>
      </Section>
    );
  }

  notFound();
}
