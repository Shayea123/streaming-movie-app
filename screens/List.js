import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Cards from "../components/Cards";


const List = (props) => {
  const [list, setList] = useState([
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
      title: "Avengers: End Game",
      released: "2019",
      key: "1",
      type: "فلم",
      rate: "7.5",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://www.joblo.com/wp-content/uploads/2013/08/frozen_xlg-1-400x600.jpg",
      title: "Frozen II",
      released: "2019",
      key: "2",
      type: "فلم",
      rate: "8.5",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P",
      title: "Alita: Battle Angel",
      released: "2019",
      key: "3",
      type: "مسلسل",
      rate: "9.9",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg",
      title: "The Irish Man",
      released: "2019",
      key: "4",
      type: "فلم",
      rate: "4.5",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg",
      title: "John Wick Chapter 3",
      released: "2019",
      key: "5",
      type: "مسلسل",
      rate: "3.2",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/11/troll-movie.png?ssl=1",
      title: "Troll",
      released: "2022",
      key: "7",
      type: "مسلسل",
      rate: "5.8",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/smile/images/regions/us/onesheet.jpg",
      title: "Smile",
      released: "2022",
      key: "8",
      type: "فلم",
      rate: "8.0",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg",
      title: "Bohemian Rhapsody",
      released: "2021",
      key: "9",
      type: "فلم",
      rate: "5.0",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/6305a9e8ed76d5fa485ac16637655cf7/bcc68be4-eede-409b-a63d-e179b28d19b4.webp?h=375&resize=fit&w=250",
      title: "Cover",
      released: "2015",
      key: "10",
      type: "فلم",
      rate: "7.2",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/bd0348a702c0da2395208d5f98418637/d8962bf3-bd27-4ee3-bda6-949d48f1b819.webp?h=375&resize=fit&w=250",
      title: "Deceit",
      released: "2004",
      key: "11",
      type: "فلم",
      rate: "2.8",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/cf3eda26c5febbc8281fe4f5bdf6e82e/242af0d1-5398-4281-9273-ba52c7e3efee.webp?h=375&resize=fit&w=250",
      title: "The Banshees of Inisherin",
      released: "2022",
      key: "12",
      type: "فلم",
      rate: "5.4",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/55199ffe1bc6b7c6e25573da02f30a07/e307f514-ce5c-4b16-baa7-a08e764a64c5.webp?h=375&resize=fit&w=250",
      title: "Tiger",
      released: "2022",
      key: "13",
      type: "مسلسل",
      rate: "5.0",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/b9fcd39ba96bd2a06653a83e1ef66e45/aa1e865d-d66c-40c5-a188-23a65dfcb7ff.webp?h=375&resize=fit&w=250",
      title: "R.I.P.D.2",
      released: "2019",
      key: "14",
      type: "مسلسل",
      rate: "3.2",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/00bd256b1e3c1aee37dbca5e130a3787/128f2d42-92df-4810-aaa9-d3225e1d0548.webp?h=375&resize=fit&w=250",
      title: "Halloween Ends",
      released: "2022",
      key: "15",
      type: "مسلسل",
      rate: "5.8",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/25a4e49d0596009864adb4673c235166/6dfb7f62-d551-4967-8201-f765b72e5572.webp?h=375&resize=fit&w=250",
      title: "violent night",
      released: "2022",
      key: "16",
      type: "فلم",
      rate: "8.0",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
    {
      image:
        "https://images.moviesanywhere.com/946fd4e6c6cfaf73c290f1a7b0c7028a/8d08be10-321a-4e0e-b8cc-b5614254d1ab.webp?h=375&resize=fit&w=250",
      title: "aqua teen forever plantasm",
      released: "2021",
      key: "17",
      type: "فلم",
      rate: "5.0",
      link:"https://disk.yandex.com/i/OY19eGjtOSv_KA"
    },
  ]);


  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.carouselContentContainer}>
      {/* // ---------------------لستة الافلام------------------- */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        {/* <Text style={{ color: "#FBA400", fontSize: 20, fontWeight: "bold" }}>
          قائمة الافلام
        </Text> */}
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <FlatList
        style={styles.FlatListMovies}
        numColumns={2}
        //ضع الAPI لقائمة الافلام
        data={list}
        renderItem={({ item }) => {
          return (
            <Cards
              title={item.title}
              image={item.image}
              release={item.released}
              rating={item.rate}
              type={item.type}
              code={item.key}
              movieLink={item.link}
            ></Cards>
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#021f3d",
    height: 720,
    paddingHorizontal: 14,
  },
  FlatListMovies: {
    marginBottom: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  movieInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  movieReleaseDate: {
    color: "#fff",
    fontSize: 14,
  },
});

export default List;