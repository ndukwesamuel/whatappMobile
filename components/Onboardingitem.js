import { View, Text, Image } from "react-native";
import React from "react";

const Onboardingitem = ({ item }) => {
  return (
    <View className=" justify-center items-center  flex-1">
      <View className="w-[80%]">
        <Image source={item.img} />
        <Text className=" font-bold text-2xl">{item.title}</Text>
        <Text className=" font-medium  text-[14px]">{item.description}</Text>
      </View>
    </View>
  );
};

export default Onboardingitem;
