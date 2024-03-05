import {
    Avatar as AvatarRoot,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
   
  export function Avatar() {
    return (
      <AvatarRoot className="p-2 border border-border">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </AvatarRoot>
    )
  }