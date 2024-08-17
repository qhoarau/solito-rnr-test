'use client'
import { Text, View } from 'react-native'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from 'app/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from 'app/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'app/components/ui/tooltip'
import { Info } from 'app/lib/icons/Info'
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from 'react-native-reanimated'
import { Button } from 'app/components/ui/button'
import { Progress } from 'app/components/ui/progress'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'app/components/ui/accordion'
export function HomeScreen() {
  const [progress, setProgress] = useState(78)

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <View className="bg-secondary/30 flex-1 items-center justify-center gap-5 p-6">
        <Card className="w-full max-w-sm rounded-2xl p-6">
          <CardHeader className="items-center">
            <Avatar alt="Rick Sanchez's Avatar" className="h-24 w-24">
              <AvatarImage source={{ uri: '' }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />
            <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
            <View className="flex-row">
              <CardDescription className="text-base font-semibold">
                Scientist
              </CardDescription>
              <Tooltip delayDuration={150}>
                <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                  <Info
                    size={14}
                    strokeWidth={2.5}
                    className="text-foreground/70 h-4 w-4"
                  />
                </TooltipTrigger>
                <TooltipContent className="px-4 py-2 shadow">
                  <Text className="native:text-lg">Freelance</Text>
                </TooltipContent>
              </Tooltip>
            </View>
          </CardHeader>
          <CardContent>
            <View className="!flex-row-auto flex-row justify-around gap-3 ">
              <View className="items-center">
                <Text className="text-muted-foreground text-sm">Dimension</Text>
                <Text className="text-xl font-semibold">C-137</Text>
              </View>
              <View className="items-center">
                <Text className="text-muted-foreground text-sm">Age</Text>
                <Text className="text-xl font-semibold">70</Text>
              </View>
              <View className="items-center">
                <Text className="text-muted-foreground text-sm">Species</Text>
                <Text className="text-xl font-semibold">Human</Text>
              </View>
            </View>
          </CardContent>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-muted-foreground text-sm">
                Productivity:
              </Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="w-11 items-center"
                >
                  <Text className="text-sm font-bold text-sky-600">
                    {progress}%
                  </Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress value={progress} className="web:w-[60%]" />
            <View />
            <Button
              variant="outline"
              className="shadow-foreground/5 shadow"
              onPress={updateProgressValue}
            >
              <Text>Update</Text>
            </Button>
          </CardFooter>
        </Card>
      </View>
      <View className="flex-1 items-center justify-center p-6">
        <Accordion
          type="multiple"
          collapsible
          defaultValue={['item-1']}
          className="native:max-w-md w-full max-w-sm"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Text>Is it accessible?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Text>What are universal components?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>
                In the world of React Native, universal components are
                components that work on both web and native platforms.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <Text>Is this component universal?</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text>Yes. Try it out on the web, iOS, and/or Android.</Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </View>
    </>
  )
}
