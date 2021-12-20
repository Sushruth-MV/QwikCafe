import React from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import colors from "../config/colors";

function DotIndicator({ data, scrollx }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View
      style={{
        flexDirection: "row",
        height: 20,
        alignSelf: "center",
        marginTop: 2,
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [9, 9, 9],
          extrapolate: "clamp",
        });

        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    // borderColor: colors.darkRed,
    backgroundColor: colors.darkRed,
    // borderWidth: 2,
    marginHorizontal: 6,
    marginTop: 4,
  },
});
export default DotIndicator;
