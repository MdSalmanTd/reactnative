import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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

      <Link href="/subscription/spotify" className="mt-4 bg-primary px-4 py-2 rounded text-white">
        Spotify Subscription
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }} className="mt-4 bg-primary px-4 py-2 rounded text-white">
        View All Subscriptions
      </Link>
    </View>
  );
}
