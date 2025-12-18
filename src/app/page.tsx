"use client";
import { useGetPostsQuery } from "@/store/api/postsApi";

export default function Page() {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
