import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import React,{useState,useEffect, useRef} from 'react'
import GlobalAPI from '../../../utils/GlobalAPI';


export default function Banner() {
    const [banners, setBanners] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const screenWidth = Dimensions.get('window').width;
    
    const flatlistRef = useRef()

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = (scrollPosition / screenWidth)
        setActiveIndex(index);

        // console.log(index,Math.floor(index))
    }

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index:index,
    
    })


    useEffect(() => {
       let interval = setInterval(() => {
        // console.log(banners.length-1,activeIndex)
        if(Math.ceil(activeIndex) === banners.length-1){
            // console.log('lastindex',activeIndex)
            flatlistRef.current.scrollToIndex({index: 0,animation:true})
        }
        else{
          // console.log('index',activeIndex)
            flatlistRef.current.scrollToIndex({index: activeIndex + 1 ,animation:true})
        }
        },3000)
        return () => clearInterval(interval)

    })


    useEffect(() => {
      GlobalAPI.getBanners().then((res) => {
        setBanners(res?.banners)
      })
    }, [])


  return (
    <View >
      <FlatList 
        data={banners}
        onScroll={handleScroll}
        renderItem={
            ({item,index}) => (
                <View style={{ width: screenWidth,height:220,padding:16}}>
                <Image source={{uri:item?.image?.url}} style={styles.Image} />
                </View>
            )
        }
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
      />
    </View>
  )
}
const styles = StyleSheet.create({
bannerContainer:{
    marginTop:10,
  
},
imageContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    marginTop:10,
    width:'full',
    height:200,
},
Image:{
    width:'full',
    height:'100%',
    borderRadius:10

}
})