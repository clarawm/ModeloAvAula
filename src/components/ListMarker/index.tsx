/*ARQUIVO PARA ALTERAR ALGUMA COISA DA LISTA DENTRO DO PAINEL COM AS BOLINHAS*/
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Marker } from "../Marker";

export interface ITextMarker {
    textMarker: string
}

export function ListMarker({textMarker}: ITextMarker) {
    return(
        <View style={styles.listMarker} >
            <Marker />
            <Text style={styles.textMarker}>{textMarker}</Text>
        </View>
    )
}