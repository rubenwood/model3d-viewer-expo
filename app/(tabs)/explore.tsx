import { Button, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";
import { Box } from "lucide-react-native";

type ModelListItem = {
  id: string;
  name: string;
  filename: string;
};
const MODEL_LIST: ModelListItem[] = [
  {
    id: "test-cube",
    name: "Test Cube",
    filename: "TestCube2.glb",
  },
  {
    id: "test-model",
    name: "Test Model",
    filename: "TestModel2.glb",
  },
];

export function ModelList() {
  const setModel = (model: ModelListItem) => {
    console.log(model.name);
  };

  return MODEL_LIST.map((model) => (
    <View key={`model-${model.id}`}>
      <Button title={model.name} onPress={() => setModel(model)} />
      <ThemedText>{"\n"}</ThemedText>
    </View>
  ));
}

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1a1a1a", dark: "#0d0d0d" }}
      headerImage={
        <Box size={200} style={styles.headerImage} />
        // <IconSymbol
        //   size={300}
        //   color="#97fb57"
        //   name="chevron.left.forwardslash.chevron.right"
        //   style={styles.headerImage}
        // />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </ThemedText>
      </ThemedView>
      <ThemedText>Below you can see a list of models.</ThemedText>
      <ModelList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#97fb57",
    bottom: -5,
    left: 15,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
