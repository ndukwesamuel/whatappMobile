import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-red-400" : ""
        }  p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          } rounded-full`}
        ></View>
      </View>
    );
  };

  const RenderOnboardingItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  const pages = [
    {
      backgroundColor: "#fff",

      image: (
        <Image
          source={{
            uri: "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg",
          }}
          className="w-72 h-72 object-contain"
        />
      ),
      title: "Onboarding",
      subtitle: "Done with React Native Onboarding Swiper",
    },
    // Add more pages as needed
  ];

  return (
    // <Onboarding
    //   onSkip={() => navigation.replace("Home")}
    //   onDone={() => navigation.replace("Home")}
    //   DotComponent={DotComponent}

    // />

    <Onboarding
      pages={pages}
      renderItem={RenderOnboardingItem}
      containerStyles={styles.onboardingContainer}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  onboardingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "left",
    marginTop: 10,
  },
});
