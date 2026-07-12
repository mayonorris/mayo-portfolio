import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";

export default function LocaleNotFound() {
  return (
    <Section className="route-page not-found-page" labelledBy="not-found-title">
      <Container className="route-page__inner">
        <Eyebrow>404</Eyebrow>
        <h1 id="not-found-title">Page not found / Page introuvable</h1>
        <p>
          The requested page is not available. La page demandée n’est pas disponible.
        </p>
        <div className="not-found-page__actions">
          <LinkButton href="/en" variant="secondary">
            English home
          </LinkButton>
          <LinkButton href="/fr">
            Accueil français
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
