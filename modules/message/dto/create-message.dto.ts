// // // import { Role } from "@prisma/client";

// // // export interface CreateMessageDto {
// // //   content: string;
// // //   role: Role;
// // //   chatId: string;
// // //   parentId?: string;
// // // }

// // import { Role } from "@prisma/client";

// // export interface CreateMessageDto {
// //   content: string;
// //   role: Role;
// //   chatId: string;
// //   parentId?: string;
// // }
// import { Role } from "@prisma/client";

// export interface CreateMessageDto {
//   content: string;

//   imageUrl?: string;

//   role: Role;

//   chatId: string;

//   parentId?: string;
// }

export interface CreateMessageDto {
  content: string;
  chatId: string;
  role: "USER" | "ASSISTANT";
  parentId?: string;

  fileUrl?: string;
  fileType?: "image" | "pdf";
}