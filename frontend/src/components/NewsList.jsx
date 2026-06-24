function NewsList({ articles }) {
  const uniqueArticles = articles.filter(
    (article, index, self) =>
      index ===
      self.findIndex(
        (a) => a.title === article.title
      )
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Latest News
      </h2>

      <div className="space-y-4">
        {uniqueArticles.slice(0, 10).map(
          (article, index) => (
            <div
              key={index}
              className="border-b border-slate-800 pb-4"
            >
              <h3 className="font-medium">
                {article.title}
              </h3>

              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>
                  {article.publisher}
                </span>

                <span>
                  {article.sentiment}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default NewsList;