import dynamic from "next/dynamic"

const MapCluster = dynamic(() => import("../Component/Map"), { ssr:false })

export default function Home() {
  return (
    <>
            <MapCluster/>
        </>
  )
}


