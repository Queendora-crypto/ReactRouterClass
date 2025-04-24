import { lazy, Suspense } from "react";

const Account = lazy(() => import("~/components/Account"));
export default function Signup() {
  return (
    <Suspense fallback={"loading...."}>
      <Account formType={"signup"} />
    </Suspense>
  );
}
