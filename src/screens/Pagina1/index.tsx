import React  from "react";
import { ImageBackground,View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ComponentListMarker, ComponentPageTitulo, ComponentPanelTitulo } from "../../components";
import { IPage } from "../../../App";

export function Pagina1({setPageI, pageNumber}: IPage) {
    /*PARA MUDAR A IMAGEM*/
    const imagem1 = require("../../assets/backpg1.png")
    const pagina1Lista = [
        {id: '1', text: 'Crie sua playlist'},
        {id: '2', text: 'Escolha não sei'},
        {id: '3', text: 'Utilize sei lá'},
    ]
    return (
        <ImageBackground source={imagem1} style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pageNumber={pageNumber} />
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Aplicativo para ouvir sua música preferida"/>
                <FlatList
                    data={pagina1Lista}
                    renderItem={({item})=>
                    <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    )
}