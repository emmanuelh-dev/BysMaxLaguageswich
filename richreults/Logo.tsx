import { useTranslation } from "react-i18next";

interface Logoprops {
  title: string;
  description: string;
  category:string;
  image:string;
  baseUrl:string;
}

export const Logo = ({ title, description, category, image, baseUrl }: Logoprops) => {
  const { i18n } = useTranslation();
  const url = `http://bysmax.com/${i18n.language}/${baseUrl}`;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
      {
        "@context": "https://schema.org/",
        "@type": "WebApplication",
        "name": "${title}",
        "description": "${description}",
        "url": "${url}",
        "applicationCategory": "${category}",
        "operatingSystem": "Web",
        "browserRequirements": "Requires JavaScript. Compatible with modern web browsers.",
        "image": "${image}",
        "author": {
          "@type": "Person",
          "name": "Emmanuel Hernandez"
        },
        "version": "1.0.0",
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": [
            "https://schema.org/CommentAction",
            "https://schema.org/LikeAction",
            "https://schema.org/DislikeAction",
            "https://schema.org/UseAction"
          ],
          "userInteractionCount": "User interactions with the capacitance calculator"
        }
      }
        `,
      }}
    ></script>
  );
};


