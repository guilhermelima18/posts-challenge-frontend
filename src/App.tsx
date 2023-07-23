import { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { PostCard } from "./components/Cards/PostCard";
import { Loading } from "./components/Loading";

export default function App() {
  const { posts, totalPosts, getPostsLoading, getPosts } = usePosts();

  const [page, setPage] = useState(1);

  useEffect(() => {
    getPosts(page);
  }, [page, getPosts]);

  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col p-5 gap-5">
      <Header />

      {getPostsLoading ? (
        <div className="w-full h-[500px] flex items-center justify-center">
          <Loading type="spinningBubbles" color="#FFF" />
        </div>
      ) : (
        <>
          <section className="w-full flex flex-col gap-5 my-5">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>

          <Pagination
            currentPage={page}
            totalCountOfRegisters={totalPosts!}
            registerPerPage={10}
            onPageChange={setPage}
          />
        </>
      )}
    </main>
  );
}
