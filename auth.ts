// // // import NextAuth from "next-auth";
// // // import authConfig from "@/app/auth.config";

// // // export const {
// // //   handlers,
// // //   auth,
// // //   signIn,
// // //   signOut
// // // } = NextAuth(authConfig);
// // import NextAuth from "next-auth";
// // import authConfig from "@/app/auth.config";

// // export const {
// //   handlers,
// //   auth,
// //   signIn,
// //   signOut,
// // } = NextAuth({
// //   session: {
// //     strategy: "jwt",
// //   },

// //   pages: {
// //     signIn: "/login",
// //   },

// //   ...authConfig,

// //   callbacks: {
// //     async jwt({ token }) {
// //       return token;
// //     },

// //     async session({ session, token }) {
// //       return session;
// //     },
// //   },
// // });

// import NextAuth from "next-auth";
// import authConfig from "@/app/auth.config";

// export const {
//   handlers,
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   session: {
//     strategy: "jwt",
//   },

//   pages: {
//     signIn: "/login",
//   },

//   ...authConfig,

//   callbacks: {
//     async jwt({ token, user }) {
//       // Login time
//       if (user) {
//         token.id = user.id;
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//       }

//       return session;
//     },
//   },
// });

import NextAuth from "next-auth";
import authConfig from "@/app/auth.config";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  ...authConfig,

  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token }) {

      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});