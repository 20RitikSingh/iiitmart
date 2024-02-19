import { View, StyleSheet, Text, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../../utils/Color'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import Customer from '../../../utils/Customer';
import { useToast } from "react-native-toast-notifications";


export default function ProfileMenu({ item }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const { user } = useUser();
    const toast = useToast();

    useEffect(() => {
        Customer.getUserbyId(user.id).then((res) => {
            // console.log(res.customer)
            if (res.customer != null) {
                onChangeText(res?.customer?.address);
                onChangeNumber(res?.customer?.number.toString());
            }
        })
    }, [])

    const addAddress = () => {
        if (text.length < 3) {
            toast.show("Address is too short", {
                type: "danger",
                placement: "bottom",
                duration: 3000,
                offset: 30,
                animationType: "slide-in",
                swipeEnabled: true,
                textStyle: { fontSize: 14, color: Color.WHITE },
                successColor: "#c8446bb5",
            });
        } else if (number.length != 10) {
            toast.show("Please enter a valid number", {
                type: "danger",
                placement: "bottom",
                duration: 3000,
                offset: 30,
                animationType: "slide-in",
                swipeEnabled: true,
                textStyle: { fontSize: 14, color: Color.WHITE },
                successColor: "#c8446bb5",
            });
        } else {
            Customer.getUserbyId(user.id).then((res) => {
                // console.log(res.customer)
                if (res.customer != null) {
                    // console.log("user exist")
                    Customer.updateUser(text, number, user.id).then((res) => { console.log(res) }).catch((err) => { console.log(err) })
                    toast.show("Address Updated Successfully", {
                        type: "success",
                        placement: "bottom",
                        duration: 2000,
                        offset: 30,
                        animationType: "slide-in",
                        swipeEnabled: true,
                        textStyle: { fontSize: 14, color: Color.WHITE },
                        successColor: "#6ccd69a5",
                    });
                    setModalVisible(false)
                } else {
                    Customer.createUser(text, user.id, user.fullName, number).then((res) => {
                        // console.log(res)
                        toast.show("Address Updated Successfully", {
                            type: "success",
                            placement: "bottom",
                            duration: 2000,
                            offset: 30,
                            animationType: "slide-in",
                            swipeEnabled: true,
                            textStyle: { fontSize: 14, color: Color.WHITE },
                            successColor: "#6ccd69a5",
                        });
                        setModalVisible(false)
                    }).catch((err) => { console.log("Error: ", err) });
                }
            }).catch((err) => console.log("Error: " + err))

        }
    }

    
    return (
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
            <View style={styles.innerCont}>
                <FontAwesome name={item.icon} size={27} color={Color.PRIMARY} />
                <Text style={{ fontSize: 16, color: Color.PRIMARY, fontWeight: 600 }} >{item.name}</Text>
                <FontAwesome name="angle-right" size={27} color={Color.PRIMARY} />
            </View>
            {item.press == 'addAddress' &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHead}>
                                <Text style={styles.modalText}>Update your Address</Text>
                                <Pressable
                                    style={styles.buttonClose}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <AntDesign name="close" size={24} color="black" />
                                </Pressable>
                            </View>
                            <View style={{ width: '95%' }}>
                                {/* <TextInput selectionColor={Color.PRIMARY} placeholder='Search' placeholderTextColor={Color.PRIMARY} style={styles.addressText} /> */}
                                <Text style={styles.label}>Address</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    placeholder="Enter Address"
                                    value={text}
                                />
                                <Text style={styles.label}>Phone No.</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder="Enter Number"
                                    keyboardType="numeric"
                                />

                            </View>
                            <View style={styles.btnCont}>
                                <Pressable
                                    style={styles.buttonAdd}
                                    onPress={addAddress}>
                                    <Text style={styles.textStyle}>Save Address</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '5%',
        backgroundColor: Color.WHITE,
        // backgroundColor:'#FFA07A'


    },
    innerCont: {
        width: '90%',
        backgroundColor: Color.LIGHT_GREY,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingBottom: 10,
        paddingHorizontal: 5,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        // backgroundColor: Color.LIGHT_GREY,
        color: Color.GREY,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    buttonAdd: {
        borderRadius: 4,
        padding: 10,
        elevation: 4,
        width:'100%',
        backgroundColor: Color.TER,
        marginTop:-15
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        paddingHorizontal: 15,
    },
    btnCont: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        padding: 20
    },
    label: {
        marginLeft: 12,
        // backgroundColor:'#ff0000b2',
        marginBottom: -13,
        color: Color.GREY
    },
    modalHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    }
})