import { useEffect } from 'react';

const Comments = () => {
  useEffect(() => {
    const disqusConfig = {
      url: 'https://example.com/path/to/page',
      identifier: 'unique-page-id',
      title: 'Page Title',
    };

    const script = document.createElement('script');
    script.src = 'https://example.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());
    document.body.appendChild(script);

    // window.DISQUS.reset({
    //   reload: true,
    //   config: function () {
    //     this.page.identifier = disqusConfig.identifier;
    //     this.page.url = disqusConfig.url;
    //     this.page.title = disqusConfig.title;
    //   },
    // });
  }, []);

  return (
    <div id="disqus_thread">
      <noscript>
        Please enable JavaScript to view the comments powered by Disqus.
      </noscript>
    </div>
  );
};

export default Comments;
