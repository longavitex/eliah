import { useRouter } from "next/router";

export default function BlogCategory() {
  const router = useRouter();
  const { category } = router.query;

  return <p>category: {category}</p>;
}
