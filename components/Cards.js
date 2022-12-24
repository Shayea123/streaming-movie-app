import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => [
        navigation.navigate("Theatre", { movieKey: props.key }, { movieLink: props.movieLink}),
        console.log(`Card pressed in List Movie code : ${props.code}, Link: ${props.movieLink}`),

      ]}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: props.image }}
          style={{
            height: 270,
            width: 170,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View
          style={{
            position: "absolute",
            height: 5,
            width: "100%",
            backgroundColor: "#FBA400",
            opacity: 0.8,
          }}
        ></View>
        <View>
          <Text style={styles.codetext}>{props.key}</Text>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.movieReleaseDate}>{props.released}</Text>
          <Text style={styles.ratingText}>{props.rate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 10,
    marginBottom: 10,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  movieReleaseDate: {
    color: "#fff",
    fontSize: 12,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
  },
  codetext: {
    position: "absolute",
    paddingTop: "45%",
    paddingleft: "45%",
    alignSelf: "center",
    opacity: 0.9,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Cards;
