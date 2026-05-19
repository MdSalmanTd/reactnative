import { View, Text } from 'react-native'
import { Link } from "expo-router";

const Signin = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="mt-4 text-blue-500">
        Don't have an account? Sign Up
      </Link>
    </View>
  )
}

export default Signin