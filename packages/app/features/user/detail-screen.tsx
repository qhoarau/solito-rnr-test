import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'react-native'
import { View } from 'react-native'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
