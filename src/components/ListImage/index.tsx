/*ARQUIVO PARA ALTERAR ALGUMA COISA DA LISTA DENTRO DO PAINEL COM AS BOLINHAS*/
import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";
import { Marker } from "../Marker";

export interface IText {
    text: string
    img: ImageSourcePropType
}

export function ListImage({text, img}: IText) {
    return(
        <View style={styles.list} >
            <Image source={img}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}