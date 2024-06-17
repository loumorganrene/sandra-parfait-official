import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FilmsTab from "@/components/profile/tabs/films-tab"
import SeriesTab from "@/components/profile/tabs/series-tab"
import PlaysTab from "@/components/profile/tabs/plays-tab"

function WorksTabs() {
  return (
    <Tabs defaultValue="films" className="w-full lg:px-60">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="films">Films</TabsTrigger>
        <TabsTrigger value="series">Series</TabsTrigger>
        <TabsTrigger value="plays">Plays</TabsTrigger>
      </TabsList>
      <TabsContent value="films">
        <FilmsTab />
      </TabsContent>
      <TabsContent value="series">
        <SeriesTab />
      </TabsContent>
      <TabsContent value="plays">
        <PlaysTab />
      </TabsContent>
    </Tabs>
  )
}

export default WorksTabs
