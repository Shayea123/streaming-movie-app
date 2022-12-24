import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [background, setBackground] = useState({
    // ضع هنا Api
    // لخفية الواجهه لكل فلم
    uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
    name: "Avengers: End Game",
    stat: "2019",
    rate: "7.5",
    type: "فلم",
    desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
  });

  const [gallery, setgallery] = useState([
    // ضع هنا Api
    // لعرض اللسته الافلام
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
      title: "Avengers: End Game",
      released: "2019",
      key: "1",
      rate: "7.5",
      type: "فلم",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA",
      desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      image:
        "https://www.joblo.com/wp-content/uploads/2013/08/frozen_xlg-1-400x600.jpg",
      title: "Frozen II",
      released: "2018",
      key: "2",
      rate: "8.5",
      type: "فلم",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA",
      desc: "Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P",
      title: "Alita: Battle Angel",
      released: "2022",
      key: "3",
      rate: "9.9",
      type: "مسلسل",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA",
      desc: "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
    },
    {
      image:
        "https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg",
      title: "The Irish Man",
      released: "2021",
      key: "4",
      rate: "4.5",
      type: "فلم",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA",
      desc: "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.",
    },
    {
      image:
        "https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg",
      title: "John Wick Chapter 3",
      released: "2020",
      key: "5",
      rate: "3.2",
      type: "مسلسل",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA",
      desc: "John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.",
    },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("Home Card pressed");
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              rate: item.rate,
              key: item.key,
              type: item.type,
              desc: item.desc,
              movieLink: item.link,
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      {/*----------------- Start------------------ */}

      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            {/* //--------- البحث ----------- */}

            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="أدخل أسم الفلم أو الرقم"
                placeholderTextColor="grey"
                style={styles.searchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#FBA400"
                style={styles.searchBoxIcon}
              />
            </View>

            {/* // ------------- الرأس ---------- */}

            <Text
              style={{
                color: "#FBA400",
                fontSize: 24,
                fontWeight: "bold",
                marginRight: 15,
                marginVertical: 10,
              }}
            >
              سهرة الليلة
            </Text>

            {/* // ------------ اللستة الافقية ----------- )أخر الافلام_ */}

            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                // ضع هنا Api
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>

            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieName}>{background.name}</Text>

                <View style={styles.infoUnderImgView}>
                  <Text style={styles.movieStat}>{background.stat}</Text>
                  <Text style={styles.movieStat}>{background.type}</Text>

                  <View style={styles.ratingView}>
                    <FontAwesome5
                      name="star"
                      size={22}
                      color="#FBA400"
                      // style={{ marginLeft: 4 }}
                    />
                    <Text style={styles.movieStat}>{background.rate}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => [
                  navigation.navigate("Theatre", { movieKey: background.key }, {movieLink: background.link}),
                  console.log(`play btn pressed code:${background.key}, Link: ${background.link}`)
                ]}
                style={styles.playIconContainer}
              >
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#FBA400"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021f3d",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#021f3d",
    height: 720,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    marginTop: "10%",
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  searchBox: {
    padding: 12,
    paddingLeft: "50%",
    fontSize: 16,
    textAlign: "center",
    color: "#FBA400",
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  Carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  playIconContainer: {
    backgroundColor: "#021f3d",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderWidth: 4,
    borderColor: "#FBA400",
    marginBottom: 14,
  },

  infoUnderImgView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingView: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 30,
    alignItems: "center",
  },
});

export default Home;