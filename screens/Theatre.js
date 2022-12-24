import { StyleSheet, Text, View } from "react-native";


const Theatre = (props) => {
  // const route = useRoute();
  // const { movieLink } = route.params;
  console.log(props.movieLink);

  return (
    <View style={styles.container}>
      <Text style={{ color: "#FBA400", fontWeight: "bold" }}>المشاهدة</Text>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021f3d",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Theatre;