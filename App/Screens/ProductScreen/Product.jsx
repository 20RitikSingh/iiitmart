const product = {
  title: "Sample Product",
  price: 49.99,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices libero.",
  images: [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjrvapDrgxJgMIptpCakPBYqh_ujI6nWQug&usqp=CAU",
  ],
  variants: ["Small", "Medium", "Large"],
};
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
import { Ionicons } from '@expo/vector-icons';
import SearchBar from "../../Components/SearchBar/SearchBar";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = React.useState("");

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
       <SearchBar/>
      <View style={styles.topContainer}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.carouselContainer}>
            <Swiper style={styles.wrapper} activeDotColor={Color.TER}>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.image}
                />
              ))}
            </Swiper>
            <TouchableOpacity style={styles.backButton} onPress={{}}>
          <Text style={styles.backButtonText}><Ionicons name="arrow-back" size={24} /></Text>
        </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}><Ionicons name="share-social" size={20} /></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.title}</Text>
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
            <Text style={styles.description}>{product.description}</Text>
            {/* Product variants dropdown */}
            <SelectList
              search={false}
              setSelected={(val) => setSelected(val)}
              data={product.variants}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
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
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'transparent',
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
