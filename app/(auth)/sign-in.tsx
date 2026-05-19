import { View, Text } from 'react-native'
import { Link } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";


const SafeAreaView = styled(RNSafeAreaView);



const Signin = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="mt-4 text-blue-500">
        Don't have an account? Sign Up
      </Link>
    </SafeAreaView>
  )
}

export default Signin