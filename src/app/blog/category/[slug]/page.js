'use client'

import { useRouter, useSearchParams } from "next/navigation";

export default function BlogCategory() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const { category } = router.query;

  return <p>category: {category}</p>;
}
