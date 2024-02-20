import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Color from "../../../utils/Color";
import { SelectList } from "react-native-dropdown-select-list";
import Swiper from "react-native-swiper";
import Carousel from "../../Components/Carousel/Carousel";
import TopDealsAPI from "../../../utils/TopDealsAPI";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useNavigation } from "@react-navigation/native";
import addToCart from "../CartScreen/addToCart";
import { useClerk } from "@clerk/clerk-react";
const ProductPage = ({ route }) => {
  const {user} = useClerk();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = React.useState("");
  const product = route.params.item;
  console.log(product)
  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  const navigation = useNavigation();

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.topContainer}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.carouselContainer}>
            <Swiper style={styles.wrapper} activeDotColor={Color.TER}>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image.url }}
                  style={styles.image}
                />
              ))}
            </Swiper>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.backButtonText}>
                <Ionicons name="arrow-back" size={24} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>
                <Ionicons name="share-social" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.name}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => handleQuantityChange(quantity - 1)}
                >
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  onPress={() => handleQuantityChange(quantity + 1)}
                >
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>{product?.description}</Text>
            {/* Product variants dropdown */}
            <SelectList
              search={false}
              setSelected={(val) => setSelected(val)}
              data={product?.variants}
              save="value"
            />
            <Carousel Heading="Similar Products" API={TopDealsAPI} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.priceBottom}>
          Price: ₹{(product.price * quantity).toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>addToCart(user.id,product,quantity)}>
          <Text style={styles.buttonText} >Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    // backgroundColor: Color.WHITE,
  },
  wrapper: {
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Color.TER,
  },
  topContainer: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingBottom: 5,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
  backButtonText: {
    color: Color.TER,
    fontSize: 12,
  },
  shareButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
    padding: 10,
  },
  shareButtonText: {
    color: Color.TER,
    fontSize: 12,
  },
  carouselContainer: {
    height: 300,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  quantityContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityButton: {
    borderRadius: 50,
    height: 29,
    width: 29,
    fontSize: 16,
    color: Color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: Color.TER,
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 10,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.TER,
    alignItems: "center",
    padding: 10,
  },
  priceBottom: {
    fontSize: 18,
  },
  button: {
    backgroundColor: Color.WHITE,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: Color.TER,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ProductPage;
