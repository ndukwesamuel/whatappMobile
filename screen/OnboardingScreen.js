import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      //   <View
      //     className={`w-4 h-1 mx-1 flex items-center justify-center  ${
      //       selected ? "border border-red-400" : ""
      //     }  p-2`}
      //   >
      <View
        className={`w-5 h-1 ${
          selected ? "bg-[#101312]" : "bg-[#D9DFDD]"
        } mx mx-2 `}
      ></View>
      //   </View>
    );
  };

  const RenderOnboardingItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.image} />
      <Text style={styles.title} className="text-[green] border-2">
        {item.title}
      </Text>
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
      title: "Buy in Group",
      subtitle: "Get better prices and maximize savings with group purchases!",
    },
    // Add more pages as needed
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
      title: "Shop in Your Comfort Zone",
      subtitle:
        "You have the freedom to explore a vast array of products right at your fingertips",
    },
    {
      backgroundColor: "#fff",
      image: (
        <Image
          source={{
            uri: "https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top",
          }}
          className="w-72 h-72 object-contain"
        />
      ),
      title: "Fast and Reliable Delivery",
      subtitle:
        "We ensure your orders are swiftly and securely transported to you.",
    },
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
      DotComponent={DotComponent}
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
    fontSize: 14,
    textAlign: "left",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "left",
    marginTop: 10,
  },
});
