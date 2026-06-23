// // import type { NextAuthConfig } from "next-auth";
// // import Credentials from "next-auth/providers/credentials";

// // export default {
// //   providers: [
// //     Credentials({
// //       async authorize(credentials) {
// //         return null;
// //       },
// //     }),
// //   ],
// // } satisfies NextAuthConfig;

// import type { NextAuthConfig } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { LoginSchema } from "@/modules/auth/validations/login.schema";
// import { AuthRepository } from "@/modules/auth/repositories/auth.repository";
// import bcrypt from "bcryptjs";

// const authRepository = new AuthRepository();

// export default {
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const validatedFields = LoginSchema.safeParse(credentials);

//         if (!validatedFields.success) return null;

//         const { email, password } = validatedFields.data;

//         const user = await authRepository.findByEmail(email);

//         if (!user) return null;

//         const passwordMatch = await bcrypt.compare(
//           password,
//           user.password
//         );

//         if (!passwordMatch) return null;

//         return user;
//       },
//     }),
//   ],
// } satisfies NextAuthConfig;

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/modules/auth/validations/login.schema";
import { AuthRepository } from "@/modules/auth/repositories/auth.repository";
import bcrypt from "bcryptjs";

const authRepository = new AuthRepository();

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await authRepository.findByEmail(email);

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          password,
          user.password
        );

        if (!passwordMatch) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;