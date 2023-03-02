interface Logoprops {
  title: string;
  description: string;
  url:string;
  category:string;
  image:string;
}


export const Logo = ({ title, description, url,  category, image, }: Logoprops) => {
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


