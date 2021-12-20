import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  FlatList,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Appbar } from "react-native-paper";

import DotIndicator from "../components/DotIndicator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import FoodCard from "../components/FoodCard";
import { horizontal } from "react-native-swiper-flatlist/src/themes";
import FoodListCard from "../components/FoodListCard";

function HomeScreen({ navigation }) {
  const dimensions = Dimensions.get("window");
  const width = dimensions.width;
  const scrollx = useRef(new Animated.Value(0)).current;
  const slideref = useRef(null);

  const [showListView, setShowListView] = useState(false);

  const data = [
    {
      key: 1,
      Image: require("../assets/AppIcon.jpeg"),
    },
    {
      key: 2,
      Image: require("../assets/AppIcon.jpeg"),
    },
    {
      key: 3,
      Image: require("../assets/AppIcon.jpeg"),
    },
    {
      key: 4,
      Image: require("../assets/AppIcon.jpeg"),
    },
  ];
  // imageUriData;

  const flatListData = [
    {
      id: 1,
      title: "Go Natural",
      status: "Closed",
    },
    {
      id: 2,
      title: "GiveMe 5",
      status: "Closed",
    },
    {
      id: 3,
      title: "Frozen Scoops",
      status: "Closed",
    },
    {
      id: 4,
      title: "Corn",
      status: "Closed",
    },
    {
      id: 5,
      title: "Preorder",
      status: "Closed",
    },
    {
      id: 6,
      title: "Preorder",
      status: "Opened",
    },
    {
      id: 7,
      title: "Preorder",
      status: "Closed",
    },
  ];

  const toggleView = () => {
    setShowListView(!showListView);
  };

  return (
    <Screen>
      <Appbar style={styles.appBar}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Coral" />
        <Appbar.Action
          icon={showListView ? "clipboard-list" : "format-list-bulleted"}
          onPress={toggleView}
        />
      </Appbar>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <SwiperFlatList
          data={data}
          index={0}
          showPagination
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            {
              useNativeDriver: false,
            }
          )}
          ref={slideref}
          PaginationComponent={() => (
            <DotIndicator data={data} scrollx={scrollx} />
          )}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={{ borderRadius: 20, flex: 1 }}>
              <Image
                style={{
                  borderRadius: 20,
                  width: width,
                  height: 200,
                  resizeMode: "contain",
                }}
                source={item.Image}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Food Courts</Text>

        {showListView ? (
          <View style={{ flex: 1, padding: 1 }}>
            <FlatList
              key={"_"}
              data={flatListData}
              keyExtractor={(flatListData) => flatListData.id.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}
                >
                  <FoodListCard title={item.title} status={item.status} />
                </View>
              )}
            />
          </View>
        ) : (
          <View style={{ flex: 1, padding: 1 }}>
            <FlatList
              key={"#"}
              data={flatListData}
              columnWrapperStyle={styles.row}
              keyExtractor={(flatListData) => flatListData.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <View
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}
                >
                  <FoodCard title={item.title} status={item.status} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  appBar: {
    backgroundColor: colors.darkRed,
    paddingTop:20,
    height:70
  },
  row: {
    flex: 0.5,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
