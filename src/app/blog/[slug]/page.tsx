// "use client";

// import { useRouter } from "next/navigation";

// export default function Page() {
//   const router = useRouter();

//   return (
//     <div>
//       <p>This is the blog page.</p>
//       <button onClick={() => router.push("/blog")}>
//         Go back to Blog List
//       </button>
//     </div>
//   );
// }
interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: BlogPageProps) {
  return <p>Post: {params.slug}</p>;
}
