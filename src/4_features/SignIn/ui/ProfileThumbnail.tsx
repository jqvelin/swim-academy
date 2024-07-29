import { Session } from "next-auth"
import Image from "next/image"
import { useMemo } from "react"

export const ProfileThumbnail = ({sessionData}: {sessionData: Session}) => {
    return <Image src={sessionData.user?.image ?? "/logo.png"} alt="Profile Thumbnail" width={40} height={40} className={"rounded-full"}  />
}