import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/locales";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const dictionary = getDictionary(locale);

  return (
    <section className="px-6 py-16" aria-labelledby="routing-title">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            {dictionary.home.eyebrow}
          </p>
          <h1
            className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl"
            id="routing-title"
          >
            {dictionary.home.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700">
            {dictionary.home.intro}
          </p>
        </div>
        <section aria-labelledby="routing-checks">
          <h2 className="text-base font-semibold" id="routing-checks">
            {dictionary.home.checksLabel}
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {dictionary.home.checks.map((check) => (
              <li className="rounded-md border border-slate-200 p-4" key={check}>
                {check}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}