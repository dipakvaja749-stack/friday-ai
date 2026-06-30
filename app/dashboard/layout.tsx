// // import { AppSidebar } from "@/components/app-sidebar"
// // import {
// //   Breadcrumb,
// //   BreadcrumbItem,
// //   BreadcrumbLink,
// //   BreadcrumbList,
// //   BreadcrumbPage,
// //   BreadcrumbSeparator,
// // } from "@/components/ui/breadcrumb"
// // import { Separator } from "@/components/ui/separator"
// // import {
// //   SidebarInset,
// //   SidebarProvider,
// //   SidebarTrigger,
// // } from "@/components/ui/sidebar"

// // export default function DashboardLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <SidebarProvider>
// //       <AppSidebar />
// //       <SidebarInset>
// //         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
// //           <div className="flex items-center gap-2 px-4">
// //             <SidebarTrigger className="-ml-1" />
// //             <Separator
// //               orientation="vertical"
// //               className="mr-2 data-vertical:h-4 data-vertical:self-auto"
// //             />
// //             <Breadcrumb>
// //               <BreadcrumbList>
// //                 <BreadcrumbItem className="hidden md:block">
// //                   <BreadcrumbLink href="#">
// //                     Build Your Application
// //                   </BreadcrumbLink>
// //                 </BreadcrumbItem>
// //                 <BreadcrumbSeparator className="hidden md:block" />
// //                 <BreadcrumbItem>
// //                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
// //                 </BreadcrumbItem>
// //               </BreadcrumbList>
// //             </Breadcrumb>
// //           </div>
// //         </header>

// //         <div className="flex flex-1 flex-col p-4">
// //           {children}
// //         </div>
// //       </SidebarInset>
// //     </SidebarProvider>
// //   );
// // }

// import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset className="min-w-0">
//         <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:h-16">
//           <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-4">
//             <SidebarTrigger className="-ml-1 flex-shrink-0" />
//             <Separator
//               orientation="vertical"
//               className="mr-1 data-vertical:h-4 data-vertical:self-auto sm:mr-2"
//             />
//             <Breadcrumb className="min-w-0">
//               <BreadcrumbList className="flex-nowrap">
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Build Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem className="min-w-0">
//                   <BreadcrumbPage className="truncate">
//                     Data Fetching
//                   </BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>

//         <div className="flex flex-1 flex-col overflow-x-hidden p-2 sm:p-4">
//           {children}
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }
import { AppSidebar } from "@/components/app-sidebar";
import { StreamProvider } from "@/components/stream-context";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StreamProvider>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset className="min-w-0">
          <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:h-16">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-4">
              <SidebarTrigger className="-ml-1 flex-shrink-0" />

              <Separator
                orientation="vertical"
                className="mr-1 data-vertical:h-4 data-vertical:self-auto sm:mr-2"
              />

              <Breadcrumb className="min-w-0">
                <BreadcrumbList className="flex-nowrap">
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Build Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block" />

                  <BreadcrumbItem className="min-w-0">
                    <BreadcrumbPage className="truncate">
                      Data Fetching
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div className="flex flex-1 flex-col overflow-x-hidden p-2 sm:p-4">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </StreamProvider>
  );
}