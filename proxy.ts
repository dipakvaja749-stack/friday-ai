/* eslint-disable @typescript-eslint/no-explicit-any */
// // export { auth as middleware } from "@/auth";

// // export const config = {
// //   matcher: ["/dashboard/:path*"],
// // };

// export { auth as middleware } from "@/auth";

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

import { auth } from "@/auth";

export function proxy(req: any) {
  return auth(req);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};