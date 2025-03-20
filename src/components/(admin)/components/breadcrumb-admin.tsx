'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"

import {
  ChevronRight 
} from "lucide-react"

import { usePathname } from 'next/navigation'

function generateBreadcrumbs(url: string) {
  const segments = url.split('/').filter(segment => segment); // Split and remove empty segments
  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    return (
      <BreadcrumbItem key={path}>
        <BreadcrumbLink href={path}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </BreadcrumbLink>
        {index < segments.length - 1 && <ChevronRight className="w-4 h-4 -mb-0.5 ml-1.5" />}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
    </Breadcrumb>
  );
}






export function BreadcrumbDemo() {

  return (
    generateBreadcrumbs(usePathname())
  )
}
