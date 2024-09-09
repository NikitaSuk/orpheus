import React from 'react';

const Newsroom = () => {
  const newsArticles = [
    {
      title: 'Article 1 Title',
      date: 'September 1, 2024',
      description: 'Brief description of the article 1.',
      imageUrl: 'path-to-image-1.jpg',
    },
  ];

  return (
    <div className="bg-navy text-white min-h-screen container mx-auto justify-center">

      <section className="py-12">
        <div className="container mx-auto flex justify-center">
          <div className="bg-dark-main p-6 rounded-3xl shadow-md text-left w-full max-w-4xl">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {newsArticles.map((article, index) => (
                  <div key={index} className="bg-dark-secondary p-6 rounded-3xl shadow-md">
                    <img src={article.imageUrl} alt={article.title} className="rounded-full mx-auto mb-4 h-24 w-24 object-cover text-center" />
                    <h3 className="text-xl font-bold text-center">{article.title}</h3>
                    <p className="mt-2 text-center">{article.date}</p>
                    <p className="mt-4 text-center">{article.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsroom;
