import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { usePosts } from "./hooks/usePosts";
import { usePostComments } from "./hooks/usePostComments";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { PostCard } from "./components/Cards/PostCard";
import { Loading } from "./components/Loading";
import { CreateCommentModal } from "./components/Modal/CreateCommentModal";
import { CreateComment } from "./components/Modal/CreateCommentModal/types";
import { Button } from "./components/Button";
import { CreatePostModal } from "./components/Modal/CreatePostModal";
import { CreatePost } from "./components/Modal/CreatePostModal/types";
import { DeletePostModal } from "./components/Modal/DeletePostModal";

const MySwal = withReactContent(Swal);

export default function App() {
  const {
    posts,
    totalPosts,
    getPostsLoading,
    registerPostLoading,
    deletePostLoading,
    getPosts,
    registerPost,
    deletePost,
  } = usePosts();
  const {
    comments,
    getPostComments,
    registerPostComments,
    getPostCommentsLoading,
    registerPostCommentsLoading,
  } = usePostComments();

  const [page, setPage] = useState(1);
  const [postId, setPostId] = useState<number>();
  const [openModalCommentsView, setOpenModalCommentsView] = useState(false);
  const [openModalPostCreate, setOpenModalPostCreate] = useState(false);
  const [openModalPostDelete, setOpenModalPostDelete] = useState(false);

  const handleOpenModalCommentsView = async (postId: number) => {
    setPostId(postId);
    setOpenModalCommentsView(!openModalCommentsView);
    await getPostComments(postId);
  };

  const handleModalCommentsViewClose = () => {
    setOpenModalCommentsView(false);
  };

  const handleOpenModalPostCreate = () => {
    setOpenModalPostCreate(!openModalPostCreate);
  };

  const handleModalPostCreateClose = () => {
    setOpenModalPostCreate(false);
  };

  const handleOpenModalPostDelete = (postId: number) => {
    setPostId(postId);
    setOpenModalPostDelete(!openModalPostDelete);
  };

  const handleModalPostDeleteClose = () => {
    setOpenModalPostDelete(false);
  };

  const onCreateComment = async (data: CreateComment) => {
    const body = {
      postId,
      ...data,
    };

    const response = await registerPostComments(body);

    if (response.data && postId) {
      await getPostComments(postId);
    }
  };

  const onCreatePost = async (data: CreatePost) => {
    const titleAlreadyExists = posts.some(
      (post) => post.title.toLowerCase() === data.title.toLowerCase()
    );

    if (titleAlreadyExists) {
      MySwal.fire({
        title: "Opss...",
        text: "Já foi cadastrado um POST com esse título.",
        confirmButtonText: "Ok, continuar",
        confirmButtonColor: "#FF57B2",
      }).then((result) => {
        if (result.isConfirmed) {
          handleModalPostCreateClose();
        }
      });

      return;
    }

    const response = await registerPost(data);

    if (response.data) {
      setOpenModalPostCreate(false);
      await getPosts();
    }
  };

  const onDeletePost = async () => {
    const response = await deletePost(postId!);

    if (response.data) {
      setOpenModalPostDelete(false);
      await getPosts();
    }
  };

  useEffect(() => {
    getPosts(page);
  }, [page, getPosts]);

  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col p-5 gap-5">
      <Header />

      <Button className="w-[250px]" onClick={handleOpenModalPostCreate}>
        + Nova Postagem
      </Button>

      {getPostsLoading ? (
        <div className="w-full h-[500px] flex items-center justify-center">
          <Loading type="spinningBubbles" color="#FFF" />
        </div>
      ) : (
        <>
          <section className="w-full flex flex-col items-center gap-5 mt-10 mb-5">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                handleOpenModalCommentsView={handleOpenModalCommentsView}
                handleOpenModalPostDelete={handleOpenModalPostDelete}
              />
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

      {openModalCommentsView && (
        <CreateCommentModal
          comments={comments}
          getPostCommentsLoading={getPostCommentsLoading}
          registerPostCommentsLoading={registerPostCommentsLoading}
          onCreateComment={onCreateComment}
          onModalClose={handleModalCommentsViewClose}
        />
      )}

      {openModalPostCreate && (
        <CreatePostModal
          registerPostLoading={registerPostLoading}
          onCreatePost={onCreatePost}
          onModalClose={handleModalPostCreateClose}
        />
      )}

      {openModalPostDelete && (
        <DeletePostModal
          deletePostLoading={deletePostLoading}
          onModalDelete={onDeletePost}
          onModalClose={handleModalPostDeleteClose}
        />
      )}
    </main>
  );
}
