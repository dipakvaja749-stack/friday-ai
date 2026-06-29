// // // // // // "use client"

// // // // // // import * as React from "react"

// // // // // // import { NavMain } from "@/components/nav-main"
// // // // // // import { NavProjects } from "@/components/nav-projects"
// // // // // // import { NavUser } from "@/components/nav-user"
// // // // // // import { TeamSwitcher } from "@/components/team-switcher"
// // // // // // import {
// // // // // //   Sidebar,
// // // // // //   SidebarContent,
// // // // // //   SidebarFooter,
// // // // // //   SidebarHeader,
// // // // // //   SidebarRail,
// // // // // // } from "@/components/ui/sidebar"
// // // // // // import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

// // // // // // // This is sample data.
// // // // // // const data = {
// // // // // //   user: {
// // // // // //     name: "shadcn",
// // // // // //     email: "m@example.com",
// // // // // //     avatar: "/avatars/shadcn.jpg",
// // // // // //   },
// // // // // //   teams: [
// // // // // //     {
// // // // // //       name: "Acme Inc",
// // // // // //       logo: (
// // // // // //         <GalleryVerticalEndIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       plan: "Enterprise",
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Acme Corp.",
// // // // // //       logo: (
// // // // // //         <AudioLinesIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       plan: "Startup",
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Evil Corp.",
// // // // // //       logo: (
// // // // // //         <TerminalIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       plan: "Free",
// // // // // //     },
// // // // // //   ],
// // // // // //   navMain: [
// // // // // //     {
// // // // // //       title: "Playground",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <TerminalSquareIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       isActive: true,
// // // // // //       items: [
// // // // // //         {
// // // // // //           title: "History",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Starred",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Settings",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Models",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <BotIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       items: [
// // // // // //         {
// // // // // //           title: "Genesis",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Explorer",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Quantum",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Documentation",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <BookOpenIcon
// // // // // //         />
// // // // // //       ),
// // // // // //       items: [
// // // // // //         {
// // // // // //           title: "Introduction",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Get Started",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Tutorials",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Changelog",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Settings",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <Settings2Icon
// // // // // //         />
// // // // // //       ),
// // // // // //       items: [
// // // // // //         {
// // // // // //           title: "General",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Team",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Billing",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //         {
// // // // // //           title: "Limits",
// // // // // //           url: "#",
// // // // // //         },
// // // // // //       ],
// // // // // //     },
// // // // // //   ],
// // // // // //   projects: [
// // // // // //     {
// // // // // //       name: "Design Engineering",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <FrameIcon
// // // // // //         />
// // // // // //       ),
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Sales & Marketing",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <PieChartIcon
// // // // // //         />
// // // // // //       ),
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Travel",
// // // // // //       url: "#",
// // // // // //       icon: (
// // // // // //         <MapIcon
// // // // // //         />
// // // // // //       ),
// // // // // //     },
// // // // // //   ],
// // // // // // }

// // // // // // export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
// // // // // //   return (
// // // // // //     <Sidebar collapsible="icon" {...props}>
// // // // // //       <SidebarHeader>
// // // // // //         <TeamSwitcher teams={data.teams} />
// // // // // //       </SidebarHeader>
// // // // // //       <SidebarContent>
// // // // // //         <NavMain items={data.navMain} />
// // // // // //         <NavProjects projects={data.projects} />
// // // // // //       </SidebarContent>
// // // // // //       <SidebarFooter>
// // // // // //         <NavUser user={data.user} />
// // // // // //       </SidebarFooter>
// // // // // //       <SidebarRail />
// // // // // //     </Sidebar>
// // // // // //   )
// // // // // // }
// // // // // "use client";

// // // // // import * as React from "react";
// // // // // import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
// // // // // import { NavUser } from "@/components/nav-user";
// // // // // import NewChatButton from "@/modules/chat/components/new-chat-button";
// // // // // import {ChatList} from "@/modules/chat/components/chat-list";

// // // // // const user = {
// // // // //   name: "Dipak",
// // // // //   email: "dipak@example.com",
// // // // //   avatar: "/avatars/user.jpg",
// // // // // };

// // // // // export function AppSidebar({
// // // // //   ...props
// // // // // }: React.ComponentProps<typeof Sidebar>) {
// // // // //   return (
// // // // //     <Sidebar collapsible="icon" {...props}>
// // // // //       <SidebarHeader>
// // // // //         <NewChatButton />
// // // // //       </SidebarHeader>

// // // // //       <SidebarContent>
// // // // //         <ChatList />
// // // // //       </SidebarContent>

// // // // //       <SidebarFooter>
// // // // //         <NavUser user={user} />
// // // // //       </SidebarFooter>

// // // // //       <SidebarRail />
// // // // //     </Sidebar>
// // // // //   );
// // // // // }

// // // // // import * as React from "react";
// // // // // import {
// // // // //   Sidebar,
// // // // //   SidebarContent,
// // // // //   SidebarFooter,
// // // // //   SidebarHeader,
// // // // //   SidebarRail,
// // // // // } from "@/components/ui/sidebar";

// // // // // import { NavUser } from "@/components/nav-user";
// // // // // import NewChatButton from "@/modules/chat/components/new-chat-button";
// // // // // import { ChatList } from "@/modules/chat/components/chat-list";
// // // // // import { getChatsAction } from "@/modules/chat/actions/get-chats.action";

// // // // // const user = {
// // // // //   name: "Dipak",
// // // // //   email: "dipak@example.com",
// // // // //   avatar: "/avatars/user.jpg",
// // // // // };

// // // // // export async function AppSidebar({
// // // // //   ...props
// // // // // }: React.ComponentProps<typeof Sidebar>) {

// // // // //   const chats = await getChatsAction();

// // // // //   return (
// // // // //     <Sidebar collapsible="icon" {...props}>
// // // // //       <SidebarHeader>
// // // // //         <NewChatButton />
// // // // //       </SidebarHeader>

// // // // //       <SidebarContent>
// // // // //         <ChatList chats={chats} />
// // // // //       </SidebarContent>

// // // // //       <SidebarFooter>
// // // // //         <NavUser user={user} />
// // // // //       </SidebarFooter>

// // // // //       <SidebarRail />
// // // // //     </Sidebar>
// // // // //   );
// // // // // }


// // // // import * as React from "react";
// // // // import { MessageSquarePlus, Sparkles } from "lucide-react"; // Lucide Icons
// // // // import {
// // // //   Sidebar,
// // // //   SidebarContent,
// // // //   SidebarFooter,
// // // //   SidebarHeader,
// // // //   SidebarMenu,
// // // //   SidebarMenuButton,
// // // //   SidebarMenuItem,
// // // //   SidebarRail,
// // // //   useSidebar,
// // // // } from "@/components/ui/sidebar";

// // // // import { NavUser } from "@/components/nav-user";
// // // // import { ChatList } from "@/modules/chat/components/chat-list";
// // // // import { getChatsAction } from "@/modules/chat/actions/get-chats.action";
// // // // import Link from "next/link";
// // // // import NewChatButton from "@/modules/chat/components/new-chat-button";

// // // // const user = {
// // // //   name: "Dipak",
// // // //   email: "dipak@example.com",
// // // //   avatar: "/avatars/user.jpg",
// // // // };

// // // // export async function AppSidebar({
// // // //   ...props
// // // // }: React.ComponentProps<typeof Sidebar>) {
// // // //   const chats = await getChatsAction();

// // // //   return (
// // // //     <Sidebar collapsible="icon" {...props} className="border-r border-zinc-800 bg-zinc-950">
      
// // // //       {/* 1. SIDEBAR HEADER: Friday Logo & Name */}
// // // //       <SidebarHeader className="p-4">
// // // //         <SidebarMenu>
// // // //           <SidebarMenuItem>
// // // //             <div className="flex items-center gap-3 px-1.5 py-1">
// // // //               {/* Friday Teal Icon Box (image_default logo style) */}
// // // //               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A88F] text-white shadow-lg shadow-[#00A88F]/20 flex-shrink-0">
// // // //                 <Sparkles className="h-5 w-5 fill-white" />
// // // //               </div>
// // // //               {/* Text: Collapse thay tyare hidden thase */}
// // // //               <span className="font-serif text-xl font-semibold text-white tracking-wide group-data-[collapsible=icon]:hidden">
// // // //                 Friday
// // // //               </span>
// // // //             </div>
// // // //           </SidebarMenuItem>
// // // //         </SidebarMenu>
// // // //       </SidebarHeader>

// // // //       {/* 2. SIDEBAR CONTENT: New Chat Button & Recent List */}
// // // //       <SidebarContent className="px-2 gap-4">
// // // //         <SidebarMenu>
// // // //           {/* New Chat Action Row */}
// // // //           <SidebarMenuItem>
// // // //             <SidebarMenuButton 
// // // //               asChild 
// // // //               tooltip="New chat"
// // // //               className="w-full justify-start gap-3 rounded-xl py-6 px-3 hover:bg-zinc-900 text-zinc-200 hover:text-white transition-all"
// // // //             >
             
// // // //                 <MessageSquarePlus className="h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-white" />
// // // //                 <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
// // // //                   New chat
// // // //                 </span>
// // // //                   <NewChatButton />
          
// // // //             </SidebarMenuButton>
// // // //           </SidebarMenuItem>
// // // //         </SidebarMenu>

// // // //         {/* Recent Chats Section */}
// // // //         <div className="flex flex-col gap-1">
// // // //           <div className="px-3 py-1 text-xs font-semibold text-zinc-500 tracking-wider group-data-[collapsible=icon]:hidden">
// // // //             Recent Chats
// // // //           </div>
// // // //           <ChatList chats={chats} />
// // // //         </div>
// // // //       </SidebarContent>

// // // //       {/* 3. SIDEBAR FOOTER: User Profile */}
// // // //       <SidebarFooter className="p-2 border-t border-zinc-900">
// // // //         <NavUser user={user} />
// // // //       </SidebarFooter>

// // // //       <SidebarRail />
// // // //     </Sidebar>
// // // //   );
// // // // }
// // // import * as React from "react";
// // // import { Sparkles } from "lucide-react";
// // // import {
// // //   Sidebar,
// // //   SidebarContent,
// // //   SidebarFooter,
// // //   SidebarHeader,
// // //   SidebarMenu,
// // //   SidebarMenuItem,
// // //   SidebarRail,
// // // } from "@/components/ui/sidebar";

// // // import { NavUser } from "@/components/nav-user";
// // // import { ChatList } from "@/modules/chat/components/chat-list";
// // // import { getChatsAction } from "@/modules/chat/actions/get-chats.action";
// // // import NewChatButton from "@/modules/chat/components/new-chat-button";

// // // const user = {
// // //   name: "Dipak",
// // //   email: "dipak@example.com",
// // //   avatar: "/avatars/user.jpg",
// // // };

// // // export async function AppSidebar(
// // //   props: React.ComponentProps<typeof Sidebar>
// // // ) {
// // //   const chats = await getChatsAction();

// // //   return (
// // //     <Sidebar
// // //       collapsible="icon"
// // //       {...props}
// // //       className="border-r border-zinc-800 bg-zinc-950"
// // //     >
// // //       {/* Header */}
// // //       <SidebarHeader className="p-4">
// // //         <SidebarMenu>
// // //           <SidebarMenuItem>
// // //             <div className="flex items-center gap-3 px-1.5 py-1">
// // //               <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A88F] text-white shadow-lg shadow-[#00A88F]/20">
// // //                 <Sparkles className="h-5 w-5 fill-white" />
// // //               </div>

// // //               <span className="font-serif text-xl font-semibold text-white group-data-[collapsible=icon]:hidden">
// // //                 Friday
// // //               </span>
// // //             </div>
// // //           </SidebarMenuItem>
// // //         </SidebarMenu>
// // //       </SidebarHeader>

// // //       {/* Content */}
// // //       <SidebarContent className="px-2 gap-4">
// // //         {/* New Chat */}
// // //         <SidebarMenu>
// // //           <SidebarMenuItem>
// // //             <NewChatButton />
// // //           </SidebarMenuItem>
// // //         </SidebarMenu>

// // //         {/* Recent Chats */}
// // //         <div className="flex flex-col gap-1">
// // //           <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-500 group-data-[collapsible=icon]:hidden">
// // //             Recent Chats
// // //           </div>

// // //           <ChatList chats={chats} />
// // //         </div>
// // //       </SidebarContent>

// // //       {/* Footer */}
// // //       <SidebarFooter className="border-t border-zinc-900 p-2">
// // //         <NavUser user={user} />
// // //       </SidebarFooter>

// // //       <SidebarRail />
// // //     </Sidebar>
// // //   );
// // // }

// // import * as React from "react";
// // import { Sparkles } from "lucide-react";
// // import {
// // Sidebar,
// // SidebarContent,
// // SidebarFooter,
// // SidebarHeader,
// // SidebarMenu,
// // SidebarMenuItem,
// // SidebarRail,
// // } from "@/components/ui/sidebar";

// // import { NavUser } from "@/components/nav-user";
// // import { ChatList } from "@/modules/chat/components/chat-list";
// // import { getChatsAction } from "@/modules/chat/actions/get-chats.action";
// // import NewChatButton from "@/modules/chat/components/new-chat-button";
// // import { auth } from "@/auth";

// // export async function AppSidebar(
// // props: React.ComponentProps<typeof Sidebar>
// // ) {
// // const session = await auth();
// // const chats = await getChatsAction();

// // const user = {
// // name: session?.user?.name ?? "Guest",
// // email: session?.user?.email ?? "[guest@example.com](mailto:guest@example.com)",
// // avatar: session?.user?.image ?? "/avatars/user.jpg",
// // };

// // return (
// // <Sidebar
// // collapsible="icon"
// // {...props}
// // className="border-r border-zinc-800 bg-zinc-950"
// // >
// // {/* Header */} <SidebarHeader className="p-4"> <SidebarMenu> <SidebarMenuItem> <div className="flex items-center gap-3 px-1.5 py-1"> <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A88F] text-white shadow-lg shadow-[#00A88F]/20"> <Sparkles className="h-5 w-5 fill-white" /> </div>

// // ```
// //           <span className="font-serif text-xl font-semibold text-white group-data-[collapsible=icon]:hidden">
// //             Friday
// //           </span>
// //         </div>
// //       </SidebarMenuItem>
// //     </SidebarMenu>
// //   </SidebarHeader>

// //   {/* Content */}
// //   <SidebarContent className="px-2 gap-4">
// //     <SidebarMenu>
// //       <SidebarMenuItem>
// //         <NewChatButton />
// //       </SidebarMenuItem>
// //     </SidebarMenu>

// //     <div className="flex flex-col gap-1">
// //       <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-500 group-data-[collapsible=icon]:hidden">
// //         Recent Chats
// //       </div>

// //       <ChatList chats={chats} />
// //     </div>
// //   </SidebarContent>

// //   {/* Footer */}
// //   <SidebarFooter className="border-t border-zinc-900 p-2">
// //     <NavUser user={user} />
// //   </SidebarFooter>

// //   <SidebarRail />
// // </Sidebar>

// // );
// // }
// import * as React from "react";
// import { Sparkles, Plus } from "lucide-react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// import { NavUser } from "@/components/nav-user";
// import { ChatList } from "@/modules/chat/components/chat-list";
// import { getChatsAction } from "@/modules/chat/actions/get-chats.action";
// import NewChatButton from "@/modules/chat/components/new-chat-button";
// import { auth } from "@/auth";

// export async function AppSidebar(
//   props: React.ComponentProps<typeof Sidebar>
// ) {
//   const session = await auth();
//   const chats = await getChatsAction();

//   const user = {
//     name: session?.user?.name ?? "Guest",
//     email: session?.user?.email ?? "guest@example.com",
//     avatar: session?.user?.image ?? "/avatars/user.jpg",
//   };

//   return (
//     <Sidebar
//       collapsible="icon"
//       {...props}
//       className="border-r border-zinc-800 bg-zinc-950"
//     >
//       {/* Header */}
//       <SidebarHeader className="p-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <div className="flex items-center gap-3 px-1.5 py-1">
//               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#00A88F] text-white shadow-lg shadow-[#00A88F]/20">
//                 <Sparkles className="h-5 w-5 fill-white" />
//               </div>

//               <span className="font-serif text-xl font-semibold text-white group-data-[collapsible=icon]:hidden">
//                 Friday
//               </span>
//             </div>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>

//       {/* Content */}
//       <SidebarContent className="gap-4 px-2">
//         {/* Expanded: full New Chat button. Collapsed: icon-only button. */}
//         <SidebarMenu>
//           <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
//             <NewChatButton />
//           </SidebarMenuItem>
//           <SidebarMenuItem className="hidden group-data-[collapsible=icon]:block">
//             <SidebarMenuButton tooltip="New Chat" className="justify-center">
//               <Plus className="h-4 w-4" />
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>

//         {/* Chat list only makes sense expanded; hide entirely when collapsed to icons */}
//         <div className="flex flex-col gap-1 group-data-[collapsible=icon]:hidden">
//           <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-500">
//             Recent Chats
//           </div>

//           <ChatList chats={chats} />
//         </div>
//       </SidebarContent>

//       {/* Footer */}
//       <SidebarFooter className="border-t border-zinc-900 p-2">
//         <NavUser user={user} />
//       </SidebarFooter>

//       <SidebarRail />
//     </Sidebar>
//   );
// }

import * as React from "react";
import { Sparkles, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";
import { ChatList } from "@/modules/chat/components/chat-list";
import { getChatsAction } from "@/modules/chat/actions/get-chats.action";
import NewChatButton from "@/modules/chat/components/new-chat-button";
import { auth } from "@/auth";

export async function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const session = await auth();
  const chats = await getChatsAction();

  const user = {
    name: session?.user?.name ?? "Guest",
    email: session?.user?.email ?? "guest@example.com",
    avatar: session?.user?.image ?? "/avatars/user.jpg",
  };

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-r border-zinc-800 bg-zinc-950"
    >
      {/* Header */}
      <SidebarHeader className="p-3 sm:p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2.5 px-1 py-1 sm:gap-3 sm:px-1.5">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#00A88F] text-white shadow-lg shadow-[#00A88F]/20 sm:h-9 sm:w-9">
                <Sparkles className="h-4 w-4 fill-white sm:h-5 sm:w-5" />
              </div>

              <span className="truncate font-serif text-lg font-semibold text-white group-data-[collapsible=icon]:hidden sm:text-xl">
                Friday
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="gap-3 px-2 sm:gap-4">
        {/* Expanded: full New Chat button. Collapsed: icon-only button. */}
        <SidebarMenu>
          <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
            <NewChatButton />
          </SidebarMenuItem>
          <SidebarMenuItem className="hidden group-data-[collapsible=icon]:block">
            <SidebarMenuButton tooltip="New Chat" className="justify-center">
              <Plus className="h-4 w-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Chat list only makes sense expanded; hide entirely when collapsed to icons */}
        <div className="flex min-w-0 flex-col gap-1 group-data-[collapsible=icon]:hidden">
          <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-500">
            Recent Chats
          </div>

          <ChatList chats={chats} />
        </div>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-zinc-900 p-2">
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}