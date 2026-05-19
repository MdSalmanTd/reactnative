import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";


const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 bg-primary px-4 py-2 rounded text-white">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 bg-primary px-4 py-2 rounded text-white">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 bg-primary px-4 py-2 rounded text-white">
        Sign Up
      </Link>

      <Link href="/subscriptions" className="mt-4 bg-primary px-4 py-2 rounded text-white">
        View All Subscriptions
      </Link>
      </Link>
    </SafeAreaView>
  );
}
